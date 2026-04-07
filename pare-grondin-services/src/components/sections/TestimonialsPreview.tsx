"use client";
import Link from "next/link";
import { FadeUp } from "@/components/animations/FadeUp";
import ScrollReveal from "@/components/ScrollReveal";
import { testimonials } from "@/data/site";

/*
 * TestimonialsPreview — "What Members Say" section
 * bg-base (section 6, alternating)
 * Shows the 3 testimonials where featured: true — per-card ScrollReveal stagger
 * Source: design-system.md Section 5 (card styles)
 *         design-system.md Section 7 — Principle 5: short, sounds like a person
 * ZERO em dashes per CLAUDE.md Content Standards
 */

const featured = testimonials.filter((t) => t.featured);

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

        {/* 3-col testimonial grid — per-card reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((testimonial, i) => (
            <ScrollReveal key={testimonial.id} delay={i * 0.12}>
              <div
                className="card-hover rounded-xl p-6 shadow-sm flex flex-col h-full"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {/* Large quote mark */}
                <span
                  className="font-display text-5xl leading-none mb-3 block"
                  aria-hidden="true"
                  style={{ color: "var(--primary)", opacity: 0.3 }}
                >
                  &ldquo;
                </span>

                {/* Quote text */}
                <p
                  className="font-body text-sm leading-relaxed italic flex-1 mb-4"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                  }}
                >
                  {testimonial.quote}
                </p>

                {/* Author + service badge */}
                <div className="flex flex-col gap-2 mt-auto">
                  <div>
                    <p
                      className="font-mono text-xs uppercase tracking-widest"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {testimonial.author}
                    </p>
                    <p
                      className="font-mono text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
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
