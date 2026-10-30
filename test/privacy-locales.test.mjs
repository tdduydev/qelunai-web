// Checks the built privacy pages in dist/; run `npm run build` first.
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';

const dist = new URL('../dist/', import.meta.url);
const read = (path) => readFileSync(new URL(path, dist), 'utf8');
const pages = { vi: 'privacy/', en: 'en/privacy/', 'zh-Hans': 'zh/privacy/', ko: 'ko/privacy/' };
const site = 'https://qelunai.com/';

test('the Chinese and Korean privacy pages set their html lang', () => {
  assert.match(read('zh/privacy/index.html'), /<html lang="zh-Hans">/);
  assert.match(read('ko/privacy/index.html'), /<html lang="ko">/);
});

test('every privacy page lists all four versions in hreflang and the language menu', () => {
  for (const path of Object.values(pages)) {
    const html = read(`${path}index.html`);
    for (const [lang, target] of Object.entries(pages)) {
      assert.ok(html.includes(`<link rel="alternate" hreflang="${lang}" href="${site}${target}">`), `${path}: hreflang ${lang}`);
      assert.ok(html.includes(`<a href="/${target}" hreflang="${lang}"`), `${path}: menu link ${target}`);
    }
    assert.ok(html.includes(`<link rel="alternate" hreflang="x-default" href="${site}privacy/">`), `${path}: x-default`);
  }
});

test('only the privacy pages exist under /zh/ and /ko/, and nothing else links deeper', () => {
  for (const code of ['zh', 'ko']) {
    assert.deepEqual(readdirSync(new URL(`${code}/`, dist)), ['privacy']);
    assert.ok(existsSync(new URL(`${code}/privacy/index.html`, dist)));
  }
  const html = (dir) =>
    readdirSync(new URL(dir, dist), { withFileTypes: true }).flatMap((e) =>
      e.isDirectory() ? html(`${dir}${e.name}/`) : e.name.endsWith('.html') ? [`${dir}${e.name}`] : [],
    );
  for (const file of html('')) {
    for (const [, href] of read(file).matchAll(/href="(?:https:\/\/qelunai\.com)?(\/(?:zh|ko)\/[^"#]*)/g)) {
      assert.match(href, /^\/(zh|ko)\/privacy\/$/, `${file} links to ${href}`);
    }
  }
});

test('the sitemap has the Chinese and Korean privacy URLs', () => {
  const xml = read('sitemap.xml');
  assert.ok(xml.includes(`<loc>${site}zh/privacy/</loc>`));
  assert.ok(xml.includes(`<loc>${site}ko/privacy/</loc>`));
});
