import type { Metadata } from "next";
import SavingsCalculator from "@/components/SavingsCalculator";
import PageHeroParticles from "@/components/PageHeroParticles";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Health Sharing Savings Calculator — NH Cost Comparison | Pare Grondin Services",
  description:
    "See exactly how much your NH family could save by switching from health insurance to Impact Health Sharing. Enter your current premium and get an instant estimate.",
  openGraph: {
    title: "NH Health Sharing Savings Calculator",
    description: "How much could you save? Enter your premium and see your numbers instantly.",
  },
};

export default function CalculatorPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative py-16 md:py-24 px-4 overflow-hidden"
        style={{ background: "var(--bg-hero)" }}
      >
        <PageHeroParticles />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">NH SAVINGS CALCULATOR</p>
          <h1
            className="font-display font-bold mb-5"
            style={{
              color: "var(--text-on-dark)",
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
              lineHeight: 1.15,
            }}
          >
            How much could you save on healthcare?
          </h1>
          <p
            className="font-body text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            Enter your current monthly premium and see a side-by-side estimate of what Impact
            Health Sharing would cost your household — and what you'd keep in your pocket.
          </p>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="py-16 md:py-20 px-4" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-3xl mx-auto">
          <SavingsCalculator />
        </div>
      </section>

      {/* ── How it works explainer ── */}
      <section className="py-14 px-4" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow text-center mb-10">HOW THE ESTIMATE WORKS</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                emoji: "📊",
                title: "Rate tables",
                body: "Impact Health Sharing publishes monthly contribution rates by age and household type. These estimates are based on those published tables.",
              },
              {
                emoji: "🏥",
                title: "Bill repricing",
                body: "Impact uses direct-pay pricing — hospitals accept 40–70% less. Your $1,200 ER visit becomes a $300 contribution. The calculator doesn't yet factor that in.",
              },
              {
                emoji: "📞",
                title: "Exact numbers",
                body: "Helen runs a full comparison using your actual plan, deductible, and family details. The call takes 20 minutes and costs nothing.",
              },
            ].map(({ emoji, title, body }) => (
              <div
                key={title}
                className="rounded-xl p-6"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
              >
                <span className="text-3xl mb-3 block">{emoji}</span>
                <h3
                  className="font-display font-semibold text-lg mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: "var(--bg-hero)" }}
      >
        <div className="max-w-xl mx-auto">
          <p className="eyebrow mb-4">READY TO VERIFY?</p>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "var(--text-on-dark)" }}
          >
            Get your real numbers in 20 minutes
          </h2>
          <p className="font-body mb-8" style={{ color: "var(--text-on-dark-muted)" }}>
            Helen runs a live comparison using your current plan details.
            No pressure. No obligation. Just real numbers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="btn-accent inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-body font-semibold text-white text-base"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/free-guide"
              className="btn-outline-primary-dark inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-body font-semibold text-base"
            >
              Read the Free Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
