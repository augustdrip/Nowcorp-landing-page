"use client";

import { useEffect } from "react";
import TopPromoBanner from "../components/TopPromoBanner";
import HeroSection from "../components/HeroSection";
import ScrollStackSection from "../components/ScrollStackSection";
import HowItWorks from "../components/HowItWorks";
import UseCasesGrid from "../components/UseCasesGrid";
import WhyNowSplit from "../components/WhyNowSplit";
import WhatDoesntChange from "../components/WhatDoesntChange";
import TestimonialsSection from "../components/TestimonialsSection";
import ComparisonTable from "../components/ComparisonTable";
import SecondaryCTABanner from "../components/SecondaryCTABanner";
import FAQAndReasons from "../components/FAQAndReasons";
import Footer from "../components/Footer";
import PricingTable from "../components/PricingTable";

export default function Home() {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        if ("scrollRestoration" in window.history) {
          window.history.scrollRestoration = "manual" as History["scrollRestoration"];
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      }
    } catch {}
  }, []);

  return (
    <div className="min-h-screen bg-white text-[color:var(--nc-text)]">
      <TopPromoBanner />
      <HeroSection />
      <ScrollStackSection />
      <HowItWorks />
      <UseCasesGrid />
      <WhyNowSplit />
      <WhatDoesntChange />
      <TestimonialsSection />
      <ComparisonTable />
      <PricingTable />
      <SecondaryCTABanner />
      <FAQAndReasons />
      <Footer />
    </div>
  );
}


