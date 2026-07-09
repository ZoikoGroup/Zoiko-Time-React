import React from "react";

const legalHoldPoints = [
  "Legal holds must identify the hold owner, scope, reason, effective date, affected systems, and review cadence where practicable.",
  "Data subject deletion requests and customer deletion requests may be paused for data subject to legal hold.",
  "Access to data under legal hold should be restricted to authorized legal, compliance, security, or administrator personnel.",
  "Legal holds should be periodically reviewed and released when the underlying legal or business need no longer exists.",
  "Upon release of a legal hold, data returns to the ordinary retention and deletion rules unless another hold or legal basis applies.",
];

export default function LegalHold() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-[696px] px-4 sm:px-6 lg:px-0">
        {/* Heading */}
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          11. Legal Hold
        </h2>

        {/* Underline */}
        <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600 dark:bg-teal-500" />

        {/* Paragraph 1 */}
        <p className="mt-7 font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
          ZoikoTime may suspend ordinary deletion, modification or destruction
          of records when Zoiko Tech Inc., Zoiko Group Inc., a Customer, a
          regulator, a court, law enforcement authority, auditor, insurer,
          counsel or authorized governance function identifies that data may be
          relevant to litigation, investigation, audit, regulatory inquiry,
          employment dispute, wage/hour claim, billing dispute, security
          incident, or other legally significant matter.
        </p>

        {/* Paragraph 2 */}
        <p className="mt-6 font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
          A legal hold may apply to a Customer workspace, specific worker
          records, time periods, evidence types, audit logs, AI insight records,
          support tickets, billing records, security logs, exports, backups or
          any other data category reasonably relevant to the matter.
        </p>

        {/* Bullet List */}
        <div className="mt-8 space-y-5">
          {legalHoldPoints.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="mt-1 text-lg font-bold text-teal-600 dark:text-teal-400">
                ›
              </span>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}