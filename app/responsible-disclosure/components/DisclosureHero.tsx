"use client";

import Link from "next/link";

const policyRows = [
  {
    label: "Scope Status",
    value: "Needs Verification",
    type: "warning",
  },
  {
    label: "Rules Status",
    value: "Needs Verification",
    type: "warning",
  },
  {
    label: "Protected Intake Status",
    value: "Active",
    type: "success",
  },
  {
    label: "Policy Version",
    value: "Pending Approval",
    type: "text",
  },
  {
    label: "Last Reviewed",
    value: "—",
    type: "text",
  },
];

export default function DisclosureHero() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-[146px] dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_463px] lg:gap-12">
          {/* Left Content */}
          <div className="pt-0 lg:pt-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-teal-600" />

              <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
                Responsible Disclosure
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-3 max-w-[500px] text-3xl font-semibold leading-tight text-slate-800 sm:text-4xl sm:leading-[1.1] dark:text-white">
              Report a potential
              <br className="hidden sm:block" /> ZoikoTime security
              <br className="hidden sm:block" /> vulnerability.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[515px] text-sm leading-6 text-gray-500 sm:text-base dark:text-slate-400">
              Review the current scope and rules before testing anything, then
              send potential vulnerability details through our protected
              security route.
            </p>

            {/* CTA */}
            <Link
              href="#report"
              className="
                mt-8
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                rounded-full
                bg-teal-600
                px-6
                text-center
                text-sm
                font-semibold
                leading-6
                text-white
                transition
                hover:bg-teal-700
                focus:outline-none
                focus:ring-2
                focus:ring-teal-500
                focus:ring-offset-2
                dark:focus:ring-offset-slate-950
                sm:w-72
              "
            >
              Report a Potential Vulnerability
            </Link>
          </div>

          {/* Policy Proof Card */}
          <div
            className="
              w-full
              rounded-3xl
              border
              border-slate-200
              bg-gray-50
              p-5
              sm:p-6
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <h2 className="text-xs font-bold uppercase leading-5 tracking-wide text-slate-800 dark:text-slate-100">
              Policy Proof — Synthetic Example
            </h2>

            <div className="mt-5">
              {policyRows.map((row) => (
                <div
                  key={row.label}
                  className="
                    flex
                    min-h-12
                    items-center
                    justify-between
                    gap-4
                    border-t
                    border-gray-100
                    py-3
                    dark:border-slate-800
                  "
                >
                  <span className="text-xs leading-5 text-gray-500 dark:text-slate-400">
                    {row.label}
                  </span>

                  {row.type === "warning" && (
                    <span
                      className="
                        shrink-0
                        rounded-full
                        bg-orange-100
                        px-2.5
                        py-1
                        text-[11px]
                        font-semibold
                        leading-4
                        text-yellow-700
                        dark:bg-orange-950/50
                        dark:text-orange-300
                      "
                    >
                      {row.value}
                    </span>
                  )}

                  {row.type === "success" && (
                    <span
                      className="
                        shrink-0
                        rounded-full
                        bg-emerald-50
                        px-2.5
                        py-1
                        text-[11px]
                        font-semibold
                        leading-4
                        text-teal-700
                        dark:bg-emerald-950/50
                        dark:text-emerald-300
                      "
                    >
                      {row.value}
                    </span>
                  )}

                  {row.type === "text" && (
                    <span className="text-right text-xs font-semibold leading-5 text-slate-800 dark:text-slate-200">
                      {row.value}
                    </span>
                  )}
                </div>
              ))}

              {/* Disclaimer */}
              <div className="border-t border-slate-200 pt-4 dark:border-slate-700">
                <p className="text-xs leading-5 text-gray-500 dark:text-slate-400">
                  This page is an approval candidate. Page access, this proof
                  panel, or a submitted report never creates testing permission
                  on their own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}