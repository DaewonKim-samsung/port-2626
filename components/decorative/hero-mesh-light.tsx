"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type LightSpot = {
  color: string;
  opacity: number;
  size: number;
  baseX: number;
  baseY: number;
  factor: number;
};

const LIGHT_SPOTS: LightSpot[] = [
  {
    color: "#a5b4fc",
    opacity: 0.45,
    size: 320,
    baseX: 15,
    baseY: 10,
    factor: 0.14,
  },
  {
    color: "#67e8f9",
    opacity: 0.5,
    size: 280,
    baseX: 75,
    baseY: 25,
    factor: 0.1,
  },
  {
    color: "#fdba74",
    opacity: 0.4,
    size: 300,
    baseX: 80,
    baseY: 70,
    factor: 0.16,
  },
  {
    color: "#38bdf8",
    opacity: 0.45,
    size: 240,
    baseX: 25,
    baseY: 55,
    factor: 0.12,
  },
  {
    color: "#7dd3fc",
    opacity: 0.35,
    size: 200,
    baseX: 50,
    baseY: 40,
    factor: 0.2,
  },
];

export function HeroMeshLight() {
  const spotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animators = useRef<
    { x: gsap.QuickToFunc; y: gsap.QuickToFunc; factor: number }[]
  >([]);

  useEffect(() => {
    const section = document.getElementById("hero");
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    animators.current = LIGHT_SPOTS.map((spot, index) => {
      const el = spotRefs.current[index];
      if (!el) {
        return {
          x: gsap.quickTo({}, "x", { duration: 0.9 }),
          y: gsap.quickTo({}, "y", { duration: 0.9 }),
          factor: spot.factor,
        };
      }

      gsap.set(el, { xPercent: -50, yPercent: -50 });

      return {
        x: gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" }),
        y: gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" }),
        factor: spot.factor,
      };
    });

    const handleMouseMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const offsetX = event.clientX - rect.left - rect.width / 2;
      const offsetY = event.clientY - rect.top - rect.height / 2;

      animators.current.forEach(({ x, y, factor }) => {
        x(offsetX * factor);
        y(offsetY * factor);
      });
    };

    const handleMouseLeave = () => {
      animators.current.forEach(({ x, y }) => {
        x(0);
        y(0);
      });
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {LIGHT_SPOTS.map((spot, index) => (
        <div
          key={`${spot.color}-${spot.baseX}`}
          ref={(node) => {
            spotRefs.current[index] = node;
          }}
          className="absolute rounded-full blur-3xl will-change-transform"
          style={{
            left: `${spot.baseX}%`,
            top: `${spot.baseY}%`,
            width: spot.size,
            height: spot.size,
            backgroundColor: spot.color,
            opacity: spot.opacity,
          }}
        />
      ))}
    </div>
  );
}
