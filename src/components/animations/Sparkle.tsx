"use client";

import { m, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { useReducedMotion } from "@/hooks";

interface SparkleProps {
  color?: string;
  children: React.ReactNode;
  className?: string;
}

interface SparkleInstance {
  id: string;
  x: number;
  y: number;
  size: number;
  delay: number;
}

const generateSparkle = (): SparkleInstance => ({
  id: crypto.randomUUID(),
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 10 + 5,
  delay: Math.random() * 0.3,
});

export function Sparkle({
  color = "var(--accent-primary)",
  children,
  className = "",
}: SparkleProps) {
  const [sparkles, setSparkles] = useState<SparkleInstance[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const addSparkle = useCallback(() => {
    if (shouldReduceMotion) return;
    const sparkle = generateSparkle();
    setSparkles((prev) => [...prev, sparkle]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
    }, 750);
  }, [shouldReduceMotion]);

  // Random sparkles on interval
  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(addSparkle, 2000);
    return () => clearInterval(interval);
  }, [addSparkle, shouldReduceMotion]);

  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <m.svg
            key={sparkle.id}
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 160 160"
            fill="none"
            className="absolute pointer-events-none"
            aria-hidden="true"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, rotate: 0, opacity: 1 }}
            animate={{ scale: 1, rotate: 180, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.75, delay: sparkle.delay }}
          >
            <path
              d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
              fill={color}
            />
          </m.svg>
        ))}
      </AnimatePresence>
    </span>
  );
}
