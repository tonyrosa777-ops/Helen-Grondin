"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { quizConfig } from "@/data/site";

/*
 * QuizCTABanner — centered full-width banner on sage green background
 * Drives to /quiz — amber CTA stands out on sage background
 * Source: design-system.md Section 2 (--primary sage for bg, --accent amber for CTA)
 *         site.ts quizConfig for all copy
 */

const EASE = [0, 0, 0.2, 1] as const;

export default function QuizCTABanner() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      className="section-base"
      style={{ background: "var(--primary)" }}
    >
      <div ref={ref} className="max-w-6xl mx-auto px-6 text-center">

        {/* H2 — white, display font */}
        <motion.h2
          className="font-display font-semibold mb-4"
          style={{
            color: "#FFFFFF",
            fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0, duration: 0.6, ease: EASE }}
        >
          {quizConfig.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="font-body text-lg mb-8 mx-auto max-w-[52ch]"
          style={{ color: "rgba(255, 255, 255, 0.75)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.12, duration: 0.6, ease: EASE }}
        >
          {quizConfig.subtitle}
        </motion.p>

        {/* Amber CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.24, duration: 0.5, ease: EASE }}
        >
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-white text-lg transition-all hover:shadow-lg"
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
            Take the Quiz
          </Link>
        </motion.div>

        {/* Small reassurance line */}
        <motion.p
          className="font-mono text-xs uppercase tracking-widest mt-5"
          style={{ color: "rgba(255, 255, 255, 0.55)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.36, duration: 0.5, ease: EASE }}
        >
          Takes 60 seconds. No email required to start.
        </motion.p>

      </div>
    </section>
  );
}
