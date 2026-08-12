"use client";

import Image from "next/image";

export default function DisputesCorrectionsEvidence() {
  return (
    <section
      className="
        w-full
        bg-white
        py-20
        sm:py-24
        lg:py-[80px]
        dark:bg-slate-950
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1200px]
          flex-col
          gap-10
          px-6
          sm:px-8

          lg:flex-row
          lg:items-center
          lg:gap-[66px]
          lg:px-0
        "
      >
        {/* =====================================================
            LEFT IMAGE
        ===================================================== */}
        <div
          className="
            relative
            h-[280px]
            w-full
            overflow-hidden
            rounded-2xl

            sm:h-[320px]

            lg:h-[320px]
            lg:w-[570px]
            lg:shrink-0
          "
        >
          <Image
            src="/project-based/disputes-evidence.png"
            alt="Disputes, corrections and evidence workspace"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 570px"
          />
        </div>

        {/* =====================================================
            RIGHT CONTENT
        ===================================================== */}
        <div
          className="
            flex
            min-w-0
            flex-1
            flex-col
            items-start
          "
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-4 shrink-0 bg-emerald-600" />

            <span
              className="
                text-xs
                font-bold
                uppercase
                leading-5
                tracking-widest
                text-emerald-700
                dark:text-emerald-400
              "
            >
              Disputes, Corrections &amp; Evidence
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-3
              max-w-[564px]
              text-2xl
              font-bold
              leading-8
              text-slate-900

              sm:text-3xl

              dark:text-white
            "
          >
            Worker-visible, non-retaliatory correction
          </h2>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-[529px]
              text-base
              font-normal
              leading-6
              text-slate-500
              dark:text-slate-400
            "
          >
            Every change captures actor, timestamp, reason, and previous vs.
            new value — a fair, accessible escalation path.
          </p>
        </div>
      </div>
    </section>
  );
}