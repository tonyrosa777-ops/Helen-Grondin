# design-system.md — Pare Grondin Services
# Synthesized from: initial-business-data.md + market-intelligence.md
# Date: 2026-04-05
# Status: Complete — all 11 sections filled

---

## Section 1 — Brand Identity Statement

Pare Grondin Services is a local, human-first health sharing consultancy. Helen Grondin
is the brand — not Impact Health Sharing, not a generic benefits website, not an insurance
broker in disguise. Within five seconds, a visitor should feel: "This is a real person in
New Hampshire who understands why I'm frustrated with my insurance bill, and she has a
specific answer for me." The brand does NOT feel clinical, corporate, or salesy. It does
not feel like United Healthcare's website, a government benefits portal, or an anonymous
affiliate page. It feels like sitting across from a knowledgeable friend who cut her own
family's healthcare bill nearly in half and can't stop telling people about it. The dominant
emotional register is: empathetic, trustworthy, plain-spoken, and quietly confident. Every
visual and verbal choice reinforces that Helen is local, credible, and on the visitor's side.

*Source: initial-business-data.md Section 4 (tone of voice) + market-intelligence.md
Section 8 (competitor aesthetic analysis) + Section 2 (audience psychology).*

---

## Section 2 — Color Palette

**Theme: Light.** The competitor landscape is dominated by dark-blues, corporate purples,
and cold teal (Liberty, Solidarity, Sedera). Knew Health uses warm navy — the strongest
design in the space. Helen must differentiate visually. A warm light theme signals openness,
transparency, and approachability — the opposite of the insurance industry's clinical opacity.
A dark theme would make Helen look like another corporate health product, not a trusted neighbor.

*Source: market-intelligence.md Section 8 ("The competitor landscape clusters into corporate-
healthcare camp and modern wellness camp... warm earth tones... immediately reads as different
from every competitor.")*

```css
:root {
  /* Brand Colors */
  --primary: rgb(77, 122, 94);             /* Sage green — health, community, NH nature.
                                               Differentiates from every competitor blue/purple.
                                               Used for: primary buttons, headings, active states. */
  --primary-muted: rgba(77, 122, 94, 0.18); /* For backgrounds, hover states, tag fills */

  --accent: rgb(201, 123, 46);             /* Warm amber — energy, warmth, confidence.
                                               Used for: CTA buttons, highlights, stat numbers,
                                               animation particle color. Never overused. */

  /* Background Scale (Light Theme) */
  --bg-base: #FAF8F4;                      /* Warm cream — NOT clinical white. The entire site
                                               breathes warmth. Differentiates from competitor
                                               stark-white sites. */
  --bg-elevated: #F2EDE5;                  /* Slightly deeper cream for alternating sections */
  --bg-card: #FFFFFF;                      /* Clean white for cards, modals, form inputs */

  /* Text Scale */
  --text-primary: #1A2B1E;                 /* Deep sage-tinted dark — warm, not harsh black */
  --text-secondary: rgba(26, 43, 30, 0.70);
  --text-muted: rgba(26, 43, 30, 0.45);
}
```

**Usage rules:**
- `--primary` (sage green): headings, primary buttons, nav active, icon fills, section borders
- `--accent` (amber): all primary CTAs ("Book a Free Consultation"), stat numbers with CountUp, quiz progress indicator, particle animation color
- `--bg-base` (warm cream): global page background — never swap to white
- `--bg-elevated`: alternating section backgrounds to create visual rhythm without harshness
- `--bg-card`: cards, testimonial blocks, form backgrounds
- Never use pure `#000000` or `#FFFFFF` for text — always use the token values above

**⚠️ LOW CONFIDENCE — Animation dark panel:**
The hero section typically uses a darker background to make text readable over the particle
canvas. Recommend: `#1A2B1E` (text-primary) as the hero background — a deep sage that is
warm, brand-correct, and provides contrast. This gives the hero a dark feel while the rest
of the site is light.

---

## Section 3 — Typography System

**Font selection rationale:** Competitors default to generic sans-serifs (Roboto, Open Sans,
system-ui). Knew Health and Zion use modern sans-serifs indistinguishable from any SaaS app.
Helen's brand is warm and personal — the display font should signal "human-crafted" without
being stiff or formal.

*Source: market-intelligence.md Section 8 (competitor typography patterns) + initial-business-
data.md Section 4 ("warm, trustworthy, plain-spoken").*

### font-display — Fraunces (Headlines)

- **URL:** `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&display=swap`
- **Why Fraunces:** Variable optical-size serif with a distinctive personality — warm but modern.
  No competitor uses a serif display font. This immediately differentiates. At large sizes it
  feels editorial and confident; at smaller sizes it reads clearly. Not formal/stuffy like
  Playfair Display. The "wobbly" optical axis adds humanity.
- **Weights used:** 400 (body rhythm headings), 600 (section titles), 700 (hero H1)
- **Heading scale:**
  - H1 (hero): `clamp(2.8rem, 5vw, 4.5rem)` / weight 700
  - H2 (section): `clamp(1.9rem, 3vw, 2.8rem)` / weight 600
  - H3 (card): `clamp(1.3rem, 2vw, 1.6rem)` / weight 600
  - H4 (sub): `1.1rem` / weight 600

### font-body — Plus Jakarta Sans (Body text, UI)

- **URL:** `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap`
- **Why Plus Jakarta Sans:** Humanist geometry with slightly warmer terminals than Inter/DM Sans.
  Professional but not cold. Reads very well at body sizes on screen. The subtle warmth pairs
  well with Fraunces without competing. Not used by any analyzed competitor.
- **Weights used:** 400 (body), 500 (UI labels, nav), 600 (button text, form labels)
- **Body size:** `1rem` / line-height `1.7` / max-width `65ch` for prose blocks

### font-mono — Space Mono (Eyebrows, badges, stat labels)

- **URL:** `https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap`
- **Why Space Mono:** Used sparingly for eyebrow labels ("WHY IMPACT", "WHAT MEMBERS SAY")
  and stat unit labels ("/ MONTH", "SAVED ANNUALLY"). The mono rhythm creates visual
  anchors without adding typographic complexity. Adds character to an otherwise clean system.
- **Weights used:** 400 only
- **Size:** `0.7rem` / letter-spacing `0.12em` / `text-transform: uppercase`

---

## Section 4 — Spacing & Layout System

Inheriting Optimus standard values. No client-specific deviations — the content and trust
signals are dense enough that clean, generous spacing is essential.

```
Max-width container:       max-w-6xl (1152px) — standard Optimus
Section vertical padding:  py-20 md:py-28 (desktop) / py-14 (mobile)
Card padding:              p-6 md:p-8
Grid columns:              2-col (desktop), 1-col (mobile) for most sections
                           3-col for service cards and testimonial previews
Gutter:                    gap-6 md:gap-8
Hero padding:              pt-24 md:pt-40 (must clear navigation)
```

**Mobile-first critical rule for hero:** Hero content must begin within ~32px of the nav bar
bottom on 390px viewport. Use `items-start` not `items-center`. Content div: `pt-24 md:pt-40`.
*Source: website-build-template.md homepage section #12 mobile QA requirement.*

---

## Section 5 — Component Style Rules

### Buttons

**Primary CTA ("Book a Free Consultation")**
- Background: `--accent` (amber `#C97B2E`)
- Text: white `#FFFFFF`, weight 600, `font-body`
- Shape: `rounded-lg` (8px) — approachable, not stiff square; not pill (too casual for a consultant)
- Size: `px-7 py-3.5` desktop / `px-5 py-3` mobile
- Hover: darken accent 10% + `shadow-lg`
- Focus: `ring-2 ring-accent ring-offset-2`

**Secondary CTA ("Join Tuesday Zoom")**
- Background: transparent
- Border: `2px solid var(--primary)` (sage green)
- Text: `--primary` (sage green), weight 600
- Shape: `rounded-lg` (same as primary for consistency)
- Hover: `bg-primary-muted`

**Ghost / Tertiary**
- No border, no background
- Text: `--text-secondary`
- Hover: `text-primary` + underline
- Used for: "Learn more" links, nav items

### Cards
- Background: `--bg-card` (#FFFFFF)
- Border: `1px solid rgba(26, 43, 30, 0.10)` (very subtle)
- Border-radius: `rounded-xl` (12px)
- Shadow: `shadow-sm` default, `shadow-md` on hover with `transition-shadow`
- Hover lift: `translate-y-[-2px]` with transition

### Form Inputs
- Background: `--bg-card`
- Border: `1px solid rgba(26, 43, 30, 0.20)`
- Border-radius: `rounded-lg`
- Focus: `border-primary ring-1 ring-primary`
- Error: `border-red-500 ring-1 ring-red-500`

### Navigation
- Background: `--bg-base` with `backdrop-blur-md` when scrolled
- Logo: Helen's name in `font-display` weight 700 (text mark — no logo file)
- Links: `font-body` weight 500, `--text-primary`, hover: `--primary`
- Primary nav CTA: small amber button "Book a Call" always visible (drives conversions even from nav)
- Mobile: hamburger → slide-in drawer from right

### Calendly Multi-Step Component (custom)
- Background: `--bg-card` with `rounded-2xl` container
- Progress indicator: amber dots / step count in Space Mono
- Form fields: standard input styles above
- Final step renders Calendly InlineWidget with URL color params injected:
  `primaryColor=c97b2e&backgroundColor=faf8f4&textColor=1a2b1e`

---

## Section 6 — Photography & Media Direction

**Available assets:** None. Helen has no existing photography.
*Source: initial-business-data.md Section 4 ("No existing brand assets.")*

**Primary directive — Real photo of Helen required:**
Helen's professional portrait is the single most important asset on the site. The hero uses
a split layout: Helen's photo left, headline/CTA right. Every anonymous competitor site is
immediately undermined by this one element. A stock photo defeats the entire differentiator.

*Source: market-intelligence.md Section 7 ("Helen's photo and name — a real human face
immediately differentiates from every anonymous competitor") + Section 3 (both existing
Impact advocate sites "completely anonymous").*

**Hero portrait:**
- Format: Professional headshot or environmental portrait (Helen at desk, or outdoors in NH)
- Mood: Warm, direct eye contact, genuine expression — NOT posed corporate headshot
- Processing: Warm tones, slightly desaturated but not flat — feels real, not stock
- Aspect: 2:3 portrait orientation for split hero layout
- Prohibited: Stock photography, white backgrounds, medical/stethoscope props

**Content section photos (if needed):**
- fal.ai generation recommended for blog card images and section backgrounds
- Prompts should specify: "warm tones, NH landscape, autumn/green, natural light, no corporate settings"
- Never use: stock photos of families on beaches, doctors with clipboards, health symbols

**Video:**
- Tuesday Zoom session recording clip (if available from Helen) — embed in "How It Works" section
- Impact Health Sharing has official explainer videos — embed on About page only
- No autoplay. Muted default. Play button explicitly visible. Fallback thumbnail always provided.

**Aspect ratios:**
- Hero portrait: 2:3
- Blog cards: 16:9
- About section: 3:4 or 2:3 (portrait)
- fal.ai generated: 16:9 for all content uses

---

## Section 7 — Tone of Voice

*Source: initial-business-data.md Section 4 ("warm, trustworthy, plain-spoken, quietly urgent") +
market-intelligence.md Section 2 (verbatim audience language) + Section 7 (copy direction).*

### Principle 1 — Speak to the pain, not the product

**Rule:** Open every section by naming the exact problem the visitor is experiencing, using
their own language. Lead with empathy, follow with solution.

**BEFORE (competitor pattern):**
"Impact Health Sharing is a comprehensive health cost-sharing program offering flexible
membership options for individuals and families at affordable monthly rates."

**AFTER (Helen's voice):**
"You're paying over a thousand dollars a month for health insurance you're afraid to use.
I was too. That's exactly why I'm here."

---

### Principle 2 — Plain language only (zero insurance vocabulary)

**Rule:** Never use "premium," "coverage," "claims," "benefits," "policy," "copay," or
"deductible." These are insurance words that trigger the psychological framework Helen is
helping people leave. Use: "monthly contribution," "sharing," "eligible expenses," "member
responsibilities," "Personal Responsibility Amount (PRA)."

**BEFORE:**
"Your premium covers a comprehensive suite of benefits including prescription copays and
specialist referrals with network deductible met at $7,500."

**AFTER:**
"Your monthly contribution starts at $73. When you have a medical bill, Impact reprices it —
typically 70%+ lower — before any cost-sharing applies. You have one shared PRA for your
entire household, not one per person."

---

### Principle 3 — Answer the fear before it becomes a question

**Rule:** The #1 objection is "what if they just don't pay?" Proactively address every major
buying blocker (voluntary nature, pre-existing conditions, NH scandal awareness) rather than
waiting for the visitor to find them on a competitor's review page.

**BEFORE:**
"Health sharing is not insurance. Members are not guaranteed benefits. Sharing is subject to
program guidelines." *(footer, tiny font, legal boilerplate)*

**AFTER:**
"Here's what health sharing doesn't cover — and why I still enrolled my own family."
*(full section, Helen's voice, honest, specific)*

---

### Principle 4 — Local signals everywhere

**Rule:** Use "New Hampshire," "Granite State," Manchester-area specifics, and NH-named
insurance carriers wherever relevant. Generic copy loses the local trust advantage.

**BEFORE:**
"Families across the country are saving thousands on healthcare costs."

**AFTER:**
"NH families paying $1,500+/month for Anthem or Ambetter plans are switching. I'll show you
the math for your specific situation."

---

### Principle 5 — Short. Specific. Sounds like a person.

**Rule:** Write like a knowledgeable friend texting you good news — not like a pitch deck.
Short sentences. Real numbers. Named examples. No em dashes.

**BEFORE:**
"Our seamless enrollment process — taking just five to seven minutes — allows prospective
members to begin their journey toward affordable healthcare coverage with minimal friction."

**AFTER:**
"Enrollment takes 5 to 7 minutes online. Coverage starts the first of next month.
No forms. No underwriting. No waiting period."

---

## Section 8 — Brand Personality Axes

*Used directly by the animation-specialist agent for Hero animation selection.*

*Source: initial-business-data.md Section 4 ("warm, trustworthy, approachable, credible") +
market-intelligence.md Section 8 ("warm, personal, and local" — fills the gap between
impersonal corporate and amateurish affiliate sites).*

**Axis 1 — Identity Orientation**
Corporate/Organizational ◄━━━━━━━━━━━━━━●━► Personal/Human
*(Far "personal" end — Helen is the brand, not Impact Health Sharing)*

**Axis 2 — Emotional Temperature**
Clinical/Cold ◄━━━━━━━━━━━━━━━━━●━━━► Warm/Human
*(Near the far "warm" end — corrective against the entire industry's coldness)*

**Axis 3 — Energy Level**
Quiet/Gentle ◄━━━●━━━━━━━━━━━━━━━━━► Loud/Bold
*(Slightly toward "quiet" — trustworthy and calm, not high-pressure sales energy)*

**Animation implication for animation-specialist agent:**
Axis 3 (quiet/gentle) + Axis 2 (warm): select a particle system with low particle velocity,
warm amber/sage color tones, organic drift rather than directional flow, medium density.
NOT lightning, NOT fast-moving particles, NOT electric blue. Think: soft fireflies or
floating spores drifting gently — community, connection, organic health.

Animated SVG Layer 2: Abstract community connection — circles (representing members) connected
by thin flowing lines, animating in sequence to suggest the health sharing community pooling
resources. Draws in with sequential path animations. Keep it minimal and abstract, not literal.

---

## Section 9 — Competitor Differentiation Statement

*Source: market-intelligence.md Section 3 (competitor analysis) + Section 8 (design landscape).*

### vs. HealthCareSharingQuote.com + MyImpactHealth.org (direct Impact advocate competitors)

Both sites are anonymous affiliate pass-throughs — generic WordPress/GoDaddy template builds,
no personal brand, no original content, rated 3.5–4/10. Helen's site will be in a completely
different league before a single visitor reads a word. Where they hide behind the Impact brand
and route visitors to corporate enrollment tools, Helen leads with her own name, her own photo,
and her own story. Where they have zero educational content, Helen has 9–10 NH-specific
articles that will own every relevant search query in the state. The differentiation is total.

### vs. Knew Health (strongest organizational competitor, 8/10 design)

Knew Health uses warm navy and coral — modern DTC wellness aesthetic, clean photography, the
best-written copy in the industry. Where they look like a national SaaS product, Helen looks
like a local human who knows your town, knows your insurance carrier, and can have a real
conversation. Where Knew Health's 1:1 call option is a listed menu item, Helen's consultation
booking is the primary conversion mechanism everything on the site leads to. Knew Health has
no NH presence; Helen owns it entirely.

### vs. Liberty HealthShare (most recognized national competitor)

Liberty uses deep blue, corporate photography, and six pricing tiers that create decision
paralysis. Their explicit Christian/Mennonite faith requirement excludes secular NH families
(and is currently under scrutiny for a $140M financial misconduct investigation). Where Liberty
buries the fine print, Helen leads with it — the transparency strategy is the antidote to
exactly the kind of scandal that has made consumers skeptical. Where Liberty looks like a
company, Helen looks like a neighbor.

---

## Section 10 — Design Anti-Patterns (Prohibited List)

*Source: market-intelligence.md Section 3 (competitor weaknesses) + Section 8 (what to avoid).*

1. **No blue or purple in the palette.** Every competitor uses blue (Liberty, Solidarity) or navy
   (Knew Health, Zion). Blue = insurance industry = the thing Helen is helping people escape.

2. **No stock photography.** Both Impact advocate sites use generic stock photos; Solidarity uses
   corporate family stock images. Helen's hero must be Helen. If Helen's photo is not available
   at build time, use a warm-toned illustrated placeholder — never a stock family image.

3. **No insurance terminology anywhere.** "Premium," "coverage," "claims," "deductible," "policy,"
   "copay," "benefits," "network" — none of these appear on the site. Compliance risk + trust killer.

4. **No footer-only compliance disclosure.** Sedera's 350-word WARNING block in the footer is the
   #1 trust destroyer in the space. Follow Knew Health's model: brief, positive, woven into content.
   "It's not insurance. It's a community-based alternative" — not a legal wall.

5. **No 4+ CTAs on any page.** Solidarity's homepage has 5 competing CTAs. Decision paralysis
   kills conversions. Helen's site has exactly two paths: "Book a Consultation" (primary) and
   "Join Tuesday Zoom" (secondary). No third path.

6. **No anonymous enrollment flow.** Impact's embedded quote tool is fine to link to — but
   never let it be the primary conversion mechanism. Helen's site never routes visitors away
   from a personal conversation with Helen in favor of a corporate enrollment form.

7. **No maintenance banners, broken tools, or "coming soon" placeholders at demo.** Sedera
   has a live maintenance banner destroying trust. If a feature isn't built, cut it from the
   demo nav. A working calendar widget with a demo URL beats an empty container every time.

8. **Do not use Roboto, Open Sans, or Inter.** Generic — signals template-built. All three
   appear in competitor sites. font-display: Fraunces, font-body: Plus Jakarta Sans.

9. **No dark hero with stock photo overlay.** The hero uses the split layout: Helen's photo
   (or placeholder portrait) left, text right on dark sage background. Not a full-bleed
   background image with text overlaid — that's every generic health website.

10. **Do not make the PRA, co-share, or $500K cap invisible.** Proactively show the limits.
    Hiding them invites the "what's the catch?" objection and creates legal exposure.

---

## Section 11 — Sections Matrix

### Base Template Sections

| Section | Include? | Notes |
|---------|----------|-------|
| Shop (Stripe + Printful) | No | Health sharing advocacy has no physical products. Scaffold per CLAUDE.md always-built rule, delete at decision gate. |
| Blog (Sanity CMS or MDX) | Yes | 9–10 NH-focused AEO articles. NH search space is completely empty — this alone wins the SEO game. |
| Quiz / Lead capture | Yes | "Find out how much you could save" — multi-step, collects current premium and family size, outputs estimated annual savings, ends at booking CTA. |
| Booking widget (Calendly) | Yes | Custom multi-step branded component, not raw InlineWidget. Pre-qualification form collects: insurance type, monthly spend, biggest concern. |
| Google Maps embed | No | Fully remote/virtual service. No physical office location. |
| Instagram feed | No | No Instagram account exists. Add placeholder hook in code (commented out), enable post-launch when account created. |
| Service area pages | No | Helen serves all of NH remotely. No city-specific SEO pages needed — a single "Serving New Hampshire" signal is sufficient. If national expansion requires, revisit. |
| Pricing page (Optimus tool) | Yes | Built for demo, deleted pre-launch per CLAUDE.md always-built rule. |
| Testimonials page | Yes | 32 testimonials. All written as demo copy, marked [DEMO COPY — pending client review]. NH town names, specific savings figures. |

### Custom Features (beyond base template)

| Custom Feature | Source | Complexity |
|----------------|--------|------------|
| Custom multi-step Calendly wrapper component | initial-business-data.md S5 + market-intelligence.md S7 | Medium — multi-step form + Calendly InlineWidget in final step + Resend confirmation |
| NH Comparison Table | market-intelligence.md S4 ("no competitor provides NH-specific pricing") | Low-Medium — static data table, updated annually |
| "What If Something Goes Wrong?" section | market-intelligence.md S2 (#1 buying blocker) + S5 (feature gap) | Low — content section, no dynamic component |
| Compliance disclosure block component | market-intelligence.md Compliance Appendix | Low — reusable component, placed on footer + pricing/membership sections |
| Tuesday Zoom countdown/next-session indicator | initial-business-data.md S2 + S5 | Low — recurring Tuesday date logic, countdown timer |
| Savings calculator (interactive) | market-intelligence.md S4 ("lead with savings calculator") | Medium — two inputs (current premium + family size), outputs annual savings vs. Impact |
| NH-specific AEO blog articles (9–10) | market-intelligence.md S6 (full content gap article list) | High — content only, no component complexity |

---

*Validation checklist (for orchestrator):*
- [x] All 11 sections present
- [x] Section 2: all 9 CSS custom property tokens have values
- [x] Section 8: exactly 3 axes defined with position markers
- [x] Section 11: every base template row has Yes or No
- [x] Section 11: Custom Features table filled
- [x] No "TBD" or blank subsections
- [x] Every decision cites source document
