"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const businessNeeds = [
  {
    title: "Verify Time & Attendance",
    description: "Ensure presence and time are accurate.",
    href: "/verify-time-attendance",
  },
  {
    title: "Improve Payroll Accuracy",
    description: "Reduce errors and overpayments.",
    href: "/improve-payroll-accuracy",
  },
  {
    title: "Create Auditable Time Records",
    description: "Build defensible records for audits and reviews.",
    href: "/auditable-time-records",
  },
];

export default function Business() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">

          {/* IMAGE */}
          <div className="order-2 aspect-[856/570] w-full overflow-hidden rounded-2xl lg:order-1 lg:aspect-auto lg:h-[570px] lg:flex-1">
            <img
              src="/solutions/business.png"
              alt="Business solutions"
              className="h-full w-full object-cover"
            />
          </div>

          {/* CARD */}
          <div className="order-1 flex w-full flex-col rounded-2xl border border-neutral-300 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:order-2 lg:h-[570px] lg:w-[384px] lg:shrink-0">

            {/* HEADER */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#44B97A]">
                <img
                  src="/solutions/business-icon.png"
                  alt=""
                  className="h-6 w-6 object-contain"
                />
              </div>

              <div>
                <h2 className="text-2xl font-semibold leading-8 text-slate-950 dark:text-white">
                  2. By Business Need
                </h2>

                <p className="text-sm leading-5 text-zinc-700 dark:text-zinc-300">
                  Solutions for the outcomes you want
                  <br />
                  to achieve.
                </p>
              </div>
            </div>

            {/* ITEMS */}
            <div className="mt-8 flex flex-col gap-4">
              {businessNeeds.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group block rounded-lg p-4 transition-colors hover:bg-white dark:hover:bg-slate-800"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold leading-6 text-slate-950 dark:text-white">
                      {item.title}
                    </h3>

                    <ChevronRight
                      className="h-4 w-4 shrink-0 text-zinc-700 transition-transform group-hover:translate-x-1 dark:text-zinc-300"
                      strokeWidth={1.8}
                    />
                  </div>

                  <p className="mt-1 text-sm leading-5 text-zinc-700 dark:text-zinc-300">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>

            {/* BOTTOM */}
            {/*<div className="mt-auto border-t border-neutral-300 pt-6 dark:border-neutral-700">
              <Link
                href="#"
                className="group inline-flex items-center gap-2 text-base font-semibold leading-6 text-[#44B97A]"
              >
                Explore by need

                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>*/}

          </div>
        </div>
      </div>
    </section>
  );
}