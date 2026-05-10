import { useEffect, useState } from 'react'
import {
  Plane,
  UtensilsCrossed,
  Camera,
  Coffee,
  ShoppingBag,
  BedDouble,
  MapPin,
} from 'lucide-react'
import type { Category, Place } from '../types'

function buildMapUrl(place: Place): string {
  if (place.mapUrl) return place.mapUrl
  const query = place.address ?? `${place.name} 칭다오`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

const ICONS = {
  transport: Plane,
  meal: UtensilsCrossed,
  sight: Camera,
  cafe: Coffee,
  shopping: ShoppingBag,
  lodging: BedDouble,
} as const

const ICON_COLORS: Record<Category, string> = {
  transport: 'from-sky-400/40 to-sky-500/10 text-sky-200 ring-sky-300/30',
  meal: 'from-amber-400/40 to-amber-500/10 text-amber-100 ring-amber-300/30',
  sight: 'from-emerald-400/40 to-emerald-500/10 text-emerald-100 ring-emerald-300/30',
  cafe: 'from-rose-400/40 to-rose-500/10 text-rose-100 ring-rose-300/30',
  shopping: 'from-violet-400/40 to-violet-500/10 text-violet-100 ring-violet-300/30',
  lodging: 'from-slate-400/40 to-slate-500/10 text-slate-100 ring-slate-300/30',
}

const LABEL: Record<Category, string> = {
  transport: '이동',
  meal: '식사',
  sight: '관광',
  cafe: '카페',
  shopping: '쇼핑',
  lodging: '숙소',
}

export function PlaceCard({ place }: { place: Place }) {
  const Icon = ICONS[place.category]
  const storageKey = `note:${place.id}`
  const [note, setNote] = useState('')
  const [open, setOpen] = useState(false)
  const hasMap = place.category !== 'transport'
  const mapUrl = hasMap ? buildMapUrl(place) : null

  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) setNote(saved)
  }, [storageKey])

  return (
    <li className="relative flex gap-3">
      <div
        className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ring-1 backdrop-blur-sm ${ICON_COLORS[place.category]}`}
      >
        <Icon size={14} strokeWidth={2.25} />
      </div>

      <div className="min-w-0 flex-1 rounded-2xl bg-white/[0.06] p-3.5 ring-1 ring-white/10 backdrop-blur-md transition hover:bg-white/[0.09]">
        <div className="flex items-center gap-1.5 text-[11px]">
          <span className="rounded-md bg-white/5 px-1.5 py-0.5 font-medium uppercase tracking-wider text-slate-300">
            {LABEL[place.category]}
          </span>
          {place.time && (
            <span className="text-slate-400">· {place.time}</span>
          )}
        </div>
        {mapUrl ? (
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1.5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-slate-50 underline decoration-teal-400/40 decoration-2 underline-offset-4 transition hover:decoration-teal-300"
          >
            <span>{place.name}</span>
            <MapPin
              size={13}
              className="shrink-0 text-teal-300/80"
              strokeWidth={2.25}
              aria-label="지도에서 열기"
            />
          </a>
        ) : (
          <h3 className="mt-1.5 text-[15px] font-semibold text-slate-50">
            {place.name}
          </h3>
        )}
        {place.note && (
          <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
            {place.note}
          </p>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="mt-2 text-[11px] font-medium text-teal-300/80 hover:text-teal-200"
        >
          {open ? '메모 닫기' : note ? `메모 (${note.length}자)` : '메모 추가'}
        </button>

        {open && (
          <textarea
            value={note}
            onChange={(e) => {
              setNote(e.target.value)
              localStorage.setItem(storageKey, e.target.value)
            }}
            placeholder="자유 메모"
            className="mt-2 block w-full resize-none rounded-lg bg-black/30 px-2.5 py-2 text-sm text-slate-100 ring-1 ring-white/5 placeholder:text-slate-500 focus:outline-none focus:ring-teal-400/60"
            rows={3}
          />
        )}
      </div>
    </li>
  )
}
