import type { ReactNode } from 'react'
import { Calendar, Camera } from 'lucide-react'

export type View = 'plan' | 'gallery'

export function ViewToggle({
  view,
  onChange,
}: {
  view: View
  onChange: (v: View) => void
}) {
  return (
    <div className="flex gap-1.5 rounded-2xl bg-white/[0.04] p-1.5 ring-1 ring-white/10 backdrop-blur-xl">
      <Tab
        active={view === 'plan'}
        onClick={() => onChange('plan')}
        icon={<Calendar size={14} />}
      >
        일정
      </Tab>
      <Tab
        active={view === 'gallery'}
        onClick={() => onChange('gallery')}
        icon={<Camera size={14} />}
      >
        사진
      </Tab>
    </div>
  )
}

function Tab({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean
  onClick: () => void
  icon: ReactNode
  children: ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition ${
        active
          ? 'bg-gradient-to-br from-teal-500/30 to-sky-500/20 text-teal-50 ring-1 ring-teal-300/40'
          : 'text-slate-400 hover:text-slate-200'
      }`}
    >
      {icon} {children}
    </button>
  )
}
