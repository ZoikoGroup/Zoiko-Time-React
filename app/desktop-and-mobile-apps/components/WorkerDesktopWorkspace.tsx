import React from "react";

export default function WorkerDesktopWorkspace() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Worker Desktop
          </p>


          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            The detailed worker workspace
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 dark:text-gray-400">
            Review, correct, and trace your records on a supported desktop
            experience — production-faithful, with synthetic data. No
            screenshots, app names, URLs, keystrokes, or rankings appear
            anywhere.
          </p>

        </div>



        {/* Desktop Application Window */}
        <div
          className="
            mx-auto
            mt-12
            max-w-6xl
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-[0_10px_30px_rgba(14,31,61,0.10)]
            dark:border-slate-800
            dark:bg-slate-900
          "
        >


          {/* Window Header */}
          <div
            className="
              flex
              h-10
              items-center
              gap-2
              bg-slate-800
              px-5
            "
          >

            <span className="h-2.5 w-2.5 rounded-md bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-md bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-md bg-white/25" />


            <p className="ml-3 text-xs font-medium text-white/90">
              ZoikoTime · Worker workspace
            </p>

          </div>



          {/* Workspace Layout */}
          <div className="flex min-h-[380px]">


            {/* Sidebar */}
            <aside
              className="
                hidden
                w-44
                shrink-0
                border-r
                border-slate-200
                bg-gray-50
                p-5
                sm:block
                dark:border-slate-800
                dark:bg-slate-900
              "
            >


              {/* Logo */}
              <div className="text-xs font-extrabold">
                <span className="text-slate-800 dark:text-white">
                  ZOIKO
                </span>

                <span className="text-teal-600">
                  TIME
                </span>
              </div>



              {/* Navigation */}
              <nav className="mt-8 space-y-2">


                <div className="flex items-center gap-3 text-xs font-medium text-gray-500">

                  <span className="h-1.5 w-1.5 rounded-sm bg-gray-300" />

                  Overview

                </div>



                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    bg-white
                    px-3
                    py-2.5
                    text-xs
                    font-medium
                    text-slate-800
                    shadow-[0_6px_18px_rgba(14,31,61,0.05)]
                    dark:bg-slate-800
                    dark:text-white
                  "
                >

                  <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

                  Time records

                </div>


                <div className="flex items-center gap-3 text-xs font-medium text-gray-500">

                  <span className="h-1.5 w-1.5 rounded-sm bg-gray-300" />

                  Timesheets

                </div>


                <div className="flex items-center gap-3 text-xs font-medium text-gray-500">

                  <span className="h-1.5 w-1.5 rounded-sm bg-gray-300" />

                  Attendance

                </div>


                <div className="flex items-center gap-3 text-xs font-medium text-gray-500">

                  <span className="h-1.5 w-1.5 rounded-sm bg-gray-300" />

                  Breaks

                </div>


                <div className="flex items-center gap-3 text-xs font-medium text-gray-500">

                  <span className="h-1.5 w-1.5 rounded-sm bg-gray-300" />

                  Corrections

                </div>


                <div className="flex items-center gap-3 text-xs font-medium text-gray-500">

                  <span className="h-1.5 w-1.5 rounded-sm bg-gray-300" />

                  History

                </div>


              </nav>


            </aside>

                        {/* Main Workspace */}
            <main className="flex-1 overflow-x-auto p-5">

              <div className="min-w-[850px]">


                {/* Workspace Header */}
                <div className="flex items-center justify-between">

                  <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                    Time records · Aug 1–15
                  </h3>


                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-indigo-50
                      px-3
                      py-1.5
                      text-xs
                      font-bold
                      text-blue-700
                    "
                  >

                    <span className="h-1.5 w-1.5 rounded-full bg-blue-700" />

                    2 pending review

                  </div>


                </div>



                {/* Table */}
                <div className="mt-6 overflow-hidden">


                  {/* Table Header */}
                  <div
                    className="
                      grid
                      grid-cols-[100px_170px_240px_270px_100px]
                      border-b
                      border-slate-200
                      text-xs
                      font-semibold
                      uppercase
                      tracking-tight
                      text-gray-500
                    "
                  >

                    <div className="px-3 py-3">
                      Date
                    </div>

                    <div className="px-3 py-3">
                      Interval
                    </div>

                    <div className="px-3 py-3">
                      Classification
                    </div>

                    <div className="px-3 py-3">
                      Status
                    </div>

                    <div className="px-3 py-3">
                      Version
                    </div>


                  </div>



                  {/* Row 1 */}
                  <div
                    className="
                      grid
                      grid-cols-[100px_170px_240px_270px_100px]
                      items-center
                      border-b
                      border-slate-200
                      text-xs
                      text-slate-800
                      dark:border-slate-800
                      dark:text-white
                    "
                  >

                    <div className="px-3 py-3">
                      Aug 5
                    </div>


                    <div className="px-3 py-3">
                      09:00–17:30
                    </div>


                    <div className="px-3 py-3">
                      Regular · policy v4
                    </div>


                    <div className="px-3 py-3">

                      <span
                        className="
                          rounded-full
                          bg-emerald-50
                          px-3
                          py-1
                          text-xs
                          font-bold
                          text-teal-700
                        "
                      >
                        Approved
                      </span>

                    </div>


                    <div className="px-3 py-3">
                      v3
                    </div>


                  </div>




                  {/* Row 2 */}
                  <div
                    className="
                      grid
                      grid-cols-[100px_170px_240px_270px_100px]
                      items-center
                      border-b
                      border-slate-200
                      text-xs
                      text-slate-800
                      dark:border-slate-800
                      dark:text-white
                    "
                  >

                    <div className="px-3 py-3">
                      Aug 4
                    </div>


                    <div className="px-3 py-3">
                      09:05–17:20
                    </div>


                    <div className="px-3 py-3">
                      Regular
                    </div>


                    <div className="px-3 py-3">

                      <span
                        className="
                          rounded-full
                          bg-orange-100
                          px-3
                          py-1
                          text-xs
                          font-bold
                          text-yellow-700
                        "
                      >
                        Correction pending
                      </span>

                    </div>


                    <div className="px-3 py-3">
                      v2
                    </div>


                  </div>




                  {/* Row 3 */}
                  <div
                    className="
                      grid
                      grid-cols-[100px_170px_240px_270px_100px]
                      items-center
                      border-b
                      border-slate-200
                      text-xs
                      text-slate-800
                      dark:border-slate-800
                      dark:text-white
                    "
                  >

                    <div className="px-3 py-3">
                      Aug 3
                    </div>


                    <div className="px-3 py-3">
                      —
                    </div>


                    <div className="px-3 py-3">
                      Missing exit
                    </div>


                    <div className="px-3 py-3">

                      <span
                        className="
                          rounded-full
                          bg-rose-50
                          px-3
                          py-1
                          text-xs
                          font-bold
                          text-red-700
                        "
                      >
                        Needs input
                      </span>

                    </div>


                    <div className="px-3 py-3">
                      v1
                    </div>


                  </div>

                                    {/* Row 4 */}
                  <div
                    className="
                      grid
                      grid-cols-[100px_170px_240px_270px_100px]
                      items-center
                      border-b
                      border-slate-200
                      text-xs
                      text-slate-800
                      dark:border-slate-800
                      dark:text-white
                    "
                  >

                    <div className="px-3 py-3">
                      Aug 2
                    </div>


                    <div className="px-3 py-3">
                      09:00–13:00
                    </div>


                    <div className="px-3 py-3">
                      Half day
                    </div>


                    <div className="px-3 py-3">

                      <span
                        className="
                          rounded-full
                          bg-emerald-50
                          px-3
                          py-1
                          text-xs
                          font-bold
                          text-teal-700
                        "
                      >
                        Approved
                      </span>

                    </div>


                    <div className="px-3 py-3">
                      v1
                    </div>


                  </div>



                  {/* Privacy Note */}
                  <p
                    className="
                      mt-6
                      text-xs
                      leading-4
                      text-gray-500
                    "
                  >
                    No screenshots, app names, or URLs shown anywhere ·
                    correction creates a reviewable version, never a silent
                    overwrite.
                  </p>


                </div>

              </div>

            </main>


          </div>


        </div>


      </div>

    </section>
  );
}