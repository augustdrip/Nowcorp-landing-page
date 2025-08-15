"use client";

import { useEffect, useRef } from "react";

export function HeroFX() {
  const layerOneRef = useRef<HTMLDivElement | null>(null);
  const layerTwoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId = 0;
    let pointerX = 0;
    let pointerY = 0;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize pointer to [-1, 1]
      pointerX = (e.clientX / innerWidth) * 2 - 1;
      pointerY = (e.clientY / innerHeight) * 2 - 1;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const l1 = layerOneRef.current;
        const l2 = layerTwoRef.current;
        if (l1) {
          l1.style.transform = `translate3d(${pointerX * 12}px, ${pointerY * 12}px, 0)`;
        }
        if (l2) {
          l2.style.transform = `translate3d(${pointerX * -8}px, ${pointerY * -8}px, 0)`;
        }
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove as any);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Large soft accent blob */}
      <div
        ref={layerOneRef}
        className="hero-fx-blob animate-float-slow"
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "60vw",
          height: "60vh",
          background:
            "radial-gradient(600px 300px at 50% 50%, var(--nc-accent-soft), transparent)",
          filter: "blur(40px)",
          opacity: 0.5,
        }}
      />
      {/* Smaller deep accent blob */}
      <div
        ref={layerTwoRef}
        className="hero-fx-blob animate-float-slower"
        style={{
          position: "absolute",
          bottom: "-15%",
          right: "-15%",
          width: "40vw",
          height: "40vh",
          background:
            "radial-gradient(400px 260px at 50% 50%, color-mix(in oklab, var(--nc-accent), white 20%), transparent)",
          filter: "blur(36px)",
          opacity: 0.28,
        }}
      />
    </div>
  );
}


