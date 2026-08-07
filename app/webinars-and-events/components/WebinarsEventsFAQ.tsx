"use client";

import { FiPlus } from "react-icons/fi";

const faqs = [
  "Is registration required for live sessions?",
  "Are recordings always available afterward?",
  "Can I request captions or ASL interpretation?",
  "How is the local time shown?",
  "Are speaker bios verified?",
];

export default function WebinarsEventsFAQ() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
              FAQ
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-4xl">
            Questions about registering and
            <br className="hidden sm:block" />
            attending.
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mt-14 border-t border-slate-200 dark:border-slate-800">
          {faqs.map((question, index) => (
            <button
              key={question}
              type="button"
              className={`flex w-full items-center justify-between py-6 text-left transition hover:bg-slate-100/60 dark:hover:bg-slate-900/60 ${
                index !== faqs.length - 1
                  ? "border-b border-slate-200 dark:border-slate-800"
                  : "border-b border-slate-200 dark:border-slate-800"
              }`}
            >
              <span className="pr-6 text-base font-semibold text-slate-900 dark:text-white">
                {question}
              </span>

              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700">
                <FiPlus className="h-4 w-4 text-slate-700 dark:text-slate-300" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}