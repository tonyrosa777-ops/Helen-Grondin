"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const highlights = [
  { emoji: "📊", text: "Side-by-side cost comparison for NH families" },
  { emoji: "🏥", text: "What health sharing actually covers (and what it doesn't)" },
  { emoji: "🔍", text: "How bill repricing cuts your out-of-pocket by 60–80%" },
  { emoji: "🚀", text: "How to switch in 4 steps — coverage starts next month" },
];

export default function FreeGuideTeaser() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--bg-hero)" }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(77, 122, 94, 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── LEFT: Copy ── */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <ScrollReveal delay={0}>
              <p className="eyebrow">FREE DOWNLOAD · NH FAMILIES</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                className="font-display font-bold leading-tight"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "var(--text-on-dark)",
                }}
              >
                The NH Health Insurance vs. Health Sharing Cost Guide
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <p
                className="font-body text-lg leading-relaxed"
                style={{ color: "var(--text-on-dark-muted)" }}
              >
                Six chapters. Plain English. Everything you need to decide if health sharing
                is right for your family — before your next renewal hits.
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-3">
              {highlights.map((item, i) => (
                <ScrollReveal key={item.text} delay={0.24 + i * 0.07}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl shrink-0 mt-0.5">{item.emoji}</span>
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: "var(--text-on-dark-muted)" }}
                    >
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.55}>
              <Link
                href="/free-guide"
                className="btn-accent inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-body font-semibold text-white text-base w-fit mt-2"
              >
                Get the Free Guide →
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.62}>
              <p
                className="font-body text-xs italic"
                style={{ color: "rgba(245,245,240,0.38)" }}
              >
                No spam. No sales pressure. Opens instantly — no PDF download required.
              </p>
            </ScrollReveal>
          </div>

          {/* ── RIGHT: Guide cover mock ── */}
          <ScrollReveal delay={0.15} className="w-full lg:w-1/2 flex justify-center">
            <div
              className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(139, 191, 160, 0.25)",
              }}
            >
              {/* Cover header band */}
              <div
                className="px-8 py-6"
                style={{ background: "var(--primary)" }}
              >
                <p
                  className="font-mono text-xs uppercase tracking-widest mb-2"
                  style={{ color: "rgba(245,245,240,0.7)" }}
                >
                  2024 Cost Comparison Guide
                </p>
                <h3
                  className="font-display font-bold leading-tight"
                  style={{ fontSize: "1.35rem", color: "#fff" }}
                >
                  NH Health Insurance<br />vs. Health Sharing
                </h3>
              </div>

              {/* Chapter list */}
              <div className="px-8 py-6 flex flex-col gap-3">
                {[
                  "The Real Cost Comparison",
                  "What Health Sharing Actually Covers",
                  "How Bill Repricing Works",
                  "What Insurance Does That Sharing Doesn't",
                  "Who Qualifies for Impact Health Sharing",
                  "How to Switch in 4 Steps",
                ].map((ch, i) => (
                  <div key={ch} className="flex items-center gap-3">
                    <span
                      className="font-mono text-xs shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-bold"
                      style={{
                        background: "var(--primary-muted)",
                        color: "var(--primary)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <p
                      className="font-body text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {ch}
                    </p>
                  </div>
                ))}
              </div>

              {/* Cover footer */}
              <div
                className="px-8 py-4 flex items-center gap-3"
                style={{
                  background: "var(--bg-elevated)",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <span className="text-2xl">👩‍💼</span>
                <div>
                  <p
                    className="font-body text-xs font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Helen Grondin
                  </p>
                  <p
                    className="font-body text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Pare Grondin Services · Manchester, NH
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
