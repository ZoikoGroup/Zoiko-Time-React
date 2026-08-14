"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How does ZoikoTime help manage remote teams?",
    answer: "ZoikoTime provides a single, trusted source of truth for work hours and activity. By verifying work sessions asynchronously, it replaces micromanagement and constant status reporting with objective, tamper-evident evidence."
  },
  {
    question: "Does ZoikoTime monitor screens, keyboard activity, or applications?",
    answer: "No. ZoikoTime operates under strict privacy invariants. It never captures screenshots, keystrokes, browser history, or application-level detail. It records time and metadata within verified operating parameters."
  },
  {
    question: "Does online status prove someone is working?",
    answer: "No. Online status indicates network connection or active session state, but is not definitive proof of work. ZoikoTime uses deterministic activity classification rules to verify real work."
  },
  {
    question: "How are remote teams coordinated across time zones?",
    answer: "All event times are recorded in UTC with local offset markers. This allows the system to establish an absolute chronological order of work across globally distributed teams."
  },
  {
    question: "What is an asynchronous handoff?",
    answer: "An asynchronous handoff occurs when work output and verification credentials from one team member are recorded and transferred to a colleague in another time zone, without requiring real-time communication."
  },
  {
    question: "Can workers see and correct their time records?",
    answer: "Yes. Workers have full visibility of their own records. If a gap or classification error occurs, they can request a correction, preserving transparency and trust."
  },
  {
    question: "How are connectivity or power outages handled?",
    answer: "ZoikoTime's local agents securely buffer session logs offline. Once connection is restored, the buffered records are synchronized with a late-arrival marker to preserve the timeline."
  },
  {
    question: "Can managers rank workers by response speed or online time?",
    answer: "No. ZoikoTime does not calculate worker rankings, gamified speed metrics, or continuous online duration scores. It is built as a compliance and validation tool, not a tracker for surveillance."
  },
  {
    question: "How does ZoikoTime support global remote teams?",
    answer: "The system incorporates multi-jurisdictional compliance policy tables. This dynamically adjusts break rules, overtime limits, and payroll conditions according to each worker's local labor law."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-6 py-16 dark:bg-slate-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-12">
        {/* Header */}
        <div className="max-w-[700px] text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400">
              Remote Team Questions
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="w-full max-w-[980px] space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-1 py-6 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-900"
                >
                  <h3 className="pr-6 text-base font-semibold leading-6 text-slate-900 dark:text-white">
                    {faq.question}
                  </h3>

                  {isOpen ? (
                    <FiMinus className="h-5 w-5 flex-shrink-0 text-emerald-700 dark:text-emerald-400" />
                  ) : (
                    <FiPlus className="h-5 w-5 flex-shrink-0 text-emerald-700 dark:text-emerald-400" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-1 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
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