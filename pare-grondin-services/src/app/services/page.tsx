import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/site";
import PageHeroParticles from "@/components/PageHeroParticles";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Health Sharing Services for NH Families",
  description:
    "Individual membership, family plans, and Medicare supplemental coverage through Impact Health Sharing. See which plan fits your situation.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* ── Section 1: Hero ─────────────────────────────────────────── */}
      <section
        style={{ background: "var(--bg-hero)" }}
        className="relative py-20 md:py-28 overflow-hidden"
      >
        <PageHeroParticles />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
          <ScrollReveal delay={0}>
            <h1
              className="font-display mb-5"
              style={{
                fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "var(--text-on-dark)",
              }}
            >
              Find the right plan for your situation
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p
              className="font-body text-lg md:text-xl max-w-2xl"
              style={{ color: "var(--text-on-dark-muted)" }}
            >
              Three membership options, all month-to-month, all with 70%+ bill
              repricing, all starting with a free consultation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 2: Services Grid ─────────────────────────────────── */}
      <section
        style={{ background: "var(--bg-base)" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 0.1} className="rounded-2xl p-8 shadow-md flex flex-col gap-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}>
                {/* Emoji + Name + Tagline */}
                <div>
                  <div className="text-5xl mb-4">{service.emoji}</div>
                  <h2
                    className="font-display mb-2"
                    style={{
                      fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    {service.name}
                  </h2>
                  <p
                    className="font-body text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {service.tagline}
                  </p>
                </div>

                {/* Price badge */}
                <div>
                  <span
                    className="inline-block font-body font-semibold text-sm rounded-full px-4 py-1.5"
                    style={{ background: "var(--accent)", color: "#ffffff" }}
                  >
                    {service.price}
                  </span>
                </div>

                {/* Features list */}
                <ul className="flex flex-col gap-2">
                  {service.features.map((feature, fi) => (
                    <li
                      key={fi}
                      className="font-body text-sm flex items-start gap-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <span className="mt-0.5 shrink-0">✅</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Who it's for */}
                <div
                  className="rounded-lg px-4 py-3"
                  style={{ background: "var(--bg-elevated)" }}
                >
                  <p
                    className="font-body text-sm italic"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span className="not-italic mr-1">👤</span>
                    {service.whoItsFor}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    href="/booking"
                    className="btn-accent block w-full text-center font-body font-semibold rounded-lg px-7 py-3.5 text-white"
                  >
                    {service.cta} →
                  </Link>
                  <div className="mt-3 text-center">
                    <Link
                      href={`/services/${service.slug}`}
                      className="font-body text-sm transition-colors duration-200 hover:underline"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      See full details →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Comparison Teaser ─────────────────────────────── */}
      <section
        style={{ background: "var(--bg-elevated)" }}
        className="py-16"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <ScrollReveal delay={0}>
            <h2
              className="font-display mb-4"
              style={{
                fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
              }}
            >
              Not sure which is right for you?
            </h2>
            <p
              className="font-body text-lg max-w-xl mx-auto mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              The free consultation is exactly for this. I&apos;ll show you your
              specific numbers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="btn-accent inline-block font-body font-semibold rounded-lg px-7 py-3.5 text-white"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/faq"
                className="btn-outline-primary inline-block font-body font-semibold rounded-lg px-7 py-3.5"
              >
                Read the FAQ
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
