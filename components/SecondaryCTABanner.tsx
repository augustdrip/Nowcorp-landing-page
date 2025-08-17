"use client";

import { ScrollReveal } from "./ScrollReveal";

export default function SecondaryCTABanner() {
  return (
    <ScrollReveal>
      <section className="px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-6xl rounded-2xl border border-neutral-200 bg-[color:var(--nc-accent-soft)] p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Stop waiting on Net 30/60/90.</h3>
              <p className="text-neutral-700">Get paid on your terms and reinvest in growth this week.</p>
            </div>
            <a href="#apply" className="btn-primary rounded-md px-4 py-2 text-sm font-medium">Start your application</a>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}


