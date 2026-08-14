import Image from "next/image";
import Link from "next/link";

export default function TrustGovernanceHero() {
  return (
    <section className="bg-slate-50 dark:bg-[#0B1120] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-10 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex rounded-full bg-[#D8F5D2] px-3 py-1">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#256D1B]">
                TRUST &amp; GOVERNANCE
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-[60px] lg:leading-[1.05]">
              Evidence before
              <br />
              assertion.
              <br />
              <span className="text-[#44B97A]">
                Trust in how we
                <br />
                operate.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-700 dark:text-slate-300">
              ZoikoTime is built for human authority, privacy, and operational
              truth. Explore our commitments, controls, policies, and
              operational assurance—verified, current, and transparently
              maintained.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
  href="#trust-center"
  className="inline-flex items-center justify-center rounded-lg bg-[#44B97A] px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:bg-[#3EAA70]"
>
  Visit the Trust Center

  <svg
    className="ml-2 h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14M13 5l7 7-7 7"
    />
  </svg>
</Link>

              <a href="/security">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg border-2 border-slate-900 px-8 py-4 text-base font-medium text-slate-900 transition-all duration-200 hover:bg-slate-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-900"
              >
                Request Security Review
              </button></a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/trust-goverance/hero.png"
              alt="Trust & Governance"
              width={596}
              height={334}
              priority
              className="h-auto w-full max-w-[596px] rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}