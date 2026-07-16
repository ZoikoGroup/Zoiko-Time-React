"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What types of partners does ZoikoTime work with?",
    a: "ZoikoTime works with a range of partners, including referral partners, consultants, implementation specialists, technology and integration partners, strategic alliances, and other organizations that can help customers achieve successful workforce intelligence outcomes.",
  },
  {
    q: "Can consultants refer clients to ZoikoTime?",
    a: "Yes. Consultants and advisors can refer qualified organizations to ZoikoTime. Depending on the nature of the engagement and mutual fit, they may participate as referral, advisory, or implementation partners.",
  },
  {
    q: "Does ZoikoTime support implementation partners?",
    a: "Yes. Implementation partners may receive enablement resources, configuration guidance, rollout planning materials, training documentation, and best practices to help customers successfully adopt the platform.",
  },
  {
    q: "Can technology platforms integrate with ZoikoTime?",
    a: "Yes. Technology partners can explore integration opportunities based on customer needs, technical feasibility, data flow requirements, security expectations, and platform compatibility.",
  },
  {
    q: "Is there a formal reseller program?",
    a: "ZoikoTime evaluates commercial partnership opportunities individually. Depending on strategic alignment, market opportunity, and business requirements, organizations may be considered for referral, channel, or other partnership models.",
  },
  {
    q: "Does submitting a partner inquiry guarantee approval?",
    a: "No. Submitting a partnership inquiry begins the evaluation process only. Each application is reviewed for strategic alignment, customer value, market relevance, credibility, and the most appropriate partnership pathway before any approval is granted.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F6F9F9] px-6 py-12 transition-colors duration-300 dark:bg-slate-950 md:px-12 lg:px-20 xl:px-32 2xl:px-54">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[1.32px] text-[#009D8C]">
            Questions
          </span>

          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            Partner FAQs
          </h2>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-5 text-left md:px-6"
                >
                  <span className="pr-4 text-sm font-semibold leading-6 text-slate-900 dark:text-white md:text-base">
                    {faq.q}
                  </span>

                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-slate-400 dark:text-slate-300" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-[#009D8C]" />
                  )}
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-slate-600 dark:text-slate-300 md:px-6 md:text-[15px]">
                      {faq.a}
                    </p>
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