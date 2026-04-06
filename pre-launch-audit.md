# Pre-Launch Audit — Pare Grondin Services
**Date:** 2026-04-05
**Auditor:** pre-launch-auditor agent
**Result:** PASS WITH WARNINGS

## Summary
- FAIL items: 0
- WARN items: 9
- PASS items: 38

---

## FAIL Items (blockers)

None. No hard blockers found.

---

## WARN Items (review before launch)

### W1 — Navigation: "Take the Quiz" missing on mobile header bar
**Check:** B — Navigation (mobile)
**Finding:** Desktop nav correctly shows "Take the Quiz" as a primary CTA button. The mobile header bar (visible at all times on mobile) shows only "Book a Call" + hamburger. The "Take the Quiz" button is present inside the mobile drawer (opened by hamburger), but is NOT visible on the always-visible mobile header bar. CLAUDE.md states the header CTA must be "always visible, always clickable."
**Recommendation:** Add "Take the Quiz" as a visible button on the mobile header bar alongside "Book a Call," or reduce "Book a Call" to icon-only on mobile to fit both. The drawer placement alone does not satisfy the "always visible" requirement.

### W2 — Homepage: Hardcoded strings in BookingPreview section component
**Check:** C — Homepage Sections
**Finding:** `src/components/sections/BookingPreview.tsx` defines `callBullets` as a hardcoded local array (lines 19-23). CLAUDE.md rule: "All copy in /data/site.ts — zero hard-coded strings in components." These three bullet points are not sourced from `site.ts`.
**Recommendation:** Move `callBullets` into `site.ts` under a `bookingPreview` key and import in the component. Minor fix, pre-launch preference.

### W3 — Booking page: Hardcoded strings in booking/page.tsx
**Check:** C — Homepage Sections / D — Conversion Flows
**Finding:** `src/app/booking/page.tsx` has three inline bullet objects (emoji + text) hardcoded in JSX (lines 33-54). These do not come from `site.ts`. Same violation as W2 — copy rule.
**Recommendation:** Move to `site.ts` under `bookingPage.bullets`. Minor — low launch risk.

### W4 — Pricing page: Tier CTAs link to /booking rather than opening calendar inline
**Check:** D — Conversion Flows / Always-Built Features
**Finding:** CLAUDE.md specifies "CTA on each tier that opens the booking calendar inline (never a link away)." The pricing page tier CTAs use `href="/booking"` (Link navigation), which routes the user to /booking rather than opening an embedded calendar on the pricing page itself. Since this is an internal sales tool that is deleted pre-launch, the practical risk is low — but it does not match the spec.
**Recommendation:** For demo fidelity, wire the pricing tier CTAs to open an inline BookingWidget below the selected tier (toggle state). Flag as deferred since /pricing is deleted before launch.

### W5 — Pricing page: No noindex metadata
**Check:** F — SEO/Schema
**Finding:** `src/app/pricing/page.tsx` has no `export const metadata` with `robots: { index: false }`. The pricing page is a Salesoptimus internal tool that should not be indexed by search engines during the demo period. Without noindex, if Vercel generates a public preview URL, Google could index the pricing page before deletion.
**Recommendation:** Add `export const metadata: Metadata = { robots: { index: false, follow: false } }` to `/pricing/page.tsx` before sharing the Vercel preview URL.

### W6 — API routes: TODO stubs return fake 200 OK
**Check:** G — Code Quality / I — Pre-Launch Deletion Checklist
**Finding:** Both `/api/contact/route.ts` and `/api/quiz/route.ts` have `// TODO: wire to Resend on launch` comments and return `{ ok: true }` unconditionally after logging to console. This is an acceptably stubbed state per the audit instructions, but must be wired before any lead data matters.
**Recommendation:** Wire Resend before sharing the site with real prospective clients. Demo-safe as-is since no real leads are collected in pitch mode. Document in Open Blockers.

### W7 — Shop scaffold: Empty directories left in repo
**Check:** Always-Built Features (Shop decision gate)
**Finding:** CLAUDE.md states "Client did not buy Premium → delete all shop files from the list above." The decision was made to remove shop from scope. The following directories exist but are empty (0 files inside): `src/app/shop/`, `src/components/shop/`, `src/app/api/printful/products/`, `src/app/api/printful/variants/`, `src/app/api/stripe/checkout/`, `src/app/api/stripe/webhook/`. Shop is correctly absent from nav and sitemap. `src/lib/cart.tsx`, `src/lib/printful.ts`, `src/lib/printful-seeded-products.json`, and `src/components/CartDrawer.tsx` are also absent, confirming scope decision was actioned. However, empty scaffold directories should be cleaned up before launch — they add noise and could confuse future maintainers.
**Recommendation:** Delete empty shop/printful/stripe directories pre-launch. Not a demo blocker.

### W8 — Sitemap: /pricing excluded (correct) but sitemap count is 21 URLs, not >10 — PASS promoted
**Check:** F — SEO/Schema
**Finding:** Sitemap yields 9 core pages + 3 service pages + 9 blog articles = 21 total URLs. /pricing is correctly excluded per the comment in sitemap.ts. 21 URLs exceeds the >10 threshold. This is a PASS. However, `/contact` has a priority of 0.6 while it should be higher for a conversion-focused site. Low impact.
**Recommendation:** Consider raising /contact priority to 0.75. Not a blocker.

### W9 — Footer compliance disclosure is brief; full legal language pending
**Check:** H — Content Rules
**Finding:** Footer contains: "Health sharing is not insurance. Members are not guaranteed benefits. Impact Health Sharing is a 501(c)(3) nonprofit Health Care Sharing Ministry." This is present and visible. However, progress.md Open Blockers notes that "Impact official compliance disclosure — Placeholder used throughout — Helen gets official language from Impact pre-launch." The current disclosure covers the mandatory minimum but may not satisfy Impact's required advocacy language.
**Recommendation:** Helen obtains Impact's official compliance disclaimer language and replaces the current placeholder before go-live. This is a known blocker already tracked in progress.md.

---

## PASS Items

### A — Always-Built Features
- **A1 PASS** — `src/app/pricing/page.tsx` exists (19,201 bytes). Sales tool present for demo.
- **A2 PASS** — `src/app/quiz/page.tsx` exists (406 bytes, wrapper). Non-empty.
- **A3 PASS** — `src/app/quiz/QuizContent.tsx` exists (22,859 bytes). Non-empty, multi-step implementation.
- **A4 PASS** — `src/app/booking/page.tsx` exists (4,564 bytes). Non-empty.
- **A5 PASS** — `src/components/BookingWidget.tsx` exists (1,663 bytes). Non-empty, renders `calendly-inline-widget`.
- **A6 PASS** — `src/app/testimonials/TestimonialsContent.tsx` exists (22,616 bytes). Non-empty.
- **A7 PASS** — `src/app/blog/page.tsx` exists (9,075 bytes). Non-empty.
- **A8 PASS** — `src/lib/articles.ts` exists (48,417 bytes). 9 blog articles confirmed.

### B — Navigation
- **B1 PASS** — "Take the Quiz" button present in desktop nav (line 82, Navigation.tsx). Routes to /quiz.
- **B2 PASS** — "Book a Call" amber CTA present in both desktop and mobile header (lines 88, 98).
- **B3 PASS** — Mobile drawer implemented with AnimatePresence slide-in, backdrop, close button, and drawer links including "Take the Quiz."
- **B4 PASS** — No shop or cart links anywhere in Navigation.tsx.

### C — Homepage Sections
- **C1 PASS** — Hero imported and rendered (line 1, page.tsx).
- **C2 PASS** — 10 section components rendered on homepage: Hero, PainPoints, AboutTeaser, ServicesPreview, StatsRow, TestimonialsPreview, QuizCTABanner, BlogPreview, BookingPreview, FinalCTA.
- **C3 PASS** — page.tsx itself contains zero hardcoded strings (only imports). See W2/W3 for section-level components.

### D — Conversion Flows
- **D1 PASS** — Quiz is fully multi-step: 4 quiz steps with AnimatePresence + lead capture step + result screen. Emoji options confirmed on all answer options. Not a static placeholder.
- **D2 PASS** — Booking widget renders `calendly-inline-widget` class with `data-url` and loads Calendly script dynamically. Not an href link or static placeholder. Brand colors injected via URL params. Fallback URL (`https://calendly.com/helengrondin`) set so widget loads in demo mode.
- **D3 PASS** — Contact form has non-empty `onSubmit` handler (`async function` POSTing to `/api/contact` with success/error state management).
- **D4 PASS** — Quiz lead capture POSTs to `/api/quiz` (QuizContent.tsx line 80). Route exists.
- **D5 PASS** — Quiz result screen terminates at `/booking` CTA (line 609), never a dead end.

### E — Page Coverage
- **E1 PASS** — `/about` exists (16,359 bytes)
- **E2 PASS** — `/services` exists (7,156 bytes)
- **E3 PASS** — `/services/[slug]` exists (17,057 bytes)
- **E4 PASS** — `/contact` exists (363 bytes wrapper + ContactContent.tsx)
- **E5 PASS** — `/faq` exists (525 bytes wrapper + FAQContent.tsx)
- **E6 PASS** — `/testimonials` exists (448 bytes wrapper + TestimonialsContent.tsx)
- **E7 PASS** — `/quiz` exists (406 bytes wrapper + QuizContent.tsx)
- **E8 PASS** — `/booking` exists (4,564 bytes)
- **E9 PASS** — `/pricing` exists (19,201 bytes) — sales tool, present for demo
- **E10 PASS** — `/blog` exists (9,075 bytes)
- **E11 PASS** — `/blog/[slug]` exists (5,616 bytes)

### F — SEO / Schema
- **F1 PASS** — `src/app/robots.ts` exists. Allows `/`, disallows `/studio` and `/api/`. Sitemap URL referenced.
- **F2 PASS** — `src/app/sitemap.ts` exists. Generates 21 URLs: 9 core pages + 3 service slugs + 9 blog slugs.
- **F3 PASS** — `src/components/JsonLd.tsx` exists. Exports `ProfessionalServiceSchema` (wired in layout.tsx), `FAQPageSchema`, and `ArticleSchema`.
- **F4 PASS** — `src/app/opengraph-image.tsx` exists. Text-based OG image with brand colors, headline, price anchor. Uses `next/og` edge runtime.
- **F5 PASS** — Sitemap has 21 URLs (>10 threshold passed). /pricing correctly excluded with explanatory comment.
- **F6 PASS** — `ProfessionalServiceSchema` is imported and rendered in `layout.tsx` (appears on every page). Schema uses `["ProfessionalService", "LocalBusiness"]` type array per CLAUDE.md requirement.
- **F7 PASS** — Layout.tsx includes `metadataBase`, `openGraph`, and `twitter` metadata blocks. OG metadata populated from `siteConfig`.

### G — Code Quality
- **G1 PASS** — `npx tsc --noEmit --skipLibCheck` exits 0. Zero TypeScript errors.
- **G2 PASS** — Zero `console.error` calls found in any source file.
- **G3 PASS (acceptable)** — `TODO: wire to Resend on launch` comments exist in `/api/contact/route.ts` and `/api/quiz/route.ts`. These are stub routes for demo mode, explicitly acceptable per audit instructions. Not a hard failure. (See W6.)

### H — Content Rules
- **H1 PASS** — Zero em dashes found in any of the 32 testimonial `quote:` fields. Python verification ran over all quotes.
- **H2 PASS** — All 32 testimonials have NH locations (Manchester, Nashua, Concord, Bedford, Derry, Merrimack, Londonderry, Hooksett, Portsmouth, Salem, Goffstown, Exeter, Dover, Milford, Newmarket, Rochester, Keene, Hampton, and others). Zero generic/locationless testimonials.
- **H3 PASS** — Hero photo panel is a placeholder gradient box ("Helen Grondin / Photo Coming Soon"), confirmed no stock photography. Compliant with Hero Architecture Rule.
- **H4 PASS** — Compliance disclosure present above fold in Hero.tsx (line 171-180): "Health sharing is not insurance. Members are not guaranteed benefits."
- **H5 PASS** — Footer compliance disclosure present (Footer.tsx lines 33-36): full three-sentence disclosure including "501(c)(3) nonprofit Health Care Sharing Ministry" language.
- **H6 PASS** — Testimonials paginated 8/page (4 pages for 32 testimonials). Filter by service implemented.
- **H7 PASS** — 32 testimonials confirmed (counted with precise field match).
- **H8 PASS** — 9 blog articles in articles.ts, all NH-specific slugs.

---

## Pre-Launch Deletion Checklist

The following must be removed before the site goes live:

| File / Route | Reason |
|---|---|
| `src/app/pricing/page.tsx` | Optimus internal sales tool — not a client deliverable |
| `src/app/pricing/` (directory) | Delete entire directory after page.tsx removal |
| Remove "Pricing" from nav (if added before launch) | Not in nav currently — confirm stays removed |
| Empty `src/app/shop/` directory | Dead empty directory, remove for cleanliness |
| Empty `src/components/shop/` directory | Dead empty directory |
| Empty `src/app/api/printful/` directory tree | Dead empty directories |
| Empty `src/app/api/stripe/` directory tree | Dead empty directories |
| `console.log("[contact form submission]", body)` in `/api/contact/route.ts` | Do not log PII to server console in production |
| `console.log("[quiz submission]", body)` in `/api/quiz/route.ts` | Do not log PII to server console in production |
| Wire Resend before removing TODO stubs | Stubs must be replaced with real Resend email delivery |

---

## Open Blockers (from progress.md)

Copied directly from progress.md — these are known gaps, not audit failures:

| Blocker | Impact | Resolution |
|---|---|---|
| Domain not purchased | Vercel preview URL used during build; swap at launch | Helen purchases after sale closes |
| Tuesday Zoom registration link unknown | Secondary CTA placeholder needed | Helen provides after sale |
| Senior supplemental pricing unknown | Placeholder in pricing section | Helen confirms or Impact provides |
| Helen's personal client testimonials | Content-writer wrote all 32 as demo copy | Real testimonials replace at launch |
| Impact official compliance disclosure | Placeholder used throughout | Helen gets official language from Impact pre-launch |
| Instagram / LinkedIn handles unknown | Social icons omitted or placeholder | Helen provides post-sale |
| Calendly URL not configured | Working demo URL (`https://calendly.com/helengrondin`) used; swap at launch | Helen creates account or provides URL |
