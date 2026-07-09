import React from "react";

export default function LegalBasesConsent() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          7. Legal Bases and Consent
        </h2>

        {/* Accent Line */}
        <div className="mt-3 mb-6 h-1 w-12 rounded-full bg-teal-600" />

        {/* Paragraph 1 */}
        <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
          Depending on jurisdiction, ZoikoTime may rely on consent, legitimate
          interests, contractual necessity, legal obligation, or other lawful
          bases for the use of cookies and similar technologies.
        </p>

        {/* Paragraph 2 */}
        <p className="mt-6 text-base leading-7 text-slate-700 dark:text-slate-300">
          In jurisdictions where prior consent is required for non-essential
          cookies, ZoikoTime will seek consent before setting those cookies.
          ZoikoTime does not treat continued browsing as valid consent in
          jurisdictions where affirmative consent is required. Users may
          withdraw consent or modify cookie choices at any time through the
          Cookie Preference Center where available.
        </p>
      </div>
    </section>
  );
}