"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { siteConfig } from "@/data/site";

/*
 * BookingPreview — "Ready to See Your Numbers?" section
 * bg-base (section 9, alternating)
 * 2-col layout: text+bullets left, decorative card right
 * Drives to /booking — does NOT render Calendly inline (that lives on /booking)
 * Source: design-system.md Section 5 (button styles: primary amber, secondary sage outline)
 *         design-system.md Section 7 (Helen's voice, plain language)
 * [DEMO COPY] — bullet points written in Helen's voice
 */

const EASE = [0, 0, 0.2, 1] as const;

const callBullets = [
  "We review your current plan and monthly cost",
  "I show you what Impact would cost for your household",
  "You leave with real numbers, no pressure, no obligation",
];

export default function BookingPreview() {
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
              Ready to See Your Numbers?
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
              Book a Free 30-Minute Consultation
            </motion.h2>

            {/* Bullet points — [DEMO COPY] */}
            <motion.ul
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
            >
              {callBullets.map((bullet, i) => (
                <li
                  key={i}
                  className="font-body text-base flex items-start gap-3"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {/* [DEMO COPY — pending client review] */}
                  <span
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "var(--primary)" }}
                    aria-hidden="true"
                  >
                    &#x2022;
                  </span>
                  {bullet}
                </li>
              ))}
            </motion.ul>

            {/* Primary CTA — amber */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5, ease: EASE }}
            >
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-body font-semibold text-white transition-all hover:shadow-lg"
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
                Book Your Free Call
              </Link>

              {/* Secondary CTA — sage outline */}
              <Link
                href={siteConfig.tuesdayZoomUrl || "#"}
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
                Join Tuesday&apos;s Free Info Session &rarr;
              </Link>
            </motion.div>

          </div>

          {/* ── Right: Decorative amber card ── */}
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
          >
            <div
              className="w-full max-w-xs rounded-2xl p-10 flex flex-col items-center text-center gap-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(201,123,46,0.14) 0%, rgba(201,123,46,0.06) 100%)",
                border: "1px solid rgba(201, 123, 46, 0.25)",
              }}
            >
              {/* Calendar emoji */}
              <span className="text-4xl" role="img" aria-label="Calendar">
                &#x1F4C5;
              </span>

              {/* 30 min */}
              <p
                className="font-display font-bold"
                style={{
                  color: "var(--accent)",
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  lineHeight: 1.1,
                }}
              >
                30 min
              </p>

              {/* Free Consultation */}
              <p
                className="font-display font-semibold text-xl"
                style={{ color: "var(--text-primary)" }}
              >
                Free Consultation
              </p>

              {/* Reassurance */}
              <p
                className="font-body text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                No pressure. No obligation.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
