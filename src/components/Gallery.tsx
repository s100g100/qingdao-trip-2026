import { useEffect, useRef, useState } from 'react'
import { Images, Loader2, Upload, X } from 'lucide-react'
import { listPhotos, uploadPhoto, type Photo } from '../lib/photos'
import { supabaseConfigured } from '../lib/config'
import { getName } from '../lib/access'

export function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState({ done: 0, total: 0 })
  const [error, setError] = useState<string | null>(null)
  const [lightbox, setLightbox] = useState<Photo | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  async function refresh() {
    setLoading(true)
    try {
      const items = await listPhotos()
      setPhotos(items)
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (supabaseConfigured) refresh()
    else setLoading(false)
  }, [])

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return
    const uploader = getName() || 'anon'
    setUploading(true)
    setError(null)
    setProgress({ done: 0, total: files.length })
    for (let i = 0; i < files.length; i++) {
      try {
        await uploadPhoto(files[i], uploader)
        setProgress({ done: i + 1, total: files.length })
      } catch (e) {
        setError(
          `업로드 실패: ${e instanceof Error ? e.message : String(e)}`,
        )
        break
      }
    }
    setUploading(false)
    if (inputRef.current) inputRef.current.value = ''
    await refresh()
  }

  if (!supabaseConfigured) {
    return (
      <div className="rounded-3xl bg-white/[0.04] p-6 text-sm text-slate-300 ring-1 ring-white/10">
        사진 기능을 쓰려면 Supabase 환경 변수(<code className="rounded bg-black/30 px-1">VITE_SUPABASE_URL</code>,{' '}
        <code className="rounded bg-black/30 px-1">VITE_SUPABASE_ANON_KEY</code>)가 필요해.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-slate-50">
          갤러리 <span className="text-sm font-normal text-slate-500">({photos.length})</span>
        </h2>
        <button
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex items-center gap-1.5 rounded-xl bg-gradient-to-br from-teal-400 to-sky-500 px-3.5 py-2 text-sm font-semibold text-slate-950 ring-1 ring-white/20 transition hover:brightness-110 disabled:opacity-50"
        >
          {uploading ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              {progress.done}/{progress.total}
            </>
          ) : (
            <>
              <Upload size={14} />
              사진 올리기
            </>
          )}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {error && (
        <div className="rounded-xl bg-rose-500/10 px-3 py-2 text-xs text-rose-200 ring-1 ring-rose-400/30">
          {error}
        </div>
      )}

      {loading && photos.length === 0 ? (
        <div className="grid place-items-center py-12 text-slate-500">
          <Loader2 size={20} className="animate-spin" />
        </div>
      ) : photos.length === 0 ? (
        <div className="grid place-items-center rounded-3xl bg-white/[0.03] py-16 ring-1 ring-white/10">
          <Images size={28} className="text-slate-600" />
          <p className="mt-2 text-sm text-slate-500">
            아직 사진이 없어. 첫 번째 사진을 올려봐.
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-3 gap-1.5 sm:grid-cols-4 md:grid-cols-5">
          {photos.map((p) => (
            <li key={p.name}>
              <button
                onClick={() => setLightbox(p)}
                className="group relative block aspect-square w-full overflow-hidden rounded-lg bg-slate-800/60 ring-1 ring-white/5"
              >
                <img
                  src={p.url}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <span className="absolute bottom-1 left-1 rounded-md bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                  {p.uploader}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white ring-1 ring-white/20 backdrop-blur-md hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox(null)
            }}
            aria-label="닫기"
          >
            <X size={18} />
          </button>
          <img
            src={lightbox.url}
            alt=""
            className="max-h-full max-w-full rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute right-4 bottom-4 left-4 mx-auto max-w-md rounded-xl bg-black/40 p-3 text-sm text-white ring-1 ring-white/10 backdrop-blur-md">
            <span className="font-semibold">{lightbox.uploader}</span>
            {lightbox.createdAt && (
              <span className="ml-2 text-slate-400">
                · {new Date(lightbox.createdAt).toLocaleString('ko-KR')}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
