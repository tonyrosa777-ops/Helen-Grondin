"use client";
// HealthShieldCanvas — brand animation for Helen Grondin hero (right panel)
//
// Phase 1: Gold particles stream from all edges, converging to center
// Phase 2: Forge flash — 2 ring pulses + 10 spark lines fire outward
// Phase 3: Health cross extrudes upward with spring overshoot;
//           cools white-hot → amber → sage (brand colors)
// Phase 4: Protective arc draws clockwise around the settled cross
// Idle:    Amber-sage breathing pulse on cross + arc
//
// Pattern: mirrors ForgeCanvas (placed-right-fence) — canvas 2D, no Three.js
// Respects prefers-reduced-motion (shows settled cross immediately)

import { useEffect, useRef } from "react";

// ── Heat palette: white-hot → amber → sage (brand cool state) ─────────────────
const HEAT: [number, number, number, number][] = [
  [0.00, 255, 255, 255],   // white hot
  [0.18, 255, 175,  60],   // amber hot
  [0.42, 201, 123,  46],   // brand amber  --accent
  [0.72, 120, 152, 118],   // transitioning
  [1.00,  77, 122,  94],   // brand sage   --primary
];

function heatRGB(t: number): [number, number, number] {
  const c = Math.max(0, Math.min(1, t));
  for (let i = 0; i < HEAT.length - 1; i++) {
    const [t0, r0, g0, b0] = HEAT[i];
    const [t1, r1, g1, b1] = HEAT[i + 1];
    if (c >= t0 && c <= t1) {
      const f = (c - t0) / (t1 - t0);
      return [r0 + (r1 - r0) * f, g0 + (g1 - g0) * f, b0 + (b1 - b0) * f].map(Math.round) as [number, number, number];
    }
  }
  return [77, 122, 94];
}

// Spring easing — overshoot at top, settles back
function springOut(t: number): number {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  return 1 - Math.pow(2, -9 * t) * Math.cos(t * 10 * Math.PI * 0.68);
}

interface StreamParticle {
  sx: number; sy: number;
  cpx: number; cpy: number;
  t: number; speed: number; size: number;
}

interface Ring { x: number; y: number; r0: number; r1: number; born: number; dur: number; }
interface Spark { x: number; y: number; angle: number; maxLen: number; born: number; dur: number; white: boolean; }

type AnimPhase = "stream" | "rise" | "cool" | "arc" | "idle";

export default function HealthShieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Timing
    const RISE_MS  = 520;   // ms for cross to extrude
    const COOL_MS  = 2400;  // ms to cool from forge flash
    const ARC_DUR  = 900;   // ms to draw shield arc

    // ── Scene state ──────────────────────────────────────────────────────────
    let raf: number;
    let t0: number | null = null;
    let particles: StreamParticle[] = [];
    let rings:  Ring[]  = [];
    let sparks: Spark[] = [];

    let crossX = 0, crossY = 0;
    let armLen = 90;
    let armW   = 24;
    let arcR   = 120;

    let phase: AnimPhase = "stream";
    let forgeAt  = -1;
    let arcStart = -1;
    let coolingT = 0;
    let crossScale = 0;
    let arcProgress = 0;
    let breathe = 0;

    // ── Spawn particles from canvas edges ────────────────────────────────────
    function spawnStreams(W: number, H: number) {
      particles = [];
      const n = 16;
      for (let i = 0; i < n; i++) {
        const angle = (i / n) * Math.PI * 2 + Math.random() * 0.4;
        const dist  = Math.max(W, H) * 0.60;
        const sx    = crossX + Math.cos(angle) * dist;
        const sy    = crossY + Math.sin(angle) * dist;
        const cpx   = sx + (crossX - sx) * 0.32 + (Math.random() - 0.5) * 65;
        const cpy   = sy + (crossY - sy) * 0.32 + (Math.random() - 0.5) * 65;
        particles.push({
          sx, sy, cpx, cpy,
          t: 0,
          speed: 0.0055 + Math.random() * 0.004,
          size: 1.3 + Math.random() * 1.3,
        });
      }
    }

    // ── Forge flash: rings + sparks ───────────────────────────────────────────
    function fireForge(now: number) {
      rings.push({ x: crossX, y: crossY, r0: 4, r1: arcR * 0.58, born: now, dur: 440 });
      rings.push({ x: crossX, y: crossY, r0: 2, r1: arcR * 0.30, born: now, dur: 260 });
      const n = 11;
      for (let i = 0; i < n; i++) {
        const angle = (i / n) * Math.PI * 2 + Math.random() * 0.45;
        sparks.push({
          x: crossX, y: crossY, angle,
          maxLen: 30 + Math.random() * 44,
          born: now, dur: 280 + Math.random() * 130,
          white: Math.random() > 0.42,
        });
      }
    }

    // ── Draw the health cross ─────────────────────────────────────────────────
    function drawCross(scale: number, coolT: number) {
      const ct = Math.max(0, Math.min(1, coolT));
      const [r, g, b] = heatRGB(ct);
      const glow = Math.max(0, 1 - ct);
      const bl   = glow * 34 + (phase === "idle" ? 5 + breathe * 9 : 3);

      ctx.save();
      ctx.shadowColor = `rgb(${r},${g},${b})`;
      ctx.shadowBlur  = bl;

      const al = armLen * scale;
      const aw = armW   * scale;
      const mn = Math.min, rn = Math.round;

      const grad = ctx.createLinearGradient(crossX, crossY - al, crossX, crossY + al);
      grad.addColorStop(0,   `rgba(${rn(r*.38)},${rn(g*.38)},${rn(b*.38)},0.92)`);
      grad.addColorStop(0.5, `rgba(${r},${g},${b},1)`);
      grad.addColorStop(1,   `rgba(${mn(255,r+44)},${mn(255,g+44)},${mn(255,b+20)},0.92)`);
      ctx.fillStyle = grad;

      // Vertical arm
      const vr = aw * 0.18;
      ctx.beginPath();
      ctx.roundRect(crossX - aw / 2, crossY - al, aw, al * 2, vr);
      ctx.fill();

      // Horizontal arm
      ctx.beginPath();
      ctx.roundRect(crossX - al, crossY - aw / 2, al * 2, aw, vr);
      ctx.fill();

      // Edge shimmer stroke
      ctx.shadowBlur  = 0;
      ctx.strokeStyle = `rgba(${mn(255,r+65)},${mn(255,g+65)},${mn(255,b+22)},${.20 + glow * .52})`;
      ctx.lineWidth   = 0.85;
      ctx.beginPath();
      ctx.roundRect(crossX - aw / 2, crossY - al, aw, al * 2, vr);
      ctx.stroke();
      ctx.beginPath();
      ctx.roundRect(crossX - al, crossY - aw / 2, al * 2, aw, vr);
      ctx.stroke();

      ctx.restore();
    }

    // ── Draw protective arc ───────────────────────────────────────────────────
    function drawArc(progress: number, coolT: number) {
      if (progress <= 0) return;
      const ct = Math.max(0, Math.min(1, coolT));
      const [r, g, b] = heatRGB(ct * 0.85 + 0.12);
      const alpha = phase === "idle" ? 0.22 + breathe * 0.14 : 0.30;

      ctx.save();
      ctx.beginPath();
      ctx.arc(crossX, crossY, arcR, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * progress);
      ctx.strokeStyle = `rgba(${r},${g},${b},${alpha.toFixed(2)})`;
      ctx.lineWidth   = armW * 0.18;
      ctx.lineCap     = "round";
      ctx.shadowColor = `rgb(${r},${g},${b})`;
      ctx.shadowBlur  = phase === "idle" ? 10 + breathe * 6 : 14;
      ctx.stroke();
      ctx.restore();
    }

    // ── Resize: recalculate layout and restart animation ─────────────────────
    function resize() {
      if (!canvas) return;
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const W = canvas.width;
      const H = canvas.height;

      // Cross center: slightly above vertical center of the panel
      crossX = W * 0.50;
      crossY = H * 0.46;

      const minDim = Math.min(W, H);
      armLen = minDim * 0.20;
      armW   = minDim * 0.050;
      arcR   = armLen * 1.55;

      // Reset
      phase = "stream"; forgeAt = -1; arcStart = -1;
      coolingT = 0; crossScale = 0; arcProgress = 0; breathe = 0;
      rings = []; sparks = []; t0 = null;

      if (reduced) {
        phase = "idle"; coolingT = 1; crossScale = 1; arcProgress = 1;
      } else {
        spawnStreams(W, H);
      }
    }

    // ── Main tick ─────────────────────────────────────────────────────────────
    function tick(now: number) {
      if (!canvas || !ctx) { raf = requestAnimationFrame(tick); return; }
      if (t0 === null) t0 = now;
      const elapsed = now - t0;
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      // ── State machine ──────────────────────────────────────────────────────
      if (phase === "stream") {
        for (const p of particles) p.t = Math.min(1, p.t + p.speed);
        const done = particles.every(p => p.t >= 0.94);
        if (done && forgeAt < 0) {
          forgeAt = elapsed;
          fireForge(now);
          particles = [];
          phase = "rise";
        }
      }

      if (phase === "rise") {
        const rt = Math.min(1, (elapsed - forgeAt) / RISE_MS);
        crossScale = springOut(rt);
        coolingT   = Math.max(0, (elapsed - forgeAt - 80) / COOL_MS);
        if (rt >= 1) { crossScale = 1; phase = "cool"; }
      }

      if (phase === "cool") {
        coolingT = Math.min(1, (elapsed - forgeAt - 80) / COOL_MS);
        if (coolingT >= 0.80 && arcStart < 0) { arcStart = elapsed; phase = "arc"; }
      }

      if (phase === "arc") {
        coolingT    = Math.min(1, (elapsed - forgeAt - 80) / COOL_MS);
        arcProgress = Math.min(1, (elapsed - arcStart) / ARC_DUR);
        if (arcProgress >= 1) phase = "idle";
      }

      if (phase === "idle") {
        breathe    = (Math.sin(elapsed * 0.00088) * 0.5) + 0.5;
        coolingT   = 0.90 + Math.sin(elapsed * 0.00088) * 0.07;
        arcProgress = 1;
        crossScale = 1;
      }

      // ── Draw convergence particles ─────────────────────────────────────────
      if (phase === "stream") {
        for (const p of particles) {
          const t  = p.t;
          const bx = (1-t)*(1-t)*p.sx + 2*(1-t)*t*p.cpx + t*t*crossX;
          const by = (1-t)*(1-t)*p.sy + 2*(1-t)*t*p.cpy + t*t*crossY;

          const bright = 0.42 + t * 0.58;
          const alpha  = t < 0.1 ? t / 0.1 : t > 0.88 ? (1-t) / 0.12 : 1;
          const pr = Math.round(184 + 71 * t);
          const pg = Math.round(134 + 81 * t);
          const pb = Math.round(11  + 64 * t);

          ctx.save();
          ctx.beginPath();
          ctx.arc(bx, by, p.size * bright, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${pr},${pg},${pb},${(alpha * .88).toFixed(2)})`;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(bx, by, p.size * bright * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,200,60,${(alpha * .09).toFixed(2)})`;
          ctx.fill();
          ctx.restore();
        }
      }

      // ── Draw rings ────────────────────────────────────────────────────────
      for (let i = rings.length - 1; i >= 0; i--) {
        const rg = rings[i];
        const tp = (now - rg.born) / rg.dur;
        if (tp >= 1) { rings.splice(i, 1); continue; }
        const rad   = rg.r0 + (rg.r1 - rg.r0) * tp;
        const alpha = (1 - tp) * 0.88;
        ctx.save();
        ctx.beginPath();
        ctx.arc(rg.x, rg.y, rad, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,215,0,${alpha.toFixed(2)})`;
        ctx.lineWidth   = 1.5 + (1 - tp) * 1.4;
        ctx.shadowColor = "#FFD700";
        ctx.shadowBlur  = 8;
        ctx.stroke();
        ctx.restore();
      }

      // ── Draw sparks ───────────────────────────────────────────────────────
      for (let i = sparks.length - 1; i >= 0; i--) {
        const sp = sparks[i];
        const tp = (now - sp.born) / sp.dur;
        if (tp >= 1) { sparks.splice(i, 1); continue; }
        const len   = sp.maxLen * Math.min(1, tp * 2.4);
        const alpha = Math.pow(1 - tp, 1.6);
        const ex    = sp.x + Math.cos(sp.angle) * len;
        const ey    = sp.y + Math.sin(sp.angle) * len;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(sp.x, sp.y);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = sp.white
          ? `rgba(255,255,255,${(alpha * .88).toFixed(2)})`
          : `rgba(255,215,0,${(alpha * .85).toFixed(2)})`;
        ctx.lineWidth   = 0.9 + (1 - tp);
        ctx.lineCap     = "round";
        ctx.shadowColor = sp.white ? "#FFFFFF" : "#FFD700";
        ctx.shadowBlur  = 5;
        ctx.stroke();
        ctx.restore();
      }

      // ── Draw cross + arc ──────────────────────────────────────────────────
      if (arcProgress > 0) drawArc(arcProgress, coolingT);
      if (crossScale > 0) drawCross(crossScale, coolingT);

      raf = requestAnimationFrame(tick);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    raf = requestAnimationFrame(tick);

    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
