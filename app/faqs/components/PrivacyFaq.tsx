import React from "react";

const faqs = [
  "Does ZoikoTime take screenshots?",
  "Are screenshots always required?",
  "Can sensitive information be redacted?",
  "Who can see screenshots?",
  "Is ZoikoTime surveillance software?",
];

export default function PrivacyFaq() {
  return (
    <section className="w-full bg-white py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4">
        {/* Section Label */}
        <p className="text-center text-xs font-bold uppercase tracking-wider text-amber-500">
          Worker Privacy, Screenshots, and Redaction
        </p>

        {/* FAQ Card */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          {faqs.map((faq, index) => (
            <button
              key={faq}
              className={`flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-slate-50 dark:hover:bg-slate-800 ${
                index !== faqs.length - 1
                  ? "border-b border-slate-200 dark:border-slate-800"
                  : ""
              }`}
            >
              <span className="text-base font-semibold text-slate-900 dark:text-white">
                {faq}
              </span>

              <span className="text-2xl font-normal text-teal-600">+</span>
            </button>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-6 text-center">
          <button className="text-xs font-semibold text-teal-600 transition hover:underline">
            View Screenshots &amp; Redaction Controls →
          </button>
        </div>
      </div>
    </section>
  );
}