"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I get started with an enterprise evaluation?",
    answer:
      "Start by requesting an enterprise evaluation or speaking with our team. We can help you review your workforce requirements, deployment needs, integrations, governance requirements, and evaluation scope before moving forward.",
  },
  {
    question: "What data does ZoikoTime collect or monitor?",
    answer:
      "ZoikoTime is designed to collect workforce and time-related information required for its configured workflows. The specific data collected depends on your configuration, policies, integrations, and enabled features. ZoikoTime does not use workforce data for unrelated profiling or advertising purposes.",
  },
  {
    question: "How does policy and human review work?",
    answer:
      "Organizations define policies and approval rules that determine how workforce records and exceptions are handled. Human review remains part of the process where judgment, approval, correction, or escalation is required. Automated workflows support decisions but do not remove authorized human control.",
  },
  {
    question: "How do pricing and contracts work?",
    answer:
      "Pricing depends on factors such as workforce size, required capabilities, deployment scope, integrations, and contract requirements. Enterprise agreements are typically tailored to the organization's needs and can include implementation, support, security, and service-level requirements.",
  },
];

export default function EnterpriseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-6">

        {/* Heading */}
        <div className="flex justify-center">
          <h2 className="text-center text-3xl font-black leading-9 text-sky-950 dark:text-white">
            Frequently asked questions
          </h2>
        </div>

        {/* Questions */}
        <div className="mx-auto mt-12 grid w-full max-w-5xl grid-cols-1 gap-x-10 md:grid-cols-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-sky-950/10 dark:border-white/10"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    strokeWidth={1.6}
                    className={`shrink-0 text-sky-950/30 transition-transform duration-200 dark:text-white/40 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="pb-5 pr-8">
                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
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