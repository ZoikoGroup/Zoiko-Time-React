import React from "react";

export default function AuditIntegrity() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-[696px] px-4 sm:px-6 lg:px-0">
        {/* Heading */}
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          13. Audit Integrity and Non-Destructive Corrections
        </h2>

        {/* Underline */}
        <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600 dark:bg-teal-500" />

        {/* Paragraph */}
        <p className="mt-7 font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
          Because ZoikoTime is designed to support workforce assurance, legal
          defensibility and chain-of-custody evidence, certain records are
          retained in append-only or audit-preserving form.
        </p>

        {/* Callout Box */}
        <div className="mt-8 rounded-r-lg border-l-[3px] border-teal-600 bg-emerald-50 p-5 dark:border-teal-500 dark:bg-teal-900/20">
          <p className="font-['Plus_Jakarta_Sans'] text-sm font-semibold leading-6 text-teal-700 dark:text-teal-300">
            Where a record is inaccurate, disputed or superseded, the preferred
            correction method is to add a correction, dispute marker,
            explanatory note, adjusted record, replacement version,
            administrative override, or human-review decision — rather than
            deleting or silently rewriting the original record.
          </p>
        </div>

        {/* Paragraph */}
        <p className="mt-8 font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
          This approach protects workers, Customers and Zoiko Tech Inc. by
          preserving context, preventing tampering, supporting transparency and
          enabling reconstruction of how workforce conclusions were reached at a
          point in time.
        </p>
      </div>
    </section>
  );
}