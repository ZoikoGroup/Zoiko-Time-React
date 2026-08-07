"use client";

import Link from "next/link";

const tags = [
  "Local workdays",
  "Timezone-aware coverage",
  "Structured handoffs",
  "Fair time review",
  "Visible boundaries",
];

export default function RemoteTeamsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-10%,rgba(59,130,246,0.22),transparent_45%)]" />

      <div className="relative mx-auto flex max-w-[1300px] flex-col items-center px-6 py-16 text-center sm:px-8 lg:px-10 lg:py-20 xl:px-12 xl:py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-sm bg-emerald-300" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">
            Remote Teams
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
          Run remote teams on clear
          <br className="hidden sm:block" />
          time, not constant visibility.
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
          Coordinate workday boundaries, availability, handoffs, time
          records, approvals, and exceptions across local time zones
          without monitoring people online.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="#"
            className="rounded-full bg-emerald-600 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-emerald-500"
          >
            Get a demo
          </Link>

          <Link
            href="#"
            className="rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10"
          >
            Talk to sales
          </Link>
        </div>

        {/* Bottom Note */}
        <p className="mt-8 max-w-4xl text-sm leading-6 text-white/50">
          Built for remote-first accountability — not screen watching,
          online-status scoring, or always-on expectations.
        </p>

        {/* Pills */}
        <div className="mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold tracking-wide text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Empty Space (matches reference composition) */}
        <div className="h-16 sm:h-24 lg:h-40" />
      </div>
    </section>
  );
}