"use client";

import { useState } from "react";
import Image from "next/image";

import { poppins } from "../fonts";

const faqs = [
  {
    question: "Does this rank or score workers?",
    answer:
      "No. There are no leaderboards, productivity scores, activity heat maps, or behavioral rankings anywhere in the product — under any configuration.",
  },
  {
    question: "Does a dashboard prove compliance or payroll correctness?",
    answer:
      "No. A dashboard presents governed records alongside their definitions, versions, and limitations. It is not a compliance determination, a payroll calculation, or a legal-proof document.",
  },
  {
    question: "Can I compare data across different units or time periods?",
    answer:
      "Only when the underlying definitions and policy versions are comparable. When they are not, the comparison is blocked and the reason is shown, rather than returning a number that would mislead.",
  },
  {
    question: "Can workers see their own reports?",
    answer:
      "Yes. My Record Reports gives every worker their own history in plain language — the contributing records, metric definitions, policy versions, and a correction pathway they can track.",
  },
  {
    question:
      "What happens when a filter would expose data I'm not authorized to see?",
    answer:
      "The requested filter is intersected with your server-authorized scope, so it narrows the result instead of widening it. Filters never expand access.",
  },
  {
    question: "Are exports legal-proof documents?",
    answer:
      "No. Every export carries requester, purpose, scope, definitions, data-as-of, recipient, retention, and limitations — but it is not a guarantee of legal admissibility, regulatory acceptance, or compliance.",
  },
  {
    question: "Does this monitor what's on a worker's screen?",
    answer:
      "No. There is no screenshot capture, keystroke content, or clipboard collection. Reports describe records and process state, never a person's screen or behavior.",
  },
];

export default function ReportsFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[820px] px-6 py-16 lg:py-20">

        {/* Heading */}
        <div className="flex items-center justify-center gap-3.5">
          <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-600" />

          <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
            FAQ
          </span>
        </div>

        <h2
          className={`${poppins.className} mt-5 text-center text-2xl font-bold leading-9 text-sky-950 dark:text-white sm:text-3xl`}
        >
          Questions about Reports &amp; Dashboards.
        </h2>

        {/* Questions */}
        <div className="mt-10 border-t border-gray-200 dark:border-slate-800">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className="border-b border-gray-200 dark:border-slate-800"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-sky-950 dark:text-white">
                    {faq.question}
                  </span>

                  <Image
                    src={
                      isOpen
                        ? "/reports-dashboards/icon-close.svg"
                        : "/reports-dashboards/icon-plus.svg"
                    }
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="shrink-0"
                  />
                </button>

                {isOpen && (
                  <p className="-mt-1 max-w-[660px] pb-6 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
