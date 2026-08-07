import React from 'react';

interface RouteOption {
  title: string;
  description: string;
  badge?: string;
  isFeatured?: boolean;
}

const routingOptions: RouteOption[] = [
  {
    title: 'Platform Reliability',
    description: 'Definitions, measurement, exclusions, and recovery controls.',
    badge: 'Evidence-gated',
    isFeatured: true,
  },
  {
    title: 'Enterprise Support',
    description: 'Authenticated, customer-specific impact and account diagnostics.',
  },
  {
    title: 'Help Center',
    description: 'Common client and device troubleshooting.',
  },
  {
    title: 'Trust Center',
    description: 'Broader evidence navigation across security, privacy, and governance.',
  },
];

export default function RouteQuestion() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Section Header */}
        <header className="max-w-[760px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Support &amp; Reliability Evidence
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Route Your Question Correctly
          </h2>
        </header>

        {/* 4-Card Navigation Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {routingOptions.map((option, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between gap-4 ${
                option.isFeatured
                  ? 'bg-slate-100/80 dark:bg-slate-900/90 border-slate-300 dark:border-slate-700 shadow-xs'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {option.title}
                  </h3>

                  {option.badge && (
                    <span className="shrink-0 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide rounded-full bg-amber-50 text-amber-700 border border-amber-300 dark:bg-amber-950/60 dark:text-amber-400 dark:border-amber-800">
                      {option.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Security / Misuse Warning Box */}
        <div className="w-full max-w-[900px] p-4 bg-rose-50/60 dark:bg-rose-950/30 rounded-xl border border-rose-200/80 dark:border-rose-900/60 flex flex-col gap-1 text-left">
          <span className="text-xs font-bold uppercase tracking-wide text-rose-700 dark:text-rose-400">
            Do not use this page for these
          </span>
          <p className="text-xs text-rose-800 dark:text-rose-300 leading-relaxed">
            Never disclose worker records, customer data, or credentials in a public status form. Public status is not a substitute for emergency or contractual support channels — if you have a contractual escalation path, use it.
          </p>
        </div>

      </div>
    </section>
  );
}