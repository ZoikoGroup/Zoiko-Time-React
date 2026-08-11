"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Plus, X } from "lucide-react";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Where does ZoikoTime store data?",
    answer: (
      <>
        That depends on the product, data category, environment, and your
        configuration. The{" "}
        <Link
          href="#availability-matrix"
          className="font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
        >
          availability matrix
        </Link>{" "}
        shows current public options with their scope, provider category, and
        status — and every entry covers one activity only. Primary storage,
        replicas, caches, indexes, and backups each have their own location.
      </>
    ),
  },
  {
    question: "Does selecting a region keep all data in that country?",
    answer:
      "No. A region name does not imply residency for all categories or all copies. Replicas, search and index copies, caches, logs, and backups each carry their own location, and processing and access locations may differ entirely from the storage location. Exclusive in-country handling reads Unavailable in the matrix because no current approved capability guarantees that every copy, operation, access session, log, and exceptional path stays within one country.",
  },
  {
    question: "Where are backups kept?",
    answer:
      "Each backup set states its protected object, environment, region or provider category, retention, encryption, access roles, and restore path. Backup expiry runs on its own schedule, so deletion from primary storage does not delete a backup instantly, and backups created before a migration retain their original location until their own expiry. Backup existence is not restore proof, and no RPO or RTO is published here.",
  },
  {
    question: "Can support staff access data from another country?",
    answer:
      "Access location is a separate statement from storage location, and remote access may cross a border without moving the primary store. Access type, purpose, eligible role, region, and approval are stated per category, with least privilege, session control, logging, and review throughout. Break-glass access has a named authority, a reason, a time limit, and an audit record. No individual employee location is published, and no support-access location promise is made without staffing and operational evidence.",
  },
  {
    question: "Does ZoikoTime transfer workforce data internationally?",
    answer:
      "Where it happens, every transfer record states origin and destination, data category and purpose, recipient or provider category, frequency, whether it is a normal or exceptional path, and status with the approved transfer-mechanism field. The technical path and the legal mechanism are distinct things: ZoikoTime does not determine whether a transfer mechanism is legally applicable to your situation and does not guarantee its sufficiency.",
  },
  {
    question: "What happens during disaster recovery?",
    answer:
      "Alternate locations are documented at a safe level before they are ever used — normal and alternate region or provider categories, trigger classes, approval authority, customer notice, state, and affected data categories. Return-to-primary, reconciliation, and cleanup or retirement of the alternate path are governed. Exact security-sensitive topology is never published, but there is no hidden emergency exception to a published commitment. Recovery methods route to Platform Reliability; live events route to System Status.",
  },
  {
    question: "Do exports and integrations change residency?",
    answer:
      "They create customer-controlled destinations, and platform control ends at the handoff. Exports, email delivery, downloads, APIs, webhooks, and SFTP are separate channels with separate handoff points, and customer responsibility begins at the defined delivery or access boundary. Revocation does not erase already-exported copies — turning off a connector stops future delivery but does not reach into a destination we never controlled.",
  },
  {
    question: "Can ZoikoTime guarantee local-law compliance?",
    answer:
      "No. Product information is not legal advice, and not a determination that your configuration satisfies any localization or transfer law. ZoikoTime does not determine whether a data localization requirement applies to you. Authorized humans approve region availability, exceptions, cross-border access, transfer mechanisms, migrations, and contractual commitments.",
  },
  {
    question: "How do I request customer-specific location evidence?",
    answer:
      "Use the controlled residency review route on this page. Your configured regions, enabled providers, migration history, and applicable contractual position are customer-specific and cannot be published. You will receive a reference ID. No response time is promised, because no SLA is approved for this route, and a work email is never used as an automatic eligibility decision.",
  },
];

const ctas = [
  {
    label: "Request Residency Review",
    href: "#request-residency-review",
    primary: true,
  },
  { label: "Privacy", href: "/privacy" },
  { label: "Security", href: "/security-overview" },
  { label: "Enterprise Support", href: "/contact" },
];

export default function LocationFaq() {
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
            Nine Location Questions
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
        <div className="mx-auto mt-8 flex w-full max-w-[860px] flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center">

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
