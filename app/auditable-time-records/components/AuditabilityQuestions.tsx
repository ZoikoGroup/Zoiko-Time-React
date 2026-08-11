"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What makes a time record auditable?",
    answer:
      "Source provenance, policy version, original and corrected values, actor and authority, approvals, notices, exports, and downstream status — all connected to one record history.",
  },
  {
    question: "Are ZoikoTime records immutable?",
    answer:
      "The original record history is preserved. Corrections do not silently overwrite prior values; changes are appended with the relevant reason, authority, and resulting state.",
  },
  {
    question:
      "Does an audit trail automatically make a record legally admissible?",
    answer:
      "No. An audit trail can provide useful evidence of provenance, history, and control, but legal admissibility depends on the applicable jurisdiction, rules of evidence, and surrounding circumstances.",
  },
  {
    question: "Can a time record be corrected without losing its history?",
    answer:
      "Yes. A correction can create a new version while preserving the previous state, the reason for the change, the actor, and any applicable notification or approval information.",
  },
  {
    question: "Can workers see changes to their records?",
    answer:
      "Workers can see the permitted history associated with their own records, including relevant changes, corrections, and outcomes according to their access rights.",
  },
  {
    question: "What is included in an evidence bundle?",
    answer:
      "An evidence bundle can include the relevant record, source provenance, policy version, lineage, correction and approval history, export manifest, and downstream reconciliation information.",
  },
  {
    question: "How are migrated records handled?",
    answer:
      "Migrated records retain available source and migration context. Imported or reconstructed information is distinguished so that its origin and completeness are not silently represented as original system events.",
  },
  {
    question: "Does auditability mean employee monitoring?",
    answer:
      "No. Auditability is focused on preserving accountable record history. It does not require productivity ranking, behavior scoring, surveillance, or punitive interpretation of employee activity.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation depends on the number of sources, integrations, policies, mappings, and downstream systems involved. The appropriate implementation scope can be established during an evaluation.",
  },
];

export default function AuditabilityQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-white py-12 transition-colors sm:py-16 lg:py-20 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 px-5 sm:gap-10 sm:px-6 lg:gap-11 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================= */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-4 pt-1 text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-[#3FB97A]" />

            <span className="text-xs font-bold uppercase leading-5 tracking-widest text-[#3FB97A]">
              Auditability Questions
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* =========================================================
            FAQ LIST
        ========================================================= */}
        <div className="w-full max-w-[820px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-slate-200 dark:border-slate-700"
              >
                {/* Question Button */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    min-h-[72px]
                    w-full
                    items-center
                    justify-between
                    gap-6
                    px-1
                    py-5
                    text-left
                  "
                >
                  {/* Question */}
                  <span className="min-w-0 flex-1 text-sm font-semibold leading-6 text-slate-900 sm:text-base dark:text-white">
                    {faq.question}
                  </span>

                  {/* Plus / Minus */}
                  <span
                    className={`
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      text-xl
                      font-normal
                      leading-8
                      text-[#16845A]
                      transition-transform
                      duration-200
                      dark:text-[#3FB97A]
                      ${isOpen ? "rotate-45" : "rotate-0"}
                    `}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-[grid-template-rows,opacity]
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="max-w-[700px] px-1 pb-5">
                      <p className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}