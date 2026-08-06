import React from "react";

const workflows = [
  {
    category: "Readiness",
    title: "Payroll readiness",
    description:
      "See required records by approved, pending review, needs input, blocked, and export-ready status before cut-off.",
  },
  {
    category: "Approval",
    title: "Time & attendance approval",
    description:
      "Review time, attendance, break, and schedule context through the configured approval route.",
  },
  {
    category: "Exceptions",
    title: "Exception reconciliation",
    description:
      "Assign, investigate, and resolve missing, conflicting, or changed records with neutral statuses and full history.",
  },
  {
    category: "Policy",
    title: "Break & policy review",
    description:
      "Apply configured meal, rest, attendance, and exception rules while preserving jurisdiction and policy version.",
  },
  {
    category: "Allocation",
    title: "Project & cost allocation",
    description:
      "Connect approved time to projects, tasks, customers, or cost codes where configured.",
  },
  {
    category: "Contractors",
    title: "Contractor time records",
    description:
      "Collect and approve contractor time with the right project, engagement, and billing context.",
  },
  {
    category: "Corrections",
    title: "Corrections & retro changes",
    description:
      "Preserve original values, reasons, authors, reapproval requirements, and export consequences.",
  },
  {
    category: "Audit",
    title: "Audit & export packs",
    description:
      "Produce period summaries, approvals, corrections, policy references, and export evidence for authorized users.",
  },
];

export default function PayrollWorkflows() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Core Workflows
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl lg:text-5xl">
            Core workflows for finance and payroll teams
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 dark:text-slate-400">
            Recurring pay-period jobs, each routing to the relevant product and
            outcome pages.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {workflows.map((workflow) => (
            <div
              key={workflow.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-[0px_6px_18px_rgba(14,31,61,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
                {workflow.category}
              </p>

              <h3 className="mt-5 text-lg font-semibold leading-7 text-slate-800 transition-colors group-hover:text-teal-600 dark:text-white">
                {workflow.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-slate-400">
                {workflow.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}