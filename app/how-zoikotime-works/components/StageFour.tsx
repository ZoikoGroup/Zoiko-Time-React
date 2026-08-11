import React from "react";
import Link from "next/link";

export default function StageFour() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6">

        {/* Main Content */}
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start">

          {/* Left Content */}
          <div className="flex-1">

            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1.5 shadow-[0px_6px_14px_rgba(16,162,141,0.16)] dark:bg-teal-500/10">
              <div className="flex h-5 w-5 items-center justify-center rounded-[10px] bg-teal-600 text-xs font-bold text-white">
                4
              </div>

              <span className="text-xs font-bold text-teal-700 dark:text-teal-300">
                Record authorized decisions without hiding context or
                responsibility.
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white lg:text-4xl">
              Stage 4
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 dark:text-slate-300">
              Every material decision carries actor, role, authority, reason,
              timestamp, effective period, before/after values, evidence,
              downstream instruction, and an audit reference.
            </p>

            {/* Label */}
            <h3 className="mt-8 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400">
              Permitted decisions
            </h3>

            {/* Decision Pills */}
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "Approve",
                "Approve w/ modification",
                "Request information",
                "Reassign",
                "Escalate",
                "Reject",
                "Return for correction",
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
                href="/time-sheet-approvals"
                className="inline-flex min-h-11 items-center justify-center rounded-[10px] border border-gray-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 transition hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                Explore Timesheets &amp; Approvals
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_2px_6px_rgba(14,31,61,0.05),0px_20px_44px_rgba(14,31,61,0.13)] dark:border-slate-700 dark:bg-slate-900">

            {/* Card Header */}
            <div className="flex items-center justify-between bg-slate-800 px-4 py-3">
              <h3 className="text-xs font-semibold text-white">
                Approval inbox &amp; action review
              </h3>

              <div className="flex items-center gap-2 rounded-full bg-white/20 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-white"></span>

                <span className="text-xs font-bold text-white">
                  Synthetic data
                </span>
              </div>
            </div>

            <div className="p-5">

                              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
                        Field
                      </th>
                      <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
                        Value
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                        Actor · role
                      </td>
                      <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                        J. Rivera · Reviewer
                      </td>
                    </tr>

                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                        Decision
                      </td>
                      <td className="px-3 py-3">
                        <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-teal-700 dark:bg-emerald-900/30 dark:text-teal-300">
                          Approve w/ modification
                        </span>
                      </td>
                    </tr>

                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                        Reason
                      </td>
                      <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                        Verified schedule; corrected exit
                      </td>
                    </tr>

                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                        Before → After
                      </td>
                      <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                        —:— → 17:20
                      </td>
                    </tr>

                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                        Downstream
                      </td>
                      <td className="px-3 py-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs text-slate-800 dark:text-slate-200">
                            Authorizes payroll input ·
                          </span>

                          <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">
                            not execution
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                        Audit reference
                      </td>
                      <td className="px-3 py-3 text-xs text-slate-800 dark:text-slate-200">
                        EV-2291
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Footer Note */}
              <p className="mt-5 text-xs leading-5 text-gray-500 dark:text-slate-400">
                Separation of duties: request, review, approval, configuration,
                export, and execution may require different roles.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="w-full max-w-4xl rounded-xl border border-emerald-100 bg-emerald-50 px-6 py-5 text-center dark:border-emerald-900 dark:bg-emerald-900/20">
          <p className="text-sm leading-6">
            <span className="font-bold text-teal-700 dark:text-teal-300">
              Approval is not execution.
            </span>{" "}
            <span className="text-slate-800 dark:text-slate-200">
              Approval changes record state or authorizes a downstream action —
              it does not guarantee payroll, billing, legal, or compliance
              correctness.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}