import React from "react";

export default function WorkforceContexts() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          6. Workforce and Authenticated Application Contexts
        </h2>

        {/* Accent Line */}
        <div className="mt-3 mb-6 h-1 w-12 rounded-full bg-teal-600" />

        {/* Intro */}
        <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
          ZoikoTime distinguishes between public website contexts and
          authenticated application contexts.
        </p>

        {/* Highlight Card */}
        <div className="mt-8 rounded-r-lg border-l-[3px] border-teal-600 bg-emerald-50 dark:bg-emerald-950/30 p-5">
          <p className="text-sm font-semibold leading-6 text-teal-700 dark:text-teal-300">
            Within authenticated ZoikoTime product environments, cookies and
            similar technologies are limited to operational, security, account,
            support, diagnostic, preference, and product functionality
            purposes.
          </p>
        </div>

        {/* Closing Paragraph */}
        <p className="mt-8 text-base leading-7 text-slate-700 dark:text-slate-300">
          ZoikoTime does not use cookies to secretly monitor workers. Any
          workforce-related data collection must be governed by the customer
          agreement, Privacy Notice, Data Processing Addendum, worker-facing
          notices, and applicable law.
        </p>
      </div>
    </section>
  );
}