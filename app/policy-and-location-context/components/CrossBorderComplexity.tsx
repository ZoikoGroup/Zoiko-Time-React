import React from "react";

export default function CrossBorderComplexity() {
  return (
    <section className="bg-slate-100 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-500">
            Cross-Border Complexity
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
            Designed for Real-World Workforce Complexity
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-500 dark:text-slate-400">
            ZoikoTime is built for the scenarios that break traditional systems
            — not the easy ones.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md dark:border-slate-700 dark:bg-slate-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10 text-2xl">
              ✈️
            </div>

            <h3 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">
              Remote Worker Relocates Temporarily
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">
              A London-based employee works from Berlin for three weeks.
              Jurisdiction changes mid-contract.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-3">
                <span className="font-bold text-teal-500">→</span>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Jurisdiction shift detected from location signal.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-teal-500">→</span>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  German ArbZG rules identified and staged.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-teal-500">→</span>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Policy updated for the duration of relocation.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-teal-500">→</span>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Compliance maintained automatically throughout.
                </p>
              </div>
            </div>
          </div>

                    {/* Card 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md dark:border-slate-700 dark:bg-slate-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10 text-2xl">
              🌐
            </div>

            <h3 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">
              Contractor Working Across Regions
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">
              A contractor delivers work across the UK, US, and EU clients
              simultaneously within a single pay period.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-3">
                <span className="font-bold text-teal-500">→</span>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Multiple active jurisdictions identified per session.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-teal-500">→</span>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Classification rules applied for each region and role.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-teal-500">→</span>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Priority determined — the highest legal obligation takes
                  precedence.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-teal-500">→</span>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  A unified audit record is produced across all regions.
                </p>
              </div>
            </div>
          </div>

                    {/* Card 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md dark:border-slate-700 dark:bg-slate-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10 text-2xl">
              🏢
            </div>

            <h3 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">
              Hybrid Workforce (Office + Remote)
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">
              A team splits time between headquarters and remote locations
              week-to-week. Context changes every day.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-3">
                <span className="font-bold text-teal-500">→</span>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Work context detected dynamically for every session.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-teal-500">→</span>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Office and remote rules applied automatically based on
                  location.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-teal-500">→</span>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Schedule and payroll rules update in real time.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-teal-500">→</span>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Consistent compliance maintained across every work mode.
                </p>
              </div>
            </div>
          </div>

                  </div>
      </div>
    </section>
  );
}