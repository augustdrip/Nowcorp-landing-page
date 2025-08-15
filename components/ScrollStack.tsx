"use client";

import React, { useLayoutEffect, useRef, useCallback } from "react";

export const ScrollStackItem: React.FC<{ children: React.ReactNode; itemClassName?: string }> = ({ children, itemClassName = "" }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

type Props = {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string | number;
  scaleEndPosition?: string | number;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  onStackComplete?: () => void;
  smoothingFactor?: number; // 0..1 lerp for transform smoothing
};

export function ScrollStack({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 2,
  onStackComplete,
  smoothingFactor = 0.18,
}: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<any>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const lastTransformsRef = useRef<Map<number, { translateY: number; scale: number; rotation: number; blur: number }>>(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return typeof value === "number" ? value : parseFloat(value);
  }, []);

  const updateCardTransforms = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const scrollTop = scroller.scrollTop;
    const containerHeight = scroller.clientHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElement = scroller.querySelector(".scroll-stack-end") as HTMLElement | null;
    const lastCard = cardsRef.current[cardsRef.current.length - 1];
    const endElementTop = endElement ? endElement.offsetTop : lastCard ? lastCard.offsetTop + lastCard.offsetHeight + 200 : 0;

    // Determine which card should be visually on top (latest reached)
    let topCardIndex = 0;
    for (let j = 0; j < cardsRef.current.length; j++) {
      const jCardTop = cardsRef.current[j].offsetTop;
      const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
      if (scrollTop >= jTriggerStart) topCardIndex = j;
    }

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = card.offsetTop;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = Math.max(endElementTop - containerHeight * 0.55, triggerEnd + 1);

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      // Mild blur for background cards to guide scrolling
      let blur = 0;
      if (i > 0 && i < topCardIndex) {
        const depth = topCardIndex - i; // how far behind the foremost visible card
        const maxBlur = 6; // cap so it isn't too much
        blur = Math.min(maxBlur, 1.5 + depth * blurAmount);
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const targetTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const nextTransform = lastTransform
        ? {
            translateY:
              lastTransform.translateY +
              (targetTransform.translateY - lastTransform.translateY) * smoothingFactor,
            scale:
              lastTransform.scale +
              (targetTransform.scale - lastTransform.scale) * smoothingFactor,
            rotation:
              lastTransform.rotation +
              (targetTransform.rotation - lastTransform.rotation) * smoothingFactor,
            blur:
              lastTransform.blur +
              (targetTransform.blur - lastTransform.blur) * smoothingFactor,
          }
        : targetTransform;

      const transform = `translate3d(0, ${nextTransform.translateY}px, 0) scale(${nextTransform.scale}) rotate(${nextTransform.rotation}deg)`;
      const filter = nextTransform.blur > 0 ? `blur(${nextTransform.blur}px)` : "";
      (card as HTMLElement).style.transform = transform;
      (card as HTMLElement).style.filter = filter;
      (card as HTMLElement).style.opacity = i > 0 && i < topCardIndex ? "0.8" : "1";
      lastTransformsRef.current.set(i, nextTransform);

      // Force lower index cards to sit above higher index cards (1 over 2)
      (card as HTMLElement).style.zIndex = String(20000 - i);
      if (i === 0) {
        (card as HTMLElement).classList.add("stack-front");
      } else {
        (card as HTMLElement).classList.remove("stack-front");
      }
      if (i === topCardIndex) {
        (card as HTMLElement).classList.add("stack-active");
      } else {
        (card as HTMLElement).classList.remove("stack-active");
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(async () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let LenisCtor: any = null;
    try {
      const mod: any = await import("lenis");
      LenisCtor = mod?.default ?? mod?.Lenis ?? null;
    } catch (_) {
      LenisCtor = null;
    }

    if (LenisCtor) {
      const lenis = new LenisCtor({
        wrapper: scroller,
        content: scroller.querySelector(".scroll-stack-inner") as HTMLElement,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        normalizeWheel: true,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075,
        touchInertia: 0.6,
      } as any);

      lenis.on("scroll", handleScroll);

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }

    // Fallback: native scroll
    scroller.addEventListener("scroll", handleScroll, { passive: true });
    const raf = () => {
      // keep transforms fresh for devices without continuous wheel events
      updateCardTransforms();
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);
    return null;
  }, [handleScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll(".scroll-stack-card")) as HTMLDivElement[];
    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        (card as HTMLElement).style.marginBottom = `${itemDistance}px`;
      }
      (card as HTMLElement).style.willChange = "transform, filter";
      (card as HTMLElement).style.transformOrigin = "top center";
      (card as HTMLElement).style.backfaceVisibility = "hidden";
      (card as HTMLElement).style.transform = "translateZ(0)";
      (card as HTMLElement).style.perspective = "1000px";
    });

    // initialize smooth scrolling or fallback
    void setupLenis();
    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy?.();
      }
      // remove fallback listener if used
      scroller.removeEventListener?.("scroll", handleScroll as any);
      stackCompletedRef.current = false;
      cardsRef.current = [] as any;
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    onStackComplete,
    setupLenis,
    updateCardTransforms,
  ]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
}

export default ScrollStack;


