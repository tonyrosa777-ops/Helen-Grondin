"use client";

import { useEffect, useRef } from "react";

/*
 * PageHeroParticles — lightweight floating dot system for inner-page hero headers.
 * Lighter than HeroParticles: fewer particles, slower, purely ambient.
 * Designed to live inside a `position: relative` hero section at z-0.
 */

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  alphaDir: number;
  color: string;
}

const COLORS = [
  "rgba(201, 123, 46,",  // amber
  "rgba(77, 122, 94,",   // sage
  "rgba(245, 245, 240,", // cream
];

export default function PageHeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let dots: Dot[] = [];

    function spawn(w: number, h: number): Dot {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: -Math.random() * 0.18 - 0.04,
        r: Math.random() * 1.8 + 0.5,
        alpha: Math.random() * 0.25 + 0.05,
        alphaDir: Math.random() > 0.5 ? 1 : -1,
        color,
      };
    }

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const count = Math.floor((canvas.width * canvas.height) / 14000);
      dots = Array.from({ length: Math.min(count, 55) }, () =>
        spawn(canvas.width, canvas.height)
      );
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        d.alpha += d.alphaDir * 0.003;
        if (d.alpha > 0.30 || d.alpha < 0.04) d.alphaDir *= -1;

        if (d.y < -4) { d.y = h + 4; d.x = Math.random() * w; }
        if (d.x < -4) d.x = w + 4;
        if (d.x > w + 4) d.x = -4;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `${d.color}${d.alpha.toFixed(2)})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
