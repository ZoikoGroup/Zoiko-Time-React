import React from 'react';

const includesList: string[] = [
  'Migration required, not required, or needs assessment',
  'Named dependency owners when assigned',
  'High-level readiness — data owner, source authority, retention or legal hold, quality, correction, acceptance',
  'Impact on scope, launch, testing, worker communication, support, and evidence',
];

const excludesList: string[] = [
  'Supported source systems, formats, objects, volumes, history, attachments, transformations, exclusions',
  'Extraction, secure transfer, staging, mapping, validation, reconciliation, cutover, rollback, deletion',
  'Tooling, automation, throughput, duration, specialist staffing, package, entitlement, or price',
  'Migration service terms, acceptance criteria, capacity, legal review, and current availability',
  'Any public link, card, sitemap entry, or placeholder before independent release',
];

export default function DataMigrationBoundary() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Section Header */}
        <div className="max-w-[780px] text-center flex flex-col gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Data Migration Boundary
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Migration Can Be a Dependency. It Is Not<br className="hidden sm:inline" /> Part of This Service.
          </h2>
          <p className="max-w-[644px] mx-auto text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Implementation may identify migration readiness and let it block a gate. It does not deliver migration, and nothing here should be read as a migration offer.
          </p>
        </div>

        {/* Two-Column Comparison Cards */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          {/* Card 1: What this page may show */}
          <div className="p-6 sm:p-8 bg-emerald-50/40 dark:bg-emerald-950/20 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/50 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-emerald-500/10 dark:bg-emerald-400/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                ✓
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                This page may show
              </h3>
            </div>

            <ul className="space-y-3.5">
              {includesList.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5 shrink-0">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: What this page must defer */}
          <div className="p-6 sm:p-8 bg-rose-50/40 dark:bg-rose-950/20 rounded-2xl border border-rose-200/80 dark:border-rose-800/50 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-rose-500/10 dark:bg-rose-400/20 flex items-center justify-center text-rose-600 dark:text-rose-400 font-bold text-xs">
                ✕
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                This page must defer
              </h3>
            </div>

            <ul className="space-y-3.5">
              {excludesList.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="text-rose-500 dark:text-rose-400 font-bold mt-0.5 shrink-0">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Approval Sequence Banner */}
        <div className="w-full p-5 sm:p-6 bg-sky-50/50 dark:bg-sky-950/30 rounded-xl border-l-4 border-l-sky-600 border-y border-r border-sky-200 dark:border-sky-800/60 flex flex-col gap-1.5">
          <span className="text-sky-700 dark:text-sky-400 text-xs font-bold uppercase tracking-wider">
            Approval sequence
          </span>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Data Migration is the next approval-gated Enterprise destination. It remains paused until Implementation Services is explicitly approved, and it is deliberately not linked from this page.
          </p>
        </div>

      </div>
    </section>
  );
}