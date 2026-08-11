"use client";

import Image from "next/image";

const integrityGaps = [
  {
    number: "01",
    title: "Multiple capture sources",
    description:
      "Which event is original, duplicate, delayed, or authoritative becomes unclear.",
  },
  {
    number: "02",
    title: "Manual correction",
    description:
      "What changed, why, by whom, and whether the worker was informed gets lost.",
  },
  {
    number: "03",
    title: "Policy change",
    description:
      "Which rule applied at the record date is silently forgotten.",
  },
  {
    number: "04",
    title: "Legacy migration",
    description:
      "Whether imported data is complete or reconstructed is rarely labeled.",
  },
];

export default function IntegrityGap() {
  return (
    <section className="w-full bg-white py-12 transition-colors sm:py-14 lg:py-16 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-8 px-5 sm:gap-10 sm:px-6 lg:gap-11 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="flex w-full max-w-[680px] flex-col items-start gap-3.5 pt-1">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-600" />

            <span className="text-xs font-bold uppercase leading-5 tracking-widest text-emerald-700 dark:text-emerald-400">
              The Integrity Gap
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-3xl font-bold leading-tight text-slate-900 sm:text-4xl sm:leading-10 dark:text-white">
            Why Time Records Lose Trust
          </h2>

          {/* Description */}
          <p className="w-full text-sm font-normal leading-7 text-gray-500 sm:text-base dark:text-gray-400">
            A final approved total doesn&apos;t explain source, classification,
            edits, notices, or downstream use. ZoikoTime is built to answer
            what changed, why, and by whom.
          </p>
        </div>

        {/* ================= FOUR CARDS ================= */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {integrityGaps.map((item) => (
            <div
              key={item.number}
              className="
                flex
                min-h-[205px]
                flex-col
                items-start
                gap-2.5
                rounded-2xl
                border
                border-green-100
                bg-green-50
                px-5
                py-7
                transition-colors
                dark:border-emerald-900/50
                dark:bg-emerald-950/30
              "
            >
              {/* Number */}
              <div className="text-xs font-bold leading-5 tracking-wide text-emerald-700 dark:text-emerald-400">
                {item.number}
              </div>

              {/* Title */}
              <div className="w-full pt-1">
                <h3 className="text-base font-bold leading-5 text-slate-900 dark:text-white">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="w-full text-sm font-normal leading-5 text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= IMAGE SECTION ================= */}
        <div className="relative w-full overflow-hidden rounded-[20px] bg-white shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.18)] dark:bg-slate-900 dark:shadow-[0px_8px_20px_-12px_rgba(0,0,0,0.5)]">
          {/* Section Image */}
          <Image
            src="/auditable-time-records/integrity-gap.png"
            alt="Why time records lose trust"
            width={1216}
            height={340}
            priority
            className="h-[260px] w-full object-cover sm:h-[300px] lg:h-[340px]"
          />

          {/* Dark Gradient Overlay */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              bg-gradient-to-t
              from-slate-950/95
              via-slate-900/70
              to-transparent
              px-5
              pb-5
              pt-20
              sm:px-7
              sm:pb-6
              sm:pt-24
              lg:px-9
              lg:pb-5
              lg:pt-20
            "
          >
            <div className="w-full max-w-[640px]">
              <p className="text-sm font-medium leading-6 text-white sm:text-base">
                ZoikoTime positions itself as a governed time-record system —
                not a legal conclusion, not a surveillance log.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}