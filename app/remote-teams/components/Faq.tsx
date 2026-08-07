"use client";

import { FiPlus } from "react-icons/fi";

const faqs = [
  "How does ZoikoTime help manage remote teams?",
  "Does ZoikoTime monitor screens, keyboard activity, or applications?",
  "Does online status prove someone is working?",
  "How are remote teams coordinated across time zones?",
  "What is an asynchronous handoff?",
  "Can workers see and correct their time records?",
  "How are connectivity or power outages handled?",
  "Can managers rank workers by response speed or online time?",
  "How does ZoikoTime support global remote teams?",
];

export default function Faq() {
  return (
    <section className="bg-white px-6 py-16 dark:bg-slate-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-12">
        {/* Header */}
        <div className="max-w-[700px] text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400">
              Remote Team Questions
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="w-full max-w-[980px]">
          {faqs.map((faq) => (
            <button
              key={faq}
              type="button"
              className="flex w-full items-center justify-between border-b border-slate-200 px-1 py-6 text-left transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900"
            >
              <h3 className="pr-6 text-base font-semibold leading-6 text-slate-900 dark:text-white">
                {faq}
              </h3>

              <FiPlus className="h-5 w-5 flex-shrink-0 text-emerald-700 dark:text-emerald-400" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}