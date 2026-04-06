import Link from "next/link";
import { siteConfig } from "@/data/site";


const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Book a Consultation", href: "/booking" },
  { label: "Take the Quiz", href: "/quiz" },
];

export default function Footer() {
  return (
    <footer className="section-elevated border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-display font-bold text-xl text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors w-fit"
            >
              {siteConfig.wordmark}
            </Link>
            <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="font-body text-xs text-[var(--text-muted)] italic leading-relaxed mt-2">
              Health sharing is not insurance. Members are not guaranteed benefits.
              Impact Health Sharing is a 501(c)(3) nonprofit Health Care Sharing Ministry.
            </p>
          </div>

          {/* Column 2 — Navigate */}
          <div className="flex flex-col gap-4">
            <p className="eyebrow">Navigate</p>
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="flex flex-col gap-4">
            <p className="eyebrow">Get in Touch</p>
            <div className="flex flex-col gap-3">
              <div>
                <p className="font-body text-xs text-[var(--text-muted)] uppercase tracking-wide mb-1">
                  Phone
                </p>
                {siteConfig.phone ? (
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="font-body text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                ) : (
                  <span className="font-body text-sm text-[var(--text-muted)]">Coming soon</span>
                )}
              </div>
              <div>
                <p className="font-body text-xs text-[var(--text-muted)] uppercase tracking-wide mb-1">
                  Email
                </p>
                {siteConfig.email ? (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-body text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                ) : (
                  <span className="font-body text-sm text-[var(--text-muted)]">Coming soon</span>
                )}
              </div>
            </div>
            <Link
              href="/booking"
              className="mt-2 w-full text-center px-5 py-3 rounded-lg font-body font-semibold text-sm bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] transition-colors shadow-sm"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border-subtle)] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[var(--text-muted)]">
            &copy; 2026 {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-body text-xs text-[var(--text-muted)]">
            Site by Optimus Business Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
