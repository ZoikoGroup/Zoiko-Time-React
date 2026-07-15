import React from "react";

export default function RiskSection() {
  const risks = [
    {
      icon: "💸",
      title: "Financial Impact",
      description:
        "Payroll leakage, inflated costs, and fraudulent billing accumulate silently — each undetected manipulation a drain that compounds across teams, periods, and jurisdictions before it surfaces in a reconciliation or audit.",
    },
    {
      icon: "📊",
      title: "Decision Risk",
      description:
        "Incorrect business decisions made from manipulated data — resourcing, performance management, compliance reporting — cause downstream damage that extends far beyond the original manipulation event.",
    },
    {
      icon: "🔍",
      title: "Audit Failure",
      description:
        "Data that has been manipulated — even if subtly — cannot be defended in audit, legal proceedings, or regulatory inspection. The inability to prove integrity is itself a compliance failure.",
    },
  ];


  return (
    <section
      className="
        w-full
        bg-slate-100
        dark:bg-slate-950

        py-20
        md:py-24
      "
    >

      <div
        className="
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
          "
        >
          The Risk
        </p>



        {/* Heading */}
        <h2
          className="
            mt-6

            text-3xl
            md:text-4xl

            font-bold

            leading-tight

            text-slate-900

            dark:text-white
          "
        >
          What Happens When Workforce Data Is Compromised
        </h2>




        {/* Description */}
        <p
          className="
            mt-5

            max-w-2xl

            mx-auto

            text-base
            md:text-lg

            leading-7

            text-slate-500

            dark:text-slate-300
          "
        >
          Manipulated workforce data is not an isolated incident — it
          undermines every decision, financial record, and audit outcome that
          depends on it.
        </p>
                {/* Risk Cards */}
        <div
          className="
            mt-14

            grid

            grid-cols-1

            md:grid-cols-2

            lg:grid-cols-3

            gap-6
          "
        >

          {risks.map((item, index) => (

            <div
              key={index}
              className="
                relative

                bg-white

                dark:bg-slate-900

                rounded-xl

                p-8

                text-left

                overflow-hidden

                border

                border-slate-200

                dark:border-slate-700

                shadow-sm

                hover:shadow-md

                transition
              "
            >


              {/* Top Gradient Line */}
              <div
                className="
                  absolute

                  top-0

                  left-0

                  w-full

                  h-[3px]

                  bg-gradient-to-r

                  from-red-500

                  to-orange-500
                "
              />




              {/* Icon */}
              <div
                className="
                  w-11

                  h-11

                  flex

                  items-center

                  justify-center

                  rounded-lg

                  bg-red-50

                  dark:bg-red-900/30

                  text-xl

                  mt-2
                "
              >
                {item.icon}
              </div>





              {/* Title */}
              <h3
                className="
                  mt-6

                  text-lg

                  font-bold

                  text-slate-900

                  dark:text-white
                "
              >
                {item.title}
              </h3>





              {/* Description */}
              <p
                className="
                  mt-4

                  text-sm

                  md:text-base

                  leading-6

                  text-slate-500

                  dark:text-slate-300
                "
              >
                {item.description}
              </p>


            </div>

          ))}


        </div>

                {/* Final Risk Statement */}
        <div
          className="
            mt-20

            max-w-2xl

            mx-auto

            rounded-xl

            bg-indigo-50

            dark:bg-indigo-950/40

            border

            border-indigo-500/20

            dark:border-indigo-400/20

            p-8

            md:p-10
          "
        >

          <p
            className="
              text-lg

              font-semibold

              leading-7

              text-slate-900

              dark:text-white
            "
          >
            If your workforce data can be manipulated,
          </p>



          <p
            className="
              text-lg

              font-extrabold

              leading-7

              text-red-500

              mt-1
            "
          >
            your entire decision
          </p>



          <p
            className="
              text-lg

              font-extrabold

              leading-7

              text-red-500
            "
          >
            framework is compromised
          </p>



          <p
            className="
              text-lg

              font-semibold

              leading-7

              text-slate-900

              dark:text-white

              mt-1
            "
          >
            — every output built on that data
          </p>



          <p
            className="
              text-lg

              font-semibold

              leading-7

              text-slate-900

              dark:text-white
            "
          >
            inherits the risk.
          </p>


        </div>


      </div>


    </section>
  );
}