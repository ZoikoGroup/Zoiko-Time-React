import React from 'react';

const supportedClasses = [
  'Find records',
  'Summarize status',
  'Explain a field or classification trace',
  'Compare governed periods or groups, subject to privacy thresholds',
  'Identify records requiring authorized review',
  'Explain policy context',
  'Locate evidence',
  'Explain an exception or integration status',
];

const refusedClasses = [
  'Worker ranking · hidden productivity scoring',
  'Misconduct determination · disciplinary recommendation',
  'Employment-status determination',
  'Legal advice · compliance certification',
  'Payroll calculation',
  'Policy circumvention · access bypass · surveillance request',
];

export default function QuestionComposer() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 sm:gap-10">
        
        {/* Header Section */}
        <header className="max-w-[780px] text-center flex flex-col items-center gap-3 sm:gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Question Composer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Eight Supported Question Classes — and Eleven That Are Refused
          </h2>
          <p className="max-w-[640px] text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Structured templates are the default. Free text is offered only after privacy, security, content, abuse, localization, retention, and support handling have all been approved.
          </p>
        </header>

        {/* Governance Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Supported Question Classes Card */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-emerald-600 dark:text-emerald-400"
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
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Supported question classes
              </h3>
            </div>

            <ul className="flex flex-col gap-3.5 pl-0 list-none">
              {supportedClasses.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-base shrink-0 select-none mt-0.5">
                    ✓
                  </span>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Refused Question Classes Card */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-md bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-rose-600 dark:text-rose-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Refused question classes
              </h3>
            </div>

            <ul className="flex flex-col gap-3.5 pl-0 list-none">
              {refusedClasses.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base">
                  <span className="text-rose-600 dark:text-rose-400 font-bold text-base shrink-0 select-none mt-0.5">
                    ✕
                  </span>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Caution / Warning Callout Banner */}
        <div className="w-full max-w-[900px] p-4 sm:p-5 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/50 flex flex-col gap-1 text-left">
          <span className="text-rose-700 dark:text-rose-400 text-xs font-bold uppercase tracking-wide">
            Do not enter here
          </span>
          <p className="text-rose-800 dark:text-rose-300 text-xs sm:text-sm leading-relaxed">
            Credentials, secrets, special-category data, legal strategy, or any information outside the approved business purpose. The composer states this before you type, not after.
          </p>
        </div>

      </div>
    </section>
  );
}