import React from 'react';

type StatusType =
  | 'Operational'
  | 'Degraded Performance'
  | 'Partial Outage'
  | 'Major Outage'
  | 'Under Maintenance'
  | 'Unknown'
  | 'Not Applicable';

interface ComponentStatusItem {
  title: string;
  description: string;
  verifiedTime: string;
  status: StatusType;
}

const statusBadges: StatusType[] = [
  'Operational',
  'Degraded Performance',
  'Partial Outage',
  'Major Outage',
  'Under Maintenance',
  'Unknown',
  'Not Applicable',
];

const componentList: ComponentStatusItem[] = [
  {
    title: 'Access & sign-in',
    description: 'Authentication and session establishment',
    verifiedTime: 'Verified 09:42 UTC',
    status: 'Operational',
  },
  {
    title: 'Time capture',
    description: 'Recording work-time inputs across supported clients',
    verifiedTime: 'Verified 09:42 UTC',
    status: 'Operational',
  },
  {
    title: 'Record processing',
    description: 'Classification and record assembly',
    verifiedTime: 'Verified 09:42 UTC',
    status: 'Operational',
  },
  {
    title: 'Approvals',
    description: 'Review queues and approval decisions',
    verifiedTime: 'Verified 09:42 UTC',
    status: 'Operational',
  },
  {
    title: 'Evidence Ledger',
    description: 'History, versions, and evidence references',
    verifiedTime: 'Verified 09:42 UTC',
    status: 'Operational',
  },
  {
    title: 'Reporting & exports',
    description: 'Affected by INC-2026-0814 · EU region',
    verifiedTime: 'Verified 09:40 UTC',
    status: 'Partial Outage',
  },
  {
    title: 'Notifications',
    description: 'Affected by INC-2026-0815 · all regions',
    verifiedTime: 'Verified 09:35 UTC',
    status: 'Degraded Performance',
  },
  {
    title: 'Integrations',
    description: 'Health sources stale since 06:10 UTC — state cannot be verified',
    verifiedTime: 'Last known 06:10 UTC',
    status: 'Unknown',
  },
];

const getStatusBadgeStyle = (status: StatusType) => {
  switch (status) {
    case 'Operational':
      return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900';
    case 'Degraded Performance':
      return 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border-amber-200 dark:border-amber-900';
    case 'Partial Outage':
    case 'Major Outage':
      return 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border-rose-200 dark:border-rose-900';
    case 'Under Maintenance':
      return 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-400 border-sky-200 dark:border-sky-900';
    case 'Unknown':
    case 'Not Applicable':
    default:
      return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
  }
};

export default function ComponentsAndRegions() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Section Header */}
        <header className="max-w-[780px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Components &amp; Regions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Seven Public States, Stated in Text
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-[644px] leading-relaxed">
            Severity is never conveyed by colour alone. Each component shows its state, last verified time, and relationship to any active event.
          </p>
        </header>

        {/* Status Legend Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {statusBadges.map((badge, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors ${getStatusBadgeStyle(
                badge
              )}`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Component Table Container */}
        <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
          
          {/* Table Environment Sub-Header */}
          <div className="px-5 py-3.5 bg-slate-100/70 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
             Production · all public regions
            </span>
          </div>

          {/* Component Rows */}
          <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
            {componentList.map((item, idx) => (
              <div
                key={idx}
                className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
              >
                {/* Title & Description */}
                <div className="flex flex-col gap-0.5 flex-1 pr-4">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>

                {/* Verified Time & Status Badge */}
                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 mt-2 sm:mt-0">
                  <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    {item.verifiedTime}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusBadgeStyle(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alert Callout Note */}
        <div className="w-full p-5 bg-slate-100/80 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-3">
          <svg
            className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
            <strong className="font-black text-slate-900 dark:text-white">
              Integrations shows Unknown, not Operational.
            </strong>{' '}
            Its health sources have been stale beyond policy since 06:10 UTC. The last known verified state was Operational, but we cannot confirm current state — so we do not claim it.
          </p>
        </div>

        {/* Section Disclaimer & Link Footnote */}
        <p className="w-full text-xs text-slate-500 dark:text-slate-400 leading-relaxed text-left sm:text-center">
          Region and environment selectors appear only where states genuinely differ and the public scope is approved. A region appearing in a status filter does not mean that region exists as a data-residency option — see{' '}
          <a
            href="/trust-center"
            className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            Trust Center
          </a>
          . No internal host, cluster, provider account, or infrastructure identifier appears here.
        </p>

      </div>
    </section>
  );
}
