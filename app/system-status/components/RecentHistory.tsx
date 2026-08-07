import React from 'react';

type StateBadgeType = 'Resolved' | 'Completed' | 'Correction recorded' | 'Cancelled';

interface HistoryEvent {
  id: string;
  title: string;
  type: string;
  scope: string;
  dateRange: string;
  finalState: StateBadgeType;
  review: string;
}

const historyEvents: HistoryEvent[] = [
  {
    id: 'INC-2026-0811',
    title: 'Approval queue latency',
    type: 'Incident',
    scope: 'Approvals · APAC',
    dateRange: '02 Aug 11:20 – 13:05 UTC',
    finalState: 'Resolved',
    review: 'Published',
  },
  {
    id: 'MNT-2026-0084',
    title: 'Ledger index rebuild',
    type: 'Maintenance',
    scope: 'Evidence Ledger · all',
    dateRange: '31 Jul 01:00 – 02:40 UTC',
    finalState: 'Completed',
    review: 'Not required',
  },
  {
    id: 'INC-2026-0809',
    title: 'Sign-in delays',
    type: 'Incident',
    scope: 'Access · EU, US',
    dateRange: '28 Jul 07:44 – 08:31 UTC',
    finalState: 'Resolved',
    review: 'Pending',
  },
  {
    id: 'COR-2026-0012',
    title: 'Scope correction to INC-2026-0809',
    type: 'Correction',
    scope: 'Access',
    dateRange: '28 Jul 09:15 UTC',
    finalState: 'Correction recorded',
    review: '—',
  },
  {
    id: 'MNT-2026-0086',
    title: 'Notification provider change',
    type: 'Maintenance',
    scope: 'Notifications',
    dateRange: 'Cancelled 04 Aug',
    finalState: 'Cancelled',
    review: '—',
  },
];

const filters = [
  'Date range',
  'Event type',
  'Component',
  'Region',
  'State',
  'Impact',
];

const getStateBadgeStyle = (state: StateBadgeType) => {
  switch (state) {
    case 'Resolved':
    case 'Completed':
      return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900';
    case 'Correction recorded':
      return 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 border-blue-200 dark:border-blue-900';
    case 'Cancelled':
    default:
      return 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700';
  }
};

export default function RecentHistory() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-6">
        
        {/* Section Header */}
        <header className="max-w-[780px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Recent History
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Resolved Events, Completed Work, and Corrections
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-[644px] leading-relaxed">
            An operational record for inspection — not a service-credit report.
          </p>
        </header>

        {/* Filter Pills */}
        <div className="w-full flex flex-wrap items-center gap-2 pt-2">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              type="button"
              className="px-3 py-1.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-800 shadow-2xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* History Table Container */}
        <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[768px]">
              <thead>
                <tr className="bg-slate-50/70 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                  <th scope="col" className="py-3.5 px-4 w-2/5">Event</th>
                  <th scope="col" className="py-3.5 px-4">Type</th>
                  <th scope="col" className="py-3.5 px-4">Scope</th>
                  <th scope="col" className="py-3.5 px-4">Start – end</th>
                  <th scope="col" className="py-3.5 px-4">Final state</th>
                  <th scope="col" className="py-3.5 px-4">Review</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-sm text-slate-600 dark:text-slate-300">
                {historyEvents.map((evt) => (
                  <tr key={evt.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    {/* Event ID & Title */}
                    <td className="py-4 px-4 font-normal">
                      <span className="font-black text-slate-900 dark:text-white mr-1.5">
                        {evt.id}
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {evt.title}
                      </span>
                    </td>

                    {/* Type */}
                    <td className="py-4 px-4 whitespace-nowrap">{evt.type}</td>

                    {/* Scope */}
                    <td className="py-4 px-4 whitespace-nowrap">{evt.scope}</td>

                    {/* Start - End */}
                    <td className="py-4 px-4 whitespace-nowrap">{evt.dateRange}</td>

                    {/* Final State Badge */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span
                        className={`inline-block px-2.5 py-1 text-xs font-bold rounded-full border ${getStateBadgeStyle(
                          evt.finalState
                        )}`}
                      >
                        {evt.finalState}
                      </span>
                    </td>

                    {/* Review State */}
                    <td className="py-4 px-4 whitespace-nowrap">{evt.review}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Note */}
          <div className="p-4 bg-slate-50/50 dark:bg-slate-800/20 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
            Historical event URLs remain stable where policy allows. Published history is not exhaustive of restricted or customer-specific events.
          </div>
        </div>

        {/* Section Disclaimer Note */}
        <footer className="w-full text-left sm:text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Availability, downtime totals, and service credits are not calculated from these events. Methodology lives with Platform Reliability, which remains evidence-gated.
          </p>
        </footer>

      </div>
    </section>
  );
}