import React from 'react';

const reviewerFeatures = [
  'Shared queue across managers, HR, and compliance',
  "Every decision requires a note before it's saved",
  'No auto-approval — a person confirms or resolves',
];

const queueItems = [
  { name: 'M. Alvarez', avatarBg: 'bg-blue-600' },
  { name: 'D. Whitfield', avatarBg: 'bg-blue-600' },
];

export default function ReviewerExperienceSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Copy & Checklist */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Header */}
          <header className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-sm" />
              <span className="text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
                Reviewer Experience
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Reviewers see context, not just a flag.
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              Managers, HR, and compliance reviewers work from the same queue, with the scheduled rule, the recorded activity, and any worker note side by side before they decide.
            </p>
          </header>

          {/* Checklist */}
          <ul className="flex flex-col gap-3.5 pt-2">
            {reviewerFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-md bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 flex items-center justify-center shrink-0 mt-0.5 text-blue-950 dark:text-blue-300">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm font-normal text-slate-700 dark:text-slate-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

        </div>

        {/* Right Column: Image Media Container with Floating Review Queue Card */}
        <div className="lg:col-span-6 relative w-full">
          {/* Main Feature Image */}
          <div className="aspect-[5/4] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800 shadow-sm">
            <img
              src="/break-rest-compliance/Reviewer team looking.png"
              alt="Reviewers analyzing break records and context side by side"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Review Queue Widget Card */}
          <div className="absolute -bottom-6 right-4 sm:-right-4 w-64 sm:w-72 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-800 dark:text-white">
                Review Queue
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                3 open
              </span>
            </div>

            {/* Queue Item Entries */}
            <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
              {queueItems.map((item, idx) => (
                <div key={idx} className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-4 h-4 rounded-md ${item.avatarBg}`} />
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-normal">
                      {item.name}
                    </span>
                  </div>

                  {/* Progress Indicator Dots */}
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-3.5 bg-teal-600 dark:bg-teal-400 rounded-xs" />
                    <span className="h-1.5 w-3.5 bg-teal-600 dark:bg-teal-400 rounded-xs" />
                    <span className="h-1.5 w-3.5 bg-blue-950 dark:bg-blue-400 rounded-xs" />
                    <span className="h-1.5 w-3.5 bg-slate-100 dark:bg-slate-800 rounded-xs" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}