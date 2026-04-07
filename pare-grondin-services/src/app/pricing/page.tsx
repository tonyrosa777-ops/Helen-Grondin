"use client";

// OPTIMUS SALES TOOL — deleted before launch (pre-launch-auditor will flag if present)

import { useState } from "react";
import Link from "next/link";
import { pricingTiers } from "@/data/site";
import { formatCurrency } from "@/lib/utils";

// ─────────────────────────────────────────
// Comparison chart data
// ─────────────────────────────────────────

const comparisonGroups = [
  {
    category: "Foundation",
    rows: [
      { feature: "Animated hero section (3-layer particle + SVG)", starter: true, pro: true, premium: true },
      { feature: "Homepage with all sections", starter: true, pro: true, premium: true },
      { feature: "About, Services, Contact, FAQ pages", starter: true, pro: true, premium: true },
      { feature: "32 client testimonials page", starter: true, pro: true, premium: true },
      { feature: "Mobile-first responsive design", starter: true, pro: true, premium: true },
      { feature: "SEO foundation (schema, meta, sitemap)", starter: true, pro: true, premium: true },
      { feature: "Vercel deployment + 30-day revision window", starter: true, pro: true, premium: true },
    ],
  },
  {
    category: "Conversion Tools",
    rows: [
      { feature: "Interactive savings calculator (show prospects their exact savings)", starter: false, pro: true, premium: true },
      { feature: "Multi-step quiz with lead capture (qualifies leads before they call)", starter: false, pro: true, premium: true },
      { feature: "Custom branded booking calendar (clients book directly from your site)", starter: false, pro: true, premium: true },
      { feature: "NH health sharing vs. insurance comparison table", starter: false, pro: true, premium: true },
    ],
  },
  {
    category: "Content & SEO",
    rows: [
      { feature: "Blog: 9–10 NH-focused AEO articles (organic traffic while you sleep)", starter: false, pro: true, premium: true },
    ],
  },
  {
    category: "Local Market Dominance",
    rows: [
      { feature: "10 programmatic NH city pages (own local search for years)", starter: false, pro: false, premium: true },
      { feature: "Lead magnet + email gate (captures leads not ready to book yet)", starter: false, pro: false, premium: true },
      { feature: "Priority launch support", starter: false, pro: false, premium: true },
    ],
  },
  {
    category: "Support",
    rows: [
      { feature: "Resend email integration (quiz + booking notifications)", starter: false, pro: true, premium: true },
    ],
  },
];

// ─────────────────────────────────────────
// ROI Calculator component
// ─────────────────────────────────────────

function ROICalculator() {
  const [jobValue, setJobValue] = useState(500);
  const [clientsPerMonth, setClientsPerMonth] = useState(3);
  const [selectedTier, setSelectedTier] = useState(1); // Pro = index 1

  const tier = pricingTiers[selectedTier];
  const monthlyRevenue = jobValue * clientsPerMonth;
  const annualRevenue = monthlyRevenue * 12;
  const breakEven =
    tier.price > 0
      ? Math.ceil((tier.price / monthlyRevenue) * 10) / 10
      : 0;
  const roi12mo =
    tier.price > 0
      ? Math.round(((annualRevenue - tier.price) / tier.price) * 100)
      : 0;

  return (
    <div
      className="rounded-2xl p-8 shadow-md"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
      }}
    >
      <h2
        className="font-display text-3xl mb-2"
        style={{ color: "var(--text-primary)" }}
      >
        ROI Calculator
      </h2>
      <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
        See your return on investment based on your business numbers.
      </p>

      <div className="space-y-6 mb-8">
        {/* Slider 1 */}
        <div>
          <label
            className="font-mono text-sm block mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            Average consultation value:{" "}
            <span
              className="font-display text-base"
              style={{ color: "var(--accent)" }}
            >
              {formatCurrency(jobValue)}
            </span>
          </label>
          <input
            type="range"
            min={100}
            max={5000}
            step={100}
            value={jobValue}
            onChange={(e) => setJobValue(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{ accentColor: "var(--accent)" }}
          />
          <div
            className="flex justify-between text-xs mt-1 font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            <span>$100</span>
            <span>$5,000</span>
          </div>
        </div>

        {/* Slider 2 */}
        <div>
          <label
            className="font-mono text-sm block mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            New clients per month from website:{" "}
            <span
              className="font-display text-base"
              style={{ color: "var(--accent)" }}
            >
              {clientsPerMonth}
            </span>
          </label>
          <input
            type="range"
            min={1}
            max={20}
            step={1}
            value={clientsPerMonth}
            onChange={(e) => setClientsPerMonth(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{ accentColor: "var(--accent)" }}
          />
          <div
            className="flex justify-between text-xs mt-1 font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            <span>1</span>
            <span>20</span>
          </div>
        </div>

        {/* Package selector */}
        <div>
          <p
            className="font-mono text-sm mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            Package
          </p>
          <div className="flex gap-3 flex-wrap">
            {pricingTiers.map((t, idx) => (
              <button
                key={t.name}
                onClick={() => setSelectedTier(idx)}
                className="px-4 py-2 rounded-lg text-sm font-mono transition-all"
                style={
                  selectedTier === idx
                    ? {
                        background: "var(--accent)",
                        color: "#fff",
                        border: "2px solid var(--accent)",
                      }
                    : {
                        background: "transparent",
                        color: "var(--text-secondary)",
                        border: "2px solid var(--border-medium)",
                      }
                }
              >
                {t.name} ({formatCurrency(t.price)})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Output metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Monthly Revenue", value: formatCurrency(monthlyRevenue) },
          { label: "Annual Revenue", value: formatCurrency(annualRevenue) },
          {
            label: "Break-Even",
            value: `${breakEven} mo`,
          },
          { label: "12-Month ROI", value: `${roi12mo}%` },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="rounded-xl p-4 text-center"
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <p
              className="font-mono text-xs uppercase tracking-wider mb-1"
              style={{ color: "var(--text-muted)" }}
            >
              {label}
            </p>
            <p
              className="font-display text-2xl"
              style={{ color: "var(--accent)" }}
            >
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// Main page
// ─────────────────────────────────────────

export default function PricingPage() {
  return (
    <main style={{ background: "var(--bg-base)" }}>
      {/* ── Section 1: Page Header ── */}
      <section
        className="section-base text-center relative"
        style={{ background: "var(--bg-hero)" }}
      >
        {/* INTERNAL ONLY badge */}
        <div className="flex justify-center mb-6">
          <span
            className="font-mono text-xs uppercase tracking-widest px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(201, 123, 46, 0.18)",
              color: "var(--accent)",
              border: "1px solid rgba(201, 123, 46, 0.35)",
            }}
          >
            Internal Only — Optimus Sales Tool
          </span>
        </div>

        <h1
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-4"
          style={{ color: "var(--text-on-dark)" }}
        >
          Website Investment
        </h1>

        <p
          className="text-lg max-w-2xl mx-auto mb-3"
          style={{ color: "var(--text-on-dark-muted)" }}
        >
          Built by Optimus Business Solutions for Pare Grondin Services.
        </p>

        <p
          className="text-sm italic"
          style={{ color: "var(--text-on-dark-muted)" }}
        >
          This page is deleted before launch. It exists so Helen can review
          investment options during the sales presentation.
        </p>
      </section>

      {/* ── Section 2: Tier Cards ── */}
      <section className="section-base">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {pricingTiers.map((tier) => {
              const isPro = tier.badge === "Most Popular";
              return (
                <div key={tier.name} className="relative flex flex-col">
                  {/* Most Popular badge — floats above card */}
                  {isPro && (
                    <div className="flex justify-center mb-3">
                      <span
                        className="font-mono text-xs uppercase tracking-widest px-4 py-1.5 rounded-full"
                        style={{
                          background: "var(--accent)",
                          color: "#fff",
                        }}
                      >
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div
                    className={`flex flex-col h-full rounded-2xl p-8 transition-transform ${
                      isPro ? "shadow-xl scale-[1.02]" : "shadow-md"
                    }`}
                    style={{
                      background: "var(--bg-card)",
                      border: isPro
                        ? "2px solid var(--accent)"
                        : "1px solid var(--border-subtle)",
                    }}
                  >
                    <h2
                      className="font-display text-2xl mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {tier.name}
                    </h2>

                    <p
                      className="font-display text-5xl mt-2 mb-1"
                      style={{ color: "var(--accent)" }}
                    >
                      ${tier.price.toLocaleString()}
                    </p>

                    <p
                      className="font-mono text-xs mb-4"
                      style={{ color: "var(--text-muted)" }}
                    >
                      ({formatCurrency(tier.deposit)} deposit today)
                    </p>

                    <p
                      className="text-sm mb-6"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {tier.description}
                    </p>

                    <ul className="space-y-2 mb-8 flex-1">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span className="mt-0.5 shrink-0">✅</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/booking"
                      className="block text-center rounded-xl py-3 px-6 font-mono text-sm transition-all"
                      style={
                        isPro
                          ? {
                              background: "var(--accent)",
                              color: "#fff",
                              border: "2px solid var(--accent)",
                            }
                          : {
                              background: "transparent",
                              color: "var(--text-primary)",
                              border: "2px solid var(--border-medium)",
                            }
                      }
                    >
                      Book a Consultation to Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 3: ROI Calculator ── */}
      <section className="section-base section-elevated">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Investment Return</p>
            <h2
              className="font-display text-3xl md:text-4xl"
              style={{ color: "var(--text-primary)" }}
            >
              How fast does this pay for itself?
            </h2>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* ── Section 4: Comparison Chart ── */}
      <section className="section-base">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Full Feature Breakdown</p>
            <h2
              className="font-display text-3xl md:text-4xl"
              style={{ color: "var(--text-primary)" }}
            >
              What is included in each package
            </h2>
          </div>

          <div
            className="rounded-2xl overflow-hidden shadow-md"
            style={{ border: "1px solid var(--border-subtle)" }}
          >
            {/* Table header */}
            <div
              className="grid grid-cols-4 text-sm font-mono uppercase tracking-wider py-4 px-6"
              style={{
                background: "var(--bg-hero)",
                color: "var(--text-on-dark)",
              }}
            >
              <div>Feature</div>
              <div className="text-center" style={{ color: "var(--text-on-dark-muted)" }}>
                Starter
              </div>
              <div
                className="text-center px-2 py-0.5 rounded"
                style={{ color: "var(--accent)" }}
              >
                Pro
              </div>
              <div className="text-center" style={{ color: "var(--text-on-dark-muted)" }}>
                Premium
              </div>
            </div>

            {/* Category groups */}
            {comparisonGroups.map((group, groupIdx) => (
              <div key={group.category}>
                {/* Category header */}
                <div
                  className="grid grid-cols-4 px-6 py-2.5 text-xs font-mono uppercase tracking-widest"
                  style={{
                    background: "var(--bg-elevated)",
                    color: "var(--text-muted)",
                    borderTop:
                      groupIdx > 0
                        ? "1px solid var(--border-subtle)"
                        : undefined,
                  }}
                >
                  <div className="col-span-4">{group.category}</div>
                </div>

                {/* Feature rows */}
                {group.rows.map((row, rowIdx) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-4 px-6 py-3 text-sm items-center"
                    style={{
                      background:
                        rowIdx % 2 === 0 ? "var(--bg-card)" : "var(--bg-base)",
                      borderTop: "1px solid var(--border-subtle)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <div>{row.feature}</div>
                    <div className="text-center text-base">
                      {row.starter ? "✅" : <span style={{ color: "var(--text-muted)" }}>✗</span>}
                    </div>
                    <div
                      className="text-center text-base"
                      style={
                        row.pro
                          ? { color: "var(--accent)" }
                          : { color: "var(--text-muted)" }
                      }
                    >
                      {row.pro ? "✅" : "✗"}
                    </div>
                    <div className="text-center text-base">
                      {row.premium ? "✅" : <span style={{ color: "var(--text-muted)" }}>✗</span>}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section
        className="section-base text-center"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <p className="eyebrow mb-3">Ready to move forward?</p>
          <h2
            className="font-display text-3xl md:text-4xl mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Let us talk through which package fits
          </h2>
          <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
            Book a free 30-minute call with Optimus. We will walk through your
            goals, pick the right package, and lock in your start date.
          </p>
          <Link
            href="/booking"
            className="inline-block rounded-xl py-4 px-10 font-mono text-sm transition-all"
            style={{
              background: "var(--accent)",
              color: "#fff",
              border: "2px solid var(--accent)",
            }}
          >
            Book a Consultation to Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
