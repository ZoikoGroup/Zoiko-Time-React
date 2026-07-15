import React from "react";

const verificationItems = [
  {
    title: "Time worked",
    description:
      "Verified work sessions, breaks, manual entries, and totals.",
  },
  {
    title: "Activity context",
    description:
      "Responsible work-session context where enabled — not automatic proof of productivity.",
  },
  {
    title: "Work-session continuity",
    description:
      "Whether sessions are continuous, paused, idle, or interrupted.",
  },
  {
    title: "Policy alignment",
    description:
      "Whether records align with schedules, breaks, overtime, and customer policies.",
  },
  {
    title: "Exceptions & discrepancies",
    description:
      "Missing entries, edits, idle periods, and items needing review.",
  },
  {
    title: "Approvals & reviews",
    description:
      "Who reviewed, approved, corrected, or escalated a record, and when.",
  },
  {
    title: "Evidence history",
    description:
      "Audit trails, correction history, and preserved records.",
  },
  {
    title: "Reporting outputs",
    description:
      "Decision-ready reports built on verified records.",
  },
];

export default function WhatWeVerify() {
  return (
    <section
      className="
      py-16
      px-6
      bg-white
      dark:bg-slate-950
      "
    >

      <div
        className="
        max-w-[1180px]
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
            What We Verify
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
            What ZoikoTime helps verify
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
            Verification depends on customer configuration,
            enabled features, permissions, transparency,
            and applicable policies.
          </p>

        </div>



        {/* Verification List */}

        <div
          className="
          mt-14
          space-y-5
          "
        >

          {verificationItems.map((item,index)=>(

            <div key={index}>

              <h3
                className="
                text-sm
                font-bold
                text-gray-700
                dark:text-gray-200
                "
              >
                {item.title}
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
                {item.description}
              </p>

            </div>

          ))}

        </div>



        {/* Warning Box */}

        <div
          className="
          mt-10
          max-w-[760px]
          mx-auto
          flex
          gap-4
          items-start
          bg-yellow-50
          dark:bg-yellow-950/30
          border
          border-orange-200
          dark:border-orange-700
          rounded-xl
          p-5
          "
        >

          {/* Icon */}

          <div
            className="
            w-4
            h-4
            mt-1
            rounded-full
            border-2
            border-yellow-700
            dark:border-yellow-400
            shrink-0
            "
          />


          <p
            className="
            text-sm
            leading-5
            text-yellow-800
            dark:text-yellow-300
            "
          >
            Activity context should support review. It should{" "}
            <span className="font-bold text-yellow-900 dark:text-yellow-200">
              not
            </span>{" "}
            be presented as automatic proof of productivity,
            misconduct, work quality, or compensation entitlement.
          </p>


        </div>


      </div>

    </section>
  );
}