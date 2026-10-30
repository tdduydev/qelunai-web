import type { APIRoute } from 'astro';
import { alternatesFor, defaultLocale, noindexPages, pages, pathFor } from '../i18n';

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .filter((page) => !noindexPages.includes(page))
    .flatMap((page) => {
      const versions = alternatesFor(page);
      const alternates = [
        ...versions.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.hreflang}" href="${abs(l.href)}"/>`),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(pathFor(defaultLocale, page))}"/>`,
      ].join('\n');
      return versions.map(
        (l) => `  <url>
    <loc>${abs(l.href)}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}
  </url>`,
      );
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
