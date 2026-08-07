"use client";

import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Plan patterns",
    value: "On-site / remote / hybrid",
  },
  {
    number: "2",
    title: "Declare availability",
    value: "Not live tracking",
  },
  {
    number: "3",
    title: "Record & review time",
    value: "Fair-record doctrine",
  },
  {
    number: "4",
    title: "Coordinate coverage",
    value: "Human decisions",
  },
  {
    number: "5",
    title: "Handle exceptions",
    value: "Owner & reason",
  },
  {
    number: "6",
    title: "Reconcile & report",
    value: "Team/zone, no ranking",
  },
];

export default function OperatingModel() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
            The Operating Model
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Six governed steps for distributed work
          </h2>
        </div>

        {/* Card */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_14px_40px_rgba(14,31,61,0.12)] dark:border-slate-800 dark:bg-slate-900">
          <div className="grid lg:grid-cols-2">
            {/* Left */}
            <div className="p-8 lg:p-10">
              <h3 className="text-2xl font-bold leading-tight text-slate-900 dark:text-white">
                Plan → declare → review → coordinate →
                <br />
                resolve → reconcile
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                The same fair, privacy-respecting workflow across every
                location and time zone — coverage from schedules and
                availability, never live tracking.
              </p>

              <div className="mt-8 divide-y divide-slate-200 dark:divide-slate-700">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="flex items-center gap-4 py-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-sm font-bold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                      {step.number}
                    </div>

                    <div className="font-semibold text-slate-900 dark:text-white">
                      {step.title}
                    </div>

                    <div className="ml-auto text-xs text-slate-500 dark:text-slate-400">
                      {step.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="bg-white dark:bg-slate-900">
              <Image
                src="/manage-remote-hybrid-work/operating-model.png"
                alt="Operating Model"
                width={600}
                height={584}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}