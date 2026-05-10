import { useState } from 'react'
import { itinerary } from './data/itinerary'
import { Hero } from './components/Hero'
import { DayTabs } from './components/DayTabs'
import { DayCard } from './components/DayCard'
import { ViewToggle, type View } from './components/ViewToggle'
import { Gallery } from './components/Gallery'
import { Recommendations } from './components/Recommendations'
import { Transit } from './components/Transit'
import { Phrases } from './components/Phrases'
import { PasswordGate } from './components/PasswordGate'
import { isUnlocked } from './lib/access'

export default function App() {
  const [unlocked, setUnlocked] = useState(isUnlocked())
  const [view, setView] = useState<View>('plan')
  const [activeIdx, setActiveIdx] = useState(0)

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />
  }

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-slate-950 text-slate-100">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-teal-500/25 blur-3xl" />
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950" />
      </div>

      <Hero days={itinerary} />

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <ViewToggle view={view} onChange={setView} />
      </div>

      {view === 'plan' && (
        <>
          <div className="sticky top-0 z-20 mt-3 md:hidden">
            <DayTabs
              days={itinerary}
              activeIdx={activeIdx}
              onChange={setActiveIdx}
            />
          </div>
          <main className="mx-auto max-w-6xl px-4 pt-4 pb-24 md:px-8 md:pt-5">
            <div className="grid gap-5 md:grid-cols-3 md:gap-6">
              {itinerary.map((day, i) => (
                <div
                  key={day.date}
                  className={i === activeIdx ? 'block' : 'hidden md:block'}
                >
                  <DayCard day={day} dayNumber={i + 1} />
                </div>
              ))}
            </div>
          </main>
        </>
      )}

      {view === 'picks' && (
        <main className="mx-auto max-w-6xl px-4 pt-5 pb-24 md:px-8">
          <Recommendations />
        </main>
      )}

      {view === 'transit' && (
        <main className="mx-auto max-w-6xl px-4 pt-5 pb-24 md:px-8">
          <Transit />
        </main>
      )}

      {view === 'phrases' && (
        <main className="mx-auto max-w-6xl px-4 pt-5 pb-24 md:px-8">
          <Phrases />
        </main>
      )}

      {view === 'gallery' && (
        <main className="mx-auto max-w-6xl px-4 pt-5 pb-24 md:px-8">
          <Gallery />
        </main>
      )}

      <footer className="px-5 pb-10 text-center text-[11px] text-slate-500">
        오프라인에서도 일정 열람 · 메모는 이 기기에만 저장
      </footer>
    </div>
  )
}
