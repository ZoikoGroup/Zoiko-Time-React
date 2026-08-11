"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectHero() {
  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <div
        className="
          relative mx-auto w-full max-w-[1280px]
          px-6 py-12
          sm:px-8
          lg:min-h-[560px] lg:px-10 lg:py-0
        "
      >
        {/* =========================================================
            LEFT CONTENT
        ========================================================= */}
        <div
          className="
            flex w-full flex-col items-start
            lg:absolute lg:left-10 lg:top-[64px] lg:w-[484px]
          "
        >
          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-2">
            <div className="h-0.5 w-4 bg-emerald-600" />

            <span
              className="
                text-xs font-bold uppercase leading-5
                tracking-widest
                text-emerald-700
                dark:text-emerald-400
              "
            >
              Project Time &amp; Cost Control
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              max-w-[484px]
              text-4xl font-extrabold
              leading-[1.05]
              text-slate-900
              sm:text-5xl
              lg:text-[48px]
              lg:leading-[50px]
              dark:text-white
            "
          >
            Control project time,
            cost, and delivery —
            without invasive
            monitoring
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-[410px]
              text-base
              font-normal
              leading-6
              text-slate-500
              dark:text-slate-400
            "
          >
            One reviewable system connecting people, projects,
            <br className="hidden sm:block" />
            time and approvals — from capture through billing,
            <br className="hidden sm:block" />
            payroll and audit.
          </p>

          {/* =====================================================
              BUTTONS
          ===================================================== */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/request-enterprise-demo"
              className="
                flex h-12
                items-center
                justify-center
                rounded-lg
                bg-green-400
                px-6
                text-base
                font-semibold
                text-white
                transition
                hover:bg-green-500
              "
            >
              Request Enterprise Demo
            </Link>

            <Link
              href="/start-free"
              className="
                flex h-12
                items-center
                justify-center
                rounded-lg
                border border-slate-300
                bg-white
                px-7
                text-base
                font-semibold
                text-sky-950
                transition
                hover:bg-slate-50
                dark:border-slate-700
                dark:bg-slate-950
                dark:text-white
                dark:hover:bg-slate-900
              "
            >
              Start Free
            </Link>
          </div>
        </div>

        {/* =========================================================
            HERO IMAGE
        ========================================================= */}
        <div
          className="
            relative
            mt-12
            h-[280px]
            w-full
            overflow-hidden
            rounded-2xl
            shadow-[0px_30px_60px_-20px_rgba(10,27,48,0.28)]

            sm:h-[360px]

            lg:absolute
            lg:left-[625px]
            lg:top-[50px]
            lg:mt-0
            lg:h-[384px]
            lg:w-[615px]
          "
        >
          <Image
            src="/project-based/image.png"
            alt="Project time and cost control workspace"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 615px"
          />

          {/* Image overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-slate-900/0
              from-[55%]
              to-slate-900/60
            "
          />
        </div>

        {/* =========================================================
            PROJECT DELIVERY CARD
        ========================================================= */}
        <div
          className="
            relative z-20
            ml-auto
            mt-[-45px]
            w-full
            max-w-[360px]
            rounded-2xl
            border border-gray-200
            bg-white
            shadow-[0px_20px_40px_-14px_rgba(10,27,48,0.22)]

            dark:border-slate-700
            dark:bg-slate-900

            sm:max-w-[384px]

            lg:absolute
            lg:left-[595px]
            lg:top-[205px]
            lg:mt-0
            lg:w-[256px]
            lg:max-w-none
          "
        >
          {/* Card Header */}
          <div className="px-10 pb-6 pt-7">
            <p
              className="
                text-xs
                font-bold
                uppercase
                leading-5
                tracking-wide
                text-slate-500
                dark:text-slate-400
              "
            >
              Project Delivery Workspace
            </p>
          </div>

          {/* Project 1 */}
          <div
            className="
              flex
              min-h-[55px]
              items-center
              justify-between
              border-t
              border-gray-200
              px-5
              dark:border-slate-700
            "
          >
            <p
              className="
                text-xs
                font-normal
                leading-5
                text-sky-950
                dark:text-slate-200
              "
            >
              Atlas Retrofit — Phase
              <br />
              2
            </p>

            <span
              className="
                rounded-[20px]
                bg-green-100
                px-3
                py-1
                text-xs
                font-bold
                leading-4
                text-emerald-700
                dark:bg-emerald-950
                dark:text-emerald-400
              "
            >
              Approved
            </span>
          </div>

          {/* Project 2 */}
          <div
            className="
              flex
              min-h-[55px]
              items-center
              justify-between
              border-t
              border-gray-200
              px-5
              dark:border-slate-700
            "
          >
            <p
              className="
                text-xs
                font-normal
                leading-5
                text-sky-950
                dark:text-slate-200
              "
            >
              Meridian Rollout —
              <br />
              QA
            </p>

            <span
              className="
                rounded-[20px]
                bg-orange-100
                px-3
                py-1
                text-center
                text-xs
                font-bold
                leading-4
                text-yellow-800
                dark:bg-yellow-950
                dark:text-yellow-400
              "
            >
              Pending
              <br />
              Review
            </span>
          </div>

          {/* Project 3 */}
          <div
            className="
              flex
              min-h-[55px]
              items-center
              justify-between
              border-t
              border-gray-200
              px-5
              dark:border-slate-700
            "
          >
            <p
              className="
                text-xs
                font-normal
                leading-5
                text-sky-950
                dark:text-slate-200
              "
            >
              Harbor
              <br />
              Migration
            </p>

            <span
              className="
                rounded-[20px]
                bg-orange-100
                px-3
                py-1
                text-center
                text-xs
                font-bold
                leading-4
                text-yellow-800
                dark:bg-yellow-950
                dark:text-yellow-400
              "
            >
              Context
              <br />
              Requested
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}