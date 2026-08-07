"use client";

import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

export default function CustomerStories() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-sm bg-teal-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
                Customer Stories
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-slate-900 dark:text-white lg:text-5xl">
              Verified outcomes.
              <br />
              Not marketing
              <br />
              claims.
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-lg text-base leading-7 text-slate-600 dark:text-slate-400">
              Every story here is consented by the customer, reviewed against
              its source, date-stamped, and labeled with exactly what's been
              verified — nothing more.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-teal-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-teal-700">
                Explore Customer Stories
              </button>

              <button className="rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800">
                Talk to Sales
              </button>
            </div>

            {/* Features */}
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                <FiCheckCircle className="h-4 w-4 text-teal-600" />
                Consent required
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                <FiCheckCircle className="h-4 w-4 text-teal-600" />
                Source-reviewed
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                <FiCheckCircle className="h-4 w-4 text-teal-600" />
                Date-stamped
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Image */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800">
              <Image
                src="/customer-stories/customer-story.png"
                alt="Customer Story"
                width={560}
                height={460}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-6 max-w-xs rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                Featured Story
              </p>

              <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">
                Multi-Site Retailer Cuts Exception Review Time
              </h3>

              <div className="mt-5 flex items-end gap-3">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">
                  62%
                </span>

                <span className="pb-1 text-sm text-slate-500 dark:text-slate-400">
                  faster exception resolution
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-teal-700 dark:border-emerald-900 dark:bg-emerald-900/20 dark:text-teal-300">
                  Consented
                </span>

                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Verified Jul 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}