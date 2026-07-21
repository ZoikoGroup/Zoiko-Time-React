import React from "react";
import Link from "next/link";

export default function GetStarted() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-slate-950 py-14 lg:py-16">
      {/* Top Gradient */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
          Get Started
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
          If Identity Is Uncertain,
          <br />
          <span className="text-teal-600">
            Everything Else Is at Risk
          </span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-base leading-7 text-slate-600 dark:text-slate-300">
          ZoikoTime gives your organisation the continuous verification
          infrastructure needed to make every second of recorded work
          defensible—for payroll, audit, and legal proceedings.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
  <Link
    href="/request-a-demo"
    className="rounded-lg bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 hover:bg-teal-700 transition inline-flex items-center justify-center"
  >
    Request Demo
  </Link>

  <Link
    href="/security-overview#architecture-table"
    className="rounded-lg border border-teal-600 px-6 py-2.5 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-800 transition inline-flex items-center justify-center"
  >
    View Architecture
  </Link>
</div>
      </div>
    </section>
  );
}