"use client";

import { useState } from "react";

type SubmitResult = { ok: boolean; message: string } | null;

type LeadFormProps = {
  id?: string;
};

export default function LeadForm({ id = "apply" }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResult>(null);

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
          phone: formData.get("phone"),
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
    <form
      id={id}
      className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
      action={async (formData) => {
        await handleSubmit(formData);
      }}
    >
      <div className="grid gap-4">
        <div>
          <label className="block text-sm font-medium">Full name</label>
          <input
            name="name"
            required
            placeholder="Jane Doe"
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--nc-accent)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Work email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="[email protected]"
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--nc-accent)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Work number</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="(555) 555-5555"
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--nc-accent)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Company</label>
          <input
            name="company"
            required
            placeholder="Your LLC"
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--nc-accent)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Monthly receivables</label>
          <select
            name="monthlyReceivables"
            required
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--nc-accent)]"
            defaultValue="20000+"
          >
            <option value="20000+">$20k–$100k</option>
            <option value="100000+">$100k–$500k</option>
            <option value="500000+">$500k+</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex items-center justify-center rounded-md btn-primary px-4 py-2 text-sm font-medium disabled:opacity-50 shadow-sm"
        >
          {isSubmitting ? "Submitting..." : "Get started"}
        </button>
        {result && (
          <p className={result.ok ? "text-green-600 text-sm" : "text-red-600 text-sm"}>
            {result.message}
          </p>
        )}
        <p className="text-[11px] text-neutral-500">
          By submitting, you agree to our{" "}
          <a
            href="https://nowcorp.com/policy/terms-conditions/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Terms
          </a>{" "}
          and acknowledge our{" "}
          <a
            href="https://nowcorp.com/policy/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}


