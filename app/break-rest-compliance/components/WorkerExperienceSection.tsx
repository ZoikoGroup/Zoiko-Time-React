import React from 'react';

const workerFeatures = [
  'Plain-language view of each break record',
  'One-tap correction requests with a note',
  'Status updates as a record moves through review',
];

export default function WorkerExperienceSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Image Media Container with Floating Badge Card */}
        <div className="lg:col-span-6 relative w-full">
          {/* Main Showcase Image */}
          <div className="aspect-[5/4] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden">
            <img
              src="/break-rest-compliance/Worker in a warehouse.png"
              alt="Worker reviewing break history on a device"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Live Status Card Overlay */}
          <div className="absolute -bottom-6 right-4 sm:-right-4 w-64 sm:w-72 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-800 dark:text-white">
                My Break — Today
              </span>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                REC-88213
              </span>
            </div>

            {/* Status Progress Indicator Bars */}
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-4 bg-teal-600 dark:bg-teal-400 rounded-xs" />
              <span className="h-1.5 w-4 bg-teal-600 dark:bg-teal-400 rounded-xs" />
              <span className="h-1.5 w-4 bg-blue-950 dark:bg-blue-400 rounded-xs" />
              <span className="h-1.5 w-4 bg-slate-200 dark:bg-slate-800 rounded-xs" />
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Under review · reviewer notified 09:41
            </p>
          </div>
        </div>

        {/* Right Column: Copy & Checklist */}
        <div className="lg:col-span-6 flex flex-col gap-6 pt-6 lg:pt-0">
          
          {/* Header */}
          <header className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-sm" />
              <span className="text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
                Worker Experience
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Workers see their own record, not a black box.
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              Every worker can open their own break and rest history, understand what state a record is in, and raise a correction — without going through a manager first.
            </p>
          </header>

          {/* Checklist */}
          <ul className="flex flex-col gap-3.5 pt-2">
            {workerFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-md bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0 mt-0.5 text-teal-600 dark:text-teal-400">
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

      </div>
    </section>
  );
}