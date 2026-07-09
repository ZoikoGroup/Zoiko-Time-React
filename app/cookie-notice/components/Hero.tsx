import React from "react";

export default function Hero() {
  return (
    <section className="border-b border-slate-200 dark:border-slate-700 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <h1 className="mt-10 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Cookie Notice
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-500 dark:text-slate-400">
            This Cookie Notice explains how Zoiko Tech Inc. uses cookies,
            pixels, local storage, software development kits, tags, device
            identifiers, and similar technologies in connection with ZoikoTime
            websites, applications, and platform services.
          </p>

          {/* Effective Date */}
          <div className="mt-8 inline-flex items-center rounded-full border border-teal-600/20 bg-emerald-50 dark:bg-emerald-950/40 px-5 py-2">
            <span className="text-xs font-bold text-teal-700 dark:text-teal-300">
              Effective May 1, 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}