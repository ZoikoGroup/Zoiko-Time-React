"use client";

import React from "react";
import Image from "next/image";

export default function CtaSection() {
  const cards = [
    {
      image: "/about-us/read.png",
      title: (
        <>
          Request an Executive
          <br />
          Briefing
        </>
      ),
      description: (
        <>
          A structured overview of
          <br className="hidden sm:block" />
          ZoikoTime&apos;s capabilities,
          <br className="hidden sm:block" />
          governance model, and
          <br className="hidden sm:block" />
          deployment approach —
          <br className="hidden sm:block" />
          tailored to your executive
          <br className="hidden sm:block" />
          team.
        </>
      ),
      link: "Schedule Briefing →",
    },
    {
      image: "/about-us/sms.png",
      title: "Talk to Sales",
      description: (
        <>
          Connect with a ZoikoTime
          <br className="hidden sm:block" />
          enterprise specialist to
          <br className="hidden sm:block" />
          discuss your workforce
          <br className="hidden sm:block" />
          governance challenges and
          <br className="hidden sm:block" />
          how the platform can
          <br className="hidden sm:block" />
          address them.
        </>
      ),
      link: "Talk to Sales →",
    },
    {
      image: "/about-us/telescope.png",
      title: "Explore the Platform",
      description: (
        <>
          Explore the full ZoikoTime
          <br className="hidden sm:block" />
          platform — workforce
          <br className="hidden sm:block" />
          assurance, performance
          <br className="hidden sm:block" />
          intelligence, evidence
          <br className="hidden sm:block" />
          capture, and governance
          <br className="hidden sm:block" />
          infrastructure.
        </>
      ),
      link: "Explore Platform →",
    },
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-emerald-50
        px-5
        py-20
        transition-colors
        dark:bg-slate-950
        sm:px-8
        lg:min-h-[905px]
        lg:px-12
        lg:py-[102px]
      "
    >
      {/* Top gradient line */}
      <div
        className="
          absolute
          left-0
          top-0
          h-[3px]
          w-full
          bg-gradient-to-r
          from-teal-600
          via-teal-500
          to-teal-600
        "
      />

      {/* Decorative background glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          bottom-[-180px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-teal-500/10
          blur-3xl
          dark:bg-teal-500/10
        "
      />

      <div className="relative mx-auto max-w-[1040px]">
        {/* Section label */}
        <div className="mb-7 flex items-center justify-center gap-3">
          <span className="hidden h-px w-6 bg-teal-500 sm:block" />

          <span
            className="
              text-center
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-teal-600
              dark:text-teal-400
            "
          >
            Learn More
          </span>

          <span className="hidden h-px w-6 bg-teal-500 sm:block" />
        </div>

        {/* Heading */}
        <h2
          className="
            mx-auto
            max-w-[900px]
            text-center
            font-sans
            text-4xl
            font-extrabold
            leading-[1.08]
            tracking-tight
            text-slate-900
            dark:text-white
            sm:text-5xl
            lg:text-[48px]
            lg:leading-[48.3px]
          "
        >
          A Structured, Responsible
          <br />
          Foundation for Managing Modern
          <br />
          Workforces
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-10
            max-w-[710px]
            text-center
            font-sans
            text-base
            font-normal
            leading-7
            text-slate-600
            dark:text-slate-400
            sm:text-lg
          "
        >
          Whether you are evaluating workforce assurance, performance
          intelligence, or audit readiness, ZoikoTime provides the
          enterprise-grade infrastructure your organisation needs — built for
          the complexity, compliance requirements, and governance expectations
          of the real world.
        </p>

        {/* CTA Cards */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                group
                flex
                min-h-[320px]
                flex-col
                items-center
                rounded-xl
                border
                border-slate-900/10
                bg-slate-900/[0.04]
                px-6
                py-8
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-teal-500/30
                hover:bg-white/60
                dark:border-white/10
                dark:bg-white/[0.04]
                dark:hover:bg-white/[0.08]
              "
            >
              <div className="relative mb-6 h-10 w-10">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="
                    object-contain
                    opacity-80
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    dark:brightness-0
                    dark:invert
                  "
                />
              </div>

              <h3
                className="
                  min-h-[48px]
                  font-sans
                  text-base
                  font-bold
                  leading-7
                  text-slate-900
                  dark:text-white
                "
              >
                {card.title}
              </h3>

              <p
                className="
                  mt-5
                  min-h-[112px]
                  font-sans
                  text-xs
                  font-normal
                  leading-5
                  text-slate-600
                  dark:text-slate-400
                "
              >
                {card.description}
              </p>

              <a
                href="#"
                className="
                  mt-auto
                  font-sans
                  text-xs
                  font-semibold
                  text-teal-600
                  transition-colors
                  hover:text-teal-700
                  dark:text-teal-400
                  dark:hover:text-teal-300
                "
              >
                {card.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}