"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "Can ZoikoTime automatically discipline or terminate a worker?",
    answer:
      "No. Disciplinary conclusions and employment decisions are human-only decision classes — there is no autonomous path to either, under any configuration. The product may hold evidence and support a workflow, but your organization's disciplinary, grievance, and employment processes remain yours to run, and ZoikoTime does not provide employment advice.",
  },
  {
    question: "Can ZoikoTime automatically change pay?",
    answer:
      "No. Payroll-impacting approval is a human-only decision class. Arithmetic and time calculation may be automated using versioned deterministic rules, and the inputs, formula, rounding, timezone, and limitations stay visible — but final approval or rejection of hours, breaks, adjustments, rates, or any record that materially changes pay requires an authorized person, with source lineage, rule version, reason, and correction history attached.",
  },
  {
    question: "Is Deterministic Time Classification AI?",
    answer:
      "No. It is rule-based, versioned, jurisdiction-aware, and traceable, with an explainable trace and a correction route on every output. Branding it as AI would invite people to trust it in ways a rule engine has not earned — and to distrust it in ways that would be equally wrong. It is called what it is.",
  },
  {
    question: "What can Kairos decide?",
    answer:
      "Nothing. Kairos retrieves, summarizes, and explains governed data within authorized permission, and its outputs are labelled and reviewable with confidence limitations stated. An evidence summary may be automated where approved, but source references, omissions, limitations, and human verification must remain visible. A generated draft is a draft until a person owns it.",
  },
  {
    question: "Can workers see and correct their records?",
    answer:
      "Yes. Notice carries plain-language status and outcome, source and reason within privacy boundaries, effective date and practical consequence, and the correction, challenge, escalation, and appeal options. A correction request identifies the disputed field and requested change, the original record stays visible in governed history, and the affected person receives status and outcome. Acceptance is never a condition of viewing or challenging an outcome.",
  },
  {
    question: "Does a flag prove misconduct or time theft?",
    answer:
      "No. A flag is evidence for review, not a decision. Fraud, time theft, misconduct, and non-compliant are never applied from a signal alone, and no negative presumption is hidden in an icon or a colour. Classifications, anomalies, exception states, scores, recommendations, and summaries cannot become automatic payroll, disciplinary, employment, or legal conclusions.",
  },
  {
    question: "Who can approve a consequential decision?",
    answer:
      "Someone currently eligible for that decision class, scope, entity, and jurisdiction, with no disqualifying conflict — a manager title alone is not authority. Separation-of-duties patterns cover self-approval, rule author versus decision reviewer, original versus appeal reviewer, evidence preparer versus final approver, and administrator versus audit. Expired, suspended, or conflicted delegation blocks the decision and routes to escalation rather than proceeding.",
  },
  {
    question: "Does human review guarantee a lawful or fair result?",
    answer:
      "No — it guarantees an accountable one. Evidence supports review; it does not prove legal sufficiency, and a well-formed reason does not either. This page describes how authority, evidence, notice, and appeal are governed in the product. It is not \"human in the loop\" as a slogan, and it does not claim that every product action requires manual review.",
  },
];

const ctas = [
  { label: "Explore Review Rights", href: "#review-rights", primary: true },
  { label: "Trust Center", href: "/trust-center" },
  { label: "Enterprise Support", href: "/enterprise-support" },
  { label: "Request Enterprise Demo", href: "/request-enterprise-demo" },
];

export default function AuthorityFaq() {
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
            Eight Questions About Authority
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

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50/40 text-emerald-800 dark:border-slate-700 dark:bg-slate-800 dark:text-emerald-400">
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

        {/* Routes */}
        <div className="mx-auto mt-8 grid w-full max-w-[860px] grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">

          {ctas.map((cta) => (
            <Link
              key={cta.label}
              href={cta.href}
              className={
                cta.primary
                  ? "inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-600"
                  : "inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
              }
            >
              {cta.label}
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}
