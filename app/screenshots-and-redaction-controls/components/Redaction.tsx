// components/Redaction.tsx

import React from "react";
import Link from "next/link";

const redactionItems = [
  {
    title: "Manual redaction",
    description:
      "Authorized users may redact sensitive portions of screenshots before review, export, or packaging.",
  },
  {
    title: "Automated redaction support",
    description:
      "Where supported, ZoikoTime may help detect and mask personal data, passwords, payment details, or private messages.",
  },
  {
    title: "Role-based redaction visibility",
    description:
      "Different users may see different levels of detail depending on permissions, review purpose, and policy.",
  },
  {
    title: "Export redaction",
    description:
      "Screenshots included in exports or evidence packages respect redaction rules where supported.",
  },
  {
    title: "Worker-sensitive data",
    description:
      "Reduce exposure of personal, health-related, financial, family, or non-work information.",
  },
  {
    title: "Client-sensitive data",
    description:
      "Protect client confidential information, legal work product, financial systems, source code, or regulated data.",
  },
  {
    title: "Redaction audit history",
    description:
      "Redaction actions are logged to show who redacted content, when, and why.",
  },
  {
    title: "Non-retaliatory review",
    description:
      "Redaction supports fair review by reducing unnecessary exposure of irrelevant or sensitive information.",
  },
];

export default function Redaction() {
  return (
    <section className="bg-white py-16 md:py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Redaction
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Redaction controls for sensitive information
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Reduce exposure of sensitive or irrelevant information before
            broader review, export, or evidence packaging.
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto mt-14 max-w-5xl space-y-8">
          {redactionItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-slate-200 pb-6 last:border-none dark:border-slate-700"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Related Link */}
        <div className="mt-12 text-center">
  <p className="text-base text-gray-500 dark:text-gray-400">
    Related:{" "}
    <Link
      href="/security-addendum"
      className="font-semibold text-teal-700 transition hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
    >
      View Security Addendum →
    </Link>
          </p>
        </div>
      </div>
    </section>
  );
}