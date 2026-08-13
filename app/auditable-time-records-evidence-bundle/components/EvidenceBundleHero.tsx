import React from 'react';

export default function EvidenceBundleHero() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">

        {/* Left Content Area */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-3">

          {/* Badge */}
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#e1f6e6] dark:bg-emerald-950/50 text-[#2e8b57] dark:text-green-400 text-xs font-bold uppercase leading-5 tracking-wider">
            Evidence Bundle &amp; Export
          </div>

          {/* Heading */}
          <h1 className="pt-2 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Package evidence for a purpose — with the{' '}
            <span className="text-green-400">gaps declared</span>
          </h1>

          {/* Subtext */}
          <p className="pt-2 text-slate-600 dark:text-slate-400 text-base leading-7 max-w-xl">
            An evidence bundle is a purpose-bound package of permitted workforce-record evidence.
            Its manifest identifies the exact record versions, source references, policy snapshots,
            corrections, approvals, notices, downstream status, filters, redactions, unavailable
            items, generator, time context, recipient, and package version.
          </p>

          <p className="text-slate-600 dark:text-slate-400 text-base leading-7 max-w-xl">
            It supports review and export continuity.{' '}
            <span className="font-bold text-slate-800 dark:text-slate-200">
              It does not by itself establish legal admissibility, compliance, completeness, payroll
              correctness, or factual correctness.
            </span>
          </p>

        </div>

        {/* Right Image Container */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            className="w-full max-w-lg lg:max-w-none h-auto rounded-2xl shadow-xl object-cover"
            src="/auditable-time-records-evidence-bundle/hero.png"
            alt="Permitted evidence selected by purpose and packaged, with included and excluded items shown side by side"
          />
        </div>

      </div>
    </section>
  );
}
