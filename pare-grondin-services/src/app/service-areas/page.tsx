import type { Metadata } from "next";
import Link from "next/link";
import { serviceAreas } from "@/data/serviceAreas";
import PageHeroParticles from "@/components/PageHeroParticles";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Health Sharing in New Hampshire — Service Areas",
  description:
    "Pare Grondin Services helps families and self-employed workers across New Hampshire cut health insurance costs through Impact Health Sharing. Find your city.",
};

export default function ServiceAreasPage() {
  return (
    <main>
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "var(--bg-hero)" }}
      >
        <PageHeroParticles />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal delay={0}>
            <p className="eyebrow mb-4">SERVING ALL OF NEW HAMPSHIRE</p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <h1
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", color: "var(--text-on-dark)" }}
            >
              Health Sharing Guidance for Every Corner of NH
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.22}>
            <p className="font-body text-lg max-w-[52ch] mx-auto" style={{ color: "var(--text-on-dark-muted)" }}>
              No networks. No regional restrictions. Helen works with families and self-employed workers
              across the state — from the Seacoast to the Lakes Region to the Upper Valley.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, i) => (
              <ScrollReveal key={area.slug} delay={i * 0.06}>
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="group block rounded-2xl p-7 h-full transition-all hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <p className="eyebrow mb-2">{area.county}</p>
                  <h2
                    className="font-display font-semibold mb-3 group-hover:text-[var(--primary)] transition-colors"
                    style={{ fontSize: "clamp(1.3rem, 2vw, 1.6rem)", color: "var(--text-primary)" }}
                  >
                    {area.name}
                  </h2>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                    {area.tagline}
                  </p>
                  <span
                    className="font-mono text-xs font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    See how health sharing works in {area.name} →
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="font-display font-semibold mb-4"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "var(--text-primary)" }}
            >
              Don't see your city? Helen still works with you.
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
              Impact Health Sharing covers all 47 states with no network restrictions.
              Wherever you are in NH, Helen can help you run the numbers.
            </p>
            <Link
              href="/booking"
              className="btn-accent inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-body font-semibold text-white"
            >
              Book a Free Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
