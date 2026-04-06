"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SlideInProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideIn({ children, direction = "left", delay = 0, duration = 0.6, className }: SlideInProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const x = direction === "left" ? -30 : 30;
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
