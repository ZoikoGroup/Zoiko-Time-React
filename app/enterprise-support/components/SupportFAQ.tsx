"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const faqItems = [
  {
    question: "Is support available 24/7?",
    answer:
      "Coverage depends on your current entitlement and is shown as verified or needing verification — we don't claim 24/7 coverage without current evidence.",
  },
  {
    question: "Does AI decide the outcome of my case?",
    answer:
      "No. Consequential decisions remain human-authorized. AI may support routing, analysis, or workflow assistance, but it does not independently decide the outcome of your case.",
  },
  {
    question: "What's the difference between a case and an incident?",
    answer:
      "A case is a tracked support request with an owner, lifecycle, and next action. An incident refers to an operational event that may affect service availability, reliability, or multiple users.",
  },
  {
    question: "Can workers submit a correction request?",
    answer:
      "Yes. Workers can submit a correction request when they need to raise an issue with their workforce record or related information. The request is routed through the appropriate review process.",
  },
  {
    question: "How do I report a security concern?",
    answer:
      "Use the Responsible Disclosure route for potential security vulnerabilities. Review the current scope and Rules of Engagement before testing or submitting a report.",
  },
  {
    question: "Does support provide legal or payroll advice?",
    answer:
      "No. Enterprise Support does not provide legal, tax, payroll, or employment advice. Support can help with product, access, configuration, data, and incident-related requests.",
  },
];

export default function SupportFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[756px] px-5 sm:px-8">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mx-auto
              mt-3
              max-w-[600px]
              text-3xl
              font-semibold
              leading-10
              tracking-tight
              text-slate-800
              dark:text-white
              sm:text-4xl
            "
          >
            Questions about how Enterprise
            <br className="hidden sm:block" />
            Support works.
          </h2>
        </div>

        {/* =========================================================
            FAQ LIST
        ========================================================= */}

        <div className="mt-12">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`
                  border-slate-200
                  dark:border-slate-700
                  ${index === faqItems.length - 1 ? "border-b" : ""}
                  border-t
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
                    items-center
                    justify-between
                    gap-5
                    py-6
                    text-left
                    focus:outline-none
                  "
                >
                  <span
                    className="
                      text-base
                      font-semibold
                      leading-6
                      text-slate-800
                      dark:text-slate-100
                    "
                  >
                    {item.question}
                  </span>

                  {/* Plus / Minus */}
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-200
                      text-slate-800
                      transition-transform
                      dark:border-slate-700
                      dark:text-slate-200
                    "
                  >
                    <FiPlus
                      className={`
                        h-3
                        w-3
                        transition-transform
                        duration-200
                        ${isOpen ? "rotate-45" : ""}
                      `}
                      strokeWidth={1.5}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] pb-6 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                        max-w-[727px]
                        pr-8
                        text-sm
                        font-normal
                        leading-6
                        text-gray-500
                        dark:text-slate-400
                      "
                    >
                      {item.answer}
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