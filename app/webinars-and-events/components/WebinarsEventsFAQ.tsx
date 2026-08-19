"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const faqs = [
  {
    question: "Is registration required for live sessions?",
    answer:
      "Registration is recommended for live sessions so you can receive the event details, calendar information, and any updates before the session begins.",
  },
  {
    question: "Are recordings always available afterward?",
    answer:
      "Recordings are available for eligible sessions after the event. Availability may vary depending on the session and its content.",
  },
  {
    question: "Can I request captions or ASL interpretation?",
    answer:
      "Yes. Accessibility requests can be submitted when registering for an event. We recommend making requests in advance so the appropriate accommodations can be arranged.",
  },
  {
    question: "How is the local time shown?",
    answer:
      "Event times are displayed using your local time zone whenever it can be detected. The event details will also provide the scheduled time for reference.",
  },
  {
    question: "Are speaker bios verified?",
    answer:
      "Speaker information is reviewed before publication to ensure that the listed name, role, organization, and relevant background are accurate.",
  },
];

export default function WebinarsEventsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-teal-600 dark:bg-teal-400" />

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
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-slate-200 dark:border-slate-800"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between py-6 text-left transition hover:bg-slate-100/60 dark:hover:bg-slate-900/60"
                >
                  <span className="pr-6 text-base font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>

                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700">
                    <FiPlus
                      className={`h-4 w-4 text-slate-700 transition-transform duration-300 dark:text-slate-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-12">
                    <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
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