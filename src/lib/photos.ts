import { PHOTOS_BUCKET } from './config'
import { resizeImage } from './imageResize'
import { getSupabase } from './supabase'

export type Photo = {
  name: string
  url: string
  uploader: string
  createdAt: string
}

const NAME_RE = /^(\d+)__([0-9a-f]*)__([a-z0-9]+)\.jpg$/

function hexEncode(s: string): string {
  const bytes = new TextEncoder().encode(s.slice(0, 24))
  let out = ''
  for (const b of bytes) out += b.toString(16).padStart(2, '0')
  return out
}

function hexDecode(hex: string): string {
  if (!hex) return 'anon'
  try {
    const len = hex.length / 2
    const bytes = new Uint8Array(len)
    for (let i = 0; i < len; i++) {
      bytes[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16)
    }
    const decoded = new TextDecoder().decode(bytes)
    return decoded || 'anon'
  } catch {
    return 'anon'
  }
}

function makePath(uploader: string): string {
  const ts = Date.now()
  const rand = Math.random().toString(36).slice(2, 8)
  const hex = hexEncode(uploader.trim())
  return `${ts}__${hex}__${rand}.jpg`
}

function parseUploader(name: string): string {
  const m = name.match(NAME_RE)
  return m ? hexDecode(m[2]) : 'anon'
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

export async function deletePhoto(name: string): Promise<void> {
  const sb = getSupabase()
  if (!sb) throw new Error('Supabase 미설정')
  const { error } = await sb.storage.from(PHOTOS_BUCKET).remove([name])
  if (error) throw new Error(error.message)
}

export function getDownloadUrl(name: string, downloadAs: string): string {
  const sb = getSupabase()
  if (!sb) return ''
  const { data } = sb.storage
    .from(PHOTOS_BUCKET)
    .getPublicUrl(name, { download: downloadAs })
  return data.publicUrl
}

export function makeDownloadFilename(photo: Photo): string {
  const tsStr = photo.name.split('__')[0]
  const ts = Number(tsStr)
  const date = Number.isFinite(ts)
    ? new Date(ts).toISOString().slice(0, 10)
    : 'unknown'
  const safe = photo.uploader.replace(/[^\p{L}\p{N}_-]/gu, '') || 'anon'
  return `qingdao_${date}_${safe}.jpg`
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
