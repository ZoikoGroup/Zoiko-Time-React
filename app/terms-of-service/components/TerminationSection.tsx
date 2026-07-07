import React from "react";

export default function TerminationSection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 21 */}
      <section className="mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
          21. Term and Termination
        </h2>

        <div className="w-12 h-1 bg-teal-600 rounded-full mb-5"></div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7 mb-4">
          These Terms remain in effect until the end of the applicable
          Subscription Term or, for free services, until terminated by either
          party. Either party may terminate for material breach if the breach
          remains uncured 30 days after written notice. Zoiko Tech Inc. may
          suspend or terminate access immediately where required for security,
          legal compliance, or severe policy violations.
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
          Upon termination, Customer&apos;s access will cease. Customer Data
          may be available for export during any applicable post-termination
          retrieval period and will thereafter be deleted in accordance with
          the Data Retention, Deletion and Legal Hold Policy.
        </p>
      </section>
    </div>
  );
}