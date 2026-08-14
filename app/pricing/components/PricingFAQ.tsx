"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer:
      "Start with a 14-day trial on eligible standard plans. No credit card is required. You can evaluate the plan, features, and workforce intelligence capabilities before deciding whether to subscribe.",
  },
  {
    question: "What’s the difference between monthly and annual pricing?",
    answer:
      "Monthly billing gives you the flexibility to pay each month. Annual billing is paid once per year and provides better overall value, with savings of up to 22% depending on the plan.",
  },
  {
    question: "Can I subscribe without starting a trial?",
    answer:
      "Yes. You can subscribe directly without starting a trial. Your selected plan and billing cadence will carry through to your subscription.",
  },
  {
    question: "How much do I actually save with annual billing?",
    answer:
      "Annual billing can save up to 22% compared with the equivalent monthly pricing, depending on the plan. The annual total is shown upfront before payment.",
  },
  {
    question: "What are the user limits?",
    answer:
      "Verified supports up to 25 users, Governed supports up to 250 users, and Sovereign and Enterprise support unlimited users. Unlimited refers specifically to the stated user dimension.",
  },
  {
    question: "How is Enterprise priced?",
    answer:
      "Enterprise uses contract pricing based on your organization's requirements, including deployment architecture, integrations, security requirements, support, and implementation needs.",
  },
  {
    question: "What does “Unlimited” cover?",
    answer:
      "Unlimited refers to the user count for the Sovereign and Enterprise plans. Other dimensions, limits, or capabilities may still have plan-specific conditions.",
  },
  {
    question:
      "Do you offer SSO, compliance tooling, or on-premises deployment?",
    answer:
      "Yes. Sovereign includes SSO and SAML support and compliance capabilities. Enterprise additionally supports private cloud or on-premises deployment, custom data residency, dedicated tenant architecture, and custom integrations.",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-gray-50 py-16 transition-colors duration-300 dark:bg-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-[0.2em] text-[#3FB97A]">
            Pricing FAQ
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Questions about plans &amp; billing
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-10 w-full max-w-[820px] space-y-4 sm:mt-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={[
                  "overflow-hidden rounded-xl border",
                  "bg-white transition-all duration-300",
                  "border-slate-200",
                  "shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]",
                  "dark:border-slate-700 dark:bg-slate-900",
                  isOpen
                    ? "shadow-[0px_8px_24px_0px_rgba(14,31,61,0.08)] dark:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.2)]"
                    : "",
                ].join(" ")}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`pricing-faq-${index}`}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-sm font-semibold leading-6 text-slate-800 dark:text-white sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={[
                      "flex h-7 w-7 shrink-0 items-center justify-center",
                      "rounded-full text-xl font-semibold leading-none",
                      "text-[#3FB97A] transition-transform duration-300",
                      isOpen ? "rotate-45" : "rotate-0",
                    ].join(" ")}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`pricing-faq-${index}`}
                  className={[
                    "grid transition-all duration-300 ease-in-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-5 pb-5 pt-4 dark:border-slate-800 sm:px-6">
                      <p className="max-w-[720px] text-sm leading-6 text-gray-500 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA / Links */}
        <div className="mt-10 text-center sm:mt-12">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Still have questions about pricing or your organization's needs?
          </p>

          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/request-a-demo"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-[#3FB97A] px-6 text-sm font-bold text-white transition-all duration-200 hover:bg-[#3FB97A]"
            >
              Request a Demo
            </Link>

            <Link
              href="/contact-sales"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 text-sm font-bold text-slate-800 transition-all duration-200 hover:bg-gray-50 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}