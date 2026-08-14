"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the ZoikoTime Resource Center?",
    answer:
      "The public discovery layer for current ZoikoTime onboarding, help, documentation, learning, developer, proof, and release resources — each shown with authority and currentness metadata. It routes you to the source that governs your question rather than answering in its own voice.",
  },
  {
    question: "Where should I look for product instructions?",
    answer:
      "Use Product Documentation for current product behaviour, concepts, fields, states, permissions, limitations, and recovery guidance. The Resource Center routes you to that source rather than duplicating its content.",
  },
  {
    question: "How do I find what changed?",
    answer:
      "Use Release Notes for the authoritative chronological record of verified shipped changes. Each change can include its date, version, state, applicability, and required action.",
  },
  {
    question: "How are resources kept current?",
    answer:
      "Resources are governed by status, owner, review or verification dates, applicability, authority, and limitations. Stale, superseded, corrected, or withdrawn resources receive distinct treatments rather than being presented as current.",
  },
  {
    question: "Can I search by role or task?",
    answer:
      "Yes. Resources can be discovered by task, role, product area, authority, applicability, and resource type. Role selection is explicit and filters the directory; it does not create a profile or infer information about you.",
  },
  {
    question: "Does the Resource Center include security and privacy information?",
    answer:
      "Yes. Security, privacy, governance, accessibility, and related assurance evidence are available through the Trust & Governance destination. The Resource Center identifies that authority rather than restating security claims itself.",
  },
  {
    question: "Can I find developer documentation and API information?",
    answer:
      "Yes. Development Documentation provides current technical guidance, architecture, patterns, security, testing, production guidance, and verified integration information where available.",
  },
  {
    question: "What if I cannot find an answer?",
    answer:
      "Use the approved task paths, filters, synonyms, and current directory first. If no current resource matches, the Resource Center should explain that clearly and provide an appropriate recovery path. Sales is never the default recovery for missing support or documentation.",
  },
  {
    question: "Does search collect worker information?",
    answer:
      "No. Resource discovery does not require worker monitoring or collection of sensitive worker activity. The Resource Center does not use screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection.",
  },
  {
    question: "Where do I report a security vulnerability?",
    answer:
      "Security vulnerabilities should be reported through the responsible disclosure route. General Resource Center feedback is not a substitute for the vulnerability reporting channel.",
  },
  {
    question: "Where can enterprise buyers get help?",
    answer:
      "Enterprise buyers can use the Enterprise and Procurement resources for readiness, identity, administration, support, procurement, and commercial information. Support intent is not redirected to sales when authoritative support or documentation already exists.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full bg-gray-50 px-5 py-14 sm:px-7 sm:py-16 lg:px-8 lg:py-20 dark:bg-[#0b1220]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-10">
        {/* Heading */}
        <div className="w-full max-w-[700px]">
          <h2 className="text-center text-3xl font-bold leading-10 text-slate-900 sm:text-4xl dark:text-white">
            Resource Center questions
          </h2>
        </div>

        {/* FAQ */}
        <div className="w-full max-w-[860px] border-t border-gray-200 dark:border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-gray-200 dark:border-white/10"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-0.5 py-5 text-left"
                >
                  <span
                    className={`text-base font-bold leading-6 transition-colors ${
                      isOpen
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-900 dark:text-gray-100"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-base font-bold leading-none transition-all ${
                      isOpen
                        ? "border-emerald-300 bg-emerald-50 text-emerald-500 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400"
                        : "border-gray-200 bg-gray-100 text-emerald-500 dark:border-white/10 dark:bg-white/5 dark:text-emerald-400"
                    }`}
                    aria-hidden="true"
                  >
                    <span className="relative -top-px">
                      {isOpen ? "−" : "+"}
                    </span>
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[680px] pb-6 pr-8 text-sm font-normal leading-6 text-gray-600 sm:text-base dark:text-gray-300">
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