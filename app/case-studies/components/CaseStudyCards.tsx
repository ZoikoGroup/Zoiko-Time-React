import React from "react";

const caseStudies = [
  {
    category: "Healthcare · UK",
    title:
      "NHS Trust achieves first clean CQC inspection after three consecutive failures",
    stats: [
      ["100%", "Clean audit rate"],
      ["-72%", "Audit prep time"],
      ["3.8wk", "Payback period"],
    ],
    problem:
      "Three consecutive CQC inspection failures due to incomplete, inconsistent staff time records. Legal exposure growing each cycle.",
    before:
      "Manual records, 3 audit failures, weeks of preparation per inspection, $120K annual audit cost",
    after:
      "First clean inspection, automated evidence, <4 min audit export, compliance rate: 98.6%",
  },
  {
    category: "Financial Services · Global",
    title:
      "Global bank eliminates $2.1M in contractor billing disputes across 6 jurisdictions",
    stats: [
      ["$2.1M", "Disputes eliminated"],
      ["94%", "Billing accuracy"],
      ["4mo", "ROI achieved"],
    ],
    problem:
      "Contractor billing disputes adding $2.4M annually in legal and administrative cost across 1,200 contractors.",
    before:
      "Self-reported time, $2.4M dispute cost, no evidence for any session, weeks per dispute resolution",
    after:
      "100% sessions evidenced, $2.1M disputes eliminated, disputes resolved in hours not weeks",
  },
  {
    category: "Professional Services · UK",
    title:
      "Consulting firm improves billable utilisation from 68% to 94% verified in 60 days",
    stats: [
      ["+26%", "Billing accuracy"],
      ["$210K", "Additional revenue"],
      ["5wk", "Payback period"],
    ],
    problem:
      "Billable hour reporting based entirely on self-reported data. Client billing disputes increasing quarterly.",
    before:
      "68% billing accuracy, monthly disputes, revenue loss estimated at $210K annually",
    after:
      "94% verified billing accuracy, $0 disputed invoices, $210K additional annual revenue captured",
  },
  {
    category: "Telecom / BPO · APAC & EMEA",
    title:
      "Global telecom operator reduces payroll leakage 15% across 8,000 distributed agents",
    stats: [
      ["-15%", "Payroll leakage"],
      ["-60%", "Audit prep time"],
      ["4mo", "Full ROI achieved"],
    ],
    problem:
      "8,000 distributed agents with no real-time verification layer. Payroll leakage estimated at $1.8M annually.",
    before:
      "$1.8M leakage, 3-week audit prep, no real-time visibility, fraud detection after the fact",
    after:
      "$270K annual saving, audit ready in <4 minutes, fraud detected in real time and controlled",
  },
];


export default function CaseStudyCards() {
  return (
    <section
      className="
        bg-slate-100
        dark:bg-slate-950
        px-4
        py-12
        transition-colors
      "
    >

      <div className="max-w-5xl mx-auto text-center">

        <p className="text-teal-600 text-xs font-bold uppercase tracking-wider">
          Case Studies
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
          Enterprise Deployments Verified Impact
        </h2>


        <p
          className="
            mt-5
            text-slate-500
            dark:text-slate-400
            text-base
            lg:text-lg
          "
        >
          Deal-closing evidence — each case includes the business problem,
          financial outcome, and a one-click CFO summary you can send to your
          finance team.
        </p>


        <div
          className="
            mt-12
            grid
            md:grid-cols-2
            gap-8
          "
        >

          {caseStudies.map((item) => (

            <div
              key={item.title}
              className="
                bg-white
                dark:bg-slate-900
                rounded-2xl
                border
                border-slate-200
                dark:border-slate-800
                overflow-hidden
                shadow-sm
              "
            >

              <div
                className="
                  bg-slate-900
                  px-6
                  py-5
                  text-center
                "
              >
                <p className="text-teal-500 text-sm font-bold uppercase">
                  {item.category}
                </p>

                <h3 className="mt-3 text-white text-lg font-semibold">
                  {item.title}
                </h3>
              </div>


              <div
                className="
                  grid
                  grid-cols-3
                  border-b
                  border-slate-200
                  dark:border-slate-700
                "
              >
                {item.stats.map(([value,label]) => (
                  <div
                    key={label}
                    className="
                      py-5
                      text-center
                      border-r
                      last:border-r-0
                      border-slate-200
                      dark:border-slate-700
                    "
                  >
                    <p className="text-teal-600 text-lg font-extrabold">
                      {value}
                    </p>

                    <p className="text-xs text-slate-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>


              <div className="p-6 text-left">

                <p className="text-xs uppercase font-bold text-slate-400">
                  The Problem
                </p>

                <p className="mt-3 text-xs leading-5 text-slate-700 dark:text-slate-300">
                  {item.problem}
                </p>


                <div className="mt-6 grid sm:grid-cols-2 gap-4">

                  <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-md">
                    <p className="text-red-500 text-xs font-bold uppercase">
                      Before
                    </p>
                    <p className="mt-3 text-xs text-slate-700 dark:text-slate-300">
                      {item.before}
                    </p>
                  </div>


                  <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-md">
                    <p className="text-teal-600 text-xs font-bold uppercase">
                      After
                    </p>
                    <p className="mt-3 text-xs text-slate-700 dark:text-slate-300">
                      {item.after}
                    </p>
                  </div>

                </div>


                <button
                  className="
                    mt-6
                    w-full
                    h-9
                    rounded-md
                    border
                    border-slate-200
                    dark:border-slate-700
                    text-xs
                    font-semibold
                    text-slate-500
                  "
                >
                  📤 Send This to Your CFO
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}