"use client";

import React from "react";
import { Check } from "lucide-react";

export default function FitCriteria() {
  const criteria = [
    "250+ users",
    "Multi-country workforce",
    "Regulated operations",
    "SSO / SAML",
    "Advanced policy controls",
    "Legal hold",
    "Custom retention",
    "Procurement review",
    "Dedicated rollout",
  ];

  return (
    <section className="bg-gray-50 py-16 transition-colors duration-300 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Fit Criteria
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Is this review right for you?
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-400">
            Best suited to Enterprise and Sovereign evaluations with one or
            more of the following:
          </p>
        </div>

        {/* Criteria Pills */}
        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-4">
          {criteria.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-full border border-slate-300 bg-white px-5 py-3 transition-all duration-300 hover:border-teal-600 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-teal-500"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded border border-slate-300 dark:border-slate-600">
                <Check className="h-3.5 w-3.5 text-teal-600" />
              </div>

              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}