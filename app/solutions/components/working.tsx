"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const workingEnvironments = [
  {
    title: "Remote Teams",
    description: "Build connection with trusted time data.",
    href: "/remote-teams",
  },
  {
    title: "Hybrid Workforces",
    description: "Unify in-office and remote work records.",
    href: "/hybrid-workforces",
  },
  {
    title: "Contractor-Heavy Workforces",
    description: "Manage contingent work with confidence.",
    href: "/contractor-heavy-workforces",
  },
];

export default function Working() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">

          {/* CARD */}
          <div
            className="
              order-1
              flex
              w-full
              flex-col
              rounded-2xl
              border
              border-neutral-300
              bg-slate-50
              p-8
              shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]
              dark:border-slate-800
              dark:bg-slate-900
              lg:h-[570px]
              lg:w-[384px]
              lg:shrink-0
            "
          >
            {/* HEADER */}
            <div className="flex items-start gap-4">

              {/* ICON */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#44B97A]">
                <img
                  src="/solutions/working-icon.png"
                  alt=""
                  className="h-6 w-6 object-contain"
                />
              </div>

              {/* TITLE + DESCRIPTION */}
              <div className="min-w-0">
                <h2
                  className="
                    text-2xl
                    font-semibold
                    leading-8
                    text-slate-950
                    dark:text-white
                  "
                >
                  3. By Working
                  <br />
                  Environment
                </h2>

                <p
                  className="
                    mt-1
                    text-sm
                    font-normal
                    leading-5
                    text-zinc-700
                    dark:text-zinc-300
                  "
                >
                  Solutions that fit how your teams
                  <br className="hidden sm:block" />
                  work.
                </p>
              </div>
            </div>

            {/* WORKING ENVIRONMENTS */}
            <div className="mt-8 flex flex-col gap-4">
              {workingEnvironments.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="
                    group
                    block
                    rounded-lg
                    p-4
                    transition-colors
                    hover:bg-white
                    dark:hover:bg-slate-800
                  "
                >
                  {/* TITLE + ARROW */}
                  <div className="flex items-center justify-between gap-3">
                    <h3
                      className="
                        text-base
                        font-semibold
                        leading-6
                        text-slate-950
                        dark:text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <ChevronRight
                      className="
                        h-4
                        w-4
                        shrink-0
                        text-zinc-700
                        transition-transform
                        group-hover:translate-x-1
                        dark:text-zinc-300
                      "
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-1
                      text-sm
                      font-normal
                      leading-5
                      text-zinc-700
                      dark:text-zinc-300
                    "
                  >
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>

            {/* BOTTOM LINK */}
            <div
              className="
                mt-auto
                border-t
                border-neutral-300
                pt-6
                dark:border-neutral-700
              "
            >
              <Link
                href="#"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-base
                  font-semibold
                  leading-6
                  text-[#44B97A]
                "
              >
                Explore by environment

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
              order-2
              aspect-[856/570]
              w-full
              overflow-hidden
              rounded-2xl
              lg:h-[570px]
              lg:flex-1
              lg:aspect-auto
            "
          >
            <img
              src="/solutions/working.png"
              alt="Working environment"
              className="block h-full w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}