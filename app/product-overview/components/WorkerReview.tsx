import React from 'react';
import Link from 'next/link';
import SectionEyebrow from './SectionEyebrow';

interface ReviewStep {
  title: string;
  detail: string;
}

const steps: ReviewStep[] = [
  { title: 'View record', detail: 'See the current state and status' },
  { title: 'Understand state / reason', detail: 'Plain-language explanation, not a code' },
  { title: 'Propose correction', detail: 'Add context and a proposed value' },
  { title: 'Human review', detail: 'An authorized person decides' },
  { title: 'Resolve or escalate', detail: 'Outcome recorded, help available' },
];

interface AttendanceTile {
  label: string;
  value: string;
}

const attendanceTiles: AttendanceTile[] = [
  { label: 'Date / period', value: 'Aug 3, 2026' },
  { label: 'Attendance state', value: 'Present · verified' },
  { label: 'Source context', value: 'Desktop app · approved' },
  { label: 'Review status', value: 'No action needed' },
];

export default function WorkerReview() {
  return (
    <section className="w-full bg-green-50 dark:bg-slate-900 pt-16 sm:pt-20 pb-16 px-4 sm:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-[1220px] mx-auto flex flex-col gap-12 sm:gap-14">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Worker Journey */}
          <div className="flex flex-col items-start">
            <SectionEyebrow>Worker Review</SectionEyebrow>

            <h2 className="pt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              See It, Understand It, Correct It.
            </h2>

            <p className="pt-3 text-base text-slate-900 dark:text-slate-300 leading-7">
              Current and proposed values stay distinguishable. History is preserved. Reviewer role
              and decision are visible where permitted.
            </p>

            <ol className="mt-6 pt-2 border-l-2 border-slate-200 dark:border-slate-700 w-full">
              {steps.map((step) => (
                <li key={step.title} className="relative pl-5 pt-8 pb-3.5 flex flex-col gap-5">
                  <span
                    aria-hidden="true"
                    className="absolute left-[-5px] top-[42px] h-2.5 w-2.5 rounded-full bg-emerald-600"
                  />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-6">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-slate-400 leading-5">{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Worker Photo */}
          <div className="w-full rounded-[20px] shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.16)] overflow-hidden">
            <img
              className="w-full h-72 sm:h-96 object-cover"
              src="/product-overview/worker-review.png"
              alt="A worker checking their attendance and time record on a phone, calmly and without pressure"
            />
          </div>

        </div>

        {/* Attendance & Presence Card */}
        <div className="p-5 sm:p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col gap-3.5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white leading-6">
              Attendance &amp; Presence — verified, not inferred
            </h3>
            <Link
              href="#"
              className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 leading-6 transition-colors"
            >
              Explore Attendance &amp; Presence →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {attendanceTiles.map((tile) => (
              <div
                key={tile.label}
                className="px-3.5 pt-2.5 pb-3 bg-green-50 dark:bg-slate-900 rounded-lg flex flex-col gap-[3px]"
              >
                <span className="text-[10px] font-bold uppercase leading-4 text-slate-400 dark:text-slate-500">
                  {tile.label}
                </span>
                <span className="text-xs font-semibold text-slate-900 dark:text-white leading-5">
                  {tile.value}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 dark:text-slate-400 leading-5">
            Never always-on GPS, webcam, live tracking, biometric verification, background tracking, or
            active/idle behavioral inference.
          </p>
        </div>

      </div>
    </section>
  );
}
