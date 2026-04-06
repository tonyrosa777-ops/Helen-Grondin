import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, getAllArticles } from "@/lib/articles";
import { ArticleSchema } from "@/components/JsonLd";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main>
      <ArticleSchema
        title={article.title}
        excerpt={article.excerpt}
        date={article.date}
        slug={article.slug}
        siteUrl={siteConfig.url}
      />
      {/* Back link */}
      <div style={{ background: "var(--bg-base)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: "var(--text-secondary)" }}
          >
            <span aria-hidden="true">&#8592;</span> Back to Blog
          </Link>
        </div>
      </div>

      {/* Article header */}
      <header style={{ background: "var(--bg-hero)" }} className="section-base">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Eyebrow row */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: "rgba(201, 123, 46, 0.18)",
                color: "var(--accent)",
                fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {article.category}
            </span>
            <span
              className="text-sm"
              style={{ color: "var(--text-on-dark-muted)" }}
            >
              {formattedDate}
            </span>
            <span
              className="text-sm"
              style={{ color: "var(--text-on-dark-muted)" }}
            >
              &middot; {article.readTime}
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-display font-bold mb-6"
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              color: "var(--text-on-dark)",
              lineHeight: 1.15,
            }}
          >
            {article.title}
          </h1>

          {/* Lead / excerpt */}
          <p
            className="text-base sm:text-lg"
            style={{
              color: "var(--text-on-dark-muted)",
              lineHeight: 1.7,
              maxWidth: "60ch",
            }}
          >
            {article.excerpt}
          </p>
        </div>
      </header>

      {/* Article body */}
      <section style={{ background: "var(--bg-base)" }} className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="article-body"
            style={{ maxWidth: "65ch" }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>

      {/* Post-body CTA */}
      <section
        style={{
          background: "var(--bg-elevated)",
          borderTop: "1px solid var(--border-subtle)",
        }}
        className="py-12 sm:py-16"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="rounded-2xl p-8 sm:p-10 text-center"
            style={{
              background: "var(--bg-hero)",
              border: "1px solid rgba(77,122,94,0.25)",
            }}
          >
            <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
              Talk to Helen about this topic
            </p>
            <h2
              className="font-display font-semibold mb-3"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                color: "var(--text-on-dark)",
              }}
            >
              Was this helpful?
            </h2>
            <p
              className="text-base mb-6 mx-auto"
              style={{
                color: "var(--text-on-dark-muted)",
                lineHeight: 1.7,
                maxWidth: "50ch",
              }}
            >
              Book a free 30-minute consultation to get answers specific to
              your household, your health history, and your budget.
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
        </div>
      </section>
    </main>
  );
}

