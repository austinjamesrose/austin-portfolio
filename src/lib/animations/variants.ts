import { Variants } from "framer-motion";

// Matches existing CSS --transition-* tokens from globals.css
export const transitionPresets = {
  fast: { duration: 0.15 },
  base: { duration: 0.25 },
  slow: { duration: 0.4 },
  spring: { type: "spring" as const, stiffness: 400, damping: 30 },
  springBouncy: { type: "spring" as const, stiffness: 300, damping: 20 },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionPresets.slow,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionPresets.base,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitionPresets.spring,
  },
};

// Reduced motion fallback - instant transitions
export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
};
