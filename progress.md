# progress.md — Pare Grondin Services Website Build

**Project:** TBD domain — new website build (domain purchased after sale)
**Client:** Pare Grondin Services | Manchester, New Hampshire
**Business Type:** Health sharing advocate / Impact Health Sharing enrollment consultant
**Launch Target:** ASAP — immediately after sale closes
**Last Updated:** 2026-04-05
**Current Phase:** Phase 0 — Initialization

---

## Phase Overview

| Phase | Name | Status |
|-------|------|--------|
| 0 | Project Initialization | 🔄 In Progress |
| 1A | Repo Scan | ⬜ Not Started |
| 1B | Research + Design System | ⬜ Not Started |
| 1C | Scaffold | ⬜ Not Started |
| 1D | Content + Animation (parallel) | ⬜ Not Started |
| 1E | All Pages | ⬜ Not Started |

---

## Phase 0 Checklist

- [x] Task 0A — CLAUDE.md completed (all 10 variables filled)
- [x] Task 0B — progress.md created
- [x] Task 0C — .claude/commands/prime.md saved (project-specific /prime configured)
- [x] Task 0D — design-system.md created (see below)
- [ ] Task 0E — Next.js scaffold committed
- [ ] Task 0F — Phase 0 debrief delivered

---

## Open Blockers

| Blocker | Impact | Resolution |
|---------|--------|------------|
| Domain not purchased | Vercel preview URL used during build; swap at launch | Helen purchases after sale closes |
| Tuesday Zoom registration link unknown | Secondary CTA placeholder needed | Helen provides after sale |
| Senior supplemental pricing unknown | Placeholder in pricing section | Helen confirms or Impact provides |
| Helen's personal client testimonials | Content-writer writes all 32 as demo copy | Real testimonials replace at launch |
| Impact official compliance disclosure | Placeholder used throughout | Helen gets official language from Impact pre-launch |
| Instagram / LinkedIn handles unknown | Social icons omitted or placeholder | Helen provides post-sale |
| Calendly URL not configured | Working demo URL used during build; swap at launch | Helen creates account or provides URL |

---

## Key Strategic Decisions (from market-intelligence.md)

1. **Hero CTA: single primary action** — "Book a Free Consultation" is the sole primary CTA. Tuesday Zoom is secondary. Every page drives to consultation booking.
2. **Helen's face above the fold** — no stock photography. Professional portrait of Helen in the hero, split-layout. Differentiates from every anonymous competitor site.
3. **$73/month anchor visible in hero** — pattern interrupt for visitors arriving with $500+/month expectations.
4. **Lead with transparency** — address the Aliera/NH scandal and voluntary-sharing disclaimer proactively. Trust through honesty, not avoidance.
5. **NH-first content strategy** — zero NH health sharing content exists online; every blog article targets NH-specific search queries for first-mover advantage.
6. **Calendly custom component** — branded multi-step calendar (not raw InlineWidget); collects current insurance type, monthly spend, biggest concern before booking.
7. **No insurance terminology** — "monthly contribution" not "premium," "sharing" not "claims," "PRA" not "deductible" — throughout entire site.

---

## Sections Matrix (confirmed at design-system creation)

| Section | Build? | Notes |
|---------|--------|-------|
| Hero (3-layer: particles + SVG + stagger text) | ✅ Yes | Split layout: Helen photo left, headline + $73 anchor + dual CTA right |
| Pain Points (4 cards) | ✅ Yes | "I pay more for insurance than my mortgage" — real audience language |
| About / Founder Teaser | ✅ Yes | Helen's story — frustrated family → advocate → changed life |
| Services (3 cards) | ✅ Yes | Individual / Family / Senior Supplemental |
| Stats Row (CountUp) | ✅ Yes | $73/mo, 70%+ bill repricing, 47 states, 40 years |
| Testimonials (3-4 featured) | ✅ Yes | NH names + specific savings figures |
| Quiz CTA block | ✅ Yes | "Find out how much you could save" → /quiz |
| Blog Preview | ✅ Yes | 3 cards → /blog |
| Booking Calendar (Calendly inline) | ✅ Yes | Custom branded multi-step component |
| Final CTA block | ✅ Yes | "Ready to stop overpaying?" |
| /about | ✅ Yes | Helen's full story + credentials + stats |
| /services | ✅ Yes | Card index + individual /services/[slug] pages |
| /contact | ✅ Yes | React Hook Form + Zod + contact info |
| /faq | ✅ Yes | Radix accordion — heavy FAQ section (trust-building) |
| /testimonials | ✅ Yes | 32 testimonials, paginated 8/page |
| /booking | ✅ Yes | Dedicated page — custom Calendly component |
| /quiz | ✅ Yes | Multi-step — current insurance → pain points → savings estimate → lead capture → booking |
| /blog | ✅ Yes | 9-10 AEO articles, NH-focused |
| /blog/[slug] | ✅ Yes | Sanity CMS or MDX |
| /pricing (Optimus sales tool) | ✅ Yes | Built for demo. Deleted pre-launch. |
| /shop | ✅ Scaffold | Scaffold always. Decision gate after demo. |
| Service Area Pages | ❌ No | Helen serves all of NH remotely — no city-specific service areas needed |
| Gallery | ❌ No | No trade/physical service |
| Custom: NH Comparison Table | ✅ Yes | Impact vs. Anthem/Ambetter/Harvard Pilgrim + COBRA — NH-specific pricing |
| Custom: "What If Something Goes Wrong?" | ✅ Yes | Transparency section on /faq or standalone section — addresses #1 buying blocker |
| Custom: Compliance Disclosure Block | ✅ Yes | Footer + all membership/pricing sections — mandatory legal |

---

## Session Log

### Session 1 — 2026-04-05
**Completed:**
- Phase 0A: CLAUDE.md filled (10 variables)
- Phase 0B: progress.md created
- Phase 0C: .claude/commands/prime.md saved
- initial-business-data.md: intake complete (Mode B — BNI + Zoom transcript + role-played gaps)
- market-intelligence.md: full 9-section research + compliance appendix complete
- All variables confirmed: location (Manchester NH), goal (1:1 consultations), booking (Calendly custom component), launch (ASAP)

**Discovered:**
- Zero NH-specific health sharing content exists anywhere online — total first-mover advantage
- Both existing Impact advocate sites are anonymous template builds rated 3.5–4/10 — Helen will immediately stand apart
- NH-specific regulatory risk: no HCSM safe harbor statute; NHID has active enforcement authority; Aliera/Trinity scandal is locally known (Keith Meehan, Rochester NH, NPR/NHPR)
- Knew Health has the strongest design in the industry (8/10) — use as design quality benchmark
- Family pricing ($378/mo) is not the cheapest vs. competitors — position on 70%+ bill repricing and no-network, not price alone

**Decisions Made:**
- Primary CTA: "Book a Free Consultation" (1:1 call). Tuesday Zoom is secondary CTA.
- Hero: split layout with Helen's photo (no stock photos) + $73/mo anchor price
- Domain: TBD — Vercel preview URL during build
- Booking: Calendly custom multi-step component (not raw InlineWidget)
- Service area pages: skip — remote/virtual service covers all of NH
- Design direction: warm, personal, "trusted neighbor who happens to be a professional" — earth tones, NOT the blues/purples that dominate competitors

**Next Session Starts At:** Phase 0D (debrief) → Stage 1A (repo scan) → Stage 1B (design-system.md) → Stage 1C (scaffold)

**Blockers:** See Open Blockers table above. None block build from starting.
