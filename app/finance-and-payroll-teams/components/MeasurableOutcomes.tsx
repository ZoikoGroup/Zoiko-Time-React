// components/MeasurableOutcomes.tsx

import React from "react";

const metrics = [
  {
    title: "Payroll-ready record rate",
    description:
      "Approved records meeting configured export requirements by cut-off.",
  },
  {
    title: "Exception rate",
    description:
      "Records requiring input or review ÷ required records — by issue type and pay group, no worker ranking.",
  },
  {
    title: "Median exception age",
    description:
      "Time from exception creation to resolution, in aging buckets.",
  },
  {
    title: "On-time approval rate",
    description:
      "Records approved by the configured deadline — not a manager leaderboard.",
  },
  {
    title: "Post-approval change rate",
    description:
      "Approved records changed after approval, with reason category and reapproval state.",
  },
  {
    title: "Allocation completeness",
    description:
      "Approved records containing required project, task, customer, or cost-code fields.",
  },
  {
    title: "Export validation success",
    description:
      "Exports passing mapping, delivery, and reconciliation checks.",
  },
  {
    title: "Dispute resolution cycle",
    description:
      "Time from documented challenge to final reviewed outcome — aggregate only.",
  },
];

export default function MeasurableOutcomes() {
  return (
    <section className="bg-gray-50 py-16 transition-colors duration-300 dark:bg-slate-950 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600 dark:text-teal-400">
            Measurable Outcomes
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white md:text-5xl">
            Define success with control metrics, not activity scores
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500 dark:text-slate-400">
            Record, review, close, allocation, and export metrics finance and
            payroll champions can carry into a business case — no productivity
            ranking, no invented ROI.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:shadow-none dark:hover:border-slate-600 dark:hover:bg-slate-800"
            >
              <h3 className="min-h-[56px] text-lg font-semibold leading-7 text-slate-800 dark:text-white">
                {metric.title}
              </h3>

              <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-slate-400">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mx-auto mt-14 max-w-4xl rounded-xl border border-emerald-200 bg-emerald-50 p-6 transition-colors duration-300 dark:border-emerald-900 dark:bg-emerald-950/30">
          <p className="text-center text-sm leading-6 text-slate-800 dark:text-emerald-100">
            Use{" "}
            <span className="font-semibold">
              “measure,” “improve consistency,” and “reduce avoidable rework.”
            </span>{" "}
            Any quantified savings figure requires a named method, scope, time
            period, and approved evidence. A business-case estimator unlocks
            only after approved methodology and legal review.
          </p>
        </div>
      </div>
    </section>
  );
}