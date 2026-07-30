"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function EnterpriseCTA() {
  return (
    <section className="w-full bg-white px-4 py-10 transition-colors dark:bg-slate-950 sm:px-6 sm:py-12 lg:px-6">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1232px]
          flex-col
          overflow-hidden
          rounded-lg
          bg-sky-950
          shadow-lg
          dark:bg-slate-900
          lg:min-h-[384px]
          lg:flex-row
        "
      >
        {/* Content */}
        <div
          className="
            flex
            w-full
            flex-col
            justify-center
            px-6
            py-10
            sm:px-10
            sm:py-12
            lg:w-[54%]
            lg:px-12
            xl:px-16
          "
        >
          <div className="flex flex-col gap-4">
            <h2
              className="
                text-3xl
                font-black
                leading-tight
                tracking-tight
                text-white
                sm:text-4xl
                sm:leading-10
              "
            >
              Plan the next controlled
              <br className="hidden sm:block" />
              evaluation step.
            </h2>

            <p
              className="
                max-w-xl
                text-base
                font-normal
                leading-6
                text-white/70
                sm:text-lg
                sm:leading-7
              "
            >
              Tell us about your organization, needs, integrations, support
              requirements, procurement process, and timeline.
            </p>

            {/* Buttons */}
            <div
              className="
                flex
                flex-col
                items-stretch
                gap-3
                pt-4
                sm:flex-row
                sm:items-center
                sm:gap-4
              "
            >
              <button
                type="button"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-emerald-500
                  px-6
                  py-3
                  text-sm
                  font-bold
                  leading-6
                  text-white
                  transition
                  hover:bg-emerald-600
                  sm:px-8
                  sm:py-4
                  sm:text-base
                "
              >
                Request Enterprise Demo
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </button>

              <button
                type="button"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/30
                  px-6
                  py-3
                  text-sm
                  font-bold
                  leading-6
                  text-white
                  transition
                  hover:border-white/60
                  hover:bg-white/5
                  sm:px-8
                  sm:py-4
                  sm:text-base
                "
              >
                Contact Sales
              </button>
            </div>

            {/* Support */}
            <div className="pt-3 text-sm leading-5">
              <span className="text-white/50">
                Existing customers{" "}
              </span>

              <a
                href="#"
                className="
                  text-white
                  underline
                  underline-offset-2
                  transition
                  hover:text-emerald-400
                "
              >
                Enterprise Support →
              </a>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="
            relative
            min-h-[260px]
            w-full
            overflow-hidden
            sm:min-h-[320px]
            lg:min-h-0
            lg:w-[46%]
          "
        >
          <Image
            src="/enterprise/cta.png"
            alt="Enterprise evaluation meeting"
            fill
            priority
            className="object-cover"
          />

          {/* Blue overlay to match Figma */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-sky-950
              via-sky-950/70
              to-sky-950/10
              dark:from-slate-900
              dark:via-slate-900/70
              dark:to-slate-900/10
            "
          />
        </div>
      </div>
    </section>
  );
}