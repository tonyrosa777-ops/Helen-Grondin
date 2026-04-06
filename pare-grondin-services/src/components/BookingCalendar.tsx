"use client";

import { useState, useEffect } from "react";

// ── Helpers ──────────────────────────────────────────────────────────────────

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAY_LABELS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

const TIME_SLOTS = [
  "9:00 AM","10:00 AM","11:00 AM",
  "1:00 PM","2:00 PM","3:00 PM","4:00 PM",
];

function getMonthGrid(year: number, month: number) {
  const firstDow = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array(firstDow).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

function isSelectable(year: number, month: number, day: number): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const date = new Date(year, month, day);
  const dow = date.getDay();
  return date > today && dow !== 0 && dow !== 6; // future weekdays only
}

function formatDate(year: number, month: number, day: number): string {
  return new Date(year, month, day).toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric",
  });
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function BookingCalendar() {
  const now = new Date();
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());
  const [selDay, setSelDay] = useState<number | null>(null);
  const [selTime, setSelTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  // Load Calendly popup assets once
  useEffect(() => {
    if (!document.querySelector('link[href*="calendly.com/assets"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[src*="calendly.com/assets"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  function prevMonth() {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
    setSelDay(null); setSelTime(null);
  }

  function nextMonth() {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
    setSelDay(null); setSelTime(null);
  }

  function handleDayClick(day: number | null) {
    if (!day || !isSelectable(viewYear, viewMonth, day)) return;
    setSelDay(day);
    setSelTime(null);
    setConfirmed(false);
  }

  function handleConfirm() {
    setConfirmed(true);
    const base =
      process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/helengrondin";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && (window as any).Calendly) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).Calendly.initPopupWidget({ url: base });
    } else {
      window.open(base, "_blank", "noopener,noreferrer");
    }
  }

  const cells = getMonthGrid(viewYear, viewMonth);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isPrevDisabled =
    viewYear === now.getFullYear() && viewMonth === now.getMonth();

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-md"
      style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
    >
      <div className="flex flex-col lg:flex-row">

        {/* ── LEFT: Month grid ─────────────────────────────────── */}
        <div className="flex-1 p-6 md:p-8">

          {/* Month nav */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevMonth}
              disabled={isPrevDisabled}
              aria-label="Previous month"
              className="w-9 h-9 rounded-lg flex items-center justify-center font-body font-bold text-lg transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
              style={{ color: "var(--text-secondary)", background: "var(--bg-elevated)" }}
            >
              ‹
            </button>
            <p
              className="font-display font-semibold text-base"
              style={{ color: "var(--text-primary)" }}
            >
              {MONTH_NAMES[viewMonth]} {viewYear}
            </p>
            <button
              onClick={nextMonth}
              aria-label="Next month"
              className="w-9 h-9 rounded-lg flex items-center justify-center font-body font-bold text-lg transition-colors"
              style={{ color: "var(--text-secondary)", background: "var(--bg-elevated)" }}
            >
              ›
            </button>
          </div>

          {/* Day-of-week headers */}
          <div className="grid grid-cols-7 mb-2">
            {DAY_LABELS.map((d) => (
              <div
                key={d}
                className="text-center font-mono text-[10px] uppercase tracking-widest py-1"
                style={{ color: "var(--text-muted)" }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 gap-1">
            {cells.map((day, i) => {
              if (day === null) return <div key={`empty-${i}`} />;
              const selectable = isSelectable(viewYear, viewMonth, day);
              const isSelected = selDay === day;
              const isToday =
                day === now.getDate() &&
                viewMonth === now.getMonth() &&
                viewYear === now.getFullYear();

              return (
                <button
                  key={day}
                  onClick={() => handleDayClick(day)}
                  disabled={!selectable}
                  aria-label={`${MONTH_NAMES[viewMonth]} ${day}`}
                  aria-pressed={isSelected}
                  className="aspect-square rounded-lg flex items-center justify-center font-body text-sm font-medium transition-all"
                  style={{
                    background: isSelected
                      ? "var(--primary)"
                      : "transparent",
                    color: isSelected
                      ? "#fff"
                      : selectable
                      ? "var(--text-primary)"
                      : "var(--text-muted)",
                    cursor: selectable ? "pointer" : "not-allowed",
                    opacity: selectable ? 1 : 0.35,
                    outline: isToday && !isSelected
                      ? "1px solid var(--primary)"
                      : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (selectable && !isSelected)
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "var(--primary-muted)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected)
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "transparent";
                  }}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mt-5">
            <div className="flex items-center gap-1.5">
              <div
                className="w-3 h-3 rounded-sm"
                style={{ background: "var(--primary)" }}
              />
              <span className="font-body text-xs" style={{ color: "var(--text-muted)" }}>
                Selected
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div
                className="w-3 h-3 rounded-sm"
                style={{ outline: "1px solid var(--primary)" }}
              />
              <span className="font-body text-xs" style={{ color: "var(--text-muted)" }}>
                Today
              </span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Time slots + confirm ──────────────────────── */}
        <div
          className="lg:w-64 p-6 md:p-8 flex flex-col gap-5"
          style={{ borderLeft: "1px solid var(--border-subtle)" }}
        >
          {!selDay ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center py-8">
              <span className="text-4xl">📅</span>
              <p className="font-body text-sm" style={{ color: "var(--text-muted)" }}>
                Select a date on the left to see available times
              </p>
            </div>
          ) : (
            <>
              <div>
                <p
                  className="font-mono text-[10px] uppercase tracking-widest mb-1"
                  style={{ color: "var(--accent)" }}
                >
                  Selected date
                </p>
                <p
                  className="font-display font-semibold text-sm leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {formatDate(viewYear, viewMonth, selDay)}
                </p>
              </div>

              <div>
                <p
                  className="font-mono text-[10px] uppercase tracking-widest mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  Available times
                </p>
                <div className="flex flex-col gap-2">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelTime(t)}
                      aria-pressed={selTime === t}
                      className="w-full py-2.5 rounded-lg font-body text-sm font-medium transition-all text-left px-4"
                      style={{
                        background:
                          selTime === t ? "var(--primary)" : "var(--bg-elevated)",
                        color: selTime === t ? "#fff" : "var(--text-secondary)",
                        border: "1px solid",
                        borderColor:
                          selTime === t ? "var(--primary)" : "var(--border-subtle)",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {selTime && (
                <div className="flex flex-col gap-2 pt-1">
                  <button
                    onClick={handleConfirm}
                    className="btn-accent w-full py-3 rounded-lg font-body font-semibold text-white text-sm"
                  >
                    Confirm Booking →
                  </button>
                  {confirmed && (
                    <p className="font-body text-xs text-center" style={{ color: "var(--text-muted)" }}>
                      Opening Calendly to finalize…
                    </p>
                  )}
                  <p className="font-body text-xs text-center" style={{ color: "var(--text-muted)" }}>
                    No credit card required
                  </p>
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
}
