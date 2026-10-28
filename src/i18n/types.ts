export type ModuleId = 'tuvi' | 'batu' | 'phongthuy' | 'kinhdich' | 'licham' | 'thansohoc';

/**
 * Everything one language needs. Add a language by dropping a file in `./locales/`
 * that default-exports an object satisfying this type; routes, the language menu,
 * hreflang tags and the sitemap pick it up automatically.
 */
export interface Locale {
  /** URL segment and hreflang code, e.g. `vi`, `zh`, `ko`. The default locale is served at `/`. */
  code: string;
  /** Value of `<html lang>` (BCP 47), e.g. `zh-Hans`. */
  htmlLang: string;
  /** Open Graph locale, e.g. `vi_VN`. */
  ogLocale: string;
  /** Name written in the language itself, shown in the language menu. */
  nativeName: string;
  /** Position in the language menu; lower comes first. */
  order: number;
  /** Text direction. */
  dir?: 'ltr' | 'rtl';
  /** Which system font stack backs the brand face for this script. */
  script?: 'latin' | 'sc' | 'tc' | 'ja' | 'ko';

  seo: { title: string; description: string; keywords: string };

  nav: { modules: string; principles: string; faq: string; action: string; language: string; skip: string };

  hero: { line1: string; line2: string; sub: string; pictureAlt: string };

  intro: { lines: [string, string, string, string, string]; note: string; pictureAlts: [string, string] };

  features: {
    heading: string;
    on: string;
    off: string;
    items: { text: string; detail: string; on?: boolean }[];
  };

  modules: {
    heading: string;
    status: string;
    items: Record<ModuleId, { name: string; summary: string; fact: string }>;
  };

  about: {
    line1: string;
    line2: string;
    blocks: [{ title: string; body: string }, { title: string; body: string }];
    action: string;
    pictureAlt: string;
  };

  faq: { heading: string; items: { q: string; a: string }[] };

  cta: {
    line1: string;
    line2: string;
    sub: string;
    dialogTitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    platformLabel: string;
    button: string;
    mailSubject: string;
    /** `{email}` and `{platform}` are replaced with the visitor's choices. */
    mailBody: string;
  };

  footer: {
    notes: [string, string];
    top: string;
    contactLabel: string;
    credits: string;
    rights: string;
  };

  notFound: { title: string; body: string; home: string };
}
