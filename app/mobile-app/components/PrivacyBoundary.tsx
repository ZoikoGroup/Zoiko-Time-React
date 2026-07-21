import React from "react";
import { Check, X } from "lucide-react";

export default function PrivacyBoundary() {
  const records = [
    "Worker Status",
    "Time events",
    "Break events",
    "Shift events",
    "Manager approvals",
    "Authorized Stand-Down",
    "Unverified Exit explanations",
    "Policy versions & audit records",
  ];

  const neverCaptures = [
    "Screenshots",
    "Keystroke content",
    "Private messages",
    "Personal browsing history",
    "Application names",
    "Clipboard content",
    "Private files, photos, calls, contacts",
    "Microphone or screen recording",
  ];

  return (
    <section
      className="
        relative

        w-full

        overflow-hidden

        px-5

        py-16

        transition-colors

        duration-300

        bg-gray-50

        text-slate-900

        dark:bg-slate-950

        dark:text-white

        sm:px-8

        lg:min-h-[777px]

        lg:px-10

        lg:py-[74px]
      "
    >

      {/* Header */}
      <div className="mx-auto max-w-[650px] text-center">

        <p
          className="
            text-xs

            font-semibold

            uppercase

            leading-5

            tracking-[0.2em]

            text-teal-600

            dark:text-teal-400
          "
        >
          Privacy Boundary
        </p>


        <h2
          className="
            mt-2.5

            text-3xl

            font-bold

            leading-tight

            text-slate-900

            dark:text-slate-100

            sm:text-4xl
          "
        >
          A clear mobile privacy boundary
        </h2>


        <p
          className="
            mt-4

            text-sm

            font-normal

            leading-7

            text-slate-600

            dark:text-slate-400

            sm:text-base
          "
        >
          ZoikoTime records governed workforce activity — and deliberately never
          <br className="hidden sm:block" />
          captures personal device content.
        </p>

      </div>


      {/* Comparison Card */}
      <div
        className="
          mx-auto

          mt-16

          grid

          max-w-[920px]

          overflow-hidden

          rounded-2xl

          border

          border-slate-200

          bg-white

          shadow-[0px_6px_18px_rgba(0,0,0,0.12)]

          transition-colors

          dark:border-slate-700

          dark:bg-slate-900

          dark:shadow-[0px_6px_18px_rgba(0,0,0,0.25)]

          lg:mt-[76px]

          lg:grid-cols-2
        "
      >

        {/* ZoikoTime Records */}
        <div className="min-w-0">

          <div
            className="
              flex

              h-14

              items-center

              bg-teal-600

              px-5
            "
          >
            <h3 className="text-base font-bold leading-6 text-white">
              ZoikoTime records
            </h3>
          </div>


          <div className="bg-white dark:bg-slate-900">

            {records.map((item, index) => (

              <div
                key={item}
                className={`
                  flex
                  min-h-[45px]
                  items-center
                  gap-3
                  px-5

                  ${
                    index !== 0
                      ? "border-t border-slate-200 dark:border-slate-700"
                      : ""
                  }
                `}
              >

                <Check
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 text-teal-600 dark:text-teal-400"
                />


                <span
                  className="
                    text-sm

                    font-normal

                    leading-6

                    text-slate-700

                    dark:text-slate-300
                  "
                >
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* Never Captures */}
        <div
          className="
            min-w-0

            border-t

            border-slate-200

            dark:border-slate-700

            lg:border-l

            lg:border-t-0
          "
        >

          <div
            className="
              flex

              h-14

              items-center

              bg-slate-200

              px-5

              dark:bg-slate-800
            "
          >
            <h3
              className="
                text-base

                font-bold

                leading-6

                text-slate-900

                dark:text-white
              "
            >
              ZoikoTime never captures
            </h3>
          </div>


          <div className="bg-white dark:bg-slate-900">

            {neverCaptures.map((item, index) => (

              <div
                key={item}
                className={`
                  flex
                  min-h-[45px]
                  items-center
                  gap-3
                  px-5

                  ${
                    index !== 0
                      ? "border-t border-slate-200 dark:border-slate-700"
                      : ""
                  }
                `}
              >

                <X
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 text-orange-500"
                />


                <span
                  className="
                    text-sm

                    font-normal

                    leading-6

                    text-slate-600

                    dark:text-slate-400
                  "
                >
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}