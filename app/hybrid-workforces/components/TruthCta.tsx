"use client";

import Link from "next/link";

export default function TruthCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-800 to-blue-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-280px]
          h-[540px]
          w-[540px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(13,148,136,0.30)_0%,rgba(13,148,136,0)_62%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Label */}
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-500 sm:text-base">
          Workforce Truth Infrastructure
        </p>

        {/* Heading */}
        <h2 className="mt-8 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl sm:leading-[1.4] lg:text-[40px]">
          Run hybrid work on clear, reviewable records
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
          See the Hybrid Workforce Command Center with your schedules, work
          contexts, policies, and downstream systems.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/request-enterprise-demo"
            className="
              inline-flex
              min-h-11
              w-full
              max-w-[240px]
              items-center
              justify-center
              rounded-[10px]
              bg-[#3FB97A]
              px-6
              text-sm
              font-semibold
              text-white
              shadow-[0_6px_16px_rgba(63,185,122,0.28)]
              transition
              hover:bg-[#35A96D]
              focus:outline-none
              focus:ring-2
              focus:ring-[#3FB97A]
              focus:ring-offset-2
              focus:ring-offset-slate-900
              sm:text-base
            "
          >
            Request Enterprise Demo
          </Link>

          <Link
            href="/start-free"
            className="
              inline-flex
              min-h-11
              w-full
              max-w-[140px]
              items-center
              justify-center
              rounded-[10px]
              border
              border-white/30
              bg-white/10
              px-6
              text-sm
              font-semibold
              text-white
              backdrop-blur-sm
              transition
              hover:bg-white/15
              focus:outline-none
              focus:ring-2
              focus:ring-white/40
              focus:ring-offset-2
              focus:ring-offset-slate-900
              sm:text-base
            "
          >
            Start Free
          </Link>
        </div>

        {/* Trust statement */}
        <p className="mt-6 text-xs leading-5 text-white/70 sm:text-sm">
          Worker-visible records · Human review · No invasive monitoring.
        </p>

        {/* Privacy statement */}
        <p className="mx-auto mt-8 max-w-2xl text-xs leading-5 text-white/60">
          No screenshots, keystroke content, URL history, application-name
          monitoring, or clipboard collection under any tier or configuration.
        </p>
      </div>
    </section>
  );
}