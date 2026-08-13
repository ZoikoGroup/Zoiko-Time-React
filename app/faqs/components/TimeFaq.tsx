"use client";

import React, { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What does ZoikoTime track?",
    answer:
      "ZoikoTime can record workforce time, attendance, breaks, activity context, project or work context, corrections, approvals, and exceptions based on the organization's configuration and enabled features.",
  },
  {
    question: "Does ZoikoTime verify time and activity?",
    answer:
      "Yes. ZoikoTime can help organizations verify time and activity records through completeness checks, activity context, approval workflows, exception review, and other configured verification controls. Verification supports human review rather than automatically determining employee performance or disciplinary outcomes.",
  },
  {
    question: "Can workers correct time records?",
    answer:
      "Yes. Workers can submit correction requests where the organization's configuration allows it. Corrections can then be reviewed and approved by authorized managers or other designated reviewers, creating a clearer record of what was changed and why.",
  },
  {
    question: "Does ZoikoTime replace payroll software?",
    answer:
      "No. ZoikoTime does not replace payroll software. It helps organizations prepare, verify, approve, and govern workforce time records before approved records are used in payroll, billing, finance, or reporting workflows.",
  },
  {
    question: "Does ZoikoTime support audit-ready evidence?",
    answer:
      "Yes. ZoikoTime can support audit and review workflows through record history, approvals, corrections, access information, exports, retention controls, and structured evidence packages where supported by the organization's configuration.",
  },
];

export default function TimeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4">

        {/* Section Label */}
        <p className="text-center text-xs font-bold uppercase tracking-wider text-teal-600">
          Time, Activity, Timesheet, and Verification
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
            href="/time-and-activity-verification"
            className="text-xs font-semibold text-teal-600 transition hover:underline dark:text-teal-400"
          >
            View Time &amp; Activity Verification →
          </Link>
        </div>

      </div>
    </section>
  );
}