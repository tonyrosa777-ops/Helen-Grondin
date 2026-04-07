"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

/*
 * AboutTeaser — "Meet Your Advocate" section
 * bg-base (warm cream) — relief after the dark pain-points block.
 * Left: text + story. Right: designed portrait placeholder card.
 * Source: design-system.md Section 5, 6, 7
 */

const EASE = [0, 0, 0.2, 1] as const;

export default function AboutTeaser() {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });

  return (
    <section
      className="section-base relative overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Decorative large quotation mark — behind text */}
      <div
        className="absolute pointer-events-none select-none"
        aria-hidden="true"
        style={{
          top: "-1rem",
          left: "2rem",
          fontFamily: "var(--font-display, 'Fraunces', serif)",
          fontSize: "clamp(12rem, 22vw, 22rem)",
          lineHeight: 1,
          color: "rgba(77,122,94,0.055)",
          userSelect: "none",
        }}
      >
        &ldquo;
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
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

            <motion.p
              className="font-body text-base leading-relaxed"
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

            <motion.p
              className="font-body text-base leading-relaxed"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
            >
              <Link
                href="/about"
                className="inline-flex items-center font-body font-semibold text-base transition-colors hover:underline"
                style={{ color: "var(--primary)" }}
              >
                Helen&apos;s Full Story &rarr;
              </Link>
            </motion.div>

          </div>

          {/* ── Right: Designed portrait card ── */}
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.22, duration: 0.8, ease: EASE }}
          >
            <div
              className="w-full max-w-sm rounded-3xl overflow-hidden"
              style={{
                border: "1px solid var(--border-subtle)",
                boxShadow: "0 12px 48px rgba(26,43,30,0.09), 0 2px 8px rgba(26,43,30,0.04)",
              }}
            >
              {/* Portrait area — gradient placeholder */}
              <div
                className="w-full flex flex-col items-center justify-center gap-4 py-14 px-8"
                style={{
                  background:
                    "linear-gradient(155deg, #1A2B1E 0%, rgba(77,122,94,0.85) 55%, rgba(201,123,46,0.30) 100%)",
                  minHeight: "280px",
                }}
              >
                {/* NH leaf emblem */}
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: 80,
                    height: 80,
                    background: "rgba(245,245,240,0.12)",
                    border: "1.5px solid rgba(245,245,240,0.22)",
                    fontSize: "2.5rem",
                  }}
                >
                  🌿
                </div>
                <p
                  className="font-display font-bold text-xl text-center"
                  style={{ color: "var(--text-on-dark)" }}
                >
                  Helen Grondin
                </p>
                <p
                  className="font-mono text-xs uppercase tracking-widest text-center"
                  style={{ color: "var(--text-on-dark-muted)" }}
                >
                  Photo Coming Soon
                </p>
              </div>

              {/* Footer card strip */}
              <div
                className="px-7 py-5 flex items-center justify-between"
                style={{ background: "var(--bg-card)" }}
              >
                <div>
                  <p
                    className="font-body font-semibold text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    NH Health Sharing Advocate
                  </p>
                  <p
                    className="font-mono text-xs mt-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Impact Health Sharing · Manchester, NH
                  </p>
                </div>
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0"
                  style={{
                    width: 36,
                    height: 36,
                    background: "var(--primary-muted)",
                    color: "var(--primary)",
                    fontSize: "1rem",
                  }}
                >
                  ✓
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
