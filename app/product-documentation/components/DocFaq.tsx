import React from "react";

export default function DocFaq() {
  const faqs = [
    "How is ZoikoTime documentation organized?",
    "Where should a new administrator start?",
    "Where can workers learn how ZoikoTime works?",
    "Where do enterprise reviewers find governance and security materials?",
  ];

  return (
    <section className="w-full bg-white py-20 transition-colors dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Documentation FAQs
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex items-center border-b border-slate-200 pb-4 dark:border-slate-800"
            >
              <span className="mr-3 text-lg text-slate-500 dark:text-slate-400">
                •
              </span>

              <p className="text-base text-slate-700 dark:text-slate-300">
                {faq}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}