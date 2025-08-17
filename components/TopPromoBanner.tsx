"use client";

export default function TopPromoBanner() {
  return (
    <section className="hidden sm:block px-6 lg:px-8 py-4 bg-[color:var(--nc-accent-soft)] border-b border-neutral-200">
      <div className="mx-auto max-w-6xl flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base sm:text-lg font-semibold">Stop waiting on Net 30/60/90.</h2>
          <p className="mt-1 text-sm text-neutral-700">Get paid on your terms and reinvest in growth this week.</p>
        </div>
        <a href="#apply" className="btn-primary rounded-md px-4 py-2 text-sm font-medium self-start sm:self-auto">Start your application</a>
      </div>
    </section>
  );
}


