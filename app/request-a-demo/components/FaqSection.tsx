"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How fast does someone respond after I submit?",
    answer:
      "A member of the ZoikoTime team will review your submission and follow up with you about your requirements, questions, or preferred next steps.",
  },
  {
    question: "Can I start a free trial instead of a demo?",
    answer:
      "Depending on your requirements and the current ZoikoTime offering, a trial or evaluation path may be available. Contact the team to discuss the option that best fits your organization.",
  },
  {
    question: "Can I get a sandbox before signing?",
    answer:
      "Sandbox or evaluation access may be available for qualified organizations. The ZoikoTime team can discuss your use case, requirements, and appropriate evaluation scope.",
  },
  {
    question: "Do you support distributed and international teams?",
    answer:
      "Yes. ZoikoTime is designed to support remote, hybrid, distributed, and multi-location workforce environments, with configurable policies, permissions, workflows, and governance controls.",
  },
  {
    question: "Can I book a call immediately after submitting?",
    answer:
      "The available next steps depend on the submission and scheduling options provided by the ZoikoTime team. You can indicate your preferred timing when submitting your request.",
  },
  {
    question: "What will the demo actually cover?",
    answer:
      "The demo can cover workforce time records, attendance, activity context, approvals, exceptions, analytics, evidence, governance, integrations, and workflows relevant to your organization.",
  },
  {
    question: "What does your Data Processing Agreement cover?",
    answer:
      "The Data Processing Agreement describes how personal data is processed, including applicable roles and responsibilities, processing requirements, security measures, confidentiality, subprocessors, and related data protection obligations.",
  },
  {
    question: "Which plan is right for our team?",
    answer:
      "The appropriate plan depends on your workforce size, required features, integrations, governance requirements, and deployment model. The ZoikoTime team can help identify the option that matches your requirements.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="
        w-full
        bg-white
        dark:bg-slate-950
        px-5
        sm:px-8
        lg:px-10
        py-14
      "
    >
      {/* Header */}
      <div className="text-center">
        <p
          className="
            text-teal-900
            dark:text-teal-400
            text-xs
            font-bold
            uppercase
            tracking-wider
          "
        >
          Frequently asked questions
        </p>

        <h2
          className="
            mt-4
            text-gray-900
            dark:text-white
            text-3xl
            sm:text-4xl
            font-semibold
          "
        >
          Common questions
        </h2>
      </div>

      {/* FAQ Grid */}
      <div
        className="
          max-w-[1180px]
          mx-auto
          mt-12
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-4
        "
      >
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                dark:border-slate-700
                bg-white
                dark:bg-slate-900
              "
            >
              {/* Question */}
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
                className="
                  flex
                  min-h-14
                  w-full
                  items-center
                  justify-between
                  gap-4
                  px-5
                  py-4
                  text-left
                  transition
                  hover:bg-slate-50
                  dark:hover:bg-slate-800
                "
              >
                <span
                  className="
                    text-gray-900
                    dark:text-white
                    text-sm
                    font-semibold
                  "
                >
                  {faq.question}
                </span>

                <ChevronDown
                  size={18}
                  className={`
                    shrink-0
                    text-slate-500
                    dark:text-slate-400
                    transition-transform
                    duration-200
                    ${isOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* Answer */}
              {isOpen && (
                <div
                  className="
                    border-t
                    border-slate-200
                    dark:border-slate-700
                    px-5
                    py-4
                  "
                >
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
    </section>
  );
}