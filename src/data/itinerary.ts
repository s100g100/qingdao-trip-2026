import type { Day } from '../types'

export const itinerary: Day[] = [
  {
    date: '2026-05-17',
    label: 'Day 1 · 일요일',
    places: [
      {
        id: 'd1-flight',
        time: '11:00–11:55',
        name: '김해(PUS) → 칭다오(TAO)',
        category: 'transport',
        note: '전원 동일 항공편',
      },
    ],
  },
  {
    date: '2026-05-18',
    label: 'Day 2 · 월요일',
    places: [],
  },
  {
    date: '2026-05-19',
    label: 'Day 3 · 화요일',
    places: [
      {
        id: 'd3-flight-b',
        time: '13:15–16:10',
        name: '칭다오(TAO) → 김해(PUS)',
        category: 'transport',
        note: '팍, 릉오',
      },
      {
        id: 'd3-flight-a',
        time: '14:55–17:40',
        name: '칭다오(TAO) → 인천(ICN)',
        category: 'transport',
        note: '쿸, 켱',
      },
    ],
  },
]
