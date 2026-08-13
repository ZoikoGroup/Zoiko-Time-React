"use client";

import React, { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Does ZoikoTime offer a free trial?",
    answer:
      "Trial availability depends on the current ZoikoTime offering and the plan or evaluation path selected. Contact the ZoikoTime team to confirm the available trial or evaluation options for your organization.",
  },
  {
    question: "What happens after the free trial?",
    answer:
      "After a trial or evaluation period ends, access and billing depend on the selected plan and applicable subscription terms. The ZoikoTime team can help you understand the available plans and next steps before the trial period ends.",
  },
  {
    question: "How much does ZoikoTime cost?",
    answer:
      "Pricing depends on factors such as the plan, workforce size, features, configuration, and enterprise requirements. Contact Sales for current pricing and a quote based on your organization's needs.",
  },
  {
    question: "Are annual plans available?",
    answer:
      "Annual plans may be available depending on the selected ZoikoTime plan and commercial arrangement. Contact Sales to discuss available billing options for your organization.",
  },
  {
    question: "Where can I find the legal subscription terms?",
    answer:
      "The applicable subscription terms explain the contractual conditions governing ZoikoTime subscriptions, including relevant billing and service provisions. You can review the Subscription Terms using the link below.",
  },
];

export default function BillingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4">

        {/* Section Label */}
        <p className="text-center text-xs font-bold uppercase tracking-wider text-indigo-500">
          Plans, Trial, Billing, and Subscription
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
            href="/subscription-terms"
            className="font-semibold text-indigo-500 transition hover:underline"
          >
            View Subscription Terms →
          </Link>

          <span className="text-slate-400">|</span>

          <Link
            href="/contact-sales"
            className="font-semibold text-teal-600 transition hover:underline"
          >
            Contact Sales →
          </Link>
        </div>
      </div>
    </section>
  );
}