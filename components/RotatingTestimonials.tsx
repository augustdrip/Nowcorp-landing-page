"use client";

import React, { useEffect, useRef, useState } from "react";

type Testimonial = {
  quote: string;
  author: string;
};

type Props = {
  items: Testimonial[];
  intervalMs?: number;
};

export default function RotatingTestimonials({ items, intervalMs = 5000 }: Props) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<number | null>(null);
  const fadeRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = () => {
      setVisible(false);
      // wait for fade-out then switch
      fadeRef.current = window.setTimeout(() => {
        setIndex((i) => (i + 1) % items.length);
        setVisible(true);
      }, 350);
    };

    timerRef.current = window.setInterval(tick, intervalMs) as unknown as number;
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      if (fadeRef.current) window.clearTimeout(fadeRef.current);
    };
  }, [items.length, intervalMs]);

  const current = items[index];

  return (
    <div className="relative min-h-[120px]">
      <figure
        key={index}
        className={
          "transition-opacity duration-700 ease-out " + (visible ? "opacity-100" : "opacity-0")
        }
      >
        <blockquote className="text-lg leading-relaxed">“{current.quote}”</blockquote>
        <figcaption className="mt-4 text-sm text-neutral-600">— {current.author}</figcaption>
      </figure>
    </div>
  );
}


