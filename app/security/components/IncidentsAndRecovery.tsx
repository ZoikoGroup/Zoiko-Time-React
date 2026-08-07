import React from 'react';

interface IncidentCard {
  title: string;
  status: 'Current' | 'Under review';
  objective: string;
  details: { label: string; value: React.ReactNode }[];
  limitationsLabel?: string;
  limitationsContent: React.ReactNode;
}

const cardsData: IncidentCard[] = [
  {
    title: 'Incident response',
    status: 'Current',
    objective:
      'Preparation, detection, triage, containment, recovery, and review. Severity and decision authority are defined internally; public summaries stay safe and accurate.',
    details: [
      {
        label: 'Current state',
        value: (
          <span>
            <a href="#status" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
              System Status
            </a>{' '}
            is authoritative
          </span>
        ),
      },
      {
        label: 'Notification',
        value: 'Follows approved contractual, legal, and operational criteria',
      },
      {
        label: 'Owner',
        value: 'Security',
      },
    ],
    limitationsLabel: 'Limitations:',
    limitationsContent:
      'No guaranteed notification or recovery time unless contractually approved for your agreement. No public incident detail that would increase risk.',
  },
  {
    title: 'Vulnerability reporting',
    status: 'Current',
    objective:
      'A public reporting route with triage, validation, severity assignment, ownership, and remediation states. Duplicate, non-actionable, out-of-scope, and unsafe disclosures are handled explicitly.',
    details: [
      {
        label: 'Report to',
        value: (
          <a href="#report" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
            Security reporting route
          </a>
        ),
      },
      {
        label: 'Do not include',
        value: 'Credentials, worker data, or unnecessary sensitive detail',
      },
    ],
    limitationsLabel: 'Limitations:',
    limitationsContent:
      'No bounty, safe-harbor terms, acknowledgement, or remediation timeframe is promised on this page — none of those is currently approved. Live vulnerabilities and exploit detail are never published.',
  },
  {
    title: 'Backup, recovery & continuity',
    status: 'Under review',
    objective:
      'Access, encryption, integrity, and restoration testing are governed. Dependency, provider, and region considerations are explicit.',
    details: [
      {
        label: 'Restoration',
        value: 'Does not silently overwrite current evidence or audit history',
      },
      {
        label: 'Owner',
        value: 'Platform · reviewed by Security',
      },
    ],
    limitationsLabel: 'Under review:',
    limitationsContent: (
      <>
        Wording and scope are being reassessed, so this summary should not be relied on as settled. RPO, RTO, and availability figures are <strong>not</strong> published without maintained evidence and contract scope — Platform Reliability remains a separate, evidence-gated destination.
      </>
    ),
  },
];

export default function IncidentsAndRecovery() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <header className="max-w-[780px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Incidents, Vulnerabilities &amp; Recovery
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Response, Disclosure, and What We Will Not Promise
          </h2>
        </header>

        {/* 3-Column Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {cardsData.map((card, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs p-5 sm:p-6 flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-4">
                
                {/* Header Title & Badge */}
                <div className="flex items-start justify-between gap-2 pb-1 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {card.title}
                  </h3>

                  {card.status === 'Current' ? (
                    <span className="shrink-0 px-2.5 py-1 text-xs font-bold rounded-full bg-slate-100 text-emerald-600 dark:bg-slate-800 dark:text-emerald-400">
                      Current
                    </span>
                  ) : (
                    <span className="shrink-0 px-2.5 py-1 text-xs font-bold rounded-full bg-slate-100 text-indigo-600 dark:bg-slate-800 dark:text-indigo-400">
                      Under review
                    </span>
                  )}
                </div>

                {/* Objective Description Box */}
                <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200/80 dark:border-slate-800 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {card.objective}
                </div>

                {/* Key Details Metadata List */}
                <dl className="grid grid-cols-1 gap-3 text-xs pt-1">
                  {card.details.map((item, dIdx) => (
                    <div key={dIdx}>
                      <dt className="font-semibold text-slate-400 dark:text-slate-500">
                        {item.label}
                      </dt>
                      <dd className="text-slate-700 dark:text-slate-300 font-medium mt-0.5 leading-relaxed">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Bottom Limitations Callout */}
              <div className="p-4 bg-amber-50/60 dark:bg-amber-950/30 rounded-xl border border-amber-200/80 dark:border-amber-900/50 text-xs leading-relaxed text-amber-900 dark:text-amber-200">
                {card.limitationsLabel && (
                  <strong className="font-bold mr-1">{card.limitationsLabel}</strong>
                )}
                <span>{card.limitationsContent}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}