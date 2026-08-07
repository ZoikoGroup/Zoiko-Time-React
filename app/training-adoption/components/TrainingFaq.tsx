"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Who is training for?",
    answer:
      "Every role that touches ZoikoTime — administrators, managers, workers, payroll, HR and legal, and IT. Each audience gets a path built around the tasks they actually perform, so nobody sits through the wrong course.",
  },
  {
    question: "How is training delivered?",
    answer:
      "Through a mix of guided courses, live or on-demand sessions, micro-videos, step-by-step guides, interactive walkthroughs, and downloadable references. Learners work through the path assigned to their role.",
  },
  {
    question: "Can learners practice safely?",
    answer:
      "Yes. Practice happens in a sandbox populated with realistic, synthetic data. Learners can retry any task as often as they like, and nothing they do there touches production records.",
  },
  {
    question: "Is the content accessible?",
    answer:
      "Learning content is built to meet WCAG 2.2 AA, including keyboard navigation, captions, sufficient contrast, and screen-reader support.",
  },
  {
    question: "Does adoption tracking monitor workers?",
    answer:
      "No. Adoption analytics report completion, certification, and readiness only. There are no screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection under any tier or configuration.",
  },
  {
    question: "What evidence do we get?",
    answer:
      "Completion and certification records, readiness by role and team, and adoption reports — all permissioned by role and available to show leadership, auditors, and works councils.",
  },
  {
    question: "Does training cost extra?",
    answer:
      "Availability and scope depend on your agreement and current service terms. Your ZoikoTime contact will confirm what is included before any program begins.",
  },
  {
    question: "How do we get started?",
    answer:
      "Request an enterprise demo or talk to sales. We start with an assessment of roles, current skills, and adoption goals, then build the learning plan from there.",
  },
];

export default function TrainingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-gray-50 py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Questions
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Training &amp; Adoption — answered
          </h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-[900px] flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.06)] dark:bg-slate-800"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold leading-6 text-slate-800 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <Minus
                      className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  ) : (
                    <Plus
                      className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  )}
                </button>

                {isOpen && (
                  <p className="border-t border-slate-100 px-6 py-5 text-sm font-normal leading-6 text-gray-500 dark:border-slate-700 dark:text-slate-400">
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
