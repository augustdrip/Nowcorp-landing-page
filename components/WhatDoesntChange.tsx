"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

export default function WhatDoesntChange() {
  return (
    <ScrollReveal>
      <section id="doesnt-change" className="relative px-6 lg:px-8 py-16 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none -z-10">
          <Image
            src="/gallery/240_F_737115432_HTfbqyM6GdgFnLIfmvpMOQcDjVu5tLxW.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-10"
            priority={false}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.85))",
            }}
          />
        </div>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center md:text-left">What doesn’t change</h2>
          <p className="mt-2 text-sm text-neutral-600 text-center md:text-left">There is no disruption to how your business runs. You simply control when the revenue arrives.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center md:justify-items-stretch">
            {[
              {
                title: "Customer terms stay the same",
                desc: "Same invoice, same net terms. Only the remittance address is updated.",
              },
              {
                title: "You choose what to activate",
                desc: "Turn on only the invoices or accounts you want, whenever it’s useful.",
              },
              {
                title: "Full visibility, no surprises",
                desc: "Clear status, simple flat-fee pricing, and activity you can audit.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow w-full text-center md:text-left">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--nc-accent-soft)]">
                  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                    <path d="M7.5 10.8 5.2 8.5l-1 1L7.5 12l8-8-1-1-7 7.8Z" fill="currentColor" className="text-[color:var(--nc-accent)]"/>
                  </svg>
                </div>
                <h3 className="mt-3 font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}


