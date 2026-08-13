'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Does ZoikoTime monitor screens or activity?',
    answer:
      'No. There are no screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection, and no individual productivity score. What is collected is time, attendance, schedule, project attribution, and review context — the records needed to run work fairly.',
  },
  {
    question: 'Can workers see their own data?',
    answer:
      'Yes. Workers get a role-appropriate view of their own records, including the policy version that applied, the current review state, and how to request a correction or add context. Consequential decisions stay with authorized people.',
  },
  {
    question: 'Where is data located, and is it region-specific?',
    answer:
      'Data location and residency are configured per organization rather than stated as a single global answer here. Our Data Location & Residency material sets out the available regions, processors, and transfer context — and a privacy review can confirm what applies to your workspace.',
  },
  {
    question: 'Do you use AI to decide things about people?',
    answer:
      'No. Time classification is deterministic and rule-based, not AI. Where AI assists, it is limited to bounded clerical tasks; humans decide legal and privacy applicability, remedy, restrictions, and closure. There is no privacy-risk, worker-risk, or lead score.',
  },
];

export default function PrivacyFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-50 dark:bg-slate-900 py-16 sm:py-20 px-4 sm:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-3">

        {/* Header Section */}
        <span className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
          Privacy FAQ
        </span>
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white leading-10">
          Common privacy questions
        </h2>

        {/* Accordion List */}
        <div className="pt-1 w-full max-w-[820px] flex flex-col gap-3">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.question}
                className="bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-xl font-semibold leading-9 text-teal-600 dark:text-teal-400 shrink-0 select-none"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <p className="px-5 pb-4 text-sm text-gray-500 dark:text-slate-400 leading-6">
                    {item.answer}
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
