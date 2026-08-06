"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  "What is time tracking software for finance and payroll teams?",
  "Does ZoikoTime replace payroll software?",
  "How can ZoikoTime help improve payroll accuracy?",
  "How are missing or conflicting time records handled?",
  "Can workers review and correct their records?",
  "Does AI decide what a worker should be paid?",
  "What does ZoikoTime record and what does it never collect?",
  "Can ZoikoTime support multiple pay groups, worker types, and locations?",
  "How does ZoikoTime integrate with payroll and finance systems?",
  "Can ZoikoTime support project costing and billing inputs?",
  "How long does implementation take?",
  "How much does ZoikoTime cost?",
];

export default function QuestionsAnswered() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-16 transition-colors duration-300 dark:bg-slate-950 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600 dark:text-teal-400">
            Questions Answered
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-800 dark:text-white md:text-4xl">
            Finance and payroll questions answered
          </h2>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-12 max-w-4xl space-y-5">
          {faqs.map((question, index) => {
            const open = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0px_6px_18px_rgba(14,31,61,0.05)] transition-all duration-300 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none"
              >
                <button
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-6 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span className="text-base font-semibold text-slate-800 dark:text-slate-100">
                    {question}
                  </span>

                  {open ? (
                    <Minus className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  ) : (
                    <Plus className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}