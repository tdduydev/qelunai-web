import type { Locale } from '../types';

export default {
  code: 'ko',
  htmlLang: 'ko',
  ogLocale: 'ko_KR',
  nativeName: '한국어',
  order: 3,
  script: 'ko',

  seo: {
    title: 'Qelunai: 동양의 지혜와 AI, 자미두수, 사주팔자, 주역, 음력',
    description: 'Qelunai는 자미두수, 사주팔자, 음력, 주역, 풍수, 수비학을 성찰의 도구로 차분하고 쉽게 풀어 주는 모바일 앱입니다. 개발 중.',
    keywords: 'Qelunai, 자미두수, 사주팔자, 사주, 주역, 음력, 풍수, 수비학, 동양 철학 앱',
  },

  nav: { modules: '모듈', principles: '원칙', faq: '질문', action: '알림 받기', language: '언어', skip: '본문으로 건너뛰기' },

  hero: {
    line1: '동양의',
    line2: '지혜',
    sub: 'Qelunai는 자미두수, 사주팔자, 음력, 주역을 성찰의 도구로 쉽게 풀어 주는 차분한 앱입니다.',
    pictureAlt: '안개 낀 산과 고요한 호수 위 밤하늘에 떠 있는 금빛 천체 관측의',
  },

  intro: {
    lines: ['열두 궁,', '네 기둥,', '예순네 괘,', '한 해의 음력,', '천천히 읽기.'],
    note: '성찰을 위한 유산이지, 삶에 대한 판결이 아닙니다.',
    pictureAlts: ['별이 빛나는 밤의 열두 점 금빛 바퀴', '잔잔한 바다 위로 이어진 달의 위상'],
  },

  features: {
    heading: '무엇을 하는지, 쉬운 문장으로',
    on: '켬',
    off: '끔',
    items: [
      { text: '열두 궁으로 명반 보기', detail: '명궁에서 시작해 열두 궁을 배치하고, 궁마다 별과 쉬운 설명을 붙입니다. 개발 중.', on: true },
      { text: '음력을 하루하루 따라가기', detail: '24절기, 윤달, 매일의 간지를 UTC+7 기준으로 계산합니다. 개발 중.' },
      { text: '막막할 때 괘 하나 뽑기', detail: '64괘, 괘마다 여섯 효, 원문과 현대적 해석을 함께. 개발 중.' },
      { text: '동의할 때만 AI 조언자에게 묻기', detail: '조언자는 기본적으로 꺼져 있습니다. 동의하기 전에는 어떤 데이터도 휴대폰을 떠나지 않습니다.', on: true },
      { text: '라이트 또는 다크 모드로 사용하기', detail: '낮에는 아이보리, 밤에는 미드나잇, 언제나 같은 차분한 금빛.' },
    ],
  },

  modules: {
    heading: '여섯 체계, 하나의 앱',
    status: '개발 중',
    items: {
      tuvi: { name: '자미두수', summary: '열두 궁과 백여 개의 별로 이루어진 명반.', fact: '12궁' },
      batu: { name: '사주팔자', summary: '태어난 해, 달, 날, 시를 천간과 지지로 적은 네 기둥.', fact: '4주 8자' },
      phongthuy: { name: '풍수', summary: '집의 방위, 팔택, 그리고 집을 둘러싼 오행.', fact: '8방위' },
      kinhdich: { name: '주역', summary: '괘를 뽑고 괘사와 변효를 읽습니다.', fact: '64괘' },
      licham: { name: '음력', summary: '음양력: 음력 날짜, 절기, 길일과 흉일.', fact: '24절기' },
      thansohoc: { name: '수비학', summary: '이름과 생일로 생명수와 핵심 숫자를 구합니다.', fact: '핵심 숫자 9개' },
    },
  },

  about: {
    line1: '유산이지,',
    line2: '예언이 아닙니다.',
    blocks: [
      { title: '방법을 분명하게', body: '모든 명반에는 어떤 유파와 규칙을 따르는지 적혀 있어, 블랙박스를 믿는 대신 계산을 직접 확인할 수 있습니다.' },
      { title: '데이터는 당신의 것', body: '생년월일 정보는 휴대폰에만 저장됩니다. 계정이 필요 없고, AI 조언자는 감시하는 것이 아니라 당신이 켜는 것입니다.' },
    ],
    action: '출시 알림 받기',
    pictureAlt: '희미한 보름달 아래 호숫가에 쌓인 돌',
  },

  faq: {
    heading: '자주 묻는 질문',
    items: [
      { q: 'Qelunai는 점술 앱인가요?', a: '아닙니다. 동양의 전통 체계를 문화유산이자 성찰의 계기로 소개할 뿐, 미래를 예측하거나 결정을 대신하지 않습니다.' },
      { q: '지금 사용할 수 있나요?', a: '아직은 아닙니다. Qelunai는 Android와 iOS용으로 개발 중입니다. 아래에 이메일을 남기면 출시 때 한 번만 연락드립니다.' },
      { q: '어떤 언어를 지원하나요?', a: '출시 때는 베트남어와 영어, 이후 중국어와 한국어를 지원할 예정입니다. 이 사이트는 이미 네 언어로 제공됩니다.' },
      { q: 'AI가 내 데이터를 읽나요?', a: '조언자를 켜고 특정 명반을 공유하는 데 동의할 때만 그렇습니다. 기본은 꺼져 있으며 언제든 다시 끌 수 있습니다.' },
      { q: '방법은 어디에서 왔나요?', a: '고전 문헌과 널리 쓰이는 자미두수, 사주, 풍수, 주역의 유파에서 왔습니다. 각 기능은 앱 안에서 출처를 밝힙니다.' },
    ],
  },

  cta: {
    line1: '조용히',
    line2: '시작하세요.',
    sub: '출시 때 이메일 한 통. 그 외에는 없습니다.',
    dialogTitle: 'Qelunai가 준비되면 알려 주세요',
    emailLabel: '이메일',
    emailPlaceholder: 'you@example.com',
    platformLabel: '사용하는 휴대폰',
    button: '요청 보내기',
    mailSubject: 'Qelunai 출시 알림 요청',
    mailBody: 'Qelunai가 출시되면 알려 주세요.\n\n이메일: {email}\n플랫폼: {platform}',
  },

  footer: {
    notes: ['Qelunai는 개발 중입니다. 예언도, 유료 상담도 없습니다.', 'Android와 iOS로 출시 예정입니다.'],
    top: '맨 위로',
    contactLabel: '연락하기',
    credits: 'Qelunai를 위해 그린 일러스트',
    rights: '모든 권리 보유.',
  },

  notFound: { title: '이 페이지는 길을 잃었습니다', body: '찾으시는 페이지가 없습니다.', home: 'Qelunai로 돌아가기' },
} satisfies Locale;
