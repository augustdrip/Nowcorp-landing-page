"use client";

import RotatingTestimonials from "./RotatingTestimonials";
import { ScrollReveal } from "./ScrollReveal";

export default function TestimonialsSection() {
  return (
    <ScrollReveal>
      <section id="testimonials" className="px-6 lg:px-8 py-16">
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
  );
}


