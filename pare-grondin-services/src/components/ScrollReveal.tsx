"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/*
 * ScrollReveal — wraps any content block with a scroll-triggered fade-up.
 * Use: <ScrollReveal delay={0.1}><YourContent /></ScrollReveal>
 * Safe to use inside server component JSX (client component boundary).
 */

const EASE = [0, 0, 0.2, 1] as const;

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  distance?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.55,
  className,
  style,
  distance = 24,
}: ScrollRevealProps) {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration, ease: EASE }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
