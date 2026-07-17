"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Is ZoikoTime accessible?",
    answer:
      "ZoikoTime is designed to support accessible use across its website, web application, mobile experience, documentation, forms, and support content.",
  },
  {
    question: "Does ZoikoTime follow WCAG?",
    answer:
      "ZoikoTime's accessibility approach is guided by WCAG-based principles and practical usability standards. The platform should not be described as fully certified unless a formal accessibility audit has been completed.",
  },
  {
    question: "Can users navigate ZoikoTime with a keyboard?",
    answer:
      "Core workflows are designed to support keyboard navigation where technically supported, including logical tab order, visible focus states, and keyboard-accessible controls.",
  },
  {
    question: "Does ZoikoTime support screen readers?",
    answer:
      "ZoikoTime aims to support assistive technologies through structured headings, descriptive labels, accessible form fields, buttons, alerts, and meaningful page structure.",
  },
  {
    question: "How do I report an accessibility issue?",
    answer:
      "You can report an accessibility barrier through the accessibility issue reporting form. Include as much detail as possible, including the affected area, device, and steps to reproduce the issue.",
  },
  {
    question:
      "Can enterprise customers request accessibility information?",
    answer:
      "Yes. Enterprise customers may request available accessibility-related product information during procurement, vendor risk review, implementation planning, or regulatory assessment.",
  },
];

export default function AccessFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-5 py-20 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white sm:px-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-[1.5px] w-5 bg-teal-600" />

            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
              Common Questions
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-[760px] overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`border-b border-slate-200 last:border-b-0 dark:border-white/10 ${
                  isOpen ? "bg-slate-50 dark:bg-white/[0.04]" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[60px] w-full items-center justify-between gap-6 px-5 text-left transition hover:bg-slate-50 dark:hover:bg-white/[0.04]"
                >
                  <span className="text-base font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>

                  <span
                    className={`shrink-0 text-xl font-normal text-teal-600 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pr-14">
                    <p className="text-sm leading-6 text-slate-500 dark:text-white/50">
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