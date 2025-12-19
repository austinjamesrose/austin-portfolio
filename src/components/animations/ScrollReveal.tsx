"use client";

import { m, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useReducedMotion } from "@/hooks";
import { fadeUp, reducedMotionVariants } from "@/lib/animations/variants";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  threshold?: number;
  as?: "div" | "section" | "article" | "span";
}

export function ScrollReveal({
  children,
  className = "",
  variants = fadeUp,
  delay = 0,
  once = true,
  threshold = 0.2,
  as: Component = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const shouldReduceMotion = useReducedMotion();

  const MotionComponent = m[Component];

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={shouldReduceMotion ? reducedMotionVariants : variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
