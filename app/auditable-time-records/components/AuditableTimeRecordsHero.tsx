"use client";

import Image from "next/image";
import Link from "next/link";

const checks = [
  "Source provenance",
  "Policy version",
  "Approval chain",
];

export default function AuditableTimeRecordsHero() {
  return (
    <section className="w-full bg-white transition-colors dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {/* ================= HERO GRID ================= */}
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="flex w-full flex-col items-start gap-4">

            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 shrink-0 rounded-sm bg-[#3FB97A]" />

              <span className="text-xs font-bold uppercase leading-5 tracking-widest text-[#3FB97A]">
                Auditable Time Records
              </span>
            </div>

            {/* Heading */}
            <div className="w-full">
              <h1 className="max-w-[650px] text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.17] dark:text-white">
                Build time records
                <br className="hidden sm:block" />
                that can explain
                <br className="hidden sm:block" />
                themselves.
              </h1>
            </div>

            {/* Description */}
            <div className="w-full max-w-[560px]">
              <p className="text-base font-normal leading-7 text-gray-500 sm:text-lg dark:text-gray-400">
                Keep every original event, classification, correction,
                approval, export, and downstream acknowledgment connected to
                one governed record history.
              </p>
            </div>

            {/* Auditability Callout */}
            <div
              className="
                w-full
                max-w-[560px]
                rounded-lg
                border-l-[3px]
                border-[#3FB97A]
                bg-[#3FB97A]/10
                px-4
                py-3.5
                dark:bg-[#3FB97A]/15
              "
            >
              <p className="text-sm font-normal leading-6 text-slate-900 sm:text-base dark:text-slate-200">
                Auditability for accountable administration — not employee
                surveillance or automatic judgment.
              </p>
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">

              {/* Get a Demo */}
              <Link
                href="/request-a-demo"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#3FB97A]
                  px-6
                  text-base
                  font-semibold
                  leading-6
                  text-white
                  transition-colors
                  hover:bg-[#35A86E]
                "
              >
                Get a demo
              </Link>

              {/* Talk to Sales */}
              <Link
                href="/contact-sales"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-6
                  text-base
                  font-semibold
                  leading-6
                  text-slate-900
                  transition-colors
                  hover:bg-slate-50
                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-white
                  dark:hover:bg-slate-800
                "
              >
                Talk to sales
              </Link>
            </div>

            {/* ================= CHECK LIST ================= */}
            <div className="flex w-full flex-wrap gap-x-6 gap-y-3 pt-4 sm:gap-x-8 sm:pt-5">
              {checks.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  {/* Check Icon */}
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#3FB97A]">
                    <span className="text-[10px] font-medium leading-4 text-white">
                      ✓
                    </span>
                  </div>

                  {/* Check Text */}
                  <span className="text-sm font-medium leading-5 text-gray-500 dark:text-gray-400">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative w-full">

            {/* Main Image */}
            <div
              className="
                relative
                w-full
                overflow-hidden
                rounded-[20px]
                bg-white
                shadow-[0px_20px_40px_-24px_rgba(10,22,40,0.25)]
                dark:bg-slate-900
                dark:shadow-[0px_20px_40px_-24px_rgba(0,0,0,0.6)]
              "
            >
              <Image
                src="/auditable-time-records/image.png"
                alt="Auditable time records"
                width={624}
                height={483}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            {/* ================= FLOATING RECORD CARD ================= */}
            <div
              className="
                absolute
                -bottom-8
                -left-4
                w-64
                max-w-[calc(100%-1rem)]
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-[0px_20px_40px_-24px_rgba(10,22,40,0.25)]
                dark:border-slate-700
                dark:bg-slate-900
                dark:shadow-[0px_20px_40px_-24px_rgba(0,0,0,0.6)]
                sm:-left-6
                lg:-left-8
              "
            >

              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 pb-3">
                <p className="text-xs font-bold uppercase leading-5 tracking-wide text-gray-500 dark:text-gray-400">
                  Record TR-88232
                </p>

                <div className="shrink-0 rounded-full bg-orange-100 px-2 py-1 dark:bg-orange-950/50">
                  <span className="text-xs font-semibold leading-4 text-yellow-800 dark:text-orange-300">
                    Corrected
                  </span>
                </div>
              </div>

              {/* Policy Version */}
              <div className="flex items-start justify-between gap-4 border-t border-slate-200 py-1.5 dark:border-slate-700">
                <span className="text-xs font-normal leading-5 text-slate-900 dark:text-slate-300">
                  Policy version
                </span>

                <span className="text-xs font-semibold leading-5 text-slate-900 dark:text-white">
                  v3.2
                </span>
              </div>

              {/* Approved By */}
              <div className="flex items-start justify-between gap-4 border-t border-slate-200 py-1.5 dark:border-slate-700">
                <span className="text-xs font-normal leading-5 text-slate-900 dark:text-slate-300">
                  Approved by
                </span>

                <span className="text-right text-xs font-semibold leading-5 text-slate-900 dark:text-white">
                  M. Alders — HR
                </span>
              </div>

              {/* Downstream */}
              <div className="flex items-start justify-between gap-4 border-t border-slate-200 py-1.5 dark:border-slate-700">
                <span className="text-xs font-normal leading-5 text-slate-900 dark:text-slate-300">
                  Downstream
                </span>

                <span className="text-xs font-semibold leading-5 text-slate-900 dark:text-white">
                  Reconciled
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}