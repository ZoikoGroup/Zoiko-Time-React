"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Does ZoikoTime rank employees?",
    answer:
      "No. ZoikoTime is designed to support workforce analysis and human review rather than automatically ranking employees. Analytics provide context and signals that authorized users can evaluate according to their organization's policies.",
  },
  {
    question: "Where does the data come from?",
    answer:
      "Data can come from configured workforce records such as time entries, attendance, activity context, approvals, corrections, projects, and other connected sources. The specific data available depends on the customer's configuration and enabled features.",
  },
  {
    question: "Can we export reports to payroll or BI tools?",
    answer:
      "Yes, where supported by the applicable configuration and integrations. Approved workforce records and reporting outputs can be prepared for downstream payroll, finance, billing, HR, or business intelligence workflows.",
  },
  {
    question: "Can different teams see different reports?",
    answer:
      "Yes. ZoikoTime supports role-based access so organizations can control which users or teams can access particular workforce records, analytics, reports, and evidence based on permissions and business requirements.",
  },
];

export default function Responsible() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-[1180px] px-6 py-16 lg:px-0">

        {/* Header */}
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Responsible Analytics
          </div>

          <h2 className="mt-3 text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            Analytics built for governance, not
            <br className="hidden sm:block" />
            surveillance
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-base leading-7 text-gray-500 dark:text-gray-400">
            ZoikoTime supports human review — it does not rank employees or
            make automatic judgments.
          </p>
        </div>

        {/* Notice */}
        <div className="mx-auto mt-[92px] flex max-w-[760px] gap-3 rounded-xl border border-orange-200 bg-yellow-50 p-4 dark:border-yellow-900/50 dark:bg-yellow-950/30">
          <div className="mt-0.5 shrink-0 text-yellow-800 dark:text-yellow-400">
            ⚠
          </div>

          <p className="text-sm leading-5 text-yellow-800 dark:text-yellow-300">
            ZoikoTime reporting avoids employee-ranking, surveillance,
            automatic performance judgment, payroll processing, and legal
            advice. It is a decision-support layer that keeps a human in the
            loop. Learn more about{" "}
            <span className="font-semibold text-teal-700 dark:text-teal-400">
              Responsible AI
            </span>{" "}
            and{" "}
            <span className="font-semibold text-teal-700 dark:text-teal-400">
              Payroll &amp; Timesheet Integrity
            </span>
            .
          </p>
        </div>

        {/* FAQs */}
        <div className="mt-[42px]">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
              Questions
            </div>

            <h2 className="mt-3 text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
              Reporting &amp; Analytics FAQs
            </h2>
          </div>

          {/* FAQ List */}
          <div className="mx-auto mt-10 max-w-[900px] space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    dark:border-slate-700
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
                      w-full
                      items-center
                      justify-between
                      gap-4
                      px-5
                      py-5
                      text-left
                      transition-colors
                      hover:bg-slate-50
                      dark:hover:bg-slate-800
                    "
                  >
                    <div className="flex items-center gap-4">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700 dark:bg-gray-400" />

                      <span className="text-base font-semibold leading-6 text-gray-700 dark:text-gray-300">
                        {faq.question}
                      </span>
                    </div>

                    <ChevronDown
                      size={20}
                      className={`
                        shrink-0
                        text-teal-600
                        transition-transform
                        duration-200
                        dark:text-teal-400
                        ${isOpen ? "rotate-180" : ""}
                      `}
                    />
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="border-t border-slate-200 px-5 pb-5 pt-4 dark:border-slate-700">
                      <p className="pl-5 text-sm leading-7 text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}