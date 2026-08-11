"use client";

import { FiShield } from "react-icons/fi";
import Link from "next/link";

export default function TrustSecurity() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-emerald-400">
            Trust, Privacy &amp; Security
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Control cost without watching people
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            The interface defaults to project, phase, team, and
            cost-object views. It never ranks individuals by
            productivity or treats variance as misconduct.
          </p>
        </div>

        {/* Anti-surveillance Card */}
        <div className="mx-auto mt-14 max-w-5xl rounded-2xl bg-slate-800 p-6 shadow-xl sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <FiShield className="h-6 w-6 text-white" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Anti-surveillance Invariant
              </p>

              <p className="mt-3 text-base leading-7 text-white sm:text-lg">
                No screenshots, keystroke content, URL history,
                application-name monitoring, or clipboard collection
                under any tier or configuration.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-500/30 dark:bg-emerald-500/10">
          <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
            <span className="font-semibold text-emerald-700 dark:text-emerald-400">
              Human authority remains controlling.
            </span>{" "}
            ZoikoTime does not replace accounting, payroll, billing,
            ERP, or statutory financial systems, and makes no automatic
            profitability, tax, or compliance judgment. Rates,
            currencies, integrations, and availability are
            registry-controlled and labeled{" "}
            <strong>Needs setup</strong>,{" "}
            <strong>Requires integration</strong>, or{" "}
            <strong>Planned</strong> where applicable.
          </p>

          <Link
            href="/trust-center"
            className="mt-5 inline-flex items-center font-semibold text-teal-700 transition hover:text-teal-800 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            Visit Trust Center →
          </Link>
        </div>
      </div>
    </section>
  );
}
