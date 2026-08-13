"use client";

import React, { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Does ZoikoTime take screenshots?",
    answer:
      "ZoikoTime can support screenshot functionality where it is enabled and configured by the organization. Screenshot collection is not necessarily enabled for every workforce or workflow and is subject to applicable permissions, policies, and configuration.",
  },
  {
    question: "Are screenshots always required?",
    answer:
      "No. Screenshots are not inherently required for using ZoikoTime. Organizations can configure screenshot functionality based on their operational needs, policies, permissions, and applicable requirements.",
  },
  {
    question: "Can sensitive information be redacted?",
    answer:
      "Yes. ZoikoTime can support screenshot redaction and related controls where configured. These controls can help organizations reduce exposure of sensitive information while maintaining appropriate evidence for authorized review.",
  },
  {
    question: "Who can see screenshots?",
    answer:
      "Screenshot access is controlled through permissions and organizational roles. Only authorized users should be able to access screenshot evidence based on their responsibilities, configured access controls, and applicable policies.",
  },
  {
    question: "Is ZoikoTime surveillance software?",
    answer:
      "ZoikoTime is designed as a workforce time, activity, and governance platform rather than an unrestricted surveillance tool. Features such as screenshots and activity context are governed through configuration, permissions, transparency, and human review rather than being intended for unrestricted monitoring.",
  },
];

export default function PrivacyFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4">

        {/* Section Label */}
        <p className="text-center text-xs font-bold uppercase tracking-wider text-amber-500">
          Worker Privacy, Screenshots, and Redaction
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

        {/* Footer Link */}
        <div className="mt-6 text-center">
          <Link
            href="/screenshots-and-redaction-controls"
            className="text-xs font-semibold text-teal-600 transition hover:underline dark:text-teal-400"
          >
            View Screenshots &amp; Redaction Controls →
          </Link>
        </div>

      </div>
    </section>
  );
}