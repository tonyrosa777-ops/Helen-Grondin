"use client";
import { FadeUp } from "@/components/animations/FadeUp";
import ScrollReveal from "@/components/ScrollReveal";
import { painPoints } from "@/data/site";

/*
 * PainPoints — "Does This Sound Familiar?" section
 * bg-elevated (alternating with base)
 * Source: design-system.md Section 5 (card styles) + Section 7 (speak to the pain first)
 */

export default function PainPoints() {
  return (
    <section
      className="section-base"
      style={{ background: "var(--bg-elevated)" }}
    >
      {/* Amber gradient divider from hero */}
      <div
        className="h-px w-full mb-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)",
          opacity: 0.35,
          marginBottom: 0,
          position: "relative",
          top: 0,
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">

        {/* Section header — animated */}
        <div className="text-center mb-12">
          <FadeUp>
            <p className="eyebrow mb-4">Does This Sound Familiar?</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="font-display font-semibold"
              style={{
                color: "var(--text-primary)",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              }}
            >
              Your health coverage shouldn&apos;t feel like a punishment
            </h2>
          </FadeUp>
        </div>

        {/* 4-card grid — per-card scroll reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className="card-hover rounded-xl p-6 shadow-sm h-full"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <span className="text-4xl block mb-4" role="img" aria-hidden="true">
                  {point.emoji}
                </span>
                <h3
                  className="font-display font-semibold text-lg mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {point.headline}
                </h3>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
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
