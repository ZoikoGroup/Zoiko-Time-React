import React from 'react';

interface OutcomeCard {
  title: string;
  description: string | React.ReactNode;
  guideCountText: string;
  href: string;
  icon: React.ReactNode;
}

const outcomes: OutcomeCard[] = [
  {
    title: 'Reduce payroll errors',
    description: (
      <>
        Close-readiness, exception
        <br />
        aging, and export reconciliation.
      </>
    ),
    guideCountText: '— guides →',
    href: '#reduce-payroll-errors',
    icon: (
      <svg
        className="w-5 h-5 text-teal-600 dark:text-teal-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 14l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Pass an audit',
    description: (
      <>
        Evidence structure, version
        <br />
        history, and record retention.
      </>
    ),
    guideCountText: '— guides →',
    href: '#pass-an-audit',
    icon: (
      <svg
        className="w-5 h-5 text-teal-600 dark:text-teal-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Reduce time disputes',
    description: (
      <>
        Neutral states, correction
        <br />
        workflows, and worker
        <br />
        communication.
      </>
    ),
    guideCountText: '— guides →',
    href: '#reduce-time-disputes',
    icon: (
      <svg
        className="w-5 h-5 text-teal-600 dark:text-teal-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Support remote & hybrid teams',
    description: (
      <>
        Configuration, connectivity
        <br />
        states, and worker transparency.
      </>
    ),
    guideCountText: '— guides →',
    href: '#support-remote-hybrid',
    icon: (
      <svg
        className="w-5 h-5 text-teal-600 dark:text-teal-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11.8M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function BrowseByOutcomeSection() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1140px] mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <header className="flex flex-col items-center text-center gap-2">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest">
            Browse by Outcome
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-white leading-tight">
            What are you trying to get done?
          </h2>
        </header>

        {/* 4-Column Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {outcomes.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] flex flex-col justify-between items-start transition-all hover:-translate-y-0.5 hover:shadow-md group"
            >
              <div className="flex flex-col items-start w-full">
                {/* Icon Container */}
                <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-teal-950/50 flex items-center justify-center mb-6 shrink-0">
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-2 leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action Indicator */}
              <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                {item.guideCountText}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}