import { ExternalLink } from 'lucide-react'
import { transitRows, transitBlogs } from '../data/transit'

export function Transit() {
  return (
    <div className="space-y-5">
      <section className="rounded-3xl bg-white/[0.04] p-5 ring-1 ring-white/10 backdrop-blur-xl md:p-6">
        <header className="mb-3">
          <h2 className="text-sm font-semibold tracking-wider text-slate-200">
            🚇 메트로 vs 🚖 디디 비교
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            청양 万科魅力新城 기준 · 1元 ≈ 215원 (2026.05.10)
          </p>
        </header>

        {/* desktop table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/10 text-[11px] uppercase tracking-wider text-slate-400">
                <th className="py-2 pr-3 text-left font-medium">구간</th>
                <th className="py-2 pr-3 text-left font-medium">거리</th>
                <th className="py-2 pr-3 text-left font-medium">메트로</th>
                <th className="py-2 pr-3 text-left font-medium">디디</th>
                <th className="py-2 text-left font-medium">4명 분담</th>
              </tr>
            </thead>
            <tbody>
              {transitRows.map((r) => (
                <tr key={r.route} className="border-b border-white/5">
                  <td className="py-2.5 pr-3 text-slate-200">{r.route}</td>
                  <td className="py-2.5 pr-3 text-slate-400">{r.distance}</td>
                  <td className="py-2.5 pr-3 font-mono tabular-nums text-slate-100">
                    {r.metro}
                  </td>
                  <td className="py-2.5 pr-3 font-mono tabular-nums text-slate-100">
                    {r.taxi}
                  </td>
                  <td className="py-2.5 font-mono tabular-nums text-teal-200">
                    {r.taxiPerPerson}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* mobile cards */}
        <ul className="space-y-3 md:hidden">
          {transitRows.map((r) => (
            <li
              key={r.route}
              className="rounded-2xl bg-black/25 p-3.5 ring-1 ring-white/5"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-100">
                  {r.route}
                </h3>
                <span className="shrink-0 text-[11px] text-slate-400">
                  {r.distance}
                </span>
              </div>
              <dl className="mt-2 grid grid-cols-[44px_1fr] gap-x-2 gap-y-1.5 text-xs">
                <dt className="text-slate-400">🚇</dt>
                <dd className="font-mono text-slate-200">{r.metro}</dd>
                <dt className="text-slate-400">🚖</dt>
                <dd className="font-mono text-slate-200">{r.taxi}</dd>
                <dt className="text-slate-400">4명</dt>
                <dd className="font-mono text-teal-200">{r.taxiPerPerson}</dd>
              </dl>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
          * 청양↔다운타운 메트로는 단지에서 가장 가까운 메트로역까지 디디 13–15元(≈2,800–3,200원) 단거리 이동 + 메트로 요금 합산.<br />
          ** 칭다오 택시: 起步价 9元(≈1,950원)/3km + 2.0元(≈430원)/km, 23시 이후 +20%. 디디는 거의 동일 ~ 5–10% 저렴.<br />
          *** 4명이면 디디 1대 분담이 메트로 요금과 거의 비슷 (시간은 30–50% 단축). 짐 있을 때나 야간엔 디디 우선.
        </p>
      </section>

      <section className="rounded-3xl bg-white/[0.04] p-5 ring-1 ring-white/10 backdrop-blur-xl md:p-6">
        <header className="mb-3">
          <h2 className="text-sm font-semibold tracking-wider text-slate-200">
            📝 개인 블로거 후기
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            매거진/위키/커뮤니티 제외 · 택시·메트로·디디 실사용기
          </p>
        </header>
        <ul className="space-y-2.5 text-sm">
          {transitBlogs.map((b) => (
            <li key={b.url}>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-sky-300 hover:text-sky-200"
              >
                <ExternalLink size={12} />
                {b.title}
              </a>
              {b.note && (
                <p className="mt-0.5 ml-5 text-xs text-slate-400">{b.note}</p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
