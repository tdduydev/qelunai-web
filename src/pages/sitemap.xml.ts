import type { APIRoute } from 'astro';
import { locales, defaultLocale, pages, pathFor } from '../i18n';

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .flatMap((page) => {
      const alternates = [
        ...locales.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${abs(pathFor(l, page))}"/>`),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(pathFor(defaultLocale, page))}"/>`,
      ].join('\n');
      return locales.map(
        (l) => `  <url>
    <loc>${abs(pathFor(l, page))}</loc>
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
