"use client";

const comparisonRows = [
  {
    label: "Clock-out",
    disputed: "Missing",
    reviewed: "17:34 (policy v4)",
  },
  {
    label: "Total hours",
    disputed: "Disputed",
    reviewed: "8.5h reviewed",
  },
  {
    label: "Basis",
    disputed: "No context",
    reviewed: "Source + policy + note",
  },
  {
    label: "Status",
    disputed: "Contested",
    reviewed: "Approved correction",
  },
];

export default function RecordComparison() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-3">
        {/* Label */}
        <div className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
          Record Comparison
        </div>

        {/* Heading */}
        <h2 className="w-full max-w-[820px] text-center text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
          Disputed vs. reviewed — side by side
        </h2>

        {/* Description */}
        <p className="w-full max-w-[680px] pb-5 text-center text-base font-normal leading-7 text-gray-500 dark:text-slate-400 sm:pb-8">
          See exactly what changed and why, with evidence behind every reviewed
          value.
        </p>

        {/* Comparison card */}
        <div className="w-full max-w-[1000px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Disputed column */}
            <div className="flex min-w-0 flex-col">
              {/* Header */}
              <div className="flex items-center gap-2 border-b border-slate-200 bg-red-50 px-5 py-3.5 dark:border-slate-700 dark:bg-red-950/30">
                <div className="relative size-4 shrink-0">
                  <div className="absolute left-1 top-1 size-2 rounded-full border-[1.6px] border-red-700 dark:border-red-400" />
                </div>

                <div className="text-sm font-bold leading-5 text-red-700 dark:text-red-400">
                  Disputed — as submitted
                </div>
              </div>

              {/* Rows */}
              {comparisonRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-6 border-b border-slate-200 px-5 py-2.5 last:border-b-0 dark:border-slate-700"
                >
                  <span className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                    {row.label}
                  </span>

                  <span className="text-right text-xs font-semibold leading-5 text-red-700 dark:text-red-400">
                    {row.disputed}
                  </span>
                </div>
              ))}
            </div>

            {/* Reviewed column */}
            <div className="flex min-w-0 flex-col border-t border-slate-200 md:border-l md:border-t-0 dark:border-slate-700">
              {/* Header */}
              <div className="flex items-center gap-2 border-b border-slate-200 bg-emerald-50 px-5 py-3.5 dark:border-slate-700 dark:bg-emerald-950/30">
                <div className="relative size-4 shrink-0">
                  <div className="absolute left-[3.75px] top-[5.25px] h-2 w-2.5 rounded-sm border-2 border-teal-600 dark:border-teal-400" />
                </div>

                <div className="text-sm font-bold leading-5 text-teal-700 dark:text-teal-400">
                  Reviewed — evidence-backed
                </div>
              </div>

              {/* Rows */}
              {comparisonRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-6 border-b border-slate-200 px-5 py-2.5 last:border-b-0 dark:border-slate-700"
                >
                  <span className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                    {row.label}
                  </span>

                  <span className="text-right text-xs font-semibold leading-5 text-teal-700 dark:text-teal-400">
                    {row.reviewed}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}