import { useEffect, useState } from 'react'
import type { Category, Place } from '../types'

const categoryColor: Record<Category, string> = {
  transport: 'bg-sky-500/15 text-sky-300',
  meal: 'bg-amber-500/15 text-amber-300',
  sight: 'bg-emerald-500/15 text-emerald-300',
  cafe: 'bg-rose-500/15 text-rose-300',
  shopping: 'bg-violet-500/15 text-violet-300',
  lodging: 'bg-slate-500/15 text-slate-300',
}

const categoryLabel: Record<Category, string> = {
  transport: '이동',
  meal: '식사',
  sight: '관광',
  cafe: '카페',
  shopping: '쇼핑',
  lodging: '숙소',
}

export function PlaceCard({ place }: { place: Place }) {
  const storageKey = `note:${place.id}`
  const [note, setNote] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) setNote(saved)
  }, [storageKey])

  return (
    <li className="rounded-xl bg-slate-800/60 p-3">
      <div className="flex items-center gap-2">
        <span className={`rounded-md px-2 py-0.5 text-xs font-medium ${categoryColor[place.category]}`}>
          {categoryLabel[place.category]}
        </span>
        {place.time && <span className="text-xs text-slate-400">{place.time}</span>}
      </div>
      <h3 className="mt-1.5 text-base font-medium text-slate-100">{place.name}</h3>
      {place.note && <p className="mt-0.5 text-sm text-slate-400">{place.note}</p>}
      <textarea
        value={note}
        onChange={(e) => {
          setNote(e.target.value)
          localStorage.setItem(storageKey, e.target.value)
        }}
        placeholder="메모 (자동 저장)"
        className="mt-2 block w-full resize-none rounded-md bg-slate-900/70 px-2.5 py-1.5 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400/60"
        rows={2}
      />
    </li>
  )
}
