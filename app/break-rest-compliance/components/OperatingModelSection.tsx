import React from 'react';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const stepsData: ProcessStep[] = [
  {
    step: 'STEP 1',
    title: 'Policy configured',
    description: 'Your team sets break and rest rules by jurisdiction, role, or agreement.',
  },
  {
    step: 'STEP 2',
    title: 'Applied to schedules',
    description: "Rules attach automatically to shifts as they're built or change.",
  },
  {
    step: 'STEP 3',
    title: 'Recorded as worked',
    description: 'Actual break activity is captured against the scheduled rule.',
  },
  {
    step: 'STEP 4',
    title: 'Reviewed & evidenced',
    description: 'Irregularities route to a reviewer; the outcome joins the audit trail.',
  },
];

export default function OperatingModelSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-10">
        
        {/* Section Header */}
        <header className="flex flex-col gap-3 max-w-[660px]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-sm" />
            <span className="text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
              Operating Model
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            From configured policy to reviewable record.
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            The same pipeline runs for every worker, every shift — nothing is applied ad hoc.
          </p>
        </header>

        {/* 4-Step Process Grid */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {stepsData.map((item, idx) => {
            const isLast = idx === stepsData.length - 1;
            return (
              <li key={idx} className="relative flex flex-col">
                <div className="h-full p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2.5 justify-start">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow indicator between cards (Desktop) */}
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 items-center justify-center text-slate-400 dark:text-slate-500"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </li>
            );
          })}
        </ol>

      </div>
    </section>
  );
}