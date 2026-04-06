"use client";

import { motion } from "framer-motion";

/*
 * CommunityConnectionSVG — Layer 2 of the hero animation stack.
 *
 * Abstract visualization of health sharing members pooling resources.
 * Circles represent individual members; bezier paths represent the
 * community connections and cost-sharing flows between them.
 *
 * Animates in sequentially with staggered Framer Motion delays.
 * Rendered at very low opacity — this is background texture, not
 * foreground art. It should be felt more than seen.
 *
 * Colors: var(--primary) sage and var(--accent) amber.
 * Source: design-system.md Section 8 (Brand Personality Axes —
 * "Abstract community connection — circles connected by thin flowing
 * lines, animating in sequence to suggest the health sharing community
 * pooling resources.")
 */

/* ------------------------------------------------------------------ */
/*  Node and path data                                                  */
/* ------------------------------------------------------------------ */

// 7 member nodes at varied positions within 400x300 viewBox
const nodes = [
  { cx: 60,  cy: 80,  r: 14, accent: false }, // top-left large
  { cx: 200, cy: 40,  r: 10, accent: true  }, // top-center (accent)
  { cx: 340, cy: 100, r: 16, accent: false }, // top-right large
  { cx: 120, cy: 200, r: 9,  accent: false }, // mid-left small
  { cx: 270, cy: 180, r: 12, accent: true  }, // mid-right (accent)
  { cx: 50,  cy: 270, r: 8,  accent: false }, // bottom-left small
  { cx: 340, cy: 260, r: 11, accent: false }, // bottom-right
];

// Bezier paths connecting nodes — represent resource pooling flows
// Using cubic bezier curves for organic, flowing feel
const paths = [
  // n[0] → n[1]: top-left to top-center
  "M 60 80 C 110 50, 150 40, 200 40",
  // n[1] → n[2]: top-center to top-right
  "M 200 40 C 255 40, 305 70, 340 100",
  // n[0] → n[3]: top-left to mid-left
  "M 60 80 C 70 130, 90 170, 120 200",
  // n[2] → n[4]: top-right to mid-right
  "M 340 100 C 330 130, 305 155, 270 180",
  // n[3] → n[4]: mid-left to mid-right (the central sharing arc)
  "M 120 200 C 165 165, 220 175, 270 180",
  // n[3] → n[5]: mid-left to bottom-left
  "M 120 200 C 90 230, 65 255, 50 270",
  // n[4] → n[6]: mid-right to bottom-right
  "M 270 180 C 295 210, 325 240, 340 260",
  // n[1] → n[4]: top-center to mid-right (long diagonal — community reach)
  "M 200 40 C 240 80, 265 130, 270 180",
];

/* ------------------------------------------------------------------ */
/*  Animation variants                                                  */
/* ------------------------------------------------------------------ */

const nodeVariant = (index: number) => ({
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.6 + index * 0.5,
      duration: 0.8,
      ease: [0, 0, 0.2, 1] as const,
    },
  },
});

const pathVariant = (index: number) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      delay: 1.2 + index * 0.35,
      duration: 1.2,
      ease: [0, 0, 0.2, 1] as const,
    },
  },
});

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export default function CommunityConnectionSVG() {
  return (
    <motion.svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 5 }}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Bezier paths — drawn first so they render behind nodes */}
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={i % 3 === 1 ? "var(--accent)" : "var(--primary)"}
          strokeWidth={i === 4 ? 1.2 : 0.8}
          fill="none"
          strokeLinecap="round"
          variants={pathVariant(i)}
          initial="initial"
          animate="animate"
          // Final opacity is very low — background texture
          style={{ opacity: i === 4 ? 0.12 : 0.08 }}
        />
      ))}

      {/* Member circles — animated in with scale + opacity */}
      {nodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          fill={node.accent ? "var(--accent)" : "var(--primary)"}
          variants={nodeVariant(i)}
          initial="initial"
          animate="animate"
          // Final opacity: accent nodes slightly more visible for visual anchor
          style={{ opacity: node.accent ? 0.18 : 0.14 }}
        />
      ))}

      {/* Accent node rings — subtle outer glow rings on highlighted nodes */}
      {nodes
        .filter((n) => n.accent)
        .map((node, i) => (
          <motion.circle
            key={`ring-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r + 5}
            fill="none"
            stroke="var(--accent)"
            strokeWidth={0.6}
            variants={nodeVariant(nodes.indexOf(node))}
            initial="initial"
            animate="animate"
            style={{ opacity: 0.09 }}
          />
        ))}
    </motion.svg>
  );
}
