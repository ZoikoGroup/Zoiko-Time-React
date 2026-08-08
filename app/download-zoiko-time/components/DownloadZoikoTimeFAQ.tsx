"use client";

import { useState } from "react";

const faqs = [
  "Is the ZoikoTime app free to download?",
  "Does ZoikoTime track my location or activity?",
  "Can IT deploy this across the organization?",
  "Which architecture should I choose on Mac?",
  "Do I need to install anything to use ZoikoTime?",
];

export default function DownloadZoikoTimeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-gray-50 px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[820px]">

        {/* Header */}
        <div className="mx-auto flex w-full max-w-[600px] flex-col items-center gap-3.5 pt-1 text-center">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              FAQ
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            Questions about downloading and installing
          </h2>
        </div>

        {/* Questions */}
        <div className="mt-10 w-full border-b border-slate-200 dark:border-slate-800">
          {faqs.map((question, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={question}
                className="border-t border-slate-200 dark:border-slate-800"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left"
                >
                  <span className="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100 sm:text-base">
                    {question}
                  </span>

                  {/* Plus / Minus */}
                  <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700">
                    <span className="absolute h-px w-2 bg-slate-800 dark:bg-slate-200" />

                    {!isOpen && (
                      <span className="absolute h-2 w-px bg-slate-800 dark:bg-slate-200" />
                    )}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}