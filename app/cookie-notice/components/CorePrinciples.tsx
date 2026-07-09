import React from "react";

const principles = [
  "Strictly necessary technologies are used only to provide, secure, authenticate, administer, and protect the service.",
  "Non-essential cookies are used only where a lawful basis applies and, where required, after consent has been obtained.",
  "Cookie choices must be as easy to change as they are to give — consent must be granular, informed, and capable of being withdrawn.",
  "Sensitive workforce contexts require additional restraint, transparency, and purpose limitation.",
  "Advertising and retargeting technologies must not be used inside authenticated worker environments unless specifically assessed, disclosed, and enabled under an appropriate lawful basis.",
];

export default function CorePrinciples() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          4. Core Principles
        </h2>

        {/* Accent Line */}
        <div className="mt-3 mb-6 h-1 w-12 rounded-full bg-teal-600" />

        {/* Intro */}
        <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
          ZoikoTime applies the following principles to cookies and tracking
          technologies:
        </p>

        {/* Principles List */}
        <ul className="space-y-5">
          {principles.map((principle, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 text-lg font-bold text-teal-600 dark:text-teal-400">
                ›
              </span>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
                {principle}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}