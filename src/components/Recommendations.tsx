import { UtensilsCrossed, Coffee, Camera, MapPin, ExternalLink } from 'lucide-react'
import {
  recommendations,
  type RecCategory,
  type Recommendation,
} from '../data/recommendations'

const GROUPS: { key: RecCategory; label: string; Icon: typeof UtensilsCrossed }[] = [
  { key: 'food', label: '맛집', Icon: UtensilsCrossed },
  { key: 'cafe', label: '카페', Icon: Coffee },
  { key: 'sight', label: '명소', Icon: Camera },
]

const CHIP: Record<RecCategory, string> = {
  food: 'from-amber-400/30 to-amber-500/10 text-amber-100 ring-amber-300/30',
  cafe: 'from-rose-400/30 to-rose-500/10 text-rose-100 ring-rose-300/30',
  sight: 'from-emerald-400/30 to-emerald-500/10 text-emerald-100 ring-emerald-300/30',
}

function buildMapUrl(rec: Recommendation): string | null {
  if (rec.mapUrl) return rec.mapUrl
  const query = rec.address ?? `${rec.nameLocal ?? rec.name} 칭다오`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export function Recommendations() {
  return (
    <div className="space-y-6">
      {GROUPS.map(({ key, label, Icon }) => {
        const items = recommendations.filter((r) => r.category === key)
        return (
          <section
            key={key}
            className="rounded-3xl bg-white/[0.04] p-5 ring-1 ring-white/10 backdrop-blur-xl md:p-6"
          >
            <header className="mb-4 flex items-baseline justify-between">
              <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wider text-slate-200">
                <Icon size={15} className="text-teal-300" />
                <span className="uppercase">{label}</span>
              </h2>
              <span className="text-xs tabular-nums text-slate-500">
                {items.length}개
              </span>
            </header>

            {items.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-white/10 px-4 py-6 text-center text-xs text-slate-500">
                아직 추가된 항목이 없어요
              </p>
            ) : (
              <ul className="grid gap-3 md:grid-cols-2">
                {items.map((r) => (
                  <RecCard key={r.id} rec={r} />
                ))}
              </ul>
            )}
          </section>
        )
      })}
    </div>
  )
}

function RecCard({ rec }: { rec: Recommendation }) {
  const mapUrl = buildMapUrl(rec)
  return (
    <li className="rounded-2xl bg-white/[0.05] p-4 ring-1 ring-white/10 backdrop-blur-md transition hover:bg-white/[0.08]">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-[15px] font-semibold text-slate-50">
            {rec.name}
          </h3>
          {rec.nameLocal && (
            <p className="mt-0.5 text-xs text-slate-400">{rec.nameLocal}</p>
          )}
        </div>
        {rec.area && (
          <span
            className={`shrink-0 rounded-md bg-gradient-to-br px-2 py-0.5 text-[10px] font-semibold tracking-wide ring-1 ${CHIP[rec.category]}`}
          >
            {rec.area}
          </span>
        )}
      </div>

      {rec.note && (
        <p className="mt-2 text-xs leading-relaxed text-slate-300/90">
          {rec.note}
        </p>
      )}

      <div className="mt-3 flex items-center gap-3 text-[11px]">
        {mapUrl && (
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-teal-300/90 hover:text-teal-200"
          >
            <MapPin size={12} /> 지도
          </a>
        )}
        {rec.blogUrl && (
          <a
            href={rec.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sky-300/90 hover:text-sky-200"
          >
            <ExternalLink size={12} /> 블로그
          </a>
        )}
      </div>
    </li>
  )
}
