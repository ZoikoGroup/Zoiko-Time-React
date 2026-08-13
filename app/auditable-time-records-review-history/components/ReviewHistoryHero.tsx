import React from 'react';

export default function ReviewHistoryHero() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">

        {/* Left Content Area */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-3">

          {/* Badge */}
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#e1f6e6] dark:bg-emerald-950/50 text-[#2e8b57] dark:text-green-400 text-xs font-bold uppercase leading-5 tracking-wider">
            Correction &amp; Approval History
          </div>

          {/* Heading */}
          <h1 className="pt-2 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            See what changed, who reviewed it, and what became{' '}
            <span className="text-green-400">effective</span>
          </h1>

          {/* Subtext */}
          <p className="pt-2 text-slate-600 dark:text-slate-400 text-base leading-7 max-w-xl">
            Review corrections, reviewer actions, approvals, notices, reopenings, and
            superseding record versions as an attributable history. Every material event
            keeps its actor or service identity, reason, time, evidence context, and
            relationship to the record version it affected.
          </p>

          <p className="text-slate-600 dark:text-slate-400 text-base leading-7 max-w-xl">
            <span className="font-bold text-slate-800 dark:text-slate-200">
              Chronology is not proof.
            </span>{' '}
            A history supports transparent review and accountable administration. It does
            not establish legal correctness, misconduct, or a payroll outcome.
          </p>

        </div>

        {/* Right Image Container */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            className="w-full max-w-lg lg:max-w-none h-auto rounded-2xl shadow-xl object-cover"
            src="/auditable-time-records-review-history/hero.png"
            alt="Record versions, reviewer actions, and effective dates linked as a single chronology"
          />
        </div>

      </div>
    </section>
  );
}
