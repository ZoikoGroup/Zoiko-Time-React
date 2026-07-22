import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function FeaturedInsight() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[20px] bg-slate-900 shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex flex-col justify-center px-8 py-10 lg:px-11 lg:py-12">
              {/* Badge */}
              <div className="inline-flex w-fit items-center rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-500">
                  Featured Insight · Executive Guide · 8 min read
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-7 text-3xl font-semibold leading-tight text-white lg:text-[36px]">
                Workforce Assurance:
                <br />
                Why Modern Teams Need More
                <br />
                Than Time Tracking
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-md text-base leading-7 text-white/60">
                A leadership-level guide to building reliable workforce
                records, responsible visibility, stronger timesheet integrity,
                and audit-ready evidence across distributed and hybrid teams.
              </p>

              {/* Bottom */}
              <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-teal-500 text-sm font-bold text-white">
                    ZE
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      ZoikoTime Editorial Team
                    </p>

                    <p className="text-xs text-white/40">
                      May 2026
                    </p>
                  </div>
                </div>

                {/* Button */}
                <Link
                href = "/blog#featured-resources"
                 className="rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/30 transition hover:bg-teal-700">
                  Read Featured Insight →
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[420px]">
              <Image
                src="/FeaturedInsight/workforce.png"
                alt="Workforce Assurance"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}