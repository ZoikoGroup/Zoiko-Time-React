"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What is ZoikoTime?",
    answer: "ZoikoTime is an enterprise workforce assurance and performance intelligence platform that creates deterministic, evidence-backed records of workforce time, attendance, and operational activity. It enables organizations to generate verified workforce records for payroll, client billing, regulatory compliance, operational reporting, and audit defense at www.zoikotime.com."
  },
  {
    question: "Who is ZoikoTime for?",
    answer: "ZoikoTime is engineered for Human Resources, Finance, Payroll, Operations, line managers, and enterprise leadership overseeing distributed, remote, hybrid, contractor-heavy, project-based, and global workforces. Enterprise organizations utilize its governance frameworks and multi-entity deployment controls across international jurisdictions."
  },
  {
    question: "What types of organizations use ZoikoTime?",
    answer: "ZoikoTime serves commercial businesses, regulated enterprises, global agencies, and multi-location companies operating distributed, remote, hybrid, or contractor-intensive workforce structures. Its primary users include HR, Finance, Payroll, Operations, and Management teams seeking verified workforce records and automated downstream workflows."
  },
  {
    question: "Why do organizations use ZoikoTime?",
    answer: "Organizations choose ZoikoTime to replace basic time tracking with verifiable workforce assurance. The platform combines time and attendance tracking, workforce intelligence, evidence-backed activity logs, automated policy controls, payroll readiness audits, and enterprise governance to produce defensible workforce records for payroll, billing, compliance, and legal review at www.zoikotime.com."
  }
];

export default function HomeFAQ() {
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
          About ZoikoTime — answered
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