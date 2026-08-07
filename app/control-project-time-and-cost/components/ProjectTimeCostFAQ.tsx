"use client";

import { FiPlus } from "react-icons/fi";

const faqs = [
  "How does ZoikoTime help control project cost?",
  "Does ZoikoTime calculate payroll or invoices?",
  "What's the difference between project cost and billing value?",
  "Can rates change over time?",
  "How are unapproved or disputed hours treated?",
  "Can workers see project cost rates?",
  "How are multi-currency projects handled?",
  "Does project variance measure employee productivity?",
  "What happens after a period or project is closed?",
  "How long does implementation take?",
];

export default function ProjectTimeCostFAQ() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-emerald-400">
            Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Project time &amp; cost — answered
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          {faqs.map((question) => (
            <div
              key={question}
              className="rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-6 text-base font-semibold text-slate-800 dark:text-white">
                  {question}
                </span>

                <FiPlus className="h-5 w-5 flex-shrink-0 text-teal-600 dark:text-emerald-400" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}