"use client";

import { m, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks";

interface Skill {
  name: string;
  level: number; // 0-100
  color?: string;
}

interface SkillsRadarProps {
  skills: Skill[];
  size?: number;
  className?: string;
}

export function SkillsRadar({
  skills,
  size = 320,
  className = "",
}: SkillsRadarProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  const center = size / 2;
  const maxRadius = (size - 80) / 2; // Leave room for labels
  const angleStep = (2 * Math.PI) / skills.length;

  // Generate polygon points for skill levels
  const generatePolygonPoints = () => {
    return skills
      .map((skill, i) => {
        const angle = i * angleStep - Math.PI / 2; // Start from top
        const radius = (skill.level / 100) * maxRadius;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(" ");
  };

  // Generate grid ring points
  const generateRingPoints = (radiusMultiplier: number) => {
    return skills
      .map((_, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const radius = maxRadius * radiusMultiplier;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(" ");
  };

  const rings = [0.25, 0.5, 0.75, 1];

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      overflow="visible"
    >
      {/* Background rings */}
      {rings.map((ring, i) => (
        <polygon
          key={`ring-${i}`}
          points={generateRingPoints(ring)}
          fill="none"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth={1}
        />
      ))}

      {/* Axis lines */}
      {skills.map((_, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const x = center + maxRadius * Math.cos(angle);
        const y = center + maxRadius * Math.sin(angle);
        return (
          <line
            key={`axis-${i}`}
            x1={center}
            y1={center}
            x2={x}
            y2={y}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={1}
          />
        );
      })}

      {/* Skill polygon - animated */}
      <m.polygon
        points={generatePolygonPoints()}
        fill="rgba(232, 124, 92, 0.15)"
        stroke="var(--accent-primary)"
        strokeWidth={2}
        initial={shouldReduceMotion ? false : { scale: 0, opacity: 0 }}
        animate={
          isInView && !shouldReduceMotion
            ? { scale: 1, opacity: 1 }
            : shouldReduceMotion
              ? { scale: 1, opacity: 1 }
              : { scale: 0, opacity: 0 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
      />

      {/* Skill points - animated */}
      {skills.map((skill, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const radius = (skill.level / 100) * maxRadius;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);

        return (
          <m.circle
            key={`point-${i}`}
            cx={x}
            cy={y}
            r={5}
            fill={skill.color || "var(--accent-primary)"}
            stroke="var(--bg-primary)"
            strokeWidth={2}
            initial={shouldReduceMotion ? false : { scale: 0 }}
            animate={
              isInView && !shouldReduceMotion
                ? { scale: 1 }
                : shouldReduceMotion
                  ? { scale: 1 }
                  : { scale: 0 }
            }
            transition={{
              delay: shouldReduceMotion ? 0 : 0.5 + i * 0.08,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />
        );
      })}

      {/* Labels */}
      {skills.map((skill, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const labelRadius = maxRadius + 40;
        const x = center + labelRadius * Math.cos(angle);
        const y = center + labelRadius * Math.sin(angle);

        // Adjust text anchor based on position
        let textAnchor: "start" | "middle" | "end" = "middle";
        if (Math.cos(angle) > 0.3) textAnchor = "start";
        if (Math.cos(angle) < -0.3) textAnchor = "end";

        return (
          <m.text
            key={`label-${i}`}
            x={x}
            y={y}
            textAnchor={textAnchor}
            dominantBaseline="middle"
            className="fill-text-secondary text-xs font-medium"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={
              isInView && !shouldReduceMotion
                ? { opacity: 1 }
                : shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0 }
            }
            transition={{ delay: shouldReduceMotion ? 0 : 0.8 + i * 0.05 }}
          >
            {skill.name}
          </m.text>
        );
      })}
    </svg>
  );
}
