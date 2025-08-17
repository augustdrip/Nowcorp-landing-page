"use client";

import { ScrollReveal } from "./ScrollReveal";
import StackedCards from "./StackedCards";

export default function ScrollStackSection() {
  return (
    <ScrollReveal>
      <section id="flow" className="px-6 lg:px-8 py-16 bg-[color:var(--nc-accent)] text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 items-start text-center md:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">You stay in control.<br/>Every step of the way.</h2>
            </div>
            <p className="text-sm/6 text-white/80">
              This is the flow modern B2B teams use to turn earned revenue into action without waiting on net 30, 60 or 90 delays.
            </p>
          </div>

          <div className="mt-10">
            <StackedCards stickyTopPx={128} overlapPx={96}>
              {[
                ["Send the invoice", "Keep doing what you already do. No change to your invoicing process."],
                ["Choose when to get paid", "Use Now before payroll, hiring or your next big move."],
                ["Get funds in ~24–48h", "We send the full amount minus the flat fee."],
                ["Customers pay on terms", "You stay in control; we handle AR workflows."],
                ["Reinvest in growth", "Cover payroll, expand your team or take on bigger contracts."],
                ["Repeat as needed", "Operators use this rhythm to stay ahead and grow on their terms."],
              ].map(([title, desc], i) => (
                <div key={title as string} className="text-center md:text-left">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--nc-accent-soft)] text-[color:var(--nc-text)] text-xs font-semibold">{i + 1}</div>
                  <h3 className="mt-3 font-medium">{title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{desc}</p>
                </div>
              ))}
            </StackedCards>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}


