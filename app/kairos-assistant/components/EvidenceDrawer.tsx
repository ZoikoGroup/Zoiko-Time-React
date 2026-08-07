import React from 'react';

const referenceIdentityItems = [
  'Reference ID and object type',
  'Human-readable title',
  'Organization or unit scope',
  'Current version, created and updated time, time zone',
];

const sourceAuthorityItems = [
  'Owning system or governed source category',
  'Source owner and authority level',
  'Ingestion or creation method, only when documented',
];

export default function EvidenceDrawer() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-10 lg:gap-12">
        
        {/* Section Header & Main Drawer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Heading + Identity/Authority Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <header className="flex flex-col items-start gap-3">
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Evidence &amp; Source Drawer
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Why It Was Included, and Why It Was Limited
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-[640px]">
                Each reference opens to show its identity, authority, status, and — most usefully — a plain-language account of how it supports the answer and where it falls short.
              </p>
            </header>

            {/* Sub-cards: Identity & Authority */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Reference Identity Card */}
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3.5">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Reference identity
                </h3>
                <ul className="flex flex-col gap-2.5 pl-0 list-none">
                  {referenceIdentityItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                      <span className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Source Authority Card */}
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3.5">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Source authority
                </h3>
                <ul className="flex flex-col gap-2.5 pl-0 list-none">
                  {sourceAuthorityItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                      <span className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Right Column: Evidence Detail Preview Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6">
            <div className="flex flex-col items-start gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">
                Evidence detail
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Attendance feed · source category
              </h3>
            </div>

            <div className="flex flex-col gap-5 divide-y divide-slate-100 dark:divide-slate-800/60">
              
              {/* Section 1: Why Included */}
              <div className="flex flex-col gap-1">
                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                  Why included
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  It contributes attendance states for the selected unit and period, which the question asked about directly.
                </p>
              </div>

              {/* Section 2: Why Limited */}
              <div className="pt-4 flex flex-col gap-1">
                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                  Why limited
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  Last successful receipt was 41 hours ago against a 24-hour policy threshold. Records after that point may exist but were not evaluated.
                </p>
              </div>

              {/* Section 3: Effect on the Answer */}
              <div className="pt-4 flex flex-col gap-1">
                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                  Effect on the answer
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  Answer status is <strong className="font-semibold text-slate-900 dark:text-white">Partial</strong>. The count shown is a floor, not a total.
                </p>
              </div>

              {/* Section 4: Safe Next Step */}
              <div className="pt-4 flex flex-col gap-1">
                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                  Safe next step
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  Open source status, or retry after recovery. Contact the source owner if the delay persists.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}