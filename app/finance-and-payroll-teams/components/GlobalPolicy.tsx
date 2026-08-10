// GlobalPolicy.tsx

import Link from "next/link";
import React from "react";

const policyData = [
  {
    organization: "US East",
    payGroup: "US-Hourly",
    workerType: "Employee",
    ruleSet: "Meal/rest v4",
    effectiveDate: "Jan 1, 2026",
    status: "Active",
  },
  {
    organization: "UK Ops",
    payGroup: "UK-Monthly",
    workerType: "Employee",
    ruleSet: "Overtime v2",
    effectiveDate: "Apr 6, 2026",
    status: "Active",
  },
  {
    organization: "APAC",
    payGroup: "Contractor-APAC",
    workerType: "Contractor",
    ruleSet: "Project-based v1",
    effectiveDate: "Feb 1, 2026",
    status: "Active",
  },
  {
    organization: "Global PS",
    payGroup: "Billable-PS",
    workerType: "Project reporter",
    ruleSet: "Allocation-required v3",
    effectiveDate: "Mar 1, 2026",
    status: "Review",
  },
];

export default function GlobalPolicy() {
  return (
    <section className="bg-white py-16 transition-colors duration-300 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600 dark:text-teal-400">
            Global Policy
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white md:text-4xl">
            One operating model. Rules that reflect each
            <br className="hidden md:block" />
            workforce group.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-500 dark:text-slate-400">
            Configure time, attendance, break, approval, review, cut-off,
            allocation, and export requirements by organization, location,
            pay group, schedule, role, and worker type — where supported.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="mt-14 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none lg:block">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-800">
              <tr className="text-left">
                <th className="px-6 py-5 text-base font-bold text-gray-700 dark:text-slate-200">
                  Organization
                </th>
                <th className="px-6 py-5 text-base font-bold text-gray-700 dark:text-slate-200">
                  Pay group
                </th>
                <th className="px-6 py-5 text-base font-bold text-gray-700 dark:text-slate-200">
                  Worker type
                </th>
                <th className="px-6 py-5 text-base font-bold text-gray-700 dark:text-slate-200">
                  Rule set
                </th>
                <th className="px-6 py-5 text-base font-bold text-gray-700 dark:text-slate-200">
                  Effective date
                </th>
                <th className="px-6 py-5 text-base font-bold text-gray-700 dark:text-slate-200">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {policyData.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-slate-200 transition-colors duration-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  <td className="px-6 py-5 font-semibold text-gray-700 dark:text-white">
                    {item.organization}
                  </td>

                  <td className="px-6 py-5 text-gray-700 dark:text-slate-300">
                    {item.payGroup}
                  </td>

                  <td className="px-6 py-5 text-gray-700 dark:text-slate-300">
                    {item.workerType}
                  </td>

                  <td className="px-6 py-5 text-gray-700 dark:text-slate-300">
                    {item.ruleSet}
                  </td>

                  <td className="px-6 py-5 text-gray-700 dark:text-slate-300">
                    {item.effectiveDate}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        item.status === "Active"
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="mt-12 space-y-5 lg:hidden">
          {policyData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-slate-800 dark:text-white">
                  {item.organization}
                </h3>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.status === "Active"
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
                <p>
                  <strong className="text-slate-800 dark:text-white">
                    Pay Group:
                  </strong>{" "}
                  {item.payGroup}
                </p>

                <p>
                  <strong className="text-slate-800 dark:text-white">
                    Worker Type:
                  </strong>{" "}
                  {item.workerType}
                </p>

                <p>
                  <strong className="text-slate-800 dark:text-white">
                    Rule Set:
                  </strong>{" "}
                  {item.ruleSet}
                </p>

                <p>
                  <strong className="text-slate-800 dark:text-white">
                    Effective:
                  </strong>{" "}
                  {item.effectiveDate}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="mx-auto mt-14 max-w-5xl rounded-xl border border-emerald-200 bg-emerald-50 px-8 py-6 text-center transition-colors duration-300 dark:border-emerald-900 dark:bg-emerald-950/30">
          <p className="text-sm leading-6 text-slate-800 dark:text-emerald-100">
            ZoikoTime supports configured operational policies. The organization
            remains responsible for legal, payroll, and tax determinations with
            qualified advisers. Region and country availability, EU data
            residency, and compliance claims are subject to the published
            availability register.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/global-deployment"
            className="rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-slate-800 transition-all duration-300 hover:bg-gray-50 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          >
            Discuss Global Deployment
          </Link>
        </div>
      </div>
    </section>
  );
}
