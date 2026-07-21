import React from "react";
import Link from "next/link";

export default function IntegrityControl() {

  const features = [
    "Prevent fraud before it impacts payroll",
    "Detect manipulation patterns instantly",
    "Protect financial and operational integrity",
  ];


  const phases = [
    {
      phase: "PHASE 01",
      title: "Normal Activity",
      description:
        "Baseline established. Work patterns consistent with historical profile and policy expectations.",
      status: "✓ Within baseline",
      type: "success",
    },
    {
      phase: "PHASE 02",
      title: "Suspicious Pattern Forming",
      description:
        "Behavioural deviation detected — activity volume exceeds 2σ from baseline. Pattern analysis initiated.",
      status: "⚠ Deviation detected",
      type: "warning",
    },
    {
      phase: "PHASE 03",
      title: "Anomaly Confirmed",
      description:
        "Adversarial detection engine identifies coordinated time inflation pattern. Risk score: 94. Exposure: $4,200.",
      status: "🚨 Anomaly confirmed",
      type: "danger",
    },
    {
      phase: "PHASE 04",
      title: "Auto-Response Triggered",
      description:
        "Session restricted. Billing blocked. Case ZT-2026-01140 created. HR and Finance notified automatically.",
      status: "✓ Control active",
      type: "success",
    },
  ];


  return (
    <section
      className="
        relative
        w-full
        overflow-hidden

        bg-gradient-to-br
        from-teal-50
        via-white
        to-white

        dark:from-slate-950
        dark:via-slate-950
        dark:to-slate-900

        py-20
        md:py-28
      "
    >

      {/* Top Line */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-1

          bg-gradient-to-r
          from-teal-600
          via-teal-500
          to-teal-600
        "
      />



      {/* Glow */}
      <div
        className="
          absolute
          -right-40
          -top-20

          w-[500px]
          h-[500px]

          rounded-full

          bg-teal-500/5

          blur-3xl

          dark:bg-teal-400/10
        "
      />



      <div
        className="
          relative
          z-10

          max-w-6xl
          mx-auto

          px-5

          text-center
        "
      >


        {/* Label */}
        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-widest

            text-teal-600

            dark:text-teal-400

            mb-8
          "
        >
          Integrity & Anomaly Detection
        </p>




        {/* Heading */}
        <h1
          className="
            text-4xl
            md:text-6xl

            font-extrabold

            leading-tight

            text-slate-900

            dark:text-white
          "
        >

          A Real-Time{" "}

          <span
            className="
              text-teal-600
              dark:text-teal-400
            "
          >
            Integrity Control
          </span>

          <br />

          <span
            className="
              text-teal-600
              dark:text-teal-400
            "
          >
            System
          </span>

          <span>
            {" "}for Workforce Data
          </span>

        </h1>




        {/* Description */}
        <p
          className="
            max-w-xl
            mx-auto

            mt-8

            text-base
            md:text-lg

            leading-7

            text-slate-500

            dark:text-slate-300
          "
        >
          ZoikoTime continuously verifies, detects, and controls workforce
          behaviour — ensuring your data remains accurate, defensible, and
          protected from manipulation at any scale.
        </p>

                {/* Feature Pills */}
        <div
          className="
            mt-12

            flex
            flex-wrap

            justify-center

            gap-3

            max-w-4xl

            mx-auto
          "
        >

          {features.map((item, index) => (

            <div
              key={index}
              className="
                flex
                items-center
                gap-3

                px-5
                py-2.5

                rounded-full

                bg-white

                dark:bg-slate-900

                border
                border-slate-200

                dark:border-slate-700

                shadow-sm
              "
            >

              <span
                className="
                  w-1.5
                  h-1.5

                  rounded-sm

                  bg-teal-600
                "
              />

              <span
                className="
                  text-sm

                  font-medium

                  text-slate-700

                  dark:text-slate-200
                "
              >
                {item}
              </span>


            </div>

          ))}

        </div>





        {/* Buttons */}
        <div
          className="
            mt-12

            flex

            flex-col

            sm:flex-row

            justify-center

            gap-5
          "
        >

          {/* Request Demo */}
<Link
  href="/request-a-demo"
  className="
    h-12
    px-8
    rounded-lg
    bg-teal-600
    text-white
    font-semibold
    shadow-lg
    shadow-teal-600/30
    hover:bg-teal-700
    transition
    inline-flex
    items-center
    justify-center
  "
>
  <span className="flex items-center gap-2.5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5 flex-shrink-0"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M10 8.8L15.5 12L10 15.2V8.8Z"
        fill="currentColor"
      />
    </svg>

    <span>Request Demo</span>
  </span>
</Link>



         <Link
  href="/integrity-and-anomaly-detection#detection-flow"
  className="
    h-12
    px-8
    rounded-lg
    border
    border-teal-600
    text-teal-600
    dark:text-teal-400
    dark:border-teal-400
    font-semibold
    hover:bg-teal-50
    dark:hover:bg-slate-800
    transition
    inline-flex
    items-center
    justify-center
  "
>
  Run Fraud Scenario
</Link>

        </div>



      </div>





      {/* Dashboard Card */}
      <div
        className="
          mt-28

          mx-auto

          max-w-5xl

          rounded-2xl

          overflow-hidden

          bg-white

          dark:bg-slate-900

          border

          border-slate-200

          dark:border-slate-700

          shadow-[0_8px_40px_rgba(13,21,38,0.08)]
        "
      >



        {/* Dashboard Header */}
        <div
          className="
            h-14

            flex

            items-center

            justify-between

            px-6

            bg-slate-100

            dark:bg-slate-800

            border-b

            border-slate-200

            dark:border-slate-700
          "
        >

          <h3
            className="
              text-xs

              font-bold

              text-slate-900

              dark:text-white
            "
          >
            Real-Time Integrity Monitoring — Live Feed
          </h3>



          <div
            className="
              flex
              items-center
              gap-2
            "
          >

            <span
              className="
                w-2
                h-2

                rounded-sm

                bg-teal-600
              "
            />


            <span
              className="
                text-xs

                font-bold

                text-teal-600

                dark:text-teal-400
              "
            >
              Control System Active
            </span>


          </div>


        </div>





        {/* GRAPH IMAGE AREA */}
        <div
          className="
            px-7

            py-8

            h-52

            overflow-hidden

            bg-white

            dark:bg-slate-900
          "
        >

          <img
            src="/IntegrityControl/image.png"
            alt="Integrity Monitoring Graph"

            className="
              w-full

              h-full

              object-contain
            "
          />

        </div>

                {/* Detection Phases */}
        <div
          className="
            grid

            grid-cols-1

            md:grid-cols-2

            lg:grid-cols-4

            border-t

            border-slate-200

            dark:border-slate-700
          "
        >

          {phases.map((item, index) => (

            <div
              key={index}
              className="
                p-5

                border-r

                last:border-r-0

                border-slate-200

                dark:border-slate-700
              "
            >


              {/* Phase */}
              <p
                className="
                  text-[10px]

                  font-bold

                  tracking-widest

                  font-mono

                  text-teal-600

                  dark:text-teal-400
                "
              >
                {item.phase}
              </p>




              {/* Title */}
              <h4
                className="
                  mt-4

                  text-xs

                  font-bold

                  text-slate-900

                  dark:text-white
                "
              >
                {item.title}
              </h4>





              {/* Description */}
              <p
                className="
                  mt-4

                  text-xs

                  leading-5

                  text-slate-500

                  dark:text-slate-300
                "
              >
                {item.description}
              </p>





              {/* Status Badge */}
              <div
                className={`
                  inline-flex

                  mt-5

                  px-3

                  py-1

                  rounded-full

                  text-xs

                  font-bold


                  ${
                    item.type === "success"

                    ? `
                      bg-emerald-50

                      text-teal-700

                      dark:bg-emerald-900/30

                      dark:text-teal-300
                    `


                    : item.type === "warning"

                    ? `
                      bg-amber-100

                      text-amber-800

                      dark:bg-amber-900/40

                      dark:text-amber-300
                    `


                    : `
                      bg-red-100

                      text-red-800

                      dark:bg-red-900/40

                      dark:text-red-300
                    `
                  }

                `}
              >
                {item.status}
              </div>



            </div>


          ))}


        </div>


      </div>





      {/* Background Glow */}
      <div
        className="
          absolute

          size-[500px]

          left-[70%]

          -top-20

          rounded-full

          bg-teal-500/5

          blur-3xl

          dark:bg-teal-400/10
        "
      />



    </section>
  );
}