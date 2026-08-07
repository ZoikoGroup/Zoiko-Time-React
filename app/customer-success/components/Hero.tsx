'use client'
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        {/* Left column */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Customer Success
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-[1.1] text-slate-800 dark:text-white">
            Turn a governed deployment into{" "}
            <span className="text-teal-600 dark:text-teal-400">
              sustained, reviewable value
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-gray-500 dark:text-gray-400">
            ZoikoTime Customer Success helps your organization define outcomes,
            verify adoption, review explainable health signals, and prepare
            renewal and expansion — with human authority, honest measurement,
            and no worker surveillance.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="rounded-[10px] bg-teal-600 px-6 py-3 text-center text-base font-semibold text-white shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] hover:bg-teal-700 transition-colors"
            >
              Request Enterprise Demo
            </a>
            <a
              href="#"
              className="rounded-[10px] border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-6 py-3 text-center text-base font-semibold text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors"
            >
              Talk to Sales
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Outcome-owned",
              "Explainable signals",
              "Aggregate adoption",
              "No hidden scores",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-100 dark:border-teal-900 bg-white dark:bg-gray-800 px-4 py-2 text-xs font-semibold text-slate-800 dark:text-gray-200 shadow-sm"
              >
                <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                  <path
                    d="M3.5 8.5L6.5 11.5L12.5 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-600 dark:text-teal-400"
                  />
                </svg>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/customer-success/herocustomer.jpg"
              alt="Team collaborating during a customer success review"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-emerald-100 dark:border-teal-900 bg-white dark:bg-gray-800 p-5 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] sm:left-4 sm:w-[85%] sm:translate-x-0">
            <div className="flex items-start gap-4">
              <img
                src="/customer-success/image (1).png"
                alt=""
                className="h-14 w-14 flex-none rounded-xl"
              />
              <div className="min-w-0">
                <span className="inline-flex items-center rounded-full bg-orange-100 dark:bg-amber-900/30 px-2.5 py-1 text-[10px] font-bold text-yellow-700 dark:text-amber-300">
                  ★ Featured case study
                </span>
                <p className="mt-2 text-sm font-semibold text-slate-800 dark:text-white">
                  "More records payroll-ready by cutoff, and fewer month-end
                  corrections."
                </p>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xs">
                  <span className="text-sm font-extrabold text-teal-700 dark:text-teal-400">
                    +18%
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">payroll-ready</span>
                  <span className="text-sm font-extrabold text-teal-700 dark:text-teal-400">
                    −40%
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">corrections</span>
                  <span className="text-gray-400 dark:text-gray-500">· illustrative pilot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}