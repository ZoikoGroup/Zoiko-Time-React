"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What does ZoikoTime collect, and what does it never collect?",
    answer:
      "It collects account and identity data, organization configuration, time and workforce records, device and service metadata, integration records, and support, audit and incident records — each for stated purposes. It never collects screenshots, keystroke content, URL history, application-name monitoring, or clipboard content, under any tier or configuration.",
  },
  {
    question: "Can workers see and correct their records?",
    answer:
      "Yes. A worker can see the permitted record with its source, timestamp, status, and relevant history, understand the policy and rule context behind it, ask for a correction or explanation, have it routed to an authorized reviewer with an escalation path, and see the outcome preserved without the original record being hidden. Correction rights and response obligations vary by role and jurisdiction, so we describe the route rather than guaranteeing every requested outcome.",
  },
  {
    question: "Who controls workforce data?",
    answer:
      "Your organization defines the permitted purposes and the instructions we act on, assigns roles, configures policy, issues worker notices, and holds the lawful and contractual context. ZoikoTime processes authorized data within that configured scope. Controller and processor terminology appears only where the applicable contract and jurisdiction support it, not as decoration.",
  },
  {
    question: "How long is data retained?",
    answer:
      "Schedules are record-type, purpose, customer, contract, and jurisdiction specific, with triggers such as account closure, record finalization, statutory period, support resolution, or an approved configuration change. There is no universal deletion deadline and no \"deleted everywhere immediately\" claim — deletion, anonymization, archive expiry, backup expiry, and legal hold are distinct outcomes with distinct timelines, and legal holds and security records survive ordinary user deletion by design.",
  },
  {
    question: "Does ZoikoTime use AI to make decisions?",
    answer:
      "No. Deterministic classification is a policy-bound rule engine with reviewable rules — it is not AI and is not described as AI anywhere in this product. Approved machine learning may flag anomalies or signal-quality concerns for human review, and Kairos retrieves, summarizes, and explains governed data within authorized scope. Neither decides anything. There is no automated employment, payroll, disciplinary, or legal decision, and no hidden workforce scoring or behavioral profiling.",
  },
  {
    question: "Where is data processed?",
    answer:
      "Primary processing location, backup and DR location, support access, provider location, and transfer mechanism are distinguished rather than collapsed into one claim. Your locale and user timezone do not determine data location. There is no blanket \"data stays in country\" or \"no international transfer\" claim, and legal adequacy is never inferred from infrastructure region alone — customer-specific questions route to controlled Privacy Review.",
  },
  {
    question: "How do I submit a privacy request?",
    answer:
      "Use the route that matches your request type. Workforce-record questions go to your authenticated record view or the approved worker route with your employer; account questions to account settings; organization-level export or deletion to an authorized administrator or Enterprise Support; rights inquiries to the privacy request route; and contractual evidence needs to controlled Privacy Review. Marketing consent is never required to submit a privacy request, and no universal response time is promised.",
  },
  {
    question: "Does ZoikoTime guarantee privacy-law compliance?",
    answer:
      "No. This page describes what is collected, for what purpose, who can access it, how long it is kept, and where it is processed. It does not make your employment or legal decisions compliant, and it does not transfer your responsibilities onto workers through obscure consent language. Technical capability never creates permission by itself.",
  },
];

const ctas = [
  { label: "Request Privacy Review", href: "#privacy-requests", primary: true },
  { label: "Security", href: "/security" },
  { label: "Human-in-Command", href: "/human-in-command" },
  { label: "Request Enterprise Demo", href: "/request-enterprise-demo" },
];

export default function PrivacyFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Direct Answers
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Eight Privacy Questions
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
