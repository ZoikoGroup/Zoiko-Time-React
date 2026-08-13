"use client";

import { Plus } from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    question:
      "What types of workforce records can be governed by retention policies?",
    answer:
      "Retention policies can apply to workforce records such as time entries, attendance records, approvals, corrections, exceptions, activity records, evidence packages, audit history, exports, and other records configured within the ZoikoTime environment. The exact records and retention periods depend on the organization's configuration, plan, and applicable obligations.",
  },
  {
    question: "How does legal hold work in ZoikoTime?",
    answer:
      "Legal hold is used to preserve relevant workforce records when a dispute, investigation, audit, or litigation requires records to be retained beyond their normal retention period. Authorized users can apply a hold to relevant records so they are preserved while the hold remains active.",
  },
  {
    question:
      "Does ZoikoTime guarantee compliance with legal retention requirements?",
    answer:
      "No. ZoikoTime provides retention and governance controls that can help organizations manage records, but it does not guarantee legal or regulatory compliance. Organizations are responsible for determining the retention requirements that apply to them and configuring the platform appropriately.",
  },
  {
    question:
      "Who can configure retention policies and apply legal holds?",
    answer:
      "Retention policies and legal holds should be managed by authorized users with the appropriate administrative, legal, compliance, or governance permissions. Access depends on the organization's role-based access configuration and internal policies.",
  },
  {
    question:
      "What happens to records when legal hold is released?",
    answer:
      "When a legal hold is released, the affected records can return to the applicable retention lifecycle. Records are not necessarily deleted immediately. Their treatment depends on the configured retention policy, applicable obligations, and the organization's governance settings.",
  },
];

export default function RetentionFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-5 py-16 dark:bg-slate-900 md:px-8 md:py-20">
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={
                  index !== faqs.length - 1
                    ? "border-b border-slate-200 dark:border-slate-700"
                    : ""
                }
              >

                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                >
                  <span className="pr-6 text-base font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                      isOpen
                        ? "rotate-45 bg-teal-600 text-white"
                        : "text-teal-600 dark:text-teal-400"
                    }`}
                  >
                    <Plus size={20} strokeWidth={2} />
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600 dark:border-slate-700 dark:text-slate-300">
                      {faq.answer}
                    </p>
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