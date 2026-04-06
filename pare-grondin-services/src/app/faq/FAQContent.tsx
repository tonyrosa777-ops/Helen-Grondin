"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { faqs } from "@/data/site";

/*
 * FAQContent - client component.
 * Accordion: per-question open/close via useState.
 * AnimatePresence + motion.div for height animation.
 * Source: design-system.md Sections 2, 3, 5 + site.ts faqs data.
 */

const EASE = [0, 0, 0.2, 1] as const;

export default function FAQContent() {
  // Track which question is open: key = "categoryIndex-questionIndex"
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="py-20 md:py-28"
        style={{ background: "var(--bg-hero)" }}
      >
        <div className="max-w-6xl mx-auto px-6" ref={heroRef}>
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0, duration: 0.5, ease: EASE }}
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.p>
          <motion.h1
            className="font-display font-bold leading-tight mb-6"
            style={{
              fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
              color: "var(--text-on-dark)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="font-body text-lg max-w-[54ch]"
            style={{ color: "var(--text-on-dark-muted)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.30, duration: 0.6, ease: EASE }}
          >
            I believe the only way to earn your trust is to answer every question
            honestly, including the hard ones. This includes what health sharing
            does not cover and how it compares to the organizations that have
            caused real harm to members.
          </motion.p>
        </div>
      </section>

      {/* ── Accordion sections ── */}
      <section
        className="section-base"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-14">
          {faqs.map((category, catIdx) => (
            <div key={catIdx}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.emoji}</span>
                <p className="eyebrow">{category.category}</p>
              </div>

              <div className="flex flex-col gap-2">
                {category.questions.map((item, qIdx) => {
                  const key = `${catIdx}-${qIdx}`;
                  const isOpen = openKey === key;

                  return (
                    <div
                      key={qIdx}
                      className="rounded-xl overflow-hidden transition-shadow hover:shadow-sm"
                      style={{
                        background: "var(--bg-card)",
                        border: isOpen
                          ? "1px solid rgba(77, 122, 94, 0.30)"
                          : "1px solid var(--border-subtle)",
                      }}
                    >
                      {/* Question row */}
                      <button
                        type="button"
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                        style={{ background: "transparent" }}
                      >
                        <span
                          className="font-display font-semibold text-base md:text-lg leading-snug"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {item.q}
                        </span>
                        <span
                          className="flex-shrink-0 text-lg transition-transform duration-200"
                          style={{
                            color: "var(--primary)",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        >
                          ▼
                        </span>
                      </button>

                      {/* Answer: animated height */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="answer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: EASE }}
                            style={{ overflow: "hidden" }}
                          >
                            <div
                              className="px-6 pb-5 pt-1 font-body leading-relaxed"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── "What If Something Goes Wrong?" standalone section ── */}
      {/* [DEMO COPY — pending client review] */}
      <section
        className="section-base section-elevated"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: "var(--bg-card)",
              borderLeft: "4px solid var(--accent)",
              border: "1px solid var(--border-subtle)",
              borderLeftWidth: "4px",
              borderLeftColor: "var(--accent)",
            }}
          >
            <h2
              className="font-display font-semibold mb-6"
              style={{
                fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
                color: "var(--text-primary)",
              }}
            >
              What if Impact does not share my bill?
            </h2>

            <div className="flex flex-col gap-5">
              <p
                className="font-body leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                I want to answer this directly because it is the most important
                question and the one most health sharing advocates avoid. Health
                sharing is not insurance. Member contributions are shared on a
                voluntary basis, not guaranteed by law. If Impact faced a
                catastrophic financial situation, members could receive less than
                their full eligible bills. That is a real risk and you should
                understand it before you enroll.
              </p>

              <p
                className="font-body leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                That said, here is what the record shows. Impact Health Sharing
                has operated continuously as a 501(c)(3) nonprofit since 1984,
                more than 40 years without a bankruptcy, a regulatory shutdown,
                or a pattern of unpaid bills. One hundred percent of member
                contributions go to sharing eligible medical costs. There are no
                family-owned vendor contracts siphoning funds, no for-profit
                ownership structure, and no history of the kind of financial
                misconduct that brought down Aliera, Sharity, and drew
                investigations into Liberty. The transparency is real and
                verifiable, not a marketing claim.
              </p>

              <p
                className="font-body leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                If you enroll and have an issue with a bill, I am not done when
                you sign up. I know the Impact member services team. I know how
                to submit a bill correctly, how to appeal a sharing decision, and
                how to escalate when something is not moving. Several of the
                families I have worked with have had bills in the thousands of
                dollars processed without a problem. If something goes sideways,
                you have an advocate. That is part of what you are getting when
                you work with me.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Still have questions CTA ── */}
      <section
        className="section-base"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="font-display font-semibold mb-4"
            style={{
              fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
              color: "var(--text-primary)",
            }}
          >
            Still have questions?
          </h2>
          <p
            className="font-body mb-8 mx-auto max-w-[46ch]"
            style={{ color: "var(--text-secondary)" }}
          >
            A 30-minute call will answer everything specific to your situation.
            No sales pressure. If health sharing is not right for you, I will
            tell you that directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-body font-semibold text-white transition-all hover:shadow-lg"
              style={{ background: "var(--accent)" }}
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-body font-semibold transition-all"
              style={{
                border: "2px solid var(--primary)",
                color: "var(--primary)",
                background: "transparent",
              }}
            >
              Send a Question
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
