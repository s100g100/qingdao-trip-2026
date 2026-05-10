import type { ReactNode } from 'react'
import { Calendar, Camera, Sparkles, Bus, MessageCircle } from 'lucide-react'

export type View = 'plan' | 'picks' | 'transit' | 'phrases' | 'gallery'

export function ViewToggle({
  view,
  onChange,
}: {
  view: View
  onChange: (v: View) => void
}) {
  return (
    <div className="flex gap-1 rounded-2xl bg-white/[0.04] p-1.5 ring-1 ring-white/10 backdrop-blur-xl">
      <Tab
        active={view === 'plan'}
        onClick={() => onChange('plan')}
        icon={<Calendar size={14} />}
      >
        일정
      </Tab>
      <Tab
        active={view === 'picks'}
        onClick={() => onChange('picks')}
        icon={<Sparkles size={14} />}
      >
        추천
      </Tab>
      <Tab
        active={view === 'transit'}
        onClick={() => onChange('transit')}
        icon={<Bus size={14} />}
      >
        이동
      </Tab>
      <Tab
        active={view === 'phrases'}
        onClick={() => onChange('phrases')}
        icon={<MessageCircle size={14} />}
      >
        회화
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
      className={`flex flex-1 items-center justify-center gap-1 rounded-xl px-2 py-2 text-xs font-medium transition md:gap-1.5 md:px-3 md:text-sm ${
        active
          ? 'bg-gradient-to-br from-teal-500/30 to-sky-500/20 text-teal-50 ring-1 ring-teal-300/40'
          : 'text-slate-400 hover:text-slate-200'
      }`}
    >
      {icon} {children}
    </button>
  )
}
