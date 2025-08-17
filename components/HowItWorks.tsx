"use client";

import { ScrollReveal } from "./ScrollReveal";

export default function HowItWorks() {
  return (
    <ScrollReveal>
      <section id="how" className="px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center md:text-left">How it works</h2>
          <div className="mt-10 hidden md:flex items-start justify-between relative">
            <div className="absolute left-0 right-0 top-5 h-0.5 bg-[color:var(--nc-accent-soft)]" />
            {[
              { title: "Upload invoices or connect", desc: "No changes to your billing process." },
              { title: "Choose customers", desc: "Activate only the accounts you want." },
              { title: "Get paid right away", desc: "Funds in ~24–48 hours after approval." },
            ].map((step, idx) => (
              <div key={step.title} className="w-1/3 pr-4">
                <div className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--nc-accent)] text-white text-sm font-semibold shadow-sm">
                  {idx + 1}
                </div>
                <div className="mt-3 font-medium">{step.title}</div>
                <div className="mt-1 text-sm text-neutral-600">{step.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:hidden">
            {[
              { title: "Upload invoices or connect", desc: "Deliver goods or services and invoice your customer." },
              { title: "Choose customers", desc: "Choose which invoices to accelerate with Now." },
              { title: "Get paid right away", desc: "Get paid upfront — no loans, no factoring, no debt." },
            ].map((card, idx) => (
              <div key={card.title} className="rounded-2xl bg-white p-6 shadow-sm border border-neutral-200 text-center">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--nc-accent)] text-white text-xs font-semibold">{idx + 1}</div>
                <h3 className="mt-3 font-medium">{card.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}


