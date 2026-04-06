"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

/*
 * FinalCTA — closing dark section (bg-hero) with two CTAs
 * Emphasis close: dark sage background, amber primary, ghost secondary
 * Compliance line required at bottom per design-system.md Section 10 item 4
 * Source: design-system.md Section 2 (--bg-hero, --text-on-dark, --text-on-dark-muted)
 *         design-system.md Section 5 (button styles)
 */

const EASE = [0, 0, 0.2, 1] as const;

export default function FinalCTA() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      className="section-base"
      style={{ background: "var(--bg-hero)" }}
    >
      <div ref={ref} className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">

        {/* H2 */}
        <motion.h2
          className="font-display font-semibold"
          style={{
            color: "var(--text-on-dark)",
            fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0, duration: 0.6, ease: EASE }}
        >
          Ready to stop overpaying for healthcare?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="font-body text-lg max-w-[52ch] mx-auto leading-relaxed"
          style={{ color: "var(--text-on-dark-muted)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.12, duration: 0.6, ease: EASE }}
        >
          Book a free 30-minute consultation. See your exact numbers. No pressure.
        </motion.p>

        {/* Two buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.24, duration: 0.5, ease: EASE }}
        >
          {/* Primary — amber */}
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-white text-lg transition-all hover:shadow-lg w-full sm:w-auto"
            style={{ background: "var(--accent)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--accent-dark)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--accent)";
            }}
          >
            Book a Free Consultation
          </Link>

          {/* Secondary — ghost, white border */}
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-white text-lg transition-all w-full sm:w-auto"
            style={{
              border: "1.5px solid rgba(255, 255, 255, 0.30)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(255, 255, 255, 0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "transparent";
            }}
          >
            Take the 60-Second Quiz First
          </Link>
        </motion.div>

        {/* Compliance line */}
        <motion.p
          className="font-body text-xs italic"
          style={{ color: "rgba(245, 245, 240, 0.40)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.36, duration: 0.5, ease: EASE }}
        >
          Health sharing is not insurance. Members are not guaranteed benefits.
        </motion.p>

      </div>
    </section>
  );
}
