"use client";

import React from "react";

const cards = [
  {
    icon: "/ComplianceEngine/image1.png",
    value: "99.97%",
    title: "Real-Time Verification",
    description:
      "Compliance status verified on every workforce action. No batch processing. No delays. No compliance gaps.",
  },
  {
    icon: "/ComplianceEngine/image2.png",
    value: "Auto",
    title: "Automated Enforcement",
    description:
      "Rules are applied without manual intervention. No human error in policy selection. Compliance is structural, not procedural.",
  },
  {
    icon: "/ComplianceEngine/image3.png",
    value: "100%",
    title: "Verified Audit Records",
    description:
      "Every decision is logged with context, policy applied, conflict resolution logic, and final output — ready for any regulator.",
  },
];

export default function ComplianceEngine() {
  return (
    <section
      className="
      w-full
      bg-white
      dark:bg-slate-950
      py-20
      px-5
      transition-colors
      "
    >
      <div
        className="
        max-w-[1200px]
        mx-auto
        "
      >

        {/* Heading */}

        <p
          className="
          text-center
          text-xs
          font-semibold
          uppercase
          tracking-wider
          text-teal-500
          "
        >
          Compliance Engine
        </p>


        <h2
          className="
          mt-5
          text-center
          text-3xl
          md:text-4xl
          font-bold
          leading-10
          text-slate-900
          dark:text-white
          "
        >
          Continuous Compliance Built Into Every Action
        </h2>


        <p
          className="
          max-w-[550px]
          mx-auto
          mt-6
          text-center
          text-base
          leading-7
          text-slate-500
          dark:text-slate-400
          "
        >
          Compliance is not a report generated after the fact. In ZoikoTime,
          it is real-time, automated, and continuously verified.
        </p>



        {/* Cards */}

        <div
          className="
          mt-16
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          "
        >

          {cards.map((card, index) => (
            <div
              key={index}
              className="
              w-full
              min-h-[320px]
              bg-white
              dark:bg-slate-900
              rounded-2xl
              border
              border-slate-200
              dark:border-slate-800
              shadow-[0px_2px_16px_rgba(10,22,40,0.07)]
              flex
              flex-col
              items-center
              text-center
              px-8
              py-8
              "
            >


              {/* Icon */}

              <div
                className="
                w-14
                h-14
                rounded-lg
                bg-teal-500/10
                flex
                items-center
                justify-center
                "
              >

                <img
                  src={card.icon}
                  alt={card.title}
                  className="
                  w-6
                  h-6
                  object-contain
                  "
                />

              </div>



              {/* Number */}

              <div
                className="
                mt-8
                text-5xl
                font-bold
                font-mono
                leading-10
                text-teal-500
                "
              >
                {card.value}
              </div>



              {/* Title */}

              <h3
                className="
                mt-5
                text-lg
                font-bold
                text-slate-900
                dark:text-white
                "
              >
                {card.title}
              </h3>



              {/* Description */}

              <p
                className="
                mt-5
                max-w-xs
                text-sm
                leading-6
                text-slate-500
                dark:text-slate-400
                "
              >
                {card.description}
              </p>


            </div>
          ))}

        </div>


      </div>
    </section>
  );
}