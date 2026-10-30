import type { APIRoute } from 'astro';
import { locales, type Locale } from '../../i18n';
import { feedFor } from '../../lib/blog';

/** `/feeds/blog-{lang}.json`, the feed the app reads (docs/blog-contract.md). */
export const getStaticPaths = () => locales.map((locale) => ({ params: { lang: locale.code }, props: { locale } }));

export const GET: APIRoute = async ({ props, site }) => {
  const locale = (props as { locale: Locale }).locale;
  const feed = await feedFor(locale.code, site!, locale.blog.feedTitle);
  return new Response(`${JSON.stringify(feed, null, 2)}\n`, { headers: { 'Content-Type': 'application/feed+json; charset=utf-8' } });
};
