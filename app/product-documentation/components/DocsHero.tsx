
import React from "react";
import Link from "next/link";
export default function DocsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 px-6 py-16 transition-colors dark:from-slate-950 dark:to-slate-900 sm:px-8 lg:px-12">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Badge */}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
          Product Documentation
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          Product guidance for setup,
          <br className="hidden sm:block" />
          daily use, governance, and{" "}
          <span className="text-teal-600">support</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
          Find structured ZoikoTime documentation for administrators,
          workers, managers, HR, legal, finance, operations, IT, and
          enterprise reviewers.
        </p>

        {/* Buttons */}
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
  <Link
    href="/contact-sales"
    className="rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-teal-700"
  >
    Contact Sales
  </Link>

  <Link
    href="/request-a-demo"
    className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
  >
    Get a Demo
  </Link>
</div>


        {/* Search */}
        <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Search documentation by feature, role, or task"
            className="flex-1 rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-800 placeholder:text-slate-500 outline-none transition focus:border-teal-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
          />

          <button className="rounded-xl bg-teal-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-teal-700">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}