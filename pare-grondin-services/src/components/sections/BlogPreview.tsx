"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer";
import { FadeUp } from "@/components/animations/FadeUp";
import { blogPreviews } from "@/data/site";

/*
 * BlogPreview — "NH Health Sharing Insights" section
 * bg-elevated (section 8, alternating)
 * 3-col blog card grid
 * Source: design-system.md Section 5 (card styles)
 *         site.ts blogPreviews[] for all content
 */

export default function BlogPreview() {
  return (
    <section
      className="section-base"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <FadeUp className="text-center mb-12">
          <p className="eyebrow mb-4">NH Health Sharing Insights</p>
          <h2
            className="font-display font-semibold"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
            }}
          >
            Resources for Granite Staters
          </h2>
        </FadeUp>

        {/* 3-col card grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          staggerDelay={0.12}
        >
          {blogPreviews.map((post, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="rounded-xl p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 flex flex-col"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              {/* Amber accent bar — image placeholder */}
              <div
                className="h-1 w-12 rounded-full mb-5"
                style={{ background: "var(--accent)" }}
                aria-hidden="true"
              />

              {/* Title */}
              <h3
                className="font-display font-semibold text-base leading-snug mb-3 flex-1"
                style={{ color: "var(--text-primary)" }}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p
                className="font-body text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {post.excerpt}
              </p>

              {/* Meta: date + read time */}
              <p
                className="font-mono text-xs uppercase tracking-widest mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                {post.date} &middot; {post.readTime}
              </p>

              {/* Ghost link */}
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center font-body font-semibold text-sm transition-all hover:underline mt-auto"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                }}
              >
                Read Article &rarr;
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* View all link */}
        <FadeUp className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center font-body font-semibold text-base transition-all hover:underline"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
            }}
          >
            View All Articles &rarr;
          </Link>
        </FadeUp>

      </div>
    </section>
  );
}
