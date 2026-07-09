import React from "react";

export default function ChangesNotice() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          9. Changes to This Cookie Notice
        </h2>

        {/* Accent Line */}
        <div className="mt-3 mb-6 h-1 w-12 rounded-full bg-teal-600" />

        {/* Content */}
        <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
          ZoikoTime may update this Cookie Notice to reflect changes in
          technology, law, product functionality, vendor relationships,
          regional requirements, or business operations. Material changes will
          be communicated through appropriate means. Where required by law,
          ZoikoTime will seek renewed consent before deploying new
          non-essential cookies or materially changing consent-based purposes.
        </p>
      </div>
    </section>
  );
}