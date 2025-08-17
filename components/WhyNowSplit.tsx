"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

export default function WhyNowSplit() {
  return (
    <section id="why" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/gallery/240_F_59482005_0D5zJFHwG9bKvcOgvKMCawCfhhzOGGM7.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
          priority={false}
        />
      </div>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(17,93,91,0.18), rgba(197,233,159,0.12))",
        }}
      />
      <ScrollReveal>
        <section className="px-6 lg:px-8 py-16">
          <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 items-start">
            <div className="rounded-2xl border border-neutral-200 bg-[color:var(--nc-accent-soft)] p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-semibold">Why operators pick Now</h2>
              <p className="mt-3 text-sm text-[color:var(--nc-text)]/80">
                Control when you get paid — without loans, factoring, or giving up control.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[color:var(--nc-text)]">
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--nc-accent)]"></span> 1,000+ businesses have used Now to get paid on their terms.</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--nc-accent)]"></span> Flat-fee, off‑balance‑sheet approach.</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--nc-accent)]"></span> No personal risk, no business risk in the normal course of business.</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--nc-accent)]"></span> Built for operators who want to scale on their terms.</li>
              </ul>
            </div>
            <div className="flex flex-col divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
              {[
                { title: "Who it’s for", desc: "B2B companies, including those selling to government; businesses offering Net 30, 60, or 90 terms; operators focused on growth rather than collections." },
                { title: "How Now helps", desc: "Offer terms with confidence; get paid upfront with no loans or factoring; choose which invoices to accelerate; simplify collections and payment operations; scale with greater cash‑flow certainty." },
                { title: "Why Now®", desc: "Flat‑fee, off‑balance‑sheet model with no personal guarantees; built for operators who want to scale on their terms." },
              ].map((row) => (
                <div key={row.title} className="p-6 flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-[color:var(--nc-accent-soft)] grid place-items-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--nc-accent)]"></span>
                  </div>
                  <div>
                    <div className="font-medium">{row.title}</div>
                    <div className="mt-1 text-sm text-neutral-600">{row.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </section>
  );
}


