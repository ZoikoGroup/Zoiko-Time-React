import React from "react";

const impacts = [
  {
    role: "CFO",
    title: "Prevent Financial Leakage",
    description:
      "Real-time anomaly detection and automated billing controls prevent payroll inflation, fraudulent task claims, and time manipulation from impacting financial records — with quantified exposure visibility at all times.",
  },
  {
    role: "CRO",
    title: "Reduce Systemic Risk",
    description:
      "Adversarial detection — coordinated fraud, pattern exploitation, and evolving manipulation tactics — reduces systemic integrity risk across the entire workforce, not just individual incidents.",
  },
  {
    role: "Internal Audit",
    title: "Gain Forensic Visibility",
    description:
      "Every anomaly generates a forensic evidence record — structured, integrity-verified, and audit-ready — providing complete visibility into detected incidents with no manual reconstruction required.",
  },
];


export default function EnterpriseImpact() {
  return (
    <section className="
      w-full
      bg-slate-100
      dark:bg-slate-950
      py-16
    ">

      <div className="
        max-w-[1200px]
        mx-auto
        px-5
      ">


        {/* Header */}
        <div className="text-center">


          <div className="
            flex
            justify-center
            items-center
            gap-3
          ">
            <span className="
              w-6
              h-[2px]
              bg-teal-600
            " />

            <p className="
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-teal-600
            ">
              Enterprise Impact
            </p>

          </div>


          <h2 className="
            mt-5
            text-3xl
            md:text-4xl
            font-bold
            text-slate-900
            dark:text-white
          ">
            Direct Impact on Risk and Revenue
          </h2>


          <p className="
            mt-5
            max-w-xl
            mx-auto
            text-base
            md:text-lg
            leading-7
            text-slate-500
            dark:text-slate-400
          ">
            Measurable outcomes for the executives accountable for financial
            integrity, systemic risk, and audit defensibility.
          </p>


        </div>

                {/* Impact Cards */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {impacts.map((item, index) => (
            <div
              key={index}
              className="
                relative
                bg-white
                dark:bg-slate-900
                rounded-2xl
                border
                border-slate-200
                dark:border-slate-700
                shadow-sm
                overflow-hidden
                p-8
                text-center
              "
            >

              {/* Top Gradient */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-[3px]
                  bg-gradient-to-r
                  from-teal-600
                  to-teal-500
                "
              />


              {/* Role */}
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-teal-600
                "
              >
                {item.role}
              </p>


              {/* Title */}
              <h3
                className="
                  mt-5
                  text-xl
                  font-bold
                  leading-6
                  text-slate-900
                  dark:text-white
                "
              >
                {item.title}
              </h3>


              {/* Description */}
              <p
                className="
                  mt-6
                  text-sm
                  leading-6
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {item.description}
              </p>


            </div>
          ))}


        </div>
              </div>

    </section>
  );
}