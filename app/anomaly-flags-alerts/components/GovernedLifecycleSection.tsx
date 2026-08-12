import React from 'react';

const stages = [
  {
    number: '01',
    title: 'Define',
    description: 'An approved, versioned condition with owner, threshold, scope, purpose, and review cadence.',
    actor: 'Definition owner',
    isHumanOnly: false,
  },
  {
    number: '02',
    title: 'Detect',
    description: 'Governed record facts satisfy the condition. A flag instance is created with its trigger.',
    actor: 'System, deterministic',
    isHumanOnly: false,
  },
  {
    number: '03',
    title: 'Contextualize',
    description: 'Attach policy version, jurisdiction, schedule basis, time zone, source quality, and limitations.',
    actor: 'System',
    isHumanOnly: false,
  },
  {
    number: '04',
    title: 'Notify',
    description: 'An alert policy routes attention to authorized recipients with priority, timing, and delivery tracking.',
    actor: 'Routing policy',
    isHumanOnly: false,
  },
  {
    number: '05',
    title: 'Review',
    description: 'An authorized person inspects evidence, requests information, notes context, and considers worker input.',
    actor: 'Human only',
    isHumanOnly: true,
  },
  {
    number: '06',
    title: 'Resolve',
    description: 'An accountable, reasoned outcome — including "expected variation" and "unable to determine."',
    actor: 'Human only · reason required',
    isHumanOnly: true,
  },
  {
    number: '07',
    title: 'Preserve',
    description: 'Definition version, trigger, evidence, requests, decisions, and downstream effect retained without overwrite.',
    actor: 'Evidence history',
    isHumanOnly: false,
  },
];

export default function GovernedLifecycleSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 md:gap-10">
        
        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold   uppercase tracking-wider">
            Governed Lifecycle
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold   tracking-tight text-slate-900 dark:text-white leading-tight">
            Define → Detect → Contextualize → Notify<br className="hidden sm:inline" /> → Review → Resolve → Preserve
          </h2>
          <p className="text-sm sm:text-base font-normal   leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Seven stages. Detection is stage two of seven, which is the whole point — detecting a condition is the least significant thing this product does.
          </p>
        </div>

        {/* Lifecycle Table Container */}
        <div className="w-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-700/60">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className={`flex flex-col md:flex-row items-start md:items-center transition-colors ${
                stage.isHumanOnly
                  ? 'bg-emerald-50/40 dark:bg-emerald-950/20'
                  : 'hover:bg-slate-50/60 dark:hover:bg-slate-800/80'
              }`}
            >
              {/* Stage Number */}
              <div className="w-full md:w-16 py-3 md:py-6 px-4 md:px-0 text-left md:text-center shrink-0 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-700/60">
                <span
                  className={`text-xs font-extrabold   ${
                    stage.isHumanOnly
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  {stage.number}
                </span>
              </div>

              {/* Stage Content */}
              <div className="flex-1 p-4 md:px-6 md:py-4 space-y-1">
                <h3 className="text-sm font-bold   text-slate-900 dark:text-white">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm font-normal   leading-relaxed text-slate-600 dark:text-slate-300">
                  {stage.description}
                </p>
              </div>

              {/* Stage Actor / Role */}
              <div className="w-full md:w-56 p-4 md:py-6 md:px-6 shrink-0 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-700/60 bg-slate-50/50 md:bg-transparent dark:bg-slate-800/40 md:dark:bg-transparent">
                <span
                  className={`text-xs font-medium   ${
                    stage.isHumanOnly
                      ? 'text-emerald-700 dark:text-emerald-400 font-bold'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {stage.actor}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="w-full p-4 sm:p-5 bg-slate-100/80 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-start gap-3.5">
          {/* Info Icon */}
          <div className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          {/* Text Content */}
          <p className="text-xs sm:text-sm   leading-relaxed text-slate-800 dark:text-slate-200">
            <strong className="font-extrabold text-slate-900 dark:text-white">There is no auto-action stage.</strong>{' '}
            No configuration allows a flag to change a record, adjust pay, notify a worker punitively, or trigger a disciplinary workflow on its own. Any consequential action is a separate authorized human workflow.
          </p>
        </div>

      </div>
    </section>
  );
}