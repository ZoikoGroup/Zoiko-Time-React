"use client";

import { useState } from "react";

export default function ZoikoTimeFAQ() {
  const faqs = [
    "How does ZoikoTime work?",
    "Is ZoikoTime employee-monitoring software?",
    "Does ZoikoTime use AI to classify time?",
    "What can workers see and correct?",
    "Who approves a workforce record?",
    "What does Export & Defend mean?",
    "Does ZoikoTime guarantee payroll accuracy or compliance?",
    "How does ZoikoTime connect with Zoiko Sema?",
    "What does Kairos do?",
    "How long is the free trial?",
    "Where can security and privacy evidence be reviewed?",
  ];

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
          How ZoikoTime works — answered
        </h2>

        {/* FAQ */}
        <div className="mt-3 flex w-full max-w-[860px] flex-col gap-3">
          {faqs.map((question, index) => {
            const isOpen = open === index;

            return (
              <div
                key={question}
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
                    {question}
                  </span>

                  <span className="text-xl text-teal-600">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}