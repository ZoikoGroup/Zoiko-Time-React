import React from "react";

export default function InternationalTransfers() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-0 py-10 bg-white dark:bg-slate-950">
      <div className="w-full max-w-[696px] mx-auto">
        {/* Heading */}
        <h2
          className="
            text-2xl
            font-extrabold
            leading-8
            text-slate-900
            dark:text-white
          "
        >
          13. International Transfers
        </h2>

        {/* Underline */}
        <div className="w-12 h-[3px] bg-teal-600 rounded-full mt-3 mb-8" />

        {/* Paragraph 1 */}
        <p
          className="
            text-base
            font-normal
            leading-7
            text-slate-700
            dark:text-slate-300
            mb-8
          "
        >
          ZoikoTime operates from the United States and may use personnel,
          infrastructure, affiliates, and service providers in the United
          States, United Kingdom, European Economic Area, and other
          jurisdictions. Personal information may be transferred
          internationally where necessary to provide the Services.
        </p>

        {/* Paragraph 2 */}
        <p
          className="
            text-base
            font-normal
            leading-7
            text-slate-700
            dark:text-slate-300
          "
        >
          Where required, ZoikoTime uses appropriate transfer safeguards
          including the European Commission Standard Contractual Clauses, the
          UK International Data Transfer Addendum, the UK International Data
          Transfer Agreement, adequacy decisions, or other lawful mechanisms.
          Customers should review the Data Processing Addendum for transfer
          mechanisms applicable to Customer Data.
        </p>
      </div>
    </section>
  );
}