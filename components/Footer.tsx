"use client";

export default function Footer() {
  return (
    <footer className="px-6 lg:px-8 py-10 border-t border-neutral-200 text-sm text-neutral-600">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <nav className="flex items-center gap-4">
          <a className="hover:underline" href="#how">How it works</a>
          <a className="hover:underline" href="#apply">Start</a>
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
  );
}


