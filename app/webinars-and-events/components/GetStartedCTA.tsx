"use client";
import Link from "next/link";

export default function GetStartedCTA() {
  return (
    <section className="bg-slate-900 py-20 dark:bg-slate-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center lg:px-8">
        {/* Eyebrow */}
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
          Get Started
        </span>

        {/* Heading */}
        <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
          Come learn how governed time works, live.
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300">
          Browse what's coming up, catch a recording, or get updates when
          <br className="hidden sm:block" />
          new sessions go live.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
          <Link
            href="#upcoming-event"
            className="inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-8 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            Browse Upcoming Events
          </Link>

          <Link
           href="#watch-on-demand"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/60 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Watch On-Demand
          </Link>

          <Link
            href="/request-a-demo"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/60 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </section>
  );
}