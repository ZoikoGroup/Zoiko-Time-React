// components/AccessAudit.tsx

import React from "react";

const auditItems = [
  {
    control: "Screenshot status",
    treatment: "Clear enabled / disabled indicator",
  },
  {
    control: "Capture scope",
    treatment: "Role, team, worker, project, or policy-based",
  },
  {
    control: "Capture timing",
    treatment: "Plain-English interval or rule summary",
  },
  {
    control: "Worker notice",
    treatment: "Visible policy summary and acknowledgment status",
  },
  {
    control: "Redaction",
    treatment: "Redaction status and available controls",
  },
  {
    control: "Access permissions",
    treatment: "Which roles may view or export",
  },
  {
    control: "Retention",
    treatment: "Storage duration and legal hold status",
  },
  {
    control: "Audit log",
    treatment: "Record of configuration changes",
  },
];

export default function AccessAudit() {
  return (
    <section className="bg-gray-50 py-16 md:py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Access &amp; Audit
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Controlled access and review
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            A clear control surface so customers can see and govern how
            screenshots are used.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="mt-14 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900 md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-800 text-left">
                <th className="px-6 py-4 text-sm font-semibold text-white">
                  Control area
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-white">
                  Recommended treatment
                </th>
              </tr>
            </thead>

            <tbody>
              {auditItems.map((item, index) => (
                <tr
                  key={index}
                  className={`border-t border-slate-200 dark:border-slate-700 ${
                    index % 2 === 1
                      ? "bg-gray-50 dark:bg-slate-800/40"
                      : ""
                  }`}
                >
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">
                    {item.control}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                    {item.treatment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="mt-10 space-y-4 md:hidden">
          {auditItems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {item.control}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {item.treatment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}