'use client'
import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: 'What is Kairos Assistant?',
    answer:
      'A permission-bound surface that retrieves, summarizes, and explains governed ZoikoTime organization data — showing the scope, source, timing, completeness, and limitations behind every answer. It decides nothing.',
  },
  {
    question: 'What information can Kairos use?',
    answer:
      'Kairos only accesses explicitly approved and permission-bound ZoikoTime workforce records and connected organization sources configured by your administrators.',
  },
  {
    question: 'Does Kairos classify time?',
    answer:
      'No. Time classification, policy application, and categorization remain within governed ZoikoTime workflows and authorized administrator rules.',
  },
  {
    question: 'Can Kairos approve timesheets or change records?',
    answer:
      'No. Kairos is strictly read-only and analytical. Approval authority and record modifications stay with designated managers and system owners.',
  },
  {
    question: 'Can Kairos calculate payroll or decide compliance?',
    answer:
      'No. Kairos provides context and information explanations. Payroll calculations, legal determinations, and compliance decisions remain under human authority.',
  },
  {
    question: 'Does Kairos monitor workers?',
    answer:
      'No. Kairos does not capture screenshots, keylogs, URL histories, or clipboard data. It operates strictly on authorized system activity records.',
  },
  {
    question: 'Can workers see and correct their records?',
    answer:
      'Yes. Workers maintain transparency over their records and can initiate standard review and correction requests through standard organizational workflows.',
  },
  {
    question: 'How does Kairos work with Zoiko Sema?',
    answer:
      'Zoiko Sema integration is optional and permission-bound. Communication context never becomes time worked and is strictly separated from automated tracking.',
  },
  {
    question: 'Which plans, regions, languages, sources, or models are supported?',
    answer:
      'Supported sources, deployment regions, and language capabilities depend on your enterprise agreement and configured system scope.',
  },
  {
    question: 'How are questions and answers handled?',
    answer:
      'Questions and answers are processed securely within your organization’s defined privacy and data retention scope without training global models.',
  },
  {
    question: 'What happens when Kairos cannot answer?',
    answer:
      'When sufficient source evidence or permissions are missing, Kairos explicitly highlights the data limitation rather than inferring or hallucinating details.',
  },
  {
    question: 'Where can I review security, privacy, accessibility, and procurement information?',
    answer:
      'All compliance documentation, WCAG statements, privacy policies, and security architecture reports are available directly in our Trust Center.',
  },
];

export default function FaqSection() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[860px] mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <header className="max-w-[700px] text-center flex flex-col gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Kairos Questions Answered
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Twelve Answers, No Invented Capability
          </h2>
        </header>

        {/* FAQ Accordion List */}
        <div className="w-full border-t border-slate-200 dark:border-slate-800 divide-y divide-slate-200 dark:divide-slate-800">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full py-5 px-1 flex items-center justify-between text-left gap-4 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  
                  {/* Expand / Collapse Icon */}
                  <span className="shrink-0 w-7 h-7 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-sm font-bold transition-transform duration-200">
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? 'rotate-45' : 'rotate-0'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>

                {/* Collapsible Answer Panel */}
                {isOpen && (
                  <div className="pb-5 px-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed animate-fadeIn">
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