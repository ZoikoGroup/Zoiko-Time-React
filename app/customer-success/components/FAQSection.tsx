
"use client";

import { useState } from "react";

const FAQS = [
  { q: "What does ZoikoTime Customer Success actually do?", a: "It turns a governed deployment into measurable, reviewable outcomes — through a shared success plan, explainable signals, and accountable actions that your organization owns and reviews on its own cadence." },
  { q: "Is there a hidden health or churn score?", a: "No. Every health or risk signal shows its inputs and its reasoning. There is no hidden health, churn, renewal, or upsell score driving the relationship." },
  { q: "How is adoption measured?", a: "Adoption is measured in aggregate across teams — never by ranking or scoring individual workers." },
  { q: "Who owns the outcomes and decisions?", a: "Your organization owns the outcomes, the success plan, and every decision. ZoikoTime surfaces signals and suggests actions; your team decides." },
  { q: "How does renewal and expansion work?", a: "Renewal readiness is a balanced, evidence-based review of outcomes achieved. Expansion is customer-declared — there is no propensity model steering the conversation." },
  { q: "What role does Kairos play?", a: "Kairos may help retrieve, summarize, or explain governed data. It is deterministic and explainable, and it decides nothing on its own." },
  { q: "Does ZoikoTime guarantee ROI or renewal?", a: "No. ZoikoTime does not guarantee business outcomes, renewal, or ROI. Results depend on your configuration, data, and decisions." },
  { q: "Do you show real customer references?", a: "Yes, where a signed public reference is available. Where it isn't yet, we use a rigorous validation scorecard and clearly-labeled placeholders rather than fabricated logos, names, or quotes." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 dark:bg-gray-800/40 py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Questions
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            Customer Success — answered
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className="overflow-hidden rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-800 dark:text-white">{faq.q}</span>
                  <span className={`flex-none text-xl font-normal text-teal-600 dark:text-teal-400 transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 sm:px-6">
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}