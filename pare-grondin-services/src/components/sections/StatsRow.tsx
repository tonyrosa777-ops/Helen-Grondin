"use client";
import { CountUp } from "@/components/animations/CountUp";
import ScrollReveal from "@/components/ScrollReveal";
import { stats } from "@/data/site";

/*
 * StatsRow — dark sage background (bg-hero) for visual rhythm break
 * 4-stat row, per-stat ScrollReveal stagger + CountUp animation
 * Source: design-system.md Section 2 (--bg-hero deep sage) + Section 3 (Space Mono for stat labels)
 *         CountUp.tsx props interface: { end, prefix, suffix, className }
 */

export default function StatsRow() {
  return (
    <section
      className="section-base relative overflow-hidden"
      style={{ background: "var(--bg-hero)" }}
    >
      {/* Radial glow — sage, left-anchored */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 15% 50%, rgba(77, 122, 94, 0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Radial glow — amber, right-anchored */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 85% 50%, rgba(201, 123, 46, 0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center gap-2">
                {/* Emoji */}
                <span className="text-2xl mb-2 block" role="img" aria-hidden="true">
                  {stat.emoji}
                </span>

                {/* Big number — CountUp */}
                <div
                  className="font-display font-bold"
                  style={{
                    color: "var(--accent)",
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    lineHeight: 1.1,
                  }}
                >
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <CountUp end={stat.value} suffix="" duration={2.2} />
                  {stat.suffix && (
                    <span className="text-3xl md:text-4xl">{stat.suffix}</span>
                  )}
                </div>

                {/* Label — Space Mono uppercase */}
                <p
                  className="font-mono text-xs uppercase tracking-widest text-center leading-snug max-w-[140px]"
                  style={{ color: "var(--text-on-dark-muted)" }}
                >
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
