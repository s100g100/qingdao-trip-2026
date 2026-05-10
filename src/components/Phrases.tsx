import { useState } from 'react'
import { phraseGroups, emergencyNumbers } from '../data/phrases'

export function Phrases() {
  const [activeId, setActiveId] = useState(phraseGroups[0].id)
  const active = phraseGroups.find((g) => g.id === activeId) ?? phraseGroups[0]

  return (
    <div className="space-y-5">
      <p className="text-xs text-slate-400">
        💡 한자가 안 통하면 <b className="text-slate-200">스마트폰 메모장에 한자 입력 → 화면 보여주기</b>가 가장 빠름.
      </p>

      <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
        <div className="flex gap-1.5">
          {phraseGroups.map((g) => {
            const selected = g.id === activeId
            return (
              <button
                key={g.id}
                onClick={() => setActiveId(g.id)}
                className={`shrink-0 rounded-xl px-3 py-2 text-xs font-medium transition ${
                  selected
                    ? 'bg-gradient-to-br from-teal-400/90 to-sky-500/90 text-slate-950 ring-1 ring-white/30'
                    : 'bg-white/5 text-slate-300 ring-1 ring-white/10 hover:bg-white/10'
                }`}
                aria-pressed={selected}
              >
                <span className="mr-1">{g.emoji}</span>
                {g.label}
              </button>
            )
          })}
        </div>
      </div>

      <section className="rounded-3xl bg-white/[0.04] p-5 ring-1 ring-white/10 backdrop-blur-xl md:p-6">
        <h2 className="mb-3 text-sm font-semibold tracking-wider text-slate-200">
          <span className="mr-1.5">{active.emoji}</span>
          {active.label}
        </h2>
        <ul className="divide-y divide-white/5">
          {active.items.map((p, i) => (
            <li key={i} className="grid gap-1 py-3 md:grid-cols-[1fr_1fr_1.2fr] md:items-baseline md:gap-4">
              <div className="text-sm text-slate-200">{p.ko}</div>
              <div className="text-base font-semibold text-slate-50">
                {p.zh}
              </div>
              <div className="text-xs text-slate-400">{p.pinyin}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl bg-rose-500/10 p-5 ring-1 ring-rose-300/20 backdrop-blur-xl">
        <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wider text-rose-100">
          🚨 긴급 전화
        </h2>
        <ul className="space-y-2 text-sm">
          {emergencyNumbers.map((e) => (
            <li key={e.label} className="flex items-baseline justify-between gap-3">
              <span className="text-slate-200">{e.label}</span>
              <a
                href={`tel:${e.number.replace(/\s/g, '')}`}
                className="font-mono text-base font-semibold text-rose-200 hover:text-rose-100"
              >
                {e.number}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
