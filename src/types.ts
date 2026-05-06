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
  category: Category
  address?: string
  note?: string
  mapUrl?: string
}

export type Day = {
  date: string
  label: string
  places: Place[]
}
