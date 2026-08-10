import React from "react";
import Link from "next/link";

export default function StageFive() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6">

        {/* Main Layout */}
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start">

          {/* Left Content */}
          <div className="flex-1">

            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1.5 shadow-[0px_6px_14px_rgba(16,162,141,0.16)] dark:bg-teal-500/10">
              <div className="flex h-5 w-5 items-center justify-center rounded-[10px] bg-teal-600 text-xs font-bold text-white">
                5
              </div>

              <span className="text-xs font-bold text-teal-700 dark:text-teal-300">
                Deliver governed record versions to approved downstream
                workflows.
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white lg:text-4xl">
              Stage 5
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 dark:text-slate-300">
              An approved record version is delivered to permitted payroll,
              billing, reporting, audit, or approved data destinations — and
              remains explainable, traceable, and reconcilable.
            </p>

            {/* Label */}
            <h3 className="mt-8 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
              Supported workflow categories
            </h3>

            {/* Pills */}
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "Payroll input",
                "Billing input",
                "Organization reporting",
                "Audit / reconciliation",
                "Approved data platform",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-emerald-100 bg-white px-4 py-2 text-xs font-medium text-slate-800 transition hover:border-teal-300 hover:bg-emerald-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-500 dark:hover:bg-slate-800"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="#"
                className="inline-flex min-h-11 items-center justify-center rounded-[10px] border border-gray-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 transition hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                Explore Reports &amp; Integrations
              </Link>
            </div>
          </div>


          {/* Right Card */}
          <div className="flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_2px_6px_rgba(14,31,61,0.05),0px_20px_44px_rgba(14,31,61,0.13)] dark:border-slate-700 dark:bg-slate-900">

            {/* Card Header */}
            <div className="flex items-center justify-between bg-slate-800 px-4 py-3">

              <h3 className="text-xs font-semibold text-white">
                Delivery, acknowledgment &amp; manifest
              </h3>

              <div className="flex items-center gap-2 rounded-full bg-white/20 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-white"></span>

                <span className="text-xs font-bold text-white">
                  Synthetic data
                </span>
              </div>

            </div>

            <div className="p-5">

                              {/* Delivery Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
                        Destination
                      </th>
                      <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
                        Version
                      </th>
                      <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
                        Sent
                      </th>
                      <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      {
                        destination: "Payroll input",
                        version: "v3",
                        sent: "18:30",
                        status: "Acknowledged",
                        type: "success",
                      },
                      {
                        destination: "Billing input",
                        version: "v3",
                        sent: "18:31",
                        status: "Accepted",
                        type: "info",
                      },
                      {
                        destination: "Reporting",
                        version: "v3",
                        sent: "18:31",
                        status: "Reconciled",
                        type: "success",
                      },
                      {
                        destination: "Audit export",
                        version: "v3",
                        sent: "—",
                        status: "Permission required",
                        type: "warning",
                      },
                    ].map((row) => (
                      <tr
                        key={row.destination}
                        className="border-b border-slate-200 dark:border-slate-700"
                      >
                        <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                          {row.destination}
                        </td>

                        <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                          {row.version}
                        </td>

                        <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                          {row.sent}
                        </td>

                        <td className="px-3 py-3">
                          {row.type === "success" && (
                            <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-teal-700 dark:bg-emerald-900/30 dark:text-teal-300">
                              {row.status}
                            </span>
                          )}

                          {row.type === "info" && (
                            <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-indigo-900/30 dark:text-blue-300">
                              {row.status}
                            </span>
                          )}

                          {row.type === "warning" && (
                            <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">
                              {row.status}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer Description */}
              <p className="mt-5 text-xs leading-5 text-gray-500 dark:text-slate-400">
                Delivery, acceptance, and reconciliation are distinct states.
                Defend = trace source, policy, decisions, corrections, versions,
                delivery &amp; limits. No universal legal-admissibility claim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}