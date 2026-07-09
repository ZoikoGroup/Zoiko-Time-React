import React from "react";

export default function SLAHero() {
  return (
    <section className="mx-auto max-w-[696px] border-b-2 border-slate-200 dark:border-slate-700 pb-10 md:pb-12">
      <div className="flex flex-col items-center px-4 text-center sm:px-6 lg:px-0">

        {/* Title */}
        <h1 className="text-3xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-4xl">
          Service Level Agreement
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-[696px] text-base font-normal leading-7 text-slate-500 dark:text-slate-400">
          This SLA defines ZoikoTime&apos;s availability commitments, support
          response targets, disaster recovery commitments, incident notification
          obligations, service-credit remedies, and operational boundaries for
          paid production subscriptions.
        </p>

        {/* Effective Date */}
        <div className="mt-8 inline-flex items-center justify-center rounded-full border border-teal-600/20 bg-emerald-50 px-5 py-2 dark:bg-emerald-900/20">
          <span className="text-xs font-bold leading-5 text-teal-700 dark:text-teal-400">
            Effective May 1, 2026
          </span>
        </div>

      </div>
    </section>
  );
}