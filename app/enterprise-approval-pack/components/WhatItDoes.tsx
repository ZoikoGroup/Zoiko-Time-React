export default function WhatItDoes() {
  return (
    <section className="bg-white px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            What It Does
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            What the pack helps you do
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_6px_18px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/30">
              <svg
                className="h-5 w-5 text-teal-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12l4 4L19 6" />
              </svg>
            </div>

            <h3 className="mt-6 text-base font-semibold leading-7 text-slate-800 dark:text-white">
              Reduce approval
              <br />
              friction
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-slate-400">
              Give every stakeholder the evidence they need in one structured
              bundle.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_6px_18px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/30">
              <svg
                className="h-5 w-5 text-teal-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="8" cy="8" r="3" />
                <circle cx="16" cy="8" r="3" />
                <path d="M2 20c0-3 2-5 6-5s6 2 6 5" />
                <path d="M14 15c4 0 6 2 6 5" />
              </svg>
            </div>

            <h3 className="mt-6 text-base font-semibold leading-7 text-slate-800 dark:text-white">
              Align stakeholders
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-slate-400">
              A shared, consistent narrative across business, security, and
              legal.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_6px_18px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/30">
              <svg
                className="h-5 w-5 text-teal-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
              </svg>
            </div>

            <h3 className="mt-6 text-base font-semibold leading-7 text-slate-800 dark:text-white">
              Accelerate security
              <br />
              review
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-slate-400">
              Controlled security disclosure that respects procurement process.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_6px_18px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/30">
              <svg
                className="h-5 w-5 text-teal-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </div>

            <h3 className="mt-6 text-base font-semibold leading-7 text-slate-800 dark:text-white">
              Support ROI justification
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-slate-400">
              Financial framing that helps finance approve with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}