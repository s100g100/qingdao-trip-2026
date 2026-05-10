import { useState, type FormEvent } from 'react'
import { Lock } from 'lucide-react'
import { ACCESS_PASSWORD, MEMBERS, type Member } from '../lib/config'
import { unlock } from '../lib/access'

export function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState('')
  const [name, setName] = useState<Member | null>(null)
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name) {
      setError('본인 이름을 선택해줘')
      return
    }
    if (password.trim() !== ACCESS_PASSWORD) {
      setError('비밀번호가 달라')
      setPassword('')
      return
    }
    unlock(name)
    onUnlock()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 p-5">
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-teal-500/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-sm rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur-xl"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400/30 to-sky-500/20 ring-1 ring-teal-300/30">
          <Lock size={18} className="text-teal-200" />
        </div>
        <h1 className="mt-4 text-xl font-semibold text-slate-50">
          칭다오 트립 2026
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          친구 4명 전용 · 본인 이름을 고르고 비밀번호를 입력해줘
        </p>

        <fieldset className="mt-5">
          <legend className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            본인 이름
          </legend>
          <div className="mt-1.5 grid grid-cols-2 gap-2">
            {MEMBERS.map((m) => {
              const selected = name === m
              return (
                <button
                  key={m}
                  type="button"
                  onClick={() => {
                    setName(m)
                    setError(null)
                  }}
                  className={`rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    selected
                      ? 'bg-gradient-to-br from-teal-400/90 to-sky-500/90 text-slate-950 ring-1 ring-white/30'
                      : 'bg-black/30 text-slate-200 ring-1 ring-white/10 hover:bg-black/40'
                  }`}
                  aria-pressed={selected}
                >
                  {m}
                </button>
              )
            })}
          </div>
        </fieldset>

        <label className="mt-3 block">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            비밀번호
          </span>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError(null)
            }}
            placeholder="••••••••"
            className={`mt-1.5 block w-full rounded-xl bg-black/30 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none ${
              error
                ? 'ring-1 ring-rose-400/50'
                : 'ring-1 ring-white/10 focus:ring-teal-400/60'
            }`}
            required
          />
        </label>

        {error && <p className="mt-2 text-xs text-rose-300">{error}</p>}

        <button
          type="submit"
          className="mt-5 block w-full rounded-xl bg-gradient-to-br from-teal-400 to-sky-500 py-2.5 text-sm font-semibold text-slate-950 ring-1 ring-white/20 transition hover:brightness-110 active:brightness-95"
        >
          입장
        </button>

        <p className="mt-4 text-center text-[11px] text-slate-500">
          한 번 입장하면 이 기기에서는 자동 통과
        </p>
      </form>
    </div>
  )
}
