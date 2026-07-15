import { Plus } from "lucide-react";
import React from "react";

const faqs = [
  {
    question:
      "What types of workforce records can be governed by retention policies?",
  },
  {
    question: "How does legal hold work in ZoikoTime?",
  },
  {
    question:
      "Does ZoikoTime guarantee compliance with legal retention requirements?",
  },
  {
    question:
      "Who can configure retention policies and apply legal holds?",
  },
  {
    question:
      "What happens to records when legal hold is released?",
  },
];

export default function RetentionFaq() {
  return (
    <section className="bg-white dark:bg-slate-900 py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          {faqs.map((faq, index) => (
            <button
              key={index}
              className={`flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 ${
                index !== faqs.length - 1
                  ? "border-b border-slate-200 dark:border-slate-700"
                  : ""
              }`}
            >
              <span className="pr-6 text-base font-semibold text-slate-900 dark:text-white">
                {faq.question}
              </span>

              <Plus
                size={20}
                className="flex-shrink-0 text-teal-600 dark:text-teal-400"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}