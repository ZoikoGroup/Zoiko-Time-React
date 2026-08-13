"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Do I have to complete every readiness item before launching?",
    answer:
      "Readiness items reflect what most teams need before a safe launch, but they're a guide, not a lock. What is required is human verification before go-live — the checklist just makes sure that person has what they need to say yes.",
  },
  {
    question: "Does sandbox activity affect our real account?",
    answer:
      "No. Sandbox activity is isolated from your live environment. Tests do not affect live workers, pay, production policy records, or audit evidence.",
  },
  {
    question: "Can I switch role tracks partway through?",
    answer:
      "Yes. Role tracks are designed around permissions and responsibilities, so you can move to another track when your role or responsibilities change.",
  },
  {
    question: "Who actually approves launch?",
    answer:
      "A designated person with the appropriate authority confirms readiness before anything goes live. The system does not automatically approve a launch.",
  },
  {
    question: "How long does onboarding usually take?",
    answer:
      "The timeline depends on your role, configuration, integrations, and review requirements. Guided paths provide estimated steps so your team can see what remains.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full bg-white px-5 py-16 dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1232px]">
        {/* HEADER */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-600" />

            <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              FAQ
            </span>
          </div>

          <h2 className="mt-2 max-w-[600px] text-3xl font-bold leading-9 text-sky-950 dark:text-white">
            Questions about getting started.
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="mt-12 max-w-[820px] border-t border-gray-200 dark:border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-gray-200 dark:border-white/10"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-1 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-sky-950 dark:text-white sm:text-base">
                    {faq.question}
                  </span>

                  {/* PLUS / MINUS */}
                  <span
                    className={`relative flex h-5 w-5 shrink-0 items-center justify-center transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <span className="absolute h-px w-3.5 bg-emerald-600 dark:bg-emerald-400" />
                    <span className="absolute h-px w-3.5 rotate-90 bg-emerald-600 dark:bg-emerald-400" />
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[700px] pb-6 pr-8 text-sm font-normal leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}