export type RecCategory = 'food' | 'cafe' | 'sight'

export type Recommendation = {
  id: string
  name: string
  nameLocal?: string
  category: RecCategory
  area?: string
  blogUrl?: string
  mapUrl?: string
  address?: string
  note?: string
}

export const recommendations: Recommendation[] = [
  // 명소
  {
    id: 'sight-cathedral',
    name: '천주교당 (성 미카엘 대성당)',
    nameLocal: '圣弥爱尔大教堂',
    category: 'sight',
    area: '市南区',
    address: '圣弥爱尔大教堂 青岛',
    note: '60m 첨탑 두 개. 광장 무료, 내부 ¥10. 浙江路 15号.',
    blogUrl: 'https://www.keyzard.cc/kko6860/nb/224102306710',
  },
  {
    id: 'sight-xiaoyushan',
    name: '소어산 공원',
    nameLocal: '小鱼山公园',
    category: 'sight',
    area: '市南区',
    address: '小鱼山公园',
    note: '览潮阁 360° 전망. 입장 15元. 16–18시 노을이 인생샷.',
    blogUrl: 'https://tommysdiner.net/3038',
  },
  {
    id: 'sight-may4-square',
    name: '5.4광장 야경',
    nameLocal: '五四广场',
    category: 'sight',
    area: '市南区',
    address: '五四广场 青岛',
    note: '5월 LED쇼 화–일 20:00 / 20:30 두 차례. 香港中路.',
    blogUrl: 'https://www.peach-flower.co.kr/262',
  },
  {
    id: 'sight-beer-museum',
    name: '칭다오 맥주 박물관',
    nameLocal: '青岛啤酒博物馆',
    category: 'sight',
    area: '市北区',
    address: '青岛啤酒博物馆',
    note: '등주로 56号. 시음 포함 60元. 메트로 2호선 利津路역 B출구 도보 5분.',
    blogUrl: 'https://kimsgotmoney.com/144',
  },
  {
    id: 'sight-laoshan-taiqing',
    name: '라오산 태청궁',
    nameLocal: '崂山 太清宫',
    category: 'sight',
    area: '崂山区',
    address: '崂山 太清宫',
    note: '도교 본산 (明 만력 28년 중수). 입장 130元 + 케이블카 80元. 케이블카 막차 17:00.',
    blogUrl: 'https://kimsgotmoney.com/145',
  },
  {
    id: 'sight-laoshan-cable',
    name: '라오산 케이블카',
    nameLocal: '崂山索道',
    category: 'sight',
    area: '崂山区',
    address: '崂山索道 太清',
    note: '해발 1132m 정상 뷰. 막차 17:00 주의.',
    blogUrl: 'https://brunch.co.kr/@3da9a3697fac45e/137',
  },
  {
    id: 'sight-century-park',
    name: '청양 세기공원',
    nameLocal: '城阳世纪公园',
    category: 'sight',
    area: '城阳区',
    address: '青岛城阳世纪公园',
    note: '단지 동측 도보권. 인공호수·올림픽 조형물. 무료.',
    blogUrl: 'https://www.keyzard.cc/jhszirong/nb/223806017549',
  },

  // 식당
  {
    id: 'food-haedo',
    name: '海岛漁村 (해도어촌)',
    nameLocal: '海岛漁村',
    category: 'food',
    area: '市南区 (5.4광장)',
    address: '海岛渔村 青岛',
    note: '매콤 바지락 + 오징어먹물만두. 17:00 도착 권장 (대기 김).',
  },
  {
    id: 'food-dechao',
    name: '더차오 (Dechao)',
    nameLocal: '德超',
    category: 'food',
    area: '市南区 (5.4광장↔요트경기장)',
    address: '德超 青岛',
    note: '해삼 덮밥. 한국인 단골.',
  },
  {
    id: 'food-luyu',
    name: '루위 (炉鱼) — 완상청 5F',
    nameLocal: '炉鱼 萬象城点',
    category: 'food',
    area: '市南区 (완상청)',
    address: '炉鱼 青岛 万象城',
    note: '마라 철판 통생선구이. 웨이팅 있음.',
  },
  {
    id: 'food-waipo',
    name: '와이포자아 (外婆家) — 완상청 5F',
    nameLocal: '外婆家 萬象城点',
    category: 'food',
    area: '市南区 (완상청)',
    address: '外婆家 青岛 万象城',
    note: '절강 가정식. 흑초탕수육·홍소육.',
  },
  {
    id: 'food-laoshan-nongjia',
    name: '라오산 입구 농가식당',
    nameLocal: '太清宫 农家乐',
    category: 'food',
    area: '崂山区 (태청궁 출구)',
    address: '太清宫 农家乐',
    note: '라오산 두부·해산물·민물생선. 1인 80–120元.',
  },

  // 카페/마사지
  {
    id: 'cafe-massage',
    name: '청양 마사지 — 족생당 / 청죽원 / 무씨진공부',
    nameLocal: '足生堂 / 青竹苑 / 木氏真功夫',
    category: 'cafe',
    area: '城阳区 (한인촌)',
    address: '青岛 城阳 按摩',
    note: '한국어 가격표 보유. 발 35분 59元, 전신 60분 80–120元.',
    blogUrl: 'https://brunch.co.kr/@@g9CB/31',
  },
]
