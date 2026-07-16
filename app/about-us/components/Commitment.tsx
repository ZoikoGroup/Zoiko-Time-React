"use client";

import Image from "next/image";

const commitments = [
  {
    image: "/about-us/grade.png",
    title: (
      <>
        Enterprise-Grade,
        <br />
        Defensible Systems
      </>
    ),
    description: (
      <>
        Built to withstand the most
        <br />
        rigorous procurement, audit,
        <br />
        legal, and regulatory scrutiny
        <br />— now and as requirements
        <br />
        evolve.
      </>
    ),
  },
  {
    image: "/about-us/people.png",
    title: (
      <>
        Respect for Employee
        <br />
        Rights
      </>
    ),
    description: (
      <>
        Every capability is designed
        <br />
        to respect workplace culture
        <br />
        and individual dignity —
        <br />
        governance that protects
        <br />
        the organisation without
        <br />
        diminishing the people in it.
      </>
    ),
  },
  {
    image: "/about-us/weigh.png",
    title: (
      <>
        Lawful and Ethical
        <br />
        Governance
      </>
    ),
    description: (
      <>
        ZoikoTime supports
        <br />
        governance that is lawful,
        <br />
        proportionate, and ethically
        <br />
        grounded — in every
        <br />
        jurisdiction where it is
        <br />
        deployed, for every
        <br />
        workforce it serves.
      </>
    ),
  },
  {
    image: "/about-us/search.png",
    title: (
      <>
        Continuous
        <br />
        Transparency
      </>
    ),
    description: (
      <>
        We continuously improve the
        <br />
        explainability of our system
        <br />— how it works, what it
        <br />
        measures, and why —
        <br />
        because confidence
        <br />
        requires visibility, not
        <br />
        opacity.
      </>
    ),
  },
];

export default function Commitment() {
  return (
    <section className="w-full bg-slate-100 px-5 py-16 transition-colors duration-300 dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-[1040px]">

        {/* Header */}
        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Our Commitment
          </p>

          <h2 className="mx-auto mt-7 max-w-[1010px] text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl sm:leading-10">
            What We Commit to Every Organisation That Works With Us
          </h2>

          <p className="mx-auto mt-5 max-w-[590px] text-base font-normal leading-7 text-slate-500 dark:text-slate-400 sm:text-lg">
            Four commitments that underpin every product decision,
            partnership, and client relationship — not as marketing language,
            but as design requirements built into the system itself.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="
                relative
                flex
                min-h-[320px]
                flex-col
                items-center
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                px-5
                pb-8
                pt-8
                text-center
                shadow-[0px_1px_2px_0px_rgba(13,21,38,0.04),0px_1px_4px_0px_rgba(13,21,38,0.06)]
                transition-colors
                duration-300

                dark:border-slate-800
                dark:bg-slate-900
                dark:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.2),0px_4px_12px_0px_rgba(0,0,0,0.25)]
              "
            >
              {/* Top Accent */}
              <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-teal-600 to-teal-500" />

              {/* Image */}
              <div className="relative h-14 w-14">
                <Image
                  src={commitment.image}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 min-h-[48px] text-base font-bold leading-6 text-slate-900 dark:text-white">
                {commitment.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm font-normal leading-6 text-slate-500 dark:text-slate-400">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}