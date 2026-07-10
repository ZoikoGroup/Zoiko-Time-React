import React from "react";

const faqs = [
  "How long does ZoikoTime take to implement?",
  "Does ZoikoTime have a mobile app?",
  "Where do users go for help?",
  "How do we contact ZoikoTime for enterprise questions?",
];

export default function SupportFaq() {
  return (
    <section className="w-full bg-white py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4">
        {/* Section Label */}
        <p className="text-center text-xs font-bold uppercase tracking-wider text-teal-600">
          Implementation, Mobile App, and Support
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

              <span className="text-2xl font-normal text-teal-600">
                +
              </span>
            </button>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-6 rounded-lg bg-slate-100 py-3 text-center dark:bg-slate-800">
          <button className="text-xs font-semibold text-teal-600 transition hover:underline">
            Visit Help Center →
          </button>
        </div>
      </div>
    </section>
  );
}