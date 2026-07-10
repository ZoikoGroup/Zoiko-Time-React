import React from "react";
import { ArrowRight } from "lucide-react";

const outcomes = [
  {
    category: "Professional Services · 140 staff",
    value: "73%",
    title: "Reduction in billing dispute resolution time",
    description:
      "Switched from manual timesheets to ZoikoTime verified records. Client disputes dropped in first billing cycle, with timestamped audit evidence settling most cases without escalation.",
    footer: "COO · Professional Services · 140 employees",
    link: "See this workflow in demo",
  },
  {
    category: "Distributed Staffing · 320 contractors",
    value: "4 hrs",
    title: "Payroll prep reduced from 2 days to 4 hours",
    description:
      "Policy-aware attendance records eliminated manual reconciliation. Payroll exports are now audit-ready on submission, with jurisdiction-aware overtime and break rules applied automatically.",
    footer: "CFO · Distributed Staffing · 320 contractors",
    link: "See payroll workflow in demo",
  },
  {
    category: "Healthcare Network · Multi-jurisdiction",
    value: "100%",
    title:
      "Audit completion rate without manual evidence requests",
    description:
      "ZoikoTime's evidence package capability allowed the compliance team to generate complete, jurisdiction-specific audit packs without chasing managers or reconstructing records.",
    footer: "Compliance Officer · Healthcare · 4 jurisdictions",
    link: "See compliance workflow in demo",
  },
];

export default function CustomerOutcomes() {
  return (
    <section
      className="
        w-full
        bg-emerald-50
        dark:bg-slate-950
        px-5
        sm:px-8
        lg:px-10
        py-14
      "
    >

      {/* Header */}
      <div className="text-center max-w-5xl mx-auto">

        <div
          className="
            text-teal-900
            dark:text-teal-400
            text-xs
            font-bold
            uppercase
            tracking-wider
            mb-4
          "
        >
          Customer outcomes
        </div>


        <h2
          className="
            text-gray-900
            dark:text-white
            text-3xl
            sm:text-4xl
            font-semibold
            leading-tight
          "
        >
          Proof for operators, finance leaders, and executives.
        </h2>

      </div>


      {/* Cards */}
      <div
        className="
          max-w-[1180px]
          mx-auto
          mt-12
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
      >

        {outcomes.map((item) => (

          <div
            key={item.category}
            className="
              bg-white
              dark:bg-slate-900
              rounded-[20px]
              border
              border-slate-200
              dark:border-slate-700
              p-6
            "
          >

            {/* Category */}
            <div className="flex items-center gap-2">

              <span
                className="
                  w-1.5
                  h-1.5
                  bg-teal-900
                  dark:bg-teal-400
                  rounded-full
                "
              />

              <p
                className="
                  text-gray-400
                  dark:text-slate-400
                  text-xs
                  font-bold
                  uppercase
                  tracking-wide
                "
              >
                {item.category}
              </p>

            </div>


            {/* Result */}
            <div
              className="
                mt-4
                text-teal-900
                dark:text-teal-400
                text-3xl
                font-black
              "
            >
              {item.value}
            </div>


            <h3
              className="
                mt-3
                text-gray-900
                dark:text-white
                text-xs
                font-semibold
                leading-5
              "
            >
              {item.title}
            </h3>


            <p
              className="
                mt-4
                text-slate-500
                dark:text-slate-400
                text-xs
                leading-5
              "
            >
              {item.description}
            </p>


            {/* Footer */}
            <div
              className="
                mt-6
                pt-4
                border-t
                border-slate-200
                dark:border-slate-700
              "
            >

              <p
                className="
                  text-gray-400
                  dark:text-slate-500
                  text-xs
                  font-medium
                "
              >
                {item.footer}
              </p>


              <button
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  text-teal-900
                  dark:text-teal-400
                  text-xs
                  font-semibold
                "
              >
                {item.link}

                <ArrowRight size={14} />

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}