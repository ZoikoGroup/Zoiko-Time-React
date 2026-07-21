"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Do I need a credit card to start?",
    answer:
      "No. You can start your free trial without a credit card. Explore ZoikoTime and upgrade only if you decide it's the right fit.",
  },
  {
    question: "What happens when the trial ends?",
    answer:
      "When your trial ends, you can choose a paid plan or stop using the service. Your data remains available for a limited time.",
  },
  {
    question: "Can we invite real workers during the trial?",
    answer:
      "Yes. You can invite managers, administrators, and workers to experience the platform with real workflows during the trial.",
  },
  {
    question: "Can we export our data?",
    answer:
      "Yes. You can export timesheets, reports, and other supported data in standard formats whenever needed.",
  },
  {
    question: "Do you provide a Data Processing Agreement?",
    answer:
      "Yes. ZoikoTime provides a Data Processing Agreement (DPA) to support GDPR and enterprise privacy requirements.",
  },
  {
    question: "How is monitoring disclosed to workers?",
    answer:
      "ZoikoTime promotes transparency through configurable notices, policies, and consent workflows so workers understand what is being recorded.",
  },
  {
    question: "Do you support SSO, SAML, or SCIM?",
    answer:
      "Yes. Enterprise customers can integrate with SSO, SAML, and SCIM for secure authentication and user provisioning.",
  },
  {
    question: "How does ZoikoTime compare with Time Doctor or Hubstaff?",
    answer:
      "ZoikoTime combines time tracking with governance, audit-ready evidence, workforce transparency, compliance controls, and policy-based accountability.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white dark:bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">
            Conversion blockers answered
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 border-t border-gray-100 dark:border-slate-700">
                  <p className="pt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}