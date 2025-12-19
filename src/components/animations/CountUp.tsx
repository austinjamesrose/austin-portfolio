"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useSpring, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks";

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
  formatOptions?: Intl.NumberFormatOptions;
}

export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  delay = 0,
  className = "",
  formatOptions = {},
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  // Spring-based animation for smooth counting
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 30,
    duration: duration * 1000,
  });

  const rounded = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        springValue.set(value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, springValue, delay]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  // Format number with locale support
  const formattedValue = new Intl.NumberFormat("en-US", formatOptions).format(
    shouldReduceMotion ? value : displayValue
  );

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}
