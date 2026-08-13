"use client";

import Image from "next/image";

const points = [
  "Business: responsibility, status, and authorization stay visible",
  "Worker trust: no covert monitoring or productivity scoring",
  "Procurement: scope, escalation, and evidence stay reviewable",
];

export default function WhyGovernedSupport() {
  return (
    <section className="w-full bg-gray-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8 lg:py-[92px]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* =====================================================
              IMAGE
          ===================================================== */}
          <div className="relative w-full">
            <div className="relative aspect-[530/424] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
              <Image
                src="/enterprise-support/governed-support.png"
                alt="Why governed support matters"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 530px"
              />
            </div>
          </div>

          {/* =====================================================
              CONTENT
          ===================================================== */}
          <div className="w-full">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-teal-600 dark:bg-teal-400" />

              <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
                Why Governed Support Matters
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-4
                max-w-[500px]
                text-3xl
                font-semibold
                leading-[1.2]
                tracking-tight
                text-slate-800
                dark:text-slate-100
                sm:text-4xl
                sm:leading-10
              "
            >
              Unowned cases and hidden
              <br className="hidden sm:block" />
              escalation cost trust.
            </h2>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-[500px]
                text-sm
                font-normal
                leading-6
                text-gray-500
                dark:text-slate-400
                sm:text-base
              "
            >
              Duplicate actions, stale guidance, and unsupported promises
              erode confidence fast. Governed support keeps responsibility,
              status, and limitations visible at every step.
            </p>

            {/* Points */}
            <div className="mt-7 space-y-1">
              {points.map((point) => (
                <div
                  key={point}
                  className="
                    flex
                    min-h-10
                    items-center
                    gap-3
                  "
                >
                  {/* Check Icon */}
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center text-teal-600 dark:text-teal-400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="5.75"
                        stroke="currentColor"
                        strokeWidth="1.42"
                      />

                      <path
                        d="M5.4 8.05L7.15 9.75L10.65 6.25"
                        stroke="currentColor"
                        strokeWidth="1.42"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  {/* Text */}
                  <p className="text-sm font-normal leading-6 text-gray-700 dark:text-slate-300">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}