import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/site";

/* ── Static generation ──────────────────────────────────────────────── */

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} | Impact Health Sharing in New Hampshire`,
    description: `${service.tagline}. ${service.description.slice(0, 120)}...`,
  };
}

/* ── Per-service FAQ data ─────────────────────────────────────────── */
/* [DEMO COPY — pending client review] */

const serviceFaqs: Record<
  string,
  Array<{ q: string; a: string }>
> = {
  "individual-membership": [
    {
      q: "Can I use any doctor?",
      a: "Yes. Impact Health Sharing has no provider networks. You present as a cash-pay patient at any licensed provider and request the self-pay rate. Impact's bill negotiation team handles repricing after the visit.",
    },
    {
      q: "What if I need a specialist?",
      a: "You can see any specialist without a referral. Bills are submitted to Impact after your appointment. The repricing team negotiates the bill before your Personal Responsibility Amount applies.",
    },
    {
      q: "How does billing work after a doctor visit?",
      a: "After your visit, you submit the bill to Impact through the member portal. The team reprices it, applies any applicable PRA, and handles direct payment to the provider. You will receive a statement showing the original bill, the repriced amount, and your share.",
    },
  ],
  "family-membership": [
    {
      q: "Is the PRA really per family and not per person?",
      a: "Yes. Your Personal Responsibility Amount is one shared amount for the entire household. Traditional insurance stacks a deductible per family member, which means a family of four can owe $28,000 before insurance pays. Impact uses one shared PRA for everyone.",
    },
    {
      q: "What about my kids' checkups?",
      a: "Routine wellness visits for children are supported under Impact's wellness credits. Your $150 annual wellness credit per member applies toward these visits. Telehealth visits are available 24/7 at no cost for minor illness and urgent care questions.",
    },
    {
      q: "Can we add a family member mid-year?",
      a: "Yes. You can add a spouse, partner, or dependent at any time. Coverage for the new member begins the first of the following month after enrollment. There is no annual window requirement.",
    },
  ],
  "senior-supplemental": [
    {
      q: "Does this replace Medicare?",
      a: "No. This plan supplements Medicare A and B. Medicare remains your primary coverage. Impact Health Sharing fills the cost gaps Medicare does not cover, such as out-of-pocket maximums and costs for services Medicare partially covers.",
    },
    {
      q: "What are the coverage gaps it fills?",
      a: "Medicare A and B leave members responsible for significant out-of-pocket costs: hospital deductibles, 20% co-insurance for outpatient care, and no annual out-of-pocket cap. Impact's supplemental membership helps offset these costs through the sharing community pool.",
    },
    {
      q: "What is the monthly contribution for seniors?",
      a: "Senior supplemental pricing depends on your age and the plan you select. I walk through the exact numbers on the free consultation call. Most Medicare members I work with find the monthly contribution is substantially lower than a traditional Medigap plan.",
    },
  ],
};

/* ── Per-service ideal-member bullet points ─────────────────────────── */
/* [DEMO COPY — pending client review] */

const idealMemberBullets: Record<string, string[]> = {
  "individual-membership": [
    "Freelancers, 1099 contractors, and gig workers paying ACA individual rates",
    "Self-employed consultants and sole proprietors without employer coverage",
    "People recently aged off a parent's or spouse's plan",
  ],
  "family-membership": [
    "Families on ACA marketplace plans paying $800 or more per month",
    "Households on COBRA after a job change or layoff",
    "Families with children under 18 who need year-round coverage flexibility",
  ],
  "senior-supplemental": [
    "NH seniors enrolled in Medicare A and B with out-of-pocket exposure",
    "Retirees looking to reduce Medigap or Medicare Advantage costs",
    "Seniors wanting telehealth and wellness benefits beyond what Medicare covers",
  ],
};

/* ── Page component ─────────────────────────────────────────────────── */

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const faqs = serviceFaqs[service.slug] ?? [];
  const bullets = idealMemberBullets[service.slug] ?? [];

  return (
    <main>
      {/* ── Section 1: Hero ─────────────────────────────────────────── */}
      <section
        style={{ background: "var(--bg-hero)" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <p className="eyebrow mb-4">
            {service.emoji} IMPACT HEALTH SHARING
          </p>
          <h1
            className="font-display text-white mb-4"
            style={{
              fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            {service.name}
          </h1>
          <p
            className="font-body text-lg md:text-xl max-w-2xl mb-6"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            {service.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span
              className="inline-block font-body font-semibold text-base rounded-full px-5 py-2"
              style={{
                background: "var(--accent)",
                color: "#ffffff",
              }}
            >
              {service.price}
            </span>
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
          </div>
        </div>
      </section>

      {/* ── Section 2: What You Get ─────────────────────────────────── */}
      <section
        style={{ background: "var(--bg-base)" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2
            className="font-display mb-10"
            style={{
              fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
              fontWeight: 600,
              color: "var(--text-primary)",
            }}
          >
            What&apos;s included in your membership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="rounded-lg px-5 py-4 flex items-start gap-3"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <span className="mt-0.5 shrink-0 text-base">✅</span>
                <span
                  className="font-body text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Who It's For ─────────────────────────────────── */}
      <section
        style={{ background: "var(--bg-elevated)" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2
            className="font-display mb-8"
            style={{
              fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
              fontWeight: 600,
              color: "var(--text-primary)",
            }}
          >
            Is this right for you?
          </h2>

          {/* Highlight card */}
          <div
            className="rounded-xl p-6 mb-8"
            style={{
              background: "var(--bg-card)",
              borderLeft: "4px solid var(--accent)",
            }}
          >
            <p
              className="font-body text-base italic"
              style={{ color: "var(--text-secondary)" }}
            >
              {service.whoItsFor}
            </p>
          </div>

          {/* Ideal member bullets */}
          <ul className="flex flex-col gap-3">
            {bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 shrink-0">👤</span>
                <span
                  className="font-body text-base"
                  style={{ color: "var(--text-primary)" }}
                >
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 4: How It Works ─────────────────────────────────── */}
      <section
        style={{ background: "var(--bg-base)" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2
            className="font-display mb-10"
            style={{
              fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
              fontWeight: 600,
              color: "var(--text-primary)",
            }}
          >
            How enrollment works
          </h2>
          <ol className="flex flex-col gap-8">
            {[
              {
                emoji: "📅",
                title: "Book your free 30-minute consultation",
                body: "We talk through your situation, your current costs, and whether health sharing is the right fit. No pressure. If it is not right for you, I will tell you.",
              },
              {
                emoji: "🔢",
                title: "See your personalized numbers",
                body: "Exact monthly contribution, your PRA, and your estimated annual savings. Real math for your specific household, not a ballpark.",
              },
              {
                emoji: "✍️",
                title: "Enroll in 5 to 7 minutes",
                body: "Entirely online. No underwriting, no tax returns, no doctor visits required. Just your date of birth and basic household information.",
              },
              {
                emoji: "💪",
                title: "Coverage starts the first of next month",
                body: "No waiting period. Your membership is active and your savings start immediately. I am available after enrollment for any questions.",
              },
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-5">
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-body font-semibold text-sm"
                  style={{
                    background: "var(--primary-muted)",
                    color: "var(--primary)",
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{step.emoji}</span>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: "clamp(1.1rem, 1.5vw, 1.25rem)",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className="font-body text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Section 5: Service FAQ ───────────────────────────────────── */}
      <section
        style={{ background: "var(--bg-elevated)" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2
            className="font-display mb-10"
            style={{
              fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
              fontWeight: 600,
              color: "var(--text-primary)",
            }}
          >
            Questions about {service.name}
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="rounded-xl group"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <summary
                  className="font-body font-semibold text-base px-6 py-5 cursor-pointer list-none flex items-center justify-between"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span>{item.q}</span>
                  <span
                    className="ml-4 shrink-0 text-sm font-normal"
                    style={{ color: "var(--accent)" }}
                  >
                    +
                  </span>
                </summary>
                <div
                  className="px-6 pb-5 font-body text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: CTA ──────────────────────────────────────────── */}
      <section
        style={{ background: "var(--bg-hero)" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <h2
            className="font-display text-white mb-4"
            style={{
              fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
              fontWeight: 600,
            }}
          >
            Ready to get started with {service.name}?
          </h2>
          <p
            className="font-body text-lg max-w-xl mx-auto mb-8"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            {service.cta}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
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
              href="/services"
              className="inline-block font-body font-semibold rounded-lg px-7 py-3.5 transition-all duration-200 hover:underline"
              style={{
                color: "var(--text-on-dark-muted)",
                background: "transparent",
              }}
            >
              Back to All Services →
            </Link>
          </div>
          <p
            className="font-body text-xs max-w-md mx-auto"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            Health sharing is not insurance. Members are not guaranteed benefits.
          </p>
        </div>
      </section>
    </main>
  );
}
