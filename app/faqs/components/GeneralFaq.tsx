"use client";

import React, { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What is ZoikoTime?",
    answer:
      "ZoikoTime is a workforce management and governance platform that helps organizations manage time, attendance, activity context, approvals, exceptions, workforce records, analytics, and evidence in a structured and transparent way.",
  },
  {
    question: "Is ZoikoTime just a time tracking tool?",
    answer:
      "No. Time tracking is only one part of ZoikoTime. The platform is designed to connect workforce time records with attendance, approvals, corrections, exception workflows, reporting, governance, evidence retention, and other operational processes.",
  },
  {
    question: "Who is ZoikoTime built for?",
    answer:
      "ZoikoTime is designed for organizations and teams that need better control over workforce records. This can include HR, operations, payroll, finance, legal, compliance, managers, administrators, and workers.",
  },
  {
    question: "How is ZoikoTime different from traditional time tracking?",
    answer:
      "Traditional time tracking generally focuses on recording hours. ZoikoTime goes further by providing governed workflows around verification, approvals, corrections, exceptions, permissions, evidence, reporting, and record history so organizations can better understand and manage the records behind workforce decisions.",
  },
  {
    question: "Does ZoikoTime support remote, hybrid, and distributed teams?",
    answer:
      "Yes. ZoikoTime is designed to support remote, hybrid, distributed, field, and multi-location workforces. Organizations can configure policies, permissions, workflows, and reporting based on their workforce structure and operational requirements.",
  },
];

export default function GeneralFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4">

        {/* Section Label */}
        <p className="text-center text-xs font-bold uppercase tracking-wider text-teal-600">
          General ZoikoTime Questions
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
            href="/contact-sales"
            className="text-sm font-semibold text-teal-600 transition hover:underline dark:text-teal-400"
          >
            Need help choosing the right plan? Contact Sales →
          </Link>
        </div>
      </div>
    </section>
  );
}