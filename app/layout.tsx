import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revenue On Demand for B2B | Now®",
  description:
    "Turn invoices into immediate revenue without debt or delays. Flat-fee pricing, simple setup, and control over when you get paid.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-[color:var(--nc-text)]">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 h-14 flex items-center justify-between text-[color:var(--nc-text)]">
            <Link href="/" className="flex items-center gap-2" aria-label="Now home">
              <Image
                src="/gallery/Now_Primary-Lockup_2-1.svg"
                alt="Now logo"
                width={96}
                height={24}
                priority
                className="h-6 w-auto object-contain"
              />
              <span className="sr-only">Now®</span>
            </Link>
            <nav className="hidden sm:flex items-center gap-4">
              <a href="#how" className="text-sm hover:underline">How it works</a>
              <a href="#why" className="text-sm hover:underline">Why Now</a>
              <a href="#faq" className="text-sm hover:underline">FAQ</a>
            </nav>
            <a href="#apply" className="rounded-md px-4 py-2 text-sm font-medium bg-[#c8ec9c] text-[color:var(--nc-text)] border border-neutral-300">Start</a>
          </div>
        </header>
        {/* Spacer to offset the fixed header height */}
        <div className="h-14" />
        {children}
      </body>
    </html>
  );
}
