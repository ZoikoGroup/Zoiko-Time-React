"use client";

import { FiCheckCircle } from "react-icons/fi";

export default function TutorialPreview() {
  return (
    <section className="w-full bg-gray-50 py-14 dark:bg-slate-950 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-14">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-600 dark:text-teal-400">
            Tutorial Detail Preview
          </div>

          <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white">
            What&apos;s inside every tutorial page
          </h2>
        </div>

        {/* Preview Card */}
        <div className="mx-auto mt-10 w-full max-w-[1000px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(14,31,61,0.10)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">

            {/* Image */}
            <div className="relative min-h-[280px] overflow-hidden bg-slate-100 dark:bg-slate-800 sm:min-h-[360px] lg:min-h-[484px]">
              <img
                src="/video-tutorials/tutorial-detail.png"
                alt="Tutorial detail preview"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col p-6 sm:p-8 lg:p-10">

              {/* Title */}
              <h3 className="text-lg font-bold leading-7 text-slate-800 dark:text-white">
                Reviewing an exception as a manager
              </h3>

              {/* Description */}
              <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-slate-400">
                Every tutorial page includes a chaptered player, full
                transcript, applicability panel, version and currency
                metadata, and a verification checklist — so you can confirm
                you actually learned the task.
              </p>

              {/* Chapters */}
              <div className="mt-6">

                <div className="flex items-center justify-between py-2 text-xs text-gray-700 dark:text-slate-300">
                  <span>Opening the review queue</span>
                  <span>0:00</span>
                </div>

                <div className="flex items-center justify-between border-t border-gray-300 py-2 text-xs text-gray-700 dark:border-slate-700 dark:text-slate-300">
                  <span>Reading a flagged record</span>
                  <span>1:05</span>
                </div>

                <div className="flex items-center justify-between border-t border-gray-300 py-2 text-xs text-gray-700 dark:border-slate-700 dark:text-slate-300">
                  <span>Requesting more context</span>
                  <span>2:40</span>
                </div>

              </div>

              {/* Verification */}
              <div className="mt-4 rounded-[10px] bg-gray-50 p-3.5 dark:bg-slate-800">
                <div className="flex gap-2">
                  <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" />

                  <p className="text-xs leading-5">
                    <span className="font-bold text-slate-800 dark:text-white">
                      Verification checklist:
                    </span>{" "}
                    <span className="text-gray-500 dark:text-slate-400">
                      confirms you can open a record, request context, and
                      locate the logged decision — not just that you watched
                      the video.
                    </span>
                  </p>
                </div>
              </div>

              {/* Button */}
              <button
                type="button"
                className="mt-6 w-full rounded-[10px] bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700 sm:w-fit"
              >
                Open this tutorial →
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}