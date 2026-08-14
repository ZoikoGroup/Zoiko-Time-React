import React from "react";

export default function PolicyEvidenceHero() {
  return (
    <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900 sm:px-12 sm:py-20 lg:px-24">
      <div className="mx-auto grid max-w-7.5xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center rounded-full bg-gray-200/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:bg-gray-850 dark:text-emerald-400">
            Policy Evidence &amp; Rule Trace
          </span>
          <h1 className="text-4xl font-extrabold leading-[1.1] text-slate-900 dark:text-white sm:text-5xl lg:text-5xl font-sans">
            See exactly which <br className="hidden sm:inline" />
            <span className="text-slate-900 dark:text-white">policy version</span> <br className="hidden sm:inline" />
            <span className="text-emerald-500">applied</span> — and why
          </h1>
          <div className="space-y-4 text-base leading-7 text-gray-655 dark:text-gray-300 font-sans">
            <p>
              Policy evidence in ZoikoTime shows the exact policy version and context used for a
              time record, the source facts evaluated, the deterministic conditions that matched,
              any approved exception or precedence rule, the resulting classification, and the
              human-review boundary.
            </p>
            <p className="font-semibold text-slate-800 dark:text-slate-200">
              Historical evidence stays tied to the record&apos;s effective context.{" "}
              <span className="font-normal text-gray-500 dark:text-gray-405">
                The current policy is not silently substituted.
              </span>
            </p>
          </div>
          <a href="/request-a-demo">
          <button className="group mt-2 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white shadow-lg transition-all duration-200 hover:bg-emerald-600 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
            Start Demo
            <svg
              className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button></a>
        </div>

        {/* Right Graphic Placeholder (Responsive CSS Mockup) */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[580px] w-full max-w-[420px] rounded-2xl  ">
            <img src="/policy-evidence/div.mock (4).png"></img>
           </div>
        </div>
      </div>
    </section>
  );
}
