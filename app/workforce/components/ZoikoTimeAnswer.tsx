import React from "react";

export default function ZoikoTimeAnswer() {

  const rows = [
    {
      capability: "Time records",
      basic: "Records submitted hours",
      zoiko: "Verifies time with supporting signals",
    },
    {
      capability: "Activity data",
      basic: "Shows what was on screen",
      zoiko: "Interprets activity in operational context",
    },
    {
      capability: "Reporting",
      basic: "Produces summary reports",
      zoiko: "Delivers decision-ready workforce intelligence",
    },
    {
      capability: "Visibility scope",
      basic: "Tracks individuals",
      zoiko:
        "Supports team, department, project, and enterprise visibility",
    },
    {
      capability: "Exception handling",
      basic: "Flags activity",
      zoiko:
        "Surfaces exceptions for responsible human review",
    },
    {
      capability: "Record governance",
      basic: "Stores records",
      zoiko:
        "Supports audit-ready evidence and retention controls",
    },
  ];


  return (
    <section
      className="
      w-full
      min-h-[737px]
      bg-slate-100
      dark:bg-slate-950
      overflow-hidden
      "
    >

      <div
        className="
        max-w-[1052px]
        mx-auto
        pt-[88px]
        px-6
        lg:px-0
        "
      >

        {/* Label */}
        <div
          className="
          text-center
          text-teal-600
          dark:text-teal-400
          text-xs
          font-bold
          uppercase
          tracking-wider
          "
        >
          The ZoikoTime Answer
        </div>


        {/* Heading */}
        <h2
          className="
          mt-3
          text-center
          text-slate-900
          dark:text-white
          text-3xl
          lg:text-4xl
          font-semibold
          leading-10
          "
        >
          From Raw Workforce Data to Decision Ready Intelligence
        </h2>


        {/* Description */}
        <p
          className="
          mt-3
          max-w-[981px]
          mx-auto
          text-center
          text-slate-500
          dark:text-slate-300
          text-base
          leading-7
          "
        >
          ZoikoTime connects time records, activity signals, approvals,
          exceptions, reporting, and evidence into one governed intelligence
          layer. It helps organizations understand not only how much time was
          worked, but whether workforce records are complete, explainable,
          and ready for business use.
        </p>



        {/* Comparison Table */}
        <div
          className="
          mt-[78px]
          rounded-2xl
          border
          border-slate-200
          dark:border-slate-700
          overflow-x-auto
          shadow-[0px_2px_16px_0px_rgba(13,21,38,0.07)]
          "
        >

          <div className="min-w-[1050px]">


            {/* Table Header */}
            <div
              className="
              grid
              grid-cols-[215px_272px_1fr]
              h-11
              "
            >

              <div
                className="
                bg-gray-50
                dark:bg-slate-800
                flex
                items-center
                px-5
                border-b
                border-slate-200
                "
              >
                <span className="text-slate-400 text-xs font-bold uppercase">
                  Capability Area
                </span>
              </div>


              <div
                className="
                bg-gray-50
                dark:bg-slate-800
                flex
                items-center
                px-5
                border-b
                border-slate-200
                "
              >
                <span className="text-slate-400 text-xs font-bold uppercase">
                  Basic Time Tracking
                </span>
              </div>


              <div
                className="
                bg-slate-900
                flex
                items-center
                px-5
                "
              >
                <span className="text-teal-500 text-xs font-bold uppercase">
                  ZoikoTime Workforce Intelligence
                </span>
              </div>

            </div>



            {/* Table Rows */}
            {rows.map((row) => (

              <div
                key={row.capability}
                className="
                grid
                grid-cols-[215px_272px_1fr]
                h-11
                "
              >

                <div
                  className="
                  bg-gray-50
                  dark:bg-slate-800
                  px-5
                  flex
                  items-center
                  border-b
                  border-slate-200
                  "
                >
                  <span
                    className="
                    text-slate-900
                    dark:text-white
                    text-sm
                    font-semibold
                    "
                  >
                    {row.capability}
                  </span>
                </div>



                <div
                  className="
                  px-5
                  flex
                  items-center
                  border-b
                  border-slate-200
                  "
                >
                  <span
                    className="
                    text-slate-500
                    dark:text-slate-300
                    text-sm
                    "
                  >
                    {row.basic}
                  </span>
                </div>



                <div
                  className="
                  px-5
                  flex
                  items-center
                  bg-teal-600/5
                  border-b
                  border-slate-200
                  "
                >

                  <span className="text-teal-600 text-sm font-bold mr-2">
                    ✓
                  </span>

                  <span
                    className="
                    text-slate-700
                    dark:text-slate-200
                    text-sm
                    "
                  >
                    {row.zoiko}
                  </span>

                </div>


              </div>

            ))}


          </div>

        </div>




        {/* Bottom Text */}
        <p
          className="
          mt-10
          text-center
          text-slate-500
          dark:text-slate-400
          text-sm
          font-semibold
          "
        >
          ZoikoTime is designed for organizations that need workforce records
          they can trust, explain, govern, and act on.
        </p>


      </div>


    </section>
  );
}