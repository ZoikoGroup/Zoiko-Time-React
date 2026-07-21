import React from "react";

const problems = [
  {
    title: "Time reports can lack context",
    description:
      "Hours alone may not explain whether time was approved, corrected, disputed, billable, idle, or policy-aligned.",
  },
  {
    title: "Payroll needs cleaner inputs",
    description:
      "Payroll review depends on accurate records, approvals, break data, exception resolution, and change history.",
  },
  {
    title: "Billing requires confidence",
    description:
      "Client-facing teams need stronger reporting when time is billed or used to justify professional services fees.",
  },
  {
    title: "Operations need trend visibility",
    description:
      "Leaders need attendance patterns, capacity, utilization, idle trends, and workload distribution.",
  },
  {
    title: "HR needs fair review data",
    description:
      "HR needs reporting that supports policy administration, attendance review, corrections, and transparency.",
  },
  {
    title: "Legal needs evidence trails",
    description:
      "Legal and compliance need reports that are traceable, permissioned, exportable, and supported by audit logs.",
  },
];

export default function Problem() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-900">
      <div className="mx-auto max-w-[1132px] px-6 py-[74px] lg:px-0">
        {/* Header */}
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            The Problem
          </div>

          <h2 className="mt-3 text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            Why workforce reporting needs better records
          </h2>

          <p className="mx-auto mt-5 max-w-[635px] text-base leading-7 text-gray-500 dark:text-gray-400">
            Hours alone don&apos;t explain whether time was approved, corrected,
            disputed, billable, idle, or policy-aligned.
          </p>
        </div>

        {/* Problem List */}
        <div className="mt-[76px] space-y-1">
          {problems.map((problem, index) => (
            <div key={index}>
              <h3 className="text-sm font-bold leading-5 text-gray-700 dark:text-gray-200">
                {problem.title}
              </h3>

              <p className="text-base leading-6 text-gray-700 dark:text-gray-300">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}