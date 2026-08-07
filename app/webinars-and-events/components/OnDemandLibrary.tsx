"use client";

import Image from "next/image";
import { FiPlay } from "react-icons/fi";

const videos = [
  {
    image: "/webinars-events/library-1.png",
    category: "Evidence & Governance",
    title: "Inside the Break & Rest State Model",
    date: "Recorded live · Jul 14, 2026",
    duration: "38 min",
  },
  {
    image: "/webinars-events/library-2.png",
    category: "Product Mastery",
    title: "Reviewer Queues, Start to Finish",
    date: "Recorded live · Jun 26, 2026",
    duration: "29 min",
  },
  {
    image: "/webinars-events/library-3.png",
    category: "Community Q&A",
    title: "Ask Us Anything: Trust & Boundaries",
    date: "Recorded live · Jun 3, 2026",
    duration: "51 min",
  },
];

export default function OnDemandLibrary() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
              On-Demand Library
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            Catch up anytime.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Thumbnail */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur dark:bg-slate-900/90">
                    <FiPlay className="ml-1 h-6 w-6 text-slate-900 dark:text-white" />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 rounded-md bg-slate-900/90 px-3 py-1 text-xs font-semibold text-white">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                  {video.category}
                </p>

                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">
                  {video.title}
                </h3>

                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                  {video.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}