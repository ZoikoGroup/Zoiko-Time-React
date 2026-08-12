"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Are screenshots always on?",
    answer:
      "No. Screenshot capture is controlled by the organization's configured policies and enabled features. It does not have to be continuously enabled, and organizations can define when and where screenshot capture is appropriate.",
  },
  {
    question: "Can sensitive information be hidden?",
    answer:
      "Yes. Screenshot workflows can support controls designed to reduce exposure of sensitive information. Redaction and access controls can be applied according to the organization's configuration, policies, and applicable requirements.",
  },
  {
    question: "Who can view screenshots?",
    answer:
      "Access to screenshots is restricted to authorized users according to configured roles and permissions. Organizations can control who is permitted to access screenshot evidence and use access controls to limit unnecessary exposure.",
  },
  {
    question: "How long are screenshots kept?",
    answer:
      "Screenshot retention depends on the organization's configured retention policy, applicable legal or contractual requirements, and the purpose for which the screenshots are retained. They should not be retained longer than necessary for the applicable purpose.",
  },
  {
    question: "Do workers know screenshots are enabled?",
    answer:
      "ZoikoTime is designed around transparency. Organizations should clearly communicate applicable screenshot policies to workers, including when screenshot capture is enabled and how the resulting information may be used.",
  },
];

export default function ScreenshotFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 dark:bg-slate-950 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Questions
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Screenshots &amp; Redaction FAQs
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={
                  index !== faqs.length - 1
                    ? "border-b border-slate-200 dark:border-slate-700"
                    : ""
                }
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-lg font-semibold text-teal-600 dark:text-teal-400">
                    {isOpen ? "−" : "+"}
                  </span>

                  <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                    {faq.question}
                  </p>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-6 pb-6 pl-[60px]">
                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
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