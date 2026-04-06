"use client";

// [DEMO COPY — pending client review]
// All 32 testimonials written in voice of NH families, self-employed workers,
// COBRA refugees, seniors, and skeptics. Real testimonials replace these at launch.

import { useState } from "react";
import Link from "next/link";

type ServiceSlug = "individual-membership" | "family-membership" | "senior-supplemental";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
  service: ServiceSlug;
  featured?: boolean;
}

const serviceLabels: Record<ServiceSlug, string> = {
  "individual-membership": "Individual",
  "family-membership": "Family",
  "senior-supplemental": "Senior Supplemental",
};

const serviceBadgeColors: Record<ServiceSlug, string> = {
  "individual-membership": "bg-[var(--primary-muted)] text-[var(--primary)]",
  "family-membership": "bg-amber-50 text-amber-700",
  "senior-supplemental": "bg-blue-50 text-blue-700",
};

const allTestimonials: Testimonial[] = [
  // ── First 3 from site.ts (featured) ──────────────────────────────────────
  {
    id: 1,
    quote:
      "We were paying $1,450 a month for our Anthem plan. Two kids, both healthy, and we never hit the deductible. Helen walked me through the math on Impact and we switched. We're at $628 now. That's $9,864 back in our budget this year.",
    author: "Jennifer M.",
    location: "Manchester, NH",
    service: "family-membership",
    featured: true,
  },
  {
    id: 2,
    quote:
      "I got laid off in February and my COBRA was $1,840 a month. I called Helen the same week. She got me enrolled in Impact for $73. I know it's not insurance but honestly the billing support alone has been worth it.",
    author: "David K.",
    location: "Nashua, NH",
    service: "individual-membership",
    featured: true,
  },
  {
    id: 3,
    quote:
      "I was skeptical. I asked Helen every hard question I could think of. She answered every single one honestly, including the things Impact doesn't cover. That honesty is what made me trust her. We have been members for six months and we are very happy.",
    author: "Tom and Rachel S.",
    location: "Concord, NH",
    service: "family-membership",
    featured: true,
  },

  // ── COBRA refugees ────────────────────────────────────────────────────────
  {
    id: 4,
    quote:
      "COBRA hit me at $1,620 a month after I left my job at the hospital. I found Helen through a Facebook group for NH freelancers. She explained everything without any pressure. I enrolled the same week. I'm saving over $1,100 a month.",
    author: "Marcus T.",
    location: "Bedford, NH",
    service: "individual-membership",
  },
  {
    id: 5,
    quote:
      "My company downsized in January and COBRA was $1,910 for my family of four. We had 60 days to decide and I was panicking. Helen got on a Zoom with me, showed me the numbers side by side, and answered every question my wife had. We switched and have not looked back.",
    author: "Greg and Lisa F.",
    location: "Derry, NH",
    service: "family-membership",
  },
  {
    id: 6,
    quote:
      "I elected COBRA at first because I was scared to try anything else. Paid three months at $1,440 before a coworker mentioned Helen. I wish I had found her sooner. My contribution now is $147 a month and I have used it twice without any issues.",
    author: "Priya N.",
    location: "Merrimack, NH",
    service: "individual-membership",
  },
  {
    id: 7,
    quote:
      "Losing my job was stressful enough. Then I saw the COBRA paperwork. $1,730 a month for just me and my husband. Helen answered every hard question we had, including the pre-existing condition stuff. We joined and my husband's routine care has gone fine.",
    author: "Donna and Ray M.",
    location: "Londonderry, NH",
    service: "family-membership",
  },
  {
    id: 8,
    quote:
      "I had two weeks before my COBRA election deadline. Helen got back to me within an hour, walked me through the whole thing on the phone, and stayed patient while I asked the same question three different ways. I enrolled that afternoon.",
    author: "Kevin S.",
    location: "Hooksett, NH",
    service: "individual-membership",
  },

  // ── Self-employed / freelancers ───────────────────────────────────────────
  {
    id: 9,
    quote:
      "I have been self-employed for four years and my ACA premiums went up 19% this January. I was at $487 a month with a $7,500 deductible I had never touched. Helen showed me I could be at $73 a month. I switched in March and already feel better about my finances.",
    author: "Sophie L.",
    location: "Portsmouth, NH",
    service: "individual-membership",
  },
  {
    id: 10,
    quote:
      "I do freelance web design and I have three kids. We were paying $1,760 a month on an Ambetter plan. Helen spent an hour with me on Zoom going through our specific situation. We are at $628 now. I tell everyone I know about Helen.",
    author: "Chris and Amber W.",
    location: "Salem, NH",
    service: "family-membership",
  },
  {
    id: 11,
    quote:
      "I am a 1099 contractor, been doing electrical work on my own for six years. Health insurance has been a nightmare every year. Helen was the first person who actually explained the difference between a deductible and a PRA in plain language. Enrolled right after our call.",
    author: "Billy R.",
    location: "Goffstown, NH",
    service: "individual-membership",
  },
  {
    id: 12,
    quote:
      "I have a small photography business and could not afford the $510 a month I was paying for an ACA bronze plan. Helen got me into Impact for $73. I had a minor urgent care visit last month and the bill repricing knocked it down to almost nothing.",
    author: "Tara D.",
    location: "Exeter, NH",
    service: "individual-membership",
  },
  {
    id: 13,
    quote:
      "My wife and I both work for ourselves, two kids in middle school. We switched from a Harvard Pilgrim plan at $1,900 a month. Helen answered every concern my wife had about pre-existing conditions honestly. We are at $628 now. The savings are real.",
    author: "Matt and Julie O.",
    location: "Dover, NH",
    service: "family-membership",
  },
  {
    id: 14,
    quote:
      "I run a small landscaping company. Just me and two part-timers. I was paying $441 a month for an ACA plan and still owed $800 every time I went to the doctor. Now I am at $73 and the telehealth feature has already saved me two urgent care visits.",
    author: "Dan B.",
    location: "Milford, NH",
    service: "individual-membership",
  },

  // ── Families switching from ACA ───────────────────────────────────────────
  {
    id: 15,
    quote:
      "We had an Anthem gold plan for three years. Always healthy, never hit the deductible. This year it jumped to $2,040 a month and I finally called Helen. Our family of five is at $628 now. I cannot believe we waited this long.",
    author: "The Kowalski Family",
    location: "Londonderry, NH",
    service: "family-membership",
  },
  {
    id: 16,
    quote:
      "Three kids under ten and our ACA premium hit $1,800 in January. My neighbor mentioned Helen. I was doubtful but I called. Helen did not push me. She showed me the numbers and said I should think about it. I called back two days later and enrolled.",
    author: "Sara P.",
    location: "Newmarket, NH",
    service: "family-membership",
  },
  {
    id: 17,
    quote:
      "We switched from a $1,350 Ambetter plan. Two adults, one teenager. Helen walked us through the PRA, the sharing process, the stuff that is not covered. We knew exactly what we were getting into. That transparency made the decision easy.",
    author: "Rich and Donna A.",
    location: "Rochester, NH",
    service: "family-membership",
  },
  {
    id: 18,
    quote:
      "I was on an ACA plan through the marketplace at $891 a month. No subsidies, too much income for help. Helen saved me $818 a month. I put that money straight into my retirement account now. Best financial decision I made this year.",
    author: "Elaine T.",
    location: "Keene, NH",
    service: "individual-membership",
  },
  {
    id: 19,
    quote:
      "Four kids and two self-employed parents. ACA was eating us alive at $2,100 a month. Helen was patient, thorough, and never made us feel rushed. We are at $628 now and we have used it for a pediatric visit already with no issues.",
    author: "The Rodrigues Family",
    location: "Hampton, NH",
    service: "family-membership",
  },

  // ── Small business owners ─────────────────────────────────────────────────
  {
    id: 20,
    quote:
      "I own a small accounting firm and I could not afford to offer my employees coverage. At least I can cover myself now. Helen got me set up with an individual plan for $147 a month. I have recommended her to two of my clients who are also self-employed.",
    author: "Carol H.",
    location: "Nashua, NH",
    service: "individual-membership",
  },
  {
    id: 21,
    quote:
      "I have a small HVAC business in Laconia. Five employees but I pay for my own health coverage separately. Was at $509 a month on a silver ACA plan. Helen got me on Impact for $147. Simple process, no hassle. I appreciate that she actually knows the product inside and out.",
    author: "Steve V.",
    location: "Laconia, NH",
    service: "individual-membership",
  },
  {
    id: 22,
    quote:
      "I own a bakery and my husband does custom cabinetry. We cover ourselves and our two kids. ACA was $1,540 a month and going up every year. Helen was straightforward about the limitations and the benefits. We switched four months ago. Saving $912 a month.",
    author: "Renee and Tom K.",
    location: "Bedford, NH",
    service: "family-membership",
  },
  {
    id: 23,
    quote:
      "I run a consulting business and had been on a marketplace plan for years. Helen reviewed my situation and explained the PRA options so I could pick the right level. I chose a higher PRA to lower my monthly contribution. Makes sense for how I use healthcare.",
    author: "James W.",
    location: "Portsmouth, NH",
    service: "individual-membership",
  },

  // ── Seniors on Medicare ───────────────────────────────────────────────────
  {
    id: 24,
    quote:
      "I am 68, on Medicare A and B, and the gaps were adding up. Helen explained the supplemental option clearly. It fills in exactly what Medicare leaves open. My monthly cost is manageable and I finally feel like I understand what I have.",
    author: "Gloria F.",
    location: "Dover, NH",
    service: "senior-supplemental",
  },
  {
    id: 25,
    quote:
      "My husband and I are both retired. We were paying a lot for Medigap and it kept going up. Helen showed us the supplemental option. She was patient and never rushed us. We have been on it for four months and have had no surprises.",
    author: "Ruth and Harold L.",
    location: "Laconia, NH",
    service: "senior-supplemental",
  },
  {
    id: 26,
    quote:
      "I turned 65 last year and was confused about all the Medicare supplement options. Helen explained exactly what the Impact supplemental covers and what it does not. Very honest. I signed up and it fills the gaps I was worried about.",
    author: "Frank O.",
    location: "Keene, NH",
    service: "senior-supplemental",
  },
  {
    id: 27,
    quote:
      "My daughter found Helen for me. I was skeptical at 71 about anything besides a regular Medigap plan. Helen walked me through the comparison. The telehealth benefit alone is worth it. I can see a doctor without driving anywhere.",
    author: "Marion D.",
    location: "Rochester, NH",
    service: "senior-supplemental",
  },

  // ── Initially skeptical ───────────────────────────────────────────────────
  {
    id: 28,
    quote:
      "I had read about the Aliera scandal here in New Hampshire. I was not going near health sharing. Helen knew about it and explained the difference between what Impact is versus what Aliera was. She did not dodge the question. That changed my mind.",
    author: "Paul C.",
    location: "Concord, NH",
    service: "individual-membership",
  },
  {
    id: 29,
    quote:
      "I spent a week reading Reddit threads calling health sharing a scam before I called Helen. I came in ready to argue. She agreed with half of what I had read and explained why Impact was different. I left the call enrolled. I genuinely did not expect that.",
    author: "Nathan G.",
    location: "Merrimack, NH",
    service: "individual-membership",
  },
  {
    id: 30,
    quote:
      "My wife was convinced it was too good to be true. I booked the Tuesday Zoom and we both joined. Helen answered questions from four other people on that call and every answer was honest. No spin. My wife signed off on switching before the Zoom ended.",
    author: "Eric and Samantha B.",
    location: "Salem, NH",
    service: "family-membership",
  },

  // ── Had actual medical events ─────────────────────────────────────────────
  {
    id: 31,
    quote:
      "I had an ER visit six weeks after joining. Broken wrist from a fall. The hospital billed $8,400. Impact repriced it to $2,100 before my PRA even applied. I owed about $900 total. I was honestly shocked at how well it worked.",
    author: "Melissa R.",
    location: "Derry, NH",
    service: "individual-membership",
  },
  {
    id: 32,
    quote:
      "My son needed an outpatient procedure this past fall. I was nervous about how the sharing process would go. Helen walked me through submitting the bill step by step. Impact handled it in about two weeks. The repriced bill was 68% lower than the original. Helen answered every question I had, twice when I needed it.",
    author: "Nicole and Paul T.",
    location: "Goffstown, NH",
    service: "family-membership",
  },
];

const ITEMS_PER_PAGE = 8;
const TOTAL_PAGES = Math.ceil(allTestimonials.length / ITEMS_PER_PAGE);

export default function TestimonialsContent() {
  const [page, setPage] = useState(0);

  const featuredTestimonial = allTestimonials[0];
  const pageItems = allTestimonials.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  return (
    <>
      {/* ── Hero Header ───────────────────────────────────────────────────── */}
      <section
        className="bg-[var(--bg-hero)] pt-24 pb-16 md:pt-32 md:pb-20"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-4">What Members Say</p>
          <h1
            id="testimonials-heading"
            className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-[var(--text-on-dark)] leading-tight mb-4"
          >
            What New Hampshire Members Say
          </h1>
          <p className="text-[var(--text-on-dark-muted)] text-lg max-w-xl mx-auto">
            32 testimonials from real families across the Granite State.
          </p>
        </div>
      </section>

      {/* ── Featured Pull Quote ───────────────────────────────────────────── */}
      <section className="bg-[var(--bg-base)] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div
              className="font-display text-8xl leading-none text-[var(--primary)] opacity-20 select-none mb-2"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote className="font-display text-[clamp(1.3rem,2.5vw,1.9rem)] font-semibold italic text-[var(--text-primary)] leading-snug max-w-3xl mx-auto mb-6">
              {featuredTestimonial.quote}
            </blockquote>
            <p className="font-semibold text-[var(--text-primary)]">{featuredTestimonial.author}</p>
            <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-muted)] mt-1">
              {featuredTestimonial.location}
            </p>
            <span
              className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold ${serviceBadgeColors[featuredTestimonial.service]}`}
            >
              {serviceLabels[featuredTestimonial.service]}
            </span>
          </div>
        </div>
      </section>

      {/* ── Paginated Grid ────────────────────────────────────────────────── */}
      <section className="bg-[var(--bg-elevated)] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page indicator */}
          <div className="flex items-center justify-between mb-10">
            <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-muted)]">
              Showing {page * ITEMS_PER_PAGE + 1}&ndash;
              {Math.min(page * ITEMS_PER_PAGE + ITEMS_PER_PAGE, allTestimonials.length)} of{" "}
              {allTestimonials.length} testimonials
            </p>
            <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-muted)]">
              Page {page + 1} of {TOTAL_PAGES}
            </p>
          </div>

          {/* 3-col desktop / 2-col tablet / 1-col mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pageItems.map((t) => (
              <article
                key={t.id}
                className="bg-[var(--bg-card)] rounded-xl p-6 shadow-sm border border-[var(--border-subtle)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              >
                {/* Opening quote mark */}
                <div
                  className="text-3xl leading-none text-amber-400 mb-3 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                {/* Quote */}
                <p className="italic text-[var(--text-secondary)] text-sm leading-relaxed flex-1 mb-4">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="mt-auto">
                  <p className="font-semibold text-[var(--text-primary)] text-sm">{t.author}</p>
                  <p className="font-mono text-xs tracking-widest uppercase text-[var(--text-muted)] mt-0.5">
                    {t.location}
                  </p>
                  <span
                    className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-semibold ${serviceBadgeColors[t.service]}`}
                  >
                    {serviceLabels[t.service]}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="flex items-center justify-center gap-3 mt-12">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="px-5 py-2.5 rounded-lg border border-[var(--border-medium)] font-semibold text-sm text-[var(--text-primary)] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--primary-muted)] transition-colors"
              aria-label="Previous page"
            >
              &larr; Previous
            </button>

            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${
                  i === page
                    ? "bg-[var(--primary)] text-white"
                    : "border border-[var(--border-medium)] text-[var(--text-secondary)] hover:bg-[var(--primary-muted)]"
                }`}
                aria-label={`Go to page ${i + 1}`}
                aria-current={i === page ? "page" : undefined}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(TOTAL_PAGES - 1, p + 1))}
              disabled={page === TOTAL_PAGES - 1}
              className="px-5 py-2.5 rounded-lg border border-[var(--border-medium)] font-semibold text-sm text-[var(--text-primary)] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--primary-muted)] transition-colors"
              aria-label="Next page"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--bg-hero)] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-semibold text-[var(--text-on-dark)] mb-4">
            Ready to become our next success story?
          </h2>
          <p className="text-[var(--text-on-dark-muted)] text-lg mb-8 max-w-xl mx-auto">
            Book a free 30-minute consultation. Helen will show you the exact numbers for your family, your situation, and your current plan.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors shadow-lg"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
