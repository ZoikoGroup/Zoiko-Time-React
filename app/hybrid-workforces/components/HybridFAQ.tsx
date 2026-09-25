"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Does ZoikoTime support remote and hybrid teams?",
    answer:
      "ZoikoTime supports remote and hybrid workforce models with location-aware time capture, attendance verification, remote approval workflows, and centralized workforce records configured across teams, schedules, and project assignments.",
  },
];

export default function HybridFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 px-6 py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-3">

        {/* Label */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-teal-600">
          Questions
        </p>

        {/* Heading */}
        <h2
          className="
            max-w-[820px]
            text-center
            text-3xl
            font-bold
            leading-10
            text-slate-800
            dark:text-white
            lg:text-4xl
          "
        >
          Hybrid workforces — answered
        </h2>

        {/* FAQ */}
        <div className="mt-3 flex w-full max-w-[860px] flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
                  shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)]
                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >
                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    px-5
                    py-5
                    text-left
                  "
                >
                  <span
                    className="
                      text-base
                      font-semibold
                      leading-6
                      text-slate-800
                      dark:text-white
                    "
                  >
                    {faq.question}
                  </span>

                  <span className="text-xl text-teal-600">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/50 mt-1 leading-relaxed">
                    {faq.answer}
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