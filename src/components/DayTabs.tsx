import type { Day } from '../types'

const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토']

function shortDate(iso: string): { md: string; weekday: string } {
  const [, m, d] = iso.split('-').map(Number)
  const date = new Date(iso + 'T00:00:00')
  return {
    md: `${m}.${String(d).padStart(2, '0')}`,
    weekday: WEEKDAY[date.getDay()],
  }
}

export function DayTabs({
  days,
  activeIdx,
  onChange,
}: {
  days: Day[]
  activeIdx: number
  onChange: (idx: number) => void
}) {
  return (
    <div className="border-b border-white/5 bg-slate-950/70 px-4 py-2.5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl gap-1.5">
        {days.map((day, i) => {
          const { md, weekday } = shortDate(day.date)
          const active = i === activeIdx
          return (
            <button
              key={day.date}
              onClick={() => onChange(i)}
              className={`flex-1 rounded-xl px-3 py-2 text-left transition ${
                active
                  ? 'bg-gradient-to-br from-teal-500/30 to-sky-500/20 text-teal-50 ring-1 ring-teal-300/40'
                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
              }`}
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-[10px] font-bold tracking-[0.15em] opacity-80">
                  DAY {i + 1}
                </span>
                <span className="text-[10px] opacity-60">· {weekday}</span>
              </div>
              <div className="mt-0.5 text-sm font-semibold tabular-nums">
                {md}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
