"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "Does ZoikoTime take screenshots or monitor applications?",
    answer:
      "No screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection under any tier or configuration. There is no plan, setting, or contract that enables it.",
  },
  {
    question: "Does AI decide time classifications or employment outcomes?",
    answer:
      "No. Deterministic Time Classification is a policy-bound rule engine with versioned rules and reviewable outputs — it is not labelled AI, because calling a rule engine AI invites trust it has not earned. Approved machine learning may flag anomalies or signal-quality concerns for human review, and Kairos retrieves, summarizes, and explains governed data. Neither determines time categories, compliance, misconduct, payroll, or employment outcomes.",
  },
  {
    question: "How can a worker review or correct a record?",
    answer:
      "Workers can see the records that describe their work, understand what a status means and which policy version applied, request a correction, and escalate. Those routes are product behavior, not a policy promise. A flag is evidence for review, never a finding about a person, and consequential payroll, discipline, employment, or legal outcomes are made by authorized people outside automatic classification.",
  },
  {
    question: "Where can I review security and privacy information?",
    answer:
      "Public summaries sit on this page, with the detail on the Security and Privacy destinations. Six control categories are summarized here with scope, owner, last-reviewed date, and status. Internal architecture, secrets, and full control test results are not published; those use the controlled request pathway.",
  },
  {
    question: "What do “Current” and “Under Review” mean?",
    answer:
      "Current means the claim is approved and production-ready, with evidence, scope, owner, and dates attached. Under review means the wording or scope is being reconfirmed and the prior version has been superseded. A prepared wireframe does not make a destination current — evidence-gated items say so plainly rather than appearing as if they were published.",
  },
  {
    question: "How can my organization request controlled evidence?",
    answer:
      "Use the Request Security Review route on this page. Identity, purpose, and entitlement determine access level — not your email domain and not a lead score. Approved artifacts use secure delivery with expiry, revocation, and audit, and there is no automatic disclosure based on email domain alone. No response time is promised, because no SLA is approved for that route.",
  },
  {
    question: "Where can I see incidents and maintenance?",
    answer:
      "Incidents, maintenance, component state, subscriptions, and history route to the authoritative live status source. This page does not duplicate live state, because a copy of live state is a second source that can disagree with the first.",
  },
  {
    question: "Does ZoikoTime guarantee compliance, data residency, or uptime?",
    answer:
      "No. We do not publish certifications, audit opinions, SLAs, uptime percentages, residency promises, or jurisdictional compliance claims without current evidence, scope, dates, owner, and approval. Data location is assessed region by region — there is no blanket global-residency claim and there will not be one. Platform Reliability stays evidence-gated until maintained SLO definitions, measurement method, history, and ownership exist.",
  },
];

export default function TrustFaq() {
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
            Eight High-Intent Trust Questions
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

      </div>
    </section>
  );
}
