"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does ZoikoTime determine worker classification?",
    answer:
      "No. ZoikoTime governs contractor time and project records — classification decisions remain with your legal and HR teams.",
  },
  {
    question: "Does this process payroll or payments?",
    answer:
      "No. ZoikoTime manages governed contractor records, approvals, and exports. Payroll, payment, and tax processing remain outside the platform.",
  },
  {
    question: "Is this a surveillance tool?",
    answer:
      "No. ZoikoTime is designed around transparent workforce records and human review. It does not perform screenshots, keystroke capture, GPS tracking, or productivity scoring.",
  },
  {
    question: "What happens when an engagement ends?",
    answer:
      "Access is revoked according to the engagement end date while the evidence trail remains available for the required retention period.",
  },
  {
    question: "Can a contractor dispute a record?",
    answer:
      "Yes. Contractors can flag a record and add context. The dispute can then be reviewed, escalated when necessary, and resolved with the outcome recorded.",
  },
];

export default function OpsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[820px] px-4 pt-7 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="flex flex-col items-center gap-8 sm:gap-10">
          {/* Heading */}
          <div className="flex w-full max-w-[620px] flex-col items-center gap-3.5 pt-1">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

              <span className="text-center text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
                FAQ
              </span>
            </div>

            <h2 className="text-center text-3xl font-semibold leading-10 text-slate-800 dark:text-white sm:text-4xl">
              Questions from operations,
              <br />
              finance, and legal.
            </h2>
          </div>

          {/* FAQ List */}
          <div className="w-full">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const isLast = index === faqs.length - 1;

              return (
                <div
                  key={faq.question}
                  className={`border-t border-slate-200 dark:border-slate-700 ${
                    isLast ? "border-b" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                      {faq.question}
                    </span>

                    {/* Plus / Minus */}
                    <span
                      className={`relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-200 transition-colors dark:border-slate-600 ${
                        isOpen
                          ? "bg-slate-800 dark:bg-slate-200"
                          : "bg-transparent"
                      }`}
                      aria-hidden="true"
                    >
                      <span
                        className={`absolute h-px w-2 ${
                          isOpen
                            ? "bg-white dark:bg-slate-800"
                            : "bg-slate-800 dark:bg-slate-200"
                        }`}
                      />

                      <span
                        className={`absolute h-2 w-px transition-transform ${
                          isOpen
                            ? "scale-0"
                            : "scale-100 bg-slate-800 dark:bg-slate-200"
                        }`}
                      />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-200 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[760px] pb-5 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}