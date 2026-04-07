"use client";

import { useState } from "react";
import Link from "next/link";

// ── Impact Health Sharing rate estimates (demo — based on published rate tables) ──
// Actual costs vary by age and health status.

const IMPACT_RATES: Record<string, Record<string, number>> = {
  individual: {
    "Under 35":  95,
    "35 – 44":  148,
    "45 – 54":  212,
    "55 – 64":  285,
  },
  couple: {
    "Under 35":  188,
    "35 – 44":  290,
    "45 – 54":  418,
    "55 – 64":  560,
  },
  family: {
    "Under 35":  378,
    "35 – 44":  435,
    "45 – 54":  520,
    "55 – 64":  625,
  },
};

const AGE_RANGES = ["Under 35", "35 – 44", "45 – 54", "55 – 64"] as const;
type AgeRange = typeof AGE_RANGES[number];

const FAMILY_SIZES = [
  { key: "individual", label: "👤 Individual" },
  { key: "couple",     label: "👫 Couple"     },
  { key: "family",     label: "👨‍👩‍👧 Family"    },
] as const;
type FamilyKey = "individual" | "couple" | "family";

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function SavingsCalculator() {
  const [premium, setPremium] = useState(900);
  const [familyKey, setFamilyKey] = useState<FamilyKey>("family");
  const [ageRange, setAgeRange] = useState<AgeRange>("35 – 44");

  const impactCost   = IMPACT_RATES[familyKey][ageRange];
  const monthlySaved = Math.max(0, premium - impactCost);
  const annualSaved  = monthlySaved * 12;
  const fiveYearSaved = annualSaved * 5;
  const pctSaved     = premium > 0 ? Math.round((monthlySaved / premium) * 100) : 0;

  const noSavings = monthlySaved === 0;

  return (
    <div className="flex flex-col gap-8">

      {/* ── Inputs ── */}
      <div
        className="rounded-2xl p-6 md:p-8 flex flex-col gap-7"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
      >

        {/* Current premium slider */}
        <div>
          <label className="block font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
            Your current monthly premium
          </label>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="font-display font-bold" style={{ fontSize: "2.4rem", color: "var(--accent)" }}>
              {fmt(premium)}
            </span>
            <span className="font-body text-sm" style={{ color: "var(--text-muted)" }}>/month</span>
          </div>
          <input
            type="range"
            min={200}
            max={2500}
            step={25}
            value={premium}
            onChange={(e) => setPremium(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between font-mono text-xs mt-1" style={{ color: "var(--text-muted)" }}>
            <span>$200</span><span>$2,500</span>
          </div>
        </div>

        {/* Family size */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
            Coverage type
          </p>
          <div className="flex flex-wrap gap-2">
            {FAMILY_SIZES.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFamilyKey(key)}
                className="px-4 py-2 rounded-lg font-body text-sm font-medium transition-all"
                style={familyKey === key
                  ? { background: "var(--primary)", color: "#fff", border: "2px solid var(--primary)" }
                  : { background: "transparent", color: "var(--text-secondary)", border: "2px solid var(--border-medium)" }
                }
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Age range */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
            Age of oldest member
          </p>
          <div className="flex flex-wrap gap-2">
            {AGE_RANGES.map((age) => (
              <button
                key={age}
                onClick={() => setAgeRange(age)}
                className="px-4 py-2 rounded-lg font-body text-sm font-medium transition-all"
                style={ageRange === age
                  ? { background: "var(--primary)", color: "#fff", border: "2px solid var(--primary)" }
                  : { background: "transparent", color: "var(--text-secondary)", border: "2px solid var(--border-medium)" }
                }
              >
                {age}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Results ── */}
      <div
        className="rounded-2xl overflow-hidden shadow-md"
        style={{ border: noSavings ? "1px solid var(--border-subtle)" : "2px solid var(--primary)" }}
      >
        {/* Header band */}
        <div
          className="px-6 md:px-8 py-4 flex items-center justify-between"
          style={{ background: noSavings ? "var(--bg-elevated)" : "var(--primary)" }}
        >
          <div>
            <p
              className="font-mono text-xs uppercase tracking-widest mb-0.5"
              style={{ color: noSavings ? "var(--text-muted)" : "rgba(245,245,240,0.7)" }}
            >
              Estimated Impact monthly cost
            </p>
            <p
              className="font-display font-bold"
              style={{ fontSize: "1.8rem", color: noSavings ? "var(--text-primary)" : "#fff" }}
            >
              {fmt(impactCost)}<span className="font-body font-normal text-base">/mo</span>
            </p>
          </div>
          {!noSavings && (
            <div className="text-right">
              <p className="font-mono text-xs uppercase tracking-widest mb-0.5" style={{ color: "rgba(245,245,240,0.7)" }}>
                You save
              </p>
              <p className="font-display font-bold text-3xl" style={{ color: "var(--accent)" }}>
                {pctSaved}%
              </p>
            </div>
          )}
        </div>

        {/* Savings grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3"
          style={{ background: "var(--bg-card)" }}
        >
          {[
            { label: "Monthly savings",   value: fmt(monthlySaved),   sub: "every single month"   },
            { label: "Annual savings",    value: fmt(annualSaved),    sub: "back in your pocket"  },
            { label: "5-year projection", value: fmt(fiveYearSaved),  sub: "compounded over time" },
          ].map(({ label, value, sub }, i) => (
            <div
              key={label}
              className="p-6 text-center"
              style={{
                borderTop: i > 0 ? "1px solid var(--border-subtle)" : undefined,
              }}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
                {label}
              </p>
              <p
                className="font-display font-bold mb-1"
                style={{ fontSize: "1.9rem", color: noSavings ? "var(--text-muted)" : "var(--accent)" }}
              >
                {noSavings ? "—" : value}
              </p>
              <p className="font-body text-xs" style={{ color: "var(--text-muted)" }}>
                {sub}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: "var(--bg-elevated)", borderTop: "1px solid var(--border-subtle)" }}
        >
          <p className="font-body text-sm" style={{ color: "var(--text-secondary)" }}>
            {noSavings
              ? "Your current premium may already be competitive. Let Helen verify with your exact numbers."
              : "These are estimates. Book a free call for your personalized breakdown."}
          </p>
          <Link
            href="/booking"
            className="btn-accent shrink-0 inline-flex items-center px-6 py-3 rounded-lg font-body font-semibold text-white text-sm whitespace-nowrap"
          >
            Verify My Numbers →
          </Link>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="font-body text-xs italic text-center" style={{ color: "var(--text-muted)" }}>
        Estimates based on Impact Health Sharing published rate tables. Actual costs vary by age, household size, and health status.
        Health sharing is not insurance — members are not guaranteed benefits.
      </p>
    </div>
  );
}
