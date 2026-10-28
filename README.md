# qelunai-web

Showcase site for the Qelunai app (Eastern wisdom & AI), live at <https://qelunai.com>.

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
| `src/i18n/locales/*.ts` | All copy, one file per language |
| `src/layouts/Base.astro` | `<head>`, SEO tags, hreflang, JSON-LD, header |
| `src/components/Landing.astro` | The landing page sections |
| `src/scripts/page.ts` | Scroll story: Lenis smooth scroll, GSAP ScrollTrigger scenes, reduced-motion fallback |
| `src/scripts/sky.ts` | Three.js star field and astrolabe, lazy-loaded after first paint |
| `src/components/LandingPage.astro` | Page wrapper that adds the app and FAQ structured data |
| `src/styles/global.css` | Tokens and all styles |
| `src/assets/gen/` | Illustrations and parallax layers (generated for Qelunai), optimised at build time |
| `src/pages/sitemap.xml.ts`, `robots.txt.ts` | Generated from the locale list |
| `public/` | `CNAME`, favicons, fonts, `og.png`, web manifest |

## Add a language

1. Copy `src/i18n/locales/en.ts` to `src/i18n/locales/<code>.ts` (for example `ja.ts`).
2. Set `code`, `htmlLang`, `ogLocale`, `nativeName` and `order` (its position in the language menu), then translate every string. TypeScript (`satisfies Locale`) reports any missing key.
3. For a non-Latin script, set `script` and add a matching font stack in `global.css` next to `:root[data-script='sc']`.
4. `npm run build`.

Nothing else needs to change: the page at `/<code>/`, the language menu, hreflang tags and sitemap entries are generated from the files in `locales/`. English stays the default at `/`; change `defaultLocaleCode` in `src/i18n/index.ts` to move it.

## Deploy

Pages is set to build from GitHub Actions and the custom domain comes from `public/CNAME`. Pushing to `main` builds and publishes; the workflow can also be run by hand from the Actions tab.
