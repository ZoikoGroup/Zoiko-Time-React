import React from 'react';

const owns: string[] = [
  'Chronological corrections and reviewer actions',
  'Approvals, decisions, conditions, and recusals',
  'Notice generation and delivery state',
  'Reopenings, supersession, and reversal handling',
  'Record-version changes and release impact',
];

const doesNotDuplicate: { module: string; scope: string }[] = [
  { module: 'See Policy Evidence', scope: 'the policy version and deterministic rule trace' },
  { module: 'Inspect Lineage', scope: 'relationship topology and provenance traversal' },
  { module: 'View Bundle', scope: 'manifest, redaction, generation, delivery, expiry' },
  { module: 'Worker Experience', scope: 'the worker journey as a whole' },
];

export default function ModuleBoundaries() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

        {/* What This Module Owns */}
        <div className="flex flex-col gap-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            What this module owns
          </h2>

          <div className="p-5 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Review History owns
            </h3>
            <ul className="space-y-2">
              {owns.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              And does not duplicate
            </h3>
            <ul className="space-y-2">
              {doesNotDuplicate.map((item) => (
                <li key={item.module} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="font-bold text-slate-900 dark:text-white">{item.module}</span>{' '}
                    — {item.scope}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What A History Cannot Establish */}
        <div className="flex flex-col gap-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            What a history cannot establish
          </h2>

          <div className="p-5 sm:p-6 bg-rose-50 dark:bg-rose-950/30 rounded-2xl border border-rose-200 dark:border-rose-900/60 space-y-2">
            <span className="block text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
              Chronology is not proof
            </span>
            <p className="text-sm text-rose-800 dark:text-rose-200 leading-relaxed">
              A complete-looking timeline does not establish that a decision was legally correct,
              fair in every jurisdiction, or sufficient for payroll, tax, employment, collective-agreement,
              or evidentiary requirements. It does not establish motive, misconduct, or worker
              performance — and it is not an immutability or admissibility claim.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-slate-100/60 dark:bg-slate-900/60 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-center space-y-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              No customer evidence
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
              No customer names, logos, volumes, or outcome metrics appear here. None has been
              verified for this module.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
