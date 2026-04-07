"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";

const mainLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
];

const moreLinks = [
  { label: "Savings Calculator", href: "/calculator" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "FAQ", href: "/faq" },
  { label: "Pricing", href: "/pricing", internal: true },
];

// All links combined for mobile drawer
const allLinks = [...mainLinks, ...moreLinks];

interface NavLink { label: string; href: string; internal?: boolean; }

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  // Close "More" dropdown on outside click
  useEffect(() => {
    if (!moreOpen) return;
    function handleClick(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [moreOpen]);

  const moreIsActive = moreLinks.some(
    (l) => pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href))
  );

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b border-[var(--border-subtle)] transition-all duration-200 ${
          scrolled
            ? "bg-[var(--bg-base)]/90 backdrop-blur-sm shadow-sm"
            : "bg-[var(--bg-base)]"
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-bold text-xl text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors shrink-0"
          >
            {siteConfig.wordmark}
          </Link>

          {/* Desktop center links */}
          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {(mainLinks as NavLink[]).map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-body font-medium text-sm transition-colors ${
                      isActive
                        ? "text-[var(--primary)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--primary)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            {/* More dropdown */}
            <li ref={moreRef} className="relative">
              <button
                onClick={() => setMoreOpen((o) => !o)}
                className={`font-body font-medium text-sm transition-colors flex items-center gap-1 ${
                  moreIsActive
                    ? "text-[var(--primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--primary)]"
                }`}
                aria-expanded={moreOpen}
                aria-haspopup="true"
              >
                More
                <span
                  className="text-[10px] transition-transform duration-200"
                  style={{ display: "inline-block", transform: moreOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  ▾
                </span>
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-52 rounded-xl shadow-lg overflow-hidden"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    {(moreLinks as NavLink[]).map((link) => {
                      const isActive =
                        pathname === link.href ||
                        (link.href !== "/" && pathname.startsWith(link.href));
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMoreOpen(false)}
                          className={`flex items-center justify-between px-5 py-3 font-body text-sm font-medium transition-colors border-b border-[var(--border-subtle)] last:border-0 ${
                            link.internal
                              ? "text-[var(--accent)] hover:bg-[var(--bg-elevated)]"
                              : isActive
                              ? "text-[var(--primary)] bg-[var(--primary-muted)]"
                              : "text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--bg-elevated)]"
                          }`}
                        >
                          {link.label}
                          {link.internal && (
                            <span className="font-mono text-[10px] opacity-60">⬥</span>
                          )}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/free-guide"
              className="px-4 py-2 rounded-lg font-body font-semibold text-sm transition-colors"
              style={{ color: "var(--primary)", opacity: 0.85 }}
            >
              📋 Free Guide
            </Link>
            <Link
              href="/quiz"
              className="px-4 py-2 rounded-lg font-body font-semibold text-sm border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary-muted)] transition-colors"
            >
              Take the Quiz
            </Link>
            <Link
              href="/booking"
              className="px-4 py-2 rounded-lg font-body font-semibold text-sm bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] transition-colors shadow-sm"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile: Quiz + Book + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/quiz"
              className="px-3 py-2 rounded-lg font-body font-semibold text-sm border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary-muted)] transition-colors"
            >
              Quiz
            </Link>
            <Link
              href="/booking"
              className="px-3 py-2 rounded-lg font-body font-semibold text-sm bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] transition-colors shadow-sm"
            >
              Book a Call
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className="text-2xl leading-none text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors p-1"
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/40"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw] bg-[var(--bg-base)] flex flex-col shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-[var(--border-subtle)]">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="font-display font-bold text-xl text-[var(--text-primary)]"
                >
                  {siteConfig.wordmark}
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                  className="text-2xl leading-none text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors p-1"
                >
                  ✕
                </button>
              </div>

              {/* Drawer links — all links flat */}
              <nav className="flex-1 flex flex-col px-6 py-8 gap-1 overflow-y-auto" aria-label="Mobile navigation">
                {(allLinks as NavLink[]).map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`font-body font-medium text-base py-3 border-b border-[var(--border-subtle)] transition-colors ${
                        link.internal
                          ? "text-[var(--accent)]"
                          : isActive
                          ? "text-[var(--primary)]"
                          : "text-[var(--text-secondary)] hover:text-[var(--primary)]"
                      }`}
                    >
                      {link.label}{link.internal && " ⬥"}
                    </Link>
                  );
                })}
              </nav>

              {/* Drawer CTAs */}
              <div className="px-6 pb-8 flex flex-col gap-3">
                <Link
                  href="/free-guide"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center px-4 py-3 rounded-lg font-body font-semibold text-sm transition-colors"
                  style={{ color: "var(--primary)", border: "1px solid var(--border-medium)" }}
                >
                  📋 Free Cost Guide
                </Link>
                <Link
                  href="/quiz"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center px-4 py-3 rounded-lg font-body font-semibold text-sm border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary-muted)] transition-colors"
                >
                  Take the Quiz
                </Link>
                <Link
                  href="/booking"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center px-4 py-3 rounded-lg font-body font-semibold text-sm bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] transition-colors shadow-sm"
                >
                  Book a Call
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
