"use client";

import React, { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "How long does ZoikoTime take to implement?",
    answer:
      "Implementation time depends on the organization's workforce size, configuration requirements, integrations, policies, and rollout approach. A smaller deployment may be completed more quickly, while enterprise deployments with multiple teams, systems, and governance requirements may require additional planning and validation.",
  },
  {
    question: "Does ZoikoTime have a mobile app?",
    answer:
      "Yes. ZoikoTime supports a mobile app experience for supported workforce workflows. Depending on the configuration, workers and authorized users can use mobile capabilities for activities such as time and attendance workflows, requests, and other supported tasks.",
  },
  {
    question: "Where do users go for help?",
    answer:
      "Users can access the ZoikoTime Help Center for product guidance, documentation, frequently asked questions, and support resources. Administrators can also use the relevant product and administrator documentation for configuration-related questions.",
  },
  {
    question: "How do we contact ZoikoTime for enterprise questions?",
    answer:
      "For enterprise questions involving deployment, pricing, integrations, security, governance, or other organizational requirements, contact the ZoikoTime Sales or enterprise team. They can help determine the appropriate evaluation and implementation path.",
  },
];

export default function SupportFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4">

        {/* Section Label */}
        <p className="text-center text-xs font-bold uppercase tracking-wider text-teal-600">
          Implementation, Mobile App, and Support
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

        {/* Footer CTA */}
        <div className="mt-6 rounded-lg bg-slate-100 py-3 text-center dark:bg-slate-800">
          <Link
            href="/help-center"
            className="text-xs font-semibold text-teal-600 transition hover:underline dark:text-teal-400"
          >
            Visit Help Center →
          </Link>
        </div>
      </div>
    </section>
  );
}