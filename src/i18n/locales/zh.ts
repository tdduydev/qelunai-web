import type { Locale } from '../types';

export default {
  code: 'zh',
  htmlLang: 'zh-Hans',
  ogLocale: 'zh_CN',
  nativeName: '中文',
  order: 2,
  script: 'sc',

  seo: {
    title: 'Qelunai：东方智慧与 AI，紫微斗数、八字、易经与农历',
    description: 'Qelunai 是一款沉静的手机应用，涵盖紫微斗数、八字、农历、易经、风水与数字命理，以平实的方式呈现，作为自我反思的工具。开发中。',
    keywords: 'Qelunai, 紫微斗数, 八字, 四柱, 易经, 农历, 风水, 数字命理, 东方智慧',
  },

  nav: { modules: '模块', principles: '原则', faq: '常见问题', action: '接收通知', language: '语言', skip: '跳到正文' },

  hero: {
    line1: '东方',
    line2: '智慧',
    sub: 'Qelunai 是一款沉静的应用，以平实的语言讲述紫微斗数、八字、农历与易经，作为反思的工具。',
    pictureAlt: '雾中山峦与静湖之上，夜空中悬着一架金色星盘',
  },

  intro: {
    lines: ['十二宫，', '四柱，', '六十四卦，', '一个农历年，', '慢慢读。'],
    note: '用来反思的传统，而不是对人生的判决。',
    pictureAlts: ['星夜中的十二点金色轮盘', '月相弧线横跨平静海面'],
  },

  features: {
    heading: '它能做什么，一句话说明',
    on: '开',
    off: '关',
    items: [
      { text: '以十二宫查看命盘', detail: '从命宫起排十二宫，每宫列出星曜与浅白解释。开发中。', on: true },
      { text: '逐日跟随农历', detail: '二十四节气、闰月与每日干支，按 UTC+7 计算。开发中。' },
      { text: '迷茫时起一卦', detail: '六十四卦，每卦六爻，附原文与现代解读。开发中。' },
      { text: '征得同意后才询问 AI 顾问', detail: '顾问默认关闭。在你同意之前，任何数据都不会离开手机。', on: true },
      { text: '浅色或深色皆可', detail: '白天象牙色，夜晚午夜蓝，始终是同一抹沉静的金。' },
    ],
  },

  modules: {
    heading: '六门学问，一个应用',
    status: '开发中',
    items: {
      tuvi: { name: '紫微斗数', summary: '十二宫与百余颗星曜组成的命盘。', fact: '12 宫' },
      batu: { name: '八字', summary: '四柱：以天干地支写下出生的年、月、日、时。', fact: '4 柱 8 字' },
      phongthuy: { name: '风水', summary: '住宅方位、八宅与环绕居所的五行。', fact: '8 个方位' },
      kinhdich: { name: '易经', summary: '起卦，读卦辞与变爻。', fact: '64 卦' },
      licham: { name: '农历', summary: '阴阳合历：农历日期、节气与宜忌。', fact: '24 节气' },
      thansohoc: { name: '数字命理', summary: '由姓名与生日得出生命灵数与核心数字。', fact: '9 个核心数' },
    },
  },

  about: {
    line1: '是传承，',
    line2: '不是预言。',
    blocks: [
      { title: '方法清楚说明', body: '每张命盘都注明所依据的流派与规则，你可以自己核对推算，而不必信任黑箱。' },
      { title: '数据属于你', body: '出生资料只存在你的手机上。无需注册账号，AI 顾问由你主动开启，而不是监视你。' },
    ],
    action: '上线时通知我',
    pictureAlt: '淡淡满月下，湖边叠起的石头',
  },

  faq: {
    heading: '大家常问的问题',
    items: [
      { q: 'Qelunai 是算命吗？', a: '不是。它把东方传统体系作为文化遗产与反思的契机来呈现，不预测未来，也不替你做决定。' },
      { q: '现在可以用了吗？', a: '还不行。Qelunai 正在为 Android 与 iOS 开发。在下方留下邮箱，上线时我们只会写信一次。' },
      { q: '支持哪些语言？', a: '上线时支持越南语与英语，之后加入中文与韩语。本网站已提供这四种语言。' },
      { q: 'AI 会读取我的数据吗？', a: '只有在你开启顾问并同意分享某张命盘时才会。默认关闭，随时可以再关掉。' },
      { q: '这些方法从何而来？', a: '来自古籍以及紫微斗数、八字、风水与易经中广为使用的流派。每项功能都会在应用内注明出处。' },
    ],
  },

  cta: {
    line1: '静静地',
    line2: '开始。',
    sub: '上线时一封邮件，仅此而已。',
    dialogTitle: 'Qelunai 准备好时告诉我',
    emailLabel: '你的邮箱',
    emailPlaceholder: 'you@example.com',
    platformLabel: '你的手机',
    button: '发送请求',
    mailSubject: 'Qelunai 上线时通知我',
    mailBody: 'Qelunai 上线时请通知我。\n\n邮箱：{email}\n平台：{platform}',
  },

  footer: {
    notes: ['Qelunai 正在开发中。没有预言，没有付费解读。', '即将登陆 Android 与 iOS。'],
    top: '回到顶部',
    contactLabel: '写信给我们',
    credits: '插画为 Qelunai 专门绘制',
    rights: '保留所有权利。',
  },

  notFound: { title: '这一页走丢了', body: '你要找的页面不存在。', home: '返回 Qelunai' },
} satisfies Locale;
