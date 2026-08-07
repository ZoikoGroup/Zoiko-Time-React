"use client";

import Image from "next/image";
import Link from "next/link";

export default function FeaturedEvent() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-teal-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
              Featured Event
            </span>
          </div>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-4xl">
            This month&apos;s flagship session.
          </h2>
        </div>

        {/* Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[320px] lg:min-h-[560px]">
              <Image
                src="/webinars-events/featured-event.png"
                alt="Featured Event"
                fill
                className="object-cover"
              />

              <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 shadow-md dark:bg-slate-900">
                <span className="text-xs font-semibold text-teal-700 dark:text-teal-400">
                  Live · Hybrid
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="bg-slate-50 p-8 dark:bg-slate-900 lg:p-12">
              <h3 className="text-2xl font-semibold leading-tight text-slate-900 dark:text-white">
                Governed Time, Explained: A Walkthrough of the Evidence Model
              </h3>

              <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Join our compliance and product leads for a live walkthrough of
                how ZoikoTime builds a reviewable record — from policy
                configuration to human-reviewed evidence.
              </p>

              {/* Details */}
              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M8 3v4M16 3v4M3 10h18" />
                  </svg>

                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    Wed, Oct 20 · shown in your local time
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v6l4 2" />
                  </svg>

                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    45 minutes + live Q&amp;A
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M7 10h10M7 14h6" />
                  </svg>

                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    Captions and transcript provided
                  </span>
                </div>
              </div>

              {/* Speakers */}
              <div className="mt-10 flex items-center">
                <div className="flex -space-x-2">
                  <Image
                    src="/webinars-events/speaker-1.png"
                    alt="Speaker 1"
                    width={34}
                    height={34}
                    className="rounded-full border-2 border-white dark:border-slate-900"
                  />

                  <Image
                    src="/webinars-events/speaker-2.png"
                    alt="Speaker 2"
                    width={34}
                    height={34}
                    className="rounded-full border-2 border-white dark:border-slate-900"
                  />
                </div>

                <span className="ml-4 text-sm text-slate-500 dark:text-slate-400">
                  2 verified speakers
                </span>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-8 text-sm font-semibold text-white transition hover:bg-teal-700"
                >
                  Registrations Open Soon
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}