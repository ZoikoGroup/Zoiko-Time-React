"use client";

import React from "react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: "🔍",
    title: (
      <>
        Insight
        <br />
        Detected
      </>
    ),
  },
  {
    number: "02",
    icon: "📁",
    title: (
      <>
        Case
        <br />
        Created
      </>
    ),
  },
  {
    number: "03",
    icon: "⚙️",
    title: (
      <>
        Workflow
        <br />
        Initiated
      </>
    ),
  },
  {
    number: "04",
    icon: "⚖️",
    title: (
      <>
        Decision
        <br />
        Made
      </>
    ),
  },
  {
    number: "05",
    icon: "✅",
    title: (
      <>
        Outcome
        <br />
        Recorded
      </>
    ),
  },
];

export default function GovernanceHero() {
  return (
    <section
      className="
        relative
        min-h-[923px]
        w-full
        overflow-hidden
        px-5 py-20
        transition-colors duration-300

        bg-gradient-to-b
        from-teal-50
        via-white
        to-white

        dark:from-slate-950
        dark:via-slate-950
        dark:to-slate-900

        sm:px-8
        lg:px-12
      "
    >

      {/* Top line */}
      <div
        className="
          absolute left-0 top-0
          h-1 w-full
          bg-gradient-to-r
          from-teal-600
          via-teal-400
          to-teal-600
        "
      />

      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-32
          h-[560px]
          w-[560px]
          rounded-full

          bg-[radial-gradient(circle,rgba(20,184,166,0.12)_0%,transparent_70%)]

          dark:bg-[radial-gradient(circle,rgba(20,184,166,0.10)_0%,transparent_70%)]
        "
      />


      <div className="relative mx-auto flex max-w-[1000px] flex-col items-center text-center">

        {/* Label */}
        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.12em]

            text-teal-600
            dark:text-teal-400
          "
        >
          Audit &amp; HR Enablement
        </p>


        {/* Heading */}
        <h1
          className="
            mt-5
            max-w-[700px]
            text-4xl
            font-extrabold
            leading-[1.08]
            tracking-tight

            text-slate-900

            dark:text-white

            sm:text-5xl
            lg:text-6xl
          "
        >
          From Workforce Insight to
          <br />

          <span
            className="
              text-teal-600
              dark:text-teal-400
            "
          >
            Governed Decisions
          </span>
        </h1>


        {/* Description */}
        <p
          className="
            mt-8
            max-w-[984px]
            text-base
            leading-7

            text-slate-600
            dark:text-slate-400

            sm:text-lg
          "
        >
          ZoikoTime transforms intelligence and evidence into structured
          decisions, case workflows, and enterprise actions ensuring every
          outcome is consistent, traceable, and defensible.
        </p>


        {/* Benefits */}
        <div
          className="
            mt-10
            grid
            w-full
            max-w-[780px]
            grid-cols-1
            gap-3

            sm:grid-cols-2
          "
        >
          <Benefit text="Enforce consistent workforce decisions" />
          <Benefit text="Reduce operational and compliance risk" />

          <div className="sm:col-span-2 sm:mx-auto sm:w-80">
            <Benefit text="Create a system of accountable actions" />
          </div>
        </div>


        {/* Buttons */}
        <div
          className="
            mt-10
            flex
            w-full
            flex-col
            justify-center
            gap-3

            sm:flex-row
          "
        >

          <Link
  href="/request-a-demo"
  className="
    h-12
    rounded-lg
    bg-teal-600
    px-10
    text-base
    font-semibold
    text-white
    shadow-[0px_4px_14px_rgba(0,157,140,0.28)]
    transition
    hover:bg-teal-700
    inline-flex
    items-center
    justify-center
  "
>
  Request Demo
</Link>


          <Link
  href="/audit-and-hr-enablement#case-flow"
  className="
    h-12
    rounded-lg
    border
    border-teal-600
    px-8
    text-base
    font-semibold
    text-teal-600
    transition
    hover:bg-teal-50
    dark:border-teal-400
    dark:text-teal-400
    dark:hover:bg-teal-950/50
    inline-flex
    items-center
    justify-center
  "
>
  Run Case Scenario
</Link>

        </div>


        {/* Workflow Card */}
        <div
          className="
            mt-20
            w-full
            max-w-[840px]

            rounded-2xl

            border

            border-slate-200

            bg-white

            p-6

            shadow-[0px_2px_8px_rgba(13,21,38,0.04),0px_8px_40px_rgba(13,21,38,0.08)]

            transition-colors

            dark:border-slate-700
            dark:bg-slate-900
            dark:shadow-black/30

            sm:p-8
          "
        >

          <div
            className="
              grid
              grid-cols-1
              gap-8

              sm:grid-cols-5
              sm:gap-0
            "
          >

            {steps.map((step,index)=>(
              <div
                key={step.number}
                className="
                  relative
                  flex
                  flex-col
                  items-center
                "
              >

                {index < steps.length - 1 && (
                  <div
                    className="
                      absolute
                      left-[calc(50%+38px)]
                      top-6

                      hidden
                      w-[calc(100%-76px)]

                      text-lg
                      text-teal-600

                      sm:block
                    "
                  >
                    →
                  </div>
                )}


                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-xl

                    border

                    border-teal-600/20

                    bg-teal-50

                    text-xl

                    dark:bg-teal-950/40
                  "
                >
                  {step.icon}
                </div>


                <span
                  className="
                    mt-3

                    font-mono

                    text-[10px]

                    font-bold

                    tracking-wide

                    text-teal-600

                    dark:text-teal-400
                  "
                >
                  {step.number}
                </span>


                <p
                  className="
                    mt-2

                    text-center

                    text-xs

                    font-semibold

                    leading-4

                    text-slate-900

                    dark:text-white
                  "
                >
                  {step.title}
                </p>


              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}


function Benefit({ text }: { text:string }) {
  return (
    <div
      className="
        flex
        h-10
        items-center

        rounded-full

        border

        border-slate-200

        bg-white

        px-5

        shadow-sm

        dark:border-slate-700

        dark:bg-slate-900
      "
    >

      <span
        className="
          mr-3

          h-1.5

          w-1.5

          shrink-0

          rounded-sm

          bg-teal-600
        "
      />

      <span
        className="
          text-left

          text-sm

          font-medium

          text-slate-700

          dark:text-slate-300
        "
      >
        {text}
      </span>

    </div>
  );
}