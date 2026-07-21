import React from "react";

const evidenceReports = [
  {
    title: (
      <>
        Pending approval
        <br />
        reports
      </>
    ),
    description:
      "Records awaiting manager, administrator, finance, HR, or worker action.",
  },
  {
    title: "Missing record reports",
    description:
      "Missed clock-ins/outs, incomplete breaks, missing timesheets, and unsubmitted time.",
  },
  {
    title: "Time edit reports",
    description:
      "Corrections, edits, change history, approval status, and review comments.",
  },
  {
    title: "Policy exception reports",
    description:
      "Schedule, break, overtime, project, attendance, or customer-defined exceptions.",
  },
  {
    title: "Review aging reports",
    description:
      "How long exceptions have stayed unresolved and who owns the next action.",
  },
  {
    title: "Evidence drill-down",
    description:
      "Move from summary metrics to source records, approvals, corrections, and context.",
  },
  {
    title: (
      <>
        Evidence packages &
        <br />
        exports
      </>
    ),
    description:
      "Assemble records for billing, disputes, audit, or legal hold — respecting permissions and redaction.",
  },
  {
    title: (
      <>
        Scheduled & custom
        <br />
        reports
      </>
    ),
    description:
      "Schedule recurring reports or configure fields, filters, grouping, and export formats where supported.",
  },
];

export default function Evidence() {
  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-[1180px] px-6 py-16 lg:px-0">
        {/* Header */}
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Review &amp; Evidence
          </div>

          <h2 className="mt-3 text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            Exceptions, evidence, and export controls
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-base leading-7 text-gray-500 dark:text-gray-400">
            Move from summary metrics to source records, with exports that
            respect permissions, redaction, retention, and legal hold.
          </p>
        </div>

        {/* Evidence Cards */}
        <div className="mt-[76px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {evidenceReports.map((report, index) => (
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