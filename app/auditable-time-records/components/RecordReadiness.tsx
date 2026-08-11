"use client";

import Image from "next/image";

const chartPoints = [
  {
    green: 88,
    yellow: 100,
  },
  {
    green: 76,
    yellow: 96,
  },
  {
    green: 79,
    yellow: 93,
  },
  {
    green: 55,
    yellow: 92,
  },
  {
    green: 51,
    yellow: 86,
  },
  {
    green: 38,
    yellow: 80,
  },
  {
    green: 31,
    yellow: 73,
  },
  {
    green: 25,
    yellow: 68,
  },
];

export default function RecordReadiness() {
  return (
    <section className="w-full bg-[#EFFAF5] py-16 sm:py-20 lg:py-24 dark:bg-[#0B2119]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-5 sm:px-8">
        {/* =========================================================
            HEADER
        ========================================================= */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-3 text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-[#3FB97A]" />

            <span className="text-[10px] font-bold uppercase leading-5 tracking-[0.16em] text-[#16845A] sm:text-xs">
              Record Readiness
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[30px] font-bold leading-[1.2] tracking-tight text-slate-900 sm:text-[32px] dark:text-white">
            What You Can Measure
          </h2>
        </div>

        {/* =========================================================
            CHART CARD
        ========================================================= */}
        <div className="mt-7 w-full max-w-[1216px] rounded-[20px] border border-slate-200 bg-white px-6 py-6 shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.18)] sm:mt-8 sm:px-7 sm:py-7 dark:border-slate-700 dark:bg-slate-900">
          {/* Chart Header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Title */}
            <h3 className="text-xs font-bold leading-5 text-slate-900 sm:text-sm dark:text-white">
              Approval cycle time — last 8 pay periods
            </h3>

            {/* Legend */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-[#3FB97A]" />

                <span className="text-[10px] font-normal leading-5 text-gray-500 sm:text-xs dark:text-gray-400">
                  Approved on time
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-[#B98217]" />

                <span className="text-[10px] font-normal leading-5 text-gray-500 sm:text-xs dark:text-gray-400">
                  Needs review
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              CHART
          ===================================================== */}
          <div className="relative mt-4 h-[125px] w-full sm:mt-5 sm:h-[135px]">
            {/* Grid */}
            <div className="absolute inset-x-0 top-[25%] border-t border-slate-200 dark:border-slate-700" />

            <div className="absolute inset-x-0 top-[50%] border-t border-slate-200 dark:border-slate-700" />

            <div className="absolute inset-x-0 top-[75%] border-t border-slate-200 dark:border-slate-700" />

            <svg
              viewBox="0 0 1000 125"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full overflow-visible"
            >
              {/* =================================================
                  GREEN LINE
              ================================================= */}
              <polyline
                points="
                  0,103
                  142,91
                  285,96
                  428,68
                  571,62
                  714,44
                  857,35
                  1000,28
                "
                fill="none"
                stroke="#3FB97A"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* =================================================
                  YELLOW LINE
              ================================================= */}
              <polyline
                points="
                  0,118
                  142,116
                  285,112
                  428,111
                  571,101
                  714,94
                  857,87
                  1000,80
                "
                fill="none"
                stroke="#B98217"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* =================================================
                  GREEN POINTS
              ================================================= */}
              {[
                [0, 103],
                [142, 91],
                [285, 96],
                [428, 68],
                [571, 62],
                [714, 44],
                [857, 35],
                [1000, 28],
              ].map(([x, y], index) => (
                <rect
                  key={index}
                  x={x - 4}
                  y={y - 3}
                  width="8"
                  height="6"
                  rx="1.5"
                  fill="#3FB97A"
                />
              ))}
            </svg>

            {/* Period labels */}
            <div className="absolute inset-x-0 bottom-0 flex justify-between">
              {chartPoints.map((_, index) => (
                <span
                  key={index}
                  className="text-[10px] font-normal leading-5 text-slate-400"
                >
                  P{index + 1}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================
            DISCLAIMER
        ========================================================= */}
        <div className="mt-4 w-full max-w-[640px] text-center">
          <p className="text-[10px] font-normal leading-5 text-gray-500 sm:text-xs dark:text-gray-400">
            No dashboard ranks workers by corrections, exceptions, access
            events, or record volume — every metric defaults to aggregate
            view.
          </p>
        </div>

        {/* =========================================================
            IMAGE
        ========================================================= */}
        <div className="relative mt-6 w-full max-w-[1216px] overflow-hidden rounded-[20px] shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.18)] dark:shadow-[0px_8px_20px_-12px_rgba(0,0,0,0.5)]">
          <Image
            src="/auditable-time-records/record-readiness.png"
            alt="Record readiness"
            width={1216}
            height={300}
            className="h-[220px] w-full object-cover sm:h-[260px] lg:h-[300px]"
          />

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-slate-950/95 via-slate-900/50 to-transparent" />

          {/* Overlay Text */}
          <div className="absolute bottom-0 left-0 max-w-[600px] px-5 pb-5 sm:px-7 sm:pb-6 lg:px-8 lg:pb-5">
            <p className="text-xs font-medium leading-5 text-white sm:text-sm sm:leading-6">
              Cleaner records mean fewer late-night payroll fire drills —
              measured in aggregate, never by individual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}