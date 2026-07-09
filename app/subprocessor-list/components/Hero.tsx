import React from "react";

export default function Hero() {
  return (
    <section className="border-b-2 border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-[696px] px-5 sm:px-6 lg:px-0 py-10">
        {/* Title */}
        <h1 className="mx-auto max-w-[624px] text-center text-3xl font-extrabold leading-10 text-slate-900 sm:text-4xl dark:text-white">
          Sub-processor Policy and Register
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-[642px] text-center text-base leading-7 text-slate-500 dark:text-slate-400">
          This Policy governs how Zoiko Tech Inc. appoints, manages, reviews,
          replaces, and removes third-party processors that may process
          Customer Data in connection with the ZoikoTime platform.
        </p>

        {/* Effective Date */}
        <div className="mt-8 flex justify-center">
          <div className="flex h-9 items-center rounded-full border border-teal-600/20 bg-emerald-50 px-5 dark:border-teal-500/30 dark:bg-emerald-950/40">
            <span className="text-xs font-bold leading-5 text-teal-700 dark:text-teal-300">
              Effective May 1, 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}