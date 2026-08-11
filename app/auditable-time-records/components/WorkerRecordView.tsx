"use client";

import Image from "next/image";

const workersCanSee = [
  "Where the record came from and when it was received",
  "The applicable historical policy in plain language",
  "Full version list — changed fields, reason, role, outcome",
  "Who can see the record and why",
];

const workersCanDo = [
  "Request a correction and add permitted evidence",
  "Save a draft, submit, or withdraw where allowed",
  "Receive confirmation and track the response",
  "Export a permitted personal record summary",
];

export default function WorkerRecordView() {
  return (
    <section className="w-full bg-white py-12 transition-colors sm:py-16 lg:py-20 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-8 px-5 sm:gap-9 sm:px-6 lg:gap-9 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="flex w-full max-w-[680px] flex-col items-start gap-3.5 pt-1">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 shrink-0 rounded-sm bg-[#3FB97A]" />

            <span className="text-xs font-bold uppercase leading-5 tracking-widest text-[#3FB97A]">
              Two-Way Transparency
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl sm:leading-10 dark:text-white">
            The Worker Record View
          </h2>

          {/* Description */}
          <p className="w-full text-sm font-normal leading-7 text-gray-500 sm:text-base dark:text-gray-400">
            Auditability isn&apos;t one-sided. Every worker sees their own
            permitted history, not just administrators.
          </p>
        </div>

        {/* ================= TWO INFORMATION CARDS ================= */}
        <div className="grid w-full grid-cols-1 gap-4 pt-1 lg:grid-cols-2 lg:gap-6">
          {/* ================= WORKERS CAN SEE ================= */}
          <div className="flex w-full flex-col items-start gap-4 rounded-2xl border border-[#3FB97A]/20 bg-[#3FB97A]/10 p-6 sm:p-7 dark:border-[#3FB97A]/20 dark:bg-[#3FB97A]/5">
            <h3 className="text-base font-bold leading-6 text-slate-900 dark:text-white">
              Workers can see
            </h3>

            <div className="flex w-full flex-col gap-2.5">
              {workersCanSee.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5"
                >
                  {/* Check */}
                  <span className="shrink-0 text-sm font-bold leading-5 text-[#3FB97A]">
                    ✓
                  </span>

                  {/* Text */}
                  <p className="text-sm font-normal leading-5 text-slate-900 dark:text-slate-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= WORKERS CAN DO ================= */}
          <div className="flex w-full flex-col items-start gap-4 rounded-2xl border border-orange-200 bg-orange-100 p-6 sm:p-7 dark:border-orange-900/50 dark:bg-orange-950/30">
            <h3 className="text-base font-bold leading-6 text-slate-900 dark:text-white">
              Workers can do
            </h3>

            <div className="flex w-full flex-col gap-2.5">
              {workersCanDo.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5"
                >
                  {/* Arrow */}
                  <span className="shrink-0 text-sm font-bold leading-5 text-yellow-800 dark:text-orange-300">
                    →
                  </span>

                  {/* Text */}
                  <p className="text-sm font-normal leading-5 text-slate-900 dark:text-slate-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= IMAGE + NOTE ================= */}
        <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-9">
          {/* ================= IMAGE ================= */}
          <div className="relative w-full overflow-hidden rounded-[20px] bg-white shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.18)] dark:bg-slate-900 dark:shadow-[0px_8px_20px_-12px_rgba(0,0,0,0.5)]">
            <Image
              src="/auditable-time-records/worker-record-view.png"
              alt="Worker record view"
              width={571}
              height={320}
              className="h-auto min-h-[260px] w-full object-cover sm:min-h-[320px]"
            />
          </div>

          {/* ================= GOVERNANCE NOTE ================= */}
          <div className="flex w-full items-start rounded-[10px] border-l-[3px] border-[#3FB97A] bg-[#3FB97A]/10 px-4 py-4 sm:py-5 dark:bg-[#3FB97A]/5">
            <p className="text-xs font-normal leading-5 text-gray-500 sm:text-sm dark:text-gray-400">
              No page or screen uses employee surveillance, productivity
              ranking, behavior scoring, or guilt language. Corrections show
              what changed and why — never who to blame.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}