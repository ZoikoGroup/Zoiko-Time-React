import React from 'react';

interface FilterOption {
  label: string;
}

interface StatusBadge {
  label: string;
  colorClass: string;
}

interface EvidenceCard {
  title: string;
  accessLevel: 'Public' | 'Controlled';
  description: string;
  owner: string;
  reviewed: string;
  status: string;
  limitation: string;
}

const statusBadges: StatusBadge[] = [
  { label: 'Current', colorClass: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400' },
  { label: 'Under review', colorClass: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400' },
  { label: 'Partially implemented', colorClass: 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400' },
  { label: 'Exception active', colorClass: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400' },
  { label: 'Superseded', colorClass: 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400' },
  { label: 'Withdrawn', colorClass: 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400' },
  { label: 'Evidence-gated', colorClass: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300' },
];

const filterCategories: FilterOption[] = [
  { label: 'Control domain' },
  { label: 'Evidence type' },
  { label: 'Product scope' },
  { label: 'Status' },
  { label: 'Access level' },
  { label: 'Owner' },
  { label: 'Review date' },
];

const evidenceCards: EvidenceCard[] = [
  {
    title: 'Identity & access control summary',
    accessLevel: 'Public',
    description: 'Objective, scope, mechanism summary, dependencies, and limitations.',
    owner: 'Security',
    reviewed: '01 Jul 2026',
    status: 'Current',
    limitation: 'Limitation: IdP-specific capabilities confirmed per deployment.',
  },
  {
    title: 'Data protection control summary',
    accessLevel: 'Public',
    description: 'Classification, minimization, transport and storage protection at public-safe level.',
    owner: 'Security',
    reviewed: '01 Jul 2026',
    status: 'Current',
    limitation: 'Limitation: algorithm and key detail via controlled review only.',
  },
  {
    title: 'Change control evidence',
    accessLevel: 'Controlled',
    description: 'Release gates, approval records, and rollback evidence at review depth.',
    owner: 'Engineering',
    reviewed: '15 Jun 2026',
    status: 'Current',
    limitation: 'Access: governed request. Tooling and repositories excluded.',
  },
  {
    title: 'Logging & retention summary',
    accessLevel: 'Public',
    description: 'Event categories, purpose, retention, access, and exclusions.',
    owner: 'Security',
    reviewed: '01 Jul 2026',
    status: 'Current',
    limitation: 'Limitation: detection completeness is not measured to a published standard.',
  },
  {
    title: 'Backup & restoration testing',
    accessLevel: 'Controlled',
    description: 'Restoration test scope, frequency, and outcome at review depth.',
    owner: 'Platform',
    reviewed: '—',
    status: 'Under review',
    limitation: 'Under review: do not rely on this as settled. No RPO/RTO published.',
  },
  {
    title: 'Independent assessment reports',
    accessLevel: 'Controlled',
    description: 'Assessment summaries where current, with issuer, exact scope, and period.',
    owner: 'Security',
    reviewed: '—',
    status: 'Evidence-gated',
    limitation: 'No certification is claimed on this page. Availability is confirmed through review — see the FAQ.',
  },
];

export default function SecurityEvidenceDirectory() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Header */}
        <header className="max-w-[780px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Security Evidence Directory
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Seven Control Statuses, Applied Honestly
          </h2>
        </header>

        {/* Control Status Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {statusBadges.map((badge, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 text-xs font-bold rounded-full ${badge.colorClass}`}
            >
              {badge.label}
            </span>
          ))}
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {filterCategories.map((filter, idx) => (
            <button
              key={idx}
              type="button"
              className="px-3.5 py-1.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors"
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* 6 Evidence Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch pt-2">
          {evidenceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs p-5 sm:p-6 flex flex-col justify-between gap-5"
            >
              <div className="flex flex-col gap-3">
                {/* Card Title & Access Badge */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {card.title}
                  </h3>

                  {card.accessLevel === 'Public' ? (
                    <span className="shrink-0 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40">
                      Public
                    </span>
                  ) : (
                    <span className="shrink-0 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      Controlled
                    </span>
                  )}
                </div>

                {/* Card Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed min-h-[36px]">
                  {card.description}
                </p>

                {/* Metadata DL */}
                <dl className="grid grid-cols-3 gap-2 text-xs pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <div>
                    <dt className="font-semibold text-slate-400 dark:text-slate-500">Owner</dt>
                    <dd className="text-slate-700 dark:text-slate-300 font-medium mt-0.5">
                      {card.owner}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-400 dark:text-slate-500">Reviewed</dt>
                    <dd className="text-slate-700 dark:text-slate-300 font-medium mt-0.5">
                      {card.reviewed}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-400 dark:text-slate-500">Status</dt>
                    <dd className="text-slate-700 dark:text-slate-300 font-medium mt-0.5">
                      {card.status}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Bottom Limitation Note */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {card.limitation}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Statement */}
        <p className="text-xs text-center text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed pt-2">
          Withdrawn and superseded evidence is not presented as current. Restricted artifact titles are withheld where their existence is itself sensitive, and search terms are never captured in analytics.
        </p>

      </div>
    </section>
  );
}