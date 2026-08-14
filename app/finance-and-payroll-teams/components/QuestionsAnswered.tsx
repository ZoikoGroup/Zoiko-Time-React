"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is time tracking software for finance and payroll teams?",
    answer: "It is an enterprise-grade platform that validates work hours and activity metadata, checks compliance with labor standards, and formats clean, structured records to drive accurate payroll runs and cost reports."
  },
  {
    question: "Does ZoikoTime replace payroll software?",
    answer: "No, ZoikoTime is the verification and evidence engine. It integrates directly with payroll systems (e.g., ADP, Workday, SAP) to feed them pre-audited, accurate work hours and allocation rates."
  },
  {
    question: "How can ZoikoTime help improve payroll accuracy?",
    answer: "By replacing manual timesheets with automated proof-of-work validation, enforcing break and shift duration policies, and highlighting anomalies before data reaches your payroll system."
  },
  {
    question: "How are missing or conflicting time records handled?",
    answer: "The system flags records with incomplete data, gaps, or conflicting inputs. They are held in review status until an authorized administrator resolves the issue. All versions are recorded in the Evidence Ledger."
  },
  {
    question: "Can workers review and correct their records?",
    answer: "Yes, worker transparency is a core invariant. Workers can view their validated logs and request corrections for gaps or classification errors, which are routed to managers for approval."
  },
  {
    question: "Does AI decide what a worker should be paid?",
    answer: "Absolutely not. Payroll calculations are governed strictly by deterministic business rules and active employment policy tables. AI assists only with explaining conditions and flags."
  },
  {
    question: "What does ZoikoTime record and what does it never collect?",
    answer: "ZoikoTime records active session timestamps, duration, and project/activity classifications. It strictly never collects screen recordings, keystroke characters, browser history, or clipboard contents."
  },
  {
    question: "Can ZoikoTime support multiple pay groups, worker types, and locations?",
    answer: "Yes. ZoikoTime models complex organizational structures, allowing distinct policy rules for employees, contractors, salary levels, and geographic jurisdictions."
  },
  {
    question: "How does ZoikoTime integrate with payroll and finance systems?",
    answer: "Through automated API connectors, pre-formatted CSV exports, or custom middleware integrations mapped to your specific ledger codes and database schemas."
  },
  {
    question: "Can ZoikoTime support project costing and billing inputs?",
    answer: "Yes. Work sessions can be dynamically classified to project codes, allowing concurrent tracking of internal cost rates and external billing values."
  },
  {
    question: "How long does implementation take?",
    answer: "Standard setup and policy configuration takes 2 to 4 weeks. Multi-system enterprise integrations are typically staged over a 6 to 8-week structured rollout."
  },
  {
    question: "How much does ZoikoTime cost?",
    answer: "Pricing scales based on seat volume and required features, with standard plans starting at a flat rate per seat and enterprise custom solutions designed around deployment needs."
  }
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
          {faqs.map((faq, index) => {
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
                    {faq.question}
                  </span>

                  {open ? (
                    <Minus className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  ) : (
                    <Plus className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  )}
                </button>
                {open && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/50 mt-1 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}