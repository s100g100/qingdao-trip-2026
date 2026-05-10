import type { Day } from '../types'
import { PlaceCard } from './PlaceCard'

export function DayCard({
  day,
  dayNumber,
}: {
  day: Day
  dayNumber: number
}) {
  const subLabel = day.label.includes('·')
    ? day.label.split('·')[1]?.trim()
    : day.label

  return (
    <section className="rounded-3xl bg-white/[0.04] p-5 ring-1 ring-white/10 backdrop-blur-xl md:p-6">
      <header className="mb-5 flex items-baseline justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] font-bold tracking-[0.25em] text-teal-300/80">
            DAY {dayNumber}
          </p>
          <h2 className="mt-1 truncate text-lg font-semibold text-slate-50">
            {subLabel}
          </h2>
        </div>
        <span className="shrink-0 text-xs tabular-nums text-slate-400">
          {day.date.slice(5).replace('-', '.')}
        </span>
      </header>

      <ol className="relative space-y-3.5">
        <div
          aria-hidden
          className="pointer-events-none absolute top-4 bottom-4 left-4 w-px bg-gradient-to-b from-teal-400/40 via-white/10 to-transparent"
        />
        {day.places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </ol>

      {day.cost && (
        <div className="mt-5 rounded-2xl border border-teal-400/15 bg-teal-500/5 p-4">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-300/80">
              💰 1인 예상 경비
            </h3>
            <div className="text-right tabular-nums">
              <div className="text-base font-bold text-slate-50">
                {day.cost.perPerson}
              </div>
              {day.cost.perPersonKrw && (
                <div className="text-[11px] text-slate-400">
                  ≈ {day.cost.perPersonKrw}
                </div>
              )}
            </div>
          </div>
          {day.cost.highlights && day.cost.highlights.length > 0 && (
            <ul className="mt-2 space-y-0.5 text-[11px] text-slate-400">
              {day.cost.highlights.map((h) => (
                <li key={h}>· {h}</li>
              ))}
            </ul>
          )}
          <p className="mt-2 text-[10px] text-slate-500">
            ※ 항공권 · 숙소 · 환전 수수료 제외 / 택시(디디) 주 이용 기준
          </p>
        </div>
      )}
    </section>
  )
}
