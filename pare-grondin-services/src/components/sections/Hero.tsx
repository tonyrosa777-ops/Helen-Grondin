"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import HeroParticles from "@/components/HeroParticles";
import HealthShieldCanvas from "@/components/HealthShieldCanvas";
import { hero } from "@/data/site";

/*
 * Hero — 3-layer animated hero. Split layout: text left, canvas right.
 *
 * Layer 1: HeroParticles — ambient fireflies across full hero background (z-0)
 * Layer 2: HealthShieldCanvas — health cross forging animation, right panel (z-5)
 * Layer 3: Framer Motion stagger text — left panel (z-10)
 *
 * H1 = siteConfig.tagline ("Where Healthcare Finally Makes Sense")
 * hero.headline moved to eyebrow-level support copy, not the H1.
 *
 * Source: design-system.md §8 + build-log errors #8b, #9, #24, #25.
 */

const EASE = [0, 0, 0.2, 1] as const;

function fadeUp(delay: number, duration = 0.58) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration, ease: EASE },
  };
}

export default function Hero() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{ background: "var(--bg-hero)" }}
    >
      {/* ── Layer 1: Ambient particles — full background ── */}
      <HeroParticles />

      {/* ── Layer 2 + 3: Split content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-20 md:pt-32 md:pb-28">
        <div
          ref={ref}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0"
        >

          {/* ── LEFT: Text panel ── */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:pr-12">

            {/* Eyebrow */}
            <motion.p
              className="eyebrow"
              {...fadeUp(0)}
              animate={inView ? fadeUp(0).animate : {}}
            >
              {hero.eyebrow}
            </motion.p>

            {/* H1 — Tagline: "Where Healthcare Finally Makes Sense" */}
            <motion.h1
              className="font-display font-bold leading-tight"
              style={{
                fontSize: "clamp(2.6rem, 5vw, 4.4rem)",
                color: "var(--text-on-dark)",
              }}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12, duration: 0.62, ease: EASE }}
            >
              Where Healthcare{" "}
              <span className="hero-shimmer-sage">Finally Makes Sense</span>
            </motion.h1>

            {/* Amber rule — appears after headline */}
            <motion.div
              className="h-px w-20"
              style={{ background: "var(--accent)" }}
              initial={{ scaleX: 0, originX: "0%" }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.30, duration: 0.50, ease: EASE }}
            />

            {/* Subheadline */}
            <motion.p
              className="font-body text-lg leading-relaxed"
              style={{ color: "var(--text-on-dark-muted)", maxWidth: "48ch" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.36, duration: 0.58, ease: EASE }}
            >
              {hero.subheadline}
            </motion.p>

            {/* Price anchor */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.44, duration: 0.50, ease: EASE }}
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
              className="flex flex-col sm:flex-row gap-4 pt-1"
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.52, duration: 0.50, ease: EASE }}
            >
              <Link
                href="/booking"
                className="btn-accent inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-body font-semibold text-white text-base"
              >
                {hero.primaryCta}
              </Link>
              <Link
                href="/quiz"
                className="btn-outline-primary-dark inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-body font-semibold text-base"
              >
                {hero.secondaryCta}
              </Link>
            </motion.div>

            {/* Compliance */}
            <motion.p
              className="text-xs font-body italic"
              style={{ color: "rgba(245, 245, 240, 0.38)" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.62, duration: 0.50, ease: EASE }}
            >
              Health sharing is not insurance. Members are not guaranteed benefits.
            </motion.p>

          </div>

          {/* ── RIGHT: HealthShieldCanvas ── */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            style={{ height: "clamp(420px, 58vw, 680px)" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 1.0, ease: EASE }}
          >
            <HealthShieldCanvas />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
