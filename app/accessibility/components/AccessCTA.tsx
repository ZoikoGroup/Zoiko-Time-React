import React from "react";
import Link from "next/link";

export default function AccessCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50 px-5 py-16 text-slate-900 transition-colors dark:from-teal-950/40 dark:to-emerald-950/30 dark:text-white sm:px-8 md:px-12 lg:px-20">
      {/* Top Accent Line */}
      <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

      <div className="mx-auto flex max-w-[1052px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        {/* Content */}
        <div className="max-w-[700px]">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Help Us Improve Accessibility Across
            <br className="hidden sm:block" />
            ZoikoTime
          </h2>

          <p className="mt-8 max-w-[700px] text-base leading-7 text-slate-500 dark:text-white/50">
            Accessibility is an ongoing product-quality commitment. If you
            encounter a barrier, please report it through the form above or
            contact the ZoikoTime team. Enterprise customers should contact
            Sales for procurement and implementation accessibility support.
          </p>
        </div>

        {/* Actions */}
        <div className="flex w-full flex-col items-start lg:w-auto lg:items-end">
          <Link
    href="/accessibility#report-an-issue"
    className="flex h-12 w-full items-center justify-center rounded-lg bg-teal-600 px-7 text-base font-semibold text-white shadow-[0px_4px_16px_0px_rgba(0,157,140,0.30)] transition hover:bg-teal-700 sm:w-64"
  >
    Report an Accessibility Issue
  </Link>

  <Link
    href="/contact-sales"
    className="flex h-12 w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-6 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10 sm:w-40"
  >
    Contact Sales
  </Link>

          <p className="mt-7 text-left text-xs leading-5 text-slate-400 lg:text-right">
            For enterprise accessibility documentation,
            <br />
            contact ZoikoTime Sales.
          </p>
        </div>
      </div>
    </section>
  );
}