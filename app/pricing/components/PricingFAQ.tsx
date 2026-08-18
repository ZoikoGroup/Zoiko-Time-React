"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer:
      "Start with full access to your selected plan for 14 days. No credit card is required to begin the trial. You can evaluate the features and decide whether to subscribe before the trial ends.",
  },
  {
    question: "What’s the difference between monthly and annual pricing?",
    answer:
      "Monthly plans are billed every month. Annual plans are billed once per year and provide the annual savings shown on the pricing table. The annual headline price is the monthly equivalent of the annual amount.",
  },
  {
    question: "Can I subscribe without starting a trial?",
    answer:
      "Yes. You can subscribe directly without starting the 14-day trial. Your selected plan and billing cadence will apply immediately.",
  },
  {
    question: "How much do I actually save with annual billing?",
    answer:
      "Annual billing provides approximately 20% savings compared with paying the equivalent monthly rate for 12 months. The exact annual amount is shown before checkout.",
  },
  {
    question: "What are the user limits?",
    answer:
      "Verified supports up to 25 users, Governed supports up to 250 users, and Sovereign and Enterprise support unlimited users. If you exceed a plan's seat cap, we will direct you to the appropriate plan.",
  },
  {
    question: "How is Enterprise priced?",
    answer:
      "Enterprise uses contract pricing based on your organization's requirements, deployment model, user volume, integrations, security requirements, and support needs. Contact Sales for a custom quote.",
  },
  {
    question: "What does “Unlimited” cover?",
    answer:
      "Unlimited refers specifically to the user-seat dimension for plans where unlimited users are stated. Other product limits, usage policies, infrastructure constraints, or contractual terms may still apply.",
  },
  {
    question:
      "Do you offer SSO, compliance tooling, or on-premises deployment?",
    answer:
      "Yes. Sovereign includes SSO and SAML support and compliance-focused capabilities. Enterprise can additionally support private cloud or on-premises deployment, custom data residency, dedicated architecture, and custom integrations.",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-gray-50 px-4 py-14 transition-colors duration-300 dark:bg-slate-950 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto w-full max-w-[1180px]">

        {/* =========================
            HEADER
        ========================== */}
        <div className="text-center">

          <div className="text-xs font-semibold uppercase leading-5 tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Pricing FAQ
          </div>

          <h2 className="mx-auto mt-2 max-w-[700px] text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Questions about plans &amp; billing
          </h2>

        </div>

        {/* =========================
            FAQ LIST
        ========================== */}
        <div className="mx-auto mt-10 w-full max-w-[820px] space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl bg-white transition-all duration-300 dark:bg-slate-900 ${
                  isOpen
                    ? "outline outline-1 outline-teal-600 shadow-[0px_6px_18px_rgba(14,31,61,0.08)] dark:shadow-[0px_6px_18px_rgba(0,0,0,0.3)]"
                    : "outline outline-1 outline-slate-200 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] dark:outline-slate-700 dark:shadow-[0px_6px_18px_rgba(0,0,0,0.2)]"
                }`}
              >

                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex min-h-16 w-full items-center justify-between gap-5 px-5 py-4 text-left sm:px-6"
                >
                  <span
                    className={`text-sm font-semibold leading-6 transition-colors duration-200 sm:text-base ${
                      isOpen
                        ? "text-teal-700 dark:text-teal-400"
                        : "text-slate-800 dark:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Plus / Minus */}
                  <span
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full text-xl font-semibold leading-none transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 text-teal-600 dark:text-teal-400"
                        : "text-teal-600 dark:text-teal-400"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-200 px-5 pb-5 pt-4 dark:border-slate-700 sm:px-6">
                      <p className="text-xs leading-6 text-gray-500 dark:text-slate-400 sm:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}