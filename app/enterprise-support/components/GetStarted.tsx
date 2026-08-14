"use client";

import Link from "next/link";

export default function GetStarted() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1180px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* =====================================================
            GET STARTED CTA
        ===================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            bg-[#16345F]
            px-6
            py-12
            text-center
            sm:px-10
            sm:py-14
            lg:min-h-[371px]
            lg:px-16
            lg:py-[58px]
          "
        >
          {/* Subtle background effect */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[radial-gradient(circle_at_50%_0%,rgba(42,178,166,0.08),transparent_45%)]
            "
          />

          <div className="relative z-10 mx-auto flex max-w-[850px] flex-col items-center">
            {/* =================================================
                EYEBROW
            ================================================= */}

            <div className="flex items-center gap-2">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-teal-500
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  leading-5
                  tracking-[0.14em]
                  text-teal-400
                "
              >
                Get Started
              </span>
            </div>

            {/* =================================================
                HEADING
            ================================================= */}

            <h2
              className="
                mt-5
                max-w-[760px]
                text-3xl
                font-semibold
                leading-[1.2]
                tracking-tight
                text-white
                sm:text-4xl
                sm:leading-[1.2]
                lg:text-[32px]
              "
            >
              See how accountable support works for your
              <br className="hidden sm:block" />
              organization.
            </h2>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-5
                max-w-[650px]
                text-sm
                font-normal
                leading-5
                text-slate-300
                sm:text-sm
              "
            >
              Talk to our team, or existing customers can open the Support
              Center directly.
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div
              className="
                mt-7
                flex
                w-full
                flex-col
                items-center
                justify-center
                gap-3
                sm:w-auto
                sm:flex-row
              "
            >
              {/* Request Enterprise Demo */}
              <Link
                href="/request-enterprise-demo"
                className="
                  inline-flex
                  h-10
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-teal-500
                  px-5
                  text-xs
                  font-semibold
                  leading-5
                  text-white
                  transition
                  hover:bg-teal-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-teal-400
                  focus:ring-offset-2
                  focus:ring-offset-[#16345F]
                  sm:w-auto
                "
              >
                Request Enterprise Demo
              </Link>

              {/* Talk to Sales */}
              <Link
                href="/contact-sales"
                className="
                  inline-flex
                  h-10
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-500
                  bg-transparent
                  px-5
                  text-xs
                  font-semibold
                  leading-5
                  text-white
                  transition
                  hover:border-slate-400
                  hover:bg-white/5
                  focus:outline-none
                  focus:ring-2
                  focus:ring-slate-400
                  focus:ring-offset-2
                  focus:ring-offset-[#16345F]
                  sm:w-auto
                "
              >
                Talk to Sales
              </Link>

              {/* Open Support Center */}
              <Link
                href="#enterprise-support"
                className="
                  inline-flex
                  h-10
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-500
                  bg-transparent
                  px-5
                  text-xs
                  font-semibold
                  leading-5
                  text-white
                  transition
                  hover:border-slate-400
                  hover:bg-white/5
                  focus:outline-none
                  focus:ring-2
                  focus:ring-slate-400
                  focus:ring-offset-2
                  focus:ring-offset-[#16345F]
                  sm:w-auto
                "
              >
                Open Support Center
              </Link>
            </div>

            {/* =================================================
                DISCLAIMER
            ================================================= */}

            <p
              className="
                mt-5
                max-w-[720px]
                text-[10px]
                font-normal
                leading-5
                text-slate-400
                sm:text-[10px]
              "
            >
              No invented coverage, response targets, SLAs, or availability —
              every claim resolves to current approved evidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}