"use client";

import React from "react";

type StackedCardsProps = {
  children: React.ReactNode[] | React.ReactNode;
  /** Sticky offset from top in pixels */
  stickyTopPx?: number;
  /** Vertical overlap between cards in pixels (negative margin applied to all but the first) */
  overlapPx?: number;
  /** Visible gap between stacked cards while pinned (in pixels) */
  gapPx?: number;
  className?: string;
  /** Tailwind classes for the inner card wrapper so sections can customize fills */
  cardClassName?: string;
};

export default function StackedCards({
  children,
  stickyTopPx = 96,
  overlapPx = 0,
  gapPx = 24,
  className = "",
  cardClassName = "rounded-2xl border border-neutral-200 bg-white p-5 text-[color:var(--nc-text)] shadow-sm",
}: StackedCardsProps) {
  const items = React.Children.toArray(children);
  return (
    <div className={`relative ${className}`.trim()}>
      {items.map((child, index) => {
        const z = index + 1; // later cards stack above earlier ones while pinned
        const marginTop = index === 0 ? 0 : gapPx; // default: separated, readable
        return (
          <div
            key={index}
            style={{ position: "sticky", top: stickyTopPx, zIndex: z, marginTop }}
          >
            <div className={cardClassName}>
              {child}
            </div>
          </div>
        );
      })}
      {/* Extra spacer so the last sticky card can fully scroll past */}
      <div style={{ height: stickyTopPx + gapPx }} />
    </div>
  );
}


