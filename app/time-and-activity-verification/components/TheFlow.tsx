import React from "react";
import Link from "next/link";

const flowSteps = [
  {
    number: "1",
    title: "Capture time",
    description:
      "Record work sessions, breaks, and manual entries where configured.",
  },
  {
    number: "2",
    title: "Add activity context",
    description:
      "Attach responsible work-session context where enabled.",
  },
  {
    number: "3",
    title: "Apply policy rules",
    description:
      "Evaluate records against schedules, breaks, overtime, and policy.",
  },
  {
    number: "4",
    title: "Route exceptions",
    description:
      "Send missing time, edits, idle periods, and policy items to review.",
  },
  {
    number: "5",
    title: "Review & resolve",
    description:
      "Authorized reviewers approve, correct, escalate, or dismiss.",
  },
  {
    number: "6",
    title: "Generate reports",
    description:
      "Produce decision-ready reports for payroll, billing, and operations.",
  },
  {
    number: "7",
    title: "Preserve evidence",
    description:
      "Retain audit trails, correction history, and evidence packages.",
  },
];

export default function TheFlow() {
  return (
    <section
      className="
      bg-gray-50
      dark:bg-slate-950
      py-16
      px-6
      "
    >

      <div
        className="
        max-w-[1132px]
        mx-auto
        "
      >

        {/* Header */}

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
            The Flow
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
            From work session to verified record
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
            ZoikoTime turns workforce activity into structured
            records that can be reviewed, approved, reported,
            and preserved.
          </p>

        </div>



        {/* Steps */}

        <div
          className="
          mt-14
          max-w-3xl
          "
        >

          {flowSteps.map((step,index)=>(

            <div
              key={step.number}
              className="
              flex
              gap-5
              mb-7
              "
            >

              {/* Number */}

              <div
                className="
                w-8
                h-8
                shrink-0
                rounded-full
                bg-teal-50
                dark:bg-teal-900/40
                flex
                items-center
                justify-center
                text-teal-700
                dark:text-teal-300
                text-sm
                font-bold
                "
              >
                {step.number}
              </div>



              {/* Content */}

              <div>

                <h3
                  className="
                  text-sm
                  font-bold
                  text-gray-700
                  dark:text-gray-200
                  "
                >
                  {step.title}
                </h3>


                <p
                  className="
                  mt-1
                  text-base
                  leading-6
                  text-gray-700
                  dark:text-gray-400
                  "
                >
                  {step.description}
                </p>


              </div>


            </div>

          ))}


        </div>



        {/* Link */}
<div
  className="
    mt-10
    text-center
    text-base
  "
>
  <span
    className="
      text-gray-500
      dark:text-gray-400
    "
  >
    Related:{" "}
  </span>

  <Link
    href="/workforce-assurance"
    className="
      text-teal-700
      dark:text-teal-400
      font-semibold
      hover:underline
      transition
    "
  >
    View Reporting & Workforce Analytics →
  </Link>
</div>

      </div>

    </section>
  );
}