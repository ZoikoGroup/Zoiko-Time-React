"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does ZoikoTime verify time and attendance?",
    answer:
      "ZoikoTime combines captured time events with approved schedule, break, project, and policy context. Deterministic rules create a reviewable status. Missing or conflicting details are flagged neutrally, workers or authorized users can add context, and an authorized person approves the record before permitted downstream use.",
  },
  {
    question:
      "Can ZoikoTime verify attendance without monitoring screens or keystrokes?",
    answer:
      "Yes. Under any tier and any configuration, ZoikoTime does not collect screenshots, keystroke content, URL history, application names, or clipboard data, and it does not create an individual productivity score. Verification comes from captured time events, approved context, deterministic classification, worker input, and human review. These are product invariants, not optional settings.",
  },
  {
    question: "What happens when a record is incomplete?",
    answer:
      "It is flagged neutrally as Needs Context rather than treated as a finding. The notification states the exact issue, date and time, evidence considered, who can act, the due date, and the support route. The worker or context owner supplies what is missing, and an authorized reviewer decides. The record does not move downstream until the required controls are complete.",
  },
  {
    question: "Can workers see and correct their records?",
    answer:
      "Yes. A worker can add context, attach permitted evidence where supported, request a correction, and see status and history. Reviewer access is role-bound and least-privilege, with segregation of duties where required and no self-approval for sensitive cases. Before/after values, rule version, actors, timestamps, comments, approvals, and export impact are all preserved.",
  },
  {
    question: "Does ZoikoTime automatically discipline workers or decide wages?",
    answer:
      "No. ZoikoTime may present a record state, conflict, missing input, or anomaly for review, but it does not determine misconduct, payroll outcomes, discipline, termination, or legal conclusions. An authorized person decides every consequential outcome. Accusatory labels are prohibited — states stay neutral, as in “Unverified Exit — Pending Review.”",
  },
  {
    question: "When is a record payroll-ready?",
    answer:
      "When all required review and approval controls are complete, the record reaches Approved and the downstream owner can release or retain it as the final record. An approved record that has not completed transfer shows as Export Pending / Failed, so the integration or ops owner can retry, correct the mapping, or escalate.",
  },
  {
    question: "How are meal and rest breaks handled?",
    answer:
      "Meal and rest are separate customer-facing categories rather than one combined state. Start/end, duration, source, edits, and sync status are captured; missing, short, overlapping, or conflicting context is flagged neutrally; and an authorized person reviews the context and records rationale before approved break records support payroll or compliance. ZoikoTime configures and evidences policy workflows; it does not provide legal advice or guarantee compliance in any jurisdiction.",
  },
  {
    question: "Can ZoikoTime support global and distributed workforces?",
    answer:
      "Yes. Records are normalized for time zone, duplicates, sync, ordering, and calendar context before classification, and policy is applied through effective-dated, versioned rules with an approved jurisdiction scope. Confirm the jurisdictions and deployment details you need with the ZoikoTime enterprise team during evaluation.",
  },
  {
    question: "What systems can ZoikoTime connect to?",
    answer:
      "Connector areas cover identity and SSO, HRIS worker master, scheduling, payroll, project and ERP cost context, and BI or audit export. Each connector states its direction, supported objects, status, owner, and known limitations. “Connects with” is used only for production-supported connectors; “Export options” covers documented generic file/API methods.",
  },
  {
    question: "How quickly can an organization implement ZoikoTime?",
    answer:
      "Implementation runs through six stages — discovery, data and policy mapping, configuration and integration, pilot, readiness and rollout, then operate and improve — each with its own exit evidence. Timing depends on the systems in scope, the number of populations and jurisdictions, and the pilot outcome, so confirm a schedule with the ZoikoTime enterprise team.",
  },
];

export default function VerifyFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full overflow-hidden bg-[#F6F9F9] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[700px] flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Questions
          </p>

          <h2 className="text-center text-3xl font-bold leading-tight text-[#0E1F3D] dark:text-white sm:text-4xl">
            Verify time &amp; attendance — answered
          </h2>

        </div>

        {/* Questions */}
        <div className="mx-auto mt-10 flex w-full max-w-[880px] flex-col gap-2.5">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-[#E4E9EE] bg-white shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950"
              >

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left"
                >

                  <span className="text-sm font-bold leading-6 text-[#0E1F3D] dark:text-white">
                    {faq.question}
                  </span>

                  <span
                    className={`shrink-0 text-lg font-normal leading-none text-[#10A28D] transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>

                </button>

                {isOpen ? (
                  <p className="px-5 pb-5 text-xs font-normal leading-6 text-[#6B7785] dark:text-slate-400">
                    {faq.answer}
                  </p>
                ) : null}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
