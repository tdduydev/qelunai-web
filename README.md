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
| `src/i18n/index.ts` | Default language, page slugs, `pathFor`, `localePaths` |
| `src/layouts/Base.astro` | `<head>`, SEO tags, hreflang, JSON-LD, header, footer |
| `src/layouts/LegalPage.astro` | Shell for the privacy, support, delete-account and terms pages |
| `src/components/Landing.astro` | The landing page sections |
| `src/components/LandingPage.astro` | Page wrapper that adds the app and FAQ structured data |
| `src/components/StoreButtons.astro` | Store badges; links are `href="#"` placeholders marked `data-store-link` |
| `src/pages/[...lang]/*.astro` | One route per page, built for every language |
| `src/content/privacy.md` | Privacy policy copied from the app repo (see below) |
| `src/lib/policy.ts` | Splits the policy into Vietnamese and English and renders it |
| `src/scripts/reveal.ts` | Fade-in on scroll; skipped under reduced motion |
| `src/styles/global.css` | Tokens and all styles |
| `src/assets/sonmai/` | Lacquer art and feature medallions from the app |
| `src/assets/shots/<lang>/` | Screenshots of the real app, optimised at build time |
| `src/pages/sitemap.xml.ts`, `robots.txt.ts` | Generated from the page and locale lists |
| `public/` | `CNAME`, `app-ads.txt`, favicons, fonts, `og.png`, web manifest |

## Privacy policy

The `/privacy/` pages are built from `src/content/privacy.md`. After the policy changes in the app repo, run

```sh
npm run sync:privacy                          # reads ../qelunai-app-ads/docs/legal/PRIVACY_POLICY.md
npm run sync:privacy -- path/to/PRIVACY_POLICY.md
```

and commit the updated file. Vietnamese comes before the `---` line, English after it.

## Store links

When the listings are live, replace the `href="#"` of every element with `data-store-link="app-store"` or `data-store-link="google-play"` (in `StoreButtons.astro` and `Footer.astro`).

## Add a language

1. Copy `src/i18n/locales/en.ts` to `src/i18n/locales/<code>.ts`.
2. Set `code`, `htmlLang`, `ogLocale`, `nativeName` and `order`, then translate every string. TypeScript (`satisfies Locale`) reports any missing key.
3. Optionally add screenshots in `src/assets/shots/<code>/`; missing ones fall back to `vi`.
4. `npm run build`.

Every page at `/<code>/...`, the language switch, hreflang tags and sitemap entries are generated from the files in `locales/`. Vietnamese is the default at `/`; change `defaultLocaleCode` in `src/i18n/index.ts` to move it. The privacy page only has Vietnamese and English text.

## Deploy

Pages is set to build from GitHub Actions and the custom domain comes from `public/CNAME`. Pushing to `main` builds and publishes; the workflow can also be run by hand from the Actions tab.

## Organic growth / website tools

- `/lich-am/` — free Vietnam UTC+7 lunar calendar date conversion (client-side).
- `/gio-hoang-dao/` — traditional auspicious-hour chart.
- `/kinh-dich/` — sourced educational I Ching article.
- English counterparts at `/en/...` (auto-added to sitemap and hreflang).
- The site routes Android users through the existing `/testers/` guide and iOS users to request TestFlight by email, until public store links exist.

Run `npm run check` locally (Node calendar tests + Astro build). See `docs/GROWTH_CALENDAR.md` for method and limitations.
