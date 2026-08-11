import React from 'react';

interface IncidentDetails {
  id: string;
  status: string;
  statusType: 'critical' | 'warning';
  title: string;
  description: string;
  meta: { label: string; value: string }[];
  actions?: { label: string; href: string }[];
  note?: string | React.ReactNode;
  alertBox?: React.ReactNode;
}

const incidents: IncidentDetails[] = [
  {
    id: 'INC-2026-0814',
    status: 'Partial Outage · Mitigating',
    statusType: 'critical',
    title: 'Report exports delayed or failing in EU region',
    description:
      'Scheduled and on-demand report exports are queuing and some are failing. Viewing reports in-product is unaffected. Time capture, approvals, and record processing are unaffected.',
    meta: [
      { label: 'Components', value: 'Reporting & Exports' },
      { label: 'Scope', value: 'EU region · production' },
      { label: 'Started', value: '07 Aug 06:18 UTC' },
      { label: 'Detected', value: '07 Aug 06:31 UTC' },
      { label: 'First public update', value: '07 Aug 06:52 UTC' },
      { label: 'Latest update', value: '07 Aug 09:20 UTC' },
      { label: 'Workaround', value: 'Reports remain viewable in-product; retry exports after resolution' },
    ],
    actions: [
      { label: 'Full chronology', href: '#chronology' },
      { label: 'Subscribe', href: '#subscribe' },
    ],
    note: 'Next update expected by 11:00 UTC. Cause is not yet stated publicly because it has not been established at a level we can support.',
  },
  {
    id: 'INC-2026-0815',
    status: 'Degraded Performance · Monitoring',
    statusType: 'warning',
    title: 'Notification delivery delays',
    description:
      'Email notifications for approval events are delayed. In-product state is accurate and unaffected — the interface always shows the current state even when a notification is late.',
    meta: [
      { label: 'Components', value: 'Notifications' },
      { label: 'Scope', value: 'All regions · production' },
      { label: 'Started', value: '07 Aug 04:05 UTC' },
      { label: 'Latest update', value: '07 Aug 09:35 UTC' },
    ],
    alertBox: (
      <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 flex items-start gap-3 mt-auto">
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
        <p className="text-sm text-slate-800 dark:text-slate-200 leading-snug">
          Mitigation is active and health is being observed. This is{' '}
          <strong className="font-black text-slate-900 dark:text-white">Monitoring</strong>, not
          Resolved — recovery has not yet been verified.
        </p>
      </div>
    ),
  },
];

export default function ActiveIncidentsSection() {
  return (
    <section id="active-incident" className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <header className="max-w-[760px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Active Incidents
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Two Independent Events
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-[644px] leading-relaxed">
            Ordered by public impact and critical journey. Unrelated incidents are not merged merely because they share a component.
          </p>
        </header>

        {/* 2 Incidents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch">
          {incidents.map((incident) => (
            <div
              key={incident.id}
              className={`bg-white dark:bg-slate-900 rounded-2xl p-6 border shadow-xs flex flex-col gap-5 ${
                incident.statusType === 'critical'
                  ? 'border-amber-300 dark:border-amber-500/40'
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              {/* Card Header: Incident ID & Status Tag */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {incident.id}
                </span>
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full ${
                    incident.statusType === 'critical'
                      ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900'
                      : 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900'
                  }`}
                >
                  {incident.status}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {incident.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {incident.description}
                </p>
              </div>

              {/* Metadata Grid */}
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 py-3 border-y border-slate-100 dark:border-slate-800/80 text-xs">
                {incident.meta.map((item, idx) => (
                  <div key={idx} className={item.label === 'Workaround' ? 'sm:col-span-2' : ''}>
                    <dt className="font-semibold text-slate-500 dark:text-slate-400">{item.label}</dt>
                    <dd className="text-slate-800 dark:text-slate-200 mt-0.5">{item.value}</dd>
                  </div>
                ))}
              </dl>

              {/* Action Buttons (if present) */}
              {incident.actions && (
                <div className="flex flex-wrap items-center gap-3">
                  {incident.actions.map((action, idx) => (
                    <a
                      key={idx}
                      href={action.href}
                      className="px-5 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-700 transition-all active:scale-95 text-center flex-1 sm:flex-initial"
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Footer Note or Alert Box */}
              {incident.note && (
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-auto">
                  {incident.note}
                </p>
              )}

              {incident.alertBox}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
