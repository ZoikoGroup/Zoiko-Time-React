"use client";

import React, { useState } from "react";

const faqItems = [
  {
    question: "Can I see my own time records?",
    answer:
      "Yes. Workers can access their own time records where the organization's configuration and permissions allow it. This can include recorded work time, attendance information, breaks, corrections, and relevant record history.",
  },
  {
    question: "What do I do if my timesheet is wrong?",
    answer:
      "If you find an incorrect or missing entry, use the available correction workflow to submit the issue. Depending on your organization's configuration, the correction may be reviewed and approved by your manager or another authorized reviewer.",
  },
  {
    question: "Who can see my work-session context?",
    answer:
      "Access to work-session context is controlled through organizational permissions and roles. Only authorized users should be able to access information relevant to their responsibilities, subject to your organization's policies and applicable requirements.",
  },
  {
    question: "Are screenshots always on?",
    answer:
      "No. Screenshot functionality is controlled by the organization's configuration and applicable permissions. Where screenshots are enabled, workers should be informed according to the organization's policies and applicable requirements.",
  },
  {
    question: "Where do I get help?",
    answer:
      "Workers can use the available Help Center and Worker Guide resources for product guidance. For account-specific questions or issues, contact the appropriate administrator or support channel provided by your organization.",
  },
];

export default function WorkerFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="
        w-full
        bg-gray-50
        py-16
        transition-colors
        dark:bg-slate-950
        sm:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-5xl
          px-5
          sm:px-8
        "
      >
        {/* Header */}
        <div className="text-center">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-teal-600
              dark:text-teal-400
            "
          >
            Questions
          </p>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              leading-tight
              text-slate-800
              dark:text-white
              sm:text-4xl
            "
          >
            Worker Guide FAQs
          </h2>
        </div>

        {/* FAQ List */}
        <div
          className="
            mx-auto
            mt-10
            max-w-5xl
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={
                  index !== faqItems.length - 1
                    ? "border-b border-slate-200 dark:border-slate-800"
                    : ""
                }
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5
                    px-6
                    py-5
                    text-left
                    transition-colors
                    hover:bg-slate-50
                    dark:hover:bg-slate-800
                  "
                >
                  <span
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      font-semibold
                      text-slate-800
                      dark:text-white
                      sm:text-base
                    "
                  >
                    <span className="text-teal-600 dark:text-teal-400">
                      •
                    </span>

                    {item.question}
                  </span>

                  {/* Plus / Close */}
                  <span
                    className={`
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      text-xl
                      font-bold
                      transition-all
                      duration-200
                      ${
                        isOpen
                          ? "rotate-45 bg-teal-600 text-white"
                          : "text-teal-600 dark:text-teal-400"
                      }
                    `}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p
                      className="
                        border-t
                        border-slate-100
                        pt-4
                        text-sm
                        leading-7
                        text-slate-600
                        dark:border-slate-800
                        dark:text-slate-300
                        sm:text-base
                      "
                    >
                      {item.answer}
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