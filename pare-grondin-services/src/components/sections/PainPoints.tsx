"use client";
import { FadeUp } from "@/components/animations/FadeUp";
import ScrollReveal from "@/components/ScrollReveal";
import { painPoints } from "@/data/site";

/*
 * PainPoints — "Does This Sound Familiar?" section
 * bg-hero (dark) — extends hero's gravity. Pain points land harder on dark.
 * Source: design-system.md Section 5 (card styles) + Section 7 (speak to the pain first)
 */

export default function PainPoints() {
  return (
    <section
      className="section-base relative overflow-hidden"
      style={{ background: "var(--bg-hero)" }}
    >
      {/* Sage radial glow — left anchor */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 12% 55%, rgba(77,122,94,0.20) 0%, transparent 70%)",
        }}
      />
      {/* Amber radial glow — right subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 45% 50% at 88% 40%, rgba(201,123,46,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-12">
          <FadeUp>
            <p className="eyebrow mb-4">Does This Sound Familiar?</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="font-display font-semibold"
              style={{
                color: "var(--text-on-dark)",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              }}
            >
              Your health coverage shouldn&apos;t feel like a punishment
            </h2>
          </FadeUp>
        </div>

        {/* 4-card grid — frosted glass on dark */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {painPoints.map((point, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className="rounded-2xl p-7 h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: "rgba(245,245,240,0.055)",
                  border: "1px solid rgba(245,245,240,0.11)",
                }}
              >
                <span className="text-4xl block mb-4" role="img" aria-hidden="true">
                  {point.emoji}
                </span>
                <h3
                  className="font-display font-semibold text-lg mb-2"
                  style={{ color: "var(--text-on-dark)" }}
                >
                  {point.headline}
                </h3>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: "var(--text-on-dark-muted)" }}
                >
                  {point.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
