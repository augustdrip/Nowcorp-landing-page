"use client";

import { ScrollReveal } from "./ScrollReveal";

export default function ComparisonTable() {
  return (
    <ScrollReveal>
      <section id="comparison" className="px-6 lg:px-8 py-16 bg-neutral-50">
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
                  <tr key={cap as string} className="border-t border-neutral-200 odd:bg-white even:bg-neutral-50">
                    <td className="px-6 py-4 font-medium text-neutral-800">{cap}</td>
                    <td className="px-6 py-4 font-medium text-[color:var(--nc-accent)]">{nowCol}</td>
                    <td className="px-6 py-4 text-neutral-600">{other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}


