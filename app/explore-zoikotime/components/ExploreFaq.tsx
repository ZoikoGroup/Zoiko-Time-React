"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How is this different from Product Overview?",
    answer:
      "Product Overview defines the full ZoikoTime system. Explore ZoikoTime helps you choose where to go next and explains why.",
  },
  {
    question: "Do I need an account or email?",
    answer:
      "No. Exploring requires no account, no email, and no lead form. Recommendations use only the choices you make on this page, and you can change or clear them at any time.",
  },
  {
    question: "How are recommendations made?",
    answer:
      "Visible, versioned routing rules match your declared goal, role, environment, and evaluation stage to approved capabilities. There is no hidden model and no confidence score — every path shows the choices it matched.",
  },
  {
    question: "Does ZoikoTime monitor workers?",
    answer:
      "No. There is no worker scoring, and no screenshot, keystroke content, or clipboard collection. Workers can see their own record, understand how it was classified, and request a correction.",
  },
  {
    question: "What if more than one capability fits?",
    answer:
      "You see every matching route with its role — primary, supporting, or evidence path — rather than a single ranked answer. The full approved directory stays reachable no matter what you choose.",
  },
  {
    question:
      "Can Explore tell me if ZoikoTime is compliant in my jurisdiction?",
    answer:
      "No. Recommendations are routing suggestions, not legal, compliance, or payroll determinations. Jurisdictional questions belong with your own advisors, supported by the evidence in the Trust Center.",
  },
];

export default function ExploreFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[820px] px-6 py-16 lg:py-24">

        {/* Heading */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

          <span className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-700 dark:text-teal-400">
            FAQ
          </span>
        </div>

        <h2 className="mt-4 text-center text-3xl font-semibold leading-tight text-slate-800 dark:text-white md:text-4xl">
          Questions about how Explore ZoikoTime works.
        </h2>

        {/* Questions */}
        <div className="mt-12 border-t border-slate-200 dark:border-slate-800">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className="border-b border-slate-200 dark:border-slate-800"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                    {faq.question}
                  </span>

                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-200 text-sm text-slate-800 dark:border-slate-700 dark:text-white">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="-mt-1 max-w-[730px] pb-6 text-sm leading-6 text-gray-500 dark:text-slate-400">
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
