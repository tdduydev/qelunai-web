import type { Locale } from '../types';

export default {
  code: 'zh',
  htmlLang: 'zh-Hans',
  ogLocale: 'zh_CN',
  nativeName: '简体中文',
  order: 2,
  menuLabel: '中文',

  seo: {
    title: 'Qelunai：越南农历、黄道吉时、易经、八字与风水',
    description:
      'Qelunai 是一款漆画风格的越南农历应用：今日撕页日历、黄道吉时、择日、易经起卦、数字命理、八字、八宅罗盘和家庭忌日簿。支持 iPhone 和 Android。',
    keywords: 'Qelunai, 越南农历, 万年历, 黄道吉时, 择日, 易经, 起卦, 数字命理, 八字, 四柱, 八宅风水, 罗盘, 家庭忌日簿, 忌日提醒',
    ogAlt: 'Qelunai：漆画与金箔中的越南农历和东方智慧',
  },

  nav: {
    calendar: '农历',
    features: '功能',
    faq: '常见问题',
    support: '帮助',
    action: '下载应用',
    language: '语言',
    skip: '跳到正文',
    home: 'Qelunai 首页',
  },

  store: { appStore: 'App Store', googlePlay: 'Google Play', getOn: '下载于', soon: '即将登陆 App Store 和 Google Play。' },

  beta: {
    android: 'Android 测试版',
    ios: '申请 iOS TestFlight',
    iosSubject: '申请试用',
    joinAndroid: '加入 Android 测试',
    requestIos: '申请 iOS TestFlight',
    subject: '申请加入测试',
    body: '我想在以下系统上测试 Qelunai（iOS/Android）：',
  },

  tools: {
    eyebrow: '在网站上直接使用',
    heading: '免费工具，无需登录',
    calendar: '越南农历与日期换算',
    hours: '查黄道吉时',
    iching: '了解易经',
    explore: '更多内容',
    footerCalendar: '免费农历',
    footerHours: '黄道吉时',
    footerIching: '易经',
  },

  hero: {
    eyebrow: '农历 · 易经 · 八字 · 风水',
    title: '每天一页日历，',
    accent: '每个疑问一卦。',
    sub: 'Qelunai 把越南农历、黄道吉时、易经和家庭忌日放在一块漆板上：黑漆、金箔、朱红。所有计算都在你的手机上完成。',
    shotAlt: 'Qelunai 的“今天”页面：2026 年 10 月 29 日（农历九月二十）的撕页日历和黄道吉时表盘',
  },

  features: {
    eyebrow: '应用内容',
    heading: 'Qelunai 能为你做什么',
    sub: '下面的画面截自真实的应用。',
    items: {
      today: {
        kicker: '今天',
        name: '每天早上一页撕页日历',
        summary: '打开应用，当天的日历页已经准备好：公历和农历日期、干支、黄道日或黑道日、建除十二值和节气。',
        points: ['当前的黄道吉时及剩余分钟', '当前节气、下一个节气及距离天数', '把今天的日历页分享为图片'],
        shotAlt: '“今天”页面：10 月 29 日丙子日的日历页和黄道吉时圆盘',
      },
      licham: {
        kicker: '农历',
        name: '月历、吉日、合婚',
        summary: '月历中每个公历日期下都标着农历日期，并标出黄道日、初一和十五。点开某一天，可以看到 12 个时辰、干支、建除和节气。',
        points: [
          '即将到来：未来 45 天内的初一、十五、节气、春节和忌日',
          '为 9 类事项择日，包括婚嫁、开业、动土、入宅、出行和签约',
          '查看两人的合婚参考，并用二维码交换生肖卡',
        ],
        shotAlt: '2026 年 10 月的月历，标有农历日期、黄道日以及 29 日的详情',
      },
      kinhdich: {
        kicker: '易经',
        name: '先静心，再起卦',
        summary: '慢慢呼吸三次，心中想着你的问题，然后轻点或摇动手机，掷三枚硬币六次。Qelunai 生成本卦和变卦，并解读每一爻。',
        points: ['全部 64 卦，应用内附卦义', '全部 384 爻的解读，登录后一次性下载数据包', '保存起卦记录；你输入的问题不会被保存'],
        shotAlt: '起卦前的静心画面，配有漆画莲花',
      },
      phongthuy: {
        kicker: '风水',
        name: '八宅风水，叠加在真实房间上',
        summary: 'Qelunai 根据你的出生年份和性别算出命卦、东四命或西四命，以及 4 个吉方和 4 个凶方。',
        points: ['八宅罗盘把 8 个方位叠加在后置摄像头画面上', '不允许使用相机时，仍可使用罗盘表盘', '画面只显示在屏幕上，不拍摄也不保存'],
        shotAlt: '八宅罗盘：朝向东南（生气）的八方位表盘',
      },
      giadinh: {
        kicker: '忌日',
        name: '家庭忌日簿',
        summary: '按农历日期输入一次忌日。Qelunai 每年把它换算成公历日期，并提前提醒你。',
        points: ['当天提醒，或提前 1、3、7 天提醒', '每月初一和十五的提醒', '在闰月去世的，忌日按同一数字的正常月份计算'],
        shotAlt: '家庭忌日页面，带添加按钮以及初一、十五提醒',
      },
      thansohoc: {
        kicker: '数字命理',
        name: '姓名和生日里的数字',
        summary: '根据你出生时的全名和公历生日，用毕达哥拉斯数字命理计算。',
        points: ['生命灵数、表达数、灵魂数和人格数', '保留卓越数 11、22 和 33', '每个数字都有解读'],
      },
      batu: {
        kicker: '八字',
        name: '年柱、月柱、日柱、时柱',
        summary: '四柱按越南时间（UTC+7）的节气划分，依照子平法。',
        points: ['日主和五行统计', '填写性别后可看大运', '尚未提供的内容会直接说明：纳音、格局、十神、吉凶解读'],
      },
    },
  },

  extras: {
    eyebrow: '随时陪伴',
    heading: '主屏幕之外',
    items: [
      {
        title: '主屏幕小组件',
        body: 'iPhone 和 Android 上均可使用：不打开应用也能看到公历和农历日期、干支以及下一个吉时。',
      },
      {
        title: '一个账户，所有设备',
        body: '用电子邮件、Google 或 Apple 登录。出生资料、起卦记录和忌日都会备份到你的账户。',
      },
      {
        title: '在手机上计算',
        body: '农历日期、干支、黄道吉时和命盘都在手机上计算，离线也能使用。',
      },
      {
        title: '越南语、英语、简体中文和韩语',
        body: '随时切换语言。中文界面中，干支、卦名和节气以汉字显示。',
      },
    ],
  },

  principles: {
    eyebrow: '我们的原则',
    heading: '供你思考的传统，而非定论',
    seal: '安',
    items: [
      {
        title: '参考，而非预言',
        body: '历法、卦象和命盘是供人思考的文化传统。Qelunai 不做预测，也不能替代医疗、法律或财务建议。',
      },
      {
        title: '每项同意各有一个勾选框',
        body: '每一种数据用途都有自己的勾选框，均不预先勾选。你可以随时在“个人资料”中撤回其中任何一项。',
      },
      {
        title: '你的数据不出售',
        body: '广告和统计工具永远不会获得你的姓名、出生日期、起卦记录或忌日。',
      },
    ],
  },

  faq: {
    eyebrow: '常见问题',
    heading: '常见问题',
    more: '更多内容见帮助页面',
    items: [
      {
        q: 'Qelunai 免费吗？',
        a: '免费。农历、黄道吉时、命盘、易经、合婚和生肖卡都免费。免费版可能显示广告。Qelunai Plus 上架后，将去除广告，并提供 12 个月范围的择日、不限数量的家人资料和更多忌日提醒。',
      },
      {
        q: '需要账户吗？',
        a: '需要。用电子邮件、Google 或 Apple 登录，你的出生资料、起卦记录和忌日才能备份，并在每台设备上使用。',
      },
      {
        q: '农历按哪个时区计算？',
        a: '越南时间（UTC+7）。由于时区不同，越南农历和中国农历在某些年份会相差一天；Qelunai 采用越南农历。',
      },
      {
        q: '我的数据保存在哪里？',
        a: '保存在你的手机上，以及你在 Cloud Firestore（Google）新加坡区域的账户中。只有你的账户可以读取。详情见隐私政策页面。',
      },
      {
        q: 'Qelunai 可以在哪些设备上运行？',
        a: 'iPhone（iOS 15 或更高版本，小组件需要 iOS 16）和 Android 手机。',
      },
      {
        q: '如何删除账户？',
        a: '在应用中：个人资料 > 删除账户。也可以用注册时的邮箱发送邮件至 support@qelunai.com。详见删除账户页面。',
      },
    ],
  },

  download: {
    heading: '翻开你的第一页',
    sub: '在 iPhone 或 Android 上获取 Qelunai。',
    pictureAlt: '黑漆上用金箔和蛋壳镶嵌的莲花',
  },

  footer: {
    tagline: '漆画与金箔中的越南农历和东方智慧。',
    app: '应用',
    help: '帮助',
    legal: '法律信息',
    contact: '联系',
    disclaimer: '内容仅供娱乐和文化参考，不构成专业建议。',
    rights: 'Qelunai。',
  },

  pages: {
    testers: {
      title: '在 Android 上测试 Qelunai',
      description: '加入 Qelunai 在 Google Play 上的封闭测试：加入测试群组，接受邀请，安装应用，并在测试中至少连续留满 14 天。',
      lead: 'Qelunai 需要至少 12 位 Android 用户连续 14 天留在测试中，才能在 Google Play 上发布。感谢你的帮助！',
      blocks: [
        {
          title: '加入测试的四个步骤',
          ordered: true,
          body: ['四个步骤都使用同一个 Google 账户：也就是你手机上登录 Google Play 的那个账户。'],
          list: [
            '打开测试群组页面，点击**加入群组**按钮：https://groups.google.com/g/qelunai-testers',
            '打开邀请页面，点击**成为测试人员**按钮：https://play.google.com/apps/testing/com.qelunai.qelunai',
            '在该页面点击前往 Google Play 下载的链接，然后像安装其他应用一样安装 Qelunai。',
            '打开应用，登录并试用。**至少连续 14 天留在测试中**：不要退出群组或测试计划。提前退出的话，Google 不会计入你的测试；退出后重新加入，14 天会重新计算。在此期间请保留应用。',
          ],
        },
        {
          title: '在这 14 天里',
          body: [],
          list: [
            '打开应用几次：看看今天、起一卦、试试罗盘。',
            '发现错误或不好用的地方？请在 Google Play 的 Qelunai 页面发送反馈，或发邮件至 support@qelunai.com。',
            '测试版会显示真实的 Google AdMob 广告。请不要为了帮助应用而点击广告：Google 会把这视为作弊。',
          ],
        },
        {
          title: '问题解答',
          body: [
            '**页面显示应用不可用，或者没有成为测试人员的按钮？** 你还没有完成第 1 步加入群组，或者浏览器登录的是另一个 Google 账户。请确认使用的是手机上的账户，用 Chrome 打开链接（不要在聊天应用内打开），然后重新加载页面。',
            '**需要付费吗？** 不需要。应用免费，测试版不出售任何东西。',
            '**我的数据？** 与正式版相同，见隐私政策页面。你可以随时在“个人资料 > 删除账户”中删除账户。',
            '**想退出测试？** 请等 14 天结束后，再打开邀请页面退出测试计划；你可以继续作为普通用户使用应用。',
          ],
        },
      ],
    },
    updatedLabel: '更新于',
    backHome: '返回首页',
    translationNotice: '本页为中文译本，仅供参考；如与越南语版或英语版有出入，以越南语版或英语版为准。',
    privacy: {
      title: '隐私政策',
      description: 'Qelunai 收集哪些数据、数据保存在哪里、谁可以读取，以及如何删除您的数据或账户。',
      onThisPage: '本页内容',
      contact: '隐私问题：请发送邮件至 support@qelunai.com。',
    },
    support: {
      title: '帮助',
      description: '如何联系 Qelunai，以及关于登录、同步、删除账户、Qelunai Plus 和广告的解答。',
      lead: '使用 Qelunai 需要帮助？请先看下面的解答，或写信给我们。',
      contactTitle: '联系我们',
      contactBody: '发送邮件至 support@qelunai.com。请写明你的设备（iPhone 或 Android）、应用版本（在“个人资料”中）以及问题的简短描述。请勿发送密码。',
      contactAction: '写邮件',
      faqTitle: '常见问题',
      faq: [
        {
          q: '如何登录？',
          a: '选择电子邮件、Google 或 Apple（iPhone 上可用 Apple）。登录前，请勾选同意备份到你的账户；勾选后登录按钮才可使用。忘记了邮箱密码？在登录画面点击**忘记密码？**。',
        },
        {
          q: '我的数据会在设备之间同步吗？',
          a: '会。出生资料、起卦记录和忌日都保存在你的账户中。在另一台设备上登录同一个账户即可看到。离线时的修改会在下次同步时上传。退出登录会删除设备上的副本；数据仍保留在你的账户中。',
        },
        {
          q: '如何删除账户？',
          a: '在应用中进入**个人资料 > 删除账户**，或用注册时的邮箱发送邮件至 support@qelunai.com。步骤和会删除的内容见删除账户页面。',
        },
        {
          q: '广告和 Qelunai Plus',
          a: '免费版可能显示 Google AdMob 广告，但不会出现在登录画面、起卦过程中、相机罗盘或小组件中。应用目前还没有出售任何付费方案。推出后，Qelunai Plus 将是通过 App Store 或 Google Play 购买的无广告月度或年度订阅；付款、取消和退款由 Apple 或 Google 处理。',
        },
        {
          q: '我收不到忌日提醒',
          a: '开启提醒时，应用会请求通知权限。如果你当时拒绝了，请在手机的“设置”中允许 Qelunai 发送通知，然后打开该忌日并开启**提醒这个忌日**。',
        },
        {
          q: '罗盘指向不对',
          a: '远离磁铁、带磁性的手机壳和大型金属物体，然后按应用的提示，把手机按 8 字形移动几次进行校准。',
        },
      ],
    },
    deleteAccount: {
      title: '删除账户',
      description: '如何删除你的 Qelunai 账户及其全部数据：直接在应用中删除，或发送邮件至 support@qelunai.com。',
      lead: '你可以随时用下面两种方式之一，删除你的 Qelunai 账户及其全部数据。',
      mailAction: '通过邮件申请删除',
      mailSubject: 'Qelunai 账户删除申请',
      mailBody: '请删除用此邮箱地址注册的 Qelunai 账户及其全部数据。',
      blocks: [
        {
          title: '方式一：在应用中删除',
          ordered: true,
          body: ['最快的方式，数据会立即删除。'],
          list: [
            '打开 Qelunai，登录你要删除的账户。',
            '进入**个人资料**。',
            '点击**删除账户**。',
            '阅读提示，然后点击**永久删除**。',
            '如果应用要求重新登录，请登录后再点击一次**删除账户**。',
          ],
        },
        {
          title: '方式二：发送邮件',
          body: [
            '无法打开应用？请**用注册时的邮箱**发送邮件至 support@qelunai.com，主题为“Qelunai 账户删除申请”。如果你使用“通过 Apple 登录”并隐藏了邮箱，请在邮件中说明。',
            '我们会核实申请，**在 30 天内**删除账户及其数据，并回信确认。',
          ],
        },
        {
          title: '会删除的内容',
          body: [],
          list: [
            '账户在 Cloud Firestore 上的全部数据：出生资料、起卦记录、忌日、帮助聊天记录和技术同步数据。',
            'Firebase Authentication 账户：邮箱、用户 ID、登录方式、经过哈希处理的密码。',
            '设备上的数据副本，以及所有忌日提醒（在应用中删除时）。',
          ],
        },
        {
          title: '不在账户中的数据',
          body: [],
          list: [
            '同意记录只保存在设备上；卸载应用即可删除。',
            '使用统计和崩溃报告（仅在你开启时才有）不与你的账户关联，也不包含姓名或出生日期；Google 按其自身政策保存。',
            '购买记录和订阅由 Apple 或 Google 保存。**删除账户不会取消 Qelunai Plus**：请在 App Store 或 Google Play 的订阅中取消。',
          ],
        },
        {
          title: '只想删除部分数据？',
          body: [
            '不必删除账户：可以在**命盘**中删除单个资料，清除起卦记录，或选择**个人资料 > 删除所有资料和记录**。数据会在下次同步时从设备和你的账户中删除。',
          ],
        },
      ],
    },
    terms: {
      title: '使用条款',
      description: 'Qelunai 应用的使用条款：参考用途、账户、Qelunai Plus、广告和最终用户许可。',
      updated: '2026年10月29日',
      lead: '下载或使用 Qelunai，即表示你同意这些条款。请与隐私政策一起阅读。',
      blocks: [
        {
          title: '用途',
          body: [
            'Qelunai 将农历、黄道吉时、易经、数字命理、八字和风水作为**文化传统，供娱乐和参考**。其中任何内容都不是预测，也**不能替代**健康、心理健康、法律、财务或投资方面的**专业建议**。你需要为自己的决定负责。',
          ],
        },
        {
          title: '你的账户',
          body: [
            '你必须年满 16 岁并拥有账户（电子邮件、Google 或 Apple）才能使用 Qelunai。请妥善保管你的登录方式。你可以随时按删除账户页面的说明删除账户。',
          ],
        },
        {
          title: '可接受的使用',
          body: ['你不得：'],
          list: [
            '在个人使用之外复制、转售或传播应用的内容。',
            '对应用进行逆向工程、篡改或绕过其技术限制，法律允许的情况除外。',
            '将应用或我们的服务器用于任何违法或伤害他人的用途。',
          ],
        },
        {
          title: 'Qelunai Plus 和应用内购买',
          body: [
            'Qelunai Plus 上架后，是通过 App Store 或 Google Play 购买的月度或年度订阅。付款、自动续订、试用、取消和退款均遵循 Apple 或 Google 的条款。订阅会自动续订，直到你在商店的订阅中取消。价格和权益会在购买前于应用中显示。',
          ],
        },
        {
          title: '广告',
          body: ['免费版可能显示 Google AdMob 广告。我们不对广告主的内容或产品负责。'],
        },
        {
          title: '最终用户许可',
          body: [
            'Qelunai 是许可你使用，而非出售给你。在 Apple 设备上，**Apple 的“许可应用程序最终用户许可协议”**（标准 EULA）与本条款一并适用：https://www.apple.com/legal/internet-services/itunes/dev/stdeula/。Apple 不对本应用或其内容负责。',
            '在 Android 上，Google Play 服务条款同样适用：https://play.google.com/about/play-terms/',
          ],
        },
        {
          title: '知识产权',
          body: [
            'Qelunai 中的名称、标志、设计、插图和解读属于 Qelunai 或其许可方。易经等经典文本属于公有领域；编辑和解读归 Qelunai 所有。',
          ],
        },
        {
          title: '免责声明',
          body: [
            '本应用按“现状”提供。我们努力确保计算正确，但不保证应用始终没有错误或中断。在法律允许的范围内，Qelunai 不对因使用本应用而产生的间接损失承担责任。',
          ],
        },
        {
          title: '条款变更',
          body: ['条款变更时，我们会更新本页面和上方的日期。此后继续使用应用，即表示你接受新版本。'],
        },
        {
          title: '联系',
          body: ['关于本条款的问题：support@qelunai.com。'],
        },
      ],
    },
  },

  notFound: {
    title: '找不到页面',
    body: '此页面不存在，或已被移动。',
    home: '返回首页',
  },
} satisfies Locale;
