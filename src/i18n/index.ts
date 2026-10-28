import type { Locale } from './types';

export type { Locale, ModuleId } from './types';

export const defaultLocaleCode = 'en';

const files = import.meta.glob<{ default: Locale }>('./locales/*.ts', { eager: true });

export const locales: Locale[] = Object.values(files)
  .map((f) => f.default)
  .sort((a, b) => a.order - b.order);

export const defaultLocale = locales.find((l) => l.code === defaultLocaleCode)!;

export const otherLocales = locales.filter((l) => l.code !== defaultLocaleCode);

export function pathFor(locale: Locale | string): string {
  const code = typeof locale === 'string' ? locale : locale.code;
  return code === defaultLocaleCode ? '/' : `/${code}/`;
}

export function getLocale(code: string | undefined): Locale | undefined {
  return locales.find((l) => l.code === code);
}
