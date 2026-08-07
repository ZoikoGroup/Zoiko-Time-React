"use client";

import { FiCheck } from "react-icons/fi";

const rateRows = [
  {
    type: "Internal cost rate",
    scope: "Senior Eng · USD",
    version: "v4 · Jan 1",
    badge: "Finance only",
    badgeClass:
      "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
  },
  {
    type: "Billing rate",
    scope: "Contract A · USD",
    version: "v2",
    badge: "Commercial only",
    badgeClass:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
  },
  {
    type: "Pay / contractor ref",
    scope: "Restricted",
    version: "—",
    badge: "Compensation hidden",
    badgeClass:
      "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300",
  },
  {
    type: "FX rule",
    scope: "EUR → USD",
    version: "v7 · daily",
    badge: "Missing → blocks calc",
    badgeClass:
      "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300",
  },
];

const features = [
  "Separate internal cost vs. billing rate",
  "Effective-dated versions — no silent overwrite",
  "Compensation restricted & excluded from exports",
];

export default function RateGovernance() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-emerald-400">
            Rate Governance
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Sensitive rates, controlled by design
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Separate rate types with effective dates, scope, currency,
            access control, and calculation disclosure—compensation
            stays restricted.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Table */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between bg-slate-800 px-5 py-4">
              <h3 className="text-sm font-semibold text-white">
                Rate & Cost-Rule Governance
              </h3>

              <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold text-white">
                Effective-dated · Versioned
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Rate Type
                    </th>
                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Scope
                    </th>
                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Version
                    </th>
                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Visibility
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {rateRows.map((row) => (
                    <tr
                      key={row.type}
                      className="border-b border-slate-100 dark:border-slate-800"
                    >
                      <td className="px-4 py-4 text-sm text-slate-900 dark:text-white">
                        {row.type}
                      </td>

                      <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">
                        {row.scope}
                      </td>

                      <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">
                        {row.version}
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-[11px] font-semibold ${row.badgeClass}`}
                        >
                          {row.badge}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-slate-200 px-5 py-4 text-sm leading-6 text-slate-600 dark:border-slate-700 dark:text-slate-400">
              Historical records keep the rate version used at
              calculation time. Sensitive rates are enforced
              server-side and excluded from unauthorized exports.
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Versioned, scoped, sensitive rate control
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              Internal cost, billing, contractor, blended, FX, and
              rounding rules are modeled separately. Every rule is
              versioned and effective-dated so historical calculations
              always retain the correct version while sensitive values
              remain protected server-side.
            </p>

            <div className="mt-8 space-y-5">
              {features.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-emerald-100 p-1 dark:bg-emerald-500/20">
                    <FiCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>

                  <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                    {item}
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