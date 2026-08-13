"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is project time tracking software?",
    answer:
      "It's a governed layer that connects people, project context, time and approvals into one reviewable record — separate from your PM, ERP and billing systems.",
  },
  {
    question: "Does it capture screenshots or keystrokes?",
    answer:
      "No. ZoikoTime is designed around governed time and project records rather than invasive surveillance such as screenshots or keystroke logging.",
  },
  {
    question: "Can workers correct their own records?",
    answer:
      "Workers can correct records where policy permits. Changes retain the actor, timestamp, reason, and previous versus new value so the history remains reviewable.",
  },
  {
    question: "Does it replace our project management or accounting system?",
    answer:
      "No. ZoikoTime provides the governed time and project-record layer while working alongside project management, ERP, billing, payroll, and accounting systems.",
  },
  {
    question: "Does ZoikoTime score individual productivity?",
    answer:
      "No. The system focuses on project context, time records, approvals, governance, and evidence rather than individual productivity scoring.",
  },
];

export default function ProjectFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      className="
        w-full
        bg-neutral-100
        py-20
        sm:py-24
        lg:py-[96px]
        dark:bg-slate-900
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[760px]
          px-6
          sm:px-8
          lg:px-0
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="text-center">
          <span
            className="
              text-xs
              font-bold
              uppercase
              leading-5
              tracking-widest
              text-emerald-700
              dark:text-emerald-400
            "
          >
            FAQ
          </span>

          <h2
            className="
              mt-2
              text-3xl
              font-bold
              leading-10
              text-slate-900
              sm:text-4xl
              dark:text-white
            "
          >
            Frequently asked questions
          </h2>
        </div>

        {/* =====================================================
            FAQ LIST
        ===================================================== */}
        <div className="mt-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="
                  border-b
                  border-gray-200
                  dark:border-slate-700
                "
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    min-h-[64px]
                    w-full
                    items-center
                    justify-between
                    gap-6
                    px-1
                    text-left
                    transition
                  "
                >
                  <span
                    className="
                      text-base
                      font-semibold
                      leading-6
                      text-sky-950
                      dark:text-white
                    "
                  >
                    {faq.question}
                  </span>

                  {/* Plus / Minus */}
                  <span
                    className={`
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      text-xl
                      font-semibold
                      leading-none
                      text-emerald-600
                      transition-transform
                      duration-200
                      dark:text-emerald-400
                      ${isOpen ? "rotate-45" : ""}
                    `}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-[grid-template-rows]
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                        max-w-[730px]
                        pb-6
                        pl-1
                        text-sm
                        font-normal
                        leading-5
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}