import React from 'react';

interface RecoveryStep {
  title: string;
  description: string;
  badgeBg: string;
  icon: React.ReactNode;
}

const recoverySteps: RecoveryStep[] = [
  {
    title: 'Flagged',
    description: 'Record deviates from the scheduled policy — routed to Under Review automatically.',
    badgeBg: 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
      />
    ),
  },
  {
    title: 'Notified',
    description: 'Worker and reviewer are both notified — the worker can add context immediately.',
    badgeBg: 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    ),
  },
  {
    title: 'Escalated (if needed)',
    description: 'Unresolved or recurring exceptions can be routed to HR or compliance.',
    badgeBg: 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    ),
  },
  {
    title: 'Resolved',
    description: 'A reviewer records the outcome; the evidence trail is closed with a note attached.',
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/60 text-teal-700 dark:text-teal-400',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

export default function ExceptionsRecoverySection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-10">
        
        {/* Header */}
        <header className="flex flex-col gap-3 max-w-[640px]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-sm" />
            <span className="text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
              Exceptions &amp; Recovery
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            When a break doesn&apos;t match policy.
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Short, missed, or late breaks follow a consistent recovery path — nothing is silently discarded or silently disciplined.
          </p>
        </header>

        {/* 4-Step Recovery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {recoverySteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col gap-4 transition-all hover:shadow-md"
            >
              {/* Icon Container */}
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${step.badgeBg}`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {step.icon}
                </svg>
              </div>

              {/* Step Content */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}