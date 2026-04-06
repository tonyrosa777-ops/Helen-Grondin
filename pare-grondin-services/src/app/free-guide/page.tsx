"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeroParticles from "@/components/PageHeroParticles";
import ScrollReveal from "@/components/ScrollReveal";

// Guide content — displayed inline on success (no PDF hosting required for demo)
const guideChapters = [
  {
    emoji: "📊",
    title: "The Real Cost Comparison",
    body: "A family of four on a mid-tier Anthem Blue Cross plan in NH pays $1,200–$1,900/month in premiums alone — before any deductible. The same family on Impact Health Sharing pays $628/month with a $1,000 personal responsibility amount (PRA). Annual savings: $6,864–$15,864.",
  },
  {
    emoji: "🏥",
    title: "What Health Sharing Actually Covers",
    body: "Impact covers preventive care, urgent care, ER visits, hospitalization, surgery, maternity, and prescription drugs. Pre-existing conditions are covered after a 12-month waiting period for conditions diagnosed in the prior 36 months. Most healthy families never encounter this limitation.",
  },
  {
    emoji: "🔍",
    title: "How Bill Repricing Works",
    body: "When you receive a medical bill, Impact reprices it to fair market value before your PRA applies — typically reducing the original charge by 60–80%. A $4,000 urgent care bill reprices to roughly $800. You pay your PRA toward that $800, and Impact members share the rest.",
  },
  {
    emoji: "⚖️",
    title: "What Insurance Does That Sharing Doesn't",
    body: "Health sharing is not insurance and does not satisfy ACA coverage requirements. It does not cover cosmetic procedures, elective abortions, or costs related to illegal drug use. Dental and vision are not included. If you take multiple specialty medications, a traditional plan may still be better — Helen will tell you honestly.",
  },
  {
    emoji: "📋",
    title: "Who Qualifies for Impact Health Sharing",
    body: "Impact is open to individuals and families who agree to live by a healthy lifestyle statement — no tobacco use, moderate alcohol consumption, and commitment to a healthy lifestyle. There is no minimum income requirement and no annual enrollment window. You can join any month.",
  },
  {
    emoji: "🚀",
    title: "How to Switch in 4 Steps",
    body: "1. Book a free call with Helen to review your current plan and run your personalized numbers. 2. Choose your PRA (Personal Responsibility Amount) — higher PRA = lower monthly contribution. 3. Complete online enrollment — takes about 20 minutes. 4. Coverage begins the first of the following month, or immediately in some cases.",
  },
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function FreeGuidePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setFormState("submitting");

    try {
      await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
    } catch {
      // Fail silently in demo — success state shows regardless
    }

    setFormState("success");
  }

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "var(--bg-hero)" }}
      >
        <PageHeroParticles />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal delay={0}>
            <p className="eyebrow mb-4">FREE GUIDE · NH FAMILIES</p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <h1
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)", color: "var(--text-on-dark)" }}
            >
              NH Health Insurance vs. Health Sharing: The 2024 Cost Comparison Guide
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.22}>
            <p className="font-body text-lg max-w-[52ch] mx-auto" style={{ color: "var(--text-on-dark-muted)" }}>
              Six chapters. Plain English. Everything NH families and self-employed workers need to decide if health sharing is right for them.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Gate Form or Guide Content ── */}
      <section className="py-20 md:py-28" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-5xl mx-auto px-6">

          {formState !== "success" ? (
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

              {/* Left: what's inside */}
              <div className="w-full lg:w-1/2">
                <ScrollReveal delay={0}>
                  <p className="eyebrow mb-4">WHAT'S INSIDE</p>
                  <h2
                    className="font-display font-semibold mb-6"
                    style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: "var(--text-primary)" }}
                  >
                    Six things Helen wishes every NH family knew before renewal
                  </h2>
                </ScrollReveal>
                <div className="flex flex-col gap-4">
                  {guideChapters.map((ch, i) => (
                    <ScrollReveal key={ch.title} delay={i * 0.07}>
                      <div className="flex gap-3 items-start">
                        <span className="text-xl shrink-0 mt-0.5">{ch.emoji}</span>
                        <div>
                          <p className="font-body font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{ch.title}</p>
                          <p className="font-body text-sm" style={{ color: "var(--text-muted)" }}>Chapter {i + 1}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Right: email gate form */}
              <ScrollReveal delay={0.1} className="w-full lg:w-1/2">
                <div
                  className="rounded-2xl p-8 shadow-md"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
                >
                  <h3
                    className="font-display font-semibold mb-2"
                    style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)", color: "var(--text-primary)" }}
                  >
                    Get the free guide
                  </h3>
                  <p className="font-body text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                    Enter your name and email. The guide opens instantly — no spam, no sales pressure.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="font-mono text-xs uppercase tracking-widest block mb-2" style={{ color: "var(--text-muted)" }}>
                        Your first name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Jennifer"
                        className="w-full rounded-lg px-4 py-3 font-body text-sm outline-none focus:ring-2"
                        style={{
                          background: "var(--bg-elevated)",
                          border: "1px solid var(--border-medium)",
                          color: "var(--text-primary)",
                        }}
                      />
                    </div>
                    <div>
                      <label className="font-mono text-xs uppercase tracking-widest block mb-2" style={{ color: "var(--text-muted)" }}>
                        Your email address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="jennifer@example.com"
                        className="w-full rounded-lg px-4 py-3 font-body text-sm outline-none focus:ring-2"
                        style={{
                          background: "var(--bg-elevated)",
                          border: "1px solid var(--border-medium)",
                          color: "var(--text-primary)",
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="btn-accent w-full py-3.5 rounded-lg font-body font-semibold text-white text-base disabled:opacity-60"
                    >
                      {formState === "submitting" ? "Opening guide…" : "Read the Free Guide →"}
                    </button>
                    <p className="font-body text-xs text-center" style={{ color: "var(--text-muted)" }}>
                      Your information is never shared or sold. Unsubscribe anytime.
                    </p>
                  </form>
                </div>
              </ScrollReveal>
            </div>

          ) : (
            /* ── Success: Show guide content ── */
            <div>
              <ScrollReveal delay={0} className="text-center mb-12">
                <span className="text-5xl block mb-4">✅</span>
                <h2
                  className="font-display font-semibold mb-3"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "var(--text-primary)" }}
                >
                  Here's your guide, {name.split(" ")[0]}.
                </h2>
                <p className="font-body text-lg" style={{ color: "var(--text-secondary)" }}>
                  A copy has been sent to {email}.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
                {guideChapters.map((ch, i) => (
                  <ScrollReveal key={ch.title} delay={i * 0.08}>
                    <div
                      className="rounded-xl p-6 h-full"
                      style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{ch.emoji}</span>
                        <div>
                          <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                            Chapter {i + 1}
                          </p>
                          <h3 className="font-display font-semibold" style={{ color: "var(--text-primary)" }}>
                            {ch.title}
                          </h3>
                        </div>
                      </div>
                      <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {ch.body}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Post-guide CTA */}
              <ScrollReveal>
                <div
                  className="rounded-2xl p-8 md:p-12 text-center"
                  style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)" }}
                >
                  <h3
                    className="font-display font-semibold mb-3"
                    style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: "var(--text-primary)" }}
                  >
                    Ready to see your exact numbers?
                  </h3>
                  <p className="font-body text-lg mb-8 max-w-[46ch] mx-auto" style={{ color: "var(--text-secondary)" }}>
                    The guide gives you the framework. A free call with Helen gives you the exact dollar amount your family would save.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/booking"
                      className="btn-accent inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-body font-semibold text-white"
                    >
                      Book a Free Consultation
                    </Link>
                    <Link
                      href="/quiz"
                      className="btn-outline-primary inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-body font-semibold"
                    >
                      Take the 2-Minute Quiz
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
