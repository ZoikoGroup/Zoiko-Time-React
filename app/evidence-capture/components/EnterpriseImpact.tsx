import React from "react";

const impactCards = [
  {
    role: "CFO",
    title: "Financial Defensibility",
    description:
      "Verified evidence for every payroll decision, billing record, and financial action — eliminating disputes, reducing legal costs, and providing a defensible audit trail for every financial outcome.",
  },
  {
    role: "General Counsel",
    title: "Legal Admissibility",
    description:
      "Court-ready evidence with verified origin, intact chain of custody, and cryptographic integrity — ensuring your organisation can defend any workforce decision in legal proceedings with confidence.",
  },
  {
    role: "Internal Audit",
    title: "Complete Visibility",
    description:
      "Instant access to structured evidence packages for any period, worker, or event — with integrity verification built in, reducing audit preparation time from weeks to minutes.",
  },
];

export default function EnterpriseImpact() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-20 px-5">

      <div className="max-w-[1040px] mx-auto">


        {/* Header */}
        <div className="text-center mb-14">

          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-6 h-[2px] bg-teal-600"></span>

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-teal-600
              "
            >
              Enterprise Impact
            </span>
          </div>


          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              leading-tight
              text-slate-900
              dark:text-white
            "
          >
            What This Means for Your Organisation
          </h2>


          <p
            className="
              max-w-xl
              mx-auto
              mt-5
              text-base
              md:text-lg
              leading-7
              text-slate-500
              dark:text-slate-400
            "
          >
            Measurable outcomes for the executives accountable for financial
            defensibility, legal exposure, and audit readiness.
          </p>

        </div>



        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {impactCards.map((card) => (

            <div
              key={card.role}
              className="
                relative
                bg-white
                dark:bg-slate-900
                rounded-2xl
                border
                border-slate-200
                dark:border-slate-800
                shadow-sm
                overflow-hidden
                p-8
                text-center
                min-h-[290px]
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
                {card.role}
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
                {card.title}
              </h3>



              {/* Description */}
              <p
                className="
                  mt-5
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