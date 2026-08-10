"use client";

import Image from "next/image";

const benefits = [
  "Shared queue across managers and finance",
  "Project and cost center shown alongside time",
  "No auto-approval — a person signs off",
];

export default function ManagerWorkspace() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-10 lg:flex-row lg:gap-14">
          {/* Content */}
          <div className="flex w-full flex-1 flex-col items-start gap-3.5 pt-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

              <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
                Manager &amp; Project Lead Workspace
              </span>
            </div>

            {/* Heading */}
            <h2 className="w-full text-3xl font-semibold leading-[48px] text-slate-800 dark:text-white">
              Approve with project context, not
              <br className="hidden sm:block" />
              guesswork.
            </h2>

            {/* Description */}
            <p className="w-full max-w-[570px] text-base font-normal leading-6 text-gray-500 dark:text-slate-400">
              Managers and project leads review contractor time alongside
              project budget, assignment, and prior approvals — every decision
              requires a note.
            </p>

            {/* Benefits */}
            <div className="w-full pt-1.5">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2.5 py-2"
                >
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center">
                    <div className="h-3 w-3 rounded-full border-[1.5px] border-blue-600 dark:border-blue-400" />
                  </div>

                  <span className="text-sm font-normal leading-6 text-gray-700 dark:text-slate-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full flex-1">
            <div className="relative aspect-[530/424] w-full overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
              <Image
                src="/contractor-heavy-workforces/manager-project-lead.png"
                alt="Manager and project lead workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}