import React from 'react';

interface DefinitionRow {
  term: string;
  detail: string;
}

interface DefinitionCard {
  title: string;
  objective: string;
  rows: DefinitionRow[];
  limitations: React.ReactNode;
}

const cards: DefinitionCard[] = [
  {
    title: 'Access, delivery & receipt',
    objective: 'keep four things apart that products routinely merge.',
    rows: [
      {
        term: 'Access',
        detail:
          'Whether an authorized person can open it — checked server-side on every request, not at generation time',
      },
      {
        term: 'Delivery',
        detail: 'Whether it was sent to a destination, where delivery is configured',
      },
      { term: 'Download', detail: 'Whether a copy was actually taken' },
      {
        term: 'Receipt & reconciliation',
        detail: 'Whether a target acknowledged it, and whether expected matched observed',
      },
    ],
    limitations: (
      <>
        <span className="font-bold">Limitations:</span> permission can change after generation, and
        it is rechecked rather than trusted. A package generated under one authorization does not stay
        open because it once was.
      </>
    ),
  },
  {
    title: 'Expiry, revocation & supersession',
    objective: 'be precise about what revocation can and cannot reach.',
    rows: [
      { term: 'Revocation', detail: 'Platform access can be revoked where supported' },
      {
        term: 'Supersession',
        detail: 'A newer bundle links to the prior one with a reason; the prior manifest stays historical',
      },
      { term: 'Retention', detail: 'Retention, hold and disposition follow authoritative policy' },
    ],
    limitations: (
      <>
        <span className="font-bold">The honest limit:</span> ZoikoTime{' '}
        <span className="font-bold">
          cannot recall or erase copies already obtained outside its control
        </span>
        . Revoking platform access is a real control; claiming a downloaded file can be un-downloaded
        would be false. No expiry or retention duration is stated here, because none is a confirmed
        capability.
      </>
    ),
  },
];

export default function AccessAndExpiry() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
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
              <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60 text-xs font-bold text-[#2e8b57] dark:text-green-400">
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
            <dl className="px-5 sm:px-6 py-4 grid grid-cols-1 sm:grid-cols-[11rem_1fr] gap-x-5 flex-1">
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

            {/* Limitations Footer */}
            <div className="px-5 sm:px-6 py-4 bg-amber-50/50 dark:bg-amber-950/20 border-t border-dashed border-amber-200 dark:border-amber-900/60">
              <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                {card.limitations}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
