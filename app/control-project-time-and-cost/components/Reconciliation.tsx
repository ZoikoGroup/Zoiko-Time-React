"use client";

import { FiCheck } from "react-icons/fi";

const reconciliationRows = [
  {
    target: "Payroll input",
    version: "v3",
    ack: "18:30",
    state: "Reconciled",
    badge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  },
  {
    target: "Billing / Invoice",
    version: "v3",
    ack: "18:31",
    state: "Accepted",
    badge:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
  },
  {
    target: "Project Ledger (ERP)",
    version: "v3",
    ack: "—",
    state: "Mismatch · Retry",
    badge:
      "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
  },
  {
    target: "Accounting Close",
    version: "—",
    ack: "—",
    state: "Period Soft-Locked",
    badge:
      "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300",
  },
];

const features = [
  "System-of-record shown per object",
  "Transmission, acknowledgment & reconciliation",
  "No cross-contamination between targets",
];

export default function Reconciliation() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-emerald-400">
            Reconciliation
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Cost, billing, payroll & ledger —
            <br className="hidden sm:block" />
            separate and traceable
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Approved outputs connect to downstream systems with their
            own statuses. A correction in one never silently changes
            another.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Table */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between bg-slate-800 px-5 py-4">
              <h3 className="text-sm font-semibold text-white">
                Downstream Reconciliation
              </h3>

              <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold text-white">
                Targets Kept Separate
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Target
                    </th>
                    <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Version
                    </th>
                    <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Ack
                    </th>
                    <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      State
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {reconciliationRows.map((row) => (
                    <tr
                      key={row.target}
                      className="border-b border-slate-100 dark:border-slate-800"
                    >
                      <td className="px-4 py-4 text-sm text-slate-900 dark:text-white">
                        {row.target}
                      </td>

                      <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">
                        {row.version}
                      </td>

                      <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">
                        {row.ack}
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-[11px] font-semibold ${row.badge}`}
                        >
                          {row.state}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-slate-200 px-5 py-4 text-sm leading-6 text-slate-600 dark:border-slate-700 dark:text-slate-400">
              Payroll, billing, ledger, and accounting close remain
              independent states. A payroll correction never silently
              changes a client invoice.
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white">
              Keep every downstream target independent
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              Each target—payroll, billing, project ledger, and
              accounting—has its own transmitted version,
              acknowledgment, and reconciliation state. ZoikoTime
              reconciles; it does not replace your accounting,
              payroll, billing, or ERP systems.
            </p>

            <div className="mt-8 space-y-5">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-emerald-100 p-1 dark:bg-emerald-500/20">
                    <FiCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>

                  <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}