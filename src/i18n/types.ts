export type FeatureId = 'today' | 'licham' | 'kinhdich' | 'phongthuy' | 'giadinh' | 'thansohoc' | 'batu';

/** Every page exists once per language; see `pagePaths` in `./index.ts`. */
export type PageId = 'home' | 'privacy' | 'support' | 'deleteAccount' | 'terms' | 'testers' | 'calendar' | 'hours' | 'iching' | 'download';

/** A heading and its paragraphs; `**bold**` is allowed inside. */
export interface Block {
  title: string;
  body: string[];
  /** Optional list after the paragraphs. */
  list?: string[];
  /** Number the list, for steps. */
  ordered?: boolean;
}

/**
 * Everything one language needs. Add a language by dropping a file in `./locales/`
 * that default-exports an object satisfying this type; routes, the language menu,
 * hreflang tags and the sitemap pick it up automatically.
 */
export interface Locale {
  /** URL segment and hreflang code, e.g. `vi`, `en`. The default locale is served at `/`. */
  code: string;
  /** Value of `<html lang>` (BCP 47). */
  htmlLang: string;
  /** Open Graph locale, e.g. `vi_VN`. */
  ogLocale: string;
  /** Name written in the language itself, shown in the language menu. */
  nativeName: string;
  /** Position in the language menu; lower comes first. */
  order: number;
  /** Short label in the language menu, e.g. `VI`, `中文`. */
  menuLabel: string;

  seo: { title: string; description: string; keywords: string; ogAlt: string };

  nav: { calendar: string; features: string; faq: string; support: string; action: string; language: string; skip: string; home: string };

  store: { appStore: string; googlePlay: string; getOn: string; soon: string };

  /** Beta sign-up buttons: Android goes to the testers page, iOS opens an email. */
  beta: {
    android: string;
    ios: string;
    /** Email subject of the iOS button, after `[Qelunai iOS beta] `. */
    iosSubject: string;
    /** The same two buttons on the tool pages, and their email. */
    joinAndroid: string;
    requestIos: string;
    /** After `[Qelunai beta] `. */
    subject: string;
    body: string;
  };

  /** Links to the free web tools on the landing page, footer and tool pages. */
  tools: {
    eyebrow: string;
    heading: string;
    calendar: string;
    hours: string;
    iching: string;
    explore: string;
    footerCalendar: string;
    footerHours: string;
    footerIching: string;
  };

  hero: { eyebrow: string; title: string; accent: string; sub: string; shotAlt: string };

  features: {
    eyebrow: string;
    heading: string;
    sub: string;
    items: Record<FeatureId, { kicker: string; name: string; summary: string; points: string[]; shotAlt?: string }>;
  };

  extras: { eyebrow: string; heading: string; items: { title: string; body: string }[] };

  principles: { eyebrow: string; heading: string; items: { title: string; body: string }[]; seal: string };

  faq: { eyebrow: string; heading: string; items: { q: string; a: string }[]; more: string };

  download: { heading: string; sub: string; pictureAlt: string };

  footer: {
    tagline: string;
    app: string;
    help: string;
    legal: string;
    contact: string;
    disclaimer: string;
    rights: string;
  };

  pages: {
    privacy: { title: string; description: string; onThisPage: string; contact: string };
    support: {
      title: string;
      description: string;
      lead: string;
      contactTitle: string;
      contactBody: string;
      contactAction: string;
      faqTitle: string;
      faq: { q: string; a: string }[];
    };
    deleteAccount: {
      title: string;
      description: string;
      lead: string;
      blocks: Block[];
      mailAction: string;
      mailSubject: string;
      mailBody: string;
    };
    terms: { title: string; description: string; updated: string; lead: string; blocks: Block[] };
    testers: { title: string; description: string; lead: string; blocks: Block[] };
    updatedLabel: string;
    backHome: string;
    /** On the legal pages of a translated language: the Vietnamese or English text controls. */
    translationNotice?: string;
  };

  notFound: { title: string; body: string; home: string };
}

/** A language that only has the privacy page; see `./policy-locales.ts`. */
export interface PolicyLocale {
  /** URL segment, e.g. `zh` for `/zh/privacy/`. */
  code: string;
  /** Value of `<html lang>` and the hreflang code (BCP 47), e.g. `zh-Hans`. */
  htmlLang: string;
  ogLocale: string;
  nativeName: string;
  /** Position in the language menu after the full languages; lower comes first. */
  order: number;
  skip: string;
  /** Label of the home link and the header navigation. */
  home: string;
  /** Label of the language menu. */
  language: string;
  title: string;
  description: string;
  onThisPage: string;
  contact: string;
  /** Footer text before the links to the Vietnamese and English home pages. */
  homeLinks: string;
}
