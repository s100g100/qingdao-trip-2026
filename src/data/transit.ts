export type TransitRow = {
  route: string
  distance: string
  metro: string
  taxi: string
  taxiPerPerson: string
}

export const transitRows: TransitRow[] = [
  {
    route: 'TAO 공항 ↔ 청양 (단지)',
    distance: '~25–35km',
    metro: '25–40분 / 5–7元 (1,100–1,500원)',
    taxi: '25–35분 / 80–130元 (17,200–28,000원)',
    taxiPerPerson: '20–35元 (4,300–7,500원)',
  },
  {
    route: '청양 ↔ 천주교당 / 5.4광장 (다운타운)',
    distance: '~30–35km',
    metro: '70–90분 / 7–15元* (1,500–3,200원)',
    taxi: '45–60분 / 130–180元 (28,000–38,700원)',
    taxiPerPerson: '35–45元 (7,500–9,700원)',
  },
  {
    route: '청양 ↔ 등주로 (맥주박물관)',
    distance: '~25–30km',
    metro: '60–80분 / 7–13元* (1,500–2,800원)',
    taxi: '40–55분 / 90–130元 (19,400–28,000원)',
    taxiPerPerson: '25–35元 (5,400–7,500원)',
  },
  {
    route: '맥주박물관 ↔ 완상청 (5.4광장)',
    distance: '~5–6km',
    metro: '2→3호선 30분 / 4元 (860원)',
    taxi: '10–15분 / 25–30元 (5,400–6,500원)',
    taxiPerPerson: '7元 (1,500원)',
  },
  {
    route: '완상청 ↔ 라오산 태청 코스',
    distance: '~30km',
    metro: '11호선+환승 90분 / 8元',
    taxi: '60분 / 100–140元 (21,500–30,100원)',
    taxiPerPerson: '25–35元 (5,400–7,500원)',
  },
  {
    route: '라오산 ↔ 청양',
    distance: '~40km',
    metro: '버스+메트로 110분+ / 12元',
    taxi: '90분 / 130–170元 (28,000–36,500원)',
    taxiPerPerson: '35–45元 (7,500–9,700원)',
  },
  {
    route: '천주교당 ↔ 소어산',
    distance: '~700m',
    metro: '도보 10–15분',
    taxi: '5분 / 13元 기본요금 (≈2,800원)',
    taxiPerPerson: '—',
  },
  {
    route: '소어산 ↔ 5.4광장',
    distance: '~5km',
    metro: '3호선 20분 / 4元 (860원)',
    taxi: '10–15분 / 25–30元 (5,400–6,500원)',
    taxiPerPerson: '7元 (1,500원)',
  },
]

export type TransitBlog = {
  url: string
  title: string
  note?: string
}

export const transitBlogs: TransitBlog[] = [
  {
    url: 'https://janjan167.com/entry/%EC%A4%91%EA%B5%AD-%EC%B9%AD%EB%8B%A4%EC%98%A4-%EA%B3%B5%ED%95%AD%EC%97%90%EC%84%9C-%EC%8B%9C%EB%82%B4-%EA%B0%80%EB%8A%94-%EB%B0%A9%EB%B2%95-%EA%B3%B5%ED%95%AD%EB%B2%84%EC%8A%A4-%EC%A7%80%ED%95%98%EC%B2%A0-%EA%B3%A0%EC%86%8D%EC%B2%A0%EB%8F%84-%ED%83%9D%EC%8B%9C-%EC%9E%90%EC%98%A4%EB%91%A5-%EA%B5%AD%EC%A0%9C%EA%B3%B5%ED%95%AD-%EC%95%88%EB%82%B4',
    title: 'janjan167 — 공항 → 시내 4가지 비교',
    note: '캐리어 + 인원 기준 추천 시나리오',
  },
  {
    url: 'https://blog.wise-leader.com/tour_qingdao2023/',
    title: '굿대디 — 가족여행 칭다오 후기',
    note: '4인 가족 동선·디디·메트로 실사용기',
  },
  {
    url: 'https://brunch.co.kr/@203cool/719',
    title: 'brunch @203cool — 칭다오 18가지',
    note: '결제·교통·동선 함정 묶음 (2024.12)',
  },
  {
    url: 'https://brunch.co.kr/@hotelscomkr/727',
    title: 'brunch @hotelscomkr — 청도 2박3일 + 호텔',
    note: '시난구 동선 + 숙소 선택 팁',
  },
  {
    url: 'https://estimastory.com/2019/01/01/didichuxing/',
    title: '에스티마 — 디디추싱 실사용기',
    note: '디디 앱 한글 UI·결제·매칭 흐름',
  },
]
