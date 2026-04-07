"use client";
import Link from "next/link";
import { FadeUp } from "@/components/animations/FadeUp";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/data/site";

/*
 * ServicesPreview — "What I Help You With" section
 * bg-elevated — visually separated from AboutTeaser (bg-base) by amber top divider.
 * Cards get a 3px sage left border for depth + texture.
 * Source: design-system.md Section 5 (card styles, ghost link style)
 *         site.ts services[] for all content
 */

export default function ServicesPreview() {
  return (
    <section
      className="section-base relative"
      style={{ background: "var(--bg-elevated)" }}
    >
      {/* Amber top divider — clear visual break from AboutTeaser */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, var(--accent) 30%, var(--accent) 70%, transparent 100%)",
          opacity: 0.55,
        }}
      />

      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <FadeUp className="text-center mb-12">
          <p className="eyebrow mb-4">What I Help You With</p>
          <h2
            className="font-display font-semibold"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
            }}
          >
            Three ways to stop overpaying for healthcare
          </h2>
        </FadeUp>

        {/* 3-col card grid — per-card reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div
                className="card-hover rounded-xl p-6 shadow-sm flex flex-col h-full"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderLeft: "3px solid var(--primary)",
                }}
              >
                <span className="text-3xl block mb-4" role="img" aria-hidden="true">
                  {service.emoji}
                </span>
                <h3
                  className="font-display font-semibold text-lg mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-body text-sm mb-3"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {service.tagline}
                </p>
                <p
                  className="font-mono text-sm font-bold mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  {service.price}
                </p>
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {service.features.slice(0, 3).map((feature, fi) => (
                    <li
                      key={fi}
                      className="font-body text-sm flex items-start gap-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span aria-hidden="true" className="mt-0.5 flex-shrink-0">&#x2705;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center font-body font-semibold text-sm transition-colors mt-auto hover:underline"
                  style={{ color: "var(--primary)" }}
                >
                  Learn More &rarr;
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
