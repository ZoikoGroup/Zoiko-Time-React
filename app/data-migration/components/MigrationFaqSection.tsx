'use client'
import { useState } from 'react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is ZoikoTime Data Migration?',
    answer:
      'A governed service and product workflow for moving approved workforce records through source discovery, deterministic mapping, rehearsal, validation, reconciliation, controlled cutover, and evidence-preserving handover.',
  },
  {
    id: 'faq-2',
    question: 'Which systems can ZoikoTime migrate from?',
    answer:
      'ZoikoTime supports migration from major enterprise HRIS, payroll, and time-tracking platforms. Source capabilities are evaluated during discovery based on data structures and export options.',
  },
  {
    id: 'faq-3',
    question: 'Will ZoikoTime clean our data?',
    answer:
      'We provide automated validation checks and mapping transformation rules, but data ownership and approval of cleansed records remain with your governance leads.',
  },
  {
    id: 'faq-4',
    question: 'Can historical records be migrated?',
    answer:
      'Yes, historical balances, attendance logs, and timecard records can be included depending on the scope defined during your initial migration review.',
  },
  {
    id: 'faq-5',
    question: 'How is migration accuracy checked?',
    answer:
      'Accuracy is verified using deterministic reconciliation scripts, automated line-by-line validation rules, and human sign-off on rehearsal outputs.',
  },
  {
    id: 'faq-6',
    question: 'Can migration happen with no downtime?',
    answer:
      'Cutover windows are scheduled to minimize impact, with dual-run options or staged rollouts depending on your operational requirements.',
  },
  {
    id: 'faq-7',
    question: 'How are worker corrections handled?',
    answer:
      'Post-cutover adjustments follow formal correction lineage logging, retaining audit trails of original inputs, changes made, and approval identities.',
  },
  {
    id: 'faq-8',
    question: 'Is Data Migration included with ZoikoTime?',
    answer:
      'Data Migration services depend on scope, object complexity, and volume, as defined in your specific enterprise agreement.',
  },
  {
    id: 'faq-9',
    question: 'How do we start?',
    answer:
      'Request an enterprise review with a migration specialist to evaluate your source systems, timelines, and compliance needs.',
  },
];

export default function MigrationFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 px-4 py-16 font-sans text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-10">
        <header className="flex w-full max-w-[700px] flex-col items-center gap-3 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Migration Questions Answered
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Nine Answers, No Seamless Promises
          </h2>
        </header>

        <div className="w-full max-w-[860px] divide-y divide-slate-200 border-t border-slate-200 dark:divide-slate-800 dark:border-slate-800">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.id} className="py-2 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="group flex w-full cursor-pointer items-center justify-between gap-4 px-1 py-4 text-left focus:outline-hidden"
                >
                  <span className="text-base font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-slate-100 dark:group-hover:text-emerald-400">
                    {item.question}
                  </span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-base font-bold text-emerald-600 transition-transform duration-200 dark:border-slate-700 dark:bg-slate-800 dark:text-emerald-400">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="animate-fadeIn px-1 pb-4 pt-1 text-base leading-relaxed text-slate-600 dark:text-slate-300">
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
