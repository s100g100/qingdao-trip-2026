export type Category =
  | 'transport'
  | 'meal'
  | 'sight'
  | 'cafe'
  | 'shopping'
  | 'lodging'

export type Place = {
  id: string
  time?: string
  name: string
  nameLocal?: string
  category: Category
  address?: string
  cost?: string
  note?: string
  mapUrl?: string
  blogUrl?: string
}

export type DayCost = {
  perPerson: string
  perPersonKrw?: string
  highlights?: string[]
}

export type Day = {
  date: string
  label: string
  places: Place[]
  cost?: DayCost
}
