# Qelunai website growth tools — 2026-10-29

## Scope
- Localized, indexable landing pages `/lich-am/`, `/gio-hoang-dao/`, `/kinh-dich/` plus /en/ mirrors.
- Date input is calculated client-side for 1900–2100 in Vietnam civil UTC+7. No server/API/analytics calls for date computation.
- Beta CTA links to the already-existing **/testers/** Android enrollment guide (Google Group → opt-in → Play test) and a mailto request for iOS TestFlight. Neither falsely claims public store availability.
- Canonical, hreflang, FAQ structured data and sitemap derive from existing Astro infrastructure.

## Methodology and sources
`src/lib/vn-calendar.mjs` is an independent adaptation of the **Qelunai app's first-party Dart calendar engine** (`qelunai-app/lib/features/engine/licham/`). Approximate new moon and Sun longitude formulas correspond to Jean Meeus's *Astronomical Algorithms* and the publicly documented rules of Vietnamese lunisolar calendrics. Do not copy Hồ Ngọc Đức's noncommercial JavaScript.
The interpretation of auspicious hours follows Qelunai's existing, versioned `hoang_dao.dart` table. Cultural rule, not scientifically predictive.
- Qelunai app methodology: `qelunai-app/docs/research/01-lich-am.md`
- Reference: https://honguyenviet.com/amlich/vncal_en.html
- Independent corroboration: https://amlichvietnam.vn/lich-am/2026/10/29
- License notice: no vendored third-party sources/assets introduced.

## Verification
Automated Node test: `npm run test:calendar`.
Fixtures: Tết 2023–2027; 29/10/2026 = 20/9/2026 Bính Tý, 6 auspicious hours; leap months 2023 and 2025. Need manual comparison for more border cases (especially midnight new moon). Run `npm ci && npm run build` before merging.

## Next steps after review
1. Connect Google Search Console, submit the generated `/sitemap.xml`.
2. Replace testing links with real public App Store and Play Store listing links after public launch.
3. Instrument privacy-reviewed, opt-in conversion analytics rather than assuming mailto clicks are measurable conversions.
4. Add public educational content with citations and human editorial review. No fake forecasts.
