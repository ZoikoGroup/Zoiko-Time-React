'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What should a time-record review history show?',
    answer:
      'What changed, who or what initiated the event, which authorized person reviewed or decided it, why the change occurred, which record version became effective, what notice was sent, and whether a later correction or supersession changed the outcome. ZoikoTime preserves those relationships without treating the timeline as proof of legal compliance or worker misconduct.',
  },
  {
    question: 'Can a timesheet correction preserve prior history?',
    answer:
      'Yes. A material correction creates a linked new version instead of editing the earlier one in place. The prior version stays accessible with its own state, and the new version carries a successor link, a reason category, and the authorized actor who applied it.',
  },
  {
    question: 'How can I see who approved a time record?',
    answer:
      'The decision event names the authorized role, the scope that authority covered, the decision time, the effective time, and whether separation of duties was satisfied. Service identities and system processes appear as themselves and are never shown as approvers.',
  },
  {
    question: 'What happens when an approved record is corrected later?',
    answer:
      'The approval stays historical. A later correction produces a new linked version with its own reason and effective time, and the earlier decision keeps a successor link rather than disappearing. Where the earlier version was already released externally, that release remains recorded at the version actually sent.',
  },
  {
    question: 'Does a notification prove acknowledgement?',
    answer:
      'No. Generated, sent, delivered, and acknowledged are separate states, and acknowledgement would still not be agreement. A decision remains valid whether or not its notice was acknowledged, and a delivery failure is shown as a failure with an owner rather than hidden.',
  },
  {
    question: 'Can a decision be reversed?',
    answer:
      'Where the workflow supports reversal, an authorized reversal is recorded as its own event with actor, reason, and effect. Where reversal is not supported — an external package already sent, for example — the history shows a compensating corrective event rather than implying that a rollback occurred.',
  },
  {
    question: 'What happens when an event arrives late?',
    answer:
      'It is inserted at its original event time with a late-arrival marker, and its receipt time is shown separately. The chronology you saw before it arrived is not silently rewritten, and where source clock precision is limited, the limitation is stated rather than exactness fabricated.',
  },
  {
    question: 'Is this an audit log, and does it prove compliance?',
    answer:
      'It is a review history that supports transparent review and accountable administration. It is not an immutability or admissibility claim, and a complete-looking timeline does not establish legal correctness, jurisdictional fairness, payroll sufficiency, motive, or misconduct.',
  },
];

export default function ReviewHistoryQuestions() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 sm:gap-10">

        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center text-slate-900 dark:text-white leading-tight">
          Review history questions
        </h2>

        {/* Accordion List */}
        <div className="w-full border-t border-slate-200 dark:border-slate-800 divide-y divide-slate-200 dark:divide-slate-800">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={item.question} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-1 flex items-center justify-between text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors pr-4">
                    {item.question}
                  </span>

                  {/* Toggle Indicator */}
                  <div className="h-6 w-6 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900 flex items-center justify-center shrink-0">
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold leading-none select-none">
                      {isOpen ? '×' : '+'}
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-5 px-1">
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-3xl">
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
