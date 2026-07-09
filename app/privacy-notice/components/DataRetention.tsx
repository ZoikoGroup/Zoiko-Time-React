import React from "react";

export default function DataRetention() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-0 py-10 bg-white dark:bg-slate-950">
      <div className="w-full max-w-[696px] mx-auto">
        {/* Heading */}
        <h2
          className="
            text-2xl
            font-extrabold
            leading-8
            text-slate-900
            dark:text-white
          "
        >
          14. Data Retention
        </h2>

        {/* Underline */}
        <div className="w-12 h-[3px] bg-teal-600 rounded-full mt-3 mb-8" />

        {/* Paragraph 1 */}
        <p
          className="
            text-base
            font-normal
            leading-7
            text-slate-700
            dark:text-slate-300
            mb-8
          "
        >
          ZoikoTime retains personal information only as long as necessary for
          the purposes described in this Notice, applicable contractual
          commitments, legal obligations, dispute resolution, accounting,
          security, and legitimate business needs. Detailed retention schedules
          for Customer Data are governed by the Data Retention, Deletion and
          Legal Hold Policy and customer configuration.
        </p>

        {/* Paragraph 2 */}
        <p
          className="
            text-base
            font-normal
            leading-7
            text-slate-700
            dark:text-slate-300
          "
        >
          When personal information is no longer required, ZoikoTime uses
          controlled deletion, anonymization, or archiving procedures
          consistent with its Security Measures Schedule and legal obligations.
        </p>
      </div>
    </section>
  );
}