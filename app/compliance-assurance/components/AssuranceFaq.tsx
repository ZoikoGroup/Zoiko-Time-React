"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Plus, X } from "lucide-react";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Is ZoikoTime compliant with a specific law or standard?",
    answer: (
      <>
        Applicability is context-specific, and we do not reach legal conclusions.
        What we can provide is scoped evidence: control mappings showing which
        requirements relate to which controls, with coverage state and gaps
        stated. Whether that satisfies an obligation for your organization
        depends on your configuration, practices, contracts, and jurisdiction —
        and requires your own legal review. Start with{" "}
        <Link
          href="#assurance-evidence-directory"
          className="font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
        >
          control mappings
        </Link>{" "}
        or a{" "}
        <Link
          href="#request-assurance-review"
          className="font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
        >
          review request
        </Link>
        .
      </>
    ),
  },
  {
    question: "What certifications does ZoikoTime have?",
    answer:
      "No certification name or framework logo appears on this page, because each requires current permission and exact scope. The certification register is a controlled record and currently reads Unavailable — no current public certification claim exists. That status carries no future-state implication: it means no current artifact exists, not that one is coming.",
  },
  {
    question: "Does a certificate cover every ZoikoTime product and customer?",
    answer:
      "No. Every certificate, report, and assessment applies only to its issuer, subject, standard and version, period, product, environment, entity, region, and stated exclusions. Outside those boundaries it proves nothing. In particular, a certificate does not cover your configuration unless it says so, and it does not cover local employment law, payroll handling, or your downstream systems.",
  },
  {
    question: "Can I download audit reports?",
    answer:
      "Assessment and audit reports are controlled artifacts, so they require identity, purpose, and entitlement because of their content. Submit an assurance review request: approved artifacts are delivered securely with expiry, revocation, and audit, and you receive the full scope, period, and exclusions — or a clear statement that no current artifact supports your request. Public evidence is never withheld to capture a lead.",
  },
  {
    question: "How are audit findings handled?",
    answer:
      "Findings are not hidden by default. A finding record carries its ID, source assessment, safe title, severity category, affected scope, detected date, owner, status, and due date, and overdue or unknown states are shown as such rather than smoothed over. Closure requires independent or eligible verification appropriate to the risk — task completion alone is not evidence of control restoration, and reopening preserves the full prior history.",
  },
  {
    question: "Which controls are my organization's responsibility?",
    answer:
      "Customer-owned areas include configuration and access review, internal policies and their accuracy, worker consultation obligations, local employment and payroll law, and downstream reconciliation and destinations. Where a mapping depends on you, the coverage state reads Customer responsibility and states the exact responsibility and the evidence expectation. A ZoikoTime-owned obligation is never transferred to you through a vague disclaimer.",
  },
  {
    question: "Does assurance mean the service has no incidents or risk?",
    answer:
      "No. Assurance records describe controls, evidence, and their limits — not the absence of risk. Sampling-based methods do not establish absence of deficiency, and accepted residual risk records that an eligible authority decided to live with a known gap, with compensating controls and an end date. There is no score and no percentage anywhere on this page.",
  },
  {
    question:
      "Does ZoikoTime use screenshots or application monitoring for compliance evidence?",
    answer:
      "No screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection under any tier or configuration. Evidence collected for assurance purposes is never repurposed as covert productivity surveillance, and finding severity is never used to rank customers or workers — it describes a control condition, not a person or an account.",
  },
  {
    question: "Does ZoikoTime guarantee legal or regulatory compliance?",
    answer:
      "No. ZoikoTime does not interpret law for you. Compliance depends on your configuration, practices, contracts, jurisdiction, and workforce context. We provide scoped evidence and stated limitations; assessing whether that meets your obligations requires your own legal and professional review. A control mapping is not regulator approval and is not a legal conclusion.",
  },
];

const ctas = [
  {
    label: "Request Assurance Review",
    href: "#request-assurance-review",
    primary: true,
  },
  { label: "Security", href: "/security-overview" },
  { label: "Enterprise Support", href: "/enterprise-support" },
  { label: "Request Enterprise Demo", href: "/request-enterprise-demo" },
];

export default function AssuranceFaq() {
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
            Nine Assurance Questions
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
