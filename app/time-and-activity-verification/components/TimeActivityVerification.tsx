import React from "react";
import Link from "next/link";

const timeline = [
  {
    title: "Time captured",
    status: "done",
  },
  {
    title: "Activity context added",
    status: "where enabled",
  },
  {
    title: "Policy rules applied",
    status: "done",
  },
  {
    title: "Exceptions identified",
    status: "2 routed",
  },
  {
    title: "Manager review completed",
    status: "approved",
  },
  {
    title: "Evidence preserved",
    status: "retained",
  },
  {
    title: "Reports generated",
    status: "ready",
  },
];

export default function TimeActivityVerification() {
  return (
    <section
      className="
      relative overflow-hidden
      bg-gradient-to-b from-white to-gray-50
      dark:from-slate-950 dark:to-slate-900
      py-16
      "
    >
      {/* Background Glow */}
      <div
        className="
        absolute hidden md:block
        w-[760px] h-96
        -top-40 left-1/2
        -translate-x-1/2
        rounded-full
        bg-teal-500/10
        blur-3xl
        "
      />

      <div
        className="
        max-w-[1132px]
        mx-auto
        px-6
        grid
        lg:grid-cols-2
        gap-12
        items-start
        "
      >

        {/* LEFT CONTENT */}
        <div>

          <p
            className="
            text-teal-600
            text-xs
            font-semibold
            uppercase
            tracking-widest
            "
          >
            Time & Activity Verification
          </p>


          <h1
            className="
            mt-5
            text-4xl
            md:text-5xl
            leading-tight
            font-bold
            text-slate-800
            dark:text-white
            "
          >
            Verify the{" "}
            <span className="text-teal-600">
              work behind the
              <br className="hidden md:block" />
              time
            </span>
          </h1>


          <p
            className="
            mt-6
            max-w-lg
            text-gray-500
            dark:text-gray-400
            text-base
            leading-7
            "
          >
            ZoikoTime connects time records, activity context,
            approvals, exceptions, policy rules, and audit trails
            into one governed workforce verification system.
          </p>



          {/* Highlight Box */}
          <div
            className="
            mt-8
            max-w-xl
            bg-gray-50
            dark:bg-slate-800
            rounded-r-xl
            border-l-4
            border-emerald-100
            dark:border-emerald-700
            p-5
            "
          >
            <p
              className="
              text-sm
              leading-6
              text-gray-500
              dark:text-gray-300
              "
            >
              Submitted hours don't always explain what happened.
              ZoikoTime helps verify work sessions with clearer
              records, responsible activity context, role-based
              access, and reviewable evidence.
            </p>
          </div>



         
  {/* Buttons */}
<div className="mt-8 flex flex-col sm:flex-row gap-4">
  {/* Get a Demo */}
  <Link
    href="/request-a-demo"
    className="
      px-7
      py-3
      rounded-xl
      bg-teal-600
      hover:bg-teal-700
      text-white
      font-semibold
      shadow-lg
      shadow-teal-600/30
      inline-flex
      items-center
      justify-center
      transition
    "
  >
    Get a Demo
  </Link>

  {/* Start Free Trial */}
  <Link
    href="/start-free"
    className="
      px-7
      py-3
      rounded-xl
      bg-white
      dark:bg-slate-900
      border
      border-gray-300
      dark:border-slate-700
      text-slate-800
      dark:text-white
      font-semibold
      hover:bg-gray-50
      dark:hover:bg-slate-800
      inline-flex
      items-center
      justify-center
      transition
    "
  >
    Start Free Trial
  </Link>
</div>

          <p
            className="
            mt-6
            text-xs
            text-gray-500
            dark:text-gray-400
            "
          >
            Built for workforce accountability without defaulting
            to invasive surveillance.
          </p>


        </div>



        {/* RIGHT CARD */}

        <div
          className="
          bg-white
          dark:bg-slate-900
          rounded-2xl
          border
          border-slate-200
          dark:border-slate-700
          shadow-xl
          p-7
          "
        >

          <h3
            className="
            text-lg
            font-bold
            text-slate-800
            dark:text-white
            "
          >
            From work session to verified record
          </h3>


          <p
            className="
            mt-2
            text-sm
            text-gray-500
            dark:text-gray-400
            "
          >
            A clean verification timeline
          </p>



          <div className="mt-6 space-y-4">

            {timeline.map((item,index)=>(

              <div
                key={index}
                className="
                flex
                items-center
                justify-between
                bg-white
                dark:bg-slate-800
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                px-4
                py-4
                shadow-sm
                "
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                    w-7 h-7
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-emerald-50
                    dark:bg-emerald-900/40
                    text-teal-700
                    dark:text-emerald-300
                    text-xs
                    font-bold
                    "
                  >
                    {index+1}
                  </div>


                  <span
                    className="
                    text-sm
                    font-medium
                    text-slate-800
                    dark:text-white
                    "
                  >
                    {item.title}
                  </span>

                </div>



                <div
                  className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  text-green-700
                  dark:text-green-400
                  "
                >

                  <span
                    className="
                    w-2 h-2
                    bg-green-500
                    rounded-sm
                    "
                  />

                  {item.status}

                </div>


              </div>

            ))}

          </div>


        </div>


      </div>


    </section>
  );
}