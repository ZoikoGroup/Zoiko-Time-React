'use client'
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What are ZoikoTime Implementation Services?',
    answer:
      'A governed enterprise delivery model for planning, configuring, validating, launching, and handing over an approved ZoikoTime deployment. Exact scope and availability depend on current terms, capacity, readiness, dependencies, and the agreed engagement.',
  },
  {
    question: 'What does an implementation include?',
    answer:
      'Scope includes readiness assessments, configuration, integration testing, governance alignment, operational handover, and worker journey validations defined during qualification.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Durations vary based on organizational complexity, active workstreams, custom integration requirements, and readiness criteria.',
  },
  {
    question: 'Who owns implementation decisions?',
    answer:
      'Decisions are owned by authorized roles designated in the acceptance matrix, ensuring formal sign-offs at every governance gate.',
  },
  {
    question: 'Does implementation include data migration?',
    answer:
      'Data migration support depends on the qualified engagement terms and schema reconciliation requirements verified during setup.',
  },
  {
    question: 'How are workers protected?',
    answer:
      'Privacy-first principles guarantee evidence minimization, strict access controls, data redaction, and compliance with local labor protections.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'Formal operational handover transitions control to your internal team alongside runbooks, operational acceptance records, and ongoing support routes.',
  },
  {
    question: 'Is implementation available in every region?',
    answer:
      'Regional availability is evaluated during the sales qualification process based on compliance, language requirements, and capacity.',
  },
];

export default function ImplementationFAQ() {
  // First item open by default to match provided mockup structure
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10 px-4 sm:px-7">
        
        {/* Section Header */}
        <div className="max-w-[700px] text-center flex flex-col items-center gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Implementation Questions Answered
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Eight Answers, No Package Claims
          </h2>
        </div>

        {/* FAQ Accordion Container */}
        <div className="w-full max-w-[860px] border-t border-slate-200 dark:border-slate-700/80 divide-y divide-slate-200 dark:divide-slate-700/80">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="flex flex-col">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-0.5 flex items-center justify-between text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors pr-4">
                    {item.question}
                  </span>
                  
                  {/* Plus / Minus Indicator Button */}
                  <div className="w-6 h-6 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-colors group-hover:border-emerald-500">
                    <span className="text-emerald-600 dark:text-emerald-400 text-base font-bold leading-none">
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {/* Answer Collapsible Section */}
                {isOpen && item.answer && (
                  <div className="pb-5 pl-0.5 max-w-[680px] text-slate-600 dark:text-slate-300 text-base leading-relaxed transition-all">
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