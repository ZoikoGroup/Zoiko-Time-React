import React from "react";

export default function DataRetentionHero() {
  return (
    <section className="border-b-2 border-slate-200 dark:border-slate-700 pb-10">
      <div className="mx-auto max-w-[696px] px-4 sm:px-6 lg:px-0">
        {/* Title */}
        <h1 className="text-center font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold leading-tight sm:leading-10 text-slate-900 dark:text-white">
          Data Retention, Deletion and Legal
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Hold Policy
        </h1>

        {/* Description */}
        <p className="mt-6 text-center text-base leading-7 text-slate-500 dark:text-slate-400 font-['Plus_Jakarta_Sans'] max-w-[696px] mx-auto">
          This Policy explains how Zoiko Tech Inc. retains, stores, deletes,
          exports, archives, suspends deletion of, and permanently disposes of
          data processed through ZoikoTime.
        </p>

        {/* Badge */}
        <div className="mt-8 flex justify-center">
          <span className="inline-flex items-center rounded-full border border-teal-600/20 bg-emerald-50 dark:bg-teal-900/20 px-5 py-2 text-xs font-bold text-teal-700 dark:text-teal-400 font-['Plus_Jakarta_Sans']">
            Effective May 1, 2026
          </span>
        </div>
      </div>
    </section>
  );
}