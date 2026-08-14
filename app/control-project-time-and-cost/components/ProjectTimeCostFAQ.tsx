"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How does ZoikoTime help control project cost?",
    answer: "ZoikoTime captures work-session activity data in real time, classifies it to projects using deterministic policies, and identifies cost drifts and budget variances early, allowing management to take action before budgets are exceeded."
  },
  {
    question: "Does ZoikoTime calculate payroll or invoices?",
    answer: "ZoikoTime provides the verified evidence of work, time, and rate allocations. It does not replace billing or payroll systems, but generates structured, clean outputs that feed directly into them."
  },
  {
    question: "What's the difference between project cost and billing value?",
    answer: "Project cost represents the internal labor rate multiplied by verified hours, whereas billing value is the rate contracted with the client. ZoikoTime tracks both dimensions concurrently to monitor margins."
  },
  {
    question: "Can rates change over time?",
    answer: "Yes, rate tables are versioned and date-effective. ZoikoTime applies active rates based on the exact timestamp of the work session, ensuring historical audit records remain unchanged."
  },
  {
    question: "How are unapproved or disputed hours treated?",
    answer: "Disputed or unapproved hours are flagged in the system and withheld from export/billing runs until resolved. The original event logs and reviewer history are preserved in the Evidence Ledger."
  },
  {
    question: "Can workers see project cost rates?",
    answer: "Access to internal rates is governed by role-based permissions. Workers typically see their own recorded hours, but internal cost rates are restricted to project managers and administrators."
  },
  {
    question: "How are multi-currency projects handled?",
    answer: "ZoikoTime records and locks transactions in both the transaction currency and the organization's base reporting currency at the exchange rate active on the day of the work session."
  },
  {
    question: "Does project variance measure employee productivity?",
    answer: "No, project variance measures the budget consumption versus progress. It is an operational cost-control metric, not a psychological or activity speed score of the worker."
  },
  {
    question: "What happens after a period or project is closed?",
    answer: "Once closed, the records are cryptographically locked in the Evidence Ledger. No further edits or retrospective adjustments can be made, preventing silent ledger tampering."
  },
  {
    question: "How long does implementation take?",
    answer: "Standard setup and policy configuration take 2 to 4 weeks. Enterprise integrations with core ERPs and billing platforms can be staged over a 6 to 8-week pilot."
  }
];

export default function ProjectTimeCostFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-6 text-base font-semibold text-slate-800 dark:text-white">
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <FiMinus className="h-5 w-5 flex-shrink-0 text-teal-600 dark:text-emerald-400" />
                  ) : (
                    <FiPlus className="h-5 w-5 flex-shrink-0 text-teal-600 dark:text-emerald-400" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/50 mt-1 leading-relaxed">
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