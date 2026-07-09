import React from "react";

export default function DueDiligence() {
  const reviewCriteria = [
    "Corporate identity, legal status, ownership, contracting entity, and operational locations",
    "Information security controls including access control, encryption, vulnerability management, logging, and incident response",
    "Privacy posture including role classification, processing purpose, data minimization, retention, deletion, and data subject assistance",
    "Relevant assurance materials: SOC 2 Type II, ISO/IEC 27001, ISO/IEC 27701, penetration test summaries, or equivalent evidence",
    "Data protection terms including processor obligations, confidentiality, breach notification, return or deletion, and audit support",
    "Geographic processing footprint and any restricted transfer mechanisms required for EU, UK, Swiss, or other regulated personal data",
  ];

  return (
    <section className="py-12 md:py-14">
      <div className="mx-auto max-w-[696px] px-5 sm:px-6 lg:px-0">
        {/* Section Title */}
        <h2 className="text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          4. Sub-processor Due Diligence Standard
        </h2>

        {/* Divider */}
        <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600" />

        {/* Description */}
        <p className="mt-8 text-base leading-7 text-slate-700 dark:text-slate-300">
          Before authorizing a sub-processor, ZoikoTime performs risk-based due
          diligence proportionate to the sensitivity of the data, the
          criticality of the service, and the jurisdictions involved. Minimum
          review criteria include:
        </p>

        {/* Review Criteria */}
        <ul className="mt-8 space-y-4">
          {reviewCriteria.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-[2px] w-4 shrink-0 text-base font-bold leading-7 text-teal-600">
                ›
              </span>

              <p className="flex-1 text-base leading-7 text-slate-700 dark:text-slate-300">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}