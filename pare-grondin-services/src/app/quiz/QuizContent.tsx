"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { quizConfig } from "@/data/site";

// ─── Types ───────────────────────────────────────────────────────────────────

type Answers = Record<string, string>;

interface LeadData {
  name: string;
  email: string;
  phone: string;
}

interface LeadFormValues {
  name: string;
  email: string;
  phone: string;
}

// ─── Result copy keyed to monthly-spend answer ───────────────────────────────

const RESULT_COPY: Record<string, { headline: string; body: string }> = {
  "under-300": {
    headline: "Let's look at your full picture",
    body: "Honestly, health sharing might save you a little but your current costs are already competitive. Let's talk through your specific situation.",
  },
  "300-700": {
    headline: "You could save $50-$200/month",
    body: "Based on your answers, Impact could save you $50-$200/month -- or more depending on your PRA choice. Let's look at the real numbers.",
  },
  "700-1500": {
    headline: "Most people like you save $400-$800/month",
    body: "You're in the sweet spot. Most members in your situation save $400-$800/month. Book a free consultation to see your exact numbers.",
  },
  "over-1500": {
    headline: "Families like yours save $800-$1,400/month",
    body: "Families like yours typically save $800-$1,400/month with Impact. That's $9,000-$17,000 back in your budget annually.",
  },
};

const DEFAULT_RESULT = {
  headline: "Let's find your number",
  body: "Based on your answers, there's a good chance Impact Health Sharing could reduce your monthly costs. Book a free consultation to see your exact numbers.",
};

// ─── Ease constant ────────────────────────────────────────────────────────────

const EASE = [0, 0, 0.2, 1] as const;

// ─── Component ───────────────────────────────────────────────────────────────

export default function QuizContent() {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [leadData, setLeadData] = useState<LeadData>({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = quizConfig.steps.length; // 4

  // ── answer selection + auto-advance ────────────────────────────────────────
  function handleAnswer(stepId: string, value: string) {
    const updated = { ...answers, [stepId]: value };
    setAnswers(updated);
    setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 300);
  }

  // ── form submit ─────────────────────────────────────────────────────────────
  async function handleLeadSubmit(data: LeadFormValues) {
    setIsSubmitting(true);
    const captured: LeadData = { name: data.name, email: data.email, phone: data.phone };
    setLeadData(captured);
    try {
      await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers, leadData: captured }),
      });
    } catch {
      // non-blocking — proceed to result regardless
    }
    setIsSubmitting(false);
    setStep(totalSteps + 1); // step 5 = result
  }

  // ── reset ───────────────────────────────────────────────────────────────────
  function handleReset() {
    setStep(0);
    setAnswers({});
    setLeadData({ name: "", email: "", phone: "" });
    setIsSubmitting(false);
  }

  // ── result data ──────────────────────────────────────────────────────────────
  const monthlySpend = answers["monthly-spend"];
  const result = monthlySpend ? (RESULT_COPY[monthlySpend] ?? DEFAULT_RESULT) : DEFAULT_RESULT;

  return (
    <div style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
      {/* ── Hero header ─────────────────────────────────────────────────────── */}
      <header
        style={{ background: "var(--bg-hero)" }}
        className="py-16 px-4 text-center"
      >
        <p className="eyebrow mb-4">Free Savings Estimate</p>
        <h1
          className="font-display font-bold text-center"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.25rem)",
            color: "var(--text-on-dark)",
            lineHeight: 1.15,
          }}
        >
          {quizConfig.title}
        </h1>
        <p
          className="font-body mt-4 max-w-xl mx-auto"
          style={{ color: "var(--text-on-dark-muted)", fontSize: "1.125rem" }}
        >
          {quizConfig.subtitle}
        </p>
      </header>

      {/* ── Quiz card ───────────────────────────────────────────────────────── */}
      <main className="section-base px-4">
        <div
          className="max-w-2xl mx-auto rounded-2xl shadow-md"
          style={{
            background: "var(--bg-card)",
            padding: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          <AnimatePresence mode="wait">
            {/* ─ Steps 0-3: Quiz questions ─────────────────────────────────── */}
            {step < totalSteps && (
              <motion.div
                key={`question-${step}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                <QuizStep
                  step={step}
                  totalSteps={totalSteps}
                  currentStep={quizConfig.steps[step]}
                  answers={answers}
                  onAnswer={handleAnswer}
                  onBack={() => setStep((prev) => prev - 1)}
                />
              </motion.div>
            )}

            {/* ─ Step 4: Lead capture ──────────────────────────────────────── */}
            {step === totalSteps && (
              <motion.div
                key="lead-capture"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                <LeadCaptureStep
                  onBack={() => setStep(totalSteps - 1)}
                  onSubmit={handleLeadSubmit}
                  isSubmitting={isSubmitting}
                />
              </motion.div>
            )}

            {/* ─ Step 5: Result ────────────────────────────────────────────── */}
            {step === totalSteps + 1 && (
              <motion.div
                key="result"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                <ResultStep result={result} onReset={handleReset} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Compliance line ────────────────────────────────────────────────── */}
        <p
          className="font-mono text-center mt-6 max-w-2xl mx-auto"
          style={{ color: "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.04em" }}
        >
          Health sharing is not insurance. This quiz provides estimates only, not a guarantee of savings.
        </p>
      </main>
    </div>
  );
}

// ─── QuizStep sub-component ──────────────────────────────────────────────────

interface QuizOption {
  value: string;
  label: string;
  emoji: string;
}

interface QuizStepData {
  id: string;
  question: string;
  options: QuizOption[];
}

interface QuizStepProps {
  step: number;
  totalSteps: number;
  currentStep: QuizStepData;
  answers: Answers;
  onAnswer: (stepId: string, value: string) => void;
  onBack: () => void;
}

function QuizStep({ step, totalSteps, currentStep, answers, onAnswer, onBack }: QuizStepProps) {
  const progressPct = (step / totalSteps) * 100;

  return (
    <div>
      {/* Back button (steps 1-3) */}
      {step > 0 && (
        <button
          onClick={onBack}
          className="font-body mb-6 block"
          style={{
            color: "var(--text-muted)",
            fontSize: "0.875rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
          aria-label="Go back to previous question"
        >
          &larr; Back
        </button>
      )}

      {/* Progress indicator */}
      <p
        className="font-mono text-center mb-3"
        style={{ color: "var(--accent)", fontSize: "0.75rem", letterSpacing: "0.1em" }}
      >
        Step {step + 1} of {totalSteps}
      </p>

      {/* Progress bar */}
      <div
        className="rounded-full mb-8 mx-auto overflow-hidden"
        style={{
          width: "100%",
          height: "6px",
          background: "var(--border-subtle)",
        }}
        role="progressbar"
        aria-valuenow={step + 1}
        aria-valuemin={1}
        aria-valuemax={totalSteps}
      >
        <div
          className="rounded-full"
          style={{
            width: `${progressPct}%`,
            height: "100%",
            background: "var(--accent)",
            transition: "width 0.4s cubic-bezier(0, 0, 0.2, 1)",
          }}
        />
      </div>

      {/* Question */}
      <h2
        className="font-display font-semibold text-center mb-8"
        style={{
          fontSize: "clamp(1.35rem, 3vw, 1.75rem)",
          color: "var(--text-primary)",
          lineHeight: 1.25,
        }}
      >
        {currentStep.question}
      </h2>

      {/* Options grid */}
      <div className="grid grid-cols-2 gap-3">
        {currentStep.options.map((option) => {
          const isSelected = answers[currentStep.id] === option.value;
          return (
            <button
              key={option.value}
              onClick={() => onAnswer(currentStep.id, option.value)}
              className="flex flex-col items-center gap-2 p-5 rounded-xl border-2 transition-all text-center"
              style={{
                borderColor: isSelected ? "var(--accent)" : "var(--border-subtle)",
                background: isSelected ? "rgba(201,123,46,0.10)" : "var(--bg-card)",
                boxShadow: isSelected ? "0 2px 12px rgba(201,123,46,0.15)" : undefined,
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--primary)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 1px 6px rgba(77,122,94,0.12)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-subtle)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "";
                }
              }}
            >
              <span style={{ fontSize: "1.875rem" }} aria-hidden="true">
                {option.emoji}
              </span>
              <span
                className="font-body font-medium"
                style={{ fontSize: "0.875rem", color: "var(--text-primary)" }}
              >
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── LeadCaptureStep sub-component ──────────────────────────────────────────

interface LeadCaptureStepProps {
  onBack: () => void;
  onSubmit: (data: LeadFormValues) => Promise<void>;
  isSubmitting: boolean;
}

function LeadCaptureStep({ onBack, onSubmit, isSubmitting }: LeadCaptureStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormValues>({ mode: "onBlur" });

  return (
    <div>
      {/* Back button */}
      <button
        onClick={onBack}
        className="font-body mb-6 block"
        style={{
          color: "var(--text-muted)",
          fontSize: "0.875rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
        aria-label="Go back"
        type="button"
      >
        &larr; Back
      </button>

      {/* Progress indicator */}
      <p
        className="font-mono text-center mb-3"
        style={{ color: "var(--accent)", fontSize: "0.75rem", letterSpacing: "0.1em" }}
      >
        Step 5 of 4
      </p>

      {/* Progress bar -- full */}
      <div
        className="rounded-full mb-8 overflow-hidden"
        style={{ width: "100%", height: "6px", background: "var(--border-subtle)" }}
        role="progressbar"
        aria-valuenow={4}
        aria-valuemin={1}
        aria-valuemax={4}
      >
        <div
          className="rounded-full"
          style={{
            width: "100%",
            height: "100%",
            background: "var(--accent)",
            transition: "width 0.4s cubic-bezier(0, 0, 0.2, 1)",
          }}
        />
      </div>

      {/* Headline */}
      <h2
        className="font-display font-semibold text-center mb-2"
        style={{
          fontSize: "clamp(1.35rem, 3vw, 1.75rem)",
          color: "var(--text-primary)",
          lineHeight: 1.25,
        }}
      >
        Almost there! Where should we send your personalized estimate?
      </h2>
      <p
        className="font-body text-center mb-8"
        style={{ color: "var(--text-secondary)", fontSize: "0.9375rem" }}
      >
        Takes 30 seconds. No spam. Helen reviews these personally.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-col gap-5">
          {/* Name */}
          <div>
            <label
              htmlFor="lead-name"
              className="font-body font-medium block mb-1"
              style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}
            >
              Your name
            </label>
            <input
              id="lead-name"
              type="text"
              autoComplete="name"
              placeholder="First and last name"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 2, message: "Name must be at least 2 characters" },
              })}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                border: `1.5px solid ${errors.name ? "rgb(201,73,46)" : "var(--border-medium)"}`,
                background: "var(--bg-card)",
                color: "var(--text-primary)",
                fontSize: "1rem",
                fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
                outline: "none",
                transition: "border-color 0.2s",
              }}
            />
            {errors.name && (
              <p
                className="font-body mt-1"
                style={{ color: "rgb(201,73,46)", fontSize: "0.8rem" }}
                role="alert"
              >
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="lead-email"
              className="font-body font-medium block mb-1"
              style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}
            >
              Email address
            </label>
            <input
              id="lead-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                border: `1.5px solid ${errors.email ? "rgb(201,73,46)" : "var(--border-medium)"}`,
                background: "var(--bg-card)",
                color: "var(--text-primary)",
                fontSize: "1rem",
                fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
                outline: "none",
                transition: "border-color 0.2s",
              }}
            />
            {errors.email && (
              <p
                className="font-body mt-1"
                style={{ color: "rgb(201,73,46)", fontSize: "0.8rem" }}
                role="alert"
              >
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone (optional) */}
          <div>
            <label
              htmlFor="lead-phone"
              className="font-body font-medium block mb-1"
              style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}
            >
              Phone{" "}
              <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span>
            </label>
            <input
              id="lead-phone"
              type="tel"
              autoComplete="tel"
              placeholder="(603) 555-0100"
              {...register("phone")}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                border: "1.5px solid var(--border-medium)",
                background: "var(--bg-card)",
                color: "var(--text-primary)",
                fontSize: "1rem",
                fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
                outline: "none",
                transition: "border-color 0.2s",
              }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: "100%",
              padding: "1rem 1.5rem",
              borderRadius: "0.625rem",
              background: isSubmitting ? "var(--border-medium)" : "var(--accent)",
              color: isSubmitting ? "var(--text-muted)" : "var(--text-on-dark)",
              fontSize: "1rem",
              fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
              fontWeight: 600,
              border: "none",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              transition: "background 0.2s, transform 0.1s",
              marginTop: "0.25rem",
            }}
          >
            {isSubmitting ? "Sending..." : "Get My Savings Estimate"}
          </button>
        </div>
      </form>
    </div>
  );
}

// ─── ResultStep sub-component ────────────────────────────────────────────────

interface ResultStepProps {
  result: { headline: string; body: string };
  onReset: () => void;
}

function ResultStep({ result, onReset }: ResultStepProps) {
  return (
    <div className="text-center">
      <p
        className="font-mono mb-3"
        style={{ color: "var(--accent)", fontSize: "0.75rem", letterSpacing: "0.1em" }}
      >
        Your Estimate
      </p>

      {/* Savings headline */}
      <h2
        className="font-display font-bold mb-4"
        style={{
          fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
          color: "var(--accent)",
          lineHeight: 1.2,
        }}
      >
        {result.headline}
      </h2>

      {/* Explanation */}
      <p
        className="font-body mb-8 max-w-md mx-auto"
        style={{ color: "var(--text-secondary)", fontSize: "1.0625rem", lineHeight: 1.65 }}
      >
        {result.body}
      </p>

      {/* Primary CTA */}
      <Link
        href="/booking"
        style={{
          display: "inline-block",
          padding: "1rem 2rem",
          borderRadius: "0.625rem",
          background: "var(--accent)",
          color: "var(--text-on-dark)",
          fontSize: "1.0625rem",
          fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
          fontWeight: 600,
          textDecoration: "none",
          transition: "background 0.2s, transform 0.1s",
        }}
      >
        {quizConfig.resultCta}
      </Link>

      {/* Trust line */}
      <p
        className="font-body mt-4"
        style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}
      >
        100% free. No pressure. Helen responds to every consultation request personally.
      </p>

      {/* Retake */}
      <div className="mt-6">
        <button
          onClick={onReset}
          style={{
            background: "none",
            border: "none",
            color: "var(--text-muted)",
            fontSize: "0.875rem",
            fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)",
            cursor: "pointer",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          Retake the Quiz
        </button>
      </div>
    </div>
  );
}
