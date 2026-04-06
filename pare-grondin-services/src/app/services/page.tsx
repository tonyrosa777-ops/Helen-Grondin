import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/site";

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
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h1
            className="font-display text-white mb-5"
            style={{
              fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Find the right plan for your situation
          </h1>
          <p
            className="font-body text-lg md:text-xl max-w-2xl"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            Three membership options, all month-to-month, all with 70%+ bill
            repricing, all starting with a free consultation.
          </p>
        </div>
      </section>

      {/* ── Section 2: Services Grid ─────────────────────────────────── */}
      <section
        style={{ background: "var(--bg-base)" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.slug}
                className="rounded-2xl p-8 shadow-md flex flex-col gap-6"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
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
                    style={{
                      background: "var(--accent)",
                      color: "#ffffff",
                    }}
                  >
                    {service.price}
                  </span>
                </div>

                {/* Features list */}
                <ul className="flex flex-col gap-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
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
                    className="block w-full text-center font-body font-semibold rounded-lg px-7 py-3.5 transition-all duration-200 hover:shadow-lg"
                    style={{
                      background: "var(--accent)",
                      color: "#ffffff",
                    }}
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
              </article>
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
              className="inline-block font-body font-semibold rounded-lg px-7 py-3.5 transition-all duration-200 hover:shadow-lg"
              style={{
                background: "var(--accent)",
                color: "#ffffff",
              }}
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/faq"
              className="inline-block font-body font-semibold rounded-lg px-7 py-3.5 border-2 transition-all duration-200"
              style={{
                borderColor: "var(--primary)",
                color: "var(--primary)",
                background: "transparent",
              }}
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
