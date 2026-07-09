import React from "react";

export default function PrivacyNoticeCard() {
  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-r-lg border-l-[3px] border-teal-600 bg-emerald-50 dark:bg-emerald-950/30 p-5">
          <p className="text-sm font-semibold leading-6 text-teal-700 dark:text-teal-300">
            ZoikoTime applies a privacy-by-design approach to tracking
            technologies. We treat cookies as part of our wider privacy,
            security, consent, and audit-control framework — not as a cosmetic
            website issue.
          </p>
        </div>
      </div>
    </section>
  );
}