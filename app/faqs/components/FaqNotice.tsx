import React from "react";

export default function FaqNotice() {
  return (
    <section className="w-full bg-white py-8 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-lg border border-slate-200 bg-gray-50 px-5 py-4 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
            ZoikoTime FAQs provide general product, support, and commercial
            information. They do not replace your organization&apos;s policies,
            employment terms, HR procedures, payroll decisions, legal
            obligations, security requirements, or compliance obligations.
          </p>
        </div>
      </div>
    </section>
  );
}