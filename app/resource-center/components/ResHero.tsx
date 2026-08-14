"use client";

import Image from "next/image";
import Link from "next/link";

export default function ResHero() {
  return (
    <section className="w-full bg-white dark:bg-[#0b1220] transition-colors duration-300">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7 py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          
          {/* Content */}
          <div className="flex flex-col items-start">
            {/* Label */}
            <div className="inline-flex items-center rounded-full bg-gray-100 px-3.5 py-1.5 dark:bg-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">
                Resource Center
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-5 max-w-[600px] text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.02] dark:text-white">
              Find the current
              <br />
              ZoikoTime
              <br />
              guidance your
              <br />
              <span className="text-emerald-400">
                task requires
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[650px] text-base font-normal leading-7 text-gray-600 sm:text-lg dark:text-gray-300">
              Search and browse current onboarding, help, documentation,
              learning, developer, proof, and release resources by task,
              role, product area, authority, and applicability.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/resources"
                className="inline-flex h-14 items-center justify-center rounded-lg bg-emerald-400 px-6 text-base font-bold text-white outline outline-1 outline-transparent transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:focus:ring-offset-[#0b1220]"
              >
                Explore Resources
              </Link>

              <Link
                href="/getting-started"
                className="inline-flex h-14 items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-base font-bold text-slate-900 transition hover:bg-gray-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Getting Started
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="w-full">
            <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-[0px_18px_50px_0px_rgba(11,18,32,0.10)] dark:border-white/10 dark:bg-white/5">
              <Image
                src="/resource-center/image.png"
                alt="ZoikoTime Resource Center"
                width={598}
                height={767}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}