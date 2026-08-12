"use client";

import Image from "next/image";
import Link from "next/link";

export default function HybridWorkforceHero() {
  return (
    <section
      className="
        w-full
        bg-gradient-to-b
        from-white
        to-gray-50
        py-16
        sm:py-20
        lg:py-[49px]
        dark:from-slate-950
        dark:to-slate-900
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
          lg:gap-[54px]
          lg:px-0
        "
      >
        {/* =====================================================
            LEFT CONTENT
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
          <span
            className="
              text-xs
              font-semibold
              uppercase
              leading-5
              tracking-widest
            "
            style={{ color: "#3FB97A" }}
          >
            Hybrid Workforce Management
          </span>

          {/* Heading */}
          <h1
            className="
              mt-3
              max-w-[520px]
              text-4xl
              font-extrabold
              leading-[48px]
              tracking-tight
              text-slate-800
              sm:text-5xl
              sm:leading-[48px]
              dark:text-white
            "
          >
            Run hybrid work with
            clear records—
            <span style={{ color: "#3FB97A" }}>not
              constant surveillance.
              </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-8
              max-w-[500px]
              text-base
              font-normal
              leading-7
              text-gray-500
              dark:text-slate-400
            "
          >
            Coordinate office and remote schedules, time, attendance,
            breaks, projects, and approvals in one reviewable system —
            without screenshots, keystroke capture, URL history, app-name
            monitoring, or clipboard collection.
          </p>

          {/* =================================================
              BUTTONS
          ================================================= */}
          <div
            className="
              mt-8
              flex
              w-full
              flex-col
              gap-3
              sm:w-auto
              sm:flex-row
              sm:items-center
            "
          >
          {/* Request Enterprise Demo */}
<Link
  href="/request-enterprise-demo"
  className="
    flex
    h-11
    w-full
    items-center
    justify-center
    whitespace-nowrap
    rounded-[10px]
    px-6
    text-base
    font-semibold
    leading-4
    text-white
    shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)]
    transition
    hover:brightness-95
    sm:w-[240px]
  "
  style={{ backgroundColor: "#3FB97A" }}
>
  Request Enterprise Demo
</Link>

            {/* Start Free */}
            <Link
              href="/start-free"
              className="
                flex
                h-11
                w-full
                items-center
                justify-center
                rounded-[10px]
                border
                border-gray-300
                bg-white
                px-6
                text-base
                font-semibold
                leading-4
                text-slate-800
                transition
                hover:bg-gray-50
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-white
                dark:hover:bg-slate-800
                sm:w-32
              "
            >
              Start Free
            </Link>
          </div>

          {/* Trial text */}
          <p
            className="
              mt-5
              text-xs
              font-normal
              leading-5
              text-gray-500
              dark:text-slate-400
            "
          >
            30-day trial for eligible plans.
          </p>

          {/* Trust statement */}
          <div className="mt-6 flex items-center gap-2">
            <div
              className="
                flex
                h-4
                w-4
                shrink-0
                items-center
                justify-center
              "
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M3.5 8.2L6.3 11L12.5 4.8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#3FB97A" }}
                />
              </svg>
            </div>

            <span
              className="
                text-xs
                font-semibold
                leading-5
                text-slate-800
                dark:text-slate-200
              "
            >
              Worker-visible records. Human review. Global policy controls.
            </span>
          </div>
        </div>

        {/* =====================================================
            RIGHT SCREENSHOT
        ===================================================== */}
        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-3xl
            shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)]
            sm:h-auto
            lg:w-[578px]
            lg:shrink-0
          "
        >
          <Image
            src="/hybrid-workforces/image.png"
            alt="Hybrid Workforce Command Center"
            width={578}
            height={384}
            priority
            className="
              h-auto
              w-full
              object-contain
            "
            sizes="(max-width: 1024px) 100vw, 578px"
          />
        </div>
      </div>
    </section>
  );
}