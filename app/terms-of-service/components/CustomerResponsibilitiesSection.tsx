import React from "react";

export default function CustomerResponsibilitiesSection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 8 */}
      <section className="mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
          8. Customer Responsibilities for Workforce Deployment
        </h2>

        <div className="w-12 h-1 bg-teal-600 rounded-full mb-5"></div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7 mb-4">
          Customers are responsible for deciding whether and how to deploy
          ZoikoTime in their workplaces. This includes providing legally
          required worker notices, establishing a lawful basis for processing,
          completing works council or union consultation where required,
          configuring settings appropriately, and ensuring compliance with all
          applicable employment, labor, privacy, and data protection laws.
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
          ZoikoTime provides decision-support outputs and operational insights.
          Customers must not use ZoikoTime as the sole basis for employment,
          disciplinary, compensation, termination, promotion, legal, or
          similarly significant decisions without appropriate human review and
          applicable due process.
        </p>
      </section>
    </div>
  );
}