'use client';

import React, { useState } from 'react';
import SectionEyebrow from './SectionEyebrow';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is ZoikoTime?',
    answer:
      'ZoikoTime creates deterministic, evidence-backed workforce records from approved time, attendance, policy, and review context — for payroll, billing, reporting, and audit workflows.',
  },
  {
    question: 'Is it employee-monitoring software?',
    answer:
      'No. There are no screenshots, keystroke capture, URL history, application-name monitoring, or clipboard collection, and no always-on GPS, webcam, biometric verification, or active/idle behavioral inference — at any tier or configuration.',
  },
  {
    question: 'Does it use AI to classify time?',
    answer:
      'No. Time classification is deterministic and rule-based: the same approved inputs and the same policy version produce the same result, and the rule and version that applied are recorded on the record.',
  },
  {
    question: 'Can workers correct records?',
    answer:
      'Workers can view their own record, understand its state in plain language, and propose a correction with context. Current and proposed values stay distinguishable, history is preserved, and an authorized person makes the decision.',
  },
  {
    question: 'What is Attendance & Presence?',
    answer:
      'Verified attendance states derived from approved source context — not inferred from behavior. A state such as “Present · verified” shows its source and review status rather than a confidence score.',
  },
  {
    question: 'Does ZoikoTime guarantee payroll accuracy or legal compliance?',
    answer:
      'No. ZoikoTime prepares, approves, and exports governed time records with their evidence. It does not perform gross-to-net payroll and does not by itself establish statutory compliance — configured policy and authorized human review remain the organization’s responsibility.',
  },
  {
    question: 'How do Zoiko Sema and Kairos work?',
    answer:
      'Zoiko Sema is an optional, permissioned connection. Kairos can retrieve, summarize, and explain governed organization data, always naming its sources and scope — and it decides nothing.',
  },
  {
    question: 'How long is the free trial?',
    answer:
      'You can start free and evaluate the product before committing. Current trial length, plan limits, and pricing are published on the pricing page rather than stated here.',
  },
  {
    question: 'Where are security, privacy, and accessibility details?',
    answer:
      'In the Trust & Governance routes above — security and access boundaries, privacy collection limits, anti-surveillance principles, human authority, AI governance, and live system status.',
  },
  {
    question: 'Where do customers get help?',
    answer:
      'Through the Help Center, product documentation, and support routes. Worker-facing help never routes to sales, and an accessible alternative is available where a standard flow is a barrier.',
  },
];

export default function ProductFaq() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white dark:bg-slate-950 pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-[860px] mx-auto flex flex-col items-center gap-8 sm:gap-10">

        {/* Header Section */}
        <div className="flex flex-col items-center gap-3.5 text-center">
          <SectionEyebrow centered>Frequently Asked</SectionEyebrow>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-10">
            Questions About ZoikoTime
          </h2>
        </div>

        {/* Accordion List */}
        <div className="w-full flex flex-col">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.question}
                className="flex flex-col border-b border-slate-200 dark:border-slate-800"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 flex items-start justify-between gap-4 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-base font-normal leading-6 text-emerald-700 dark:text-emerald-400 shrink-0 select-none"
                  >
                    {isOpen ? '×' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <p className="pb-5 pr-8 text-sm text-gray-500 dark:text-slate-400 leading-7">
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
