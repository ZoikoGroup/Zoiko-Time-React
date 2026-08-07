"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is this AI making decisions about my time record?",
    answer:
      "No. Classification runs on versioned, policy-bound rules — not a machine-learning model. Where AI appears in ZoikoTime it is confined to verified anomaly flagging and signal quality, and it never performs classification itself.",
  },
  {
    question: "Can I see exactly why a record was classified a certain way?",
    answer:
      "Yes. Every result carries its full trace: the source facts, the context applied, the named rule and policy version, the outcome in plain language, and the review state.",
  },
  {
    question: "Does a classification result automatically change my pay?",
    answer:
      "No. A classification never triggers an autonomous decision. Pay, discipline, and every other consequential outcome require an authorized person to decide.",
  },
  {
    question: "Does ZoikoTime guarantee legal compliance?",
    answer:
      "No. ZoikoTime applies the rules your organization configures and approves, and preserves the evidence of how they were applied. Whether those rules satisfy a given law remains your organization's determination.",
  },
  {
    question: "What happens when a policy rule changes?",
    answer:
      "The change is drafted with rationale, previewed against real records, approved, versioned, and given an effective date. Prior versions stay readable, so historical records keep the policy that was in force at the time.",
  },
  {
    question: "Does classification involve any surveillance data?",
    answer:
      "No. Classification uses captured time events, schedule context, and configured policy only. There are no screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection.",
  },
];

export default function ClassificationFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Questions
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            Deterministic Time Classification — answered
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
