'use client'
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Workforce Record Insights?",
    answer:
      "A governed way to understand patterns in approved workforce records. Each insight shows its definition, source scope, time window, policy and jurisdiction context, data quality, limitations, and review state. It informs human review — it does not rank workers or make decisions.",
  },
  { question: "Does ZoikoTime score employee productivity?" },
  { question: "What data is used?" },
  { question: "Can workers see their own insights?" },
  { question: "How is a metric calculated?" },
  { question: "Can two teams or regions be compared?" },
  { question: "Does an insight prove legal compliance?" },
  { question: "Can an insight automatically affect pay or discipline?" },
  { question: "How does Kairos work with insights?" },
  { question: "How does Evidence Ledger relate?" },
  { question: "Is Zoiko Sema required?" },
  { question: "What happens when data is missing or stale?" },
  { question: "Can insights be exported?" },
  { question: "How do we evaluate ZoikoTime?" },
];

export default function FAQSection() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 sm:gap-12">
        
        {/* Section Header */}
        <div className="max-w-2xl text-center flex flex-col gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider font-sans">
            Direct Answers
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-slate-50 leading-tight">
            Fourteen Insight Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="w-full border-t border-slate-200 dark:border-slate-800 divide-y divide-slate-200 dark:divide-slate-800">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="flex flex-col">
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-1 flex items-center justify-between text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-bold font-sans group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors pr-4">
                    {item.question}
                  </span>

                  {/* Toggle Indicator Icon */}
                  <div className="h-6 w-6 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 transition-transform duration-200">
                    <span className="text-emerald-600 dark:text-emerald-400 text-base font-bold leading-none select-none">
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {/* Accordion Content Panel */}
                {isOpen && (
                  <div className="pb-5 px-1 transition-all duration-200">
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-sans leading-relaxed max-w-3xl">
                      {item.answer ||
                        "Detailed documentation for this section is available in our product guide or enterprise documentation portal."}
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