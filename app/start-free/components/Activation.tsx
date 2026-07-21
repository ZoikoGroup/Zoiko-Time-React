import Image from "next/image";
import React from "react";

const steps = [
  {
    id: 1,
    image: "/start-free/workspace.png",
    step: "STEP 1",
    title: "Workspace created",
    description: "Tenant ready · profile complete",
  },
  {
    id: 2,
    image: "/start-free/workers.png",
    step: "STEP 2",
    title: "Workers invited",
    description: "3+ workers or directory import",
  },
  {
    id: 3,
    image: "/start-free/first-entry.png",
    step: "STEP 3",
    title: "First time entry",
    description: "Core product use proven",
  },
  {
    id: 4,
    image: "/start-free/report.png",
    step: "STEP 4",
    title: "First report",
    description: "First management value moment",
  },
  {
    id: 5,
    image: "/start-free/policy.png",
    step: "STEP 5",
    title: "Policy configured",
    description: "Governed workforce assurance",
  },
];

export default function Activation() {
  return (
    <section className="w-full border-b border-gray-200 bg-white py-16 dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">

          {/* Left Content */}
          <div className="w-full lg:w-[320px] lg:flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-sm text-teal-700 dark:text-teal-400">
                ✦
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">
                5-Step Activation
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-900 dark:text-white">
              From signup to
              <br />
              operating evidence.
            </h2>

            <p className="mt-5 max-w-sm text-base leading-7 text-slate-600 dark:text-slate-400">
              Follow five milestones to turn a trial into a live workforce
              assurance system.
            </p>
          </div>

          {/* Right Cards */}
          <div className="flex flex-1 flex-wrap justify-center gap-5 lg:flex-nowrap">
            {steps.map((item) => (
              <div
                key={item.id}
                className="group w-full max-w-[170px] rounded-[22px] border border-[#DCE8E4] bg-[#F2FBF9] px-5 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
              >
                {/* Icon */}
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F8F3] dark:bg-[#11443F]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={26}
                    height={26}
                    className="object-contain"
                  />
                </div>

                {/* Step */}
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  {item.step}
                </p>

                {/* Title */}
                <h3 className="mt-3 text-[15px] font-semibold leading-6 text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}