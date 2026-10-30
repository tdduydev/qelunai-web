// Checks the built site in dist/ for all four languages; run `npm run build` first.
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { canChiDay, goodHours } from '../src/lib/vn-calendar.mjs';

const dist = new URL('../dist/', import.meta.url);
const read = (path) => readFileSync(new URL(path, dist), 'utf8');
const site = 'https://qelunai.com/';

/** URL prefix and `<html lang>` (also the hreflang code) of each language. */
const langs = { vi: ['', 'vi'], en: ['en/', 'en'], zh: ['zh/', 'zh-Hans'], ko: ['ko/', 'ko'] };
const indexable = ['', 'privacy/', 'support/', 'delete-account/', 'terms/', 'lich-am/', 'gio-hoang-dao/', 'kinh-dich/', 'testers/'];
const noindex = ['tai/'];

const htmlFiles = (dir = '') =>
  readdirSync(new URL(dir, dist), { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? htmlFiles(`${dir}${e.name}/`) : e.name.endsWith('.html') ? [`${dir}${e.name}`] : [],
  );

const unescape = (s) =>
  s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

/**
 * What a reader sees: text nodes plus the title, meta description and social
 * text, alt, title and aria-label. Scripts, styles and data attributes are
 * left out, and so are the language menu links, which name each language in
 * its own tongue.
 */
function visibleText(html) {
  const meta = [...html.matchAll(/<meta (?:name|property)="(?:description|keywords|og:title|og:description|og:image:alt|twitter:title|twitter:description)" content="([^"]*)"/g)].map((m) => m[1]);
  const body = html
    .replace(/<script\b[\s\S]*?<\/script>/g, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/g, ' ')
    .replace(/<head>[\s\S]*?<\/head>/, (head) => (head.match(/<title>[\s\S]*?<\/title>/) ?? [''])[0])
    .replace(/<a [^>]*\bhreflang="[^"]*"[^>]*>[\s\S]*?<\/a>/g, ' ');
  const attrs = [...body.matchAll(/\s(?:alt|title|aria-label)="([^"]*)"/g)].map((m) => m[1]);
  const text = body.replace(/<[^>]+>/g, '\n');
  return unescape([text, ...attrs, ...meta].join('\n'));
}

const vietnamese = /[àáảãạăằắẳẵặâầấẩẫậđèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ]/i;

/** Names that stay in Latin letters in every language. */
const names = [
  'Firebase Authentication', 'Firebase AI Logic', 'Firebase App Check', 'Firebase Crashlytics', 'Google Analytics for Firebase',
  'Firebase Cloud Messaging', 'Firebase Performance Monitoring', 'Google Gemini Developer API', 'Apple App Attest',
  'Apple Push Notification service',
  'Google Analytics', 'Google AdMob', 'Google Play', 'Google Cloud', 'Cloud Firestore', 'App Store', 'App Check',
  'Apple ID', 'Qelunai Plus', 'TestFlight', 'iPhone', 'iPad', 'Android',
];
/** Three or more Latin words in a row, once URLs, emails and the names above are gone: an untranslated phrase. */
function englishLeft(text) {
  let s = text.replace(/https?:\/\/\S+/g, ' ').replace(/[\w.+-]+@[\w.-]+/g, ' ');
  for (const n of names) s = s.split(n).join(' ');
  return s.match(/\b[A-Za-z][A-Za-z'’-]*(?:[ ,.]+[A-Za-z][A-Za-z'’-]*){2,}/g) ?? [];
}

test('every page exists in all four languages with its html lang', () => {
  for (const [code, [prefix, lang]] of Object.entries(langs)) {
    for (const page of [...indexable, ...noindex]) {
      const path = `${prefix}${page}index.html`;
      assert.ok(existsSync(new URL(path, dist)), `${code}: missing ${path}`);
      assert.match(read(path), new RegExp(`<html lang="${lang}">`), path);
    }
  }
});

test('indexable pages list all four versions in hreflang and the language menu', () => {
  for (const [prefix] of Object.values(langs)) {
    for (const page of indexable) {
      const path = `${prefix}${page}`;
      const html = read(`${path}index.html`);
      assert.match(html, /<meta name="robots" content="index,/, path);
      for (const [target, lang] of Object.values(langs)) {
        assert.ok(html.includes(`<link rel="alternate" hreflang="${lang}" href="${site}${target}${page}">`), `${path}: hreflang ${lang}`);
        assert.ok(html.includes(`<a href="/${target}${page}" hreflang="${lang}"`), `${path}: menu link ${lang}`);
      }
      assert.ok(html.includes(`<link rel="alternate" hreflang="x-default" href="${site}${page}">`), `${path}: x-default`);
    }
  }
});

test('/tai/ stays noindex in every language and out of the sitemap', () => {
  const xml = read('sitemap.xml');
  for (const [prefix] of Object.values(langs)) {
    for (const page of noindex) {
      const html = read(`${prefix}${page}index.html`);
      assert.match(html, /<meta name="robots" content="noindex, follow">/, `${prefix}${page}`);
      assert.doesNotMatch(html, /hreflang="[^"]*" href="https:/, `${prefix}${page}: no hreflang`);
      assert.ok(!xml.includes(`${site}${prefix}${page}`), `sitemap has ${prefix}${page}`);
    }
  }
});

test('the sitemap has every indexable page in all four languages, with alternates', () => {
  const xml = read('sitemap.xml');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).sort();
  const want = Object.values(langs).flatMap(([prefix]) => indexable.map((page) => `${site}${prefix}${page}`)).sort();
  assert.deepEqual(locs, want);
  for (const lang of [...Object.values(langs).map(([, l]) => l), 'x-default']) {
    assert.equal(xml.split(`hreflang="${lang}"`).length - 1, locs.length, `hreflang ${lang} on every url`);
  }
});

test('Chinese and Korean pages have no Vietnamese and no leftover English sentences', () => {
  for (const code of ['zh', 'ko']) {
    for (const file of htmlFiles(`${code}/`)) {
      const text = visibleText(read(file));
      const vi = text.split('\n').filter((line) => vietnamese.test(line));
      assert.deepEqual(vi, [], `${file}: Vietnamese text`);
      assert.deepEqual(englishLeft(text), [], `${file}: English text`);
    }
  }
});

test('the Chinese and Korean lunar tools name every stem, branch and hour spirit', () => {
  const names = new Set();
  for (let d = 1; d <= 60; d++) {
    for (const part of canChiDay(2026, 1, d).split(' ')) names.add(part);
    for (const h of goodHours(2026, 1, d)) names.add(h.branch).add(h.name);
  }
  assert.equal(names.size, 10 + 12 + 12);
  for (const code of ['zh', 'ko']) {
    for (const page of ['lich-am/', 'gio-hoang-dao/']) {
      const [, json] = read(`${code}/${page}index.html`).match(/data-i18n="([^"]*)"/);
      const { terms } = JSON.parse(unescape(json));
      for (const n of names) assert.ok(terms[n] && !vietnamese.test(terms[n]) && !/[A-Za-z]/.test(terms[n]), `${code}/${page}: ${n}`);
    }
  }
});

test('every internal link and asset points at a built file', () => {
  const exists = (path) => {
    const p = decodeURI(path.split(/[?#]/)[0]).replace(/^\//, '');
    return p === '' || existsSync(new URL(p, dist)) && (!p.endsWith('/') || existsSync(new URL(`${p}index.html`, dist)));
  };
  for (const file of htmlFiles()) {
    const html = read(file);
    const refs = [
      ...[...html.matchAll(/\s(?:href|src)="(\/(?!\/)[^"]*)"/g)].map((m) => m[1]),
      ...[...html.matchAll(/\ssrcset="([^"]*)"/g)].flatMap((m) => m[1].split(',').map((s) => s.trim().split(/\s+/)[0])),
    ];
    for (const ref of refs.filter((r) => r.startsWith('/'))) assert.ok(exists(ref), `${file} links to ${ref}`);
  }
});
