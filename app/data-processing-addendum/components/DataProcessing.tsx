import Link from "next/link";
import React from "react";

export default function DataProcessing() {
  const badges = [
    "GDPR Article 28–Aligned",
    "SCC-Ready Cross-Border Transfers",
    "Sub-Processor Transparency",
    "Audit-Ready Controls",
    "Enterprise Privacy Architecture",
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 dark:bg-slate-950">
      {/* Background Glow */}
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-5xl">
          Data Processing Framework Built for{" "}
          <span className="text-teal-500">
            Compliance, Transparency, and Global Operations
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-4xl text-base leading-7 text-slate-600 dark:text-slate-300">
          ZoikoTime provides a structured data processing model aligned with
          GDPR, CCPA, and global data protection frameworks — designed for
          enterprise contracting and regulatory clarity.
        </p>

        {/* Highlight Box */}
        <div className="mx-auto mt-10 max-w-5xl rounded-xl border border-teal-200 bg-teal-50 px-6 py-5 dark:border-teal-800 dark:bg-teal-950/30">
          <p className="text-sm font-semibold text-teal-700 dark:text-teal-400">
            ZoikoTime acts strictly as a data processor, executing
            customer-defined policies within a governed and compliant framework.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-md bg-teal-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-teal-600/30 transition hover:bg-teal-700">
            View Data Processing Agreement
          </button>

          <Link
          href="contact"
           className="rounded-md border border-teal-600 px-8 py-3 text-sm font-medium text-teal-600 transition hover:bg-teal-50 dark:hover:bg-slate-900">
            Contact Privacy Team
          </Link>
        </div>

        {/* Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {badges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 rounded-full border border-teal-500 bg-white px-4 py-2 text-xs font-semibold text-slate-900 dark:bg-slate-900 dark:text-white"
            >
              <span className="h-2 w-2 rounded-sm bg-teal-500"></span>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}