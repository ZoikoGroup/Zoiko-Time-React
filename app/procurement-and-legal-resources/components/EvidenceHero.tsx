"use client";

import Image from "next/image";

export default function EvidenceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 px-6 py-14 dark:from-slate-950 dark:to-slate-900 sm:px-8 lg:px-10 lg:py-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-[-180px] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1300px] items-center gap-14 lg:grid-cols-[520px_1fr]">
        {/* Left Content */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">
            Evidence Center
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-800 dark:text-white lg:text-5xl">
            Procurement and
            <br />
            legal resources,
            <span className="text-emerald-400"> governed</span>
            <span className="text-slate-800 dark:text-white">
              {" "}and
              <br />
              current
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-slate-500 dark:text-slate-400">
            Discover trusted documentation, request controlled resources,
            and understand how ZoikoTime reviews and versions the evidence
            your due diligence needs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-lg bg-emerald-400 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-500"
            >
              Request Procurement Resources
            </button>

            <button
              type="button"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              Request Enterprise Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image
            src="/procurement-and-legal-resources/hero-image.png"
            alt="Evidence Center"
            width={617}
            height={567}
            priority
            className="w-full rounded-3xl object-cover shadow-[0_30px_60px_rgba(14,31,61,0.22)]"
          />
        </div>
      </div>
    </section>
  );
}