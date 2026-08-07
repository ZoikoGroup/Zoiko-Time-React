"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "Does ZoikoTime require works-council approval?",
    answer:
      "ZoikoTime cannot determine that. Requirements depend on jurisdiction, collective agreements, representative rights, purpose, and deployment scope. Employers should obtain independent advice — and nothing on this page should be read as concluding that consultation is or is not required.",
  },
  {
    question: "Does ZoikoTime take screenshots or monitor applications?",
    answer:
      "No. There are no screenshots, no keystroke content, no URL history, no application-name monitoring, and no clipboard collection — under any tier or configuration. This is a product invariant, not a setting, so there is no plan or option that turns it on.",
  },
  {
    question: "Does AI classify time or make employment decisions?",
    answer:
      "No. Deterministic Time Classification is policy-bound and reviewable, and it is not presented, branded, or sold as artificial intelligence. Approved ML may support anomaly or signal-quality review, and Kairos retrieves, summarizes, and explains governed data. Neither decides anything. Payroll, discipline, employment, scheduling, accommodation, legal, and labor-relations outcomes remain with accountable people.",
  },
  {
    question: "What data is collected, and why?",
    answer:
      "The data category and collection map sets out categories, sources, purposes, recipients, retention, and location context in one table, currently at version 6. Union membership, employee-representative status, protected activity, health, disability, beliefs, politics, ethnicity, and sexual orientation are never inferred from product or consultation data.",
  },
  {
    question: "How can workers see, correct, or challenge records?",
    answer:
      "Visibility, explanation, correction, challenge, representation, and escalation are product behavior rather than goodwill. Workers can see the records that describe their work, see what a status means and which policy applied, and use correction and challenge routes with human review. Which specific routes are available depends on your configuration.",
  },
  {
    question:
      "Can a representative body review these resources without buying anything?",
    answer:
      "Yes. Public resources are not gated. No ZoikoTime account, purchase, marketing consent, or acceptance of product terms is required. Controlled materials — primarily security detail — are released through a governed request route with a named owner, and detailed findings are never public.",
  },
  {
    question: "Does sending a pack complete consultation?",
    answer:
      "No. Delivery is not consultation, attendance is not agreement, and acknowledgment is not consent. A manifest makes a pack inspectable; it is not proof that consultation requirements were satisfied. We will not label a consultation Ready, Complete, Approved, Agreed, Consented, Compliant, or Legally Sufficient unless that exact term is supported for the jurisdiction, body, scope, and authority.",
  },
  {
    question: "How are commitments and rollout conditions tracked?",
    answer:
      "Each commitment carries a type, an accountable owner, a due date, an evidence reference, and a status. Rollout gates connect verified customer conditions to controlled configuration and deployment, and a blocked gate stops quiet activation. There is no hidden waiver and no unilateral bypass, and break-glass or exception use is attributable, limited, and reviewed.",
  },
  {
    question: "What changes can trigger reassessment?",
    answer:
      "Changes to purpose or use case, data category or source, collection method, recipient or retention, region or provider, integrations, models, rules or classification, roles, access or worker rights, and interface, reporting, incident or deployment scope. We do not automatically decide that a change is legally material — your rule determines whether it triggers review, notice, reconsultation, approval, pilot, or block.",
  },
];

export default function ConsultationFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Direct Answers
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Nine Questions Representatives Actually Ask
          </h2>

        </div>

        {/* Questions */}
        <div className="mx-auto mt-10 w-full max-w-[860px] border-t border-stone-200 dark:border-slate-800">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-stone-200 dark:border-slate-800"
              >

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-0.5 py-5 text-left"
                >

                  <span className="text-base font-bold text-sky-950 dark:text-white">
                    {faq.question}
                  </span>

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-stone-300 text-zinc-500 dark:border-slate-700 dark:text-slate-400">
                    {isOpen ? (
                      <X size={14} strokeWidth={2} />
                    ) : (
                      <Plus size={14} strokeWidth={2} />
                    )}
                  </span>

                </button>

                {isOpen && (
                  <p className="max-w-[700px] px-0.5 pb-6 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
                    {faq.answer}
                  </p>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
