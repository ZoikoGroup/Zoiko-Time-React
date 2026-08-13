"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How is ZoikoTime documentation organized?",
    answer:
      "ZoikoTime documentation is organized by audience, task, product area, and workflow. Resources can include getting-started guidance, administrator documentation, worker guidance, product documentation, integration information, FAQs, and governance or security materials.",
  },
  {
    question: "Where should a new administrator start?",
    answer:
      "A new administrator should start with the Getting Started and Administrator documentation. These resources explain the initial setup, configuration, permissions, policies, workflows, and key administrative tasks needed to manage ZoikoTime.",
  },
  {
    question: "Where can workers learn how ZoikoTime works?",
    answer:
      "Workers can use the Worker Guide and Getting Started resources to understand how ZoikoTime works, including relevant time, attendance, activity, correction, approval, and transparency workflows.",
  },
  {
    question:
      "Where do enterprise reviewers find governance and security materials?",
    answer:
      "Enterprise reviewers can use the security, privacy, governance, compliance, and enterprise documentation to evaluate how ZoikoTime handles access controls, data protection, retention, auditability, evidence, responsible AI, and organizational governance.",
  },
];

export default function DocFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 transition-colors dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Documentation FAQs
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">

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
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span className="flex items-center gap-3 text-base font-semibold text-slate-800 dark:text-white">
                    <span className="text-teal-600">
                      •
                    </span>

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