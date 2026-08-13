"use client";

import React, { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Is ZoikoTime secure?",
    answer:
      "ZoikoTime is designed with security controls covering access management, authentication, data protection, administrative controls, auditability, and other safeguards. The specific controls available depend on the applicable ZoikoTime plan, configuration, and service environment.",
  },
  {
    question: "Does ZoikoTime guarantee compliance?",
    answer:
      "No. ZoikoTime provides security, governance, privacy, retention, audit, and other controls that can support customer compliance programs, but it does not guarantee compliance with every legal, regulatory, contractual, or industry requirement. Customers remain responsible for configuring and operating the platform appropriately for their obligations.",
  },
  {
    question: "Does ZoikoTime use AI?",
    answer:
      "ZoikoTime may use AI-assisted capabilities to help identify patterns, surface signals, support analytics, or assist authorized users with workforce review. The availability and behavior of AI features depend on the product configuration and applicable functionality.",
  },
  {
    question: "Does AI make employment decisions in ZoikoTime?",
    answer:
      "AI is not intended to independently make employment, disciplinary, compensation, termination, or other high-impact workforce decisions. AI-assisted signals are intended to support authorized human review and decision-making rather than replace human judgment.",
  },
  {
    question: "What is responsible AI in ZoikoTime?",
    answer:
      "Responsible AI means using AI-assisted capabilities with appropriate human oversight, transparency, access controls, explainability, and defined boundaries. ZoikoTime's approach is intended to keep human authority in workforce decisions and prevent AI signals from being treated as automatic conclusions.",
  },
];

export default function SecurityFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4">

        {/* Section Label */}
        <p className="text-center text-xs font-bold uppercase tracking-wider text-teal-600">
          Security, Compliance, and Responsible AI
        </p>

        {/* FAQ Card */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
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
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span className="text-base font-semibold text-slate-900 dark:text-white">
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

        {/* Footer Links */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
          <Link
            href="/security-addendum"
            className="font-semibold text-teal-600 transition hover:underline dark:text-teal-400"
          >
            View Security Addendum →
          </Link>

          <span className="text-slate-400">|</span>

          <Link
            href="/responsible-ai"
            className="font-semibold text-indigo-500 transition hover:underline"
          >
            View Responsible AI →
          </Link>
        </div>
      </div>
    </section>
  );
}