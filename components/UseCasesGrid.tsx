"use client";

import { ScrollReveal } from "./ScrollReveal";
import StackedCards from "./StackedCards";

export default function UseCasesGrid() {
  return (
    <ScrollReveal>
      <section id="use-cases" className="relative isolate px-6 lg:px-8 py-16" style={{ background: "linear-gradient( to bottom right, #072c2b, #115d5b)" }}>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-white text-center md:text-left">Use Revenue On Demand when it matters most</h2>
          <p className="mt-2 text-white/80 text-center md:text-left">Our clients use it to:</p>
          <div className="mt-8">
            <StackedCards
              stickyTopPx={112}
              overlapPx={48}
              gapPx={16}
              cardClassName="rounded-2xl border border-neutral-200 bg-white p-5 text-[color:var(--nc-text)] shadow-sm"
            >
              {[
                "Cover payroll or vendor payments without stress",
                "Get ahead on hiring",
                "Take on larger contracts with confidence",
                "Smooth revenue gaps between milestones",
                "Grow without giving up equity or control",
                "Invest ahead of demand and hit delivery dates",
              ].map((text, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[color:var(--nc-accent-soft)] text-[color:var(--nc-text)] text-xs font-semibold">{i + 1}</div>
                  <p className="mt-3 text-sm leading-6">{text}</p>
                </div>
              ))}
            </StackedCards>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}


