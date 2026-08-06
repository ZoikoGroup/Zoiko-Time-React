const confirmedPoints = [
  'What is supported for your sources and objects today',
  'What requires preparation on your side',
  'What is excluded, and why',
  'Which approvals are required, and from whom',
];

const notClaimedPoints = [
  'Pricing, entitlement, or timeline',
  'Packages, durations, or fixed inclusions',
  'Named source systems or connector coverage',
  'Volume, throughput, or specialist staffing',
  'Guaranteed acceptance or accuracy',
];

export default function ServiceAvailabilitySection() {
  return (
    <section className="w-full bg-slate-50 px-4 py-16 font-sans text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-9">
        <header className="flex w-full max-w-[760px] flex-col items-center gap-4 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Service Availability &amp; Commercial Truth
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Assessed by source, object, scope, region, timing, risk, and capacity
          </h2>
          <p className="max-w-[643px] text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Until a formal offer exists, this is a current-state truth panel, not
            packages, timelines, fixed inclusions, or connector logos.
          </p>
        </header>

        <div className="flex w-full flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:p-9">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800 sm:flex-row sm:items-center">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Current status for your intended migration
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Requires assessment
              </h3>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1.5 dark:bg-slate-800">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Verify with sales
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-2">
            <div className="flex flex-col gap-3.5">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                What a qualified review confirms
              </h4>
              <ul className="flex flex-col gap-2.5">
                {confirmedPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-xs bg-emerald-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3.5">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Not claimed here
              </h4>
              <ul className="flex flex-col gap-2.5">
                {notClaimedPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-xs bg-emerald-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50 sm:p-5">
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm leading-relaxed font-medium text-slate-800 dark:text-slate-200">
              Migration acceptance depends on source authority, data quality,
              scope, mapping decisions, validation, and required approvals.
              Pricing, entitlement, timeline, responsibilities, and support are
              defined in approved commercial and service documents.
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                className="cursor-pointer rounded-lg bg-emerald-500 px-6 py-3 text-base font-bold text-white shadow-xs transition-colors hover:bg-emerald-600 active:bg-emerald-700"
              >
                Request Enterprise Demo
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-lg border border-slate-200 bg-white px-6 py-3 text-base font-bold text-slate-900 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
              >
                Talk to Sales
              </button>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Already a customer?{' '}
              <a
                href="#signin"
                className="inline-flex items-center font-bold text-emerald-600 hover:underline dark:text-emerald-400"
              >
                Sign in
              </a>{' '}
              to request migration support, review an open engagement, report an
              issue, or request a scope change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
