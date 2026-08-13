'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is an evidence bundle in ZoikoTime?',
    answer:
      'A purpose-bound package of permitted record evidence and context, with an inspectable manifest, pinned versions, inclusion and exclusion states, redactions, and lifecycle information. The manifest is the package contract — it is what makes the package reviewable rather than merely deliverable.',
  },
  {
    question: 'What can a bundle include?',
    answer:
      'Pinned record versions, source references, policy snapshots as they actually applied, corrections, approval decisions, notices, downstream status, applied filters, redaction categories, named unavailable items, the generator, time context, recipient, and package version. Everything requested is represented — including what could not be included.',
  },
  {
    question: 'Does a bundle prove a record is legally admissible or compliant?',
    answer:
      'No. A package supports review and export continuity. It is not a legal discovery package, statutory audit file, regulator submission, payroll filing, evidence certification, non-repudiation mechanism, or chain-of-custody guarantee, and a complete-looking manifest does not make an underlying fact correct.',
  },
  {
    question: 'Can a bundle hide missing evidence?',
    answer:
      'No. Each absent, restricted, redacted, stale, or conflicting item is named at safe detail with the reason it is out, and a bundle that lost an item during packaging is marked Partial rather than Ready. A manifest that hides what it could not include is worse than no manifest at all.',
  },
  {
    question: 'Which file formats can ZoikoTime export?',
    answer:
      'This page names none. Formats, schemas, checksums, signatures, encryption, watermarks, and archive containers are all gated on a capability registry, and a marketing page is not a registry. There are no placeholder formats and no “coming soon.”',
  },
  {
    question: 'Can a bundle be revoked after download?',
    answer:
      'Platform access can be revoked where supported, and revocation is recorded while the manifest stays historically attributable. But ZoikoTime cannot recall or erase copies already obtained outside its control — claiming a downloaded file can be un-downloaded would be false.',
  },
  {
    question: 'How are worker records protected?',
    answer:
      'Purpose limitation excludes items by rule rather than discretion, authorization is checked per role and per field server-side, sensitive content is masked by category, and every generation, access, and download is itself auditable. A generator cannot package what they could not view.',
  },
  {
    question: 'What happens if records change after preview?',
    answer:
      'The manifest becomes stale and requires revalidation. A changed version is never silently substituted into a confirmed package, because a package that quietly updated itself would describe something the reviewer never approved.',
  },
  {
    question: 'How is this different from the Evidence Ledger?',
    answer:
      'View Bundle is the focused packaging and export task. Evidence Ledger is the record-centred history and lifecycle authority. Asking either to do the other’s job produces a worse version of both.',
  },
];

export default function EvidenceBundleQuestions() {
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
          Evidence bundle questions
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
