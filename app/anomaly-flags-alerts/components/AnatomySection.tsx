import React from 'react';

interface FlagItem {
  label: string;
  description: string;
}

const flagAnatomyItems: FlagItem[] = [
  { label: 'Definition', description: 'name, version, owner, purpose, review date' },
  { label: 'Trigger', description: 'the condition-level explanation of why this flag exists' },
  { label: 'Source facts', description: 'the governed records that satisfied the condition' },
  { label: 'Scope', description: 'organization, unit, record type, policy, jurisdiction, period' },
  { label: 'Time', description: 'local and canonical, time zone, schedule basis' },
  { label: 'Quality', description: 'freshness, completeness, conflicts, suppression state' },
  { label: 'Limitations', description: 'what this flag cannot establish' },
  { label: 'Worker-rights route', description: 'own-record view, correction, escalation' },
  { label: 'Next action', description: 'accountable owner, reason, due state' },
];

const alertAnatomyItems: string[] = [
  'Alert policy and version',
  'Linked flag or flags',
  'Route, recipients, and their permission basis',
  'Operational priority and timing',
  'Delivery status and acknowledgment',
  'Escalation path and coverage owner',
  'Expiry, suppression, and withdrawal state',
];

export default function AnatomySection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Flag Anatomy */}
        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold   uppercase tracking-wider">
              Flag Anatomy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold   tracking-tight text-slate-900 dark:text-white">
              What Every Flag Carries
            </h2>
          </div>

          <ul className="space-y-3 pt-1">
            {flagAnatomyItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm   leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                <div>
                  <strong className="font-bold text-slate-900 dark:text-slate-100">{item.label}</strong>
                  <span className="text-slate-600 dark:text-slate-300"> — {item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Alert Anatomy */}
        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold   uppercase tracking-wider">
              Alert Anatomy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold   tracking-tight text-slate-900 dark:text-white">
              What every alert event carries
            </h2>
          </div>

          {/* White / Dark Card */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <ul className="space-y-3">
              {alertAnatomyItems.map((text, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm   text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Alert Callout Note */}
          <div className="p-5 bg-slate-100/80 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-3">
            {/* Info Icon */}
            <div className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Note Text */}
            <p className="text-xs sm:text-sm   leading-relaxed text-slate-800 dark:text-slate-200">
              <strong className="font-extrabold text-slate-900 dark:text-white">Quiet hours suppress delivery, not obligation.</strong>{' '}
              A notification held overnight does not pause the underlying review requirement or reset a due state — and suppression is time-bound, attributable, and never deletion.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}