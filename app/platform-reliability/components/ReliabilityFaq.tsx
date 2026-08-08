"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Plus, X } from "lucide-react";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Is ZoikoTime currently operational?",
    answer: (
      <>
        This page cannot tell you. Current component state, active incidents,
        and maintenance live on{" "}
        <Link
          href="/system-status"
          className="font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
        >
          System Status
        </Link>
        , which is the authoritative source. If that source cannot be reached,
        it says current status cannot be confirmed rather than defaulting to
        operational.
      </>
    ),
  },
  {
    question: "What does ZoikoTime mean by availability?",
    answer:
      "Eligible successful service behavior for defined requests or critical journeys, within a stated scope. It is never a platform-wide claim derived from one endpoint, and it is only one of seven dimensions — performance, job completion, data freshness, integrity and durability, change safety, and recoverability fail independently and are measured independently.",
  },
  {
    question: "Does ZoikoTime publish an uptime percentage or SLA?",
    answer:
      "Not for scopes without current evidence. Availability results are currently unavailable, so none are published — and that does not imply future availability. Objectives, error budgets, percentiles, and contractual commitments appear only where currently approved for the stated scope. Internal alert thresholds exist to wake someone up; they are not SLAs and are never converted into one.",
  },
  {
    question: "How are incidents and maintenance communicated?",
    answer:
      "Through System Status, which owns current state, active incidents, maintenance, subscriptions, and public operational history. This page never duplicates live state or maintains a competing history. There is no guaranteed notification or recovery time unless contractually approved, and a pending post-incident review does not imply a public report will be published.",
  },
  {
    question: "How are backups and recovery tested?",
    answer:
      "Every backup record states source, protected object, environment, frequency, retention, encryption, location, access, integrity check, restore method, dependency, owner, last tested, result, limitation, and next test. Restore, failover, rebuild, replay, reconciliation, and manual recovery are treated as different capabilities. Recovery evidence is currently under review — do not rely on it as settled, and no RTO or RPO is published for any scope.",
  },
  {
    question: "How does ZoikoTime protect record integrity during failures?",
    answer:
      "Lineage controls cover source identity, event order, duplicate detection, completeness, consistency, versioning, timestamps, reconciliation, correction, and reprocessing. Integrity exceptions stay visible and owned rather than being averaged away, issued or approved workforce records are never silently overwritten during a recovery, and consequential downstream use pauses or follows approved degraded-mode policy when evidence is incomplete.",
  },
  {
    question: "Does reliability monitoring capture employee activity?",
    answer:
      "No. Reliability telemetry describes the service, not the worker. There are no screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection under any tier or configuration, and no productivity, diligence, intent, behavioral-ranking, or employment-risk inference is collected or derived. Worker identity is excluded or minimized unless necessary for a specific authorized support, security, or record-integrity investigation.",
  },
  {
    question: "How can my organization request reliability evidence?",
    answer:
      "Use the Request Reliability Review route on this page for recovery test results, integrity controls, and measured results where they exist. Access is determined by identity, purpose, and entitlement. Public evidence — scope registers, indicator definitions, and change safety controls — needs no request at all. No response time is promised, because no SLA is approved for that route.",
  },
  {
    question: "What does ZoikoTime not guarantee?",
    answer:
      "No unlimited scale, no guaranteed latency, no zero-downtime or automatically reversible deployment, no \"no data loss,\" instant recovery, or universal regional failover. Reliability evidence does not guarantee payroll, employment, legal, compliance, tax, business-continuity, or financial outcomes — it describes how the platform is operated and what can be shown about it.",
  },
];

const ctas = [
  { label: "Open System Status", href: "/system-status", primary: true },
  { label: "Request Reliability Review", href: "#request-reliability-review" },
  { label: "Request Enterprise Demo", href: "/request-enterprise-demo" },
  { label: "Enterprise Support", href: "/contact" },
];

export default function ReliabilityFaq() {
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
            Nine Reliability Questions
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
