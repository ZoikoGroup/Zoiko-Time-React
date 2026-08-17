"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How does ZoikoTime work?",
    answer: "ZoikoTime captures work-session time and metadata locally or on mobile devices. It applies versioned, human-defined policy rules to classify activity, flags anomalies based on condition rules, and registers the verified version chronology in a secure Evidence Ledger."
  },
  {
    question: "Is ZoikoTime employee-monitoring software?",
    answer: "Absolutely not. ZoikoTime enforces privacy by design. It does not perform screen capture, keystroke logging, application use monitoring, or device tracking. It focuses on validating work-session parameters against business policies."
  },
  {
    question: "Does ZoikoTime use AI to classify time?",
    answer: "No. Activity classification in ZoikoTime is deterministic and based on versioned company policies. AI is never used to automatically decide classifications, payroll, or audit statuses."
  },
  {
    question: "What can workers see and correct?",
    answer: "Workers have complete access to their own recorded time and metadata. If a gap or incorrect classification occurs, workers can request corrections, preserving transparency and a mutual review process."
  },
  {
    question: "Who approves a workforce record?",
    answer: "Approvals are handled by company managers and reviewers who have coverage permissions. All review activities, modifications, and reasons are logged chronologically."
  },
  {
    question: "What does Export & Defend mean?",
    answer: "It means exporting verified, pre-audited time records to payroll or client-billing systems, backed by a tamper-evident audit history from the Evidence Ledger to defend against compliance audits or billing challenges."
  },
  {
    question: "Does ZoikoTime guarantee payroll accuracy or compliance?",
    answer: "ZoikoTime is a system of evidence. It enforces your configured policies and captures verification parameters, but the final responsibility for payroll accuracy and regulatory compliance sits with human administrators."
  },
  {
    question: "How does ZoikoTime connect with Zoiko Sema?",
    answer: "Connection to Zoiko Sema is completely optional, mapped, and reviewable. If connected, it provides cross-platform event correlation, but presence logs are never treated as sole proof of work."
  },
  {
    question: "What does Kairos do?",
    answer: "Kairos is a read-only assistance module. It explains policy definitions, flags, and rules to authorized users under their active permissions. It has no authority to resolve, suppress, or modify records."
  },
  {
    question: "How long is the free trial?",
    answer: "The standard free trial is 14 days, during which you can configure test groups, set up basic policy parameters, and explore the verification pipelines."
  },
  {
    question: "Where can security and privacy evidence be reviewed?",
    answer: "All security controls, DPAs, ISO frameworks, and privacy invariants can be reviewed in the Trust Center."
  }
];

export default function ZoikoTimeFAQ() {
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