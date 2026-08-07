"use client";

import Image from "next/image";

const workModels = [
  {
    title: "Retail & Multi-Site",
    image: "/customer-stories/work-model-1.png",
  },
  {
    title: "Warehouse & Logistics",
    image: "/customer-stories/work-model-2.png",
  },
  {
    title: "Shift-Based Operations",
    image: "/customer-stories/work-model-3.png",
  },
  {
    title: "Corporate & Hybrid",
    image: "/customer-stories/customer-story.png",
  },
];

export default function BrowseByWorkModel() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
              Browse by Work Model
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-4xl">
            Stories that match how your
            <br className="hidden sm:block" />
            teams work.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {workModels.map((item) => (
            <div
              key={item.title}
              className="group relative h-64 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/35 to-transparent" />

              {/* Title */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}