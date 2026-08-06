"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What is Global Deployment?",
    answer:
      "A governed process for scope, operability, local configuration, tests, approval, activation, and evidence. It is how a deployment becomes defensible before it becomes live.",
  },
  {
    question: "Is ZoikoTime available everywhere?",
    answer:
      "No, and we do not publish a country list. Availability is confirmed against your intended deployment scope across six dimensions assessed separately — technical, contractual, legal and privacy, documentation, monitoring and operations, and commercial. A passing technical status does not make a region available, and interest, locale, or IP address never implies commercial eligibility. Where a location has not been assessed, the answer is “not assessed”, with a named owner and a route to a verified response.",
  },
  {
    question: "Does ZoikoTime guarantee compliance?",
    answer:
      "No. This is a governed configuration workflow, not a compliance engine. Every jurisdiction profile carries an owner, a source, a version, an effective date, a review cadence, and written limitations. Where rules conflict, the platform records a neutral conflict state and blocks activation where required — it never selects a “more compliant” value on its own. Entity or address data never automatically determines law, policy, data location, or commercial availability: someone authorized decides, and the decision is recorded.",
  },
  {
    question:
      "How are data location, time zones, DST, localization, and local policy handled?",
    answer:
      "Each is a separate governed profile rather than one shared fact. Data categories resolve individually to an approved location profile with a purpose, an authority, and a review date. Time zone, DST, and calendar conventions are versioned, tested against an approved scenario suite, and explicitly owned — no rollout wave passes readiness until that suite succeeds or every exception is documented and accepted. Language packs release only with an owner, a version, a review date, a fallback, and quality evidence. Local policy applies through jurisdiction profiles with visible inheritance, exceptions, and precedence, so you can see which rule applies and why before activation.",
  },
  {
    question: "Does deployment mean employee monitoring?",
    answer:
      "No. Monitoring covers service, record, integration, support, and evidence quality. It never covers covert behavior or individual productivity, and no configuration changes that. There are no screenshots, no keystroke content, no URL history or application names, no clipboard collection, and no hidden productivity scores. Flags and anomalies are evidence for review, not findings, and authorized people make every consequential decision.",
  },
  {
    question: "Does this include implementation or migration services?",
    answer:
      "No. Deployment can identify migration dependencies, and a wave can be blocked until migration evidence and acceptance are complete — but that is not the same as offering a migration service, and this page does not offer one. Implementation Services and Data Migration remain separately gated and are absent as released offers until their own scope, capacity, entitlement, legal, documentation, support, and QA gates pass.",
  },
];

export default function DeploymentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
            Deployment Questions Answered
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Six Answers, No Overclaim
          </h2>

        </div>

        {/* Questions */}
        <div className="mx-auto mt-12 w-full max-w-[860px] border-t border-stone-200 dark:border-slate-800">

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

                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50/40 text-emerald-800 dark:border-slate-700 dark:bg-slate-800 dark:text-emerald-400">
                    {isOpen ? (
                      <X size={14} strokeWidth={2.5} />
                    ) : (
                      <Plus size={14} strokeWidth={2.5} />
                    )}
                  </span>

                </button>

                {isOpen && faq.answer && (
                  <p className="px-0.5 pb-6 text-base font-normal leading-6 text-zinc-700 dark:text-slate-300">
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
