export type Phrase = {
  ko: string
  zh: string
  pinyin: string
}

export type PhraseGroup = {
  id: string
  label: string
  emoji: string
  items: Phrase[]
}

export const phraseGroups: PhraseGroup[] = [
  {
    id: 'greet',
    label: '인사 · 기본',
    emoji: '👋',
    items: [
      { ko: '안녕하세요', zh: '你好', pinyin: 'nǐ hǎo · 니 하오' },
      { ko: '감사합니다', zh: '谢谢', pinyin: 'xiè xie · 씨에 시에' },
      { ko: '죄송 / 실례', zh: '对不起 / 不好意思', pinyin: 'duì bu qǐ · 뚜이 부 치' },
      { ko: '네 / 아니오', zh: '是 / 不是', pinyin: 'shì / bú shì · 쓰 / 부 쓰' },
      { ko: '알아요 / 몰라요', zh: '知道 / 不知道', pinyin: 'zhī dào / bù zhī dào' },
      { ko: '중국어 못해요', zh: '我不会说中文', pinyin: 'wǒ bú huì shuō zhōng wén' },
      { ko: '한국 사람이에요', zh: '我是韩国人', pinyin: 'wǒ shì hán guó rén' },
      { ko: '영어 할 줄 아세요?', zh: '你会说英语吗?', pinyin: 'nǐ huì shuō yīng yǔ ma' },
    ],
  },
  {
    id: 'meal',
    label: '식당',
    emoji: '🍜',
    items: [
      { ko: '메뉴 주세요', zh: '菜单, 谢谢', pinyin: 'cài dān, xiè xie' },
      { ko: '이거 주세요 (가리키며)', zh: '来这个', pinyin: 'lái zhè ge · 라이 쩌 거' },
      { ko: '맥주 한 병 / 두 잔', zh: '一瓶啤酒 / 两杯啤酒', pinyin: 'yì píng pí jiǔ / liǎng bēi pí jiǔ' },
      { ko: '맵게 하지 마세요', zh: '不要辣', pinyin: 'bú yào là · 부 야오 라' },
      { ko: '고수 빼주세요', zh: '不要香菜', pinyin: 'bú yào xiāng cài' },
      { ko: '계산할게요', zh: '买单 / 结账', pinyin: 'mǎi dān / jié zhàng' },
      { ko: '위챗으로 결제', zh: '用微信付', pinyin: 'yòng wēi xìn fù' },
      { ko: '알리페이 받으세요?', zh: '可以用支付宝吗?', pinyin: 'kě yǐ yòng zhī fù bǎo ma' },
      { ko: '맛있어요', zh: '好吃', pinyin: 'hǎo chī · 하오 츠' },
    ],
  },
  {
    id: 'taxi',
    label: '택시 · 디디',
    emoji: '🚖',
    items: [
      { ko: '여기로 가주세요 (지도 보여주며)', zh: '请去这里', pinyin: 'qǐng qù zhè li' },
      { ko: '공항으로', zh: '去胶东机场', pinyin: 'qù jiāo dōng jī chǎng' },
      { ko: '万科魅力新城으로', zh: '去万科魅力新城 (城阳区)', pinyin: 'qù wàn kē mèi lì xīn chéng' },
      { ko: '잠시만 기다려주세요', zh: '请等一下', pinyin: 'qǐng děng yí xià' },
      { ko: '여기서 세워주세요', zh: '就这里停', pinyin: 'jiù zhè li tíng' },
      { ko: '얼마예요?', zh: '多少钱?', pinyin: 'duō shǎo qián · 뚜오 샤오 치엔' },
      { ko: '너무 비싸요', zh: '太贵了', pinyin: 'tài guì le · 타이 꾸이 러' },
      { ko: '영수증 주세요', zh: '请给我发票', pinyin: 'qǐng gěi wǒ fā piào' },
    ],
  },
  {
    id: 'metro',
    label: '길 묻기 · 지하철',
    emoji: '🚇',
    items: [
      { ko: '화장실 어디예요?', zh: '洗手间在哪里?', pinyin: 'xǐ shǒu jiān zài nǎ li' },
      { ko: '지하철역 어디예요?', zh: '地铁站在哪里?', pinyin: 'dì tiě zhàn zài nǎ li' },
      { ko: '몇 호선 타요?', zh: '坐几号线?', pinyin: 'zuò jǐ hào xiàn' },
      { ko: '여기서 멀어요?', zh: '离这里远吗?', pinyin: 'lí zhè li yuǎn ma' },
      { ko: '걸어갈 수 있어요?', zh: '能走过去吗?', pinyin: 'néng zǒu guò qù ma' },
      { ko: '출구 어디예요?', zh: '出口在哪?', pinyin: 'chū kǒu zài nǎ' },
    ],
  },
  {
    id: 'hotel',
    label: '숙소 · 쇼핑',
    emoji: '🛏',
    items: [
      { ko: '체크인할게요', zh: '我要入住', pinyin: 'wǒ yào rù zhù' },
      { ko: '예약했어요. 이름은 ___', zh: '我有预订, 名字是 ___', pinyin: 'wǒ yǒu yù dìng, míng zi shì' },
      { ko: 'WiFi 비밀번호?', zh: 'WiFi 密码?', pinyin: 'WiFi mì mǎ · 와이파이 미 마' },
      { ko: '이거 얼마예요?', zh: '这个多少钱?', pinyin: 'zhè ge duō shǎo qián' },
      { ko: '좀 깎아주세요', zh: '便宜一点儿', pinyin: 'pián yi yì diǎnr' },
      { ko: '봉투 하나 주세요', zh: '给我一个袋子', pinyin: 'gěi wǒ yí gè dài zi' },
    ],
  },
  {
    id: 'emergency',
    label: '긴급',
    emoji: '🚨',
    items: [
      { ko: '도와주세요!', zh: '救命! / 帮帮我!', pinyin: 'jiù mìng / bāng bāng wǒ' },
      { ko: '병원 어디예요?', zh: '医院在哪里?', pinyin: 'yī yuàn zài nǎ li' },
      { ko: '약국', zh: '药店', pinyin: 'yào diàn · 야오 디엔' },
      { ko: '아파요', zh: '我不舒服 / 我疼', pinyin: 'wǒ bù shū fu / wǒ téng' },
      { ko: '지갑/여권 잃어버렸어요', zh: '我的钱包/护照丢了', pinyin: 'wǒ de qián bāo / hù zhào diū le' },
      { ko: '경찰 불러주세요', zh: '请叫警察', pinyin: 'qǐng jiào jǐng chá' },
      { ko: '한국 영사관 (칭다오)', zh: '韩国领事馆 (青岛)', pinyin: 'hán guó lǐng shì guǎn' },
    ],
  },
]

export const emergencyNumbers = [
  { label: '경찰', number: '110' },
  { label: '구급', number: '120' },
  { label: '소방', number: '119' },
  { label: '주칭다오 한국 총영사관 (야간 사건사고)', number: '+86 186-6018-0448' },
]
