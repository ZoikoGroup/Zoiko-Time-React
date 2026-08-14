"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need an account to see any resources?",
    answer:
      "No. Many of our procurement and legal resources are publicly available. Some controlled or customer-specific materials may require you to submit a request and provide relevant details before access is granted.",
  },
  {
    question: "How long does a controlled request take to review?",
    answer:
      "Review times depend on the type of resource and the information provided. Most requests are reviewed as soon as the required details are available, but more specialized requests may take longer.",
  },
  {
    question: "Will my request be approved automatically?",
    answer:
      "No. Controlled requests are reviewed based on the resource requested, the purpose of access, and any applicable eligibility requirements. Approval is not guaranteed.",
  },
  {
    question:
      "What's the difference between controlled and customer-specific access?",
    answer:
      "Controlled access applies to resources that require review before they can be shared. Customer-specific access is intended for materials prepared for a particular customer, evaluation, procurement process, or contractual relationship.",
  },
  {
    question: "How do I know if a document is current?",
    answer:
      "Each controlled resource should identify its applicable version or revision information. When in doubt, use the request flow to confirm whether you are accessing the current version.",
  },
  {
    question: "Does ZoikoTime provide legal advice through this page?",
    answer:
      "No. These resources are provided for informational, procurement, security, and compliance purposes. They do not constitute legal advice or create an attorney-client relationship.",
  },
  {
    question: "Can existing customers use the same request flow?",
    answer:
      "Yes. Existing customers can use the request flow when they need access to controlled or customer-specific resources. Where applicable, include your existing customer or organization details to help us process the request.",
  },
];

export default function ProcurementLegalResourcesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-3 px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl">
            Procurement &amp; legal resources — answered
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mt-8 flex w-full max-w-[860px] flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>

                  <span
                    className={`shrink-0 text-2xl font-light text-teal-600 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200 px-6 pb-5 pt-4 dark:border-slate-700">
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
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