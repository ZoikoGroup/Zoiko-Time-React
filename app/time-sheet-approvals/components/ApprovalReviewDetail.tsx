import React from 'react';

interface RegionCard {
  number: string;
  title: string;
  description: string;
  isGuard?: boolean;
}

const regions: RegionCard[] = [
  {
    number: '01',
    title: 'Header',
    description:
      'Worker and period, submitted version, status, workflow, assigned role, policy and jurisdiction, source health, last update.',
  },
  {
    number: '02',
    title: 'Period summary',
    description:
      'Included records, totals where appropriate, completeness, exceptions, correction status, change since prior version.',
  },
  {
    number: '03',
    title: 'Record detail',
    description:
      'Date, time and time zone, source, context, deterministic classification, exception, worker correction, evidence reference, status.',
  },
  {
    number: '04',
    title: 'Change comparison',
    description:
      'Previous versus submitted version, changed fields, actor, reason, impact, unresolved conflict.',
  },
  {
    number: '05',
    title: 'Policy panel',
    description:
      'Policy, version, effective date, configured rule reference, jurisdiction qualification, shared-responsibility note.',
  },
  {
    number: '06',
    title: 'Worker context',
    description:
      'Permitted structured note or correction request, with visibility stated. No hidden sentiment analysis of any kind.',
  },
  {
    number: '07',
    title: 'Evidence panel',
    description:
      'Source, event, version, timestamp, integrity and availability state, Evidence Ledger deep link.',
  },
  {
    number: '08',
    title: 'Decision panel',
    description:
      'Request information · Return for correction · Approve · Escalate. Each shows impact and requires a reason according to policy.',
  },
  {
    number: '09',
    title: 'Conflict guard',
    description:
      'If reviewer authority, assignment, or period state changed while the case was open, decision controls are disabled and the change is explained.',
    isGuard: true,
  },
];

export default function ApprovalReviewDetail() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Header Section */}
        <header className="max-w-[780px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Approval Review Detail
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Nine Regions a Reviewer Sees Before Deciding
          </h2>
          <p className="max-w-[640px] text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
            Evidence and change comparison come before the decision panel. A reviewer should not be able to approve without having passed the reasons to.
          </p>
        </header>

        {/* 9 Regions Grid Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {regions.map((region) => (
            <div
              key={region.number}
              className={`p-6 rounded-2xl border shadow-sm flex flex-col gap-3 transition-all ${
                region.isGuard
                  ? 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800/60'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`text-base font-bold ${
                    region.isGuard
                      ? 'text-amber-950 dark:text-amber-200'
                      : 'text-slate-900 dark:text-white'
                  }`}
                >
                  {region.title}
                </h3>
                <span
                  className={`text-xs font-extrabold px-2 py-0.5 rounded-full ${
                    region.isGuard
                      ? 'bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-300'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {region.number}
                </span>
              </div>

              <p
                className={`text-sm leading-relaxed ${
                  region.isGuard
                    ? 'text-amber-900/80 dark:text-amber-300/80'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {region.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}