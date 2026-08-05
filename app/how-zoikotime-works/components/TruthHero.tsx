import Link from "next/link";

export default function TruthHero() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 lg:flex-row lg:items-center lg:justify-between">
        {/* ========================= */}
        {/* Left Content */}
        {/* ========================= */}
        <div className="w-full max-w-2xl">
          {/* Badge */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Workforce Truth Infrastructure
          </p>

          {/* Heading */}
         <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
  From approved signals
  <br />
  to <span className="text-teal-600">reviewable workforce</span>
  <span className="text-teal-600"> records</span>
</h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 lg:text-lg">
            ZoikoTime turns documented time, attendance, approval, policy,
            jurisdiction, and approved integration signals into deterministic,
            evidence-backed records that people can review, correct, approve,
            and deliver to supported payroll, billing, reporting, and audit
            workflows.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/start-free"
              className="inline-flex h-12 items-center justify-center rounded-[10px] bg-teal-600 px-7 text-base font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700"
            >
              Start Free
            </Link>

            <Link
              href="/request-enterprise-demo"
              className="inline-flex h-12 items-center justify-center rounded-[10px] border border-slate-300 bg-white px-7 text-base font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              Request Enterprise Demo
            </Link>
          </div>
        </div>

        {/* ========================= */}
        {/* Right Card */}
        {/* ========================= */}
        <div className="w-full max-w-lg">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(14,31,61,0.10)] dark:border-slate-700 dark:bg-slate-900">
            {/* Header */}
            <div className="flex items-center gap-2 bg-slate-800 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />

              <p className="ml-3 text-xs font-medium text-white/90">
                Workforce record · WR-84213 · lifecycle
              </p>
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
              <button className="min-w-[90px] border-b-2 border-teal-600 bg-white px-4 py-3 text-xs font-semibold text-teal-700 dark:bg-slate-900">
                Capture
              </button>

              <button className="min-w-[90px] px-4 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
                Classify
              </button>

              <button className="min-w-[90px] px-4 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
                Review
              </button>

              <button className="min-w-[90px] px-4 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
                Approve
              </button>

              <button className="min-w-[90px] px-4 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
                Export
              </button>
            </div>

            {/* Card Body Starts */}
            <div className="space-y-4 p-4">

                        {/* Information Grid */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  {
                    label: "Record ID",
                    value: "WR-84213",
                  },
                  {
                    label: "Worker",
                    value: "A. Okafor",
                  },
                  {
                    label: "Organization",
                    value: "Northwind Ops",
                  },
                  {
                    label: "Date",
                    value: "Aug 5, 2026",
                  },
                  {
                    label: "Policy Version",
                    value: "Meal / Rest v4",
                  },
                  {
                    label: "Evidence Events",
                    value: "9",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Timeline Events */}
              <div className="space-y-3">
                {/* Event 1 */}
                <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    Clock event · 09:00 · UTC
                  </p>

                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-teal-700 dark:bg-emerald-900/20 dark:text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-teal-700 dark:bg-emerald-400" />
                    Validated
                  </span>
                </div>

                {/* Event 2 */}
                <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    Attendance state · Present
                  </p>

                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-teal-700 dark:bg-emerald-900/20 dark:text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-teal-700 dark:bg-emerald-400" />
                    Received
                  </span>
                </div>

                {/* Event 3 */}
                <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    Approved integration event
                  </p>

                  <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700 dark:bg-amber-900/20 dark:text-amber-300">
                    <span className="h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-400" />
                    Late
                  </span>
                </div>
              </div>

                          </div>
          </div>
        </div>
      </div>
    </section>
  );
}