import { itinerary } from './data/itinerary'
import { DayCard } from './components/DayCard'

export default function App() {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <header className="px-5 pt-8 pb-4">
        <p className="text-xs tracking-widest text-sky-300/80">
          2026.05.17 — 05.19
        </p>
        <h1 className="mt-1 text-2xl font-semibold">칭다오 여행</h1>
        <p className="mt-1 text-sm text-slate-400">친구들과 2박 3일</p>
      </header>
      <main className="mx-auto max-w-md space-y-5 px-4 pb-20">
        {itinerary.map((day) => (
          <DayCard key={day.date} day={day} />
        ))}
      </main>
    </div>
  )
}
