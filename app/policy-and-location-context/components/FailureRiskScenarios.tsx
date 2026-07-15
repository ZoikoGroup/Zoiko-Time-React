import React from "react";

const scenarios = [
  {
    icon: "📍",
    title: "Location Ambiguity",
    description:
      "Location signal is unclear or the worker is in a border region where multiple jurisdictions may apply.",
    box:
      "Confidence reduced → Manager review required",
    iconBg:
      "bg-amber-100",
    boxBg:
      "bg-amber-100",
    boxText:
      "text-amber-900",
  },
  {
    icon: "📋",
    title: "Missing Policy",
    description:
      "A jurisdiction or role combination is encountered for which no policy is present in the library.",
    box:
      "Gap flagged → Compliance team alerted → Action blocked",
    iconBg:
      "bg-indigo-500/10",
    boxBg:
      "bg-indigo-500/10",
    boxText:
      "text-indigo-500",
  },
  {
    icon: "🚨",
    title: "Violation Detected",
    description:
      "A workforce action is about to breach a legal threshold or policy rule in real time.",
    box:
      "Escalation triggered → Senior stakeholder notified immediately",
    iconBg:
      "bg-red-100",
    boxBg:
      "bg-red-100",
    boxText:
      "text-red-600",
  },
];


export default function FailureRiskScenarios() {
  return (
    <section
      className="
      w-full
      bg-slate-100
      dark:bg-slate-950
      py-20
      px-5
      transition-colors
      "
    >

      <div
        className="
        max-w-[1104px]
        mx-auto
        "
      >

        {/* Header */}

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
          Failure & Risk Scenarios
        </p>


        <h2
          className="
          mt-6
          text-center
          text-3xl
          md:text-4xl
          font-bold
          leading-tight
          text-slate-900
          dark:text-white
          "
        >
          When Context Is Incomplete or Incorrect
        </h2>


        <p
          className="
          max-w-xl
          mx-auto
          mt-6
          text-center
          text-base
          leading-7
          text-slate-500
          dark:text-slate-400
          "
        >
          ZoikoTime is designed to handle imperfect data gracefully —
          and never fail silently.
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

          {scenarios.map((item,index)=>(
            <div
              key={index}
              className="
              bg-white
              dark:bg-slate-900
              rounded-2xl
              border
              border-slate-200
              dark:border-slate-800
              shadow-[0px_2px_16px_rgba(10,22,40,0.07)]
              p-7
              "
            >

              <div
                className={`
                w-11
                h-11
                rounded-lg
                flex
                items-center
                justify-center
                text-xl
                ${item.iconBg}
                `}
              >
                {item.icon}
              </div>


              <h3
                className="
                mt-8
                text-base
                font-bold
                text-slate-900
                dark:text-white
                "
              >
                {item.title}
              </h3>


              <p
                className="
                mt-5
                text-sm
                leading-6
                text-slate-500
                dark:text-slate-400
                "
              >
                {item.description}
              </p>

                            {/* Alert Box */}

              <div
                className={`
                mt-6
                min-h-[64px]
                rounded-lg
                flex
                items-center
                px-4
                ${item.boxBg}
                `}
              >

                <p
                  className={`
                  text-xs
                  font-semibold
                  leading-5
                  ${item.boxText}
                  `}
                >
                  {item.box}
                </p>

              </div>


            </div>
          ))}

        </div>



        {/* Bottom Message */}

        <div
          className="
          mt-10
          w-full
          rounded-2xl
          border
          border-teal-500/20
          bg-gradient-to-r
          from-teal-500/5
          to-transparent
          px-6
          py-5
          text-center
          "
        >

          <p
            className="
            text-base
            md:text-lg
            font-bold
            leading-7
            text-slate-900
            dark:text-white
            "
          >
            ZoikoTime operates on a{" "}

            <span
              className="
              text-teal-500
              "
            >
              zero silent failure policy
            </span>

            {" "}
            — every uncertainty is surfaced, every gap is escalated.
          </p>

        </div>


      </div>

    </section>
  );
}