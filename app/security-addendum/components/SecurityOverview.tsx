import React from "react";

const overviewCards = [
  {
    title: "Access governance",
    description:
      "Users should only access the data, records, settings, reports, and workflows appropriate to their role, permissions, organization, and configuration.",
  },
  {
    title: "Data protection",
    description:
      "Customer data is protected through secure transmission, controlled storage, data-handling safeguards, and administrative controls.",
  },
  {
    title: "Auditability",
    description:
      "Important actions are logged to support accountability, investigation, evidence review, and administrative oversight.",
  },
  {
    title: "Configuration control",
    description:
      "Administrators control settings for users, roles, policies, data access, exports, screenshots, retention, and workspace governance where supported.",
  },
  {
    title: "Operational security",
    description:
      "Platform operations include monitoring, controlled changes, incident handling, and security review appropriate for a commercial SaaS environment.",
  },
  {
    title: "Enterprise review",
    description:
      "Enterprise customers have a clear route to request available security information through sales, legal, and procurement workflows.",
  },
];

export default function SecurityOverview() {
  return (
    <section className="bg-gray-50 py-16 md:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Overview
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 md:text-4xl dark:text-white">
            Security built around workforce evidence
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-500 dark:text-slate-300">
            ZoikoTime protects the workforce records and operational data
            customers use for management, reporting, billing and payroll
            support, compliance review, dispute handling, and internal
            governance.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {overviewCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_rgba(14,31,61,0.05)] transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-sm bg-teal-600"></span>

                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                  {card.title}
                </h3>
              </div>

              <p className="mt-5 text-sm leading-7 text-gray-500 dark:text-slate-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}