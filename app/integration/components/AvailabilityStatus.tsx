"use client";

import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiAlertTriangle,
  FiMinusCircle,
  FiPauseCircle,
} from "react-icons/fi";

export default function AvailabilityStatus() {
  const checklist = [
    "Sema organization and workspace ownership",
    "ZoikoTime organization access and approved subscriptions",
    "Compatible versions and administrative authority",
    "Security and privacy review, and implementation readiness",
  ];

  const statusVocabulary = [
    {
      label: "Not evaluated",
      icon: FiMinusCircle,
      text: "text-slate-500 dark:text-slate-300",
      bg: "bg-slate-100 dark:bg-slate-800",
    },
    {
      label: "Eligibility review required",
      icon: FiClock,
      text: "text-sky-600 dark:text-sky-400",
      bg: "bg-sky-100 dark:bg-sky-900/30",
    },
    {
      label: "Available",
      icon: FiCheck,
      text: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
    },
    {
      label: "Requires enterprise setup",
      icon: FiAlertTriangle,
      text: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-100 dark:bg-amber-900/30",
    },
    {
      label: "Requires update",
      icon: FiAlertTriangle,
      text: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-100 dark:bg-amber-900/30",
    },
    {
      label: "Limited",
      icon: FiPauseCircle,
      text: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      label: "Unavailable",
      icon: FiMinusCircle,
      text: "text-red-600 dark:text-red-400",
      bg: "bg-red-100 dark:bg-red-900/30",
    },
    {
      label: "Paused",
      icon: FiPauseCircle,
      text: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-100 dark:bg-indigo-900/30",
    },
    {
      label: "Retired",
      icon: FiMinusCircle,
      text: "text-slate-500 dark:text-slate-300",
      bg: "bg-slate-100 dark:bg-slate-800",
    },
  ];

  return (
    <section className="bg-slate-950 text-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 gap-16 xl:grid-cols-2">
          {/* LEFT COLUMN */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              Availability, Licensing &amp; Eligibility
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Nothing Here Implies
              <br className="hidden sm:block" />
              You Already Have It
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              Zoiko Sema and ZoikoTime availability, licensing,
              enterprise setup, implementation, region,
              environment, product version, and support
              requirements vary. Eligibility is evaluated,
              not assumed.
            </p>

            <div className="mt-10 space-y-4">
              {checklist.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15">
                    <FiCheck className="h-4 w-4 text-emerald-400" />
                  </span>

                  <p className="text-base font-semibold text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact-sales"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-base font-bold text-white transition hover:bg-emerald-600"
              >
                Check eligibility with Sales
              </Link>

              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-base font-bold text-white transition hover:bg-white hover:text-slate-900"
              >
                View Pricing
                <FiArrowRight />
              </Link>
            </div>

            <p className="mt-8 max-w-xl text-sm leading-7 text-slate-400">
              Commercial separation: ZoikoTime is not included
              in Zoiko Sema pricing, and Zoiko Sema is not
              included in ZoikoTime pricing. Current inclusion
              comes from approved Pricing and commercial
              sources only.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
              Status vocabulary — text plus icon
            </span>

                        <div className="mt-6 flex flex-wrap gap-3">
              {statusVocabulary.map((status) => {
                const Icon = status.icon;

                return (
                  <div
                    key={status.label}
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold ${status.bg} ${status.text}`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{status.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              {/* Table Header */}
              <div className="grid grid-cols-5 border-b border-white/10">
                <div className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Product
                </div>

                <div className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Environment
                </div>

                <div className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Org Scope
                </div>

                <div className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Contract
                </div>

                <div className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Integration Status
                </div>
              </div>

              {/* Table Rows */}
<div className="divide-y divide-white/10">
  {/* Row 1 */}
  <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-5 md:gap-0">
    <div className="font-semibold text-white">ZoikoTime</div>

    <div className="text-slate-300">Production</div>

    <div className="text-slate-300">Group</div>

    <div className="text-slate-300">Active</div>

    <div>
      <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-400">
        <FiCheck className="mr-2 h-4 w-4" />
        Available
      </span>
    </div>
  </div>

  {/* Row 2 */}
  <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-5 md:gap-0">
    <div className="font-semibold text-white">Zoiko Sema</div>

    <div className="text-slate-300">Production</div>

    <div className="text-slate-300">Group</div>

    <div className="text-slate-300">Active</div>

    <div>
      <span className="inline-flex items-center rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-400">
        <FiAlertTriangle className="mr-2 h-4 w-4" />
        Requires enterprise setup
      </span>
    </div>
  </div>

  {/* Row 3 */}
  <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-5 md:gap-0">
    <div className="font-semibold text-white">ZoikoTime</div>

    <div className="text-slate-300">Sandbox</div>

    <div className="text-slate-300">Northern entity</div>

    <div className="text-slate-300">Trial</div>

    <div>
      <span className="inline-flex items-center rounded-full bg-blue-500/15 px-3 py-1 text-xs font-bold text-blue-400">
        <FiPauseCircle className="mr-2 h-4 w-4" />
        Limited
      </span>
    </div>
  </div>

  {/* Row 4 */}
  <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-5 md:gap-0">
    <div className="font-semibold text-white">Zoiko Sema</div>

    <div className="text-slate-300">Production</div>

    <div className="text-slate-300">Southern entity</div>

    <div className="text-slate-300">Under review</div>

    <div>
      <span className="inline-flex items-center rounded-full bg-sky-500/15 px-3 py-1 text-xs font-bold text-sky-400">
        <FiClock className="mr-2 h-4 w-4" />
        Eligibility review required
      </span>
    </div>
  </div>

  {/* Row 5 */}
  <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-5 md:gap-0">
    <div className="font-semibold text-white">Both</div>

    <div className="text-slate-300">Production</div>

    <div className="text-slate-300">APAC entity</div>

    <div className="text-slate-300">None</div>

    <div>
      <span className="inline-flex items-center rounded-full bg-slate-700 px-3 py-1 text-xs font-bold text-slate-300">
        <FiMinusCircle className="mr-2 h-4 w-4" />
        Not evaluated
      </span>
    </div>
  </div>
</div>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Eligibility registry, synthetic. Each row carries an
              owner, evidence reference, and last-reviewed date.
            </p>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Where a prerequisite is missing we explain which one,
              and route to Product Overview, Documentation, Trust,
              Pricing, Sales, or Support. There are no coming-soon
              promises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}