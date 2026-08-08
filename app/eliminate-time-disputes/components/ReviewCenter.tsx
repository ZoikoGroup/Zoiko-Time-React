"use client";

const queueItems = [
  ["Missing clock-out", "Case #4821 · Aug 12"],
  ["Break overlap", "Case #4822 · Aug 12"],
  ["Overtime threshold", "Case #4823 · Aug 11"],
  ["Location mismatch", "Case #4824 · Aug 11"],
  ["Duplicate entry", "Case #4825 · Aug 10"],
];

const recordDetails = [
  ["Source", "Web clock · device verified"],
  ["Policy", "Auto clock-out after 12h (v4)"],
  ["Submitted", "09:02 in · no out recorded"],
  ["Worker note", "“Forgot to clock out — left ~17:30”"],
  ["Evidence", "Provenance + policy + note preserved"],
];

export default function ReviewCenter() {
  return (
    <section className="w-full bg-white px-4 py-16 dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-3">
        {/* Header */}
        <div className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
          Review Center
        </div>

        <h2 className="w-full max-w-[820px] text-center text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
          One workspace to review and resolve
        </h2>

        <p className="w-full max-w-[680px] text-center text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
          A queue, case detail, record comparison, and evidence — so
          reviewers decide
          <br className="hidden sm:block" /> with the full picture.
        </p>

        {/* Review application */}
        <div className="mt-5 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_34px_70px_rgba(14,31,61,0.20)] dark:border-slate-700 dark:bg-slate-900">
          {/* Browser header */}
          <div className="flex items-center gap-1.5 bg-slate-800 px-4 py-3">
            <span className="size-2.5 rounded-md bg-white/25" />
            <span className="size-2.5 rounded-md bg-white/25" />
            <span className="size-2.5 rounded-md bg-white/25" />

            <span className="pl-2.5 text-xs font-medium leading-5 text-white/90">
              ZoikoTime · Time Record Review Center
            </span>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Review queue */}
            <aside className="w-full shrink-0 border-b border-slate-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-950 lg:w-72 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-700">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
                  Review queue
                </span>

                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
                  5 open
                </span>
              </div>

              {queueItems.map(([title, meta], index) => (
                <div
                  key={title}
                  className={`border-b border-slate-200 px-4 py-3 dark:border-slate-700 ${
                    index === 0
                      ? "border-l-[3px] border-l-teal-600 bg-white dark:bg-slate-900"
                      : ""
                  }`}
                >
                  <div className="text-xs font-semibold leading-5 text-slate-800 dark:text-slate-200">
                    {title}
                  </div>

                  <div className="text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                    {meta}
                  </div>
                </div>
              ))}
            </aside>

            {/* Case detail */}
            <main className="min-w-0 flex-1 px-4 pb-8 pt-5 sm:px-5">
              {/* Case heading */}
              <div className="flex flex-col gap-3 pb-3.5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-bold leading-6 text-slate-800 dark:text-white">
                    Missing clock-out
                  </h3>

                  <p className="text-xs leading-4 text-gray-500 dark:text-slate-400">
                    Case #4821 · Worker A. Okafor · Aug 12
                  </p>
                </div>

                <div className="inline-flex w-fit items-center gap-1.5 rounded-[20px] bg-orange-100 px-2 py-[3px] dark:bg-orange-950/50">
                  <span className="size-1.5 rounded-[3px] bg-yellow-700 dark:bg-yellow-400" />

                  <span className="text-[10px] font-bold leading-4 text-yellow-700 dark:text-yellow-400">
                    Needs review
                  </span>
                </div>
              </div>

              {/* Record details */}
              <div className="border-t border-slate-200 dark:border-slate-700">
                {recordDetails.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-1 gap-1 border-b border-slate-200 py-2 dark:border-slate-700 sm:grid-cols-[112px_1fr] sm:gap-3.5"
                  >
                    <span className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                      {label}
                    </span>

                    <span className="text-xs font-medium leading-5 text-slate-800 dark:text-slate-200">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2 pt-4">
                <button
                  type="button"
                  className="rounded-lg bg-green-400 px-3.5 py-2 text-xs font-semibold leading-5 text-white transition hover:bg-green-500"
                >
                  Approve correction
                </button>

                <button
                  type="button"
                  className="rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-xs font-semibold leading-5 text-slate-800 transition hover:bg-gray-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  Request info
                </button>
              </div>

              {/* Footer note */}
              <p className="pt-2.5 text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                A human reviewer decides. Every action is reasoned and
                preserved. Synthetic data.
              </p>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}