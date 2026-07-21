import React from "react";

const teams = [
  {
    label: "CFO & Finance",
    title: "Finance",
    description:
      "Payroll readiness, billable utilization, revenue leakage, billing support, and financial controls.",
  },
  {
    label: "COO & Operations",
    title: "Operations",
    description:
      "Capacity planning, workforce patterns, attendance trends, approval backlogs, and bottlenecks.",
  },
  {
    label: "HR",
    title: "HR teams",
    description:
      "Attendance review, policy exceptions, corrections, dispute notes, and transparency records.",
  },
  {
    label: "Legal & Compliance",
    title: "Legal",
    description:
      "Audit trails, evidence packages, retention, legal hold, access logs, and export history.",
  },
  {
    label: "Professional Services",
    title: "Services leaders",
    description:
      "Client billing, consultant utilization, project allocation, write-off risk, and dispute-ready evidence.",
  },
  {
    label: "Managers",
    title: "Department managers",
    description:
      "Team attendance, approvals, project allocation, clarification requests, and exceptions.",
  },
  {
    label: "Admins",
    title: "Administrators",
    description:
      "Configuration, permissions, integration status, retention settings, and export controls.",
  },
  {
    label: "Workers",
    title: "Workers",
    description:
      "Personal time records, attendance summaries, correction status, and transparency notices where supported.",
  },
];

export default function Teams() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-900">
      <div className="mx-auto max-w-[1132px] px-6 py-[74px] lg:px-0">
        {/* Header */}
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            By Team
          </div>

          <h2 className="mt-3 text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            Role-based reporting for teams
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-base leading-7 text-gray-500 dark:text-gray-400">
            Each role gets the reports it needs from the same governed record
            layer.
          </p>
        </div>

        {/* Team Cards */}
        <div className="mt-[66px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teams.map((team, index) => (
            <div
              key={index}
              className="min-h-[208px] rounded-2xl border border-slate-200 bg-white p-7 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] transition hover:-translate-y-1 hover:shadow-[0px_10px_24px_0px_rgba(14,31,61,0.08)] dark:border-slate-800 dark:bg-slate-950 dark:shadow-none"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                {team.label}
              </div>

              <h3 className="mt-2 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                {team.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {team.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}