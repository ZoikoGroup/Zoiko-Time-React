"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Does ZoikoTime use AI to make decisions about workers?",
    answer:
      "No. ZoikoTime's AI-assisted capabilities are designed to support human review rather than automatically make employment, disciplinary, or other high-impact decisions about workers. Authorized users remain responsible for reviewing context and making appropriate decisions.",
  },
  {
    question: "How does ZoikoTime keep AI explainable?",
    answer:
      "ZoikoTime is designed to provide context around AI-assisted signals so authorized users can understand why something may have been identified for review. AI signals should be treated as inputs for human review rather than conclusions on their own.",
  },
  {
    question: "Can we control who sees AI signals?",
    answer:
      "Yes. Access to workforce records, analytics, evidence, and AI-assisted signals can be controlled through role-based permissions and organizational access policies. Customers are responsible for configuring access according to their internal governance requirements.",
  },
  {
    question: "How does this protect worker trust?",
    answer:
      "Worker trust is supported through transparency, defined policies, human oversight, permission boundaries, and clear review processes. ZoikoTime is designed to avoid treating AI-generated signals as automatic judgments about worker performance or behavior.",
  },
];

export default function ResponsibleAIFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 md:py-20">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6">

        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white md:text-4xl">
            Responsible AI FAQs
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-10 max-w-[900px] overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={
                  index !== faqs.length - 1
                    ? "border-b border-slate-200 dark:border-slate-800"
                    : ""
                }
              >

                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xl font-bold transition-all duration-200 ${
                      isOpen
                        ? "rotate-45 bg-teal-600 text-white"
                        : "text-teal-600 dark:text-teal-400"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600 dark:border-slate-800 dark:text-slate-300">
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