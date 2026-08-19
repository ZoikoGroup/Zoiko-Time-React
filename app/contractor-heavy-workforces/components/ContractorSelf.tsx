"use client";

import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

const benefits = [
  "Plain-language view of engagement and time",
  "Submit corrections with a note attached",
  "Track status from recorded to exported",
];

export default function ContractorSelf() {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-10 px-4 py-7 sm:px-6 lg:flex-row lg:items-center lg:gap-14 lg:px-8">
        {/* Image */}
        <div className="w-full flex-1">
          <div className="relative aspect-[530/424] w-full overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
            <Image
              src="/contractor-heavy-workforces/contractor-self-service.png"
              alt="Contractor self-service workspace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex w-full flex-1 flex-col items-start gap-3.5 pt-1">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Contractor Self-Service
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-semibold leading-[48px] text-slate-800 dark:text-white">
            Contractors see their own record —
            <br className="hidden sm:block" />
            plainly
          </h2>

          {/* Description */}
          <p className="w-full max-w-[560px] text-base font-normal leading-6 text-gray-500 dark:text-slate-400">
            Every contractor can view their engagement, submitted time,
            project attribution, and approval status without chasing a project
            manager.
          </p>

          {/* Benefits */}
          <div className="w-full pt-1.5">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2.5 py-2"
              >
                {/* Check icon */}
                <div className="flex h-4 w-4 shrink-0 items-center justify-center">
                  <FiCheckCircle
                    className="h-4 w-4 text-teal-600 dark:text-teal-400"
                    strokeWidth={2}
                  />
                </div>

                <span className="text-sm font-normal leading-6 text-gray-700 dark:text-slate-300">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}