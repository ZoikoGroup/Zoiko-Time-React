import React from "react";
import { Bell, History } from "lucide-react";

export default function ServiceStatusHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 px-4 sm:px-6 py-16 md:py-20 lg:py-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-[-170px] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl text-center">
        {/* Small Heading */}
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-600">
          ZoikoTime Status
        </p>

        {/* Main Heading */}
        <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-800 dark:text-white md:text-5xl">
          ZoikoTime{" "}
          <span className="text-teal-600">
            Service Status
          </span>
        </h1>

        {/* Status Badge */}
        <div className="mx-auto mt-8 inline-flex items-center gap-4 rounded-full border border-emerald-100 dark:border-emerald-900 bg-white dark:bg-slate-900 px-8 py-4 shadow-lg">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-30 animate-ping"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </span>

          <span className="text-base font-semibold text-slate-800 dark:text-white">
            All Systems Operational
          </span>
        </div>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-500 dark:text-slate-400">
          ZoikoTime is currently operating normally across monitored services.
          View component-level status, maintenance notices, recent service
          history, and support routes below.
        </p>

        {/* Last Updated */}
        <p className="mt-10 text-sm text-slate-500 dark:text-slate-400">
          Last updated: June 15, 2026, 09:00 AM UTC
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-teal-600/30 transition-all duration-300 hover:bg-teal-700">
            <Bell className="h-5 w-5" />
            Subscribe to Updates
          </button>

          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-8 py-3 text-base font-semibold text-slate-800 dark:text-white transition-all duration-300 hover:border-teal-600 hover:text-teal-600 dark:hover:text-teal-400">
            <History className="h-5 w-5" />
            View Incident History
          </button>
        </div>
      </div>
    </section>
  );
}