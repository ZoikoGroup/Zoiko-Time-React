'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What can workers see in ZoikoTime?',
    answer:
      "A role-appropriate view of their own record: the recorded time or attendance context, current state, source summary, applicable policy explanation, review status, correction history, and the available next action — plus who is responsible for the next decision. Exact fields depend on the organization's configuration and applicable law.",
  },
  {
    question: 'Can workers correct time records?',
    answer:
      'A worker can request a correction or add permitted context where the organization has configured it. The request itself does not change the governing record — an authorized workflow does. Before submitting, the flow shows which field is affected, the proposed value, who will see it, and the option to save a draft instead.',
  },
  {
    question: 'What happens after a correction request?',
    answer:
      'It moves through named states — submitted, information requested, then an outcome — and the worker can follow the status throughout. Every outcome shows the authorized role that decided, the reason, any conditions, the resulting record version, and the escalation route if the worker disagrees.',
  },
  {
    question: 'Does acknowledgement mean agreement?',
    answer:
      'No. Where acknowledgement is enabled it means one thing only: you have seen this notice. It is never silently consent, agreement with the record, admission of anything, waiver of a right, withdrawal of a correction request, or acceptance of a consequential decision — and that meaning is stated on the control itself.',
  },
  {
    question: 'Does ZoikoTime monitor screens or keystrokes?',
    answer:
      'No. There are no screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection, at any tier or configuration, and no individual productivity score is created. Nothing that does not exist can appear in a record or an export.',
  },
  {
    question: 'Who decides a time correction?',
    answer:
      'An authorized person. Deterministic rules organize configured context and route work, but consequential outcomes are decided by a named role with a stated authority scope. There is no AI verdict and no system judgment, and the record names who holds the next decision.',
  },
  {
    question: 'What if the source data is missing?',
    answer:
      'It is shown as a system condition, not a worker condition. A missing calendar, access, device, or integration context is not automatic evidence of absence or non-work — the record states the limitation and explains why the detail is absent.',
  },
  {
    question: 'Does a corrected record mean my pay is fixed?',
    answer:
      'No. A corrected record is not the same as a downstream system receiving the update, and a receipt is not proof the target accepted the expected value. The worker-visible wording is “downstream update pending” — never “payroll corrected” unless acceptance and reconciliation are genuinely confirmed.',
  },
  {
    question: 'What if I cannot use the standard flow?',
    answer:
      'An accessible alternative is available where the standard flow is a barrier, and an unresolved barrier stays visible rather than hidden. Help, Privacy, and Accessibility routes reach a person — never a sales route.',
  },
];

export default function WorkerRecordQuestions() {
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
          Worker record questions
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
                  <span className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-bold group-hover:text-[#2e8b57] dark:group-hover:text-green-400 transition-colors pr-4">
                    {item.question}
                  </span>

                  {/* Toggle Indicator */}
                  <div className="h-6 w-6 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900 flex items-center justify-center shrink-0">
                    <span className="text-[#2e8b57] dark:text-green-400 text-sm font-bold leading-none select-none">
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
