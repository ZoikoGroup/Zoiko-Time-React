'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Do I have to fill in a form to see security evidence?',
    answer:
      'No. Public evidence is available in the Trust Center without submitting a security-review form, and without an account, login, or chat gate. Controlled and customer-specific artifacts may require an approved access process — but public evidence is never withheld to capture a lead.',
  },
  {
    question: 'Why is some evidence controlled rather than public?',
    answer:
      'Because publishing it would itself create risk, or because it belongs to a specific engagement. Exploitable test detail, restricted topology, credentials, thresholds, and tenant configuration stay unpublished by policy; questionnaire responses and contractual artifacts are engagement-specific. The reason is what the artifact contains, not how qualified the reader is as a prospect.',
  },
  {
    question: 'Does “Current” mean ZoikoTime is secure and compliant?',
    answer:
      'No. A record proves only what its stated type, scope, period, method or authority, status, and limitations support. “Current” does not mean globally secure, compliant with every law, suitable for every deployment, or effective in every customer configuration. Each record publishes what it does not prove for exactly this reason.',
  },
  {
    question: 'Why don’t I see certification logos?',
    answer:
      'A logo is not evidence. An issuer name or mark appears only alongside the exact verified name, scope, period, and status of a current artifact. Where that evidence is not current and verified, no logo is shown — and a scope broader than the underlying report supports is never claimed.',
  },
  {
    question: 'What does “Under review” mean on a record?',
    answer:
      'Currency or scope is being re-evaluated, and the record must not be presented as current while that is true. The record stays visible with the review stated and its limitation published, rather than being quietly removed or held under a “Current” badge indefinitely.',
  },
  {
    question: 'What happens to withdrawn claims?',
    answer:
      'The positive claim is removed from evidence listings, search, and structured data, and the replacement is shown where one is approved. A neutral withdrawal notice remains for transparency, with the withdrawal date and reason. A stale claim is never left to persist in cache or schema.',
  },
  {
    question: 'Can I get answers to our security questionnaire here?',
    answer:
      'No. Questionnaire responses are engagement-specific and are never published as a searchable public answer set. They are routed through the approved procurement pathway, where identity, purpose, and entitlement are established first.',
  },
  {
    question: 'What if the evidence directory is down?',
    answer:
      'The page says so and offers retry, alongside Security, System Status, and Help routes. Trust content, evidence metadata, links, and public files are server-rendered, so they remain usable without JavaScript. There is never a blank directory, never a default-green card, and never a fallback to a sales form.',
  },
];

export default function EvidenceAccessQuestions() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 px-4 py-14 sm:px-6 lg:px-8 lg:py-20 transition-colors duration-200">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 sm:gap-10">

        {/* Section heading */}
        <h2 className="text-center text-2xl font-bold leading-tight tracking-tight text-sky-950 dark:text-white sm:text-3xl md:text-4xl">
          Evidence access questions
        </h2>

        {/* Accordion list */}
        <div className="w-full divide-y divide-stone-200 border-t border-stone-200 dark:divide-slate-800 dark:border-slate-800">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={item.question} className="flex flex-col">

                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="group flex w-full items-center justify-between rounded-lg px-1 py-5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-expanded={isOpen}
                >

                  <span className="pr-4 text-sm font-bold text-sky-950 transition-colors group-hover:text-[#2e8b57] dark:text-slate-100 dark:group-hover:text-green-400 sm:text-base">
                    {item.question}
                  </span>

                  {/* Toggle indicator */}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/50">
                    <span className="select-none text-sm font-bold leading-none text-[#2e8b57] dark:text-green-400">
                      {isOpen ? '×' : '+'}
                    </span>
                  </span>

                </button>

                {isOpen && (
                  <div className="px-1 pb-5">
                    <p className="max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-slate-400">
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
