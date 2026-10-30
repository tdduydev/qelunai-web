import type { APIRoute } from 'astro';
import { alternatesFor, defaultLocale, locales, noindexPages, pages, pathFor, type Alternate } from '../i18n';
import { defaultAlternate, postsFor, translationsOf } from '../lib/blog';

export const GET: APIRoute = async ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const lastmod = new Date().toISOString().slice(0, 10);
  const entry = (versions: Alternate[], xDefault: string, modified: (l: Alternate) => string) => {
    const alternates = [
      ...versions.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.hreflang}" href="${abs(l.href)}"/>`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(xDefault)}"/>`,
    ].join('\n');
    return versions.map(
      (l) => `  <url>
    <loc>${abs(l.href)}</loc>
    <lastmod>${modified(l)}</lastmod>
${alternates}
  </url>`,
    );
  };
  const pageUrls = pages
    .filter((page) => !noindexPages.includes(page))
    .flatMap((page) => entry(alternatesFor(page), pathFor(defaultLocale, page), () => lastmod));
  // Posts list only the languages they are written in.
  const posts = (await Promise.all(locales.map((l) => postsFor(l.code)))).flat();
  const slugs = [...new Set(posts.map((p) => p.slug))];
  const postUrls = (
    await Promise.all(
      slugs.map(async (slug) => {
        const versions = await translationsOf(slug);
        const modified = (l: Alternate) => {
          const p = posts.find((p) => p.slug === slug && p.lang === l.code)!;
          return (p.updated ?? p.date).toISOString().slice(0, 10);
        };
        return entry(versions, defaultAlternate(versions).href, modified);
      }),
    )
  ).flat();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...pageUrls, ...postUrls].join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
