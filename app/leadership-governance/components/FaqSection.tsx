"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Why does ZoikoTime need a leadership and governance page?",
    a: "This page explains the principles, governance philosophy, and organizational accountability behind ZoikoTime. It helps enterprise customers understand how the platform is developed, governed, and operated beyond its technical features.",
  },
  {
    q: "Does ZoikoTime make automated employment decisions?",
    a: "No. ZoikoTime is designed to support workforce management with records, insights, and decision-support capabilities. Employment, payroll, disciplinary, and other sensitive decisions remain subject to appropriate human review and organizational policies.",
  },
  {
    q: "How does ZoikoTime support responsible governance?",
    a: "ZoikoTime emphasizes permissions, auditability, documentation, review workflows, explainable records, and governance-led engineering to help organizations deploy the platform responsibly and transparently.",
  },
  {
    q: "Who is behind ZoikoTime?",
    a: "ZoikoTime is developed and maintained by Zoiko Tech Inc., which is responsible for the platform's long-term strategy, enterprise governance, security expectations, and responsible product development.",
  },
  {
    q: "Does ZoikoTime support enterprise security review?",
    a: "Yes. Enterprise customers can review documentation, security information, governance resources, access control practices, and implementation guidance to support procurement, compliance, and IT security assessments.",
  },
  {
    q: "How does ZoikoTime approach worker transparency?",
    a: "ZoikoTime promotes transparency by supporting appropriate worker visibility into relevant records, policies, guides, and workflows while respecting organizational permissions, privacy requirements, and applicable legal obligations.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white dark:bg-gray-900 px-6 py-12 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-xs font-bold tracking-[1.32px] text-[#009D8C] dark:text-teal-400">
            COMMON QUESTIONS
          </span>

          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Leadership &amp; Governance FAQ
          </h2>
        </div>

        {/* FAQ */}
        <div className="overflow-hidden rounded-[14px] border border-[#E4EBF4] dark:border-gray-700 bg-white dark:bg-gray-800 divide-y divide-[#E4EBF4] dark:divide-gray-700 transition-colors duration-300">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={faq.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-4 text-sm font-semibold text-slate-800 dark:text-white">
                    {faq.q}
                  </span>

                  {isOpen ? (
                    <Minus
                      size={18}
                      className="shrink-0 text-slate-400 dark:text-gray-300"
                    />
                  ) : (
                    <Plus
                      size={18}
                      className="shrink-0 text-[#009D8C] dark:text-teal-400"
                    />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-7 text-slate-500 dark:text-gray-300">
                      {faq.a}
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