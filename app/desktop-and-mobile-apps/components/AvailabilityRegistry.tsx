import React from "react";

export default function AvailabilityRegistry() {

  const rows = [
    {
      experience: "Worker mobile home",
      platform: "Mobile family",
      role: "Worker",
      scope: "Records, corrections, notifications",
      status: "Supported",
      reviewed: "Aug 2026",
      type: "success",
    },
    {
      experience: "Worker desktop",
      platform: "Desktop / web",
      role: "Worker",
      scope: "Full review & correction",
      status: "Supported",
      reviewed: "Aug 2026",
      type: "success",
    },
    {
      experience: "Reviewer",
      platform: "Desktop / web",
      role: "Manager",
      scope: "Queue & approvals",
      status: "Supported w/ limitations",
      reviewed: "Aug 2026",
      type: "warning",
    },
    {
      experience: "Administrator console",
      platform: "Desktop / web",
      role: "Admin",
      scope: "Config, releases, audit",
      status: "Supported",
      reviewed: "Aug 2026",
      type: "success",
    },
    {
      experience: "Reviewer mobile",
      platform: "Mobile family",
      role: "Manager",
      scope: "Context-first review",
      status: "Plan dependent",
      reviewed: "Aug 2026",
      type: "info",
    },
  ];


  const columns = [
    "Experience",
    "Platform family",
    "Role",
    "Feature scope",
    "Status",
    "Last reviewed",
  ];


  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 lg:py-20">

      <div className="mx-auto max-w-7xl px-6">


        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">


          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-teal-600
            "
          >
            Verify Before You Commit
          </p>



          <h2
            className="
              mt-5
              text-3xl
              font-bold
              leading-tight
              text-slate-800
              dark:text-white
              sm:text-4xl
            "
          >
            Availability &amp; compatibility registry
          </h2>



          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-gray-500
              dark:text-gray-400
            "
          >
            Support is driven by a governed registry — unsupported or gated
            platforms are simply absent, never shown as disabled or coming
            soon. Every row carries scope, limitations, an owner, and a
            last-reviewed date.
          </p>


        </div>




        {/* Table */}
        <div
          className="
            mx-auto
            mt-12
            max-w-5xl
            overflow-x-auto
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-[0_6px_18px_rgba(14,31,61,0.05)]
            dark:border-slate-800
            dark:bg-slate-900
          "
        >

          <table className="min-w-[1000px] w-full border-collapse">


            {/* Table Header */}
            <thead>

              <tr className="bg-slate-800 text-left text-xs font-semibold text-white">

                {columns.map((column) => (

                  <th
                    key={column}
                    className="
                      px-4
                      py-4
                      font-semibold
                    "
                  >
                    {column}
                  </th>

                ))}

              </tr>

            </thead>

                        <tbody>

              {rows.map((row, index) => (

                <tr
                  key={row.experience}
                  className={`
                    text-sm
                    ${
                      index % 2 === 1
                        ? "bg-gray-50 dark:bg-slate-800/40"
                        : "bg-white dark:bg-slate-900"
                    }
                  `}
                >


                  {/* Experience */}
                  <td
                    className="
                      px-4
                      py-4
                      font-bold
                      text-slate-800
                      dark:text-white
                    "
                  >
                    {row.experience}
                  </td>



                  {/* Platform */}
                  <td
                    className="
                      px-4
                      py-4
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    {row.platform}
                  </td>



                  {/* Role */}
                  <td
                    className="
                      px-4
                      py-4
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    {row.role}
                  </td>



                  {/* Scope */}
                  <td
                    className="
                      px-4
                      py-4
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    {row.scope}
                  </td>




                  {/* Status */}
                  <td className="px-4 py-4">


                    {row.type === "success" && (

                      <span
                        className="
                          inline-flex
                          rounded-full
                          bg-emerald-50
                          px-3
                          py-1
                          text-xs
                          font-bold
                          text-teal-700
                        "
                      >
                        {row.status}
                      </span>

                    )}



                    {row.type === "warning" && (

                      <span
                        className="
                          inline-flex
                          whitespace-nowrap
                          rounded-full
                          bg-orange-100
                          px-3
                          py-1
                          text-xs
                          font-bold
                          text-yellow-700
                        "
                      >
                        {row.status}
                      </span>

                    )}



                    {row.type === "info" && (

                      <span
                        className="
                          inline-flex
                          whitespace-nowrap
                          rounded-full
                          bg-indigo-50
                          px-3
                          py-1
                          text-xs
                          font-bold
                          text-blue-700
                        "
                      >
                        {row.status}
                      </span>

                    )}


                  </td>



                  {/* Reviewed */}
                  <td
                    className="
                      px-4
                      py-4
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    {row.reviewed}
                  </td>


                </tr>

              ))}


            </tbody>


          </table>


        </div>

                {/* Verification Notice */}
        <div
          className="
            mx-auto
            mt-8
            max-w-4xl
            rounded-xl
            border
            border-emerald-100
            bg-emerald-50
            px-6
            py-5
            text-center
            dark:border-emerald-900
            dark:bg-emerald-950/40
          "
        >

          <p
            className="
              text-sm
              leading-5
              text-slate-800
              dark:text-gray-200
            "
          >
            Generic platform families are shown until exact operating systems,
            browsers, app stores, installers, and requirements are verified.
          </p>


          <p
            className="
              mt-1
              text-sm
              leading-5
              text-slate-800
              dark:text-gray-200
            "
          >
            <span className="font-normal">
              Feature availability is published per capability
            </span>

            <span className="font-bold text-teal-700 dark:text-teal-400">
              {" "}
              — never as a blanket “same features everywhere” claim.
            </span>
          </p>


        </div>


      </div>

    </section>
  );
}