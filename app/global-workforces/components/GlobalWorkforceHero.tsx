"use client";

import Image from "next/image";

export default function GlobalWorkforceHero() {
  return (
    <section>
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-14">
        {/* ================= LEFT CONTENT ================= */}
        <div className="flex min-w-0 flex-col items-start">

          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 shrink-0 rounded-sm bg-[#3FB97A]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3FB97A] sm:text-xs">
              Global Workforce Operations
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-4 text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-800 sm:text-4xl md:text-5xl lg:text-[46px] xl:text-5xl dark:text-white">
            Coordinate global work.
            <br />
            <span className="text-[#3FB97A]">
              Preserve local context.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[540px] text-sm leading-7 text-gray-500 sm:text-base md:text-lg md:leading-8 dark:text-slate-400">
            The governed time, attendance, approval, and evidence layer for
            global workforces — local accuracy with authorized global
            visibility, and no invasive monitoring.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">

            {/* Request Enterprise Demo */}
            <a
              href="/request-enterprise-demo"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-[10px] bg-[#3FB97A] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-[0px_6px_16px_0px_rgba(63,185,122,0.28)] transition-all hover:bg-[#35A96E] active:scale-95 sm:w-auto sm:text-base"
            >
              Request Enterprise Demo
            </a>

            {/* Start Free */}
            <a
              href="/start-free"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-[10px] border border-gray-300 bg-white px-6 py-3.5 text-center text-sm font-semibold text-slate-800 transition-all hover:border-gray-400 hover:bg-gray-50 active:scale-95 sm:w-auto sm:text-base dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-600 dark:hover:bg-slate-800"
            >
              Start Free
            </a>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative w-full">
          <div className="relative mx-auto aspect-[533/420] w-full max-w-[600px] overflow-visible rounded-2xl shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] sm:rounded-[20px]">

            <Image
              src="/global-workforces/image.png"
              alt="Global Workforce Operations"
              fill
              priority
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 90vw, 50vw"
              className="rounded-2xl object-cover sm:rounded-[20px]"
            />

            {/* ================= FIGMA STATS PANEL ================= */}
            <div className="absolute bottom-[-40px] left-[30%] z-10 w-[calc(100%-24px)] max-w-[360px] -translate-x-1/2 overflow-hidden rounded-xl bg-white shadow-[0px_10px_30px_0px_rgba(14,31,61,0.14)] dark:bg-slate-900">

              <div className="flex w-full flex-col items-start px-3 py-3">

                {/* ================= STATS ================= */}
                <div className="grid w-full grid-cols-2 gap-2 pb-2.5">

                  {/* Entities */}
                  <div className="flex flex-col items-start rounded-lg border border-slate-200 bg-gray-50 px-2 py-1.5 dark:border-slate-700 dark:bg-slate-800">
                    <div className="text-base font-extrabold leading-6 text-slate-800 dark:text-white">
                      18
                    </div>

                    <div className="text-[8.5px] font-normal uppercase leading-3 tracking-tight text-gray-500 dark:text-slate-400">
                      Entities
                    </div>
                  </div>

                  {/* Cycle Ready */}
                  <div className="flex flex-col items-start rounded-lg border border-slate-200 bg-gray-50 px-2 py-1.5 dark:border-slate-700 dark:bg-slate-800">
                    <div className="text-base font-extrabold leading-6 text-slate-800 dark:text-white">
                      92%
                    </div>

                    <div className="text-[8.5px] font-normal uppercase leading-3 tracking-tight text-gray-500 dark:text-slate-400">
                      Cycle ready
                    </div>
                  </div>

                  {/* Pending Review */}
                  <div className="flex flex-col items-start rounded-lg border border-slate-200 bg-gray-50 px-2 py-1.5 dark:border-slate-700 dark:bg-slate-800">
                    <div className="text-base font-extrabold leading-6 text-slate-800 dark:text-white">
                      7
                    </div>

                    <div className="text-[8.5px] font-normal uppercase leading-3 tracking-tight text-gray-500 dark:text-slate-400">
                      Pending review
                    </div>
                  </div>

                  {/* Cutoff Risk */}
                  <div className="flex flex-col items-start rounded-lg border border-slate-200 bg-gray-50 px-2 py-1.5 dark:border-slate-700 dark:bg-slate-800">
                    <div className="text-base font-extrabold leading-6 text-slate-800 dark:text-white">
                      2
                    </div>

                    <div className="text-[8.5px] font-normal uppercase leading-3 tracking-tight text-gray-500 dark:text-slate-400">
                      Cutoff risk
                    </div>
                  </div>
                </div>

                {/* ================= DE GmbH ================= */}
                <div className="flex w-full items-start justify-between border-t border-slate-200 py-[5px] dark:border-slate-700">
                  <div className="flex items-end">
                    <div className="text-[10px] font-normal leading-4 text-slate-800 dark:text-slate-200">
                      DE GmbH
                    </div>

                    <div className="ml-1 rounded-[5px] bg-[#3FB97A]/10 px-1.5">
                      <div className="text-[8.5px] font-bold leading-3 text-[#3FB97A]">
                        EMEA
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] font-normal leading-4 text-slate-800 dark:text-slate-200">
                    Ready
                  </div>
                </div>

                {/* ================= SG Pte ================= */}
                <div className="flex w-full items-start justify-between border-t border-slate-200 py-[5px] dark:border-slate-700">
                  <div className="flex items-end">
                    <div className="text-[10px] font-normal leading-4 text-slate-800 dark:text-slate-200">
                      SG Pte
                    </div>

                    <div className="ml-1 rounded-[5px] bg-[#3FB97A]/10 px-1.5">
                      <div className="text-[8.5px] font-bold leading-3 text-[#3FB97A]">
                        APAC
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] font-normal leading-4 text-slate-800 dark:text-slate-200">
                    Review
                  </div>
                </div>

                {/* ================= US Inc ================= */}
                <div className="flex w-full items-start justify-between border-t border-slate-200 py-[5px] dark:border-slate-700">
                  <div className="flex items-end">
                    <div className="text-[10px] font-normal leading-4 text-slate-800 dark:text-slate-200">
                      US Inc
                    </div>

                    <div className="ml-1 rounded-[5px] bg-[#3FB97A]/10 px-1.5">
                      <div className="text-[8.5px] font-bold leading-3 text-[#3FB97A]">
                        AMER
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] font-normal leading-4 text-slate-800 dark:text-slate-200">
                    Owner: R. Diaz
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}