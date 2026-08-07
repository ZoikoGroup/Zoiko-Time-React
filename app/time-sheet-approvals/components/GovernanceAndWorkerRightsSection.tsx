import React from 'react';

const configCards = [
  {
    title: 'Periods & workflows',
    description:
      'Period types, cutoffs, workflow definitions, permitted decisions, reason requirements, fallback.',
  },
  {
    title: 'Assignments',
    description:
      'Roles, scope, effective dates, delegation rules, prohibited conflicts, coverage.',
  },
  {
    title: 'Reasons & policies',
    description:
      'Structured reason codes, policy versions, effective dates, jurisdiction scope.',
  },
  {
    title: 'Sources & support',
    description:
      'Eligible source categories, health thresholds, support routes, escalation owners.',
  },
];

const rightsItems = [
  {
    label: 'Visibility',
    text: 'period scope, source, status, issues, corrections, reviewers, and history, as permission and policy allow.',
  },
  {
    label: 'Correction',
    text: 'a defined request path with reason, permitted evidence, and human review.',
  },
  {
    label: 'Explanation',
    text: 'what a status means and which policy version applied.',
  },
  {
    label: 'Escalation',
    text: 'a documented route when a correction is declined.',
  },
];

export default function GovernanceAndWorkerRightsSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: What Administrators Configure */}
        <div className="flex flex-col gap-6">
          <header className="flex flex-col gap-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Timesheet Governance Center
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              What Administrators Configure
            </h2>
          </header>

          {/* Configuration Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {configCards.map((card, idx) => (
              <div
                key={idx}
                className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2 transition-all hover:border-slate-300 dark:hover:border-slate-700"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Worker Rights, Privacy & Trust */}
        <div className="flex flex-col gap-6">
          <header className="flex flex-col gap-1">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Worker Rights, Privacy &amp; Trust
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
              Non-negotiable, at every tier
            </h3>
          </header>

          {/* Core Non-negotiable Privacy Banner */}
          <div className="p-5 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-3">
            <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
              No screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection under any tier or configuration.
            </p>
          </div>

          {/* Rights Bullet List */}
          <ul className="flex flex-col gap-3.5">
            {rightsItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500 mt-2 shrink-0" />
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong className="font-bold text-slate-900 dark:text-white">
                    {item.label}
                  </strong>{' '}
                  — {item.text}
                </p>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              className="px-5 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white text-sm font-bold shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              Privacy
            </button>
            <button
              type="button"
              className="px-5 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white text-sm font-bold shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              Trust Center
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}