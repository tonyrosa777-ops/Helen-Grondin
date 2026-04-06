"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import HeroParticles from "@/components/HeroParticles";
import CommunityConnectionSVG from "@/components/CommunityConnectionSVG";
import { hero, siteConfig } from "@/data/site";

/*
 * Hero — 3-layer animated hero for Pare Grondin Services.
 *
 * Layer 1: HeroParticles (canvas, z-0) — slow amber/sage fireflies,
 *          rising embers, and glimmer stars. Organic drift, quiet energy.
 * Layer 2: CommunityConnectionSVG (SVG, z-5) — abstract community
 *          connection circles and bezier paths animating in sequence.
 * Layer 3: Framer Motion stagger text (z-10) — eyebrow → H1 →
 *          subheadline → price anchor → CTAs → trust line.
 *
 * Layout: Split — text left/top, photo placeholder right/bottom.
 * Mobile: text first (order-1), photo second (order-2).
 *
 * Source: design-system.md Section 8 (animation selection) + Section 4
 *         (hero padding, items-start rule) + Section 5 (button styles).
 * Build-log: Error #25 (items-start not items-center) + Error #9
 *            ("use client" first token) + Error #24 (triggerOnce).
 */

/* ------------------------------------------------------------------ */
/*  Animation variants — Layer 3 stagger text                          */
/*  ease: cubic bezier per build-log error #8b (Framer Motion v12)     */
/* ------------------------------------------------------------------ */

const EASE = [0, 0, 0.2, 1] as const;

function fadeUp(delay: number, duration = 0.6) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration, ease: EASE },
  };
}

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export default function Hero() {
  // triggerOnce: true per build-log error #24 (react-intersection-observer)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      className="relative min-h-[100svh] flex items-start overflow-hidden"
      style={{ background: "var(--bg-hero)" }}
    >
      {/* ── Layer 1: Canvas particles (z-0) ── */}
      <HeroParticles />

      {/* ── Layer 2: Community connection SVG (z-5) ── */}
      <CommunityConnectionSVG />

      {/* ── Layer 3: Content (z-10) ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-40 md:pb-32">
        <div
          ref={ref}
          className="flex flex-col md:flex-row items-start gap-12 md:gap-16"
        >

          {/* ── Text panel — order-1 on mobile, left on desktop ── */}
          <div className="w-full md:w-1/2 order-1 flex flex-col gap-6">

            {/* Eyebrow — Space Mono, uppercase, amber */}
            <motion.p
              className="eyebrow"
              {...fadeUp(0)}
              animate={inView ? fadeUp(0).animate : {}}
            >
              {hero.eyebrow}
            </motion.p>

            {/* H1 — Fraunces display, weight 700 */}
            <motion.h1
              className="font-display font-bold text-[var(--text-on-dark)] leading-tight"
              style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
            >
              {hero.headline}
            </motion.h1>

            {/* Subheadline — Plus Jakarta Sans */}
            <motion.p
              className="font-body text-[var(--text-on-dark-muted)] text-lg leading-relaxed max-w-[52ch]"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.30, duration: 0.6, ease: EASE }}
            >
              {hero.subheadline}
            </motion.p>

            {/* Price anchor — amber badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.5, ease: EASE }}
            >
              <span
                className="inline-block font-mono text-sm font-bold tracking-wide uppercase px-4 py-2 rounded-lg"
                style={{
                  background: "rgba(201, 123, 46, 0.18)",
                  color: "var(--accent)",
                  border: "1px solid rgba(201, 123, 46, 0.35)",
                }}
              >
                {hero.priceAnchor}
              </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.5, ease: EASE }}
            >
              {/* Primary CTA — amber */}
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-body font-semibold text-white transition-all hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  background: "var(--accent)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "var(--accent-dark)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "var(--accent)";
                }}
              >
                {hero.primaryCta}
              </Link>

              {/* Secondary CTA — ghost/outline with sage border */}
              {siteConfig.tuesdayZoomUrl || true ? (
                <Link
                  href={siteConfig.tuesdayZoomUrl || "/booking"}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-body font-semibold transition-all"
                  style={{
                    border: "2px solid var(--primary)",
                    color: "var(--primary)",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "var(--primary-muted)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "transparent";
                  }}
                >
                  {hero.secondaryCta}
                </Link>
              ) : null}
            </motion.div>

            {/* Compliance disclosure — required above the fold */}
            <motion.p
              className="text-xs font-body italic"
              style={{ color: "rgba(245, 245, 240, 0.45)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.50, duration: 0.5, ease: EASE }}
            >
              Health sharing is not insurance. Members are not guaranteed benefits.
            </motion.p>

            {/* Trust line — Helen's personal voice */}
            <motion.p
              className="text-sm font-body italic"
              style={{ color: "var(--text-on-dark-muted)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.5, ease: EASE }}
            >
              {hero.trustLine}
            </motion.p>

          </div>

          {/* ── Photo placeholder panel — order-2 on mobile, right on desktop ── */}
          <motion.div
            className="w-full md:w-1/2 order-2 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.8, ease: EASE }}
          >
            <div
              className="w-full max-w-sm aspect-[2/3] rounded-2xl flex flex-col items-center justify-center gap-3"
              style={{
                background: "linear-gradient(135deg, rgba(77,122,94,0.20) 0%, rgba(201,123,46,0.10) 100%)",
                border: "1px solid rgba(77, 122, 94, 0.25)",
              }}
            >
              <span
                className="font-display font-bold text-2xl text-center px-4"
                style={{ color: "var(--text-on-dark)" }}
              >
                Helen Grondin
              </span>
              <span
                className="font-mono text-xs uppercase tracking-widest text-center px-4"
                style={{ color: "var(--text-on-dark-muted)" }}
              >
                Photo Coming Soon
              </span>
              <span
                className="font-body text-sm text-center px-8 mt-1"
                style={{ color: "rgba(245, 245, 240, 0.45)" }}
              >
                NH Health Sharing Advocate
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
