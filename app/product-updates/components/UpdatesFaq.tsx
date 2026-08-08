"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "What is new in ZoikoTime?",
    answer:
      "Product Updates explains meaningful ZoikoTime changes in plain language, with verified availability, audience impact, and next steps — it doesn't publish unverified roadmap promises.",
  },
  {
    question: "Which updates are available to me?",
    answer:
      "Each update states its availability explicitly: Generally Available, Limited to pilot organizations, Rolling Out to a defined scope, or Requires Setup before it applies. Availability is never rounded up from \"announced\" to \"available\" — if general availability has not been verified, the update says so.",
  },
  {
    question: "Where do I find exact release notes?",
    answer:
      "Release Notes hold the exact records, and every update here links to the canonical entries alongside product documentation, getting started, and support. This page summarizes what a change means for your work; the release record remains the authoritative source for version-level facts.",
  },
  {
    question: "How do I prepare for a product change?",
    answer:
      "Follow the six readiness steps: learn the plain-language summary, review prerequisites and impact, configure the current settings, communicate to affected teams, test in a safe scope, and verify in production. Updates that need action carry an explicit action label — Review, Configure, Communicate, Test, Migrate, or Reconnect.",
  },
  {
    question: "Does ZoikoTime publish future roadmap items here?",
    answer:
      "No. Roadmap intent and target dates are never published on this page, along with unverified or stale screenshots and invented customers, metrics, or versions. Every claim links to a release record, capability source, or current documentation, and corrections stay visible in revision history rather than being silently overwritten.",
  },
];

export default function UpdatesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full overflow-hidden bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">

          <p className="flex items-center gap-2 text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-sm bg-teal-600"
              aria-hidden="true"
            />
            FAQ
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Questions about how updates are verified and shared.
          </h2>

        </div>

        {/* Questions */}
        <div className="mx-auto mt-12 w-full max-w-[760px] border-t border-slate-200 dark:border-slate-800">

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
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >

                  <span className="text-base font-semibold text-slate-800 dark:text-white">
                    {faq.question}
                  </span>

                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 dark:bg-slate-800 dark:text-slate-300">
                    {isOpen ? (
                      <Minus size={12} strokeWidth={2} />
                    ) : (
                      <Plus size={12} strokeWidth={2} />
                    )}
                  </span>

                </button>

                {isOpen && (
                  <p className="max-w-[720px] pb-6 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
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
