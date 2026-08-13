"use client";

import { useState } from "react";

const questions = [
  {
    question: "Does ZoikoTime monitor what I'm doing on screen?",
    answer:
      "ZoikoTime is designed to provide workforce visibility and verification without defaulting to invasive surveillance. Depending on the customer's configuration, certain activity context or screenshots may be collected. These controls are permission-based and should be communicated to workers according to the organization's policies and applicable requirements.",
  },
  {
    question: "Can ZoikoTime fire me automatically?",
    answer:
      "No. ZoikoTime does not automatically terminate, discipline, or make employment decisions about workers. The platform can surface records, exceptions, or signals that may require review, but employment decisions remain the responsibility of authorized human decision-makers.",
  },
  {
    question: "Can I see what ZoikoTime has collected about me?",
    answer:
      "Access to workforce records depends on your organization's configuration, permissions, policies, and applicable rights. Where worker access or transparency features are enabled, workers may be able to review relevant records and understand how their information is being used.",
  },
  {
    question: "Why was my session flagged?",
    answer:
      "A session may be flagged when configured rules, policy checks, or review signals identify something that requires attention. A flag is not automatically a finding of misconduct. Authorized managers or reviewers can examine the available context and determine the appropriate next step.",
  },
];

export default function FrequentlyAsked() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-100 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Heading */}
        <div className="text-center">

          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-6 bg-teal-600" />

            <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
              Frequently Asked
            </p>
          </div>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Direct Answers to Direct Questions
          </h2>

        </div>

        {/* Questions */}
        <div className="mx-auto mt-16 grid max-w-[1040px] grid-cols-1 gap-6 md:grid-cols-2">

          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >

                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex min-h-16 w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.question}
                  </h3>

                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xl font-bold transition-transform duration-200 ${
                      isOpen
                        ? "bg-teal-600 text-white"
                        : "bg-teal-50 text-teal-600 dark:bg-teal-950"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="border-t border-slate-200 px-6 pb-5 pt-4 dark:border-slate-800">
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item.answer}
                    </p>
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}