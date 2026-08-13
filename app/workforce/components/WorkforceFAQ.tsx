"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Is workforce intelligence the same as employee monitoring?",
    answer:
      "No. Workforce intelligence focuses on understanding workforce operations, time, attendance, capacity, and work patterns using governed data. It is not designed as a tool for invasive employee surveillance or continuous tracking of individual behavior.",
  },
  {
    question: "Can ZoikoTime help with payroll and timesheet accuracy?",
    answer:
      "Yes. ZoikoTime can help improve the accuracy of time and attendance records by providing structured workforce data, reducing manual reconciliation, and supporting review of exceptions before information is used in payroll or related processes.",
  },
  {
    question: "Does ZoikoTime use AI to make employment decisions?",
    answer:
      "No. ZoikoTime is designed to support workforce operations and provide information for authorized users. It does not independently make employment decisions such as hiring, termination, promotion, or disciplinary decisions.",
  },
  {
    question: "Is ZoikoTime suitable for professional services firms?",
    answer:
      "Yes. ZoikoTime can support professional services organizations that need accurate time records, workforce visibility, project-based tracking, payroll inputs, and operational reporting across teams, clients, and work arrangements.",
  },
  {
    question: "Can ZoikoTime support audits or disputes?",
    answer:
      "Yes. ZoikoTime can provide structured workforce records and supporting evidence that help authorized users review historical activity, investigate exceptions, and support audits or workforce-related disputes.",
  },
];

export default function WorkforceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="
        w-full
        py-20
        bg-white
        dark:bg-slate-950
        transition-colors
      "
    >
      <div
        className="
          max-w-[1180px]
          mx-auto
          px-5
          sm:px-8
          lg:px-0
        "
      >
        {/* Label */}
        <div
          className="
            text-center
            text-teal-600
            text-xs
            font-bold
            uppercase
            tracking-wider
          "
        >
          Common Questions
        </div>

        {/* Heading */}
        <h2
          className="
            mt-6
            text-center
            text-3xl
            sm:text-4xl
            font-semibold
            leading-10
            text-slate-900
            dark:text-white
          "
        >
          Workforce Intelligence FAQ
        </h2>

        {/* FAQ Box */}
        <div
          className="
            max-w-[760px]
            mx-auto
            mt-16
            sm:mt-20
            rounded-2xl
            border
            border-slate-200
            dark:border-slate-700
            overflow-hidden
            bg-white
            dark:bg-slate-900
          "
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`
                  ${
                    index !== faqs.length - 1
                      ? "border-b border-slate-200 dark:border-slate-700"
                      : ""
                  }
                `}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    min-h-[56px]
                    items-center
                    justify-between
                    gap-4
                    px-5
                    py-4
                    text-left
                    transition-colors
                    hover:bg-slate-50
                    dark:hover:bg-slate-800/60
                  "
                >
                  <p
                    className="
                      text-sm
                      sm:text-base
                      font-semibold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {faq.question}
                  </p>

                  {/* Plus / Minus */}
                  <span
                    className="
                      flex-shrink-0
                      text-teal-600
                      text-xl
                      font-normal
                      leading-none
                    "
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p
                      className="
                        text-sm
                        leading-6
                        text-slate-600
                        dark:text-slate-300
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All */}
        <div
          className="
            mt-12
            text-center
            text-teal-600
            text-sm
            font-semibold
            cursor-pointer
            hover:text-teal-700
            transition
          "
        >
          View All FAQs
        </div>
      </div>
    </section>
  );
}