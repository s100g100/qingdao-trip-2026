const KEY_UNLOCKED = 'gate.unlocked'
const KEY_NAME = 'gate.name'

export function isUnlocked(): boolean {
  return localStorage.getItem(KEY_UNLOCKED) === '1'
}

export function unlock(name: string): void {
  localStorage.setItem(KEY_UNLOCKED, '1')
  localStorage.setItem(KEY_NAME, name.trim())
}

export function getName(): string {
  return localStorage.getItem(KEY_NAME) ?? ''
}

export function lock(): void {
  localStorage.removeItem(KEY_UNLOCKED)
  localStorage.removeItem(KEY_NAME)
}
