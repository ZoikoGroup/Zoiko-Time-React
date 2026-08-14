"use client";

import Image from "next/image";
import Link from "next/link";

export default function SupportHero() {
  return (
    <section
    id="enterprise-support"
     className="w-full bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto w-full max-w-[1180px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* =========================================================
            HERO
        ========================================================= */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* =======================================================
              LEFT CONTENT
          ======================================================= */}
          <div className="w-full">
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-teal-600 dark:bg-teal-400" />

              <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
                Enterprise Support
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-[510px]
                text-3xl
                font-semibold
                leading-[1.1]
                tracking-tight
                text-slate-800
                dark:text-slate-100
                sm:text-4xl
                sm:leading-[1.08]
                lg:text-[46px]
                lg:leading-[1.09]
              "
            >
              Get accountable help
              <br className="hidden sm:block" />
              when governed
              <br className="hidden sm:block" />
              workforce operations
              <br className="hidden sm:block" />
              need attention.
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-[500px]
                text-sm
                font-normal
                leading-6
                text-gray-500
                dark:text-slate-400
                sm:text-base
                sm:leading-7
              "
            >
              Product questions, access, configuration, and data issues are
              routed through visible ownership, protected evidence, human
              escalation, and accountable review — never a black-box ticket
              queue.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* Primary Button */}
              <Link
                href="#support"
                className="
                  inline-flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-teal-600
                  px-6
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-teal-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-teal-500
                  focus:ring-offset-2
                  dark:focus:ring-offset-slate-950
                  sm:w-auto
                "
              >
                Submit a support request
              </Link>

              {/* Secondary Button */}
              <Link
                href="/request-a-demo"
                className="
                  inline-flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-7
                  text-sm
                  font-semibold
                  text-slate-800
                  transition-colors
                  hover:bg-slate-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-slate-300
                  focus:ring-offset-2
                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-slate-100
                  dark:hover:bg-slate-800
                  dark:focus:ring-slate-600
                  dark:focus:ring-offset-slate-950
                  sm:w-auto
                "
              >
                Request a Demo
              </Link>
            </div>
          </div>

          {/* =======================================================
              RIGHT SIDE
          ======================================================= */}
          <div className="w-full">
            {/* =====================================================
                MOBILE / TABLET:
                IMAGE + CARD ARE SEPARATE
            ===================================================== */}
            <div className="flex w-full flex-col gap-5 lg:hidden">
              {/* Image */}
              <div
                className="
                  relative
                  aspect-[553/456]
                  w-full
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-100
                  dark:border-slate-700
                  dark:bg-slate-900
                "
              >
                <Image
                  src="/enterprise-support/image.png"
                  alt="Enterprise Support"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 555px"
                />
              </div>

              {/* Support Operations Card */}
              <SupportOperationsCard />
            </div>

            {/* =====================================================
                DESKTOP:
                IMAGE + CARD OVERLAP LIKE FIGMA
            ===================================================== */}
            <div className="relative hidden w-full lg:block">
              {/* Image */}
              <div
                className="
                  relative
                  aspect-[553/456]
                  w-full
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-100
                  dark:border-slate-700
                  dark:bg-slate-900
                "
              >
                <Image
                  src="/enterprise-support/image.png"
                  alt="Enterprise Support"
                  fill
                  priority
                  className="object-cover"
                  sizes="555px"
                />
              </div>

              {/* Card - Figma desktop position */}
              <div
                className="
                  absolute
                  left-[-12px]
                  top-[58%]
                  w-[300px]
                  -translate-y-1/2
                "
              >
                <SupportOperationsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   SUPPORT OPERATIONS CARD
=============================================================== */

function SupportOperationsCard() {
  return (
    <div
      className="
        w-full
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-[19px]
        shadow-[0_10px_30px_rgba(14,31,61,0.10)]
        dark:border-slate-700
        dark:bg-slate-900
        dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-xs font-semibold leading-5 text-slate-800 dark:text-slate-100">
          Support Operations Center
        </h2>

        <span className="shrink-0 text-[9px] font-bold leading-4 text-gray-500 dark:text-slate-400">
          CASE-88214
        </span>
      </div>

      {/* Case Title */}
      <h3 className="mt-3 text-sm font-semibold leading-5 text-slate-800 dark:text-slate-100">
        Access permission not syncing after role change
      </h3>

      {/* Lifecycle */}
      <div
        className="
          mt-4
          rounded-[10px]
          border
          border-slate-200
          bg-white
          p-3
          dark:border-slate-700
          dark:bg-slate-950
        "
      >
        <p className="text-[9px] font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-500">
          Lifecycle
        </p>

        <p className="mt-1 text-xs font-semibold leading-5 text-blue-600 dark:text-blue-400">
          Investigate &amp; Reproduce
        </p>
      </div>

      {/* Owner + Waiting On */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        {/* Owner */}
        <div
          className="
            rounded-[10px]
            border
            border-slate-200
            bg-white
            p-3
            dark:border-slate-700
            dark:bg-slate-950
          "
        >
          <p className="text-[9px] font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-500">
            Owner
          </p>

          <p className="mt-1 text-xs font-semibold leading-5 text-slate-800 dark:text-slate-100">
            IT Access Team
          </p>
        </div>

        {/* Waiting On */}
        <div
          className="
            rounded-[10px]
            border
            border-slate-200
            bg-white
            p-3
            dark:border-slate-700
            dark:bg-slate-950
          "
        >
          <p className="text-[9px] font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-500">
            Waiting on
          </p>

          <p className="mt-1 text-xs font-semibold leading-5 text-yellow-700 dark:text-yellow-400">
            ZoikoTime
          </p>
        </div>
      </div>

      {/* Entitlement */}
      <div
        className="
          mt-3
          w-[110px]
          rounded-[10px]
          border
          border-slate-200
          bg-white
          p-3
          dark:border-slate-700
          dark:bg-slate-950
        "
      >
        <p className="text-[9px] font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-500">
          Entitlement
        </p>

        <p className="mt-1 text-xs font-semibold leading-5 text-teal-700 dark:text-teal-400">
          Verified
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 border-t border-gray-100 pt-3 dark:border-slate-800">
        <div
          className="
            flex
            flex-col
            gap-1
            text-[10px]
            leading-4
            text-gray-500
            dark:text-slate-500
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>Linked evidence: 2 items</span>

          <span>Service Status: Operational</span>
        </div>
      </div>
    </div>
  );
}