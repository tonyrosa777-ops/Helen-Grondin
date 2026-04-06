import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "NH Health Sharing Blog — Resources for Granite Staters",
  description:
    "Articles on health sharing in New Hampshire — costs, coverage, comparisons, and honest reviews. Written by an enrolled Impact Health Sharing member.",
  openGraph: {
    title: "NH Health Sharing Blog — Resources for Granite Staters",
    description:
      "Articles on health sharing in New Hampshire — costs, coverage, comparisons, and honest reviews. Written by an enrolled Impact Health Sharing member.",
  },
};

export default function BlogPage() {
  const allArticles = getAllArticles();
  const [featured, ...rest] = allArticles;

  return (
    <main>
      {/* Hero */}
      <section
        style={{ background: "var(--bg-hero)" }}
        className="section-base"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="eyebrow mb-4" style={{ color: "var(--accent)" }}>
            Resources for Granite Staters
          </p>
          <h1
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              color: "var(--text-on-dark)",
              lineHeight: 1.15,
            }}
          >
            NH Health Sharing Resources
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-on-dark-muted)", lineHeight: 1.7 }}
          >
            Honest, NH-specific articles on health sharing — written by an
            enrolled Impact member who helps New Hampshire families cut their
            healthcare costs. No affiliates. No hidden motives. Real
            information.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section style={{ background: "var(--bg-base)" }} className="section-base">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="eyebrow mb-6">Featured Article</p>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(201, 123, 46, 0.12)",
                      color: "var(--accent)",
                      fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {featured.category}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    &middot; {featured.readTime}
                  </span>
                </div>
                <h2
                  className="font-display font-bold mb-4"
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    color: "var(--text-primary)",
                  }}
                >
                  {featured.title}
                </h2>
                <p
                  className="text-base mb-6"
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    maxWidth: "65ch",
                  }}
                >
                  {featured.excerpt}
                </p>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="inline-flex items-center gap-2 font-semibold transition-colors"
                  style={{ color: "var(--primary)" }}
                >
                  Read Article
                  <span aria-hidden="true">&#8594;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section style={{ background: "var(--bg-elevated)" }} className="section-base">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-8">All Articles</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <article
                key={article.slug}
                className="rounded-xl flex flex-col"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div className="p-6 flex flex-col flex-1">
                  {/* Category badge */}
                  <div className="mb-3">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(201, 123, 46, 0.12)",
                        color: "var(--accent)",
                        fontFamily:
                          "var(--font-mono, 'Space Mono', monospace)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display font-semibold mb-3"
                    style={{
                      fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)",
                      color: "var(--text-primary)",
                      lineHeight: 1.3,
                    }}
                  >
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    className="text-sm mb-4 flex-1"
                    style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
                  >
                    {article.excerpt}
                  </p>

                  {/* Meta + CTA */}
                  <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}{" "}
                      &middot; {article.readTime}
                    </span>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="text-sm font-semibold transition-colors"
                      style={{ color: "var(--primary)" }}
                    >
                      Read &#8594;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bg-hero)" }} className="section-base">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="eyebrow mb-4" style={{ color: "var(--accent)" }}>
            Questions About What You Read?
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
              color: "var(--text-on-dark)",
            }}
          >
            Talk It Through With Helen
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "var(--text-on-dark-muted)", lineHeight: 1.7 }}
          >
            Every situation is different. Book a free 30-minute consultation
            and get answers that are specific to your household, not generic
            blog advice.
          </p>
          <Link
            href="/booking"
            className="inline-block font-semibold rounded-xl px-8 py-4 text-base transition-colors"
            style={{
              background: "var(--accent)",
              color: "#fff",
            }}
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
