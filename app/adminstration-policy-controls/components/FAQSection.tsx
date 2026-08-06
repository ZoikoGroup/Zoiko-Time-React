'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Does ZoikoTime decide policy outcomes?',
    answer:
      'No. ZoikoTime applies deterministic rules configured strictly by your administrators. It does not decide or impose employment, legal, or policy outcomes on its own.',
  },
  {
    id: 'faq-2',
    question: 'Is policy classification AI?',
    answer:
      'No. Policy classifications are policy-bound and reviewable rules configured by administrators, never opaque AI scoring or automatic decision algorithms.',
  },
  {
    id: 'faq-3',
    question: 'Who can change a policy?',
    answer:
      'Only authorized roles with specific policy management permissions can propose, review, or approve changes following your organization’s change control workflow.',
  },
  {
    id: 'faq-4',
    question: 'Does administration involve monitoring workers?',
    answer:
      'No. Administration never means surveillance. ZoikoTime does not collect screenshots, keystroke logs, URL history, application usage, or clipboard contents under any tier.',
  },
  {
    id: 'faq-5',
    question: 'Can we roll back or supersede a policy version?',
    answer:
      'Yes. Policy versions have effective dates, precedence, and superseded history. Nothing is silently overwritten, and prior versions remain archived in audit history.',
  },
  {
    id: 'faq-6',
    question: 'Does ZoikoTime guarantee compliance?',
    answer:
      'No software can guarantee total legal compliance. ZoikoTime provides the deterministic execution, audit records, and governance controls to help your team stay compliant.',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-950 font-['Poppins',sans-serif]">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Questions
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 sm:text-4xl dark:text-white">
            Administration &amp; Policy Controls — answered
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 transition-all dark:border dark:border-gray-800 dark:bg-gray-900 dark:outline-none"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                >
                  <span className="pr-4 text-base font-semibold text-slate-800 dark:text-gray-100">
                    {item.question}
                  </span>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-teal-600 dark:text-teal-400">
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </div>
                </button>

                {/* Expanded Answer Content */}
                {isOpen && item.answer && (
                  <div className="px-5 pb-5 pt-0 text-sm font-normal leading-relaxed text-gray-600 dark:text-gray-400 border-t border-slate-100 dark:border-gray-800 mt-1 pt-3">
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