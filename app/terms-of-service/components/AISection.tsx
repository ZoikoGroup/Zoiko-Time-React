import React from "react";

export default function AISection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 10 */}
      <section className="mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
          10. Artificial Intelligence, Automated Insights, and
          Decision-Support Limits
        </h2>

        <div className="w-12 h-1 bg-teal-600 rounded-full mb-5"></div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7 mb-4">
          ZoikoTime may include AI-assisted features, anomaly detection,
          confidence scoring, and automated insights. These are decision-support
          tools designed to assist human review—they must not replace legally
          required managerial judgment or required legal processes.
        </p>

        <div className="bg-emerald-50 dark:bg-gray-800 border-l-4 border-teal-600 rounded-lg p-4 sm:p-5 md:p-6 mb-4">
          <p className="text-sm sm:text-base font-semibold text-teal-700 dark:text-teal-400 leading-6 sm:leading-7">
            ZoikoTime AI outputs must not be used as the sole basis for any
            adverse employment action, disciplinary decision, termination,
            compensation reduction, or other legally significant determination.
          </p>
        </div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
          Customer is responsible for providing meaningful human review,
          evaluating context, and maintaining records where required. Zoiko Tech
          Inc. does not use identifiable Customer Data to train general AI
          models for other customers unless expressly agreed in a signed written
          instrument.
        </p>
      </section>
    </div>
  );
}