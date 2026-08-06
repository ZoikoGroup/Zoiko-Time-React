import React from "react";

export default function RoleBasedEntryPoints() {
  const roles = [
    "Worker",
    "Manager / Reviewer",
    "Administrator",
    "IT / Security",
  ];

  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Choose Your View
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Role-based entry points
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 dark:text-gray-400">
            Selection personalizes emphasis only — it never creates an account,
            infers identity, or sends sensitive role data.
          </p>

        </div>


        {/* Role Selector */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">

          {roles.map((role, index) => (
            <button
              key={role}
              className={`
                rounded-full
                border
                px-6
                py-2.5
                text-sm
                font-semibold
                transition
                ${
                  index === 0
                    ? "border-teal-600 bg-teal-600 text-white shadow-[0_6px_16px_rgba(16,162,141,0.28)]"
                    : "border-gray-300 bg-white text-slate-800 hover:border-teal-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                }
              `}
            >
              {role}
            </button>
          ))}

        </div>


        {/* Worker Section Intro */}
        <div className="mx-auto mt-16 max-w-4xl text-center">

          <h3 className="text-xl font-bold leading-9 text-slate-800 dark:text-white">
            A calm, transparent worker home
          </h3>


          <p className="mt-5 text-base leading-6 text-gray-700 dark:text-gray-300">
            See what&apos;s recorded, complete your tasks, correct errors, and
            always know when a record session is active. Large primary actions,
            status in words as well as color, and a privacy &amp; sync summary
            one tap away.
          </p>

        </div>



        {/* Information Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">


          <div
            className="
              rounded-xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-[0_6px_18px_rgba(14,31,61,0.05)]
              dark:border-slate-800
              dark:bg-slate-900
            "
          >

            <div className="flex items-center gap-3">

              <span className="h-2 w-2 rounded-sm bg-teal-600" />

              <h4 className="text-base font-semibold text-slate-800 dark:text-white">
                Visible collection state
              </h4>

            </div>


            <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Not active, active by your action, paused, or completed —
              never hidden background activity.
            </p>

          </div>



          <div
            className="
              rounded-xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-[0_6px_18px_rgba(14,31,61,0.05)]
              dark:border-slate-800
              dark:bg-slate-900
            "
          >

            <div className="flex items-center gap-3">

              <span className="h-2 w-2 rounded-sm bg-teal-600" />

              <h4 className="text-base font-semibold text-slate-800 dark:text-white">
                Correction, not overwrite
              </h4>

            </div>


            <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Request a correction and track its status and outcome; every
              change keeps author, reason, and prior value.
            </p>

          </div>


        </div>

                {/* Mobile App Preview */}
        <div className="mt-20 flex justify-center">

          <div
            className="
              relative
              h-[628px]
              w-[288px]
              rounded-[40px]
              bg-slate-800
              p-3
              shadow-[0_30px_60px_rgba(14,31,61,0.30)]
            "
          >

            {/* Speaker */}
            <div
              className="
                absolute
                left-1/2
                top-0
                h-5
                w-28
                -translate-x-1/2
                rounded-b-2xl
                bg-slate-800
              "
            />


            {/* Screen */}
            <div
              className="
                relative
                h-full
                overflow-hidden
                rounded-[30px]
                bg-gray-50
                dark:bg-slate-900
              "
            >


              {/* App Header */}
              <div
                className="
                  h-20
                  bg-gradient-to-r
                  from-teal-600
                  to-teal-700
                  px-5
                  pt-4
                  text-white
                "
              >

                <p className="text-xs opacity-90">
                  Northwind Ops · Tue, Aug 5
                </p>

                <h4 className="mt-2 text-base font-semibold">
                  Home
                </h4>

              </div>



              {/* Active Status */}
              <div className="mx-3.5 mt-3 flex h-8 items-center rounded-full bg-emerald-50 px-3">

                <span className="mr-2 h-2 w-2 rounded-sm bg-green-500 ring-4 ring-green-200" />

                <span className="text-xs font-semibold text-teal-700">
                  Recording time state · active
                </span>

              </div>



              {/* Current Record */}
              <div
                className="
                  mx-3.5
                  mt-3
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  p-3
                  dark:border-slate-700
                  dark:bg-slate-800
                "
              >

                <p className="text-[10px] uppercase tracking-wide text-gray-500">
                  Current record
                </p>

                <p className="mt-2 text-sm font-semibold text-slate-800 dark:text-white">
                  Shift · started 09:00 · v3
                </p>

              </div>



              {/* Stats */}
              <div className="mx-3.5 mt-5 grid grid-cols-3 gap-2">


                <div
                  className="
                    rounded-lg
                    border
                    border-slate-200
                    bg-white
                    p-3
                    text-center
                    dark:border-slate-700
                    dark:bg-slate-800
                  "
                >

                  <p className="text-base font-bold text-slate-800 dark:text-white">
                    6h 12m
                  </p>

                  <p className="mt-1 text-[9px] text-gray-500">
                    Recorded
                  </p>

                </div>



                <div
                  className="
                    rounded-lg
                    border
                    border-slate-200
                    bg-white
                    p-3
                    text-center
                    dark:border-slate-700
                    dark:bg-slate-800
                  "
                >

                  <p className="text-base font-bold text-slate-800 dark:text-white">
                    On
                    <br />
                    break
                  </p>

                  <p className="mt-1 text-[9px] text-gray-500">
                    Status
                  </p>

                </div>



                <div
                  className="
                    rounded-lg
                    border
                    border-slate-200
                    bg-white
                    p-3
                    text-center
                    dark:border-slate-700
                    dark:bg-slate-800
                  "
                >

                  <p className="text-base font-bold text-slate-800 dark:text-white">
                    1
                  </p>

                  <p className="mt-1 text-[9px] text-gray-500">
                    To review
                  </p>

                </div>


              </div>



              {/* Primary Actions */}
              <div className="mx-3.5 mt-5 space-y-3">

                <button
                  className="
                    h-11
                    w-full
                    rounded-lg
                    bg-teal-600
                    text-xs
                    font-semibold
                    text-white
                  "
                >
                  Review &amp; complete timesheet
                </button>


                <button
                  className="
                    h-12
                    w-full
                    rounded-lg
                    border
                    border-gray-300
                    bg-white
                    text-xs
                    font-semibold
                    text-slate-800
                    dark:border-slate-700
                    dark:bg-slate-800
                    dark:text-white
                  "
                >
                  Request a correction
                </button>

              </div>

                            {/* Privacy & Sync */}
              <div
                className="
                  mx-3.5
                  mt-4
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  p-3
                  dark:border-slate-700
                  dark:bg-slate-800
                "
              >

                <p className="text-[10px] uppercase tracking-wide text-gray-500">
                  Privacy &amp; sync
                </p>


                <p className="mt-2 text-xs font-medium leading-5 text-gray-500 dark:text-gray-400">
                  Last synced 09:31 · 0 pending ·
                  <br />
                  what&apos;s in use
                </p>

              </div>



              {/* Bottom Navigation */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  flex
                  h-14
                  w-full
                  items-center
                  justify-around
                  border-t
                  border-slate-200
                  bg-white
                  dark:border-slate-700
                  dark:bg-slate-900
                "
              >

                {[
                  "Home",
                  "Records",
                  "Actions",
                  "History",
                  "More",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex flex-col items-center gap-1"
                  >

                    <div
                      className={`
                        h-4
                        w-4
                        rounded-[5px]
                        ${
                          index === 0
                            ? "bg-emerald-50"
                            : "bg-gray-50 dark:bg-slate-800"
                        }
                      `}
                    />


                    <span
                      className={`
                        text-[9px]
                        font-semibold
                        ${
                          index === 0
                            ? "text-teal-700"
                            : "text-gray-500"
                        }
                      `}
                    >
                      {item}
                    </span>

                  </div>
                ))}

              </div>


            </div>


            {/* Phone Side Buttons */}
            <div
              className="
                absolute
                right-[-3px]
                top-24
                h-12
                w-[3px]
                rounded-r-md
                bg-slate-900
              "
            />


            <div
              className="
                absolute
                right-[-3px]
                top-40
                h-8
                w-[3px]
                rounded-r-md
                bg-slate-900
              "
            />


          </div>

        </div>


      </div>
    </section>
  );
}