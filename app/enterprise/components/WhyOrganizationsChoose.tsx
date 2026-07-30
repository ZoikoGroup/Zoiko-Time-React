"use client";

import Image from "next/image";

const reasons = [
  {
    title: (
      <>
        Policy-first
        <br />
        Architecture
      </>
    ),
    description: (
      <>
        You control policy scope,
        <br />
        not hidden defaults.
      </>
    ),
    image: "/enterprise/policy2.png",
  },
  {
    title: (
      <>
        Human-in-Command
        <br />
        by Design
      </>
    ),
    description: (
      <>
        Human review remains
        <br />
        authoritative.
      </>
    ),
    image: "/enterprise/human1.png",
  },
  {
    title: (
      <>
        Anti-Surveillance by
        <br />
        Default
      </>
    ),
    description: (
      <>
        No invasive monitoring
        <br />
        under any tier or
        <br />
        configuration.
      </>
    ),
    image: "/enterprise/anti.png",
  },
  {
    title: (
      <>
        Evidence-Led
        <br />
        Procurement
      </>
    ),
    description: (
      <>
        Clear artifacts with status,
        <br />
        owner, and review date.
      </>
    ),
    image: "/enterprise/evidence1.png",
  },
  {
    title: (
      <>
        Designed for
        <br />
        Enterprise Scale
      </>
    ),
    description: (
      <>
        Secure, reliable, and
        <br />
        operationally accountable.
      </>
    ),
    image: "/enterprise/designed.png",
  },
];

export default function WhyOrganizationsChoose() {
  return (
    <section className="w-full bg-slate-50 py-16 dark:bg-slate-950 sm:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 sm:px-8 lg:px-6">

        {/* Heading */}
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl font-extrabold leading-10 text-sky-950 dark:text-white sm:text-4xl">
            Why organizations choose ZoikoTime
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.image}
              className="flex min-h-[250px] flex-col rounded-lg border border-sky-950/5 bg-white px-6 py-6 shadow-sm dark:border-white/10 dark:bg-slate-900"
            >
              {/* Icon */}
              <div className="flex h-8 w-8 items-center">
                <Image
                  src={reason.image}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="pt-4 text-base font-bold leading-6 text-sky-950 dark:text-white">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}