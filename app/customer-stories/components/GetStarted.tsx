"use client";

import Link from "next/link";

export default function GetStarted() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-[#14345A] to-[#1E356D] px-6 py-16 text-center shadow-xl sm:px-10 lg:px-16 lg:py-20">
          {/* Label */}
          <div className="mb-5 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
              Get Started
            </span>
          </div>

          {/* Heading */}
          <h2 className="mx-auto max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
            See what a governed rollout looks like for you.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300">
            Explore verified stories from teams like yours, or talk to our team
            about your own implementation.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="rounded-full bg-teal-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
            >
              Explore Customer Stories
            </Link>

            <Link
              href="#"
              className="rounded-full border border-white/30 bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Get a Demo
            </Link>

            <Link
              href="#"
              className="rounded-full border border-white/30 bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Talk to Sales
            </Link>
          </div>

          {/* Bottom Note */}
          <p className="mt-8 text-sm text-slate-400">
            No fabricated customers, logos, metrics, or testimonials — ever.
          </p>
        </div>
      </div>
    </section>
  );
}