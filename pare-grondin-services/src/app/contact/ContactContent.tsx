"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { siteConfig } from "@/data/site";

/*
 * ContactContent - client component.
 * Form: react-hook-form with built-in validation rules.
 * Submits to /api/contact (POST). Shows success/error state inline.
 * Source: design-system.md Section 5 (form inputs, buttons) + Section 2 (colors).
 */

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactContent() {
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitState("loading");
    setSubmittedName(data.name);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitState("success");
      } else {
        setSubmitState("error");
      }
    } catch {
      setSubmitState("error");
    }
  };

  const contactEmail =
    siteConfig.email || "helen@paregrondinservices.com"; // [DEMO COPY]
  const contactPhone = siteConfig.phone || ""; // TODO: Helen to provide

  return (
    <main>
      {/* ── Hero header ── */}
      <section
        className="py-20 md:py-28"
        style={{ background: "var(--bg-hero)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow mb-4">GET IN TOUCH</p>
          <h1
            className="font-display font-bold leading-tight mb-4"
            style={{
              fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
              color: "var(--text-on-dark)",
            }}
          >
            Get in Touch
          </h1>
          <p
            className="font-body text-lg max-w-[48ch]"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            Book a consultation or send a question. I respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Main content: form + info ── */}
      <section
        className="section-base"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

            {/* ── Left: Contact form ── */}
            <div>
              <h2
                className="font-display font-semibold mb-6"
                style={{
                  fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
                  color: "var(--text-primary)",
                }}
              >
                Send a message
              </h2>

              {submitState === "success" ? (
                <div
                  className="rounded-xl p-6 flex flex-col gap-3"
                  style={{
                    background: "rgba(77, 122, 94, 0.08)",
                    border: "1px solid rgba(77, 122, 94, 0.30)",
                  }}
                >
                  <span className="text-2xl">✅</span>
                  <p
                    className="font-display font-semibold text-xl"
                    style={{ color: "var(--primary)" }}
                  >
                    Thanks {submittedName}!
                  </p>
                  <p
                    className="font-body"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Helen will be in touch within 24 hours.
                  </p>
                  <Link
                    href="/booking"
                    className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-lg font-body font-semibold text-white transition-all hover:shadow-lg self-start"
                    style={{ background: "var(--accent)" }}
                  >
                    Book a consultation now
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="flex flex-col gap-5"
                >
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="font-body font-semibold text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Name <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      className="rounded-lg px-4 py-3 font-body text-base transition-all"
                      style={{
                        background: "var(--bg-card)",
                        border: errors.name
                          ? "1px solid rgb(239 68 68)"
                          : "1px solid var(--border-medium)",
                        color: "var(--text-primary)",
                        outline: "none",
                      }}
                      {...register("name", { required: "Name is required." })}
                    />
                    {errors.name && (
                      <p className="font-body text-xs" style={{ color: "rgb(239 68 68)" }}>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="font-body font-semibold text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Email <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="rounded-lg px-4 py-3 font-body text-base transition-all"
                      style={{
                        background: "var(--bg-card)",
                        border: errors.email
                          ? "1px solid rgb(239 68 68)"
                          : "1px solid var(--border-medium)",
                        color: "var(--text-primary)",
                        outline: "none",
                      }}
                      {...register("email", {
                        required: "Email is required.",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address.",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="font-body text-xs" style={{ color: "rgb(239 68 68)" }}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone (optional) */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="font-body font-semibold text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Phone{" "}
                      <span
                        className="font-body font-normal text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        (optional)
                      </span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(603) 000-0000"
                      className="rounded-lg px-4 py-3 font-body text-base transition-all"
                      style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border-medium)",
                        color: "var(--text-primary)",
                        outline: "none",
                      }}
                      {...register("phone")}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="font-body font-semibold text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Message <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your current plan and what you are hoping to change..."
                      className="rounded-lg px-4 py-3 font-body text-base transition-all resize-y"
                      style={{
                        background: "var(--bg-card)",
                        border: errors.message
                          ? "1px solid rgb(239 68 68)"
                          : "1px solid var(--border-medium)",
                        color: "var(--text-primary)",
                        outline: "none",
                      }}
                      {...register("message", {
                        required: "Message is required.",
                        minLength: {
                          value: 10,
                          message: "Please write at least 10 characters.",
                        },
                      })}
                    />
                    {errors.message && (
                      <p className="font-body text-xs" style={{ color: "rgb(239 68 68)" }}>
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col gap-3 pt-1">
                    <button
                      type="submit"
                      disabled={submitState === "loading"}
                      className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-body font-semibold text-white transition-all hover:shadow-lg disabled:opacity-60"
                      style={{ background: "var(--accent)" }}
                    >
                      {submitState === "loading" ? "Sending..." : "Send Message"}
                    </button>

                    {submitState === "error" && (
                      <p
                        className="font-body text-sm"
                        style={{ color: "rgb(239 68 68)" }}
                      >
                        Something went wrong. Please email directly at{" "}
                        <a
                          href={`mailto:${contactEmail}`}
                          className="underline font-semibold"
                        >
                          {contactEmail}
                        </a>
                        .
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>

            {/* ── Right: Contact info + map ── */}
            <div className="flex flex-col gap-8">
              <div>
                <h2
                  className="font-display font-semibold mb-6"
                  style={{
                    fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
                    color: "var(--text-primary)",
                  }}
                >
                  Contact info
                </h2>

                <ul className="flex flex-col gap-5">
                  {/* Email */}
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">📧</span>
                    <div>
                      <p
                        className="font-body font-semibold text-sm mb-0.5"
                        style={{ color: "var(--text-muted)" }}
                      >
                        EMAIL
                      </p>
                      <a
                        href={`mailto:${contactEmail}`}
                        className="font-body transition-colors hover:underline"
                        style={{ color: "var(--primary)" }}
                      >
                        {contactEmail}
                      </a>
                      {/* [DEMO COPY — pending client review] */}
                    </div>
                  </li>

                  {/* Phone */}
                  {contactPhone ? (
                    <li className="flex items-start gap-3">
                      <span className="text-xl mt-0.5">📞</span>
                      <div>
                        <p
                          className="font-body font-semibold text-sm mb-0.5"
                          style={{ color: "var(--text-muted)" }}
                        >
                          PHONE
                        </p>
                        <a
                          href={`tel:${contactPhone.replace(/\D/g, "")}`}
                          className="font-body transition-colors hover:underline"
                          style={{ color: "var(--primary)" }}
                        >
                          {contactPhone}
                        </a>
                      </div>
                    </li>
                  ) : null}

                  {/* Location */}
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">📍</span>
                    <div>
                      <p
                        className="font-body font-semibold text-sm mb-0.5"
                        style={{ color: "var(--text-muted)" }}
                      >
                        LOCATION
                      </p>
                      <p className="font-body" style={{ color: "var(--text-secondary)" }}>
                        Manchester, NH, serving all of New Hampshire remotely
                      </p>
                    </div>
                  </li>

                  {/* Hours */}
                  {/* [DEMO COPY — pending client review] */}
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">🕐</span>
                    <div>
                      <p
                        className="font-body font-semibold text-sm mb-0.5"
                        style={{ color: "var(--text-muted)" }}
                      >
                        HOURS
                      </p>
                      <p className="font-body" style={{ color: "var(--text-secondary)" }}>
                        Mon-Fri 9am-6pm ET
                      </p>
                      <p className="font-body" style={{ color: "var(--text-secondary)" }}>
                        Tue evenings: free info sessions
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden shadow-md h-64">
                <iframe
                  src="https://maps.google.com/maps?q=Manchester,NH&output=embed&hl=en"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Manchester, NH map"
                />
              </div>

              {/* Booking CTA nudge */}
              <div
                className="rounded-xl p-6 flex flex-col gap-3"
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <p
                  className="font-display font-semibold text-lg"
                  style={{ color: "var(--text-primary)" }}
                >
                  Prefer to talk directly?
                </p>
                <p
                  className="font-body text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Skip the form and book a free 30-minute consultation. I will
                  call you at your preferred time.
                </p>
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-body font-semibold text-white transition-all hover:shadow-lg self-start text-sm"
                  style={{ background: "var(--accent)" }}
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
