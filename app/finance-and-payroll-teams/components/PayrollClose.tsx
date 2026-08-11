import Link from "next/link";
import React from "react";
import { Check } from "lucide-react";

const checklist = [
  "Population confirmed and required records present",
  "Approvals complete; exceptions resolved or explicitly excluded",
  "Allocation fields complete; post-approval changes reviewed",
  "Export mapping validated — mapping version, record count, destination, and status",
  "Period controls: cut-off time, approval deadline, period lock, authorized unlock, reapproval and re-export consequence",
  "Reconciliation: approved totals vs export totals, excluded records, rejected rows, and subsequent corrections",
];

export default function PayrollClose() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Payroll Close
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl lg:text-5xl">
            Enter payroll close with fewer unknowns
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 dark:text-slate-400">
            Assess pay-period readiness, validate exports, and preserve a
            controlled close — ZoikoTime prepares and transmits approved
            records; the payroll engine calculates compensation.
          </p>
        </div>

        {/* Checklist */}
        <div className="mt-14 space-y-4">
          {checklist.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 ${
                index >= 4 ? "min-h-[88px]" : "min-h-[56px]"
              }`}
            >
              <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-50 dark:bg-teal-900/30">
                <Check
                  size={16}
                  className="text-teal-600 dark:text-teal-400"
                />
              </div>

              <p className="text-sm leading-7 text-gray-700 dark:text-slate-300">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Scope Boundary */}
        <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/30">
          <p className="text-center text-sm leading-7">
            <span className="font-semibold text-teal-700 dark:text-teal-400">
              Scope boundary.
            </span>{" "}
            <span className="text-slate-700 dark:text-slate-300">
              ZoikoTime prepares and transmits approved workforce records. The
              payroll engine calculates compensation and statutory outcomes.
            </span>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/request-enterprise-demo"
            className="rounded-xl bg-teal-600 px-8 py-4 text-center text-base font-semibold text-white shadow-[0px_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700"
          >
            Request Enterprise Demo — bring your payroll calendar and export
            workflow
          </Link>
        </div>
      </div>
    </section>
  );
}
