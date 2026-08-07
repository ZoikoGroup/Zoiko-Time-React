import React from 'react';

const whatWorkerSees = [
  'Period range, time zone, and version',
  'Each included record and its source',
  'Issues, with what each one means',
  'Correction status and assigned reviewer',
  'Full change and decision history',
];

const whatWorkerCanDo = [
  'Request a correction with a reason',
  'Add permitted evidence or context',
  'Submit the reviewed version',
  'Ask for an explanation',
  'Escalate or get help',
];

export default function WorkerPeriodReview() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Worker Period Review */}
        <div className="flex flex-col gap-6">
          
          {/* Header Info */}
          <header className="flex flex-col gap-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Worker Period Review
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Understandable, Correctable, Safe to Submit
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              Workers can see period scope, source, status, issues, corrections, reviewers, and history — everything permission and policy allow.
            </p>
          </header>

          {/* Cards Grid (2 Columns on mobile/tablet) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            
            {/* Card 1: What a worker sees */}
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                What a worker sees
              </h3>
              <ul className="flex flex-col gap-3">
                {whatWorkerSees.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: What a worker can do */}
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                What a worker can do
              </h3>
              <ul className="flex flex-col gap-3">
                {whatWorkerCanDo.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Right Column: Pre-Submit Validation & Preview */}
        <div className="flex flex-col gap-4">
          <header className="flex flex-col gap-1.5">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Pre-Submit Validation &amp; Readiness
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
              Visible checks, not an opaque score
            </h3>
          </header>

          {/* Screenshot / Preview Graphic Container */}
          <div className="w-full relative rounded-2xl overflow-hidden shadow-xl ">
            <img
              src="/time-sheet-approvals/div.mock (14).png"
              alt="Pre-Submit Validation Interface Preview"
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>

      </div>
    </section>
  );
}