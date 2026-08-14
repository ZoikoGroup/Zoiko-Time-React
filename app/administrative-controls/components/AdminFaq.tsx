"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Plus, X } from "lucide-react";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Can a ZoikoTime administrator enable screenshots or app monitoring?",
    answer:
      "No. No screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection under any tier or configuration. No plan, add-on, API, administrator role, or enterprise contract creates that collection set — it is enforced in the product, not promised in policy.",
  },
  {
    question: "Can a global administrator see every worker record?",
    answer:
      "No. Effective permission is computed, not assigned: the same role in two scopes yields two different results. Access requires the intersection of tenant and entity, group and worker population, purpose, role and permitted action, data category, jurisdiction, and current policy version — and any single denial denies the whole. Administration is deny-by-default, so absent an explicit current permission and scope intersection the action is denied.",
  },
  {
    question: "How are policy changes controlled?",
    answer:
      "Through a nine-stage lifecycle with no instant high-risk activation: draft, scope review, validation, simulation, required approvals, scheduled activation, active monitoring, correction or rollback, and supersession or retirement. Approvals are human only and separated from the proposer, and material changes create versions so prior approved state stays recoverable per retention policy.",
  },
  {
    question: "How does inheritance work?",
    answer:
      "Global, market or region, mandatory floor, entity, site or group, and exception layers each contribute, and every contributing layer is shown — including the one that blocked a local override. A site or group override can never silently reduce a mandatory security or privacy control or broaden collection beyond the prohibited set; a rejected override is displayed as rejected rather than quietly dropped.",
  },
  {
    question: "Can automation approve payroll or disciplinary outcomes?",
    answer:
      "No. Automated configuration may route or classify under policy, but payroll, discipline, employment, legal, and worker-rights outcomes require authorized human review outside automatic classification. Neither workflow automation nor Kairos can decide, approve, or activate an administrative change, and deterministic time classification is policy-bound and reviewable rather than presented as AI.",
  },
  {
    question: "How are integrations governed?",
    answer:
      "Every service identity carries a purpose, owner, scope, credential lifecycle, source health, and revocation path, and every connection contract states the provider, mappings, permitted scopes, write authority, direction, and failure behavior. Unavailable, stale, partial, and conflicting states are visible and may block use. Connecting a provider establishes neither availability nor correctness, and a failed integration fails visibly rather than broadening access to complete an exchange.",
  },
  {
    question: "Can workers challenge administrative changes?",
    answer:
      "Configuration decides how records are made; it does not decide whether the person described by a record can see it, question it, or have a human review it. A worker can see the applicable policy context and version, the source of the record and its status, material corrections affecting them, and the available challenge and escalation paths. Visibility is role- and policy-bound and never exposes another worker's data.",
  },
  {
    question: "How is emergency access controlled?",
    answer:
      "Break-glass requires strong authentication, a named reason, an incident or change relationship, narrow scope, and a time limit. It is monitored throughout, automatically revoked at expiry or immediately entered into review, and followed by a post-use review of actions taken, data accessed, changes made, residual risk, and required reconciliation. There is no standing unmonitored emergency account, and break-glass cannot enable prohibited collection, produce an autonomous consequential decision, or erase audit history.",
  },
];

const ctas = [
  {
    label: "Explore Control Evidence",
    href: "#control-evidence-directory",
    primary: true,
  },
  { label: "Request Controls Review", href: "#request-controls-review" },
  {
    label: "Enterprise Administration & Policy",
    href: "/adminstration-policy-controls",
  },
  { label: "Enterprise Support", href: "/enterprise-support" },
];

export default function AdminFaq() {
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
            Eight Administration Questions
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
        <div className="mx-auto mt-8 flex w-full max-w-[980px] flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center">

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
