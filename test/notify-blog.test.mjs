// scripts/notify-blog.mjs without network or git: fetch, git and the post
// files are stand-ins.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fcmUrl, frontmatter, message, parseArgs, plan, postOf, run, skipReason, userAgent } from '../scripts/notify-blog.mjs';

const now = new Date('2026-10-31T09:00:00+07:00');

const md = (fm) => `---\n${fm}\ncover: ../../../assets/blog/x.jpg\ntags: [a, b]\nsources:\n  - title: 'A: b'\n    url: https://example.com\n---\n\nBody.\n`;

/** Posts on disk, by `lang/slug`. */
const files = {
  'vi/moi': md("title: 'Bài mới: thử'\nsummary: Tóm tắt\ndate: 2026-10-31"),
  'en/moi': md('title: "New post"\nsummary: Summary\ndate: 2026-10-31'),
  'vi/tat': md('title: Tắt\nsummary: S\ndate: 2026-10-30\nnotify: false'),
  'vi/nhap': md('title: Nháp\nsummary: S\ndate: 2026-10-30\ndraft: true'),
  'vi/sau': md('title: Sau\nsummary: S\ndate: 2026-11-02'),
  'vi/gio': md('title: Giờ\nsummary: S\ndate: 2026-10-31T08:00:00+07:00'),
};
const readPost = (lang, slug) => {
  if (!files[`${lang}/${slug}`]) throw new Error('ENOENT');
  return files[`${lang}/${slug}`];
};

const feedItem = (lang, slug, title) => ({ id: slug, url: `https://qelunai.com/${lang === 'vi' ? '' : `${lang}/`}blog/${slug}/`, title, summary: `${title} summary` });

/** A fetch that serves feeds (each a list of items per call, the last one repeated) and records FCM calls. */
function fakeFetch(feeds, fcm = () => ({ status: 200, body: { name: 'projects/qelunai/messages/1' } })) {
  const calls = { feeds: [], fcm: [] };
  const served = {};
  const fetch = async (url, init = {}) => {
    if (url === fcmUrl) {
      calls.fcm.push({ init, body: JSON.parse(init.body) });
      const r = fcm(calls.fcm.length);
      return { ok: r.status < 300, status: r.status, text: async () => JSON.stringify(r.body) };
    }
    const lang = /blog-(\w+)\.json/.exec(url)[1];
    calls.feeds.push({ url, init });
    const list = feeds[lang] ?? [[]];
    const i = Math.min(served[lang] ?? 0, list.length - 1);
    served[lang] = (served[lang] ?? 0) + 1;
    return { ok: true, status: 200, json: async () => ({ items: list[i] }) };
  };
  return { fetch, calls };
}

const quiet = () => {};

test('postOf: only src/content/blog/<lang>/<slug>.md in a known language', () => {
  assert.deepEqual(postOf('src/content/blog/vi/gio-hoang-dao-la-gi.md'), { lang: 'vi', slug: 'gio-hoang-dao-la-gi' });
  assert.deepEqual(postOf('src/content/blog/ko/24-tiet-khi.md'), { lang: 'ko', slug: '24-tiet-khi' });
  assert.equal(postOf('src/content/blog/fr/x.md'), null);
  assert.equal(postOf('src/content/blog/vi/x.mdx'), null);
  assert.equal(postOf('src/assets/blog/x.jpg'), null);
  assert.equal(postOf('src/content/blog/vi/sub/x.md'), null);
});

test('frontmatter: top-level scalars, quotes, booleans; lists skipped', () => {
  const fm = frontmatter(md("title: 'It''s: here'\nsummary: \"A \\\"b\\\"\"\ndate: 2026-10-31 # comment\ndraft: true\nnotify: false"));
  assert.equal(fm.title, "It's: here");
  assert.equal(fm.summary, 'A "b"');
  assert.equal(fm.date, '2026-10-31');
  assert.equal(fm.draft, true);
  assert.equal(fm.notify, false);
  assert.equal(fm.tags, '[a, b]');
  assert.equal(fm.url, undefined);
  assert.deepEqual(frontmatter('no frontmatter'), {});
});

test('skipReason: draft, notify: false (unless manual), future date', () => {
  assert.equal(skipReason({ date: '2026-10-31' }, now), null);
  assert.equal(skipReason({ date: '2026-10-31', draft: true }, now), 'draft');
  assert.equal(skipReason({ date: '2026-10-31', notify: false }, now), 'notify: false');
  assert.equal(skipReason({ date: '2026-10-31', notify: false }, now, { manual: true }), null);
  assert.equal(skipReason({ date: '2026-11-01' }, now), 'dated in the future');
  assert.equal(skipReason({ date: '2026-10-31T10:00:00+07:00' }, now), 'dated in the future');
  assert.equal(skipReason({}, now), 'no date');
});

test('plan: groups languages by slug, newest first, at most 3', () => {
  const mk = (slug, date) => md(`title: ${slug}\nsummary: s\ndate: ${date}`);
  const disk = { a: mk('a', '2026-10-25'), b: mk('b', '2026-10-28'), c: mk('c', '2026-10-30'), d: mk('d', '2026-10-27'), e: mk('e', '2026-10-29') };
  const list = ['a', 'b', 'c', 'd', 'e'].flatMap((slug) => [{ lang: 'ko', slug }, { lang: 'vi', slug }]);
  const { send, rest } = plan(list, (_, slug) => disk[slug], now);
  assert.deepEqual(send.map((p) => p.slug), ['c', 'e', 'b']);
  assert.deepEqual(rest.map((p) => p.slug), ['d', 'a']);
  assert.deepEqual(send[0].langs, ['vi', 'ko']);
});

test('message: the contract payload, all data values strings', () => {
  const body = message({ id: 'gio-hoang-dao-la-gi', url: 'https://qelunai.com/blog/gio-hoang-dao-la-gi/', title: 'T', summary: 'S' }, 'vi');
  assert.deepEqual(body, {
    message: {
      condition: "'blog' in topics && 'lang_vi' in topics",
      notification: { title: 'T', body: 'S' },
      data: { type: 'blog', id: 'gio-hoang-dao-la-gi', lang: 'vi', url: 'https://qelunai.com/blog/gio-hoang-dao-la-gi/' },
      android: { notification: { channel_id: 'push_news' } },
      apns: { payload: { aps: { 'thread-id': 'blog' } } },
    },
  });
  for (const v of Object.values(body.message.data)) assert.equal(typeof v, 'string');
});

test('parseArgs: needs a range or a slug; checks lang and slug', () => {
  assert.deepEqual(parseArgs(['--from', 'a', '--to', 'b']), { dryRun: false, lang: 'all', from: 'a', to: 'b' });
  assert.equal(parseArgs(['--slug', 'x', '--lang', 'ko', '--dry-run']).dryRun, true);
  assert.throws(() => parseArgs([]));
  assert.throws(() => parseArgs(['--slug', 'x', '--lang', 'fr']));
  assert.throws(() => parseArgs(['--slug', '../etc']));
  assert.throws(() => parseArgs(['--bogus']));
});

test('run after a deploy: sends only added, published, notify-able posts, once per language', async () => {
  const gitCalls = [];
  const git = (...args) => {
    gitCalls.push(args);
    return ['src/content/blog/vi/moi.md', 'src/content/blog/en/moi.md', 'src/content/blog/vi/tat.md', 'src/content/blog/vi/nhap.md', 'src/content/blog/vi/sau.md', 'src/assets/blog/moi.jpg', ''].join('\n');
  };
  const { fetch, calls } = fakeFetch({ vi: [[feedItem('vi', 'moi', 'Bài mới: thử')]], en: [[feedItem('en', 'moi', 'New post')]] });
  const log = [];
  const failed = await run(['--from', 'HEAD^', '--to', 'HEAD'], { git, readPost, fetch, sleep: async () => {}, now: () => now, log: (l) => log.push(l), token: 'tok' });
  assert.equal(failed, 0);
  assert.deepEqual(gitCalls[0], ['diff', '--diff-filter=A', '--name-only', 'HEAD^', 'HEAD', '--', 'src/content/blog']);
  assert.deepEqual(calls.fcm.map((c) => c.body.message.condition), ["'blog' in topics && 'lang_vi' in topics", "'blog' in topics && 'lang_en' in topics"]);
  assert.equal(calls.fcm[0].body.message.notification.title, 'Bài mới: thử');
  assert.equal(calls.fcm[0].init.headers.Authorization, 'Bearer tok');
  assert.equal(calls.feeds[0].init.headers['User-Agent'], userAgent);
  assert.match(calls.feeds[0].url, /^https:\/\/qelunai\.com\/feeds\/blog-vi\.json/);
  assert.ok(log.some((l) => l.includes('vi/tat: notify: false')));
  assert.ok(log.some((l) => l.includes('vi/nhap: draft')));
  assert.ok(log.some((l) => l.includes('vi/sau: dated in the future')));
});

test('run: waits for the live feed, fails the language that never appears', async () => {
  const sleeps = [];
  const { fetch, calls } = fakeFetch({ vi: [[], [], [feedItem('vi', 'moi', 'Bài mới')]], en: [[]] });
  const failed = await run(['--from', 'a', '--to', 'b'], {
    git: () => 'src/content/blog/vi/moi.md\nsrc/content/blog/en/moi.md\n',
    readPost,
    fetch,
    sleep: async (ms) => sleeps.push(ms),
    now: () => now,
    log: quiet,
    token: 'tok',
  });
  assert.equal(failed, 1);
  assert.equal(calls.fcm.length, 1);
  assert.equal(calls.fcm[0].body.message.data.lang, 'vi');
  assert.equal(calls.feeds.filter((c) => c.url.includes('blog-en')).length, 10);
  assert.ok(sleeps.every((ms) => ms === 30_000));
});

test('run: no new posts is a quiet success; FCM errors count as failures', async () => {
  const { fetch } = fakeFetch({ vi: [[feedItem('vi', 'moi', 'Bài mới')]] }, () => ({ status: 403, body: { error: 'denied' } }));
  const deps = { readPost, fetch, sleep: async () => {}, now: () => now, log: quiet, token: 'tok' };
  assert.equal(await run(['--from', 'a', '--to', 'b'], { ...deps, git: () => 'src/assets/blog/x.jpg\n' }), 0);
  assert.equal(await run(['--from', 'a', '--to', 'b'], { ...deps, git: () => 'src/content/blog/vi/moi.md\n' }), 1);
});

test('run: no token outside a dry run is an error', async () => {
  const { fetch } = fakeFetch({});
  await assert.rejects(run(['--from', 'a', '--to', 'b'], { git: () => 'src/content/blog/vi/moi.md', readPost, fetch, sleep: async () => {}, now: () => now, log: quiet, token: undefined }), /FCM_ACCESS_TOKEN/);
});

test('run --slug: manual resend ignores notify: false, sends every language present', async () => {
  const { fetch, calls } = fakeFetch({ vi: [[feedItem('vi', 'tat', 'Tắt')]] });
  const failed = await run(['--slug', 'tat'], { readPost, fetch, sleep: async () => {}, now: () => now, log: quiet, token: 'tok' });
  assert.equal(failed, 0);
  assert.deepEqual(calls.fcm.map((c) => c.body.message.data), [{ type: 'blog', id: 'tat', lang: 'vi', url: 'https://qelunai.com/blog/tat/' }]);
  assert.equal(await run(['--slug', 'khong-co'], { readPost, fetch, sleep: async () => {}, now: () => now, log: quiet, token: 'tok' }), 1);
});

test('run --dry-run: prints the payload, never calls FCM, works before the post is live', async () => {
  const { fetch, calls } = fakeFetch({ vi: [[]] });
  const log = [];
  const failed = await run(['--slug', 'moi', '--lang', 'vi', '--dry-run'], { readPost, fetch, sleep: async () => assert.fail('no waiting in a dry run'), now: () => now, log: (l) => log.push(l), token: undefined });
  assert.equal(failed, 0);
  assert.equal(calls.fcm.length, 0);
  const printed = log.find((l) => l.startsWith('dry run vi/moi'));
  assert.ok(printed);
  const body = JSON.parse(printed.slice(printed.indexOf('{')));
  assert.equal(body.message.notification.title, 'Bài mới: thử');
  assert.equal(body.message.data.url, 'https://qelunai.com/blog/moi/');
});
