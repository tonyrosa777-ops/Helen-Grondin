import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { serviceAreas } from "@/data/serviceAreas";
import PageHeroParticles from "@/components/PageHeroParticles";
import ScrollReveal from "@/components/ScrollReveal";

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ city: area.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> }
): Promise<Metadata> {
  const { city } = await params;
  const area = serviceAreas.find((a) => a.slug === city);
  if (!area) return {};
  return {
    title: `Health Sharing in ${area.name}, NH — Pare Grondin Services`,
    description: `Helen Grondin helps ${area.name} families and self-employed workers cut health insurance costs by 40–60% through Impact Health Sharing. ${area.tagline}`,
  };
}

export default async function CityPage(
  { params }: { params: Promise<{ city: string }> }
) {
  const { city } = await params;
  const area = serviceAreas.find((a) => a.slug === city);
  if (!area) notFound();

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "var(--bg-hero)" }}
      >
        <PageHeroParticles />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <ScrollReveal delay={0}>
            <p className="eyebrow mb-4">{area.county.toUpperCase()} · NEW HAMPSHIRE</p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <h1
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", color: "var(--text-on-dark)" }}
            >
              Health Sharing for {area.name}, NH Families
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.22}>
            <p className="font-body text-lg max-w-[54ch]" style={{ color: "var(--text-on-dark-muted)" }}>
              {area.tagline}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="py-20 md:py-24" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            <ScrollReveal delay={0} className="flex-1">
              <p className="eyebrow mb-4">WHO HELEN WORKS WITH IN {area.name.toUpperCase()}</p>
              <h2
                className="font-display font-semibold mb-5"
                style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)", color: "var(--text-primary)" }}
              >
                {area.name} residents who are done overpaying
              </h2>
              <p className="font-body leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                {area.demographicNote}
              </p>
              <p className="font-body leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {area.localHook}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="flex-1 flex flex-col gap-4">
              {[
                { emoji: "🏥", label: "No network restrictions", body: "See any provider in the US. No referrals, no prior authorization for routine care." },
                { emoji: "📅", label: "No waiting period", body: "Coverage begins the day you enroll. No 60-day waiting period like most ACA plans." },
                { emoji: "💰", label: "70%+ bill repricing", body: "Bills are repriced before your cost-sharing applies. Members typically owe a fraction of the original charge." },
                { emoji: "📞", label: "1:1 guidance from Helen", body: "Helen walks you through enrollment, answers every question, and stays available after you join." },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl p-5 flex gap-4"
                  style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)" }}
                >
                  <span className="text-2xl shrink-0">{item.emoji}</span>
                  <div>
                    <p className="font-body font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{item.label}</p>
                    <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Nearby Areas ── */}
      {area.nearbyAreas.length > 0 && (
        <section className="py-12" style={{ background: "var(--bg-elevated)" }}>
          <div className="max-w-5xl mx-auto px-6">
            <ScrollReveal>
              <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                Also serving families in
              </p>
              <div className="flex flex-wrap gap-2">
                {area.nearbyAreas.map((nearby) => (
                  <span
                    key={nearby}
                    className="font-body text-sm px-3 py-1 rounded-full"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {nearby}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "var(--bg-hero)" }}
      >
        <PageHeroParticles />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="font-display font-semibold mb-4"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "var(--text-on-dark)" }}
            >
              See your exact numbers — free, no obligation
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: "var(--text-on-dark-muted)" }}>
              Helen will compare your current plan to Impact Health Sharing side by side. Most {area.name} families save $400–$900/month.
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
                className="btn-outline-primary-dark inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-body font-semibold"
              >
                Take the 2-Minute Quiz
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── All Areas Link ── */}
      <div className="py-8 text-center" style={{ background: "var(--bg-base)" }}>
        <Link
          href="/service-areas"
          className="font-body text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          ← All NH service areas
        </Link>
      </div>
    </main>
  );
}
