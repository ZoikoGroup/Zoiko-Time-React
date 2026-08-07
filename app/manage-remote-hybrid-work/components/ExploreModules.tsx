"use client";

import Image from "next/image";

const modules = [
  {
    image: "/manage-remote-hybrid-work/daily-time-review.png",
    title: "Daily Time Review",
    description:
      "Fair review of submitted & approved time, everywhere",
  },
  {
    image: "/manage-remote-hybrid-work/exception-center.png",
    title: "Exception Center",
    description:
      "Gaps & conflicts routed to an owner with a reason",
  },
  {
    image: "/manage-remote-hybrid-work/my-workday.png",
    title: "My Workday",
    description:
      "Each worker sees their own schedule, time & corrections",
  },
];

export default function ExploreModules() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
            Explore The Modules
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Every surface, one governed model
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_6px_18px_rgba(14,31,61,0.05)] dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Screenshot */}
              <Image
                src={module.image}
                alt={module.title}
                width={384}
                height={192}
                className="w-full object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {module.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}