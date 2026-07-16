import React from "react";

const faqs = [
  "Does ZoikoTime rank employees?",
  "Where does the data come from?",
  "Can we export reports to payroll or BI tools?",
  "Can different teams see different reports?",
];

export default function Responsible() {
  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-[1180px] px-6 py-16 lg:px-0">
        {/* Header */}
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Responsible Analytics
          </div>

          <h2 className="mt-3 text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            Analytics built for governance, not
            <br className="hidden sm:block" />
            surveillance
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-base leading-7 text-gray-500 dark:text-gray-400">
            ZoikoTime supports human review — it does not rank employees or
            make automatic judgments.
          </p>
        </div>

        {/* Notice */}
        <div className="mx-auto mt-[92px] flex max-w-[760px] gap-3 rounded-xl border border-orange-200 bg-yellow-50 p-4 dark:border-yellow-900/50 dark:bg-yellow-950/30">
          <div className="mt-0.5 shrink-0 text-yellow-800 dark:text-yellow-400">
            ⚠
          </div>

          <p className="text-sm leading-5 text-yellow-800 dark:text-yellow-300">
            ZoikoTime reporting avoids employee-ranking, surveillance,
            automatic performance judgment, payroll processing, and legal
            advice. It is a decision-support layer that keeps a human in the
            loop. Learn more about{" "}
            <span className="font-semibold text-teal-700 dark:text-teal-400">
              Responsible AI
            </span>{" "}
            and{" "}
            <span className="font-semibold text-teal-700 dark:text-teal-400">
              Payroll &amp; Timesheet Integrity
            </span>
            .
          </p>
        </div>

        {/* FAQs */}
        <div className="mt-[42px]">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
              Questions
            </div>

            <h2 className="mt-3 text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
              Reporting &amp; Analytics FAQs
            </h2>
          </div>

          <div className="mt-10 space-y-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-b border-transparent py-0 text-base leading-6 text-gray-700 dark:text-gray-300"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700 dark:bg-gray-400" />
                <span>{faq}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}