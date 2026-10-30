// Sends the "new post" push notification through FCM HTTP v1 (see
// docs/blog-contract.md, section 2). Run by .github/workflows/notify-blog.yml
// after each deploy of main, or by hand from the Actions tab.
//
//   node scripts/notify-blog.mjs --from HEAD^ --to HEAD [--dry-run]
//       posts added between two commits (git diff --diff-filter=A)
//   node scripts/notify-blog.mjs --slug gio-hoang-dao-la-gi [--lang vi|en|zh|ko|all] [--dry-run]
//       one post, resent by hand; `notify: false` is ignored here
//
// A post is sent only when it is not a draft, its date has come, and the live
// feed (https://qelunai.com/feeds/blog-<lang>.json) already lists it; title and
// body come from that feed item. Without --dry-run the OAuth token is read from
// FCM_ACCESS_TOKEN.
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { vnDate } from '../src/lib/blog-core.mjs';

/** Languages in feed and topic order. */
export const langs = ['vi', 'en', 'zh', 'ko'];

/** Most posts notified in one run; the rest are only logged. */
export const maxPosts = 3;

export const site = 'https://qelunai.com';
export const fcmUrl = 'https://fcm.googleapis.com/v1/projects/qelunai/messages:send';
export const userAgent = 'QelunaiDataBot/1.0 (https://qelunai.com)';

/** Android channel of the app's other news pushes (qelunai-app docs/FIREBASE_SETUP.md). */
const androidChannel = 'push_news';

const postPath = /^src\/content\/blog\/([a-z]{2})\/([a-z0-9][a-z0-9-]*)\.md$/;

/** `{lang, slug}` of a post file path, or null for anything else. */
export function postOf(path) {
  const m = postPath.exec(path);
  return m && langs.includes(m[1]) ? { lang: m[1], slug: m[2] } : null;
}

/**
 * The top-level `key: value` lines of a post's frontmatter, enough for
 * `title`, `summary`, `date`, `draft` and `notify`. Lists and nested keys are
 * skipped.
 */
export function frontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  if (!m) return {};
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = /^([A-Za-z][\w-]*):\s*(.*?)\s*$/.exec(line);
    if (!kv || kv[2] === '') continue;
    let v = kv[2];
    if (/^'.*'$/.test(v)) v = v.slice(1, -1).replace(/''/g, "'");
    else if (/^".*"$/.test(v)) v = JSON.parse(v);
    else v = v.replace(/\s+#.*$/, '');
    data[kv[1]] = v === 'true' ? true : v === 'false' ? false : v;
  }
  return data;
}

/** Why a post is not sent, or null if it may be. `manual` skips the `notify: false` check. */
export function skipReason(fm, now, { manual = false } = {}) {
  if (fm.draft === true) return 'draft';
  if (!manual && fm.notify === false) return 'notify: false';
  if (!fm.date) return 'no date';
  if (vnDate(fm.date).getTime() > now.getTime()) return 'dated in the future';
  return null;
}

/**
 * Posts to send: one entry per slug, newest first, with the languages to
 * send in. Posts past `maxPosts` go to `rest`.
 */
export function plan(files, readPost, now, { manual = false, max = maxPosts } = {}) {
  const bySlug = new Map();
  const skipped = [];
  for (const { lang, slug } of files) {
    const fm = frontmatter(readPost(lang, slug));
    const reason = skipReason(fm, now, { manual });
    if (reason) {
      skipped.push({ lang, slug, reason });
      continue;
    }
    const post = bySlug.get(slug) ?? { slug, date: vnDate(fm.date), langs: [], fm: {} };
    post.langs.push(lang);
    post.fm[lang] = fm;
    if (vnDate(fm.date) > post.date) post.date = vnDate(fm.date);
    bySlug.set(slug, post);
  }
  const posts = [...bySlug.values()].sort((a, b) => b.date - a.date || a.slug.localeCompare(b.slug));
  for (const p of posts) p.langs.sort((a, b) => langs.indexOf(a) - langs.indexOf(b));
  return { send: posts.slice(0, max), rest: posts.slice(max), skipped };
}

/** The FCM v1 request body for one post in one language. */
export function message(item, lang) {
  return {
    message: {
      condition: `'blog' in topics && 'lang_${lang}' in topics`,
      notification: { title: item.title, body: item.summary },
      data: { type: 'blog', id: String(item.id), lang, url: item.url },
      android: { notification: { channel_id: androidChannel } },
      apns: { payload: { aps: { 'thread-id': 'blog' } } },
    },
  };
}

/**
 * The live feed item of `slug`, polled until GitHub Pages serves the new
 * build: `attempts` tries, `delayMs` apart. Null if it never shows up.
 */
export async function liveItem(lang, slug, { fetch = globalThis.fetch, sleep, attempts = 10, delayMs = 30_000, log = console.log } = {}) {
  const url = `${site}/feeds/blog-${lang}.json`;
  for (let i = 1; i <= attempts; i++) {
    try {
      const res = await fetch(`${url}?t=${Date.now()}`, { headers: { 'User-Agent': userAgent, 'Cache-Control': 'no-cache' } });
      if (res.ok) {
        const item = (await res.json()).items?.find((it) => it.id === slug);
        if (item) return item;
        log(`${lang}/${slug}: not in the live feed yet (try ${i}/${attempts})`);
      } else log(`${url}: HTTP ${res.status} (try ${i}/${attempts})`);
    } catch (e) {
      log(`${url}: ${e.message} (try ${i}/${attempts})`);
    }
    if (i < attempts) await sleep(delayMs);
  }
  return null;
}

export async function send(body, token, { fetch = globalThis.fetch } = {}) {
  const res = await fetch(fcmUrl, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`FCM HTTP ${res.status}: ${text}`);
  return JSON.parse(text).name;
}

export function parseArgs(argv) {
  const args = { dryRun: false, lang: 'all' };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--dry-run') args.dryRun = true;
    else if (['--from', '--to', '--slug', '--lang'].includes(a)) args[a.slice(2)] = argv[++i];
    else throw new Error(`unknown argument: ${a}`);
  }
  if (args.slug === '') delete args.slug;
  if (!args.slug && !(args.from && args.to)) throw new Error('give --from and --to, or --slug');
  if (args.lang !== 'all' && !langs.includes(args.lang)) throw new Error(`--lang must be all or one of ${langs.join(', ')}`);
  if (args.slug && !/^[a-z0-9][a-z0-9-]*$/.test(args.slug)) throw new Error(`bad slug: ${args.slug}`);
  return args;
}

/** Everything the run touches outside this file, so tests can replace it. */
export const defaults = {
  git: (...args) => execFileSync('git', args, { encoding: 'utf8' }),
  readPost: (lang, slug) => readFileSync(fileURLToPath(new URL(`../src/content/blog/${lang}/${slug}.md`, import.meta.url)), 'utf8'),
  fetch: (...a) => globalThis.fetch(...a),
  sleep: (ms) => new Promise((r) => setTimeout(r, ms)),
  now: () => new Date(),
  log: console.log,
  token: process.env.FCM_ACCESS_TOKEN,
};

/** Returns the number of notifications that failed (0 on success). */
export async function run(argv, deps = {}) {
  const d = { ...defaults, ...deps };
  const args = parseArgs(argv);
  const manual = Boolean(args.slug);
  const exists = (lang, slug) => {
    try {
      d.readPost(lang, slug);
      return true;
    } catch {
      return false;
    }
  };
  const files = manual
    ? (args.lang === 'all' ? langs : [args.lang]).filter((lang) => exists(lang, args.slug)).map((lang) => ({ lang, slug: args.slug }))
    : d.git('diff', '--diff-filter=A', '--name-only', args.from, args.to, '--', 'src/content/blog').split('\n').map((p) => postOf(p.trim())).filter(Boolean);

  if (!files.length) {
    d.log(manual ? `No post ${args.slug} in ${args.lang}.` : 'No new posts in this deploy.');
    return manual ? 1 : 0;
  }
  const { send: posts, rest, skipped } = plan(files, d.readPost, d.now(), { manual });
  for (const s of skipped) d.log(`skip ${s.lang}/${s.slug}: ${s.reason}`);
  for (const p of rest) d.log(`skip ${p.slug}: over ${maxPosts} posts in one run; resend by hand if needed`);
  if (!args.dryRun && posts.length && !d.token) throw new Error('FCM_ACCESS_TOKEN is not set');

  let failed = 0;
  for (const post of posts) {
    for (const lang of post.langs) {
      let item = await liveItem(lang, post.slug, { fetch: d.fetch, sleep: d.sleep, log: d.log, ...(args.dryRun ? { attempts: 1 } : {}) });
      if (!item && args.dryRun) {
        const fm = post.fm[lang];
        d.log(`${lang}/${post.slug}: not live yet; dry run uses the local file`);
        item = { id: post.slug, title: fm.title, summary: fm.summary, url: `${site}${lang === 'vi' ? '' : `/${lang}`}/blog/${post.slug}/` };
      }
      if (!item) {
        d.log(`${lang}/${post.slug}: FAILED, never appeared in the live feed`);
        failed++;
        continue;
      }
      const body = message(item, lang);
      if (args.dryRun) {
        d.log(`dry run ${lang}/${post.slug}:\n${JSON.stringify(body, null, 2)}`);
        continue;
      }
      try {
        d.log(`sent ${lang}/${post.slug}: ${await send(body, d.token, { fetch: d.fetch })}`);
      } catch (e) {
        d.log(`${lang}/${post.slug}: FAILED, ${e.message}`);
        failed++;
      }
    }
  }
  return failed;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  run(process.argv.slice(2)).then(
    (failed) => process.exit(failed ? 1 : 0),
    (e) => {
      console.error(e.message);
      process.exit(1);
    },
  );
}
