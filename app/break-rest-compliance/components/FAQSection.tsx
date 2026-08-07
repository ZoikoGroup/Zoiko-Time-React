'use client'
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer?: string;
}

const faqList: FAQItem[] = [
  {
    question: 'Is this a surveillance tool?',
    answer:
      'No. ZoikoTime records whether a configured break happened relative to policy — it does not track location, capture screen activity, or score productivity.',
  },
  {
    question: 'Does anything get auto-approved?',
    answer:
      'No, every exception requires a human reviewer to evaluate context and record an explicit decision note.',
  },
  {
    question: 'What happens if a worker misses a break?',
    answer:
      'The system automatically flags the break and routes it to the review queue so both worker and manager can add context.',
  },
  {
    question: 'Can a worker dispute their own record?',
    answer:
      'Yes, workers can view their full break history directly and submit a one-tap correction request with a note.',
  },
  {
    question: 'Does ZoikoTime guarantee legal compliance?',
    answer:
      'ZoikoTime provides accurate audit trails and rule enforcement, but compliance determinations remain with your legal and HR counsel.',
  },
  {
    question: 'Where do detailed evidence packs and documents live?',
    answer:
      'Full evidence catalogs, document exports, and customer-specific compliance packs live in our Evidence Center.',
  },
];

export default function FAQSection() {
  // Default first item to open as in the original layout mockup
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[756px] mx-auto flex flex-col gap-10">
        
        {/* Header Section */}
        <header className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center gap-2 justify-center">
            <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-sm" />
            <span className="text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 dark:text-white leading-tight max-w-[614px]">
            Questions we get from HR, legal, and workers.
          </h2>
        </header>

        {/* Accordion List Container */}
        <div className="w-full divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-5 transition-colors">
                {/* Accordion Question Button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                    {item.question}
                  </span>

                  {/* Toggle Plus/Minus Button Icon */}
                  <div className="w-5 h-5 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 text-slate-800 dark:text-slate-200 transition-colors">
                    {isOpen ? (
                      <svg
                        className="w-2.5 h-2.5 stroke-current"
                        fill="none"
                        viewBox="0 0 10 2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeWidth={1.5}
                          d="M1 1h8"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-2.5 h-2.5 stroke-current"
                        fill="none"
                        viewBox="0 0 10 10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeWidth={1.5}
                          d="M5 1v8M1 5h8"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Accordion Answer Content Panel */}
                {isOpen && item.answer && (
                  <div className="pt-3 pr-8 text-sm text-slate-500 dark:text-slate-400 leading-relaxed transition-all">
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