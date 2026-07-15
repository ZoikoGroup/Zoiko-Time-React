import React from "react";

const faqs = [
  "Is this employee surveillance?",
  "What does ZoikoTime actually verify?",
  "How are exceptions handled?",
  "Does activity context prove productivity?",
];

export default function ResponsibleUse() {
  return (
    <section className="bg-white dark:bg-slate-950 py-16 px-6">
      <div className="max-w-[1180px] mx-auto">

        {/* Top Section */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
            Responsible Use
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            Verification must be responsible
          </h2>

          <p className="mt-5 text-base text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-7">
            ZoikoTime is built for accountability without defaulting to
            invasive surveillance.
          </p>
        </div>

        {/* Information Box */}
        <div className="mt-10 max-w-[760px] mx-auto rounded-xl border border-orange-200 dark:border-orange-700 bg-yellow-50 dark:bg-yellow-950/30 p-6 flex items-start gap-4">
          {/* Icon */}
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-yellow-700 dark:border-yellow-400 text-yellow-700 dark:text-yellow-300 font-bold text-sm">
            !
          </div>

          <p className="text-sm leading-6 text-yellow-800 dark:text-yellow-300">
            ZoikoTime avoids employee surveillance, spyware, keystroke
            monitoring, and automatic disciplinary action. Activity context
            supports human review under clear permissions and worker
            transparency. Learn more about{" "}
            <span className="font-semibold text-teal-700 dark:text-teal-400 cursor-pointer hover:underline">
              Responsible AI
            </span>
            .
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
              Questions
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
              Time &amp; Activity Verification FAQs
            </h2>
          </div>

          <div className="mt-10 max-w-5xl mx-auto divide-y divide-slate-200 dark:divide-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
            {faqs.map((faq, index) => (
              <button
                key={index}
                type="button"
                className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="text-teal-600 font-semibold text-lg">•</span>

                <span className="text-base text-gray-700 dark:text-gray-200">
                  {faq}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}