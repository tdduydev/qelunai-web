// The blog feed rules (docs/blog-contract.md): unit tests of src/lib/blog-core.mjs,
// then the built feeds in dist/ (run `npm run build` first; those tests skip without it).
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { allowedTags, buildFeed, maxFeedItems, readingMinutes, sanitizeFeedHtml, selectPosts, vnDate, vnIso } from '../src/lib/blog-core.mjs';

const dist = new URL('../dist/', import.meta.url);
const built = existsSync(new URL('feeds/blog-vi.json', dist));
const langs = ['vi', 'en', 'zh', 'ko'];
const content = new URL('../src/content/blog/', import.meta.url);

const post = (slug, date, extra = {}) => ({
  slug, url: `https://qelunai.com/blog/${slug}/`, title: slug, summary: 's', html: '<p>x</p>',
  image: 'https://qelunai.com/c.jpg', date: new Date(date), tags: [], readingMinutes: 1, ...extra,
});
const now = new Date('2026-10-31T00:00:00+07:00');

/** Every tag in `html` with its attribute names. */
const tagsIn = (html) => [...html.matchAll(/<\/?([a-zA-Z][\w-]*)([^>]*)>/g)].map((m) => ({ name: m[1].toLowerCase(), attrs: [...m[2].replace(/"[^"]*"|'[^']*'/g, '""').matchAll(/([^\s=/]+)\s*=/g)].map((a) => a[1].toLowerCase()), raw: m[0] }));

/** Fails unless `html` keeps to the contract: allowed tags and attributes only, absolute https links and images. */
function assertContractHtml(html, where) {
  for (const { name, attrs, raw } of tagsIn(html)) {
    assert.ok(Object.hasOwn(allowedTags, name), `${where}: tag ${raw}`);
    for (const a of attrs) assert.ok(allowedTags[name].includes(a), `${where}: attribute ${a} in ${raw}`);
  }
  for (const [, url] of html.matchAll(/\s(?:href|src)="([^"]*)"/g)) assert.match(url, /^https:\/\/[^/]/, `${where}: ${url}`);
}

test('vnDate: a bare date is midnight in Vietnam; a time keeps its offset', () => {
  assert.equal(vnDate('2026-10-31').toISOString(), '2026-10-30T17:00:00.000Z');
  assert.equal(vnDate(new Date('2026-10-31T00:00:00Z')).toISOString(), '2026-10-30T17:00:00.000Z');
  assert.equal(vnDate('2026-10-31T07:00:00+07:00').toISOString(), '2026-10-31T00:00:00.000Z');
  assert.equal(vnDate(new Date('2026-10-31T00:00:00+07:00')).toISOString(), '2026-10-30T17:00:00.000Z');
  assert.throws(() => vnDate('31/10/2026'));
  assert.equal(vnIso(vnDate('2026-10-31T07:00:00+07:00')), '2026-10-31T07:00:00+07:00');
});

test('selectPosts leaves out drafts and future posts and sorts newest first', () => {
  const posts = [
    post('old', '2026-01-01T00:00:00+07:00'),
    post('draft', '2026-05-01T00:00:00+07:00', { draft: true }),
    post('future', '2026-11-01T00:00:00+07:00'),
    post('new', '2026-10-30T00:00:00+07:00'),
    post('now', '2026-10-31T00:00:00+07:00'),
  ];
  assert.deepEqual(selectPosts(posts, now).map((p) => p.slug), ['now', 'new', 'old']);
});

test('buildFeed: JSON Feed 1.1, at most 50 items, contract fields', () => {
  const posts = Array.from({ length: 60 }, (_, i) => post(`p${String(i).padStart(2, '0')}`, Date.UTC(2026, 0, 1 + i), { appRoute: i === 59 ? '/calendar' : undefined }));
  const feed = buildFeed({ lang: 'vi', title: 'T', homeUrl: 'https://qelunai.com/blog/', feedUrl: 'https://qelunai.com/feeds/blog-vi.json', posts, now });
  assert.equal(feed.version, 'https://jsonfeed.org/version/1.1');
  assert.equal(feed.items.length, maxFeedItems);
  assert.equal(feed.items[0].id, 'p59');
  assert.deepEqual(feed.items[0]._qelunai, { readingMinutes: 1, appRoute: '/calendar' });
  assert.deepEqual(feed.items[1]._qelunai, { readingMinutes: 1 });
  assert.match(feed.items[0].date_published, /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\+07:00$/);
  const empty = buildFeed({ lang: 'en', title: 'T', homeUrl: 'h', feedUrl: 'f', posts: [], now });
  assert.deepEqual(empty.items, []);
});

test('sanitizeFeedHtml keeps only the contract tags, attributes and https URLs', () => {
  const dirty = `<!-- c --><p class="x" style="color:red" onclick="evil()">Hi <a href="/blog/" title="t">in</a> <a href="mailto:a@b.c">mail</a> <a href="javascript:alert(1)">js</a></p>
<script>alert(1)</script><style>p{}</style><iframe src="https://x"></iframe>
<div><span>kept text</span></div><img src="/c.jpg" alt="a" loading="lazy" width="10"><img src="data:image/png;base64,AA">
<h4>h4</h4><pre><code>code</code></pre><table><tr><th>A</th><th>B</th></tr><tr><td>1</td><td>2</td></tr></table>`;
  const html = sanitizeFeedHtml(dirty, 'https://qelunai.com/blog/x/');
  assertContractHtml(html, 'sanitised');
  assert.ok(html.includes('<a href="https://qelunai.com/blog/">in</a>'));
  assert.ok(html.includes('mail') && html.includes('js') && !html.includes('mailto') && !html.includes('javascript'));
  assert.ok(!/alert|p\{\}|iframe/.test(html));
  assert.ok(html.includes('kept text') && html.includes('h4') && html.includes('code'));
  assert.ok(html.includes('<img src="https://qelunai.com/c.jpg" alt="a" width="10">'));
  assert.ok(!html.includes('data:'));
  assert.ok(html.includes('<p><strong>A</strong> · <strong>B</strong></p>') && html.includes('<p>1 · 2</p>'));
});

test('readingMinutes counts Latin words and CJK characters', () => {
  assert.equal(readingMinutes('<p>x</p>'), 1);
  assert.equal(readingMinutes('word '.repeat(660)), 3);
  assert.equal(readingMinutes('字'.repeat(1200)), 3);
});

const feeds = built ? Object.fromEntries(langs.map((l) => [l, JSON.parse(readFileSync(new URL(`feeds/blog-${l}.json`, dist), 'utf8'))])) : {};

test('built feeds follow the contract', { skip: !built && 'no dist/; run npm run build' }, () => {
  for (const lang of langs) {
    const feed = feeds[lang];
    const prefix = lang === 'vi' ? '' : `${lang}/`;
    assert.equal(feed.version, 'https://jsonfeed.org/version/1.1');
    assert.equal(feed.language, lang);
    assert.equal(feed.feed_url, `https://qelunai.com/feeds/blog-${lang}.json`);
    assert.equal(feed.home_page_url, `https://qelunai.com/${prefix}blog/`);
    assert.ok(Array.isArray(feed.items) && feed.items.length <= maxFeedItems);
    const times = feed.items.map((i) => Date.parse(i.date_published));
    assert.deepEqual(times, [...times].sort((a, b) => b - a), `${lang}: newest first`);
    for (const item of feed.items) {
      const where = `${lang}/${item.id}`;
      assert.match(item.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, where);
      assert.equal(item.url, `https://qelunai.com/${prefix}blog/${item.id}/`, where);
      assert.ok(item.title && item.summary && item.summary.length <= 200, where);
      assert.match(item.date_published, /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\+07:00$/, where);
      assert.match(item.date_modified, /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\+07:00$/, where);
      assert.ok(Date.parse(item.date_published) <= Date.now(), `${where}: dated in the future`);
      assert.ok(Array.isArray(item.tags) && item.tags.every((t) => typeof t === 'string'), where);
      assert.ok(Number.isInteger(item._qelunai.readingMinutes) && item._qelunai.readingMinutes >= 1, where);
      if (item._qelunai.appRoute !== undefined) assert.match(item._qelunai.appRoute, /^\/\S*$/, where);
      assertContractHtml(item.content_html, where);
      assert.match(item.image, /^https:\/\/qelunai\.com\/.+\.(jpe?g|webp)$/, where);
      const file = new URL(item.image.slice('https://qelunai.com/'.length), dist);
      assert.ok(existsSync(file), `${where}: ${item.image} not built`);
      assert.ok(statSync(file).size <= 200 * 1024, `${where}: cover over 200 KB`);
    }
  }
});

test('feeds hold exactly the published posts in src/content/blog, same id in every language', { skip: !built && 'no dist/; run npm run build' }, () => {
  for (const lang of langs) {
    const dir = new URL(`${lang}/`, content);
    const files = existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith('.md')) : [];
    const published = files
      .map((f) => ({ slug: f.slice(0, -3), front: readFileSync(new URL(f, dir), 'utf8').split(/^---$/m)[1] }))
      .filter(({ front }) => !/^draft:\s*true\s*$/m.test(front) && vnDate(front.match(/^date:\s*(.+)$/m)[1]).getTime() <= Date.now())
      .map((p) => p.slug)
      .sort();
    assert.deepEqual(feeds[lang].items.map((i) => i.id).sort(), published.slice(0, maxFeedItems), lang);
  }
  // The same slug means the same post: its id is the slug in every language.
  for (const lang of langs) for (const item of feeds[lang].items) assert.ok(existsSync(new URL(`${lang}/${item.id}.md`, content)), `${lang}: ${item.id}`);
});
