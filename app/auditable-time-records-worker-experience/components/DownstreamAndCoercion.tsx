import React from 'react';

interface DefinitionRow {
  term: string;
  detail: React.ReactNode;
}

interface DefinitionCard {
  title: string;
  objective: string;
  rows: DefinitionRow[];
  footer: React.ReactNode;
}

const cards: DefinitionCard[] = [
  {
    title: 'Downstream and payroll boundary',
    objective: 'never let a worker read “corrected” as “paid.”',
    rows: [
      {
        term: 'Record vs payroll',
        detail:
          'ZoikoTime may prepare, approve, and export governed time records. It does not claim to perform gross-to-net payroll.',
      },
      {
        term: 'Corrected vs delivered',
        detail: 'A corrected record is not the same as a downstream system receiving the update',
      },
      {
        term: 'Delivered vs reconciled',
        detail: 'A receipt is not proof the target accepted the expected value',
      },
      {
        term: 'Worker-visible wording',
        detail:
          '“Downstream update pending” — never “payroll corrected” unless acceptance and reconciliation are genuinely confirmed',
      },
    ],
    footer: (
      <>
        <span className="font-bold">Professional boundary:</span> no worker-facing message declares
        statutory pay entitlement, legal compliance, or an employment-law conclusion. Technical
        identifiers, secrets, and system topology stay hidden.
      </>
    ),
  },
  {
    title: 'Errors, cutoffs & no coercion',
    objective: 'keep urgency honest and blame absent.',
    rows: [
      {
        term: 'External errors',
        detail: (
          <>
            Shown as a system or integration state.{' '}
            <span className="font-bold text-slate-800 dark:text-slate-100">
              Blame is never assigned to the worker.
            </span>
          </>
        ),
      },
      {
        term: 'Missing source',
        detail: (
          <>
            Missing calendar, access, device, or integration context is{' '}
            <span className="font-bold text-slate-800 dark:text-slate-100">
              not automatic evidence of absence or non-work
            </span>
          </>
        ),
      },
      {
        term: 'Cutoff risk',
        detail: 'Shown where configured — but it never bypasses required review, notice, or approval',
      },
      {
        term: 'No coercion',
        detail:
          'A deadline never pressures a worker into a response, and no interface makes accepting faster than asking',
      },
    ],
    footer: (
      <>
        <span className="font-bold">Limitations:</span> downstream detail appears only where it is
        understandable, permitted, and useful to the worker. Where it is not, the record says so
        rather than showing a technical state nobody can act on.
      </>
    ),
  },
];

export default function DownstreamAndCoercion() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden"
          >
            {/* Card Header */}
            <div className="px-5 sm:px-6 pt-5 sm:pt-6 flex items-start justify-between gap-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {card.title}
              </h3>
              <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-full bg-[#e1f6e6] dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60 text-xs font-bold text-[#2e8b57] dark:text-green-400">
                Current
              </span>
            </div>

            {/* Objective */}
            <div className="mx-5 sm:mx-6 mt-4 px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="font-bold text-slate-900 dark:text-white">Objective:</span>{' '}
                {card.objective}
              </p>
            </div>

            {/* Definition Rows */}
            <dl className="px-5 sm:px-6 py-4 grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-5 flex-1">
              {card.rows.map((row) => (
                <React.Fragment key={row.term}>
                  <dt className="text-xs font-semibold text-slate-500 dark:text-slate-400 leading-6">
                    {row.term}
                  </dt>
                  <dd className="text-xs text-slate-700 dark:text-slate-300 leading-6 mb-2 sm:mb-0">
                    {row.detail}
                  </dd>
                </React.Fragment>
              ))}
            </dl>

            {/* Boundary Footer */}
            <div className="px-5 sm:px-6 py-4 bg-amber-50/50 dark:bg-amber-950/20 border-t border-dashed border-amber-200 dark:border-amber-900/60">
              <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                {card.footer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
