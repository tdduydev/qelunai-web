// Blog rules shared by the Astro pages, the JSON feed, the tests and
// scripts/notify-blog.mjs. Plain JavaScript so Node can import it directly.
// The feed format is fixed by docs/blog-contract.md.

/** Most items in a feed. */
export const maxFeedItems = 50;

/** Tags `content_html` may contain, and the attributes each may keep. */
export const allowedTags = {
  p: [], h2: [], h3: [], ul: [], ol: [], li: [], strong: [], em: [], a: ['href'], blockquote: [],
  figure: [], figcaption: [], img: ['src', 'alt', 'width', 'height'], hr: [], br: [],
};

/** Elements dropped with everything inside them. */
const droppedWithContent = ['script', 'style', 'iframe', 'object', 'embed', 'noscript', 'template', 'svg', 'math', 'head', 'title'];

const voidTags = new Set(['img', 'hr', 'br']);

/**
 * Publication time of a post. A bare date (`2026-10-31`) means midnight in
 * Vietnam (UTC+7). Anything with a time is taken as written, so write the
 * offset: `2026-10-31T07:00:00+07:00`. YAML turns both into a Date before
 * Astro sees them; a bare date arrives as UTC midnight, which is how it is
 * told apart.
 */
export function vnDate(value) {
  if (value instanceof Date) {
    if (Number.isNaN(value.getTime())) throw new Error('invalid date');
    const bare = value.getUTCHours() === 0 && value.getUTCMinutes() === 0 && value.getUTCSeconds() === 0 && value.getUTCMilliseconds() === 0;
    return bare ? new Date(`${value.toISOString().slice(0, 10)}T00:00:00+07:00`) : value;
  }
  const s = String(value).trim().replace(/^(['"])(.*)\1$/, '$2');
  const d = /^\d{4}-\d{2}-\d{2}$/.test(s) ? new Date(`${s}T00:00:00+07:00`) : new Date(/[zZ]|[+-]\d{2}:?\d{2}$/.test(s) ? s : `${s.replace(' ', 'T')}Z`);
  if (Number.isNaN(d.getTime())) throw new Error(`invalid date: ${value}`);
  return d;
}

/** `2026-10-31T07:00:00+07:00`: the time in Vietnam, as the feed shows it. */
export function vnIso(date) {
  const local = new Date(date.getTime() + 7 * 3600_000).toISOString().slice(0, 19);
  return `${local}+07:00`;
}

/** Not a draft and not dated in the future. */
export function isPublished(post, now = new Date()) {
  return post.draft !== true && post.date.getTime() <= now.getTime();
}

/** Published posts, newest first (ties by slug), at most `max`. */
export function selectPosts(posts, now = new Date(), max = Infinity) {
  return posts
    .filter((p) => isPublished(p, now))
    .sort((a, b) => b.date - a.date || a.slug.localeCompare(b.slug))
    .slice(0, max);
}

/**
 * Minutes to read: 220 words a minute for Latin-script text, 400 characters
 * a minute for Chinese and Korean. At least one.
 */
export function readingMinutes(text) {
  const plain = text.replace(/<[^>]+>/g, ' ');
  const cjk = (plain.match(/[㐀-鿿가-힯]/g) ?? []).length;
  const words = (plain.replace(/[㐀-鿿가-힯]/g, ' ').match(/[\p{L}\p{N}]+/gu) ?? []).length;
  return Math.max(1, Math.round(words / 220 + cjk / 400));
}

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const decodeAttr = (s) =>
  s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d))).replace(/&amp;/g, '&');

/** An absolute https URL for `href`/`src`, resolved against `base`; null if it cannot be one. */
function absoluteHttps(value, base) {
  try {
    const url = new URL(value.trim(), base);
    return url.protocol === 'https:' ? url.href : null;
  } catch {
    return null;
  }
}

/**
 * Cuts rendered post HTML down to what the app renders: only `allowedTags`,
 * only their listed attributes, `href`/`src` made absolute against `pageUrl`.
 * Disallowed tags are unwrapped (their text kept); scripts, styles, iframes
 * and the like are removed whole. Links that cannot become https (mailto:,
 * javascript:) lose the link and keep the text; images without a usable
 * `src` are dropped.
 */
export function sanitizeFeedHtml(html, pageUrl) {
  let s = html.replace(/<!--[\s\S]*?-->/g, '');
  for (const tag of droppedWithContent) {
    s = s.replace(new RegExp(`<${tag}\\b[\\s\\S]*?<\\/${tag}\\s*>`, 'gi'), '').replace(new RegExp(`<\\/?${tag}\\b[^>]*>`, 'gi'), '');
  }
  // Tables are not in the contract: each row becomes a paragraph, cells joined by " · ", header cells bold.
  s = s.replace(/<table\b[^>]*>([\s\S]*?)<\/table\s*>/gi, (_, table) =>
    [...table.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr\s*>/gi)]
      .map(([, row]) => {
        const cells = [...row.matchAll(/<(t[hd])\b[^>]*>([\s\S]*?)<\/\1\s*>/gi)].map(([, kind, cell]) => (kind.toLowerCase() === 'th' ? `<strong>${cell.trim()}</strong>` : cell.trim()));
        return `<p>${cells.join(' · ')}</p>`;
      })
      .join('\n'),
  );
  const openLinks = [];
  s = s.replace(/<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:[^>"']|"[^"]*"|'[^']*')*)>/g, (_, close, rawName, rawAttrs) => {
    const name = rawName.toLowerCase();
    if (!Object.hasOwn(allowedTags, name)) return '';
    if (close) {
      if (voidTags.has(name)) return '';
      if (name === 'a') return openLinks.pop() ? '</a>' : '';
      return `</${name}>`;
    }
    const attrs = {};
    for (const m of rawAttrs.matchAll(/([^\s=/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g)) {
      const key = m[1].toLowerCase();
      if (allowedTags[name].includes(key)) attrs[key] = decodeAttr(m[2] ?? m[3] ?? m[4] ?? '');
    }
    if (name === 'a') {
      const href = attrs.href === undefined ? null : absoluteHttps(attrs.href, pageUrl);
      openLinks.push(Boolean(href));
      return href ? `<a href="${escapeAttr(href)}">` : '';
    }
    if (name === 'img') {
      const src = attrs.src === undefined ? null : absoluteHttps(attrs.src, pageUrl);
      if (!src) return '';
      attrs.src = src;
      if (attrs.width && !/^\d+$/.test(attrs.width)) delete attrs.width;
      if (attrs.height && !/^\d+$/.test(attrs.height)) delete attrs.height;
    }
    const kept = allowedTags[name].filter((k) => attrs[k] !== undefined).map((k) => ` ${k}="${escapeAttr(attrs[k])}"`).join('');
    return `<${name}${kept}>`;
  });
  return s.replace(/\n{3,}/g, '\n\n').trim();
}

/**
 * A JSON Feed 1.1 document (see docs/blog-contract.md). `posts` hold
 * `slug`, `url`, `title`, `summary`, `html` (already sanitised), `image`
 * (absolute), `date`, `updated?`, `tags`, `readingMinutes`, `appRoute?`
 * and `draft?`; drafts, future posts and anything past the 50 newest are left out.
 */
export function buildFeed({ lang, title, homeUrl, feedUrl, posts, now = new Date() }) {
  return {
    version: 'https://jsonfeed.org/version/1.1',
    title,
    home_page_url: homeUrl,
    feed_url: feedUrl,
    language: lang,
    items: selectPosts(posts, now, maxFeedItems).map((p) => ({
      id: p.slug,
      url: p.url,
      title: p.title,
      summary: p.summary,
      content_html: p.html,
      image: p.image,
      date_published: vnIso(p.date),
      date_modified: vnIso(p.updated ?? p.date),
      tags: p.tags,
      _qelunai: { readingMinutes: p.readingMinutes, ...(p.appRoute ? { appRoute: p.appRoute } : {}) },
    })),
  };
}
