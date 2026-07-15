import React from "react";

const withoutItems = [
  "Coordinated time inflation continues for 3+ months before appearing in a payroll reconciliation",
  "No audit trail exists — dispute resolution is based on conflicting claims, not verifiable evidence",
  "Business decisions made from manipulated data — resourcing, performance ratings, compliance reports",
  "Financial loss accumulates silently — each period compounds the total exposure",
  "Regulatory audit reveals data integrity failure — penalties applied, reputation damaged",
];

const withItems = [
  "Anomaly detected on day 14 — 76 days of further loss prevented by immediate control action",
  "Complete forensic evidence record created automatically — dispute resolved in hours, not weeks",
  "Business data integrity maintained — decisions built on verified, manipulation-free records",
  "Financial exposure quantified immediately — recovery actions initiated with evidence backing",
  "Regulatory audit passed — complete integrity records provided on demand, no findings",
];

export default function CounterIntel() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-16">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Heading */}
        <div className="text-center">

          <div className="flex items-center justify-center gap-3">
            <span className="w-6 h-[2px] bg-teal-600" />

            <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
              Counterfactual Intelligence
            </p>
          </div>

          <h2 className="
            mt-5
            text-3xl md:text-4xl
            font-bold
            text-slate-900 dark:text-white
          ">
            What Would Have Happened Without ZoikoTime
          </h2>

          <p className="
            mt-5
            max-w-xl
            mx-auto
            text-base md:text-lg
            leading-7
            text-slate-500 dark:text-slate-400
          ">
            Understanding the cost of inaction makes the value of control
            concrete — for every anomaly detected and controlled, there is a
            clear counterfactual of what the undetected version costs.
          </p>

        </div>


        {/* Cards */}
        <div className="
          mt-14
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
        ">

                    {/* Without ZoikoTime */}
        <div
          className="
            relative
            rounded-2xl
            bg-red-50
            dark:bg-red-950/30
            border
            border-red-500/20
            overflow-hidden
            p-8
          "
        >

          {/* Top Line */}
          <div className="
            absolute
            top-0
            left-0
            w-full
            h-[3px]
            bg-gradient-to-r
            from-red-500
            to-orange-500
          "/>


          <p className="
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-red-500
          ">
            Without ZoikoTime
          </p>


          <h3 className="
            mt-5
            text-xl
            font-bold
            leading-9
            text-slate-900
            dark:text-white
          ">
            Manipulation Undetected
          </h3>


          {/* Points */}
          <div className="mt-8 space-y-6">

            {withoutItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start"
              >

                <span
                  className="
                    mt-2
                    w-2
                    h-2
                    rounded-sm
                    bg-red-500
                    shrink-0
                  "
                />

                <p className="
                  text-sm
                  leading-5
                  text-slate-700
                  dark:text-slate-300
                ">
                  {item}
                </p>

              </div>
            ))}

          </div>


          {/* Loss Box */}
          <div
            className="
              mt-10
              flex
              items-center
              justify-between
              rounded-lg
              bg-red-100
              dark:bg-red-900/40
              border
              border-red-500/20
              px-5
              py-5
            "
          >

            <p className="
              text-xs
              font-semibold
              text-red-800
              dark:text-red-200
            ">
              Estimated undetected loss (90 days)
            </p>


            <p className="
              text-xl
              font-extrabold
              text-red-500
            ">
              $63,900
            </p>

          </div>

        </div>

                {/* With ZoikoTime */}
        <div
          className="
            relative
            rounded-2xl
            bg-teal-50
            dark:bg-teal-950/30
            border
            border-teal-600/20
            overflow-hidden
            p-8
          "
        >

          {/* Top Line */}
          <div
            className="
              absolute
              top-0
              left-0
              w-full
              h-[3px]
              bg-gradient-to-r
              from-teal-600
              to-teal-500
            "
          />


          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-teal-600
            "
          >
            With ZoikoTime
          </p>


          <h3
            className="
              mt-5
              text-xl
              font-bold
              leading-9
              text-slate-900
              dark:text-white
            "
          >
            Issue Detected Early — Controlled Immediately
          </h3>


          {/* Points */}
          <div className="mt-8 space-y-6">

            {withItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start"
              >

                <span
                  className="
                    mt-2
                    w-2
                    h-2
                    rounded-sm
                    bg-teal-600
                    shrink-0
                  "
                />

                <p
                  className="
                    text-sm
                    leading-5
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  {item}
                </p>

              </div>
            ))}

          </div>


          {/* Loss Box */}
          <div
            className="
              mt-10
              flex
              items-center
              justify-between
              rounded-lg
              bg-emerald-50
              dark:bg-emerald-950/40
              border
              border-teal-600/20
              px-5
              py-5
            "
          >

            <p
              className="
                text-xs
                font-semibold
                text-teal-700
                dark:text-teal-300
              "
            >
              Actual loss with ZoikoTime
            </p>


            <p
              className="
                text-xl
                font-extrabold
                text-teal-600
              "
            >
              $21,300
            </p>

          </div>


        </div>


      </div>

    </div>
  </section>
  );
}