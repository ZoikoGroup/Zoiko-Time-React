"use client";

import { FiCheckCircle } from "react-icons/fi";

const accessibilityItems = [
  "Closed captions on every video",
  "Full text transcript, downloadable",
  "Keyboard-navigable chapters",
  "Safe, synthetic demo data only",
  "Product version noted on every video",
  "No auto-playing audio on load",
];

export default function Accessibility() {
  return (
    <section className="w-full px-5 py-8 sm:px-8 lg:px-10 xl:px-14">
      <div className="mx-auto w-full max-w-[1180px]">

        {/* Main Accessibility Banner */}
        <div className="rounded-2xl bg-slate-800 px-6 py-7 shadow-[0_10px_30px_rgba(14,31,61,0.10)] sm:px-8 sm:py-7 lg:px-[30px]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

            {/* Icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <FiCheckCircle className="h-5 w-5 text-teal-600" />
            </div>

            {/* Content */}
            <div>
              <div className="text-xs font-bold uppercase leading-4 tracking-wider text-teal-600">
                Built for accessibility, not bolted on
              </div>

              <p className="mt-2 max-w-4xl text-sm font-medium leading-6 text-white sm:text-base">
                Every tutorial ships with captions, a full transcript,
                keyboard-navigable chapters, and demo data that never contains
                real worker information.
              </p>
            </div>
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {accessibilityItems.map((item) => (
            <div
              key={item}
              className="flex min-h-10 items-center gap-2.5 rounded-[10px] border border-slate-200 bg-white px-[15px] py-2.5 dark:border-slate-700 dark:bg-slate-900"
            >
              <FiCheckCircle className="h-3.5 w-3.5 shrink-0 text-teal-600 dark:text-teal-400" />

              <span className="text-xs leading-5 text-gray-500 dark:text-slate-400">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}