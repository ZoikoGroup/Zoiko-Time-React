import React from "react";

const comparisonRows = [
  {
    capability: "Dynamic policy resolution",
    legacy: "Static rule configuration",
    zoiko: "Real-time policy intelligence",
  },
  {
    capability: "Policy conflict handling",
    legacy: "Manual override required",
    zoiko: "Automated precedence resolution",
  },
  {
    capability: "Real-time compliance enforcement",
    legacy: "Post-hoc reporting only",
    zoiko: "Pre-emptive violation prevention",
  },
  {
    capability: "Cross-border jurisdiction handling",
    legacy: "Single-jurisdiction designed",
    zoiko: "180+ jurisdictions, dynamic context",
  },
  {
    capability: "Legal-grade decision traceability",
    legacy: "No reasoning records",
    zoiko: "Full evidence chain per decision",
  },
  {
    capability: "Silent failure prevention",
    legacy: "Fails without notification",
    zoiko: "Zero silent failure architecture",
  },
];


export default function CompetitiveDisplacement() {
  return (
    <section
      className="
      w-full
      bg-white
      dark:bg-slate-950
      py-20
      px-5
      "
    >

      <div
        className="
        max-w-[1200px]
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
          Competitive Displacement
        </p>


        <h2
          className="
          mt-5
          text-center
          text-3xl
          md:text-4xl
          font-bold
          text-slate-900
          dark:text-white
          "
        >
          Why Traditional Systems Cannot Handle Global Context
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
          Legacy tools apply static rules. ZoikoTime applies the right rule,
          to the right person, at the right moment.
        </p>



        {/* Comparison Table */}

        <div
          className="
          mt-16
          overflow-x-auto
          rounded-2xl
          border
          border-slate-200
          dark:border-slate-800
          shadow-[0px_2px_16px_rgba(10,22,40,0.07)]
          "
        >

          <table
            className="
            w-full
            min-w-[800px]
            bg-white
            dark:bg-slate-900
            "
          >

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
                  text-left
                  px-6
                  py-4
                  text-xs
                  font-bold
                  text-slate-900
                  dark:text-white
                  "
                >
                  Capability
                </th>


                <th
                  className="
                  text-left
                  px-6
                  py-4
                  text-xs
                  font-bold
                  text-slate-900
                  dark:text-white
                  "
                >
                  Legacy Workforce Tools
                </th>


                <th
                  className="
                  text-left
                  px-6
                  py-4
                  text-xs
                  font-bold
                  text-teal-500
                  "
                >
                  ZoikoTime®
                </th>


              </tr>

            </thead>


            <tbody>

                              {comparisonRows.map((row, index) => (
                <tr
                  key={index}
                  className="
                  border-b
                  border-slate-200
                  dark:border-slate-800
                  last:border-none
                  "
                >

                  {/* Capability */}

                  <td
                    className="
                    px-6
                    py-5
                    text-sm
                    text-blue-950
                    dark:text-slate-300
                    "
                  >
                    {row.capability}
                  </td>



                  {/* Legacy */}

                  <td
                    className="
                    px-6
                    py-5
                    "
                  >

                    <div
                      className="
                      flex
                      items-center
                      gap-3
                      "
                    >

                      <span
                        className="
                        text-red-500
                        text-lg
                        "
                      >
                        ✕
                      </span>


                      <span
                        className="
                        text-sm
                        text-blue-950
                        dark:text-slate-300
                        "
                      >
                        {row.legacy}
                      </span>


                    </div>

                  </td>




                  {/* ZoikoTime */}

                  <td
                    className="
                    px-6
                    py-5
                    "
                  >

                    <div
                      className="
                      flex
                      items-center
                      gap-3
                      "
                    >

                      <span
                        className="
                        text-teal-500
                        text-lg
                        font-semibold
                        "
                      >
                        ✓
                      </span>


                      <span
                        className="
                        text-sm
                        font-semibold
                        text-blue-950
                        dark:text-white
                        "
                      >
                        {row.zoiko}
                      </span>


                    </div>

                  </td>


                </tr>
              ))}

            </tbody>

          </table>

        </div>


      </div>

    </section>
  );
}