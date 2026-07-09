import React from "react";

export default function PurposeScope() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          1. Purpose and Scope
        </h2>

        {/* Accent Line */}
        <div className="mt-3 mb-6 h-1 w-12 rounded-full bg-teal-600" />

        {/* Paragraph 1 */}
        <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
          This Cookie Notice explains how Zoiko Tech Inc. uses cookies, pixels,
          local storage, software development kits, tags, device identifiers,
          and similar technologies in connection with ZoikoTime, including
          www.zoikotime.com, related ZoikoTime product portals, web
          applications, mobile applications, account administration tools,
          support channels, and any other digital service that links to this
          Cookie Notice.
        </p>

        {/* Paragraph 2 */}
        <p className="mt-6 text-base leading-7 text-slate-700 dark:text-slate-300">
          This Cookie Notice applies to visitors, prospects, customers,
          administrators, authorized users, workers, contractors, and other
          individuals who access or interact with ZoikoTime digital services.
        </p>
      </div>
    </section>
  );
}