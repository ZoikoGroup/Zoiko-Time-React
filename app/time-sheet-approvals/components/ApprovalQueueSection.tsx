import React from 'react';

interface QueueItem {
  worker: string;
  period: string;
  version: string;
  issues: string;
  status: string;
  statusType: 'ready' | 'warning' | 'info' | 'danger' | 'purple';
}

const queueData: QueueItem[] = [
  {
    worker: 'A. Ferreira',
    period: 'Week 32',
    version: 'v2',
    issues: '0 open',
    status: 'Ready for decision',
    statusType: 'ready',
  },
  {
    worker: 'D. Okafor',
    period: 'Week 32',
    version: 'v1',
    issues: '1 conflict',
    status: 'Needs information',
    statusType: 'warning',
  },
  {
    worker: 'M. Halvorsen',
    period: 'Week 31',
    version: 'v3',
    issues: '0 open',
    status: 'Correction pending',
    statusType: 'info',
  },
  {
    worker: 'S. Iqbal',
    period: 'Week 31',
    version: 'v1',
    issues: '2 open',
    status: 'Returned',
    statusType: 'danger',
  },
  {
    worker: 'K. Duarte',
    period: 'Week 30',
    version: 'v2',
    issues: '0 open',
    status: 'Reconciliation required',
    statusType: 'purple',
  },
];

const features = [
  'Cards: assigned · needs information · correction pending · ready · returned · reconciliation required',
  'Filters: period, status, unit in scope, workflow, assignment, exception type, source status',
  'Search covers case and period references — not free-text reasons or evidence content',
  'Bulk actions absent unless each is specifically approved — never bulk approve by default',
];

const getStatusBadge = (type: QueueItem['statusType'], label: string) => {
  const baseClasses =
    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold whitespace-nowrap';

  switch (type) {
    case 'ready':
      return (
        <span className={`${baseClasses} bg-emerald-950/60 text-emerald-400 border border-emerald-800/50`}>
          {label}
        </span>
      );
    case 'warning':
      return (
        <span className={`${baseClasses} bg-amber-950/60 text-amber-400 border border-amber-800/50`}>
          {label}
        </span>
      );
    case 'info':
      return (
        <span className={`${baseClasses} bg-sky-950/60 text-sky-400 border border-sky-800/50`}>
          {label}
        </span>
      );
    case 'danger':
      return (
        <span className={`${baseClasses} bg-rose-950/60 text-rose-400 border border-rose-800/50`}>
          {label}
        </span>
      );
    case 'purple':
      return (
        <span className={`${baseClasses} bg-indigo-950/60 text-indigo-400 border border-indigo-800/50`}>
          {label}
        </span>
      );
    default:
      return (
        <span className={`${baseClasses} bg-slate-800 text-slate-300`}>
          {label}
        </span>
      );
  }
};

export default function ApprovalQueueSection() {
  return (
    <section className="w-full bg-slate-900 text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Description & Guidelines */}
        <div className="flex flex-col gap-6">
          <header className="flex flex-col gap-2">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Approval Queue
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Sorted by Workflow State —<br className="hidden sm:inline" />
              Never by Person
            </h2>
            <p className="text-base text-slate-300 leading-relaxed pt-1">
              Summary counts are objective workflow states, not performance metrics. There is no risk, productivity, trustworthiness, or worker-value rank available as a sort.
            </p>
          </header>

          {/* Feature List */}
          <div className="flex flex-col gap-3.5 pt-2">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-4 h-4 rounded border border-emerald-400 flex items-center justify-center shrink-0 mt-1">
                  <svg
                    className="w-2.5 h-2.5 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-sm sm:text-base font-semibold text-slate-200 leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Synthetic Queue Data Table */}
        <div className="flex flex-col gap-3">
          <div className="w-full bg-slate-950/60 rounded-2xl border border-slate-800/80 overflow-hidden shadow-xl p-4 sm:p-6 flex flex-col gap-4">
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wide font-bold">
                    <th className="pb-3 px-2">Worker</th>
                    <th className="pb-3 px-2">Period</th>
                    <th className="pb-3 px-2">Version</th>
                    <th className="pb-3 px-2">Issues</th>
                    <th className="pb-3 px-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {queueData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-3.5 px-2 font-semibold text-white">
                        {row.worker}
                      </td>
                      <td className="py-3.5 px-2 text-slate-300">
                        {row.period}
                      </td>
                      <td className="py-3.5 px-2 text-slate-300">
                        {row.version}
                      </td>
                      <td className="py-3.5 px-2 text-slate-300">
                        {row.issues}
                      </td>
                      <td className="py-3.5 px-2">
                        {getStatusBadge(row.statusType, row.status)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/60">
              Approval queue, synthetic. Due dates are configured cutoffs, not pressure devices.
            </p>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed px-1">
            Empty state reads “No assigned timesheets need review” and explains the active filters — it never backfills with unrelated records.
          </p>
        </div>

      </div>
    </section>
  );
}