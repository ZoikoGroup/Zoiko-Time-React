"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is an anomaly flag in ZoikoTime?",
    answer:
      "A source-linked review signal created when approved workforce-record facts meet a versioned condition. It is not a conclusion about a person, and it carries its definition, trigger, scope, source quality, limitations, and review path.",
  },
  {
    question: "What is an alert?",
    answer:
      "An alert is an immediate notification triggered when a high-priority anomaly or threshold requirement needs human review.",
  },
  {
    question: "Does ZoikoTime detect fraud or time theft?",
    answer:
      "ZoikoTime highlights discrepancies and exceptions based on objective data policies, rather than making accusatory or automated fraud determinations.",
  },
  {
    question: "Can ZoikoTime rank workers by risk or productivity?",
    answer:
      "No. ZoikoTime operates with zero risk scoring or worker ranking by design to maintain fair, neutral, and defensible record governance.",
  },
  {
    question: "Can workers see flags about their own records?",
    answer:
      "Yes. Workers retain full transparency and correction rights to review and appeal flags attached to their records.",
  },
  {
    question: "What happens when data is missing or conflicting?",
    answer:
      "ZoikoTime flags the missing or conflicting state for human review without guessing or auto-populating unverified data.",
  },
  {
    question: "Can a flag automatically change payroll or discipline a worker?",
    answer:
      "No. Flags never trigger automatic actions, discipline, or payroll deductions. Every resolution requires human oversight.",
  },
  {
    question: "How are definitions governed?",
    answer:
      "Definitions are version-controlled and policy-bound, ensuring auditability and standard application across the entire organization.",
  },
  {
    question: "How are alerts kept from becoming noise?",
    answer:
      "Configurable thresholds, routing rules, and contextual aggregation ensure reviewers only receive actionable alerts.",
  },
  {
    question: "Does ZoikoTime monitor screens or applications?",
    answer:
      "No. ZoikoTime does not perform continuous screen capture, keylogging, or intrusive application surveillance.",
  },
  {
    question: "Is Zoiko Sema required?",
    answer:
      "Zoiko Sema provides optional enhanced semantic log analysis, but core ZoikoTime functionality operates independently.",
  },
  {
    question: "Does Kairos resolve anomalies?",
    answer:
      "Kairos assists reviewers by highlighting relevant record context and suggestions, but ultimate resolution rests with human reviewers.",
  },
  {
    question: "Is this legal or compliance advice?",
    answer:
      "No. ZoikoTime provides tools to support governance policies, but organizations should consult legal counsel regarding specific labor laws.",
  },
  {
    question: "Which plans, regions, channels, and integrations are available?",
    answer:
      "ZoikoTime supports global deployments with custom enterprise integrations, regional compliance presets, and flexible API channels.",
  },
];

export default function FAQSection() {
  // Index 0 open by default as shown in design
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 sm:gap-10">
        
        {/* Header */}
        <div className="text-center flex flex-col gap-2 max-w-2xl">
          <span className="text-emerald-500 dark:text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-wider font-sans">
            Direct Answers
          </span>
          <h2 className="text-slate-900 dark:text-slate-50 text-3xl sm:text-4xl font-bold font-sans">
            Fourteen Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="w-full border-t border-slate-200 dark:border-slate-800 flex flex-col">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-slate-200 dark:border-slate-800 transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-1 flex justify-between items-center text-left gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md"
                  aria-expanded={isOpen}
                >
                  <span className="text-slate-900 dark:text-slate-100 text-base sm:text-lg font-bold font-sans group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.question}
                  </span>
                  
                  {/* Plus / Minus Toggle Button */}
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-emerald-500 dark:text-emerald-400 transition-all">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Collapsible Content */}
                {isOpen && item.answer && (
                  <div className="pb-5 px-1 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed font-sans max-w-3xl animate-in fade-in duration-200">
                    {item.answer}
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