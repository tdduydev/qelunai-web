import type { PolicyLocale } from './types';

/**
 * Languages that only have the privacy page, at `/<code>/privacy/`, because the
 * store listings in these languages need a policy URL in the same language. The
 * rest of the site is not translated: header and footer link to the Vietnamese
 * and English home pages, and no other page links to `/<code>/...`. The policy
 * text itself comes from `src/content/privacy.<code>.md`.
 */
export const policyLocales: PolicyLocale[] = [
  {
    code: 'zh',
    htmlLang: 'zh-Hans',
    ogLocale: 'zh_CN',
    nativeName: '简体中文',
    order: 2,
    skip: '跳到正文',
    home: 'Qelunai 首页',
    language: '语言',
    title: '隐私政策',
    description: 'Qelunai 收集哪些数据、数据保存在哪里、谁可以读取，以及如何删除您的数据或账户。',
    onThisPage: '本页内容',
    contact: '隐私问题：请发送邮件至 support@qelunai.com。',
    homeLinks: '首页（越南语 · 英语）：',
  },
  {
    code: 'ko',
    htmlLang: 'ko',
    ogLocale: 'ko_KR',
    nativeName: '한국어',
    order: 3,
    skip: '본문으로 건너뛰기',
    home: 'Qelunai 홈',
    language: '언어',
    title: '개인정보 처리방침',
    description: 'Qelunai가 수집하는 데이터, 저장 위치, 열람할 수 있는 사람, 데이터 또는 계정을 삭제하는 방법을 안내합니다.',
    onThisPage: '이 페이지의 내용',
    contact: '개인정보 관련 문의: support@qelunai.com으로 이메일을 보내 주세요.',
    homeLinks: '홈(베트남어 · 영어):',
  },
];
