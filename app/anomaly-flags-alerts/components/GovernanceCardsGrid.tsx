import React from 'react';

interface CardDetail {
  label: string;
  value: string;
}

interface GovernanceCardProps {
  title: string;
  badgeText?: string;
  objective: string;
  details: CardDetail[];
  limitationText: React.ReactNode;
}

const governanceCards: GovernanceCardProps[] = [
  {
    title: 'Source health & data quality',
    badgeText: 'Current',
    objective: 'distinguish a record condition from a pipeline condition.',
    details: [
      {
        label: 'States',
        value:
          'Missing · stale · duplicate · conflicting · delayed · unavailable · reconciliation required',
      },
      {
        label: 'Routing',
        value: 'Source conditions route to the source owner, not the worker',
      },
      {
        label: 'Effect on flags',
        value: 'Affected flags carry the quality state and a stated limitation',
      },
    ],
    limitationText: (
      <>
        A count derived from a stale source is a floor, not a total, and says so. An unavailable source never silently substitutes older data.
      </>
    ),
  },
  {
    title: 'Definition & threshold governance',
    badgeText: 'Current',
    objective: 'make every condition owned, tested, and reversible.',
    details: [
      {
        label: 'Lifecycle',
        value:
          'Owned · tested · impact-previewed · approved · published · monitored · revised · withdrawn · preserved',
      },
      {
        label: 'Impact preview',
        value: 'How many flags a change would create or retire, before publication',
      },
      {
        label: 'Versioning',
        value:
          'A threshold change creates a new version; prior flags keep the version that created them',
      },
    ],
    limitationText: (
      <>
        A definition is never edited in place. Retired definitions and their historical flags are preserved rather than deleted, so a resolved case still explains itself years later.
      </>
    ),
  },
  {
    title: 'Routing & fatigue control',
    badgeText: 'Current',
    objective: 'keep alerts meaningful, because ignored alerts protect nobody.',
    details: [
      {
        label: 'Controls',
        value:
          'Grouping · deduplication · correlation · quiet hours · digests · rate limits · expiry',
      },
      {
        label: 'Coverage',
        value: 'An unowned route escalates rather than dropping the signal',
      },
      {
        label: 'Health review',
        value: 'Delivery failures and duplicate rates are reviewed as operational conditions',
      },
    ],
    limitationText: (
      <>
        Deduplication groups repeated signals <strong className="font-semibold text-amber-900 dark:text-amber-200">without deleting underlying evidence</strong>. Suppression is approved, time-bound, and audited — it is not deletion, and it does not suspend review obligations.
      </>
    ),
  },
];

export default function GovernanceCardsGrid() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {governanceCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between overflow-hidden transition-all"
          >
            {/* Top Container */}
            <div className="p-5 flex flex-col gap-4 flex-1">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-bold font-['Figtree'] text-slate-900 dark:text-white leading-snug">
                  {card.title}
                </h3>
                {card.badgeText && (
                  <span className="shrink-0 px-2.5 py-0.5 text-xs font-bold   rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    {card.badgeText}
                  </span>
                )}
              </div>

              {/* Objective Banner */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800 text-xs   leading-relaxed">
                <span className="font-bold text-slate-700 dark:text-slate-200">Objective: </span>
                <span className="text-slate-600 dark:text-slate-300">{card.objective}</span>
              </div>

              {/* Details Key-Value List */}
              <div className="space-y-3 pt-1">
                {card.details.map((detail, dIdx) => (
                  <div key={dIdx} className="space-y-0.5">
                    <span className="block text-xs font-semibold   text-slate-500 dark:text-slate-400">
                      {detail.label}
                    </span>
                    <p className="text-xs font-normal   text-slate-700 dark:text-slate-300 leading-relaxed">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Limitation Box */}
            <div className="p-4 sm:p-5 bg-amber-50/60 dark:bg-amber-950/30 border-t border-amber-200/60 dark:border-amber-900/40 text-xs   leading-relaxed text-amber-900 dark:text-amber-300">
              <span className="font-bold text-amber-800 dark:text-amber-400">Limitations: </span>
              {card.limitationText}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}