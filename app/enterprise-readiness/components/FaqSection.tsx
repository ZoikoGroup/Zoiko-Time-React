"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is ZoikoTime suitable for enterprise organizations?",
    a: "Yes. ZoikoTime is designed for organizations that require governed workforce operations, role-based administration, auditability, documentation, security controls, and structured deployment across departments and teams.",
  },
  {
    q: "Can ZoikoTime support security and procurement review?",
    a: "Yes. ZoikoTime provides documentation, governance information, security details, implementation guidance, and supporting resources that help procurement, legal, IT, HR, and security teams evaluate the platform before adoption.",
  },
  {
    q: "Does ZoikoTime support role-based access?",
    a: "Yes. ZoikoTime supports permission-based access controls so users only access information appropriate to their role, responsibilities, and organizational policies, helping maintain security and accountability.",
  },
  {
    q: "Can ZoikoTime support a phased rollout?",
    a: "Yes. Organizations can onboard teams gradually by configuring permissions, preparing administrators, inviting workers, and adopting governance controls through a structured implementation process.",
  },
  {
    q: "Does ZoikoTime support legal hold and retention workflows?",
    a: "Yes. ZoikoTime includes governance-oriented retention settings and legal hold workflows that help organizations manage workforce records in accordance with internal policies and compliance requirements.",
  },
  {
    q: "Can ZoikoTime support payroll and client billing review?",
    a: "Yes. Workforce records, timesheets, reporting outputs, and related audit trails help support payroll validation, client billing, utilization reviews, and operational accountability through governed record management.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F4F7FA] dark:bg-gray-900 px-6 py-12 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-xs font-bold tracking-[1.32px] text-[#009D8C] dark:text-teal-400">
            COMMON QUESTIONS
          </span>

          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Enterprise Readiness FAQ
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
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="pr-4 text-sm font-semibold text-slate-800 dark:text-white">
                    {faq.q}
                  </span>

                  {isOpen ? (
                    <Minus
                      size={18}
                      className="shrink-0 cursor-pointer text-gray-400 dark:text-gray-300"
                    />
                  ) : (
                    <Plus
                      size={18}
                      className="shrink-0 cursor-pointer text-[#009D8C] dark:text-teal-400"
                    />
                  )}
                </button>

                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-7 text-slate-500 dark:text-gray-300">
                    {faq.a}
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