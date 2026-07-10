import React from "react";

const faqs = [
  "Does ZoikoTime offer a free trial?",
  "What happens after the free trial?",
  "How much does ZoikoTime cost?",
  "Are annual plans available?",
  "Where can I find the legal subscription terms?",
];

export default function BillingFaq() {
  return (
    <section className="w-full bg-white py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4">
        {/* Section Label */}
        <p className="text-center text-xs font-bold uppercase tracking-wider text-indigo-500">
          Plans, Trial, Billing, and Subscription
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

        {/* Footer Links */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
          <button className="font-semibold text-indigo-500 transition hover:underline">
            View Subscription Terms →
          </button>

          <span className="text-slate-400">|</span>

          <button className="font-semibold text-teal-600 transition hover:underline">
            Contact Sales →
          </button>
        </div>
      </div>
    </section>
  );
}