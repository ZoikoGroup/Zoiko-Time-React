"use client";

import React, { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Is this employee surveillance?",
    answer:
      "No. ZoikoTime is designed for accountable time and activity verification, not invasive employee surveillance. It avoids spyware, keystroke monitoring, and continuous behavioral tracking. Information is used within defined permissions and with appropriate worker transparency.",
  },
  {
    question: "What does ZoikoTime actually verify?",
    answer:
      "ZoikoTime verifies configured workforce records such as time, attendance, work activity context, and related events. The information available for verification depends on the organization's policies, enabled features, integrations, and permissions.",
  },
  {
    question: "How are exceptions handled?",
    answer:
      "Exceptions are surfaced for review rather than automatically treated as misconduct. Authorized users can investigate the available context, apply organizational policies, document the outcome, and escalate the matter when human judgment is required.",
  },
  {
    question: "Does activity context prove productivity?",
    answer:
      "No. Activity context should not be treated as a definitive measure of productivity. It provides additional information that can help authorized users understand a workforce event or exception, while productivity and employment decisions require appropriate human judgment and context.",
  },
];

export default function ResponsibleUse() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-6 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-[1180px]">

        {/* Top Section */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
            Responsible Use
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-800 dark:text-white md:text-4xl">
            Verification must be responsible
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-500 dark:text-gray-400">
            ZoikoTime is built for accountability without defaulting to
            invasive surveillance.
          </p>
        </div>

        {/* Information Box */}
        <div className="mx-auto mt-10 flex max-w-[760px] items-start gap-4 rounded-xl border border-orange-200 bg-yellow-50 p-6 dark:border-orange-700 dark:bg-yellow-950/30">

          {/* Icon */}
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-yellow-700 text-sm font-bold text-yellow-700 dark:border-yellow-400 dark:text-yellow-300">
            !
          </div>

          <p className="text-sm leading-6 text-yellow-800 dark:text-yellow-300">
            ZoikoTime avoids employee surveillance, spyware, keystroke
            monitoring, and automatic disciplinary action. Activity context
            supports human review under clear permissions and worker
            transparency. Learn more about{" "}
            <Link
              href="/responsible-ai"
              className="font-semibold text-teal-700 hover:underline dark:text-teal-400"
            >
              Responsible AI
            </Link>
            .
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
              Questions
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-800 dark:text-white md:text-4xl">
              Time &amp; Activity Verification FAQs
            </h2>
          </div>

          {/* FAQ List */}
          <div className="mx-auto mt-10 max-w-5xl divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question}>

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <span className="shrink-0 text-lg font-semibold text-teal-600">
                      {isOpen ? "−" : "+"}
                    </span>

                    <span className="text-base text-gray-700 dark:text-gray-200">
                      {faq.question}
                    </span>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="px-6 pb-6 pl-[52px]">
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

      </div>
    </section>
  );
}