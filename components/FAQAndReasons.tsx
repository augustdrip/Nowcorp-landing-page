"use client";

export default function FAQAndReasons() {
  return (
    <section id="faq" className="px-6 lg:px-8 py-16 bg-neutral-50">
      <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Why businesses choose Now</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc pl-5 md:pl-5 inline-block text-left">
            <li>Proven model with $1B+ in funded invoices</li>
            <li>No debt. Just your revenue, faster</li>
            <li>Flat-fee pricing with no surprises</li>
            <li>Simple to use, no setup headaches</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Common questions</h3>
          <div className="mt-4 space-y-3">
            <details className="rounded-lg bg-white p-4 border border-neutral-200 text-left">
              <summary className="cursor-pointer text-sm font-medium">Is this a loan?</summary>
              <div className="mt-2 text-sm text-neutral-600 space-y-2">
                <p>No. Now is not a loan. It is a flat-fee, off-balance-sheet solution that gives you upfront access to your invoice value.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Flat fee based on term; pricing is always clear.</li>
                  <li>No dilution and typically no personal guarantee.</li>
                  <li>Balance sheet stays clean — no new debt added.</li>
                </ul>
              </div>
            </details>
            <details className="rounded-lg bg-white p-4 border border-neutral-200 text-left">
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
            <details className="rounded-lg bg-white p-4 border border-neutral-200 text-left">
              <summary className="cursor-pointer text-sm font-medium">Will my customers know?</summary>
              <div className="mt-2 text-sm text-neutral-600 space-y-2">
                <p>No. Your customer relationship stays the same. They pay on their usual terms and you remain the biller; we handle the background process.</p>
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
  );
}


