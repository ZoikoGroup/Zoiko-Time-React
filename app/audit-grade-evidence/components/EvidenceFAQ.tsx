"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What does 'audit-grade' mean for ZoikoTime?",
    answer:
      "Audit-grade refers to features designed to preserve workforce evidence with timestamps, metadata, review history, and governance controls that help support organizational audits and compliance processes.",
  },
  {
    question:
      "Does ZoikoTime guarantee records will be admissible in court?",
    answer:
      "No. ZoikoTime provides evidence preservation and governance capabilities but does not provide legal advice or guarantee legal admissibility of records.",
  },
  {
    question: "Who can access evidence packages?",
    answer:
      "Access is permission-based. Organizations can restrict evidence packages to authorized users according to their security policies and administrative controls.",
  },
  {
    question: "Does ZoikoTime support legal hold?",
    answer:
      "Yes. Depending on deployment and configuration, ZoikoTime can support legal hold workflows alongside retention and governance policies.",
  },
  {
    question: "Can AI-assisted signals be used as evidence?",
    answer:
      "AI-assisted signals can provide additional context, but organizations should validate them through human review and established governance processes before relying on them for important decisions.",
  },
];

const EvidenceFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-100 dark:bg-slate-950 py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
            Common Questions
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Box */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`${
                index !== faqs.length - 1
                  ? "border-b border-slate-200 dark:border-slate-800"
                  : ""
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-base font-semibold text-slate-900 dark:text-white pr-6">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-teal-600 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-teal-600 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvidenceFAQ;