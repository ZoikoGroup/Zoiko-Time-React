"use client";

import { FiCheck } from "react-icons/fi";

const features = [
  "Versioned baseline, changes & current budget",
  "Forecast at completion vs. approved budget",
  "Variance reasons & a named owner",
];

const rows = [
  {
    label: "What changed",
    value: (
      <>
        Forecast at completion is{" "}
        <span className="font-semibold">+7.5%</span> above the current
        approved budget.
      </>
    ),
  },
  {
    label: "Why",
    value:
      "Approved scope change, role mix, late approved time, and rate version update.",
  },
  {
    label: "What is provisional",
    value: "2 time records and 1 FX rate are unapproved or unavailable.",
  },
  {
    label: "Baseline → Current",
    value: (
      <>
        $2.20M → <span className="font-semibold">$2.40M</span> (v3,
        approved changes)
      </>
    ),
  },
  {
    label: "Who owns next action",
    value:
      "Project Finance Reviewer — review forecast and rate status.",
  },
];

export default function BudgetForecast() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-emerald-400">
            Budget & Forecast
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Explain variance before you escalate it
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Baseline, approved changes, current budget, forecast
            versions, and variance categories—with the reason and the
            owner of the next action.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <h3 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white">
              Approved baselines,
              <br />
              forecast & variance evidence
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              See what changed, why, what is provisional, and who owns
              the next action. Variance is attributed to scope, mix,
              timing, rate, or data quality—not misconduct.
            </p>

            <div className="mt-8 space-y-5">
              {features.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-emerald-100 p-1 dark:bg-emerald-500/20">
                    <FiCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>

                  <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between bg-slate-800 px-5 py-4">
              <h3 className="text-sm font-semibold text-white">
                Budget, Forecast & Variance
              </h3>

              <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold text-white">
                Forecast &gt; Budget
              </span>
            </div>

            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-[150px_1fr]"
                >
                  <div className="text-sm font-medium text-slate-900 dark:text-white">
                    {row.label}
                  </div>

                  <div className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 px-5 py-4 text-sm leading-6 text-slate-500 dark:border-slate-800 dark:text-slate-400">
              Variance is explained with scope and context before any
              escalation—never treated as misconduct.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}