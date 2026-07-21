import React from "react";

const insights = [
  {
    title: "Workforce overview",
    description:
      "Active workers, verified hours, attendance rate, unresolved exceptions, and approval status.",
  },
  {
    title: "Payroll readiness",
    description:
      "Approved hours, pending approvals, unresolved corrections, missing records, and export readiness.",
  },
  {
    title: "Revenue assurance",
    description:
      "Billable hours, unapproved billable time, utilization leakage, disputed records, and billing support status.",
  },
  {
    title: "Utilization trends",
    description:
      "Team utilization, department workload, billable vs non-billable time, idle trends, and capacity pressure.",
  },
  {
    title: "Exception risk",
    description:
      "High-priority exceptions, unresolved policy issues, unusual patterns, and review aging.",
  },
  {
    title: "Compliance view",
    description:
      "Records requiring review, retention status, legal hold indicators, and audit-log completeness.",
  },
];

export default function Executive() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-900">
      <div className="mx-auto max-w-[1132px] px-6 py-[74px] lg:px-0">
        {/* Header */}
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Executive View
          </div>

          <h2 className="mt-3 text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            Executive workforce intelligence dashboard
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-base leading-7 text-gray-500 dark:text-gray-400">
            Financial, operational, and governance insight first — drill down
            to source records, never to public worker rankings.
          </p>
        </div>

        {/* Insights */}
        <div className="mt-[76px] space-y-1">
          {insights.map((insight, index) => (
            <div key={index}>
              <h3 className="text-sm font-bold leading-5 text-gray-700 dark:text-gray-200">
                {insight.title}
              </h3>

              <p className="text-base leading-6 text-gray-700 dark:text-gray-300">
                {insight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}