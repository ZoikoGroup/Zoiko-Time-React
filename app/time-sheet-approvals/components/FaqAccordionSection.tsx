'use client'
import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: 'What are ZoikoTime Timesheets & Approvals?',
    answer:
      'Reviewable periods assembled from approved time records, with correction paths, submission, configured human approval, traceable history, and governed release to authorized downstream workflows.',
  },
  {
    question: 'Can workers correct a timesheet?',
    answer:
      'Yes. Workers can submit correction requests through a designated, documented path with mandatory reasons and permitted supporting context prior to final approval.',
  },
  {
    question: 'Does ZoikoTime approve timesheets automatically?',
    answer:
      'No. ZoikoTime prepares deterministic classifications and reviewable records, but actual approval decisions require explicit human authority according to your configured policy.',
  },
  {
    question: 'What does “approved” actually mean?',
    answer:
      'Approval signifies that an authorized reviewer has verified the period against policy guidelines, locking the version for downstream payroll and record-keeping.',
  },
  {
    question: 'Can an approved timesheet be corrected later?',
    answer:
      'Yes, via governed adjustment workflows. Any post-approval correction generates a transparent audit trail preserving both original and updated versions.',
  },
  {
    question: 'How are disputes handled?',
    answer:
      'Disputes follow a documented escalation path where reason codes and submitted evidence are made available for human administrative review.',
  },
  {
    question: 'Can approvals have multiple steps?',
    answer:
      'Yes. Approval workflows can be configured for single-step or multi-tiered routing based on roles, organizational scope, and delegation policies.',
  },
  {
    question: 'What evidence is preserved?',
    answer:
      'Period scope, submission timestamps, reviewer decisions, structured reason codes, and approval version histories are securely retained.',
  },
  {
    question: 'Does ZoikoTime guarantee payroll accuracy or legal compliance?',
    answer:
      'No. ZoikoTime provides traceable, policy-bound tools to assist governance, but compliance and payroll accuracy remain the responsibility of the administrator.',
  },
  {
    question: 'Is ZoikoTime employee-monitoring software?',
    answer:
      'No. ZoikoTime explicitly refrains from screenshots, keystroke logging, URL tracking, or application-name monitoring under any tier.',
  },
  {
    question: 'How does Kairos help here?',
    answer:
      'Kairos Assistant helps retrieve, summarize, and explain permitted records and policy rules, but it does not make binding approval decisions.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Basic setup can begin immediately with standard templates, while enterprise-grade jurisdiction mapping and approval topology depend on organization size and requirements.',
  },
];

export default function FaqAccordionSection() {
  // First item open by default to mirror original design screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <header className="max-w-[700px] text-center flex flex-col gap-2">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Timesheet Questions Answered
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Twelve Answers, No Guaranteed Outcomes
          </h2>
        </header>

        {/* FAQ Accordion List */}
        <div className="w-full max-w-[860px] border-t border-slate-200 dark:border-slate-800 divide-y divide-slate-200 dark:divide-slate-800">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg transition-colors group"
                >
                  <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.question}
                  </span>
                  
                  {/* Expand / Collapse Icon Pill */}
                  <span
                    className={`w-6 h-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center shrink-0 text-sm transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="pb-5 pr-8 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed transition-all">
                    {item.answer}
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