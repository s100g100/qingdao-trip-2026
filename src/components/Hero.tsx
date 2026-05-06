import type { Day } from '../types'

function daysUntil(): number {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const target = new Date(2026, 4, 17)
  const ms = target.getTime() - today.getTime()
  return Math.round(ms / (1000 * 60 * 60 * 24))
}

export function Hero({ days }: { days: Day[] }) {
  const dday = daysUntil()
  const totalPlaces = days.reduce((sum, d) => sum + d.places.length, 0)

  return (
    <header className="relative px-5 pt-12 pb-6 md:px-8 md:pt-20 md:pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold tracking-[0.3em] text-teal-300/80">
              QINGDAO · 青岛
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-6xl">
              칭다오 여행
            </h1>
            <p className="mt-2 text-sm text-slate-400 md:text-base">
              2026.05.17 SUN — 05.19 TUE
            </p>
          </div>
          {dday > 0 ? (
            <div className="flex shrink-0 flex-col items-end rounded-2xl bg-gradient-to-br from-orange-500/25 to-rose-500/20 px-4 py-2.5 ring-1 ring-orange-300/30 backdrop-blur-sm">
              <span className="text-[10px] tracking-wider text-orange-200/80">
                출발까지
              </span>
              <span className="mt-0.5 text-2xl font-bold text-orange-50">
                D-{dday}
              </span>
            </div>
          ) : dday === 0 ? (
            <div className="flex shrink-0 flex-col items-end rounded-2xl bg-gradient-to-br from-teal-400/30 to-emerald-500/20 px-4 py-2.5 ring-1 ring-teal-300/40">
              <span className="text-[10px] tracking-wider text-teal-100/80">
                오늘
              </span>
              <span className="mt-0.5 text-2xl font-bold text-teal-50">
                D-DAY
              </span>
            </div>
          ) : null}
        </div>

        <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-slate-300">
          <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
            {days.length}일 · {totalPlaces}개 일정
          </span>
          <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
            친구들과
          </span>
          <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
            해안도시
          </span>
        </div>
      </div>
    </header>
  )
}
