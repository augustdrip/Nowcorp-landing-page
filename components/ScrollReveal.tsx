"use client";

import React, { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger multiple items by delaying (ms) the reveal */
  delayMs?: number;
  /** Pixel offset to translate from on enter */
  translateY?: number;
};

export function ScrollReveal({
  children,
  className,
  delayMs = 0,
  translateY = 16,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setIsRevealed(true);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const handle = window.setTimeout(() => setIsRevealed(true), delayMs);
            observer.unobserve(entry.target);
            return () => window.clearTimeout(handle);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delayMs]);

  const initialStyle: React.CSSProperties = isRevealed
    ? { opacity: 1, transform: "translateY(0)" }
    : { opacity: 0, transform: `translateY(${translateY}px)` };

  return (
    <div
      ref={containerRef}
      className={
        "will-change-transform transition duration-700 ease-out " +
        (className ?? "")
      }
      style={initialStyle}
    >
      {children}
    </div>
  );
}


