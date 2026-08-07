import React from 'react';

type MaintenanceStatus =
  | 'Scheduled'
  | 'In Progress'
  | 'Monitoring'
  | 'Completed'
  | 'Extended'
  | 'Cancelled';

interface MaintenanceCard {
  id: string;
  title: string;
  status: MaintenanceStatus;
  meta: { label: string; value: string }[];
  actionUrl?: string;
  note?: string;
}

const maintenanceItems: MaintenanceCard[] = [
  {
    id: 'MNT-2026-0091',
    title: 'Record processing upgrade',
    status: 'Scheduled',
    meta: [
      { label: 'ID', value: 'MNT-2026-0091' },
      { label: 'Window', value: '10 Aug 01:00 – 03:00 UTC' },
      { label: 'Scope', value: 'Record processing · all regions' },
      { label: 'Expected effect', value: 'Brief queuing; no data entry loss expected' },
      { label: 'Owner', value: 'Platform operations' },
    ],
    actionUrl: '#subscribe-mnt-0091',
  },
  {
    id: 'MNT-2026-0088',
    title: 'Export service migration',
    status: 'In Progress',
    meta: [
      { label: 'ID', value: 'MNT-2026-0088' },
      { label: 'Started', value: '07 Aug 05:00 UTC' },
      { label: 'Scope', value: 'Reporting & exports · EU' },
      { label: 'Expected effect', value: 'Export delays during window' },
      { label: 'Related', value: 'Linked to INC-2026-0814' },
    ],
    note: 'Unexpected user impact met incident policy, so a related incident was opened rather than the impact being absorbed into the maintenance record.',
  },
  {
    id: 'MNT-2026-0086',
    title: 'Notification provider change',
    status: 'Cancelled',
    meta: [
      { label: 'ID', value: 'MNT-2026-0086' },
      { label: 'Was scheduled', value: '05 Aug 02:00 – 04:00 UTC' },
      { label: 'Scope', value: 'Notifications' },
      { label: 'Reason', value: 'Prerequisite verification incomplete' },
    ],
    note: 'Cancellation history is preserved. The future-impact implication is removed.',
  },
];

const getStatusBadgeStyle = (status: MaintenanceStatus) => {
  switch (status) {
    case 'Scheduled':
      return 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-400 border-sky-200 dark:border-sky-900';
    case 'In Progress':
      return 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 border-blue-200 dark:border-blue-900';
    case 'Monitoring':
    case 'Completed':
      return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900';
    case 'Extended':
      return 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border-amber-200 dark:border-amber-900';
    case 'Cancelled':
    default:
      return 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700';
  }
};

export default function PlannedMaintenance() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Section Header */}
        <header className="max-w-[760px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Planned Maintenance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Published Separately From Incidents
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-[644px] leading-relaxed">
            Six maintenance states. We do not promise that all maintenance is impact-free.
          </p>
        </header>

        {/* Maintenance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch pt-2">
          {maintenanceItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between gap-5 transition-all hover:border-slate-300 dark:hover:border-slate-700"
            >
              {/* Card Top Block */}
              <div className="flex flex-col gap-4">
                {/* Header: Title & Status Badge */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <span
                    className={`px-2.5 py-1 text-xs font-bold rounded-full border shrink-0 ${getStatusBadgeStyle(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Metadata Details Grid */}
                <dl className="grid grid-cols-1 gap-y-2.5 text-xs border-t border-slate-100 dark:border-slate-800/80 pt-3">
                  {item.meta.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <dt className="font-semibold text-slate-500 dark:text-slate-400">
                        {m.label}
                      </dt>
                      <dd className="text-slate-800 dark:text-slate-200 mt-0.5">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Card Bottom Block: Action Link or Context Note */}
              <div className="mt-auto pt-2 border-t border-slate-100 dark:border-slate-800/80">
                {item.actionUrl ? (
                  <a
                    href={item.actionUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group"
                  >
                    <span>Subscribe to this</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                ) : item.note ? (
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.note}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer Explanation */}
        <footer className="w-full text-left sm:text-center pt-2">
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            States: Scheduled · In Progress · Monitoring · Completed · Extended · Cancelled. Sensitive change detail is not published.
          </p>
        </footer>

      </div>
    </section>
  );
}