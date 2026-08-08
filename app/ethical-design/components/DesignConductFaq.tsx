"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Plus, X } from "lucide-react";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Does ZoikoTime monitor screens, keystrokes, or applications?",
    answer: (
      <>
        No screenshots, keystroke content, URL history, application-name
        monitoring, or clipboard collection under any tier or configuration. No
        design goal — productivity, optimization, security, or analytics —
        creates an exception. See{" "}
        <Link
          href="/privacy"
          className="font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
        >
          Privacy
        </Link>
        .
      </>
    ),
  },
  {
    question: "Can a flag automatically decide pay, discipline, or employment?",
    answer:
      "No. Under ED-04, consequential outcomes require eligible human judgment, and flags, classifications, and summaries remain evidence for review. There are eight human-only decision classes with separation of duties, and no automation may hold final permission. An automatic consequential decision is a release-blocking gate.",
  },
  {
    question: "Is ZoikoTime AI deciding time classifications?",
    answer:
      "No. Policy-bound time classification is deterministic, versioned, and reviewable, with an explainable trace and a correction route on every output. Approved machine learning may flag anomalies or signal-quality concerns for human review, and Kairos retrieves, summarizes, and explains governed data — it decides nothing.",
  },
  {
    question: "How does ZoikoTime assess fairness?",
    answer:
      "Under ED-06, we assess foreseeable differential burden without collecting sensitive attributes we do not need. Dimensions are chosen because they are relevant and ethically supportable, not because broad profiling is convenient. Where attributes cannot be collected we use qualitative research, accessibility testing, scenario analysis, and support evidence — and we always report sample, environment, period, missingness, confidence limitations, and excluded populations. Averages never erase a materially worse subgroup outcome. No universal fairness claim is made.",
  },
  {
    question: "Can workers correct or challenge records?",
    answer:
      "Yes. Under ED-05, affected people can understand records, inputs, rule versions, status, and reasons, and reach correction, challenge, and escalation. Own-record visibility, neutral states, a correction path, and linked appeal history are the current safeguards. No correction and challenge path is a release-blocking gate.",
  },
  {
    question: "How is accessibility handled?",
    answer:
      "Under ED-07, inclusive journeys and tested alternatives are a release requirement, not a later fix. The target is WCAG 2.2 AA across supported surfaces, using manual and automated testing, user research, and alternative-path validation. We publish tested scope, methods, known limitations, remediation status, owner, and issue route. Conformance is stated per surface rather than platform-wide — any product claiming flawless accessibility has not tested honestly.",
  },
  {
    question: "Does ZoikoTime guarantee ethical or compliant use?",
    answer:
      "No. This page governs design conduct and public evidence. It never converts a complex social, employment, or jurisdictional judgment into a generic ethical score or a product-owned legal conclusion, and jurisdictional guidance is not published as legal advice. A public ethical, fairness, accessibility, or safety claim without current scoped evidence is itself a release-blocking gate.",
  },
  {
    question: "How can an enterprise inspect design evidence?",
    answer:
      "Public artifacts — the twelve principles, release-blocking gate definitions, accessibility test scope, and correction and withdrawal history — need no request. Differential-impact review method and design decision records are controlled and use a governed request through the Trust Center review pathway; they contain no worker-level data, and restricted design-record metadata is withheld.",
  },
];

const ctas = [
  { label: "Review Design Evidence", href: "#evidence-directory", primary: true },
  { label: "Trust Center", href: "/trust-center" },
  { label: "Help Center", href: "/help-center" },
  { label: "Request Enterprise Demo", href: "/request-enterprise-demo" },
];

export default function DesignConductFaq() {
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
            Eight Questions About Design Conduct
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
