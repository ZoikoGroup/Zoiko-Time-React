// components/ScreenshotFAQ.tsx

import React from "react";

const faqs = [
  "Are screenshots always on?",
  "Can sensitive information be hidden?",
  "Who can view screenshots?",
  "How long are screenshots kept?",
  "Do workers know screenshots are enabled?",
];

export default function ScreenshotFAQ() {
  return (
    <section className="bg-white py-16 md:py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Questions
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Screenshots &amp; Redaction FAQs
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 px-6 py-5 ${
                index !== faqs.length - 1
                  ? "border-b border-slate-200 dark:border-slate-700"
                  : ""
              }`}
            >
              <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-teal-600 dark:bg-teal-400"></span>

              <p className="text-base text-gray-700 dark:text-gray-300">
                {faq}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}