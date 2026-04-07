"use client";
import Link from "next/link";
import { FadeUp } from "@/components/animations/FadeUp";
import ScrollReveal from "@/components/ScrollReveal";
import { testimonials } from "@/data/site";

/*
 * TestimonialsPreview — "What Members Say" section
 * bg-base — light relief after dark StatsRow.
 * Layout: eyebrow/h2 → hero pullquote (first featured) → 2-card grid (remaining featured)
 * Source: design-system.md Section 5 (card styles)
 *         site.ts testimonials[] featured: true
 * ZERO em dashes per CLAUDE.md Content Standards
 */

const featured = testimonials.filter((t) => t.featured);
const [heroQuote, ...gridQuotes] = featured;

export default function TestimonialsPreview() {
  return (
    <section
      className="section-base"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <FadeUp className="text-center mb-12">
          <p className="eyebrow mb-4">What Members Say</p>
          <h2
            className="font-display font-semibold"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
            }}
          >
            Real NH families. Real numbers.
          </h2>
        </FadeUp>

        {/* ── Featured hero pullquote ── */}
        {heroQuote && (
          <ScrollReveal delay={0.05} className="mb-10">
            <div
              className="rounded-2xl px-8 py-9 md:px-12 md:py-10 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(77,122,94,0.10) 0%, rgba(201,123,46,0.06) 100%)",
                border: "1px solid rgba(77,122,94,0.18)",
              }}
            >
              {/* Large decorative quote mark */}
              <span
                className="absolute pointer-events-none select-none font-display"
                aria-hidden="true"
                style={{
                  top: "-1rem",
                  left: "1.5rem",
                  fontSize: "8rem",
                  lineHeight: 1,
                  color: "rgba(77,122,94,0.12)",
                  fontFamily: "var(--font-display, 'Fraunces', serif)",
                }}
              >
                &ldquo;
              </span>
              <p
                className="font-display font-medium relative z-10 mb-5"
                style={{
                  color: "var(--text-primary)",
                  fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  maxWidth: "72ch",
                }}
              >
                {heroQuote.quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-0.5 rounded-full"
                  style={{ background: "var(--accent)" }}
                  aria-hidden="true"
                />
                <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                  {heroQuote.author} &middot; {heroQuote.location}
                </p>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ── Supporting card grid (remaining featured) ── */}
        <div className={`grid grid-cols-1 ${gridQuotes.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-6 mb-10`}>
          {gridQuotes.map((testimonial, i) => (
            <ScrollReveal key={testimonial.id} delay={0.12 + i * 0.12}>
              <div
                className="card-hover rounded-xl p-6 shadow-sm flex flex-col h-full"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {/* Quote mark */}
                <span
                  className="font-display text-5xl leading-none mb-3 block"
                  aria-hidden="true"
                  style={{ color: "var(--primary)", opacity: 0.3 }}
                >
                  &ldquo;
                </span>

                <p
                  className="font-body italic flex-1 mb-4"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                    lineHeight: 1.65,
                  }}
                >
                  {testimonial.quote}
                </p>

                <div className="flex flex-col gap-2 mt-auto">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                      {testimonial.author}
                    </p>
                    <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                      {testimonial.location}
                    </p>
                  </div>
                  <span
                    className="inline-block self-start font-mono text-xs uppercase tracking-wide px-3 py-1 rounded-full"
                    style={{
                      background: "var(--primary-muted)",
                      color: "var(--primary)",
                    }}
                  >
                    {testimonial.service.replace(/-/g, " ")}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* See all link */}
        <FadeUp className="text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center font-body font-semibold text-base transition-colors hover:underline"
            style={{ color: "var(--primary)" }}
          >
            See All 32 Testimonials &rarr;
          </Link>
        </FadeUp>

      </div>
    </section>
  );
}
