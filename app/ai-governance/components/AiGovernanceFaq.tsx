"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Plus, X } from "lucide-react";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Does ZoikoTime use AI to classify time?",
    answer:
      "No. Time classification is deterministic and policy-bound — versioned rules producing repeatable output from the same governed inputs, with the rule version, inputs, and reason exposed. Approved machine learning may flag anomalies or source-quality concerns for human review, but that is a separate capability with a separate authority class.",
  },
  {
    question: "Can AI decide payroll or discipline?",
    answer:
      "No. Consequential decisions are prohibited for autonomous AI: payroll, discipline, employment, legal, eligibility, or comparable outcomes always require an authorized human decision. Autonomous approval of any kind sits at tier G4 with no release path — not configurable, not on a roadmap, not an enterprise add-on. Each human-only outcome requires reviewer eligibility, separation of duties, evidence access, a reason, notification, a challenge route, and preserved history.",
  },
  {
    question: "What does Kairos do?",
    answer:
      "Kairos retrieves, summarizes, and explains governed data within the requester's existing permissions — governed AI assistance at tier G1, with Inform, Suggest, and Draft authority only. It cannot expand permissions or invent a source, and it carries no completeness or legal-correctness guarantee. Its output is source-linked, reviewable, and non-authoritative.",
  },
  {
    question: "Does ZoikoTime monitor screenshots or applications?",
    answer:
      "No screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection under any tier or configuration. Emotion, mood, personality, intent, loyalty, and honesty inference are prohibited, as are productivity-worth or protected-trait inference, covert ranking or hidden risk scores, and face recognition, voiceprint identification, or biometric categorization. These are not gaps awaiting a roadmap.",
  },
  {
    question: "How are AI-assisted uses evaluated?",
    answer:
      "Across ten dimensions — task quality, groundedness, failure modes, fairness, privacy, security and abuse, robustness, accessibility, human factors, and misuse — against an evaluation plan created before anyone relies on an outcome metric, so thresholds are not chosen to fit the result. Results carry one of six states, and \"passed\" always means passed within scope.",
  },
  {
    question: "Can a worker challenge an AI-assisted output?",
    answer:
      "Yes, and through the interface rather than through policy alone. A person can inspect inputs and limitations, question the output, correct the record through the governed correction path with the original preserved, reject a flag or draft with a reason recorded, escalate to an independent reviewer, and report a concern about the AI-assisted output itself. No language pressures a reviewer to accept a system output, and a human alternative is never concealed.",
  },
  {
    question: "Does ZoikoTime guarantee AI compliance or fairness?",
    answer:
      "No. No universal fairness claim is made: groups and contexts are selected only where legally, ethically, and analytically supportable, and sample, method, limitations, and excluded populations are reported. Guaranteed compliance conclusions, unsupported legal advice, and claims of human-judgment equivalence are prohibited. Absence of evaluation is never treated as absence of risk.",
  },
  {
    question: "How are model and provider changes governed?",
    answer:
      "A provider change is a governance event. Re-evaluation is triggered by a model, provider, or tool change; a source, permission, or retention change; a purpose, scope, or authority-class change; a region or data-handling change; drift-like behavior or an incident; a legal, contractual, or policy change; or a review date. Conditional approval carries an automatic suspension trigger — if the condition lapses, the capability suspends itself rather than quietly continuing.",
  },
];

const ctas = [
  { label: "Explore Governed Uses", href: "#capability-register", primary: true },
  { label: "Human-in-Command Controls", href: "/human-in-command" },
  { label: "Request AI Governance Review", href: "#request-governance-review" },
  { label: "Enterprise Support", href: "/enterprise-support" },
];

export default function AiGovernanceFaq() {
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
            Eight AI Questions
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
        <div className="mx-auto mt-8 flex w-full max-w-[900px] flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center">

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
