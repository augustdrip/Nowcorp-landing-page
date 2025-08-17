"use client";

import { ScrollReveal } from "./ScrollReveal";

export default function PricingTable() {
  return (
    <ScrollReveal>
      <section id="pricing" className="px-6 lg:px-8 py-10 bg-neutral-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center md:text-left">Now pricing</h2>
          <p className="mt-1 text-sm text-neutral-600 text-center md:text-left">
            Now pays your business 100% of the invoice amount less the service fee. This fee is determined based on net terms.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-fit rounded-lg border border-neutral-200 bg-white shadow-sm">
              <table className="table-fixed text-[13px]">
                <colgroup>
                  <col className="w-36" />
                  <col className="w-36" />
                </colgroup>
                <thead className="bg-[color:var(--nc-accent-soft)] text-[color:var(--nc-text)]">
                  <tr>
                    <th className="px-3 py-1.5 text-left font-medium whitespace-nowrap">Fee</th>
                    <th className="px-3 py-1.5 text-left font-medium whitespace-nowrap">Term (days)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["2.50%", "15"],
                    ["2.75%", "30"],
                    ["3.75%", "45"],
                    ["5.25%", "60"],
                    ["6.25%", "75"],
                    ["7.50%", "90"],
                  ].map(([fee, days], i) => (
                    <tr key={i} className="border-t border-neutral-200 odd:bg-white even:bg-neutral-50">
                      <td className="px-3 py-1.5 font-medium text-neutral-800">{fee}</td>
                      <td className="px-3 py-1.5 text-neutral-800">{days}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-2 text-[11px] text-neutral-500">
            This flat fee is based on the invoice terms and does not change based on when your customer actually pays.
          </p>
        </div>
      </section>
    </ScrollReveal>
  );
}


