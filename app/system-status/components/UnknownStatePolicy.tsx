import React from 'react';

interface PolicyItem {
  text: string;
}

const positiveGuarantees: PolicyItem[] = [
  { text: 'Unknown state, with the last known verified state and its time' },
  { text: 'Whether sources are stale, unavailable, incomplete, or conflicting' },
  { text: 'Which component or scope is affected' },
  { text: 'Refresh, subscribe, support, and reliability-evidence routes' },
  { text: 'On route failure: the last safely cached state with an explicit freshness warning' },
];

const negativeGuarantees: PolicyItem[] = [
  { text: 'A silent default to Operational' },
  { text: 'An optimistic fallback when the source is unreachable' },
  { text: 'A green overall state while a critical component is Unknown' },
  { text: '“Resolved” while recovery is only being monitored' },
  { text: 'Internal diagnostic detail exposed while explaining uncertainty' },
];

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function UnknownStatePolicy() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Section Header */}
        <header className="max-w-[780px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Unknown, Stale &amp; Conflicting State
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            What This Page Does When It Cannot Tell You
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-[644px] leading-relaxed">
            The failure mode of most status pages is optimism. Ours is designed to be honest instead.
          </p>
        </header>

        {/* Comparison Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: What you will see */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-4">
              <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900">
                <CheckIcon />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                What you will see
              </h3>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-300">
              {positiveGuarantees.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: What will never happen */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-4">
              <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900">
                <CrossIcon />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                What will never happen
              </h3>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-300">
              {negativeGuarantees.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CrossIcon />
                  <span className="leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Section Footer Disclaimer */}
        <footer className="w-full text-left sm:text-center pt-2">
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-[900px] mx-auto">
            Restricted or customer-specific incidents do not appear publicly — but they must never cause a false public statement about a broadly affected component.
          </p>
        </footer>

      </div>
    </section>
  );
}