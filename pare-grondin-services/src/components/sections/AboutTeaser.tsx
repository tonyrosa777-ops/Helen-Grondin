"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

/*
 * AboutTeaser — "Meet Your Advocate" section
 * bg-base (section 3, alternating)
 * 2-col layout: text left, portrait placeholder right
 * Source: design-system.md Section 5 (button styles, secondary CTA)
 *         Section 6 (photo placeholder guidance)
 *         Section 7 (Principle 1 — speak to the pain, Helen's personal voice)
 */

const EASE = [0, 0, 0.2, 1] as const;

export default function AboutTeaser() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      className="section-base"
      style={{ background: "var(--bg-base)" }}
    >
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">

          {/* ── Left: Text panel ── */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">

            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0, duration: 0.6, ease: EASE }}
            >
              Meet Your Advocate
            </motion.p>

            <motion.h2
              className="font-display font-semibold"
              style={{
                color: "var(--text-primary)",
                fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
            >
              {/* [DEMO COPY] */}
              I was paying $1,200 a month for insurance I was afraid to use.
            </motion.h2>

            {/* Paragraph 1 — [DEMO COPY] */}
            <motion.p
              className="font-body text-base leading-relaxed prose-content"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
            >
              {/* [DEMO COPY — pending client review] */}
              For years, our family was on an Anthem plan that cost us $1,200 every
              month. Two healthy kids, a husband who exercised more than anyone I knew,
              and me, and we avoided the doctor because we could never afford to hit the
              deductible. We were paying for peace of mind we never felt. In 2022, a
              friend mentioned Impact Health Sharing. I told her it sounded too good to
              be true.
            </motion.p>

            {/* Paragraph 2 — [DEMO COPY] */}
            <motion.p
              className="font-body text-base leading-relaxed prose-content"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6, ease: EASE }}
            >
              {/* [DEMO COPY — pending client review] */}
              Six months later, we were paying $628 a month for our whole family. I was
              so relieved that I could not stop telling people about it. A neighbor. My
              sister. A former coworker on COBRA. Every single one of them saved money.
              I became a licensed advocate because I realized there are thousands of NH
              families sitting in the same place I was sitting, and nobody is telling them
              there is a real alternative. That is what I do now.
            </motion.p>

            {/* CTA — ghost/secondary style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
            >
              <Link
                href="/about"
                className="inline-flex items-center font-body font-semibold text-base transition-all hover:underline"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                }}
              >
                Helen&apos;s Full Story &rarr;
              </Link>
            </motion.div>

          </div>

          {/* ── Right: Portrait placeholder ── */}
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
          >
            <div
              className="w-full max-w-xs aspect-[3/4] rounded-2xl flex flex-col items-center justify-center gap-3"
              style={{
                background:
                  "linear-gradient(135deg, rgba(201,123,46,0.12) 0%, rgba(77,122,94,0.18) 100%)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <span
                className="font-display font-bold text-2xl text-center px-4"
                style={{ color: "var(--text-primary)" }}
              >
                Helen Grondin
              </span>
              <span
                className="font-mono text-xs uppercase tracking-widest text-center px-4"
                style={{ color: "var(--text-muted)" }}
              >
                Photo Coming Soon
              </span>
              <span
                className="font-body text-sm text-center px-8 mt-1"
                style={{ color: "var(--text-muted)" }}
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
