import { PHOTOS_BUCKET } from './config'
import { resizeImage } from './imageResize'
import { getSupabase } from './supabase'

export type Photo = {
  name: string
  url: string
  uploader: string
  createdAt: string
}

const NAME_RE = /^(\d+)~~(.+)~~([a-z0-9]+)\.jpg$/

function safeName(s: string): string {
  return s.replace(/[/\\?#&~]/g, '').slice(0, 24) || 'anon'
}

function makePath(uploader: string): string {
  const ts = Date.now()
  const rand = Math.random().toString(36).slice(2, 8)
  return `${ts}~~${safeName(uploader)}~~${rand}.jpg`
}

function parseUploader(name: string): string {
  return name.match(NAME_RE)?.[2] ?? 'anon'
}

export async function uploadPhoto(
  file: File,
  uploader: string,
): Promise<void> {
  const sb = getSupabase()
  if (!sb) throw new Error('Supabase 미설정')
  const blob = await resizeImage(file)
  const path = makePath(uploader)
  const { error } = await sb.storage.from(PHOTOS_BUCKET).upload(path, blob, {
    contentType: 'image/jpeg',
    upsert: false,
  })
  if (error) throw new Error(error.message)
}

export async function listPhotos(): Promise<Photo[]> {
  const sb = getSupabase()
  if (!sb) return []
  const { data, error } = await sb.storage.from(PHOTOS_BUCKET).list('', {
    limit: 200,
    sortBy: { column: 'created_at', order: 'desc' },
  })
  if (error || !data) return []
  return data
    .filter((f) => f.id !== null)
    .map((f) => {
      const { data: pub } = sb.storage
        .from(PHOTOS_BUCKET)
        .getPublicUrl(f.name)
      return {
        name: f.name,
        url: pub.publicUrl,
        uploader: parseUploader(f.name),
        createdAt: f.created_at ?? '',
      }
    })
}
