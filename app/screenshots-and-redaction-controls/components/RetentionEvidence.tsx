// components/RetentionEvidence.tsx

import React from "react";
import Link from "next/link";

const retentionItems = [
  {
    title: "Retention rules",
    description:
      "Apply storage durations based on plan, configuration, and valid business, legal, or contractual reasons.",
  },
  {
    title: "Legal hold support",
    description:
      "Preserve relevant screenshots when disputes, investigations, audits, or litigation require it.",
  },
  {
    title: "Evidence packaging",
    description:
      "Include screenshots in evidence packages where relevant—respecting redaction and access rules.",
  },
];

export default function RetentionEvidence() {
  return (
    <section className="bg-white py-16 md:py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Retention &amp; Evidence
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Retention, legal hold, and evidence use
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Screenshots are retained, preserved, or deleted according to policy,
            legal hold, and customer configuration.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {retentionItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Related Link */}
<div className="mt-12 text-center">
  <p className="text-base text-gray-500 dark:text-gray-400">
    Related:{" "}
    <Link
      href="/audit-grade-evidence#evidence-layer"
      className="font-semibold text-teal-700 transition-colors hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
    >
      View Audit-Grade Evidence →
    </Link>
  
          </p>
        </div>
      </div>
    </section>
  );
}