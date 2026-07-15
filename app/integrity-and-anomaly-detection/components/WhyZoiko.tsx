import React from "react";

const rows = [
  {
    title:
      "Adversarial fraud detection — identifies manipulation intent, not just statistical outliers",
  },
  {
    title:
      "Decision-grade risk intelligence — score, exposure, confidence, and recurrence probability per event",
  },
  {
    title:
      "Automated control response — restrict, block, escalate without human initiation",
  },
  {
    title:
      "Forensic evidence records — structured anomaly objects with chain of custody, not alert logs",
  },
  {
    title:
      "Financial impact engine — real-time exposure quantification per detected anomaly",
  },
  {
    title:
      "Coordinated fraud detection — network-level pattern analysis across multiple accounts",
  },
];


export default function WhyZoiko() {
  return (
    <section
      className="
        w-full
        bg-slate-100
        dark:bg-slate-950
        py-20
      "
    >

      <div
        className="
          max-w-[1040px]
          mx-auto
          px-5
        "
      >

        {/* Header */}
        <div className="text-center">

          <div className="
            flex
            justify-center
            items-center
            gap-3
          ">
            <span className="w-6 h-[2px] bg-teal-600" />

            <p className="
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-teal-600
            ">
              Why ZoikoTime
            </p>
          </div>


          <h2
            className="
              mt-5
              text-3xl
              md:text-4xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            Why Monitoring Tools Fail to Protect Integrity
          </h2>


          <p
            className="
              mt-5
              max-w-xl
              mx-auto
              text-base
              md:text-lg
              leading-7
              text-slate-500
              dark:text-slate-400
            "
          >
            Monitoring tools observe. ZoikoTime controls.
            Observation without response is not protection —
            it is documentation of failure.
          </p>

        </div>

                {/* Comparison Table */}
        <div
          className="
            mt-14
            bg-white
            dark:bg-slate-900
            rounded-2xl
            border
            border-slate-200
            dark:border-slate-700
            shadow-sm
            overflow-hidden
          "
        >

          <div className="
            overflow-x-auto
          ">

            <table
              className="
                min-w-[900px]
                w-full
                border-collapse
              "
            >

              {/* Header */}
              <thead>

                <tr
                  className="
                    bg-slate-100
                    dark:bg-slate-800
                    border-b
                    border-slate-200
                    dark:border-slate-700
                  "
                >

                  <th
                    className="
                      w-[65%]
                      px-7
                      py-6
                      text-left
                      text-sm
                      font-bold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    Capability
                  </th>


                  <th
                    className="
                      w-[14%]
                      px-5
                      py-6
                      text-center
                      text-sm
                      font-bold
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Legacy
                    <br />
                    Tools
                  </th>


                  <th
                    className="
                      w-[21%]
                      px-5
                      py-6
                      bg-emerald-50
                      dark:bg-emerald-950/30
                      text-center
                      border-b
                      border-slate-200
                      dark:border-slate-700
                    "
                  >

                    <div className="
                      flex
                      justify-center
                      items-center
                      gap-3
                    ">

                      <span
                        className="
                          text-sm
                          font-bold
                          text-teal-600
                        "
                      >
                        ZoikoTime®
                      </span>


                      <span
                        className="
                          px-4
                          py-1
                          rounded-full
                          border
                          border-teal-600/25
                          bg-emerald-50
                          dark:bg-emerald-950/40
                          text-xs
                          font-semibold
                          tracking-wide
                          text-teal-600
                        "
                      >
                        Integrity
                        <br />
                        OS
                      </span>

                    </div>

                  </th>

                </tr>

              </thead>


              {/* Body */}
              <tbody>

                                {rows.map((row, index) => (
                  <tr
                    key={index}
                    className="
                      border-b
                      border-slate-200
                      dark:border-slate-700
                      last:border-b-0
                    "
                  >

                    {/* Capability */}
                    <td
                      className={`
                        px-7
                        py-5
                        text-left
                        text-sm
                        leading-6
                        text-slate-700
                        dark:text-slate-300
                        ${
                          index % 2 !== 0
                            ? "bg-gray-50 dark:bg-slate-800/50"
                            : ""
                        }
                      `}
                    >
                      {row.title}
                    </td>


                    {/* Legacy Tools */}
                    <td
                      className={`
                        px-5
                        py-5
                        text-center
                        text-lg
                        text-slate-300
                        ${
                          index % 2 !== 0
                            ? "bg-gray-50 dark:bg-slate-800/50"
                            : ""
                        }
                      `}
                    >
                      ✗
                    </td>


                    {/* ZoikoTime */}
                    <td
                      className="
                        px-5
                        py-5
                        text-center
                        text-lg
                        text-teal-600
                        bg-teal-600/5
                      "
                    >
                      ✓
                    </td>


                  </tr>
                ))}

              </tbody>

                          </table>

          </div>

        </div>


      </div>

    </section>
  );
}