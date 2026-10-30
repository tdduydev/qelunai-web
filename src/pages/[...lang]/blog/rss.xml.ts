import type { APIRoute } from 'astro';
import { localePaths, type Locale } from '../../../i18n';
import { feedFor } from '../../../lib/blog';

export const getStaticPaths = localePaths;

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** RSS 2.0 for feed readers; the same posts and HTML as the JSON feed the app reads. */
export const GET: APIRoute = async ({ props, site }) => {
  const locale = (props as { locale: Locale }).locale;
  const feed = await feedFor(locale.code, site!, locale.blog.feedTitle);
  const items = feed.items
    .map(
      (item) => `    <item>
      <title>${escape(item.title)}</title>
      <link>${escape(item.url)}</link>
      <guid isPermaLink="true">${escape(item.url)}</guid>
      <pubDate>${new Date(item.date_published).toUTCString()}</pubDate>
      <description>${escape(item.summary)}</description>
      <content:encoded><![CDATA[${item.content_html.replace(/]]>/g, ']]]]><![CDATA[>')}]]></content:encoded>
      <enclosure url="${escape(item.image)}" type="image/jpeg" length="0"/>
${item.tags.map((tag) => `      <category>${escape(tag)}</category>`).join('\n')}
    </item>`,
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escape(feed.title)}</title>
    <link>${escape(feed.home_page_url)}</link>
    <atom:link href="${escape(`${feed.home_page_url}rss.xml`)}" rel="self" type="application/rss+xml"/>
    <description>${escape(locale.blog.description)}</description>
    <language>${locale.htmlLang}</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
