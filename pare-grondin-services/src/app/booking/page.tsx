import type { Metadata } from "next";
import BookingCalendar from "@/components/BookingCalendar";

export const metadata: Metadata = {
  title: "Book a Free Consultation — Pare Grondin Services",
  description:
    "Schedule a free 30-minute consultation with Helen Grondin. We'll review your current healthcare costs and show you exactly what health sharing would cost for your household.",
};

export default function BookingPage() {
  return (
    <main>
      {/* ── Section 1 — Hero ───────────────────────────────────────────── */}
      <section
        className="py-16 md:py-20 px-4"
        style={{ background: "var(--bg-hero)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">Free 30-Minute Consultation</p>

          <h1
            className="font-display font-bold mb-6"
            style={{
              color: "var(--text-on-dark)",
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
              lineHeight: 1.15,
            }}
          >
            Let&apos;s look at your numbers together.
          </h1>

          <ul className="space-y-3 mb-6 text-left inline-block">
            {[
              {
                emoji: "📋",
                text: "We review your current plan and monthly cost",
              },
              {
                emoji: "💰",
                text: "I show you what Impact would cost for your household",
              },
              {
                emoji: "🤝",
                text: "You leave with real numbers. No pressure. No obligation.",
              },
            ].map(({ emoji, text }) => (
              <li
                key={text}
                className="flex items-start gap-3 font-body text-base md:text-lg"
                style={{ color: "var(--text-on-dark)" }}
              >
                <span className="text-xl leading-tight">{emoji}</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <p
            className="font-body text-sm mt-4"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            Most consultations take 20-30 minutes.
          </p>
        </div>
      </section>

      {/* ── Section 2 — Calendar ───────────────────────────────────────── */}
      <section
        className="py-12 px-4"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-display font-semibold text-center mb-3"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
            }}
          >
            Pick a time that works for you
          </h2>

          <p
            className="font-body text-center mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            All consultations are held by phone or video. NH-focused — I know
            your market.
          </p>

          <BookingCalendar />

          <p
            className="font-body text-sm text-center mt-6"
            style={{ color: "var(--text-muted)" }}
          >
            Prefer email? Reach out at helen@paregrondinservices.com{" "}
            {/* [DEMO COPY] */}
          </p>
        </div>
      </section>

      {/* ── Section 3 — Trust signals ──────────────────────────────────── */}
      <section
        className="py-10 px-4"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="max-w-3xl mx-auto">
          <ul className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
            {[
              { emoji: "🕐", label: "30 minutes — usually less" },
              { emoji: "🔒", label: "No obligation, no hard sell" },
              { emoji: "📍", label: "NH-based, NH-focused" },
            ].map(({ emoji, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 font-body font-medium text-base"
                style={{ color: "var(--text-secondary)" }}
              >
                <span className="text-xl">{emoji}</span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
