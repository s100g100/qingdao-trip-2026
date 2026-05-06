import type { Day } from '../types'
import { PlaceCard } from './PlaceCard'

export function DayCard({ day }: { day: Day }) {
  return (
    <section className="rounded-2xl bg-slate-900/70 p-4 ring-1 ring-white/5">
      <header className="mb-3 flex items-baseline justify-between">
        <h2 className="text-lg font-semibold text-slate-100">{day.label}</h2>
        <span className="text-xs tabular-nums text-slate-400">{day.date}</span>
      </header>
      <ul className="space-y-2">
        {day.places.map((p) => (
          <PlaceCard key={p.id} place={p} />
        ))}
      </ul>
    </section>
  )
}
