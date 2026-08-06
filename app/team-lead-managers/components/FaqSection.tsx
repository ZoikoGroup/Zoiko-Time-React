'use client'
import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer?: string;
}

const faqData: FaqItem[] = [
  {
    question: 'What is ZoikoTime for team leads and managers?',
    answer:
      'ZoikoTime provides team leads and managers with verified time, attendance, project, exception, and approval records. It helps teams see what is complete, what needs review, who owns the next action, and whether records are ready for authorized downstream use.',
  },
  {
    question: 'Does ZoikoTime monitor employee screens or applications?',
    answer:
      'No. ZoikoTime focuses exclusively on workflow completeness and verified time records, not invasive surveillance, screen captures, or keylogging.',
  },
  {
    question: 'Does ZoikoTime measure worker productivity?',
    answer:
      'No. All metrics track process completeness, exception rates, and approval turnarounds—focusing entirely on workflow health rather than individual worker productivity scores.',
  },
  {
    question: 'How are incomplete time or attendance records handled?',
    answer:
      'Incomplete records are flagged automatically as exceptions and routed to the designated owner or team lead with clear action items to ensure timely resolution.',
  },
  {
    question: 'Can workers correct a record?',
    answer:
      'Yes. Workers can submit correction requests directly within the platform, which are then logged with full audit history and sent to managers for review.',
  },
  {
    question: 'Does AI decide whether a worker was productive or compliant?',
    answer:
      'No. AI is only used to assist with data validation, anomaly detection, and routing. Final decisions always rest with human managers and team leads.',
  },
  {
    question: 'Can ZoikoTime support remote, hybrid, and contractor teams?',
    answer:
      'Yes. ZoikoTime is built to seamlessly manage flexible schedules, location-independent check-ins, and multi-tier contractor approvals.',
  },
  {
    question: 'Can ZoikoTime connect to payroll, billing, or ERP systems?',
    answer:
      'Yes. ZoikoTime integrates via pre-built connectors and APIs to feed approved records directly into major payroll, invoicing, and ERP platforms.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Implementation follows a 4-phase rollout plan tailored to your team size, integrations, and governance requirements.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'Pricing is transparently structured based on active user tiers and required enterprise integration modules, without hidden fees.',
  },
];

export default function FaqSection() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Header Section */}
        <div className="max-w-[700px] text-center flex flex-col items-center gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Team Lead and Manager Questions Answered
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Straight Answers Before You Book<br className="hidden sm:inline" /> Anything
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full max-w-[860px] border-t border-slate-200 dark:border-slate-700 divide-y divide-slate-200 dark:divide-slate-700">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-2 flex justify-between items-center text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors pr-4">
                    {item.question}
                  </span>
                  
                  {/* Plus / Minus Icon Toggle */}
                  <span className="w-7 h-7 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400 font-bold transition-transform">
                    {isOpen ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Accordion Content */}
                {isOpen && item.answer && (
                  <div className="pt-2 pb-3 pr-8">
                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                      {item.answer}
                    </p>
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