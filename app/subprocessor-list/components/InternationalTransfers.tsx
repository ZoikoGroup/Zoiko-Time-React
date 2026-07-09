import React from "react";

export default function InternationalTransfers() {
  const safeguards = [
    "European Commission Standard Contractual Clauses (Module 3: Processor-to-Processor)",
    "UK International Data Transfer Addendum to the EU SCCs",
    "UK International Data Transfer Agreement",
    "Adequacy decisions where applicable",
    "Supplementary technical and organizational measures where required by Transfer Impact Assessments",
  ];

  return (
    <section className="py-12 md:py-14">
      <div className="mx-auto max-w-[696px] px-5 sm:px-6 lg:px-0">
        {/* Heading */}
        <h2 className="text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          7. International Transfers and Transfer Safeguards
        </h2>

        {/* Divider */}
        <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600"></div>

        {/* Description */}
        <div className="mt-8">
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            Where sub-processors process Customer Data outside the EEA, UK, or
            other jurisdictions with restricted transfer requirements,
            ZoikoTime ensures appropriate transfer safeguards are in place.
            Mechanisms may include:
          </p>
        </div>

        {/* Safeguards List */}
        <ul className="mt-8 space-y-5">
          {safeguards.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-0.5 text-base font-bold leading-7 text-teal-600">
                ›
              </span>

              <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}