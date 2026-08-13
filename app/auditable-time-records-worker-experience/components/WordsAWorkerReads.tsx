import React from 'react';

interface WordingPair {
  prohibited: string;
  required: string;
}

const wordingPairs: WordingPair[] = [
  { prohibited: 'Suspicious / failed / noncompliant worker', required: 'Needs context' },
  { prohibited: 'Under investigation', required: 'Pending review' },
  { prohibited: 'Worker disputed the system', required: 'Correction requested' },
  { prohibited: 'Your claim was rejected', required: 'No change approved' },
  {
    prohibited: 'You were absent / did not work',
    required: 'The source is unavailable, so this record needs review',
  },
  { prohibited: 'Prove that you worked', required: 'Request a correction or provide context' },
  { prohibited: 'AI decided · system verdict', required: 'Your request was reviewed by an authorized role' },
  {
    prohibited: 'Current policy replaces the old rule',
    required: 'A newer policy exists; this record used version 3',
  },
  {
    prohibited: 'You accept this record / waive further review',
    required: 'Acknowledged: you have seen this notice',
  },
  { prohibited: 'Payroll corrected', required: 'Downstream update pending' },
  {
    prohibited: 'Hidden evidence proves the outcome',
    required: 'Some details are restricted for privacy or security',
  },
  { prohibited: 'Contact Sales for worker support', required: 'Contact Help, Privacy, or Accessibility' },
];

export default function WordsAWorkerReads() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-4">

        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3 mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            The words a worker actually reads
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Left column is what a workforce product usually says. Right column is what this one says
            instead. Microcopy is where dignity is either preserved or lost.
          </p>
        </div>

        {/* Wording Comparison */}
        <div className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="text-xs font-bold uppercase tracking-wide">
                <th
                  scope="col"
                  className="w-1/2 px-4 pt-3 pb-3.5 bg-rose-50 dark:bg-rose-950/30 border-b border-rose-200 dark:border-rose-900/60 text-rose-700 dark:text-rose-400"
                >
                  Prohibited
                </th>
                <th
                  scope="col"
                  className="w-1/2 px-4 pt-3 pb-3.5 bg-emerald-50/60 dark:bg-emerald-950/20 border-b border-l border-emerald-100 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-400"
                >
                  Required
                </th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {wordingPairs.map((pair) => (
                <tr key={pair.prohibited} className="align-top">
                  <td className="px-4 pt-2.5 pb-3 border-b border-slate-100 dark:border-slate-800/60 text-rose-700 dark:text-rose-300 line-through leading-5">
                    {pair.prohibited}
                  </td>
                  <td className="px-4 pt-2.5 pb-3 border-b border-l border-slate-100 dark:border-slate-800/60 text-emerald-900/90 dark:text-emerald-200/90 leading-5">
                    {pair.required}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Conditional Permission Note */}
        <p className="w-full text-xs text-slate-500 dark:text-slate-400 leading-5">
          “Under investigation” is permitted only where an actual authorized investigation exists.
          “Payroll corrected” is permitted only where target acceptance and reconciliation are
          genuinely confirmed. Neither is a default label.
        </p>

      </div>
    </section>
  );
}
