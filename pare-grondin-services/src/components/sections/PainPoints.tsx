"use client";
import { motion } from "framer-motion";
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer";
import { painPoints } from "@/data/site";

/*
 * PainPoints — "Does This Sound Familiar?" section
 * bg-elevated (alternating with base)
 * Source: design-system.md Section 5 (card styles) + Section 7 (speak to the pain first)
 */

export default function PainPoints() {
  return (
    <section
      className="section-base"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Does This Sound Familiar?</p>
          <h2
            className="font-display font-semibold"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
            }}
          >
            Your health coverage shouldn&apos;t feel like a punishment
          </h2>
        </div>

        {/* 4-card grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          staggerDelay={0.12}
        >
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="rounded-xl p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              {/* Emoji */}
              <span className="text-4xl block mb-4" role="img" aria-hidden="true">
                {point.emoji}
              </span>

              {/* Headline */}
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {point.headline}
              </h3>

              {/* Body */}
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {point.body}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
