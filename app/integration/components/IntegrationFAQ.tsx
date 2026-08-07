"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do Zoiko Sema and ZoikoTime work together?",
    answer: "",
  },
  {
    question: "Is ZoikoTime included with Zoiko Sema?",
    answer: "",
  },
  {
    question: "What information is shared?",
    answer: "",
  },
  {
    question: "Does the integration export every message or meeting?",
    answer: "",
  },
  {
    question: "Does it monitor employees?",
    answer: "",
  },
  {
    question: "Can meeting duration become time worked automatically?",
    answer: "",
  },
  {
    question: "How are AI summaries or actions handled?",
    answer: "",
  },
  {
    question: "Can administrators control which workspaces connect?",
    answer: "",
  },
  {
    question: "What can workers or participants see?",
    answer: "",
  },
  {
    question: "How is the integration set up?",
    answer: "",
  },
  {
    question: "What happens when the connection fails?",
    answer: "",
  },
  {
    question: "Which plans and regions support it?",
    answer: "",
  },
  {
    question: "Where can security and privacy evidence be reviewed?",
    answer: "",
  },
  {
    question: "Where do existing customers get help?",
    answer: "",
  },
];

export default function IntegrationFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-500">
            Integration Questions Answered
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
            Fourteen Answers,
            <br />
            No Inclusion Assumptions
          </h2>

        </div>

        {/* FAQ Container */}
        <div className="border-t border-slate-200 dark:border-slate-700">

          {/* Continue in Part 2 */}
                    {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-slate-200 dark:border-slate-700"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between py-5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-900/40"
                >
                  <h3 className="pr-6 text-base font-bold text-slate-900 dark:text-white">
                    {faq.question}
                  </h3>

                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                    <span className="text-base font-bold text-emerald-600">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {isOpen && faq.answer && (
                  <div className="pb-6 pr-12">
                    <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                      {faq.answer}
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