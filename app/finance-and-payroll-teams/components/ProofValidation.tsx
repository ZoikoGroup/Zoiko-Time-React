// components/ProofValidation.tsx

import React from "react";

const proofRows = [
  {
    measure: "Payroll-ready record rate",
    baseline: "Current % or sample",
    question:
      "Are more required records approved and export-ready by cut-off?",
  },
  {
    measure: "Exception age",
    baseline: "Current median or sample",
    question: "Are issues assigned and resolved earlier?",
  },
  {
    measure: "Correction traceability",
    baseline: "Current evidence quality",
    question:
      "Can reviewers reconstruct each consequential change and approval?",
  },
  {
    measure: "Export validation",
    baseline: "Current error/retry process",
    question:
      "Can the team detect, explain, and resolve rejected records?",
  },
  {
    measure: "Allocation completeness",
    baseline: "Current coverage",
    question:
      "Do approved records contain the required finance context?",
  },
  {
    measure: "Worker & manager acceptance",
    baseline: "Current feedback / support load",
    question:
      "Can users review and correct records without invasive monitoring?",
  },
  {
    measure: "Implementation fit",
    baseline: "Current calendar & systems",
    question:
      "Can the workflow operate through a real pay period without disrupting payroll?",
  },
];

export default function ProofValidation() {
  return (
    <section className="bg-gray-50 py-16 transition-colors duration-300 dark:bg-slate-950 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600 dark:text-teal-400">
            Proof
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white md:text-5xl">
            Validate ZoikoTime in your payroll workflow
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-500 dark:text-slate-400">
            Where signed customer proof isn't yet public, we use a rigorous
            pilot-validation scorecard rather than an empty or fabricated
            carousel.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="mt-14 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none lg:block">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-800">
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="px-8 py-5 text-left text-base font-bold text-gray-700 dark:text-slate-200">
                  Pilot measure
                </th>
                <th className="px-8 py-5 text-left text-base font-bold text-gray-700 dark:text-slate-200">
                  Baseline
                </th>
                <th className="px-8 py-5 text-left text-base font-bold text-gray-700 dark:text-slate-200">
                  Validation question
                </th>
              </tr>
            </thead>

            <tbody>
              {proofRows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-100 transition-colors duration-200 last:border-0 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
                >
                  <td className="px-8 py-5 font-semibold text-gray-700 dark:text-white">
                    {row.measure}
                  </td>

                  <td className="px-8 py-5 text-gray-600 dark:text-slate-300">
                    {row.baseline}
                  </td>

                  <td className="px-8 py-5 text-gray-600 dark:text-slate-300">
                    {row.question}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="mt-12 space-y-5 lg:hidden">
          {proofRows.map((row, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  Pilot Measure
                </p>
                <p className="mt-1 font-semibold text-slate-800 dark:text-white">
                  {row.measure}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  Baseline
                </p>
                <p className="mt-1 text-gray-600 dark:text-slate-300">
                  {row.baseline}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  Validation Question
                </p>
                <p className="mt-1 text-gray-600 dark:text-slate-300">
                  {row.question}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mx-auto mt-14 max-w-4xl rounded-xl border border-emerald-200 bg-emerald-50 p-6 transition-colors duration-300 dark:border-emerald-900 dark:bg-emerald-950/30">
          <p className="text-center text-sm leading-6 text-slate-800 dark:text-emerald-100">
            Preferred proof is one or two signed customer stories with named
            role, scope, measured result, time period, and methodology. No
            invented people, synthetic customer logos, unverifiable savings, or
            auto-rotating testimonial carousels.
          </p>
        </div>
      </div>
    </section>
  );
}