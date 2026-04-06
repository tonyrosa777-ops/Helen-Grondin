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
 *          rising embers, and glimmer stars.
 * Layer 2: CommunityConnectionSVG (SVG, z-5) — abstract community
 *          connection circles and bezier paths animating in sequence.
 * Layer 3: Framer Motion stagger text (z-10) — centered, full-width.
 *          Eyebrow → H1 (shimmer on tagline) → subheadline → price anchor
 *          → CTAs → trust line.
 *
 * Layout: Full-width centered. No photo in hero — Helen's photo is in
 *         the About section immediately below.
 *
 * Source: design-system.md Section 8 + Section 4.
 * Build-log: Error #25 (items-start) + Error #9 ("use client") + Error #24 (triggerOnce).
 */

const EASE = [0, 0, 0.2, 1] as const;

function fadeUp(delay: number, duration = 0.6) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration, ease: EASE },
  };
}

export default function Hero() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{ background: "var(--bg-hero)" }}
    >
      {/* ── Layer 1: Canvas particles (z-0) ── */}
      <HeroParticles />

      {/* ── Layer 2: Community connection SVG (z-5) ── */}
      <CommunityConnectionSVG />

      {/* ── Layer 3: Content (z-10) — centered ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32 text-center">
        <div ref={ref} className="flex flex-col items-center gap-6">

          {/* Eyebrow */}
          <motion.p
            className="eyebrow"
            {...fadeUp(0)}
            animate={inView ? fadeUp(0).animate : {}}
          >
            {hero.eyebrow}
          </motion.p>

          {/* H1 — main headline */}
          <motion.h1
            className="font-display font-bold text-[var(--text-on-dark)] leading-tight"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
          >
            {hero.headline}
          </motion.h1>

          {/* Tagline — shimmer animation, amber accent */}
          <motion.p
            className="hero-shimmer font-display font-semibold"
            style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.9rem)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.28, duration: 0.6, ease: EASE }}
          >
            {siteConfig.tagline}
          </motion.p>

          {/* Subheadline */}
          <motion.p
            className="font-body text-[var(--text-on-dark-muted)] text-lg leading-relaxed max-w-[52ch] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.38, duration: 0.6, ease: EASE }}
          >
            {hero.subheadline}
          </motion.p>

          {/* Price anchor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.46, duration: 0.5, ease: EASE }}
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
            className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.54, duration: 0.5, ease: EASE }}
          >
            <Link
              href="/booking"
              className="btn-accent inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-body font-semibold text-white text-base"
            >
              {hero.primaryCta}
            </Link>
            <Link
              href="/quiz"
              className="btn-outline-primary-dark inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-body font-semibold text-base"
            >
              {hero.secondaryCta}
            </Link>
          </motion.div>

          {/* Compliance + trust */}
          <motion.p
            className="text-xs font-body italic max-w-[50ch] mx-auto"
            style={{ color: "rgba(245, 245, 240, 0.40)" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.65, duration: 0.5, ease: EASE }}
          >
            Health sharing is not insurance. Members are not guaranteed benefits.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
