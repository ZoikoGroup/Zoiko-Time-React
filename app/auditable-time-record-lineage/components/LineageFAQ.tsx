"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is time record lineage?",
    a: "The governed relationship chain from an original source event through policy context, derivation, correction, human approval, export, downstream acknowledgment, and reconciliation. Each stage is a distinct object with its own attribution, timing, and limitations.",
  },
  {
    q: "Does lineage prove a time record is legally valid?",
    a: "No. Lineage shows the governed relationships that exist in the record chain. Legal effect depends on applicable law, policy, evidence, and process - not on a graph looking complete.",
  },
  {
    q: "Can a record be corrected without losing history?",
    a: "Yes. A correction produces a new version. The prior version is preserved as a first-class object with its own attribution, not overwritten or deleted.",
  },
  {
    q: "Can workers see lineage for their own records?",
    a: "Workers can see their own source, policy context, versions, corrections, notices, review status, outcome, and permitted downstream state - in plain language. Access to their own lineage is not access to anyone else's.",
  },
  {
    q: "What is the difference between exported and reconciled?",
    a: "Exported means a version was generated and transmitted for a purpose - it does not mean received or accepted. Reconciled means the expected version and status were actually compared with what the target holds.",
  },
  {
    q: "What happens if lineage is incomplete?",
    a: "The gap is shown honestly rather than invented. Missing, stale, or unavailable links are labelled as such, with a clear next action for the appropriate owner to resolve.",
  },
  {
    q: "Does ZoikoTime use AI to decide lineage or record outcomes?",
    a: "No. Derivation is deterministic, versioned, and rule-referenced. Any approved AI assistance operates within separately governed limits and decides nothing in the lineage chain itself.",
  },
  {
    q: "Can lineage be exported?",
    a: "Yes, subject to role, permission, and the same visibility boundaries that apply on screen.",
  },
];

export default function LineageFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="bg-white px-4 py-16 dark:bg-gray-900 sm:px-8 sm:py-20 lg:px-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10">
        <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          Lineage questions
        </h2>

        <div className="w-full border-t border-gray-200 dark:border-gray-700">
          {FAQS.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={f.q} className="border-b border-gray-200 dark:border-gray-700">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 dark:text-white">
                    {f.q}
                  </span>
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-base font-bold text-emerald-600 transition-transform dark:border-gray-700 dark:bg-gray-800 dark:text-emerald-400 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-base leading-6 text-gray-600 dark:text-gray-300">
                    {f.a}
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
