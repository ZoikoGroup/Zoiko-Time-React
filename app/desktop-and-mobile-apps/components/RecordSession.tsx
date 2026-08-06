import React from "react";

export default function RecordSession() {
  const usedItems = [
    "Approved time and attendance events",
    "Configured breaks and rest context",
    "Project / task context where enabled",
    "Correction requests and approvals",
    "Policy version and record state",
  ];

  const neverItems = [
    "Screenshots",
    "Keystroke content",
    "URL / browsing history",
    "Application-name monitoring",
    "Clipboard content",
  ];

  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">


        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Record Session
          </p>


          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Recording is always visible and attributable
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 dark:text-gray-400">
            No hidden start, no coerced permission sequence. A pre-start notice
            explains purpose and what is used; an active banner stays visible;
            completion produces a summary and version reference.
          </p>

        </div>



        {/* Active Recording Banner */}
        <div
          className="
            mx-auto
            mt-14
            flex
            max-w-4xl
            flex-col
            gap-4
            rounded-xl
            border
            border-slate-200
            border-l-4
            border-l-teal-600
            bg-white
            p-5
            shadow-[0_6px_18px_rgba(14,31,61,0.05)]
            sm:flex-row
            sm:items-center
            sm:justify-between
            dark:border-slate-800
            dark:bg-slate-900
          "
        >

          <div className="flex gap-4">


            {/* Active Indicator */}
            <div className="mt-1">

              <span className="block h-3 w-3 rounded-md bg-green-500 ring-4 ring-green-200" />

            </div>



            <div>

              <p className="text-base leading-6 text-slate-800 dark:text-white">

                <span className="font-bold">
                  Recording time / attendance state
                </span>

                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  · Shift · started 09:00 · policy v4
                </span>

              </p>


              <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                Connection: online · last sync 09:31 · pause and correction
                available per policy
              </p>

            </div>


          </div>



          {/* Actions */}
          <div className="flex gap-3">

            <button
              className="
                rounded-lg
                border
                border-gray-300
                bg-white
                px-5
                py-2
                text-xs
                font-semibold
                text-slate-800
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            >
              Pause
            </button>


            <button
              className="
                rounded-lg
                border
                border-gray-300
                bg-white
                px-5
                py-2
                text-xs
                font-semibold
                text-slate-800
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            >
              Complete
            </button>

          </div>


        </div>



        {/* Comparison Intro */}
        <p
          className="
            mx-auto
            mt-12
            max-w-xl
            text-center
            text-base
            leading-7
            text-gray-500
            dark:text-gray-400
          "
        >
          What a session uses — and what it never collects:
        </p>



        {/* Comparison Table Container */}
        <div
          className="
            mx-auto
            mt-10
            max-w-5xl
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-[0_6px_18px_rgba(14,31,61,0.05)]
            dark:border-slate-800
            dark:bg-slate-900
          "
        >


          {/* Two Columns Start */}
          <div className="grid md:grid-cols-2">

                        {/* Information Used */}
            <div className="border-b border-slate-200 md:border-b-0 md:border-r dark:border-slate-800">

              {/* Header */}
              <div className="bg-teal-600 px-5 py-4">

                <h3 className="text-base font-bold text-white">
                  Information used
                </h3>

              </div>



              {/* Items */}
              <div className="bg-white dark:bg-slate-900">

                {usedItems.map((item, index) => (
                  <div
                    key={item}
                    className={`
                      flex
                      items-center
                      gap-4
                      px-5
                      py-4
                      ${
                        index !== usedItems.length - 1
                          ? "border-b border-slate-200 dark:border-slate-800"
                          : ""
                      }
                    `}
                  >

                    {/* Check Icon */}
                    <span
  className="
    flex
    h-5
    w-5
    items-center
    justify-center
    rounded-full
    bg-teal-50
    text-sm
    font-bold
    text-teal-600
  "
>
  ✓
</span>


                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {item}
                    </p>


                  </div>
                ))}

              </div>

            </div>





            {/* Never Collected */}
            <div>


              {/* Header */}
              <div className="bg-slate-800 px-5 py-4">

                <h3 className="text-base font-bold text-white">
                  Never collected
                </h3>

              </div>




              {/* Items */}
              <div className="bg-white dark:bg-slate-900">

                {neverItems.map((item, index) => (
                  <div
                    key={item}
                    className={`
                      flex
                      items-center
                      gap-4
                      px-5
                      py-4
                      ${
                        index !== neverItems.length - 1
                          ? "border-b border-slate-200 dark:border-slate-800"
                          : ""
                      }
                    `}
                  >

                    {/* Remove Icon */}
                    <span
  className="
    flex
    h-5
    w-5
    items-center
    justify-center
    rounded-full
    bg-orange-50
    text-sm
    font-bold
    text-orange-700
  "
>
  ✕
</span>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item}
                    </p>


                  </div>
                ))}


              </div>


            </div>
                      </div>

        </div>


      </div>
    </section>
  );
}