"use client";

import { useState, type ReactNode } from "react";
import { Plus, X } from "lucide-react";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "How do Zoiko Sema and ZoikoTime work together?",
    answer:
      "They are independent products connected through an optional, customer-configured bridge using approved workspace mapping, governance controls, context scope, human review, and audit history. Each remains fully useful without the other.",
  },
  {
    question: "Is ZoikoTime included with Zoiko Sema?",
    answer:
      "No. Both products are separately licensed, and the integration is a separately qualified capability on top of that. Having both products does not mean the bridge is available to you — eligibility also depends on your plan and contract, enterprise setup, region and product status, named administrator authority on both sides, and completed governance review.",
  },
  {
    question: "What information is shared?",
    answer:
      "Only categories on the approved context scope registry: meeting context such as occurrence, scope, and owner; decisions recorded in an approved space; actions and owners from an approved space; and approved AI-generated summaries as reviewable drafts requiring human review. Message content and full communication streams, file content and attachments, and user activity monitoring of any kind are excluded or prohibited. A category absent from the registry is excluded by definition.",
  },
  {
    question: "Does the integration export every message or meeting?",
    answer:
      "No. There is no universal export. Unmapped workspaces and unapproved or excluded categories remain outside the connection entirely — there is no partial or metadata-only leakage from an unmapped workspace. An unmapped workspace is not connected in any sense.",
  },
  {
    question: "Does it monitor employees?",
    answer:
      "No. There are no screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection under any tier or configuration. Managers see queue state rather than behavioral profiles of their team, and nobody gets a ranking, a productivity score, or an activity feed — those do not exist in this product.",
  },
  {
    question: "Can meeting duration become time worked automatically?",
    answer:
      "No. Meeting presence or duration is context, not automatic time, attendance, payroll, performance, or compliance truth. ZoikoTime rules, review, correction, and human approval remain authoritative — a calendar entry has never been evidence of work performed.",
  },
  {
    question: "How are AI summaries or actions handled?",
    answer:
      "As a draft until a person owns it. The record states status, source references, generation time, reviewer, whether it was edited, retention, and limitations — and a draft has no downstream effect. No AI-generated output may automatically determine hours, attendance, breaks, payroll, performance, misconduct, discipline, employment status, legal status, or compliance. A reviewer must verify source, accuracy, completeness, attribution, context, sensitivity, permitted purpose, and destination effect before approval.",
  },
  {
    question: "Can administrators control which workspaces connect?",
    answer:
      "Yes, and nothing is mapped by default. An authorized administrator selects which workspaces connect and to which organizational scope, recording workspace, owner, destination unit, effective dates, and ownership. Overlapping or ambiguous mappings must be resolved before activation, and the bridge cannot widen itself — no prompt, request, or integration behavior expands the approved scope.",
  },
  {
    question: "What can workers or participants see?",
    answer:
      "Approved notices where the integration affects a worker-facing record or workflow, issued before first exchange; which workspace, category, purpose, and policy version applied; a correction route with human review and escalation where a correction is declined; and a named support route for questions about the integration itself. Visibility never exposes another worker's data.",
  },
  {
    question: "How is the integration set up?",
    answer:
      "Through ten stages before first exchange: confirm eligibility, establish authority, define purpose and scope, design mapping, configure governance, authorize connection, test safely, review and accept, activate and communicate, then stabilize and govern. Acceptance requires validating denied cases, excluded categories, permission errors, and retry behavior — not only the happy path — using approved non-production, synthetic, or controlled data rather than live worker records.",
  },
  {
    question: "What happens when the connection fails?",
    answer:
      "Uncertain context is quarantined rather than passed along, so a failure cannot become a workforce record by default. Quarantine preserves source, reason, owner, review, and expiry — nothing is discarded and nothing proceeds. Reconciliation compares source, bridge record, destination status, version, review outcome, downstream effect, and corrective action, and conflicts are never silently overwritten.",
  },
  {
    question: "Which plans and regions support it?",
    answer:
      "That depends on your current agreement and product status, and this page cannot confirm it. Region and product availability, plan and contract eligibility, enterprise setup, and support model are all separately confirmed. Check current pricing or request enterprise evaluation — nothing here should be read as confirming availability for your organization.",
  },
  {
    question: "Where can security and privacy evidence be reviewed?",
    answer:
      "Through the Trust Center as the entry point, with Security, Privacy, AI Governance, Human-in-Command, Data Location, Accessibility, and System Status each holding their own scope. Jurisdiction and data-location treatment is qualified against your contract and configuration, never asserted, and this page makes no residency guarantee for any region.",
  },
  {
    question: "Where do existing customers get help?",
    answer:
      "Through integration settings, documentation, service status, product updates, contact support, and enterprise support. Pause, disable, and decommission are supported operations with their own evidence and notice requirements — not hidden settings. Decommissioning the bridge does not delete records already created in ZoikoTime under policy.",
  },
];

export default function IntegrationFaq() {
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
            Fourteen Integration Questions
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
