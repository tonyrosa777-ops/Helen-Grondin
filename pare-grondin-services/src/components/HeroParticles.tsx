"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  opacityTarget: number;
  opacitySpeed: number;
  type: "firefly" | "ember" | "glimmer";
  color: string;
  age: number;
  maxAge: number;
  glimmerPhase: number;
}

/* ------------------------------------------------------------------ */
/*  Colour palettes                                                     */
/*  Amber (--accent) and sage (--primary) — no white, no generic gold  */
/* ------------------------------------------------------------------ */
const FIREFLY_COLORS = [
  "rgba(201, 123, 46,",   // amber --accent
  "rgba(201, 123, 46,",   // amber --accent (weighted 2x)
  "rgba(77, 122, 94,",    // sage --primary
  "rgba(170, 100, 32,",   // amber-dark
];

const EMBER_COLORS = [
  "rgba(201, 123, 46,",   // amber --accent
  "rgba(170, 100, 32,",   // amber-dark
  "rgba(77, 122, 94,",    // sage --primary
  "rgba(201, 123, 46,",   // amber --accent (weighted)
];

const GLIMMER_COLOR = "rgba(201, 123, 46,";

/* ------------------------------------------------------------------ */
/*  Factory helpers                                                     */
/*  Velocity capped at 0.3 max — quiet organic drift, not sparkling    */
/* ------------------------------------------------------------------ */
function mkFirefly(w: number, h: number): Particle {
  const color = FIREFLY_COLORS[Math.floor(Math.random() * FIREFLY_COLORS.length)];
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.28,
    vy: (Math.random() - 0.5) * 0.28,
    size: Math.random() * 1.6 + 0.5,
    opacity: Math.random() * 0.4 + 0.05,
    opacityTarget: Math.random() * 0.6 + 0.1,
    opacitySpeed: Math.random() * 0.008 + 0.002,
    type: "firefly",
    color,
    age: 0,
    maxAge: Infinity,
    glimmerPhase: 0,
  };
}

function mkEmber(w: number, h: number): Particle {
  const color = EMBER_COLORS[Math.floor(Math.random() * EMBER_COLORS.length)];
  return {
    x: Math.random() * w * 0.6,
    y: h + Math.random() * 40,
    // Very slow upward drift — max ~0.3px/frame
    vx: (Math.random() - 0.5) * 0.3,
    vy: -(Math.random() * 0.28 + 0.10),
    size: Math.random() * 2.2 + 0.7,
    opacity: 0,
    opacityTarget: Math.random() * 0.55 + 0.2,
    opacitySpeed: Math.random() * 0.015 + 0.006,
    type: "ember",
    color,
    age: 0,
    maxAge: Math.random() * 400 + 250,
    glimmerPhase: 0,
  };
}

function mkGlimmer(w: number, h: number): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h * 0.85,
    vx: 0,
    vy: 0,
    size: Math.random() * 9 + 5,
    opacity: 0,
    opacityTarget: 0.65,
    opacitySpeed: 0.03,
    type: "glimmer",
    color: GLIMMER_COLOR,
    age: 0,
    maxAge: Math.random() * 100 + 60,
    glimmerPhase: 0,
  };
}

/* ------------------------------------------------------------------ */
/*  Draw the 4-pointed glimmer star                                     */
/* ------------------------------------------------------------------ */
function drawGlimmer(ctx: CanvasRenderingContext2D, p: Particle) {
  const { x, y, size, opacity, color } = p;
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.translate(x, y);

  for (let i = 0; i < 4; i++) {
    ctx.save();
    ctx.rotate((i * Math.PI) / 2);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(size * 0.12, size * 0.12);
    ctx.lineTo(0, size);
    ctx.lineTo(-size * 0.12, size * 0.12);
    ctx.closePath();
    ctx.fillStyle = color + "1)";
    ctx.fill();
    ctx.restore();
  }

  // Soft centre glow
  const g = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 0.45);
  g.addColorStop(0, color + "0.85)");
  g.addColorStop(1, color + "0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.45, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

/* ------------------------------------------------------------------ */
/*  Layout params — mobile reduces count 50%                           */
/* ------------------------------------------------------------------ */
function getLayout(w: number) {
  const isMobile = w < 768;
  return {
    fireflies: isMobile ? 55 : 110,
    embers: isMobile ? 18 : 36,
  };
}

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */
export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = prefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let w = 0;
    let h = 0;
    let particles: Particle[] = [];

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * window.devicePixelRatio;
      canvas.height = h * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    // Seed particles
    const { fireflies, embers } = getLayout(w);
    for (let i = 0; i < fireflies; i++) particles.push(mkFirefly(w, h));
    for (let i = 0; i < embers; i++) {
      const e = mkEmber(w, h);
      // Stagger initial positions so they don't all appear at once
      e.y = Math.random() * h;
      e.age = Math.floor(Math.random() * e.maxAge * 0.5);
      e.opacity = Math.random() * e.opacityTarget;
      particles.push(e);
    }

    let glimmerCooldown = 0;

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      // Occasionally spawn a glimmer
      glimmerCooldown--;
      if (glimmerCooldown <= 0 && Math.random() < 0.05) {
        particles.push(mkGlimmer(w, h));
        glimmerCooldown = 50 + Math.random() * 50;
      }

      // Cull dead particles
      particles = particles.filter(
        (p) => p.type === "firefly" || p.age <= p.maxAge
      );

      // Replenish embers at half the target count
      const { embers: emberTarget } = getLayout(w);
      const emberCount = particles.filter((p) => p.type === "ember").length;
      if (emberCount < emberTarget) particles.push(mkEmber(w, h));

      for (const p of particles) {
        p.age++;
        p.x += p.vx;
        p.y += p.vy;

        /* -- FIREFLY (slow organic drift, wraps edges) -- */
        if (p.type === "firefly") {
          if (p.x < -4) p.x = w + 4;
          if (p.x > w + 4) p.x = -4;
          if (p.y < -4) p.y = h + 4;
          if (p.y > h + 4) p.y = -4;

          // Gentle twinkle — chase target opacity
          const diff = p.opacityTarget - p.opacity;
          if (Math.abs(diff) < 0.01) {
            p.opacityTarget = Math.random() * 0.5 + 0.05;
          }
          p.opacity += diff * p.opacitySpeed * 7;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color + Math.max(0, Math.min(1, p.opacity)) + ")";
          ctx.fill();
        }

        /* -- EMBER (slow upward drift) -- */
        else if (p.type === "ember") {
          // Very slight horizontal sway — feels organic
          p.vx += (Math.random() - 0.5) * 0.018;
          p.vx *= 0.97;
          // Keep velocity capped at 0.3
          p.vx = Math.max(-0.3, Math.min(0.3, p.vx));

          const lifeRatio = p.age / p.maxAge;
          if (lifeRatio < 0.2) {
            p.opacity = Math.min(p.opacity + p.opacitySpeed, p.opacityTarget);
          } else if (lifeRatio > 0.7) {
            p.opacity = Math.max(0, p.opacity - p.opacitySpeed * 1.5);
          }

          const clampedOp = Math.max(0, Math.min(1, p.opacity));

          // Soft glow halo
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
          glow.addColorStop(0, p.color + clampedOp * 0.5 + ")");
          glow.addColorStop(1, p.color + "0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
          ctx.fill();

          // Core dot
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color + Math.min(clampedOp * 1.6, 1) + ")";
          ctx.fill();
        }

        /* -- GLIMMER -- */
        else if (p.type === "glimmer") {
          p.glimmerPhase++;
          const lifeRatio = p.age / p.maxAge;
          if (lifeRatio < 0.3) {
            p.opacity = Math.min(p.opacity + p.opacitySpeed, p.opacityTarget);
          } else {
            p.opacity = Math.max(0, p.opacity - p.opacitySpeed * 0.6);
          }
          drawGlimmer(ctx, p);
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
      aria-hidden="true"
    />
  );
}
