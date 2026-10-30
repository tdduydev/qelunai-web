# qelunai-web

Showcase and store-support site for the Qelunai app (Vietnamese lunar calendar, I Ching, Four Pillars, feng shui), live at <https://qelunai.com>. The look follows the app's "Sơn mài" (lacquer) design.

Static [Astro](https://astro.build) site, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview
```

Node 22 or newer.

## Layout

| Path | What it holds |
| --- | --- |
| `src/i18n/locales/*.ts` | All copy, one file per language (`vi` at `/`, `en` at `/en/`) |
| `src/i18n/index.ts` | Default language, page slugs, `pathFor`, `localePaths`, `alternatesFor` |
| `src/i18n/policy-locales.ts` | Languages with only a privacy page (`zh`, `ko`) and their few UI strings |
| `src/layouts/Base.astro` | `<head>`, SEO tags, hreflang, JSON-LD, header, footer |
| `src/layouts/LegalPage.astro` | Shell for the privacy, support, delete-account and terms pages |
| `src/components/Landing.astro` | The landing page sections |
| `src/components/LandingPage.astro` | Page wrapper that adds the app and FAQ structured data |
| `src/components/StoreButtons.astro` | Store badges; links are `href="#"` placeholders marked `data-store-link` |
| `src/pages/[...lang]/*.astro` | One route per page, built for every language |
| `src/pages/[policyLang]/privacy.astro` | The privacy page for the privacy-only languages |
| `src/content/privacy*.md` | Privacy policy copied from the app repo (see below) |
| `src/lib/policy.ts` | Picks the policy for a language and renders it |
| `src/scripts/reveal.ts` | Fade-in on scroll; skipped under reduced motion |
| `src/styles/global.css` | Tokens and all styles |
| `src/assets/sonmai/` | Lacquer art and feature medallions from the app |
| `src/assets/shots/<lang>/` | Screenshots of the real app, optimised at build time |
| `src/pages/[...lang]/tai.astro`, `src/i18n/download.ts` | Download page behind the share-card QR code (see below) |
| `src/lib/store-pick.mjs` | Store URLs and the user-agent store chooser used by `/tai/` |
| `src/pages/sitemap.xml.ts`, `robots.txt.ts` | Generated from the page and locale lists; pages in `noindexPages` are left out |
| `public/` | `CNAME`, `app-ads.txt`, favicons, fonts, `og.png`, web manifest |

## Privacy policy

The `/privacy/` and `/en/privacy/` pages are built from `src/content/privacy.md`, `/zh/privacy/` (Simplified Chinese, `lang="zh-Hans"`) from `privacy.zh.md` and `/ko/privacy/` (Korean) from `privacy.ko.md`. After the policy changes in the app repo, run

```sh
npm run sync:privacy                          # reads ../qelunai-app-ads/docs/legal/PRIVACY_POLICY.md
npm run sync:privacy -- path/to/PRIVACY_POLICY.md
```

and commit the updated files. The script also copies `PRIVACY_POLICY.zh.md` and `PRIVACY_POLICY.ko.md` from the same folder. In `privacy.md` Vietnamese comes before the `---` line, English after it; the zh and ko files hold one language each (the app's translations, which say the English version controls).

The four privacy pages point at each other in hreflang, the language menu and the sitemap. Chinese and Korean text uses system fonts (PingFang SC / Noto Sans SC, Apple SD Gothic Neo / Noto Sans KR); no extra font is downloaded. `npm run test:privacy` checks the built pages (run after `npm run build`).

## Store links

When the listings are live, replace the `href="#"` of every element with `data-store-link="app-store"` or `data-store-link="google-play"` (in `StoreButtons.astro` and `Footer.astro`).

## Download page (`/tai/`)

`https://qelunai.com/tai/` (Vietnamese) and `https://qelunai.com/en/tai/` (English) are the single link for the QR code on the app's share card. On load, a small script calls `pickStore` and uses `location.replace` to send iPhone, iPad, iPod and iPadOS (Mac user agent with touch) to the App Store, and Android to Google Play. Desktops, unknown devices and browsers without JavaScript stay on the page, which shows plain links to both stores. No tracking. The page is `noindex` and not in the sitemap. Store URLs live in `src/lib/store-pick.mjs`; tests: `npm run test:store`.

## Add a language

1. Copy `src/i18n/locales/en.ts` to `src/i18n/locales/<code>.ts`.
2. Set `code`, `htmlLang`, `ogLocale`, `nativeName` and `order`, then translate every string. TypeScript (`satisfies Locale`) reports any missing key.
3. Optionally add screenshots in `src/assets/shots/<code>/`; missing ones fall back to `vi`.
4. `npm run build`.

Every page at `/<code>/...`, the language switch, hreflang tags and sitemap entries are generated from the files in `locales/`. Vietnamese is the default at `/`; change `defaultLocaleCode` in `src/i18n/index.ts` to move it. A new full language also needs its own privacy text in `src/content/` and `src/lib/policy.ts`; without one it shows the English policy.

Chinese (`zh`) and Korean (`ko`) are not full languages: they only have `/zh/privacy/` and `/ko/privacy/`, for the store listings. They live in `src/i18n/policy-locales.ts`, not in `locales/`, so no other page is built or linked at `/zh/...` or `/ko/...`. Their header has just the language menu, and the footer links to the Vietnamese and English home pages. To give another language only a privacy page, add an entry there and its `privacy.<code>.md` (also in `scripts/sync-privacy.mjs` and `src/lib/policy.ts`).

## Deploy

Pages is set to build from GitHub Actions and the custom domain comes from `public/CNAME`. Pushing to `main` builds and publishes; the workflow can also be run by hand from the Actions tab.

## Organic growth / website tools

- `/lich-am/` — free Vietnam UTC+7 lunar calendar date conversion (client-side).
- `/gio-hoang-dao/` — traditional auspicious-hour chart.
- `/kinh-dich/` — sourced educational I Ching article.
- English counterparts at `/en/...` (auto-added to sitemap and hreflang).
- The site routes Android users through the existing `/testers/` guide and iOS users to request TestFlight by email, until public store links exist.

Run `npm run check` locally (Node calendar and store-chooser tests, Astro build, then the privacy page checks). See `docs/GROWTH_CALENDAR.md` for method and limitations.
