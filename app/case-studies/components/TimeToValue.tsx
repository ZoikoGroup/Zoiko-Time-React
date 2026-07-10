import React from "react";

const timelines = [
  {
    period: "MONTH 1–2 — DEPLOYMENT",
    title: "Foundation & Initial Visibility",
    points: [
      "System integration with HRIS, payroll, and identity providers",
      "Initial session confidence scoring active — anomalies visible within days",
      "First payroll cycle with verified evidence records",
      "HR, Finance, and Compliance teams trained and onboarded",
    ],
  },
  {
    period: "MONTH 3–4 — OPERATIONAL",
    title: "Operational Improvement",
    points: [
      "Anomaly detection baselines fully calibrated — detection accuracy optimised",
      "First financial impact measurable — leakage reduction visible in payroll reporting",
      "Compliance posture improving — audit preparation time dramatically reduced",
      "Billing accuracy improvements visible in client invoicing reports",
    ],
  },
  {
    period: "MONTH 6+ — ROI REALISED",
    title: "Measurable, Reportable ROI",
    points: [
      "Full ROI calculable and reportable — financial impact quantified",
      "First clean regulatory audit achieved for regulated industry clients",
      "Payback period confirmed — typically 4–8 weeks from activation",
      "Executive reporting configured — CFO-ready impact summary available on demand",
    ],
  },
];

export default function TimeToValue() {
  return (
    <section
      className="
        w-full
        bg-slate-100
        dark:bg-slate-950
        px-4
        py-16
        transition-colors
      "
    >
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
          Time to Value
        </p>

        <h2
          className="
            mt-6
            text-3xl
            lg:text-4xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          How Quickly Value Is Realised
        </h2>

        <p
          className="
            mt-5
            text-base
            lg:text-lg
            text-slate-500
            dark:text-slate-400
          "
        >
          A structured, predictable timeline — from deployment through
          <br className="hidden md:block" />
          operational improvement to measurable, reportable ROI.
        </p>


        <div
          className="
            mt-12
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {timelines.map((item) => (
            <div
              key={item.period}
              className="
                relative
                bg-white
                dark:bg-slate-900
                rounded-xl
                border
                border-slate-200
                dark:border-slate-800
                p-8
                text-left
                shadow-sm
                overflow-hidden
              "
            >

              {/* Top gradient line */}
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
                  tracking-wide
                  text-teal-600
                "
              >
                {item.period}
              </p>


              <h3
                className="
                  mt-5
                  text-lg
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                {item.title}
              </h3>


              <ul className="mt-8 space-y-5">

                {item.points.map((point) => (
                  <li
                    key={point}
                    className="
                      flex
                      gap-3
                      text-xs
                      leading-5
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    <span className="text-teal-600 font-bold">
                      ›
                    </span>

                    <span>
                      {point}
                    </span>

                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}