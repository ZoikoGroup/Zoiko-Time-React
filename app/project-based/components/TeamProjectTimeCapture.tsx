"use client";

import Image from "next/image";

const points = [
  "Switch project context without losing history",
  "Add context to any submitted record",
];

export default function TeamProjectTimeCapture() {
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
          lg:gap-[50px]
          lg:px-0
        "
      >
        {/* =====================================================
            IMAGE
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
            src="/project-based/time-capture.png"
            alt="Team and project time capture workspace"
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
              Team &amp; Project Time Capture
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-3
              max-w-[557px]
              text-2xl
              font-bold
              leading-8
              text-slate-900

              sm:text-3xl

              dark:text-white
            "
          >
            Select project, capture time, correct where permitted.
          </h2>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-[593px]
              text-base
              font-normal
              leading-6
              text-slate-500
              dark:text-slate-400
            "
          >
            Client → phase → task, in a few taps. Records stay visible and
            correctable, with full version history — never hidden.
          </p>

          {/* =================================================
              FEATURE POINTS
          ================================================= */}
          <div className="mt-7 flex flex-col gap-4">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3"
              >
                {/* Check icon */}
                <div
                  className="
                    mt-1
                    flex
                    h-3.5
                    w-3.5
                    shrink-0
                    items-center
                    justify-center
                  "
                >
                  <svg
                    viewBox="0 0 14 14"
                    fill="none"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.1 7.1L5.8 9.7L10.9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-600 dark:text-emerald-400"
                    />
                  </svg>
                </div>

                <p
                  className="
                    text-sm
                    font-normal
                    leading-5
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}