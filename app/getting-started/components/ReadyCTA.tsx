"use client";

import React from "react";

export default function ReadyCTA() {
  return (
    <section className="w-full bg-slate-950 px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[760px] flex-col items-center">
        {/* EYEBROW */}
        <div className="text-xs font-bold uppercase tracking-wide text-emerald-400">
          Ready When You Are
        </div>

        {/* TITLE */}
        <h2 className="mt-3 max-w-[620px] text-3xl font-bold leading-tight text-white">
          Start the path built for your role.
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 max-w-[680px] text-sm font-normal leading-6 text-white/70 sm:text-base">
          Pick your starting point, see exactly what&apos;s ahead, and check
          your readiness before anything goes live.
        </p>

        {/* ACTIONS */}
        <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-6 text-sm font-semibold text-white transition hover:bg-teal-500 sm:text-base"
          >
            Choose Your Starting Point
          </button>

          <button
            type="button"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-7 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
          >
            Show My Path
          </button>

          <button
            type="button"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-7 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
          >
            Review Readiness
          </button>
        </div>
      </div>
    </section>
  );
}