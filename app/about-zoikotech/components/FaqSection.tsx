"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is Zoiko Tech Inc.?",
    a: "Zoiko Tech Inc. is a technology subsidiary of Zoiko Group Inc. that builds governed, AI-powered software platforms for enterprise operations, workforce intelligence, and digital infrastructure.",
  },
  {
    q: "Is ZoikoTime developed by Zoiko Tech Inc.?",
    a: "Yes. ZoikoTime is developed and maintained by Zoiko Tech Inc., reflecting the company's commitment to responsible, governed, enterprise-grade software.",
  },
  {
    q: "Where can I learn more about Zoiko Tech?",
    a: "You can visit ZoikoTech.com to explore the broader company portfolio and platform ecosystem.",
  },
  {
    q: "Why does Zoiko Tech build multiple platforms?",
    a: "Modern organizations need connected capabilities across workforce, communications, compliance, and infrastructure, so Zoiko Tech builds an interoperable set of platforms rather than a single point solution.",
  },
  {
    q: "How does Zoiko Tech's broader platform ecosystem help ZoikoTime?",
    a: "ZoikoTime benefits from shared governance, security, and infrastructure standards developed across Zoiko Tech's wider product ecosystem.",
  },
  {
    q: "Is Zoiko Tech focused on responsible AI?",
    a: "Yes. Zoiko Tech applies AI to assist users and surface insight while keeping sensitive decisions subject to appropriate human review and oversight.",
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
            About Zoiko Tech Inc.
          </h2>
        </div>

        {/* FAQ Container */}
        <div className="overflow-hidden rounded-[14px] border border-[#E4EBF4] bg-white dark:bg-gray-800 dark:border-gray-700 divide-y divide-[#E4EBF4] dark:divide-gray-700 transition-colors duration-300">
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
                      className="shrink-0 text-gray-400 dark:text-gray-300"
                    />
                  ) : (
                    <Plus
                      size={18}
                      className="shrink-0 text-[#009F8B] dark:text-teal-400"
                    />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-7 text-slate-600 dark:text-gray-300">
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