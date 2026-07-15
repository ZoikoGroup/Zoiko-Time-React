import React from "react";

export default function ResponsibleAIFAQ() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 py-16 md:py-20">
      <div className="mx-auto max-w-[1180px] px-5 md:px-6">

        {/* Header */}
        <div className="text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Questions
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight text-slate-800 dark:text-white">
            Responsible AI FAQs
          </h2>

        </div>


        {/* FAQ List */}
        <div className="mt-10 space-y-4">

          <div className="flex items-start gap-3">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gray-700 dark:bg-gray-300" />

            <p className="text-base leading-6 text-gray-700 dark:text-gray-300">
              Does ZoikoTime use AI to make decisions about workers?
            </p>
          </div>


          <div className="flex items-start gap-3">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gray-700 dark:bg-gray-300" />

            <p className="text-base leading-6 text-gray-700 dark:text-gray-300">
              How does ZoikoTime keep AI explainable?
            </p>
          </div>
                    <div className="flex items-start gap-3">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gray-700 dark:bg-gray-300" />

            <p className="text-base leading-6 text-gray-700 dark:text-gray-300">
              Can we control who sees AI signals?
            </p>
          </div>


          <div className="flex items-start gap-3">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gray-700 dark:bg-gray-300" />

            <p className="text-base leading-6 text-gray-700 dark:text-gray-300">
              How does this protect worker trust?
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}