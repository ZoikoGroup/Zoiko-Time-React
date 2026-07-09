import React from "react";

export default function Scope() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-[696px] px-4 sm:px-6 lg:px-0">
        {/* Section Heading */}
        <h2 className="text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          2. Scope
        </h2>

        {/* Underline */}
        <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600 dark:bg-teal-500" />

        {/* Paragraph 1 */}
        <p className="mt-7 text-base leading-7 text-slate-700 dark:text-slate-300">
          This Policy applies to Customer Data, Personal Data, worker-facing
          data, administrator data, audit logs, operational telemetry,
          AI-generated insights, support data, billing records, security logs,
          cookies, backup copies, derived metadata, and records generated in
          connection with the use, administration, support, security,
          compliance, billing, and improvement of ZoikoTime.
        </p>

        {/* Paragraph 2 */}
        <p className="mt-6 text-base leading-7 text-slate-700 dark:text-slate-300">
          This Policy does not transfer ownership of Customer Data to Zoiko Tech
          Inc. Customer Data remains owned or controlled by the Customer or its
          relevant rights holder, subject to the limited rights granted to
          Zoiko Tech Inc. to provide, secure, maintain, support, improve, and
          evidence the Services.
        </p>
      </div>
    </section>
  );
}