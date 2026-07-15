import React from "react";

const cards = [
  {
    title: "Manual timesheets lack evidence",
    description:
      "Submitted hours without supporting records are hard to confirm, explain, or defend.",
  },
  {
    title: "Billing disputes need clarity",
    description:
      "Client-facing teams need clearer backing when time is billed or scope is questioned.",
  },
  {
    title: "Payroll needs integrity",
    description:
      "Payroll depends on complete, approved, explainable records — not raw clock data.",
  },
  {
    title: "Distributed work needs visibility",
    description:
      "Remote and hybrid teams need responsible, governed visibility into work sessions.",
  },
  {
    title: "Compliance reviews need records",
    description:
      "Audits and investigations need traceable, permissioned, reviewable evidence.",
  },
  {
    title: "Managers need better context",
    description:
      "Leaders need supporting context to review fairly — not guesswork or memory.",
  },
];

export default function WhyItMatters() {
  return (
    <section
      className="
      bg-gray-50
      dark:bg-slate-950
      py-16
      px-6
      "
    >
      <div className="max-w-[1132px] mx-auto">

        {/* Heading */}

        <div className="text-center">

          <p
            className="
            text-teal-600
            text-xs
            font-semibold
            uppercase
            tracking-widest
            "
          >
            Why It Matters
          </p>


          <h2
            className="
            mt-4
            text-3xl
            md:text-4xl
            font-bold
            text-slate-800
            dark:text-white
            "
          >
            Time records need context
          </h2>


          <p
            className="
            mt-5
            max-w-2xl
            mx-auto
            text-base
            leading-7
            text-gray-500
            dark:text-gray-400
            "
          >
            Many organizations still rely on submitted hours, manual
            approvals, scattered notes, or manager memory —
            creating avoidable risk.
          </p>

        </div>



        {/* Cards */}

        <div
          className="
          mt-14
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
          "
        >

          {cards.map((card,index)=>(

            <div
              key={index}
              className="
              bg-white
              dark:bg-slate-900
              rounded-2xl
              border
              border-slate-200
              dark:border-slate-700
              shadow-sm
              p-7
              min-h-[160px]
              "
            >

              <h3
                className="
                text-base
                font-semibold
                text-slate-800
                dark:text-white
                "
              >
                {card.title}
              </h3>


              <p
                className="
                mt-5
                text-sm
                leading-6
                text-gray-500
                dark:text-gray-400
                "
              >
                {card.description}
              </p>


            </div>

          ))}

        </div>



        {/* Bottom Statement */}

        <p
          className="
          mt-16
          text-center
          text-base
          font-bold
          leading-7
          text-gray-500
          dark:text-gray-300
          "
        >
          ZoikoTime does not replace leadership judgment.
          <br className="hidden md:block" />
          It gives leaders better records to review.
        </p>


      </div>
    </section>
  );
}