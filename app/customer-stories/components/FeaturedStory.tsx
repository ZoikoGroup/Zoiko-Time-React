"use client";

import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

export default function FeaturedStory() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
              Featured Story
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-4xl">
            This quarter&apos;s highlighted
             implementation.
          </h2>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[350px] lg:min-h-[540px]">
              <Image
                src="/customer-stories/featured-story.png"
                alt="Featured Story"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="bg-slate-50 p-8 dark:bg-slate-900 lg:p-10">
              <h3 className="text-2xl font-semibold leading-tight text-slate-900 dark:text-white">
                National Logistics Customer Cuts
                <br />
                Exception Review Time by 62%
              </h3>

              <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-400">
                A multi-site logistics operator consolidated policy
                configuration across 40+ facilities and moved exception review
                into a single governed queue.
              </p>

              {/* Metrics */}
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-bold text-teal-600">62%</h4>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Faster exception resolution
                  </p>
                </div>

                <div>
                  <h4 className="text-4xl font-bold text-teal-600">40+</h4>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Facilities on one policy model
                  </p>
                </div>

                <div>
                  <h4 className="text-4xl font-bold text-teal-600">6 wks</h4>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Time to full rollout
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 dark:border-emerald-900 dark:bg-emerald-900/20">
                  <FiCheckCircle className="h-4 w-4 text-teal-700 dark:text-teal-300" />

                  <span className="text-xs font-semibold text-teal-700 dark:text-teal-300">
                    Consented
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 dark:border-emerald-900 dark:bg-emerald-900/20">
                  <FiCheckCircle className="h-4 w-4 text-teal-700 dark:text-teal-300" />

                  <span className="text-xs font-semibold text-teal-700 dark:text-teal-300">
                    Source-reviewed
                  </span>
                </div>

                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Verified Jul 2026
                </span>
              </div>

              {/* Button */}
              <button
                type="button"
                className="mt-10 rounded-full bg-teal-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                Read Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}