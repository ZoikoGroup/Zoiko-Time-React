import React from "react";

const points = [
  "Legal obligations always override company preferences",
  "Resolution logic is fully transparent and auditable",
  "Every conflict decision is stored with full reasoning",
  "Enterprise teams notified before violations can occur",
];

export default function PolicyConflictResolution() {
  return (
    <section
      className="
      w-full
      bg-slate-100
      dark:bg-slate-950
      py-20
      px-5
      transition-colors
      "
    >

      <div
        className="
        max-w-[1104px]
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-[1fr_420px]
        gap-12
        items-center
        "
      >

        {/* LEFT CONTENT */}

        <div>

          <p
            className="
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-teal-500
            mb-8
            "
          >
            Policy Conflict Resolution
          </p>


          <h2
            className="
            text-3xl
            md:text-4xl
            font-bold
            leading-tight
            text-slate-900
            dark:text-white
            "
          >
            When Rules Conflict —
            <br />
            ZoikoTime Decides
          </h2>


          <p
            className="
            mt-6
            max-w-[620px]
            text-base
            leading-7
            text-slate-500
            dark:text-slate-400
            "
          >
            In global workforce operations, competing rules are not the
            exception — they are the norm. ZoikoTime is built to resolve them
            with precision, speed, and a complete audit trail.
          </p>


          <div
            className="
            mt-10
            space-y-6
            "
          >

            {points.map((point, index) => (
              <div
                key={index}
                className="
                flex
                items-start
                gap-3
                "
              >

                <span
                  className="
                  text-teal-500
                  text-sm
                  "
                >
                  ✓
                </span>


                <p
                  className="
                  text-sm
                  text-blue-950
                  dark:text-slate-300
                  "
                >
                  {point}
                </p>

              </div>
            ))}

          </div>

        </div>

                {/* RIGHT CONFLICT CARD */}

        <div
          className="
          w-full
          bg-white
          dark:bg-slate-900
          rounded-2xl
          border
          border-slate-200
          dark:border-slate-800
          shadow-[0px_2px_16px_rgba(10,22,40,0.07)]
          p-7
          "
        >

          <p
            className="
            text-xs
            font-bold
            uppercase
            tracking-wide
            text-slate-400
            mb-6
            "
          >
            Conflict Scenario — Overtime Rules
          </p>


          {/* COMPANY POLICY */}

          <div
            className="
            bg-slate-100
            dark:bg-slate-800
            rounded-xl
            border
            border-slate-200
            dark:border-slate-700
            p-5
            "
          >

            <div className="flex gap-4">

              <div
                className="
                w-9
                h-9
                rounded-lg
                bg-red-500/10
                flex
                items-center
                justify-center
                text-base
                "
              >
                🏢
              </div>


              <div className="flex-1">

                <div
                  className="
                  flex
                  justify-between
                  gap-3
                  "
                >

                  <h3
                    className="
                    text-sm
                    font-bold
                    text-slate-900
                    dark:text-white
                    "
                  >
                    Company Policy — Flexible Hours
                  </h3>


                  <span
                    className="
                    whitespace-nowrap
                    px-3
                    py-1
                    rounded-full
                    bg-red-100
                    text-red-600
                    text-xs
                    font-bold
                    "
                  >
                    ❌ Overridden
                  </span>

                </div>


                <p
                  className="
                  mt-3
                  text-xs
                  leading-5
                  text-slate-500
                  dark:text-slate-400
                  "
                >
                  No strict overtime threshold.
                  Salaried employees may work
                  additional hours without OT pay.
                </p>

              </div>

            </div>

          </div>



          {/* LOCAL LAW */}

          <div
            className="
            mt-5
            bg-gradient-to-br
            from-teal-500/10
            to-teal-500/5
            rounded-xl
            border
            border-teal-500/25
            p-5
            "
          >

            <div className="flex gap-4">

              <div
                className="
                w-9
                h-9
                rounded-lg
                bg-teal-500/10
                flex
                items-center
                justify-center
                text-base
                "
              >
                ⚖️
              </div>


              <div className="flex-1">

                <div
                  className="
                  flex
                  justify-between
                  gap-3
                  "
                >

                  <h3
                    className="
                    text-sm
                    font-bold
                    text-slate-900
                    dark:text-white
                    "
                  >
                    Local Law — Working Time Regulations
                  </h3>


                  <span
                    className="
                    whitespace-nowrap
                    px-3
                    py-1
                    rounded-full
                    bg-green-100
                    text-green-600
                    text-xs
                    font-bold
                    "
                  >
                    ✓ Applied
                  </span>

                </div>


                <p
                  className="
                  mt-3
                  text-xs
                  leading-5
                  text-slate-500
                  dark:text-slate-400
                  "
                >
                  48h maximum weekly working time.
                  Overtime compensation legally mandated.
                  Opt-out must be documented.
                </p>

              </div>

            </div>

          </div>

                    {/* SYSTEM DECISION LOG */}

          <div
            className="
            mt-5
            bg-gradient-to-br
            from-teal-500/10
            to-teal-500/5
            rounded-xl
            border
            border-teal-500/25
            p-5
            "
          >

            <div
              className="
              flex
              items-center
              gap-2
              mb-5
              "
            >

              <span className="text-teal-500 text-sm">
                ◉
              </span>


              <h4
                className="
                text-xs
                font-bold
                text-teal-500
                "
              >
                System Decision Log
              </h4>

            </div>



            <div className="space-y-0">


              {[
                {
                  label: "Conflict detected",
                  value: "Yes — 2 competing rules",
                },
                {
                  label: "Priority applied",
                  value: "Legal > Company",
                },
                {
                  label: "Rule selected",
                  value: "Working Time Regs 1998",
                },
                {
                  label: "Action taken",
                  value: "OT rule enforced",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                  flex
                  justify-between
                  items-center
                  py-3
                  border-b
                  border-teal-500/10
                  gap-4
                  "
                >

                  <span
                    className="
                    text-xs
                    text-slate-500
                    dark:text-slate-400
                    "
                  >
                    {item.label}
                  </span>


                  <span
                    className="
                    text-xs
                    font-bold
                    text-slate-900
                    dark:text-white
                    font-mono
                    text-right
                    "
                  >
                    {item.value}
                  </span>


                </div>
              ))}



              <div
                className="
                flex
                justify-between
                items-center
                pt-4
                gap-4
                "
              >

                <span
                  className="
                  text-xs
                  text-slate-500
                  dark:text-slate-400
                  "
                >
                  Logged
                </span>


                <span
                  className="
                  text-xs
                  font-bold
                  text-slate-900
                  dark:text-white
                  font-mono
                  "
                >
                  ✓ Audit record created
                </span>


              </div>


            </div>


          </div>


        </div>


      </div>


    </section>
  );
}