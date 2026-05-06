# QingdaoTrip — 칭다오 여행 웹앱

## 프로젝트 개요
2026년 5월 17일(일) ~ 5월 19일(화), 친구들과 함께 가는 **칭다오 2박 3일** 여행에서 실제로 사용할 웹앱.
GitHub(Pages) 호스팅을 전제로 한다.

## 핵심 목표
- 여행 중 휴대폰에서 바로 열어 쓸 수 있을 것 (모바일 우선)
- 인터넷이 불안정해도 동작할 것 (오프라인/로컬스토리지 친화적)
- 친구들과 같은 링크 하나로 공유 가능할 것
- 빠르게 만들고 빠르게 배포할 수 있을 것 (정적 사이트 권장)

## 여행 기본 정보
- **기간**: 2026-05-17 (일) ~ 2026-05-19 (화), 2박 3일
- **목적지**: 중국 산둥성 칭다오
- **동행**: 친구들 (단체 여행)
- **시즌**: 봄, 호텔 가격이 비교적 저렴한 시기

## 기능 아이디어 (검색 기반)

### 필수 기능 (MVP)
- **일정표 (Itinerary)**: 날짜별/시간대별 카드 뷰. 출발-도착, 식사, 관광지 블록.
- **장소 카드**: 이름, 주소(중문/한글), 영업시간, 예상 비용, 메모, 지도 링크(아맵/구글맵 URL).
- **체크리스트**: 짐 싸기, 출발 전 준비물, 도착 후 액티베이션 항목.
- **경비 메모**: 1인당 약 40~70만원 예산. 항목별/일자별 합계.

### 있으면 좋은 기능
- **맛집/명소 추천 풀**: 검색에서 모은 후보 장소를 카드로 모아두고 "확정/보류/제외" 토글.
- **사진 갤러리**: 여행 중 찍은 사진을 친구들과 공유 (간단히 Imgur 링크 / GitHub 이슈 첨부 등).
- **위챗페이/알리페이 메모**: 한국 신용카드 등록 가이드 링크.
- **간단한 중국어 회화 카드**: 주문/택시/긴급 상황.
- **환율 계산기**: 위안 ↔ 원.
- **다크 모드**: 야경 코스 (5.4 광장 등) 다닐 때 눈부심 방지.

### 후보 장소 (검색에서 추출, 추후 큐레이션)
- 잔교 (Zhanqiao Pier) — 1891년 건설된 칭다오의 상징
- 5.4 광장 — 야경/포토존, 밤에 빌딩 미디어파사드
- 라오산 (Laoshan) — 해안 명산, 시간 여유 있을 때
- 칭다오 맥주 박물관 (Tsingtao Beer Museum)
- 독일 건축물 거리 — 카페/소품샵
- 이촌 야시장 / 타이둥 보행거리 — 야시장 먹방
- 칭다오 해저세계 (Underwater World)

## 기술 스택 (제안, 미확정)
- **프레임워크**: Vite + React (또는 그냥 정적 HTML/CSS/JS — 사이즈 최소화)
- **스타일**: Tailwind CSS
- **상태/저장**: localStorage (개인용) → 추후 Firestore 또는 GitHub Gist API (공유용)
- **호스팅**: GitHub Pages (`gh-pages` 브랜치 또는 Actions)
- **언어**: TypeScript 권장

## 배포
- 리포지토리: 추후 결정 (예: `qingdao-trip-2026`)
- 호스팅: GitHub Pages
- 도메인: `<github-username>.github.io/<repo>` 기본값

## 작업 메모
- 코드 작성 전, 화면 와이어프레임 한 장이라도 먼저 그려보고 시작
- 처음부터 풀스택 만들지 말고, 일정표 + 체크리스트만 먼저 동작시키기
- 친구들에게 공유할 때를 대비해 "조회 전용 링크" 모드를 일찍 고려

## 참고 자료
- [Qingdao Travel Guide 2026 (Trip.com)](https://us.trip.com/travel-guide/destination/qingdao-5/)
- [칭다오 2박3일 코스 BEST 5 (Triplife)](https://triplife.triplog.co.kr/2026/04/23-best-5-2026.html)
- [칭다오 감성 여행 (Tripstore)](https://www.tripstore.kr/blog/%EC%A4%91%EA%B5%AD-%EC%B9%AD%EB%8B%A4%EC%98%A4-%EA%B0%90%EC%84%B1-%EC%97%AC%ED%96%89-%EC%BD%94%EC%8A%A4)
- [Travel Itinerary Generator (GitHub)](https://github.com/Sanjeev-Kumar78/Travel-Itinerary-Generator)
- [AdventureLog — self-hosted trip planner](https://github.com/seanmorley15/AdventureLog)
