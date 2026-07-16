import React from "react";

const categories = [
  {
    title: "Time reports",
    description:
      "Daily, weekly, monthly, and custom reports showing sessions, breaks, edits, approvals, corrections, and totals.",
  },
  {
    title: "Attendance reports",
    description:
      "Attendance status, late starts, absences, missed clock-outs, schedule adherence, and exception trends.",
  },
  {
    title: "Exception reports",
    description:
      "Missing entries, unusual patterns, policy exceptions, incomplete records, and items requiring review.",
  },
  {
    title: "Utilization reports",
    description:
      "Billable vs non-billable time, project allocation, team capacity, workload distribution, and trends.",
  },
  {
    title: (
      <>
        Payroll readiness
        <br />
        reports
      </>
    ),
    description:
      "Approved hours, unresolved exceptions, break indicators, corrections, and export readiness.",
  },
  {
    title: "Billing support reports",
    description:
      "Client, project, task, consultant, or contractor-level summaries with approval and activity context.",
  },
  {
    title: "Evidence reports",
    description:
      "Audit logs, evidence packages, screenshot references where enabled, legal hold, and chain-of-custody.",
  },
  {
    title: "Executive reports",
    description:
      "High-level workforce trends, operational risks, utilization, payroll readiness, and revenue assurance.",
  },
];

export default function Categories() {
  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-[1180px] px-6 py-16 lg:px-0">
        {/* Header */}
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Reporting Categories
          </div>

          <h2 className="mt-3 text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            Core reporting categories
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 dark:text-gray-400">
            Eight report families, all built on the same governed record layer.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[66px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="min-h-[208px] rounded-2xl border border-slate-200 bg-white p-7 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] transition hover:-translate-y-1 hover:shadow-[0px_10px_24px_0px_rgba(14,31,61,0.08)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              <h3 className="text-base font-semibold leading-7 text-slate-800 dark:text-white">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}