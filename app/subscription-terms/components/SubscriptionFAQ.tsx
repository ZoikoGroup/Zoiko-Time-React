"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SubscriptionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Does ZoikoTime offer a free trial?",
      answer:
        "Trial availability depends on the ZoikoTime plan and evaluation path. Contact the ZoikoTime team to confirm the current trial options for your organization.",
    },
    {
      question: "When does billing start?",
      answer:
        "Billing starts according to the subscription terms agreed when your plan is activated. The applicable start date and billing cycle are provided during the subscription process.",
    },
    {
      question: "Is ZoikoTime billed monthly or annually?",
      answer:
        "ZoikoTime may support different billing cycles depending on the plan and agreement. Your applicable billing frequency and pricing are specified in your subscription terms.",
    },
    {
      question: "How are users counted for billing?",
      answer:
        "User counting depends on the applicable plan and subscription configuration. The subscription agreement defines which users or licenses are included for billing purposes.",
    },
    {
      question: "Can we upgrade or downgrade our plan?",
      answer:
        "Plan changes may be available depending on your subscription. Contact ZoikoTime or your account representative to discuss upgrades, downgrades, and the effective date of the change.",
    },
    {
      question: "What happens if payment fails?",
      answer:
        "If a payment fails, the account may be subject to payment retry, notification, or other actions described in the applicable subscription terms. Customers should resolve payment issues promptly to avoid service interruption.",
    },
    {
      question: "Are taxes included?",
      answer:
        "Taxes and other applicable charges are handled according to the applicable pricing, billing, and tax requirements. Your invoice or subscription agreement will identify applicable charges.",
    },
    {
      question: "Can we get a refund after cancellation?",
      answer:
        "Refund eligibility depends on the applicable subscription terms, cancellation timing, plan, and any agreement-specific conditions. Review your Subscription Terms or contact ZoikoTime for clarification.",
    },
    {
      question: "What happens to our data after cancellation?",
      answer:
        "Data handling after cancellation is governed by the applicable subscription, privacy, retention, and deletion terms. Customers should review the relevant policies for retention periods, export options, and deletion procedures.",
    },
    {
      question: "Do enterprise customers have different terms?",
      answer:
        "Enterprise customers may have negotiated terms that differ from standard subscription terms. The applicable agreement, order form, and related contractual documents determine the terms for the enterprise customer.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-6">

        {/* Label */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-teal-600">
          Questions
        </p>

        {/* Heading */}
        <h2
          className="
            mt-4
            text-center
            text-3xl
            font-bold
            text-slate-800
            dark:text-white
            md:text-4xl
          "
        >
          Subscription Terms FAQs
        </h2>

        {/* FAQ List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition-colors
                  dark:border-slate-700
                  dark:bg-slate-800
                "
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5
                    px-6
                    py-6
                    text-left
                    transition-colors
                    hover:bg-slate-50
                    dark:hover:bg-slate-700/50
                  "
                >
                  <p
                    className="
                      text-sm
                      font-semibold
                      text-slate-800
                      dark:text-white
                      md:text-base
                    "
                  >
                    {faq.question}
                  </p>

                  <ChevronDown
                    size={20}
                    className={`
                      shrink-0
                      text-teal-600
                      transition-transform
                      duration-200
                      dark:text-teal-400
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {/* Answer */}
                {isOpen && (
                  <div
                    className="
                      border-t
                      border-slate-200
                      px-6
                      pb-6
                      pt-4
                      dark:border-slate-700
                    "
                  >
                    <p
                      className="
                        text-sm
                        leading-7
                        text-slate-600
                        dark:text-slate-300
                        md:text-base
                      "
                    >
                      {faq.answer}
                    </p>
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