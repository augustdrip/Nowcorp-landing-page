"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "../components/ScrollReveal";
import { HeroFX } from "../components/HeroFX";
import RotatingTestimonials from "../components/RotatingTestimonials";
import { ScrollStack } from "../components/ScrollStack";
import "../components/ScrollStack.css";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(
    null
  );

  // Always start at top when the page mounts or is refreshed
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        if ("scrollRestoration" in window.history) {
          window.history.scrollRestoration = "manual" as History['scrollRestoration'];
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      }
    } catch {}
  }, []);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setResult(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          monthlyReceivables: formData.get("monthlyReceivables"),
        }),
      });
      const json = await res.json();
      setResult({ ok: res.ok, message: json.message ?? "Submitted" });
    } catch {
      setResult({ ok: false, message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white text-[color:var(--nc-text)]">
      {/* Top promo banner for landing emphasis */}
      <section className="px-6 lg:px-8 py-4 bg-[color:var(--nc-accent-soft)] border-b border-neutral-200">
        <div className="mx-auto max-w-6xl flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-semibold">Stop waiting on Net 30/60/90.</h2>
            <p className="mt-1 text-sm text-neutral-700">Get paid on your terms and reinvest in growth this week.</p>
          </div>
          <a href="#apply" className="btn-primary rounded-md px-4 py-2 text-sm font-medium self-start sm:self-auto">Start your application</a>
        </div>
      </section>

      <section className="relative isolate px-6 pt-12 pb-10 sm:pt-14 sm:pb-16 lg:px-8 overflow-hidden">
        {/* Background image from gallery */}
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
        {/* Soft gradient wash over hero image */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(800px 400px at 20% 0%, rgba(197,233,159,0.25), transparent), linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.9))",
          }}
        />
        <HeroFX />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-50%,var(--nc-accent-soft),transparent)]" />
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 items-start">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">Revenue On Demand for growing B2B businesses</h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-600">Turn invoices into immediate revenue — without debt or delays. Offer terms with confidence. Get paid when it counts. Invest in growth, not collections.</p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700 list-disc pl-5">
              <li>Flat fee. No interest, no compounding.</li>
              <li>Approvals typically within 24–48 hours after invoice approval.</li>
              <li>Works alongside SBA or bank loans.</li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a href="#apply" className="inline-flex items-center justify-center rounded-md btn-primary px-5 py-3 text-sm font-medium shadow-sm">Start your application</a>
              <a href="#how" className="inline-flex items-center justify-center rounded-md btn-secondary px-5 py-3 text-sm font-medium hover:bg-neutral-50">See how it works</a>
            </div>
            <p className="mt-4 text-sm md:text-base font-medium text-neutral-600">Over $1B in invoices funded</p>
          </ScrollReveal>
          {/* Top application form */}
          <ScrollReveal delayMs={150}>
          <form id="apply" className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm" action={async (formData) => { await handleSubmit(formData); }}>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium">Full name</label>
                <input name="name" required placeholder="Jane Doe" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--nc-accent)]" />
              </div>
              <div>
                <label className="block text-sm font-medium">Work email</label>
                <input type="email" name="email" required placeholder="[email protected]" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--nc-accent)]" />
              </div>
              <div>
                <label className="block text-sm font-medium">Work number</label>
                <input type="tel" name="phone" required placeholder="(555) 555-5555" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--nc-accent)]" />
              </div>
              <div>
                <label className="block text-sm font-medium">Company</label>
                <input name="company" required placeholder="Your LLC" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--nc-accent)]" />
              </div>
              <div>
                <label className="block text-sm font-medium">Monthly receivables</label>
                <select name="monthlyReceivables" required className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--nc-accent)]" defaultValue="20000+">
                  <option value="20000+">$20k–$100k</option>
                  <option value="100000+">$100k–$500k</option>
                  <option value="500000+">$500k+</option>
                </select>
              </div>
              <button type="submit" disabled={isSubmitting} className="mt-2 inline-flex items-center justify-center rounded-md btn-primary px-4 py-2 text-sm font-medium disabled:opacity-50 shadow-sm">{isSubmitting ? "Submitting..." : "Get started"}</button>
              {result && (<p className={result.ok ? "text-green-600 text-sm" : "text-red-600 text-sm"}>{result.message}</p>)}
              <p className="text-[11px] text-neutral-500">
                By submitting, you agree to our
                {" "}
                <a href="https://nowcorp.com/policy/terms-conditions/" target="_blank" rel="noopener noreferrer" className="underline">Terms</a>
                {" "}and acknowledge our{ " "}
                <a href="https://nowcorp.com/policy/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline">Privacy Policy</a>.
              </p>
            </div>
          </form>
          </ScrollReveal>
        </div>
      </section>

      {/* You stay in control - Scroll Stack */}
      <ScrollReveal>
      <section className="px-6 lg:px-8 py-16 bg-[color:var(--nc-accent)] text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">You stay in control.<br/>Every step of the way.</h2>
            </div>
            <p className="text-sm/6 text-white/80">
              This is the flow modern B2B teams use to turn earned revenue into action without waiting on net 30, 60 or 90 delays.
            </p>
          </div>

          <div className="mt-10">
            <ScrollStack className="rounded-2xl" itemDistance={112} itemScale={0.02} itemStackDistance={64} stackPosition="22%" scaleEndPosition="12%" baseScale={0.92} smoothingFactor={0.2}>
              {[ 
                ["Send the invoice", "Keep doing what you already do. No change to your invoicing process."],
                ["Choose when to get paid", "Use Now before payroll, hiring or your next big move."],
                ["Get funds in ~24–48h", "We send the full amount minus the flat fee."],
                ["Customers pay on terms", "You stay in control; we handle AR workflows."],
                ["Reinvest in growth", "Cover payroll, expand your team or take on bigger contracts."],
                ["Repeat as needed", "Operators use this rhythm to stay ahead and grow on their terms."],
              ].map(([title, desc], i) => (
                <div key={title} className="scroll-stack-card">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--nc-accent-soft)] text-[color:var(--nc-text)] text-xs font-semibold">{i + 1}</div>
                  <h3 className="mt-3 font-medium">{title}</h3>
                  <p className="mt-1 text-sm text-white/80">{desc}</p>
                </div>
              ))}
            </ScrollStack>
          </div>
        </div>
      </section>
      </ScrollReveal>
        <ScrollReveal>
        <section id="how" className="px-6 lg:px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-semibold">How it works</h2>
            {/* Desktop timeline */}
            <div className="mt-10 hidden md:flex items-start justify-between relative">
              <div className="absolute left-0 right-0 top-5 h-0.5 bg-[color:var(--nc-accent-soft)]" />
              {[
                { title: "Upload invoices or connect", desc: "No changes to your billing process." },
                { title: "Choose customers", desc: "Activate only the accounts you want." },
                { title: "Get paid right away", desc: "Funds in ~24–48 hours after approval." },
              ].map((step, idx) => (
                <div key={step.title} className="w-1/3 pr-4">
                  <div className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full chip text-sm font-semibold">
                    {idx + 1}
                  </div>
                  <div className="mt-3 font-medium">{step.title}</div>
                  <div className="mt-1 text-sm text-neutral-600">{step.desc}</div>
                </div>
              ))}
            </div>
            {/* Mobile cards */}
            <div className="mt-8 grid gap-6 md:hidden">
              {[
                { title: "Upload invoices or connect", desc: "No changes to your billing process." },
                { title: "Choose customers", desc: "Activate only the accounts you want." },
                { title: "Get paid right away", desc: "Funds in ~24–48 hours after approval." },
              ].map((card, idx) => (
                <div key={card.title} className="rounded-2xl bg-white p-6 shadow-sm border border-neutral-200">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full chip text-xs font-medium">{idx + 1}</div>
                  <h3 className="mt-3 font-medium">{card.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        </ScrollReveal>

      

      {/* Use Revenue On Demand when it matters most */}
      <ScrollReveal>
      <section className="relative isolate px-6 lg:px-8 py-16" style={{background: "linear-gradient( to bottom right, #072c2b, #115d5b)"}}>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-white">Use Revenue On Demand when it matters most</h2>
          <p className="mt-2 text-white/80">Our clients use it to:</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Cover payroll or vendor payments without stress",
              "Get ahead on hiring",
              "Take on larger contracts with confidence",
              "Smooth revenue gaps between milestones",
              "Grow without giving up equity or control",
              "Invest ahead of demand and hit delivery dates",
            ].map((text, i) => (
              <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 text-white">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[color:var(--nc-accent-soft)] text-[color:var(--nc-text)] text-xs font-semibold">{i + 1}</div>
                <p className="mt-3 text-sm leading-6">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      

      {/* Removed placeholder bar to prevent layout confusion below the press logos */}

      {/* Why operators pick Now (split layout) */}
      <section className="relative overflow-hidden">
        {/* Extended background covering Why + How sections */}
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
              Replace debt and delays with a simple, controllable revenue switch.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[color:var(--nc-text)]">
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--nc-accent)]"></span> No loans, no dilution — cleaner balance sheet.</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--nc-accent)]"></span> One flat fee based on term — easy to price.</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--nc-accent)]"></span> You remain the biller — relationships stay intact.</li>
            </ul>
          </div>
          <div className="flex flex-col divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
            {[
              { title: "No debt, no dilution", desc: "Turn receivables into revenue without loans or equity." },
              { title: "Flat, simple pricing", desc: "One transparent fee based on term. No compounding." },
              { title: "Keep customer control", desc: "Your invoice, your terms. We handle the AR workflows." },
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

      

      {/* What doesn't change (improved) */}
      <ScrollReveal>
      <section className="relative px-6 lg:px-8 py-16 bg-white overflow-hidden">
        {/* Subtle background image inside this white box */}
        <div className="absolute inset-0 pointer-events-none select-none -z-10">
          <Image
            src="/gallery/240_F_737115432_HTfbqyM6GdgFnLIfmvpMOQcDjVu5tLxW.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-10"
            priority={false}
          />
          {/* soft mask to keep edges clean under content */}
          <div className="absolute inset-0" style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.85))"
          }} />
        </div>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">What doesn’t change</h2>
          <p className="mt-2 text-sm text-neutral-600">There is no disruption to how your business runs. You simply control when the revenue arrives.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
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

      {/* Testimonials - rotating */}
      <ScrollReveal>
      <section className="px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <RotatingTestimonials
              intervalMs={5000}
              items={[
                { quote: "We doubled revenue in a year after moving our AR to Now. No more juggling payroll while waiting on Net 60. Our team can finally focus on delivery.", author: "Chris R., Security Services Operator" },
                { quote: "Now let us take larger contracts without stressing cash flow. The flat fee makes planning simple.", author: "Dana K., Operations Lead" },
                { quote: "The approval was quick and painless. We finally offer terms without worrying about the lag.", author: "Luis M., Founder" },
                { quote: "Cash arrives when we need it. No debt, no dilution—just our revenue sooner.", author: "Priya S., CEO" },
                { quote: "AR workflows got easier. Our customers stayed on their usual terms—no drama.", author: "Sam T., Finance Manager" },
              ]}
            />
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Comparison */}
      <ScrollReveal>
      <section className="px-6 lg:px-8 py-16 bg-neutral-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">Now vs. traditional factoring</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[color:var(--nc-accent-soft)] text-[color:var(--nc-text)]">
                <tr>
                  <th className="px-6 py-3 text-left font-medium">Capability</th>
                  <th className="px-6 py-3 text-left font-medium">Now</th>
                  <th className="px-6 py-3 text-left font-medium">Factoring</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pricing", "Flat fee, no compounding", "Interest + fees, reserves"],
                  ["Control", "You choose which invoices/customers", "Often all‑or‑nothing"],
                  ["Customer experience", "Your invoice and terms stay intact", "Redirected comms / notices"],
                  ["Balance sheet", "No additional debt", "Debt/recourse risk common"],
                ].map(([cap, nowCol, other]) => (
                  <tr key={cap} className="border-t border-neutral-200 odd:bg-white even:bg-neutral-50">
                    <td className="px-6 py-4 font-medium text-neutral-800">{cap}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 font-medium text-[color:var(--nc-accent)]">
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--nc-accent)]"></span>
                        {nowCol}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-neutral-600">{other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Secondary CTA banner */}
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

      { /* Removed duplicate bottom application section to avoid repetition */ }
      {/* <section id="lead" className="px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Get Revenue On Demand</h2>
            <p className="mt-4 text-neutral-600">Simple, transparent pricing. No interest, no compounding. Approvals typically within 24–48 hours after invoice approval.</p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700 list-disc pl-5">
              <li>Flat fee based on term. No hidden costs.</li>
              <li>Use alongside SBA or bank loans.</li>
              <li>Designed for US B2B with $20k+ monthly receivables.</li>
            </ul>
          </div>
          <form className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm" action={async (formData) => { await handleSubmit(formData); }}>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium">Full name</label>
                <input name="name" required placeholder="Jane Doe" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--nc-accent)]" />
              </div>
              <div>
                <label className="block text-sm font-medium">Work email</label>
                <input type="email" name="email" required placeholder="[email protected]" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--nc-accent)]" />
              </div>
              <div>
                <label className="block text-sm font-medium">Company</label>
                <input name="company" required placeholder="Your LLC" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--nc-accent)]" />
              </div>
              <div>
                <label className="block text-sm font-medium">Monthly receivables</label>
                <select name="monthlyReceivables" required className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--nc-accent)]" defaultValue="20000+">
                  <option value="20000+">$20k–$100k</option>
                  <option value="100000+">$100k–$500k</option>
                  <option value="500000+">$500k+</option>
                </select>
              </div>
              <button type="submit" disabled={isSubmitting} className="mt-2 inline-flex items-center justify-center rounded-md btn-primary px-4 py-2 text-sm font-medium disabled:opacity-50 shadow-sm">{isSubmitting ? "Submitting..." : "Get started"}</button>
              {result && (<p className={result.ok ? "text-green-600 text-sm" : "text-red-600 text-sm"}>{result.message}</p>)}
              <p className="text-[11px] text-neutral-500">By submitting, you agree to our Terms and acknowledge our Privacy Policy.</p>
            </div>
          </form>
        </div>
      </section> */}

      <section className="px-6 lg:px-8 py-16 bg-neutral-50">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Why businesses choose Now</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc pl-5">
              <li>Proven model with $1B+ in funded invoices</li>
              <li>No debt. Just your revenue, faster</li>
              <li>Flat-fee pricing with no surprises</li>
              <li>Simple to use, no setup headaches</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Common questions</h3>
            <div className="mt-4 space-y-3">
              <details className="rounded-lg bg-white p-4 border border-neutral-200">
                <summary className="cursor-pointer text-sm font-medium">Is this a loan?</summary>
                <div className="mt-2 text-sm text-neutral-600 space-y-2">
                  <p>No. Revenue On Demand isn’t debt and there’s no compounding interest.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Flat fee based on term; pricing is always clear.</li>
                    <li>No dilution and typically no personal guarantee.</li>
                    <li>Balance sheet stays clean — no new debt added.</li>
                  </ul>
                </div>
              </details>
              <details className="rounded-lg bg-white p-4 border border-neutral-200">
                <summary className="cursor-pointer text-sm font-medium">How fast do I get paid?</summary>
                <div className="mt-2 text-sm text-neutral-600 space-y-2">
                  <p>Most payouts arrive within <strong>24–48 hours</strong> after invoice approval.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Same‑day options may be available before cut‑off.</li>
                    <li>ACH is standard; wires are available when you need funds sooner.</li>
                    <li>Initial onboarding can add one business day for verification.</li>
                  </ul>
                </div>
              </details>
              <details className="rounded-lg bg-white p-4 border border-neutral-200">
                <summary className="cursor-pointer text-sm font-medium">Will my customers know?</summary>
                <div className="mt-2 text-sm text-neutral-600 space-y-2">
                  <p>Your customers remain on their usual terms and experience.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>You keep the relationship; we handle AR workflows quietly.</li>
                    <li>Only remittance details may update so payments route correctly.</li>
                    <li>No change to the invoice format your customer sees.</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 lg:px-8 py-10 border-t border-neutral-200 text-sm text-neutral-600">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <nav className="flex items-center gap-4">
            <a className="hover:underline" href="#how">How it works</a>
            <a className="hover:underline" href="#lead">Start</a>
            <a className="hover:underline" href="https://nowcorp.com/policy/terms-conditions/" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
            <a className="hover:underline" href="https://nowcorp.com/policy/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </nav>
        </div>
        <div className="mx-auto max-w-6xl">
          <p className="mt-4 text-xs text-neutral-500">
            © {new Date().getFullYear()} Now Corp. Use of Now does not carry personal or business risk in the normal course of business. Like any responsible provider, Now reserves the right to recover losses in cases of intentional fraud or bad-faith behavior.
          </p>
        </div>
      </footer>
    </div>
  );
}

