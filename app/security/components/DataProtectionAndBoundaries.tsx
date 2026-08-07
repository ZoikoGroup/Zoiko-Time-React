import React from 'react';

interface SecurityCardData {
  title: string;
  status: 'Current' | 'Partially implemented';
  objective: string;
  scope: string;
  summary: string;
  owner: string;
  lastReviewed: string;
  limitationsHeader?: string;
  limitationsContent: React.ReactNode;
}

const cardData: SecurityCardData[] = [
  {
    title: 'Data classification, minimization & protection',
    status: 'Current',
    objective: 'Categorize data by sensitivity and protect it appropriately in transit and at rest.',
    scope: 'Approved data categories · production',
    summary: 'Collection and storage minimization; protection in transit and at rest; key and secret lifecycle governance; backup, export, temporary-data, and deletion treatment.',
    owner: 'Security · reviewed by Privacy',
    lastReviewed: '01 Jul 2026',
    limitationsHeader: 'Limitations:',
    limitationsContent: (
      <>
        Algorithms, key lengths, rotation intervals, and vault topology are not published here — that detail routes through controlled review. Security protection does not replace privacy purpose, retention, or rights analysis; see{' '}
        <a href="#privacy" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
          Privacy
        </a>
        .
      </>
    ),
  },
  {
    title: 'Tenant, entity, environment & region boundaries',
    status: 'Partially implemented',
    objective: 'Keep organization, entity, and environment scope separated, and govern any movement across them.',
    scope: 'Tenant and organization context; entity, jurisdiction, and policy scope; production, testing, and development separation',
    summary: 'Customer-specific configuration and data boundaries; provider and region dependencies; cross-region or cross-entity movement requires governed rules and evidence.',
    owner: 'Platform · reviewed by Security',
    lastReviewed: '28 Jun 2026',
    limitationsHeader: 'Partially implemented — stated scope:',
    limitationsContent: (
      <>
        Environment separation and tenant context are current across all supported regions. Region-specific isolation guarantees are <strong>not</strong> claimed. We do not assert physical isolation or universal residency. Data location and residency is assessed region by region and remains a separate evidence-gated destination.
      </>
    ),
  },
];

export default function DataProtectionAndBoundaries() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs p-5 sm:p-6 flex flex-col justify-between gap-6"
          >
            <div className="flex flex-col gap-4">
              
              {/* Header with Title and Status Badge */}
              <div className="flex items-start justify-between gap-3 pb-1 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {card.title}
                </h3>

                {card.status === 'Current' ? (
                  <span className="shrink-0 px-2.5 py-1 text-xs font-bold rounded-full bg-slate-100 text-emerald-600 dark:bg-slate-800 dark:text-emerald-400">
                    Current
                  </span>
                ) : (
                  <span className="shrink-0 px-2.5 py-1 text-xs font-bold rounded-full bg-slate-100 text-indigo-600 dark:bg-slate-800 dark:text-indigo-400">
                    Partially implemented
                  </span>
                )}
              </div>

              {/* Objective Banner */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200/80 dark:border-slate-800 text-xs leading-relaxed">
                <strong className="font-bold text-slate-900 dark:text-white mr-1">Objective:</strong>
                <span className="text-slate-600 dark:text-slate-300">{card.objective}</span>
              </div>

              {/* Metadata Details */}
              <dl className="grid grid-cols-1 gap-3 text-xs pt-1">
                <div>
                  <dt className="font-semibold text-slate-400 dark:text-slate-500">Scope</dt>
                  <dd className="text-slate-700 dark:text-slate-300 font-medium mt-0.5 leading-relaxed">
                    {card.scope}
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-slate-400 dark:text-slate-500">Summary</dt>
                  <dd className="text-slate-700 dark:text-slate-300 font-medium mt-0.5 leading-relaxed">
                    {card.summary}
                  </dd>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <dt className="font-semibold text-slate-400 dark:text-slate-500">Owner</dt>
                    <dd className="text-slate-700 dark:text-slate-300 font-medium mt-0.5">
                      {card.owner}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-semibold text-slate-400 dark:text-slate-500">Last reviewed</dt>
                    <dd className="text-slate-700 dark:text-slate-300 font-medium mt-0.5">
                      {card.lastReviewed}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Limitations Notice Box */}
            <div className="p-4 bg-amber-50/60 dark:bg-amber-950/30 rounded-xl border border-amber-200/80 dark:border-amber-900/50 text-xs leading-relaxed text-amber-900 dark:text-amber-200">
              {card.limitationsHeader && (
                <strong className="font-bold mr-1">{card.limitationsHeader}</strong>
              )}
              <span>{card.limitationsContent}</span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}