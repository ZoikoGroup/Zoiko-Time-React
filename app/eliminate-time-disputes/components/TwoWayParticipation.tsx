"use client";

import Image from "next/image";
import { FiCheck } from "react-icons/fi";

const workerPoints = [
  "See your own records with source and the policy that applied",
  "Add a note or request a correction with a reason",
  "Get a clear outcome — no black box, no surveillance",
];

const reviewerPoints = [
  "Queue, case detail, comparison, and evidence in one place",
  "Approve, correct, or request info — each reasoned and logged",
  "Role-based access; separation of duties enforced",
];

export default function TwoWayParticipation() {
  return (
    <section className="w-full bg-white px-5 py-12 sm:px-6 sm:py-16 lg:py-20 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-3">
        {/* Eyebrow */}
        <div className="flex w-full flex-col items-center">
          <span className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600">
            Two-Way Participation
          </span>
        </div>

        {/* Heading */}
        <div className="w-full max-w-[820px] pb-1">
          <h2 className="text-center text-3xl font-bold leading-tight text-slate-800 sm:text-4xl sm:leading-10 dark:text-white">
            Fair for workers, clear for reviewers
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[680px] pt-0.5">
          <p className="text-center text-base font-normal leading-7 text-gray-500 dark:text-gray-400">
            The worker&apos;s perspective and the reviewer&apos;s controls, side
            by side.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full max-w-[1080px] grid-cols-1 gap-6 pt-5 sm:pt-8 lg:grid-cols-2">
          {/* Worker Experience */}
          <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
            {/* Image */}
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src="/eliminate-time-disputes/worker-experience.png"
                alt="Worker experience"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/25 to-slate-900/60" />

              {/* Label */}
              <div className="absolute left-3.5 top-3.5 rounded-[20px] border border-white/30 bg-green-400/20 px-3 py-[5px] backdrop-blur-[3px]">
                <span className="text-xs font-bold leading-4 text-white">
                  Worker experience
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col px-5 pb-8 pt-5">
              <h3 className="text-lg font-bold leading-8 text-slate-800 dark:text-white">
                A fair say — before and after
              </h3>

              <div className="mt-3 flex flex-col gap-3">
                {workerPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2.5"
                  >
                    <FiCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-teal-600"
                      strokeWidth={2}
                    />

                    <p className="text-sm font-normal leading-5 text-gray-700 dark:text-gray-300">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Reviewer Controls */}
          <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
            {/* Image */}
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src="/eliminate-time-disputes/reviewer-controls.png"
                alt="Reviewer controls"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/25 to-slate-900/60" />

              {/* Label */}
              <div className="absolute left-3.5 top-3.5 rounded-[20px] border border-white/30 bg-green-400/20 px-3 py-[5px] backdrop-blur-[3px]">
                <span className="text-xs font-bold leading-4 text-white">
                  Reviewer controls
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col px-5 pb-8 pt-5">
              <h3 className="text-lg font-bold leading-8 text-slate-800 dark:text-white">
                Decide with the full picture
              </h3>

              <div className="mt-3 flex flex-col gap-3">
                {reviewerPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2.5"
                  >
                    <FiCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-teal-600"
                      strokeWidth={2}
                    />

                    <p className="text-sm font-normal leading-5 text-gray-700 dark:text-gray-300">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}