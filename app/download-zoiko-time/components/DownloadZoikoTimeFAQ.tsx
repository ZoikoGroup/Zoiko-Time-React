"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is the ZoikoTime app free to download?",
    answer:
      "Yes. ZoikoTime is free to download and install. You can get started without paying an installation fee, while available plans and features may vary depending on your organization’s needs.",
  },
  {
    question: "Does ZoikoTime track my location or activity?",
    answer:
      "No. ZoikoTime is not surveillance, productivity monitoring, or GPS tracking software. It focuses on verified time records and accountability without continuously tracking an employee’s physical location or personal activity.",
  },
  {
    question: "Can IT deploy this across the organization?",
    answer:
      "Yes. IT and administrators can deploy ZoikoTime across their organization using the appropriate platform and architecture. Enterprise teams can also use centralized policies and deployment controls to support larger rollouts.",
  },
  {
    question: "Which architecture should I choose on Mac?",
    answer:
      "Choose the architecture that matches your Mac’s processor. Apple Silicon Macs, such as those with M-series chips, should use the Apple Silicon version. Intel-based Macs should use the Intel version.",
  },
  {
    question: "Do I need to install anything to use ZoikoTime?",
    answer:
      "For desktop-based time tracking, you need to install the ZoikoTime application on the supported device. Installation allows the app to securely capture and verify the required time records according to your organization’s configuration.",
  },
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
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
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
                    {faq.question}
                  </span>

                  {/* Plus / Minus */}
                  <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700">
                    <span className="absolute h-px w-2 bg-slate-800 dark:bg-slate-200" />

                    {!isOpen && (
                      <span className="absolute h-2 w-px bg-slate-800 dark:bg-slate-200" />
                    )}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="pb-5 pr-10">
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
                      {faq.answer}
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