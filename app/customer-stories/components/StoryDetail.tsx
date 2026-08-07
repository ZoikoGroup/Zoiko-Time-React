"use client";

import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

const metrics = [
  {
    value: "62%",
    label: "Faster exception resolution",
  },
  {
    value: "40+",
    label: "Facilities unified",
  },
  {
    value: "6 wks",
    label: "Time to full rollout",
  },
];

const verified = [
  "Consent obtained · Jun 2026",
  "Source metrics reviewed",
  "Published Jul 2026",
];

export default function StoryDetail() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
              Story Detail
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            What a full story page looks like.
          </h2>
        </div>

        {/* Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          {/* Hero */}
          <div className="relative h-72">
            <Image
              src="/customer-stories/story-detail-hero.png"
              alt="Story"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/60 to-slate-900/90" />

            <div className="absolute bottom-10 left-8 right-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
                Logistics · Enterprise · Verified Jul 2026
              </p>

              <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-white">
                National Logistics Customer Cuts Exception Review Time by 62%
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-[1.6fr_1fr]">
            {/* Left */}
            <div className="p-8 lg:p-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
                  Challenge
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Exception reviews were handled locally at each facility with
                  no shared record, making audits slow and inconsistent.
                </p>
              </div>

              <div className="mt-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
                  Approach
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  The team consolidated policy configuration into a single
                  governed model and routed every exception into one reviewer
                  queue.
                </p>
              </div>

              {/* Quote */}
              <div className="mt-10 rounded-r-xl border-l-4 border-teal-600 bg-slate-50 p-6 dark:bg-slate-800">
                <div className="flex items-start gap-4">
                  <Image
                    src="/customer-stories/customer-avatar.png"
                    alt="Customer"
                    width={44}
                    height={44}
                    className="rounded-full"
                  />

                  <div>
                    <blockquote className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                      "We finally have one evidence trail our auditors trust,
                      instead of forty different spreadsheets."
                    </blockquote>

                    <p className="mt-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      VP of Operations, National Logistics Customer
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
                  Outcome
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Exception resolution time dropped 62% within the first two
                  quarters, with every decision now attached to a reviewer note.
                </p>
              </div>
            </div>

            {/* Right */}
            <aside className="border-t border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900 lg:border-l lg:border-t-0">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Verified Metrics
              </h3>

              <div className="mt-6 space-y-6">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className={`${
                      index !== 0
                        ? "border-t border-slate-200 pt-6 dark:border-slate-800"
                        : ""
                    } flex items-center justify-between`}
                  >
                    <span className="text-3xl font-bold text-teal-600">
                      {metric.value}
                    </span>

                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-slate-200 pt-8 dark:border-slate-800">
                <div className="space-y-4">
                  {verified.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <FiCheckCircle className="h-4 w-4 text-teal-600" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}