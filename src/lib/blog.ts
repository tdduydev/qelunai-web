import type { ImageMetadata } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { getImage } from 'astro:assets';
import { defaultLocaleCode, locales, pathFor, type Alternate } from '../i18n';
import { buildFeed, readingMinutes, sanitizeFeedHtml, selectPosts } from './blog-core.mjs';

export type BlogEntry = CollectionEntry<'blog'>;

export interface Post {
  entry: BlogEntry;
  /** Language code, the folder under `src/content/blog/`. */
  lang: string;
  /** File name without `.md`; the same in every language. */
  slug: string;
  title: string;
  summary: string;
  date: Date;
  updated?: Date;
  draft: boolean;
  tags: string[];
  readingMinutes: number;
  appRoute?: string;
}

/** The date pages and feeds are built against; posts dated later wait for a later build. */
const now = new Date();

export const blogPath = (lang: string, slug?: string) => `${pathFor(lang, 'blog')}${slug ? `${slug}/` : ''}`;

let all: Post[] | undefined;

async function allPosts(): Promise<Post[]> {
  all ??= (await getCollection('blog')).map((entry) => {
    const [lang, slug] = entry.id.split('/');
    const d = entry.data;
    return {
      entry,
      lang,
      slug,
      title: d.title,
      summary: d.summary,
      date: d.date,
      updated: d.updated,
      draft: d.draft,
      tags: d.tags,
      readingMinutes: readingMinutes(entry.rendered?.html ?? entry.body ?? ''),
      appRoute: d.appRoute,
    };
  });
  return all;
}

/** Published posts in one language, newest first. */
export async function postsFor(lang: string): Promise<Post[]> {
  return selectPosts((await allPosts()).filter((p) => p.lang === lang), now);
}

/** Every language a post is published in, in menu order: hreflang and the sitemap list only these. */
export async function translationsOf(slug: string): Promise<Alternate[]> {
  const langs = new Set(selectPosts((await allPosts()).filter((p) => p.slug === slug), now).map((p) => p.lang));
  return locales
    .filter((l) => langs.has(l.code))
    .map(({ code, htmlLang, ogLocale, nativeName, menuLabel }) => ({
      code,
      hreflang: htmlLang,
      htmlLang,
      ogLocale,
      nativeName,
      menuLabel,
      href: blogPath(code, slug),
    }));
}

/** x-default for a post: the Vietnamese version, else the first one there is. */
export const defaultAlternate = (versions: Alternate[]) => versions.find((v) => v.code === defaultLocaleCode) ?? versions[0];

/** The cover as a 1200×630 JPEG, for social cards and the feed. */
export async function coverImage(post: Post) {
  const img = await getImage({ src: post.entry.data.cover, width: 1200, height: 630, fit: 'cover', format: 'jpeg', quality: 78 });
  return { src: img.src, width: 1200, height: 630 };
}

/** The JSON feed of one language (docs/blog-contract.md). */
export async function feedFor(lang: string, site: URL, title: string) {
  const abs = (path: string) => new URL(path, site).href;
  const posts = await Promise.all(
    (await postsFor(lang)).map(async (p) => {
      const url = abs(blogPath(lang, p.slug));
      return {
        ...p,
        url,
        html: sanitizeFeedHtml((await bodyHtml(p)) + sourcesHtml(p, lang) + aiArtHtml(lang), url),
        image: abs((await coverImage(p)).src),
      };
    }),
  );
  return buildFeed({ lang, title, homeUrl: abs(blogPath(lang)), feedUrl: abs(`/feeds/blog-${lang}.json`), posts, now });
}

/** Images under src/assets/blog/, keyed like `/src/assets/blog/<slug>/<name>.webp`. */
const assets = import.meta.glob<{ default: ImageMetadata }>('/src/assets/blog/**/*.{jpg,jpeg,png,webp}', { eager: true });

/**
 * The post body for the feed. `rendered.html` leaves each local image as an
 * `<img __ASTRO_IMAGE_="{json}">` placeholder that only the page resolves; here
 * each one becomes the same optimised WebP the page uses.
 */
async function bodyHtml(p: Post): Promise<string> {
  const html = p.entry.rendered?.html ?? '';
  const images = await Promise.all(
    [...html.matchAll(/<img __ASTRO_IMAGE_="([^"]*)"[^>]*>/g)].map(async ([tag, json]) => {
      const props = JSON.parse(json.replace(/&(?:quot|#x22);/g, '"').replace(/&(?:apos|#39|#x27);/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&(?:amp|#x26|#38);/g, '&'));
      const file = new URL(props.src, `file:///${p.entry.filePath}`).pathname;
      const meta = assets[file]?.default;
      if (!meta) throw new Error(`${p.entry.filePath}: image ${props.src} is not under src/assets/blog/`);
      const img = await getImage({ src: meta, quality: props.quality });
      return [tag, `<img src="${escape(img.src)}" alt="${escape(props.alt ?? '')}" width="${meta.width}" height="${meta.height}">`];
    }),
  );
  return images.reduce((s, [tag, img]) => s.replace(tag, img), html);
}

/** "Hình minh hoạ do AI vẽ" under every post, page and feed alike. */
function aiArtHtml(lang: string): string {
  return `<p><em>${escape(locales.find((l) => l.code === lang)!.blog.aiArt)}</em></p>`;
}

/** Language of a source title: as given, else Vietnamese if it has Vietnamese letters, English if plain ASCII, else the post's own. */
export function sourceLang(source: { title: string; lang?: string }, postLang: string): string | undefined {
  const lang = source.lang ?? (/[àáảãạăằắẳẵặâầấẩẫậđèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ]/i.test(source.title) ? 'vi' : /^[\x20-\x7e–—’]+$/.test(source.title) ? 'en' : undefined);
  return lang && lang !== postLang ? lang : undefined;
}

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** "Nguồn tham khảo" appended to the feed HTML, so the app shows it too. */
function sourcesHtml(p: Post, lang: string): string {
  const sources = p.entry.data.sources;
  if (!sources.length) return '';
  const heading = locales.find((l) => l.code === lang)!.blog.sources;
  return `<h2>${escape(heading)}</h2><ul>${sources.map((s) => `<li>${s.url ? `<a href="${escape(s.url)}">${escape(s.title)}</a>` : escape(s.title)}</li>`).join('')}</ul>`;
}
