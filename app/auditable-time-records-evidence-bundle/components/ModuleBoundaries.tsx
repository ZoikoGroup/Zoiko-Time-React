import React from 'react';

const owns: string[] = [
  'Purpose, scope, and version pinning',
  'Evidence selection and the manifest',
  'Redaction and worker-safe review',
  'Recipient, destination, access, and approval',
  'Generation, delivery, expiry, and revocation',
];

const doesNotDuplicate: { module: string; scope: string }[] = [
  { module: 'Inspect Lineage', scope: 'relationship topology and provenance' },
  { module: 'See Policy Evidence', scope: 'the policy version and rule trace' },
  { module: 'Review History', scope: 'the chronological event record' },
  { module: 'Worker Experience', scope: 'the worker journey as a whole' },
  { module: 'Evidence Ledger', scope: 'the broader record-centred evidence authority' },
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
              Evidence Bundle owns
            </h3>
            <ul className="space-y-2">
              {owns.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1.5 w-1.5 rounded-full bg-green-500 shrink-0"
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
                    className="mt-[7px] h-1.5 w-1.5 rounded-full bg-green-500 shrink-0"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="font-bold text-slate-900 dark:text-white">{item.module}</span> —{' '}
                    {item.scope}
                  </span>
                </li>
              ))}
            </ul>
            <p className="pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              View Bundle is the focused packaging and export task. Evidence Ledger is the
              record-centred history and lifecycle authority. Asking either to do the other&apos;s job
              produces a worse version of both.
            </p>
          </div>
        </div>

        {/* What A Package Cannot Establish */}
        <div className="flex flex-col gap-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            What a package cannot establish
          </h2>

          <div className="p-5 sm:p-6 bg-rose-50 dark:bg-rose-950/30 rounded-2xl border border-rose-200 dark:border-rose-900/60 space-y-2">
            <span className="block text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
              Bundle law
            </span>
            <p className="text-sm text-rose-800 dark:text-rose-200 leading-relaxed">
              A complete-looking package does not prove that every underlying fact, rule, decision,
              external system, legal requirement, or consequence is correct, complete, current,
              lawful, admissible, or sufficient. It is not a legal discovery package, statutory audit
              file, regulator submission, payroll filing, evidence certification, non-repudiation
              mechanism, or chain-of-custody guarantee.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-slate-100/60 dark:bg-slate-900/60 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-center space-y-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              No customer evidence
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
              No customer names, logos, export volumes, or outcome metrics appear here. None has been
              verified for this module.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
