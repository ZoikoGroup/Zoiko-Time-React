"use client";

import { FiCheck, FiPlay, FiSearch } from "react-icons/fi";

export default function VideoTutorials() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 dark:from-slate-950 dark:to-slate-900 sm:py-20 lg:py-24">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[760px] -translate-x-1/2 rounded-full bg-teal-600/10 blur-3xl dark:bg-teal-500/5" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 sm:px-8 lg:px-10 xl:px-14">

        {/* Main Content */}
        <div className="flex w-full flex-col items-center lg:flex-row lg:items-center lg:gap-12">

          {/* Left Content */}
          <div className="w-full lg:flex-1">
            <div className="max-w-xl">

              {/* Label */}
              <div className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-600 dark:text-teal-400">
                Video Tutorials
              </div>

              {/* Heading */}
              <h2 className="mt-3 text-4xl font-bold leading-[1.08] tracking-tight text-slate-800 dark:text-white sm:text-5xl">
                Learn one task at a time,{" "}
                <span className="text-teal-600 dark:text-teal-400">
                  then verify it
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500 dark:text-slate-400 sm:text-base">
                Task-focused video tutorials with captions, transcripts,
                version awareness, and a built-in checklist — so you know
                you actually learned the task, not just watched a video.
              </p>

              {/* Search */}
              <div className="mt-8 flex h-14 w-full max-w-[460px] items-center rounded-xl border border-gray-300 bg-white px-4 shadow-[0_6px_18px_rgba(14,31,61,0.05),0_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
                <FiSearch className="h-4 w-4 shrink-0 text-gray-500 dark:text-slate-400" />

                <span className="ml-3 flex-1 truncate text-sm text-neutral-500 dark:text-slate-400">
                  Search tutorials — e.g. &quot;reviewing an exception&quot;
                </span>

                <button
                  type="button"
                  className="ml-3 flex h-10 shrink-0 items-center justify-center rounded-lg bg-teal-600 px-5 text-sm font-semibold text-white transition hover:bg-teal-700"
                >
                  Search
                </button>
              </div>

              {/* Features */}
              <div className="mt-5 flex flex-col gap-3 text-xs text-gray-500 dark:text-slate-400 sm:flex-row sm:flex-wrap sm:gap-x-6">
                <div className="flex items-center gap-2">
                  <FiCheck className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                  <span>Captions &amp; transcripts on every video</span>
                </div>

                <div className="flex items-center gap-2">
                  <FiCheck className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                  <span>Version-aware, safe demo data</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Video Panel */}
          <div className="mt-12 w-full lg:mt-0 lg:flex-1">
            <div className="mx-auto w-full max-w-[595px] overflow-hidden rounded-2xl bg-slate-800 shadow-[0_30px_60px_rgba(14,31,61,0.22)]">

              {/* Video Preview */}
              <div className="relative aspect-[595/372] w-full overflow-hidden">

                <img
                  src="/video-tutorials/video-tutorial.png"
                  alt="Video tutorial preview"
                  className="h-full w-full object-cover opacity-90"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-800/10 to-slate-800/60" />

                {/* Play Button */}
                <button
                  type="button"
                  aria-label="Play tutorial"
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-[0_10px_26px_rgba(0,0,0,0.32)]"
                >
                  <FiPlay className="ml-1 h-5 w-5 fill-slate-800 text-slate-800" />
                </button>

                {/* Video Metadata */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-800/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                    ⏱ 4:12
                  </span>

                  <span className="rounded-full bg-slate-800/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                    App v3.4
                  </span>

                  <span className="rounded-full bg-slate-800/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                    CC available
                  </span>
                </div>
              </div>

              {/* Video Information */}
              <div className="px-4 pb-5 pt-4 sm:px-[18px]">

                <h3 className="text-sm font-semibold leading-5 text-white">
                  Recording your first shift
                </h3>

                {/* Chapters */}
                <div className="mt-3">
                  <div className="flex items-center justify-between border-t border-white/10 py-2">
                    <span className="text-xs text-white/70">
                      Opening your first shift
                    </span>
                    <span className="text-xs text-white/70">
                      0:00
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 py-2">
                    <span className="text-xs text-white/70">
                      Starting the timer
                    </span>
                    <span className="text-xs text-white/70">
                      0:52
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 py-2">
                    <span className="text-xs text-white/70">
                      Taking a break
                    </span>
                    <span className="text-xs text-white/70">
                      1:40
                    </span>
                  </div>
                </div>

                {/* Verification */}
                <div className="mt-2 rounded-[10px] bg-white/5 px-3 py-2.5 text-xs leading-4">
                  <span className="font-bold text-white">
                    Verify:
                  </span>{" "}
                  <span className="text-white/75">
                    Timer running · project context visible · break event
                    logged
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}