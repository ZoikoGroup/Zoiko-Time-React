"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is time and attendance software for HR teams?",
    answer:
      "Time and attendance software helps HR record, review, approve, and report work time, attendance, breaks, and related exceptions. ZoikoTime adds deterministic policy classification, evidence history, worker review, and human approval without invasive activity monitoring.",
  },
  {
    question: "How does ZoikoTime help HR and People teams?",
    answer:
      "It brings attendance, breaks, approvals, payroll inputs, corrections, and employee questions into one reviewable record. HR can review attendance status and schedule context from a single operational view, apply configured meal and rest policies, resolve corrections before downstream use, hand approved and traceable records to payroll, and manage remote and hybrid policy consistently.",
  },
  {
    question: "Does ZoikoTime take screenshots or record keystrokes?",
    answer:
      "No. ZoikoTime never collects screenshots or keystroke content, URL history or application names, clipboard data, webcam or microphone surveillance, or hidden background behavior scoring. These restrictions apply under every tier and configuration.",
  },
  {
    question: "Can workers see and correct their time records?",
    answer:
      "Yes. Authorized workers and managers can add context, request a correction, and resolve discrepancies before the record is used downstream. The record, its status, reason, and review path are made understandable to the worker, and every change is preserved as an append-only audit event.",
  },
  {
    question: "How does ZoikoTime handle attendance exceptions?",
    answer:
      "Exceptions are surfaced neutrally rather than treated as findings. Each one carries its policy classification, evidence, age, assigned reviewer, and any worker comment. The platform does not convert an anomaly flag into an accusation or a consequential employment decision — authorized people review the case.",
  },
  {
    question: "Can ZoikoTime support remote and hybrid workforces?",
    answer:
      "Yes. Role, location, schedule, and worker-type policy can be applied across office, remote, hybrid, and contractor work without monitoring screens, URLs, or application names. Schedule context is captured alongside the time event so hybrid working patterns stay interpretable.",
  },
  {
    question: "Does ZoikoTime integrate with payroll and HR systems?",
    answer:
      "Where supported, yes. Integration areas cover HR and people systems, payroll and finance, identity and access, calendars and communication, and documented APIs, webhooks, and export formats. Available integrations vary by plan and deployment, so enterprise buyers should confirm required systems during evaluation.",
  },
  {
    question: "How is AI used in ZoikoTime?",
    answer:
      "Time classification is deterministic and policy-bound rather than inferred, and it is explainable. Where AI features apply, they operate within approved scope — retrieving, summarizing, and explaining governed data — and they decide nothing. Authorized people make every consequential decision.",
  },
  {
    question: "Can ZoikoTime support multiple countries?",
    answer:
      "Policies can be configured by jurisdiction, location, role, schedule, and worker type while maintaining one governed record model, including time zones, calendars, approval authority, and versioned policy history with effective dates. Capabilities and service availability vary by jurisdiction, plan, and deployment — confirm requirements with the ZoikoTime enterprise team.",
  },
  {
    question: "Is ZoikoTime suitable for contractor-heavy organizations?",
    answer:
      "Yes. Attendance, breaks, approvals, and payroll inputs can be managed across office, remote, hybrid, and contractor work. Role, employment type, and contractor policy differences are configured explicitly rather than inferred, and each keeps its own approval authority and review routing.",
  },
];

export default function HrFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">

          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-600"
              aria-hidden="true"
            />
            <p className="text-xs font-bold uppercase leading-5 tracking-widest text-emerald-700 dark:text-emerald-400">
              HR Questions Answered
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>

        </div>

        {/* Questions */}
        <div className="mt-12">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-slate-200 dark:border-slate-800"
              >

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-1 py-5 text-left"
                >

                  <span className="text-base font-semibold leading-6 text-slate-900 dark:text-white">
                    {faq.question}
                  </span>

                  <span
                    className={`shrink-0 text-xl font-normal leading-8 text-emerald-700 transition-transform dark:text-emerald-400 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>

                </button>

                {isOpen && (
                  <p className="max-w-[900px] px-1 pb-5 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
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
