"use client";

import { useState } from "react";

const questions = [
  {
    question: "Do we have to roll out ZoikoTime to the whole organization at once?",
    answer:
      "No. ZoikoTime can support a phased rollout. Organizations can begin with a pilot group, department, location, or specific workflow and expand the deployment after validating configuration, policies, integrations, and user adoption.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation time depends on the organization's size, workforce structure, configuration requirements, integrations, policies, and rollout approach. A simpler deployment may move faster, while enterprise implementations with multiple systems and governance requirements typically require additional planning and validation.",
  },
  {
    question: "Who needs to be involved?",
    answer:
      "Implementation may involve HR, operations, IT, payroll, finance, security, legal or compliance teams, managers, and other relevant stakeholders. The exact participants depend on which ZoikoTime capabilities are being deployed and how the organization manages workforce records.",
  },
  {
    question: "Can ZoikoTime integrate with our existing systems?",
    answer:
      "Yes. ZoikoTime is designed to work alongside existing business systems and can support integrations or exports for workflows such as payroll, HR, finance, billing, reporting, and other operational processes. Available integrations depend on the specific system and ZoikoTime configuration.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 transition-colors dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4">

        {/* Header */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-teal-600">
          Questions
        </p>

        <h2 className="mt-4 text-center text-3xl font-bold text-slate-800 dark:text-white md:text-4xl">
          Implementation FAQs
        </h2>

        {/* FAQ */}
        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">

          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={
                  index !== questions.length - 1
                    ? "border-b border-slate-200 dark:border-slate-800"
                    : ""
                }
              >

                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span className="text-base font-semibold text-slate-800 dark:text-white">
                    {item.question}
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