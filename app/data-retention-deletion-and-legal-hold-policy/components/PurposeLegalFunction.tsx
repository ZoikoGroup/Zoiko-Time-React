import React from "react";

export default function PurposeLegalFunction() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-[696px] px-4 sm:px-6 lg:px-0">

        {/* Section Heading */}
        <h2 className="text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          1. Purpose and Legal Function
        </h2>

        {/* Underline */}
        <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600 dark:bg-teal-500" />

        {/* Paragraph 1 */}
        <p className="mt-7 text-base leading-7 text-slate-700 dark:text-slate-300">
          This Data Retention, Deletion and Legal Hold Policy explains how
          Zoiko Tech Inc. retains, stores, deletes, exports, archives,
          suspends deletion of, and permanently disposes of data processed
          through ZoikoTime. The policy is designed to support
          enterprise-grade workforce assurance, regulatory defensibility,
          customer control, privacy-by-design, security, auditability, and
          operational reliability.
        </p>

        {/* Paragraph 2 */}
        <p className="mt-6 text-base leading-7 text-slate-700 dark:text-slate-300">
          This Policy should be read together with the ZoikoTime Terms of
          Service, Data Processing Addendum, Privacy Notice, Worker
          Transparency Notice, Security Measures Schedule, Subprocessor
          Policy, Cookie Notice, Acceptable Use Policy, AI and Automated
          Insights Policy, and Service Level Agreement.
        </p>

      </div>
    </section>
  );
}