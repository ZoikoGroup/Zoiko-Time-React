"use client";

import Link from "next/link";

export default function Cta() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 px-6 py-16 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
        {/* Badge */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-sm bg-emerald-300" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">
            Give Remote Teams Clear Time
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Give remote teams clear time,
          <br className="hidden sm:block" />
          boundaries, and handoffs.
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          See how ZoikoTime connects local workdays, availability,
          structured handoffs, approved time, fair exceptions, and
          accountable evidence across time zones.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/get-a-demo"
            className="rounded-full bg-emerald-500 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-emerald-400"
          >
            Get a demo
          </Link>

          <Link
            href="/talk-to-sales"
            className="rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Talk to sales
          </Link>
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-center text-xs leading-5 text-white/50 sm:text-sm">
          Designed for remote workers, managers, operations, HR, payroll,
          privacy, IT, and
          <br className="hidden sm:block" />
          enterprise governance.
        </p>
      </div>
    </section>
  );
}