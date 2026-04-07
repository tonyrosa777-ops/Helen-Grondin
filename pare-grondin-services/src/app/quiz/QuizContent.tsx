"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookingCalendar from "@/components/BookingCalendar";
import { quizConfig } from "@/data/site";

// ─── Types ───────────────────────────────────────────────────────────────────

type Answers = Record<string, string>;

// ─── Result copy keyed to monthly-spend answer ───────────────────────────────

const RESULT_COPY: Record<string, { headline: string; body: string }> = {
  "under-300": {
    headline: "Let's look at your full picture",
    body: "Honestly, health sharing might save you a little but your current costs are already competitive. Let's talk through your specific situation.",
  },
  "300-700": {
    headline: "You could save $50–$200/month",
    body: "Based on your answers, Impact could save you $50–$200/month — or more depending on your PRA choice. Let's look at the real numbers.",
  },
  "700-1500": {
    headline: "Most people like you save $400–$800/month",
    body: "You're in the sweet spot. Most members in your situation save $400–$800/month. Book a free consultation below to see your exact numbers.",
  },
  "over-1500": {
    headline: "Families like yours save $800–$1,400/month",
    body: "Families like yours typically save $800–$1,400/month with Impact. That's $9,000–$17,000 back in your budget annually. Pick a time below.",
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

  const totalSteps = quizConfig.steps.length; // 4 questions

  function handleAnswer(stepId: string, value: string) {
    const updated = { ...answers, [stepId]: value };
    setAnswers(updated);
    setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 300);
  }

  function handleReset() {
    setStep(0);
    setAnswers({});
  }

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
            {/* ─ Steps 0–3: Questions ──────────────────────────────────────── */}
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

            {/* ─ Step 4: Result + inline calendar ─────────────────────────── */}
            {step === totalSteps && (
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

        {/* ── Compliance line ─────────────────────────────────────────────── */}
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

// ─── QuizStep ────────────────────────────────────────────────────────────────

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
      {step > 0 && (
        <button
          onClick={onBack}
          className="font-body mb-6 block"
          style={{ color: "var(--text-muted)", fontSize: "0.875rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
          aria-label="Go back to previous question"
        >
          &larr; Back
        </button>
      )}

      <p
        className="font-mono text-center mb-3"
        style={{ color: "var(--accent)", fontSize: "0.75rem", letterSpacing: "0.1em" }}
      >
        Step {step + 1} of {totalSteps}
      </p>

      <div
        className="rounded-full mb-8 mx-auto overflow-hidden"
        style={{ width: "100%", height: "6px", background: "var(--border-subtle)" }}
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

      <h2
        className="font-display font-semibold text-center mb-8"
        style={{ fontSize: "clamp(1.35rem, 3vw, 1.75rem)", color: "var(--text-primary)", lineHeight: 1.25 }}
      >
        {currentStep.question}
      </h2>

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
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 1px 6px rgba(77,122,94,0.12)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-subtle)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "";
                }
              }}
            >
              <span style={{ fontSize: "1.875rem" }} aria-hidden="true">{option.emoji}</span>
              <span className="font-body font-medium" style={{ fontSize: "0.875rem", color: "var(--text-primary)" }}>
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── ResultStep ──────────────────────────────────────────────────────────────

interface ResultStepProps {
  result: { headline: string; body: string };
  onReset: () => void;
}

function ResultStep({ result, onReset }: ResultStepProps) {
  return (
    <div>
      <p
        className="font-mono text-center mb-3"
        style={{ color: "var(--accent)", fontSize: "0.75rem", letterSpacing: "0.1em" }}
      >
        Your Estimate
      </p>

      <h2
        className="font-display font-bold text-center mb-4"
        style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "var(--accent)", lineHeight: 1.2 }}
      >
        {result.headline}
      </h2>

      <p
        className="font-body text-center mb-8 max-w-md mx-auto"
        style={{ color: "var(--text-secondary)", fontSize: "1.0625rem", lineHeight: 1.65 }}
      >
        {result.body}
      </p>

      {/* Inline booking calendar */}
      <div className="mb-6">
        <p
          className="font-mono text-center mb-4"
          style={{ color: "var(--text-muted)", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
        >
          Pick a time — free 30-min consultation
        </p>
        <BookingCalendar />
      </div>

      {/* Trust line */}
      <p className="font-body text-center mt-4" style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
        100% free. No pressure. Helen responds to every consultation request personally.
      </p>

      <div className="mt-6 text-center">
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
