import React from "react";

export default function DisclaimersSection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 26 */}
      <section className="mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
          26. Warranties and Disclaimers
        </h2>

        <div className="w-12 h-1 bg-teal-600 rounded-full mb-5"></div>

        <div className="bg-gray-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 md:p-6">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-300 leading-6">
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." EXCEPT AS
            EXPRESSLY STATED IN THESE TERMS OR AN ORDER FORM, ZOIKO TECH INC.
            MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
            NON-INFRINGEMENT, TITLE, QUIET ENJOYMENT, OR ACCURACY.
          </p>
        </div>
      </section>
    </div>
  );
}