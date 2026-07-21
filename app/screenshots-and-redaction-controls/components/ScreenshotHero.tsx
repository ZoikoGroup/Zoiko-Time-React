// components/ScreenshotHero.tsx

import React from "react";
import Link from "next/link";

export default function ScreenshotHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-400/10" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-16 text-center md:px-8 lg:px-10 lg:py-20">

        {/* Label */}
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
          Screenshots &amp; Redaction Controls
        </p>

        {/* Heading */}
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-800 dark:text-white sm:text-5xl lg:text-6xl">
          Screenshot context{" "}
          <span className="text-teal-600 dark:text-teal-400">
            without
            <br className="hidden sm:block" />
            surveillance
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
          ZoikoTime helps organizations use screenshots responsibly where
          enabled—with policy controls, redaction safeguards, role-based
          access, retention governance, and worker transparency.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">

          {/* Get a Demo */}
          <Link
            href="/request-a-demo"
            className="w-full rounded-lg bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700 sm:w-auto inline-flex items-center justify-center"
          >
            Get a Demo
          </Link>

          {/* View Time & Activity Verification */}
          <Link
            href="/time-and-activity-verification"
            className="w-full rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-slate-800 transition hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 sm:w-auto inline-flex items-center justify-center"
          >
            View Time &amp; Activity Verification
          </Link>

        </div>

        {/* Footer Note */}
        <p className="mt-8 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">
          Screenshots should support review—not covert monitoring or automatic
          judgment.
        </p>

      </div>
    </section>
  );
}