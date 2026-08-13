"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function SecurityAddendumFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is the ZoikoTime Security Addendum?",
      answer:
        "The ZoikoTime Security Addendum describes the security measures and controls used to protect customer data, including access controls, administrative safeguards, infrastructure protections, and other applicable security practices.",
    },
    {
      question: "Does ZoikoTime encrypt customer data?",
      answer:
        "ZoikoTime uses security measures designed to protect customer data during transmission and storage. The specific encryption controls and applicable commitments are described in the Security Addendum and related security documentation.",
    },
    {
      question: "Does ZoikoTime support role-based access control?",
      answer:
        "Yes. ZoikoTime supports role-based access controls so organizations can restrict access to workforce records, analytics, evidence, and administrative functions based on assigned permissions and business responsibilities.",
    },
    {
      question: "Does ZoikoTime keep audit logs?",
      answer:
        "ZoikoTime supports audit and record-history capabilities for relevant activities, including changes, approvals, corrections, access, and exports where supported by the applicable product configuration.",
    },
    {
      question: "How does ZoikoTime protect screenshots?",
      answer:
        "Screenshot access can be governed through permissions and configured controls. Organizations can restrict who can view screenshot evidence and may use available redaction capabilities to reduce exposure of sensitive information.",
    },
    {
      question:
        "Can enterprise customers request security documentation?",
      answer:
        "Yes. Enterprise customers and evaluators can request applicable security documentation during their review. The ZoikoTime team can provide the documentation appropriate to the organization's evaluation and contractual requirements.",
    },
    {
      question: "Does ZoikoTime support legal hold?",
      answer:
        "ZoikoTime supports legal hold workflows designed to help preserve relevant workforce records when disputes, investigations, audits, or litigation require extended retention. Customers remain responsible for determining their legal preservation obligations.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="
        w-full
        bg-gray-50
        px-5
        py-[74px]
        dark:bg-slate-950
      "
    >
      <div className="mx-auto max-w-[820px]">

        {/* Header */}
        <div className="mb-10 text-center">
          <div
            className="
              text-xs
              font-semibold
              uppercase
              leading-5
              tracking-widest
              text-teal-600
              dark:text-teal-400
            "
          >
            Questions
          </div>

          <h2
            className="
              mt-2
              text-3xl
              font-bold
              leading-10
              text-slate-800
              dark:text-white
              md:text-4xl
            "
          >
            Security Addendum FAQs
          </h2>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-5">
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
                  shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
                  dark:border-slate-700
                  dark:bg-slate-900
                "
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    min-h-20
                    w-full
                    items-center
                    justify-between
                    gap-5
                    px-[22px]
                    py-5
                    text-left
                    transition-colors
                    hover:bg-slate-50
                    dark:hover:bg-slate-800
                  "
                >
                  <h3
                    className="
                      text-base
                      font-normal
                      leading-6
                      text-slate-800
                      dark:text-white
                    "
                  >
                    {faq.question}
                  </h3>

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
                      px-[22px]
                      pb-5
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