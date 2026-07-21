import React from "react";

const financeReports = [
  {
    title: "Payroll review reports",
    description:
      "Approved hours, unresolved exceptions, break indicators, correction history, and export readiness.",
  },
  {
    title: (
      <>
        Timesheet integrity
        <br />
        reports
      </>
    ),
    description:
      "Edited time, missing approvals, incomplete records, late submissions, and unresolved comments.",
  },
  {
    title: (
      <>
        Billing-ready time
        <br />
        reports
      </>
    ),
    description:
      "Client, project, task, worker, department, and period records ready for billing review.",
  },
  {
    title: (
      <>
        Billable utilization
        <br />
        reports
      </>
    ),
    description:
      "Billable vs non-billable work across workers, teams, projects, and clients.",
  },
  {
    title: (
      <>
        Revenue leakage
        <br />
        indicators
      </>
    ),
    description:
      "Unsubmitted time, unapproved billable time, write-off risk, and idle-heavy billable periods.",
  },
  {
    title: "Client dispute support",
    description:
      "Supporting records for client questions about time, project work, scope, and approvals.",
  },
  {
    title: (
      <>
        Contractor payment
        <br />
        review
      </>
    ),
    description:
      "Reviewed time, project allocation, approval status, and supporting activity context.",
  },
  {
    title: (
      <>
        Export &amp; integration
        <br />
        readiness
      </>
    ),
    description:
      "Prepare reviewed records for payroll, billing, accounting, PM, or ERP systems where supported.",
  },
];

export default function Finance() {
  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-[1180px] px-6 py-16 lg:px-0">
        {/* Header */}
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Finance
          </div>

          <h2 className="mt-3 text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            Payroll, billing, and revenue assurance
            <br className="hidden sm:block" />
            reporting
          </h2>

          <p className="mx-auto mt-5 max-w-[630px] text-base leading-7 text-gray-500 dark:text-gray-400">
            Connect verified time to payroll readiness, billing confidence, and
            revenue protection.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[92px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {financeReports.map((report, index) => (
            <div
              key={index}
              className="min-h-[208px] rounded-2xl border border-slate-200 bg-white p-7 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] transition hover:-translate-y-1 hover:shadow-[0px_10px_24px_0px_rgba(14,31,61,0.08)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              <h3 className="text-base font-semibold leading-7 text-slate-800 dark:text-white">
                {report.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {report.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}