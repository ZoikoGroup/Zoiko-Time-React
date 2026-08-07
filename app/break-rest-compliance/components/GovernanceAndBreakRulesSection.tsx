import React from 'react';

const whatIsList = [
  'A configured record of scheduled vs. taken breaks',
  'A shared, transparent view for worker and reviewer alike',
  'A place for workers to flag and correct a record',
  'An evidence trail a human reviewer signs off on',
];

const whatIsNotList = [
  'Location or GPS tracking during a break',
  'Screenshots, keystroke logging, or activity capture',
  'A productivity or performance score',
  'An automatic disciplinary decision',
];

const breakContextCards = [
  {
    number: '01',
    title: 'Jurisdictional variation',
    description:
      'Meal and rest thresholds differ by state, province, or country, and change more often than most policy documents do.',
  },
  {
    number: '02',
    title: 'Shift and role variation',
    description:
      'A 4-hour retail shift and a 12-hour warehouse shift rarely follow the same break structure, even under one employer.',
  },
  {
    number: '03',
    title: 'Negotiated terms',
    description:
      'Collective bargaining agreements can add requirements on top of statutory minimums for specific worker groups.',
  },
];

export default function GovernanceAndBreakRulesSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-16 lg:gap-20">
        
        {/* SECTION 1: Governance & Anti-Surveillance */}
        <div className="flex flex-col gap-10">
          <header className="flex flex-col gap-3 max-w-[620px]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-sm" />
              <span className="text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
                Anti-Surveillance &amp; Trust
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Governance infrastructure, not workplace surveillance.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              ZoikoTime records whether a configured break or rest period happened as scheduled. It does not watch what a worker does during that time, and it does not decide discipline on its own.
            </p>
          </header>

          {/* What it IS vs What it ISN'T Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* What this is (Positive/Emerald) */}
            <div className="p-6 sm:p-8 bg-emerald-50/80 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/40 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-teal-700 dark:text-teal-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  What this is
                </h3>
              </div>

              <ul className="flex flex-col gap-3.5 text-sm text-slate-700 dark:text-slate-300">
                {whatIsList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 bg-teal-600 dark:bg-teal-400 rounded-full shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What this isn't (Neutral/Gray) */}
            <div className="p-6 sm:p-8 bg-slate-100/80 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-slate-500 dark:text-slate-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  What this isn&apos;t
                </h3>
              </div>

              <ul className="flex flex-col gap-3.5 text-sm text-slate-500 dark:text-slate-400">
                {whatIsNotList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 bg-slate-400 dark:bg-slate-600 rounded-full shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Explanation Callout Banner */}
          <div className="p-6 sm:p-8 bg-slate-100/90 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              How does ZoikoTime handle breaks and rest?
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              ZoikoTime applies your configured break and rest policy to every shift, records whether each break was{' '}
              <strong className="text-slate-900 dark:text-white font-bold">Scheduled</strong>,{' '}
              <strong className="text-slate-900 dark:text-white font-bold">Taken</strong>,{' '}
              <strong className="text-slate-900 dark:text-white font-bold">Under Review</strong>, or resolved as an{' '}
              <strong className="text-slate-900 dark:text-white font-bold">Exception</strong>, and routes anything irregular to a human reviewer. Workers can see their own records and request a correction at any time. ZoikoTime does not guarantee legal compliance and does not replace legal counsel — it gives your team a consistent, evidenced way to apply the policy you&apos;ve configured.
            </p>
          </div>
        </div>
         {/* 3 Image Placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800 shadow-sm">
              <img
                src="/break-rest-compliance/Two warehouse workers.png"
                alt="Jurisdictional Break Representation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800 shadow-sm">
              <img
                src="/break-rest-compliance/Reviewer team collaborating.png"
                alt="Shift and Role Representation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800 shadow-sm">
              <img
                src="/break-rest-compliance/Reviewer team looking.png"
                alt="Negotiated Terms Representation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        {/* SECTION 2: Break Context & Image Placeholders */}
        <div className="flex flex-col gap-8">
          <header className="flex flex-col gap-3 max-w-[600px]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-sm" />
              <span className="text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
                Break &amp; Rest Context
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Break rules are rarely just one rule.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Meal and rest requirements shift by jurisdiction, industry, shift length, and sometimes by collective agreement — often within the same company.
            </p>
          </header>

         

          {/* 3 Context Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {breakContextCards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3"
              >
                <span className="text-xs font-semibold text-teal-700 dark:text-teal-400">
                  {card.number}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}