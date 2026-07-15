// components/Transparency.tsx

import React from "react";

export default function Transparency() {
  return (
    <section className="bg-gray-50 py-16 md:py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Transparency
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Worker transparency comes first
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Responsible screenshot use depends on workers understanding the
            policy that applies to them.
          </p>
        </div>

        {/* Notice Card */}
        <div className="mx-auto mt-14 max-w-5xl rounded-xl border border-orange-200 bg-yellow-50 p-6 shadow-sm dark:border-yellow-700 dark:bg-yellow-900/20">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-800/40 dark:text-yellow-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v4m0 4h.01M10.29 3.86l-7.5 13A2 2 0 004.5 20h15a2 2 0 001.71-3.14l-7.5-13a2 2 0 00-3.42 0z"
                />
              </svg>
            </div>

            {/* Content */}
            <p className="text-sm leading-7 text-yellow-900 dark:text-yellow-100">
              <span className="font-semibold">
                Worker transparency first.
              </span>{" "}
              Workers should be able to understand whether screenshots are
              enabled, what may be captured, how often, who may review them,
              whether redaction applies, how long they're retained, and where
              to ask questions. Screenshots should never be used for covert
              monitoring or automatic judgment. See the{" "}
              <a
                href="#"
                className="font-semibold text-teal-700 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
              >
                Worker Guide
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}