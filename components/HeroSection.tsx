"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { HeroFX } from "./HeroFX";
import GHLBookingWidget from "./GHLBookingWidget";

export default function HeroSection() {
  return (
    <section className="relative isolate px-6 pt-12 pb-10 sm:pt-14 sm:pb-16 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/gallery/240_F_737115432_HTfbqyM6GdgFnLIfmvpMOQcDjVu5tLxW.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
      </div>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px 400px at 20% 0%, rgba(197,233,159,0.25), transparent), linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.9))",
        }}
      />
      <HeroFX />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-50%,var(--nc-accent-soft),transparent)]" />
      <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-5 items-start md:[&>*]:justify-self-start">
        <ScrollReveal className="md:col-span-2 md:justify-self-start">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">Revenue On Demand for growing B2B businesses</h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-600">Turn invoices into immediate revenue — without debt or delays. Offer terms with confidence. Get paid when it counts. Invest in growth, not collections.</p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700 list-disc pl-5 mx-auto inline-block text-left">
              <li>Flat fee. No interest, no compounding.</li>
              <li>Approvals typically within 24–48 hours after invoice approval.</li>
              <li>Works alongside SBA or bank loans.</li>
            </ul>
            <div className="mt-6 flex items-center gap-3 justify-center md:justify-start">
              <a href="#apply" className="inline-flex items-center justify-center rounded-md btn-primary px-5 py-3 text-sm font-medium shadow-sm">Start your application</a>
              <a href="#how" className="inline-flex items-center justify-center rounded-md btn-secondary px-5 py-3 text-sm font-medium hover:bg-neutral-50">See how it works</a>
            </div>
            <p className="mt-4 text-sm md:text-base font-medium text-neutral-600">Over $1B in invoices funded</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delayMs={150} className="w-full md:col-span-3 justify-self-start">
          <div className="w-full md:origin-top-right">
            <GHLBookingWidget id="apply" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


