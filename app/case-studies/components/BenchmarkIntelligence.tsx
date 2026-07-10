import React from "react";

const benchmarks = [
  {
    category: "Financial Services",
    title: "Payroll & Compliance Impact",
    stats: [
      ["Payroll leakage reduction", "-14%"],
      ["Audit prep time saved", "-72%"],
      ["Compliance risk reduction", "-68%"],
      ["Average payback period", "3.8 weeks"],
    ],
    summary:
      "Organisations in financial services reduce payroll leakage by 12–18% within the first quarter of ZoikoTime deployment.",
  },
  {
    category: "Healthcare & Life Sciences",
    title: "Compliance & Workforce Impact",
    stats: [
      ["Regulatory audit failures eliminated", "100%"],
      ["Shift compliance accuracy", "+98.6%"],
      ["Agency workforce disputes", "-84%"],
      ["Average payback period", "5.2 weeks"],
    ],
    summary:
      "Healthcare clients achieve first clean regulatory audit within 90 days of deployment in 100% of verified cases.",
  },
  {
    category: "Professional Services",
    title: "Billing & Utilisation Impact",
    stats: [
      ["Billing accuracy improvement", "+26%"],
      ["Client billing disputes", "-94%"],
      ["Revenue captured (annual)", "+$210K"],
      ["Average payback period", "4.6 weeks"],
    ],
    summary:
      "Professional services firms improve billing accuracy from 68% to 94% verified within 60 days — average at $35/hour rate.",
  },
];

export default function BenchmarkIntelligence() {
  return (
    <section
      className="
        w-full
        px-4
        py-16
        bg-white
        dark:bg-slate-950
      "
    >
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
          Benchmark Intelligence
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
          How You Compare to Your Industry
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
          Organisations in your sector typically see these results after
          <br className="hidden md:block" />
          implementing ZoikoTime — based on verified outcomes across our
          enterprise client base.
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

          {benchmarks.map((item) => (
            <div
              key={item.category}
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


              <p className="text-xs font-bold uppercase tracking-wide text-teal-600">
                {item.category}
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


              <div className="mt-6">

                {item.stats.map(([label, value]) => (
                  <div
                    key={label}
                    className="
                      flex
                      justify-between
                      items-center
                      py-3
                      border-b
                      border-slate-200
                      dark:border-slate-700
                    "
                  >

                    <span
                      className="
                        text-xs
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      {label}
                    </span>


                    <span
                      className="
                        text-sm
                        font-bold
                        text-teal-600
                      "
                    >
                      {value}
                    </span>

                  </div>
                ))}

              </div>


              <div
                className="
                  mt-6
                  bg-emerald-50
                  dark:bg-emerald-950/40
                  rounded-md
                  p-4
                "
              >
                <p
                  className="
                    text-xs
                    font-semibold
                    leading-5
                    text-teal-700
                    dark:text-teal-400
                  "
                >
                  {item.summary}
                </p>
              </div>


            </div>
          ))}

        </div>

      </div>
    </section>
  );
}