import React from "react";

export default function RestrictionSection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 7 */}
      <section className="mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
          7. Restrictions and Prohibited Conduct
        </h2>

        <div className="w-12 h-1 bg-teal-600 rounded-full mb-5"></div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7 mb-4">
          Customer and Authorized Users must not use the Services for any
          unlawful, unauthorized, harmful, or prohibited purpose. Key
          restrictions include:
        </p>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-teal-600 dark:text-teal-400 font-bold">
              ›
            </span>
            <span className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
              Circumventing security, authentication, or access controls
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-teal-600 dark:text-teal-400 font-bold">
              ›
            </span>
            <span className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
              Uploading malware, harmful code, or unauthorized automated
              scripts
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-teal-600 dark:text-teal-400 font-bold">
              ›
            </span>
            <span className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
              Using the Services for covert monitoring where notice or consent
              is legally required
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-teal-600 dark:text-teal-400 font-bold">
              ›
            </span>
            <span className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
              Reverse engineering, decompiling, or extracting proprietary code
              or model logic
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-teal-600 dark:text-teal-400 font-bold">
              ›
            </span>
            <span className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
              Using outputs as the sole basis for adverse employment action
              without human review
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-teal-600 dark:text-teal-400 font-bold">
              ›
            </span>
            <span className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
              Violating any applicable law, labor obligation, or data protection
              requirement
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-teal-600 dark:text-teal-400 font-bold">
              ›
            </span>
            <span className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
              Using the Services to build a competing product or service without
              written authorization
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}