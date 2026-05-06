import type { Day } from '../types'

export const itinerary: Day[] = [
  {
    date: '2026-05-17',
    label: 'Day 1 · 일요일',
    places: [
      { id: 'd1-1', time: '오전', name: '인천 → 칭다오 비행', category: 'transport' },
      { id: 'd1-2', time: '점심', name: '호텔 체크인 & 현지 해산물', category: 'meal' },
      { id: 'd1-3', time: '오후', name: '잔교 (Zhanqiao Pier)', category: 'sight', note: '칭다오의 상징, 1891년 건설' },
      { id: 'd1-4', time: '저녁', name: '5.4 광장 야경', category: 'sight', note: '미디어파사드 쇼' },
    ],
  },
  {
    date: '2026-05-18',
    label: 'Day 2 · 월요일',
    places: [
      { id: 'd2-1', time: '오전', name: '독일 건축물 거리', category: 'sight', note: '카페 · 소품샵' },
      { id: 'd2-2', time: '점심', name: '현지 맛집', category: 'meal' },
      { id: 'd2-3', time: '오후', name: '칭다오 맥주 박물관', category: 'sight', note: '시음 포함' },
      { id: 'd2-4', time: '저녁', name: '타이둥 보행거리 · 이촌 야시장', category: 'meal', note: '꼬치 · 만두 먹방' },
    ],
  },
  {
    date: '2026-05-19',
    label: 'Day 3 · 화요일',
    places: [
      { id: 'd3-1', time: '오전', name: '카페 브런치', category: 'cafe' },
      { id: 'd3-2', time: '오후', name: '쇼핑 · 기념품', category: 'shopping' },
      { id: 'd3-3', time: '저녁', name: '칭다오 → 인천 비행', category: 'transport' },
    ],
  },
]
