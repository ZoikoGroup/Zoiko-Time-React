import React from "react";

const packs = [
  {
    icon: "💰",
    title: "ROI Analysis",
    description:
      "Full financial model with your organisation's inputs — leakage calculation, payback period, and first-year ROI.",
    action: "↓ Generate ROI Report",
  },
  {
    icon: "⚖️",
    title: "Compliance Overview",
    description:
      "GDPR, ISO 27001, SOC 2, and EU AI Act alignment documentation — structured for procurement and legal review.",
    action: "↓ Download Compliance Pack",
  },
  {
    icon: "🔐",
    title: "Technical Summary",
    description:
      "Architecture documentation, data flow diagrams, and security boundary definitions — for CTO and CIO review.",
    action: "↓ Download Tech Summary",
  },
  {
    icon: "📋",
    title: "Case Studies",
    description:
      "Three full-length case studies in your industry — with financial impact, implementation timeline, and CFO summary.",
    action: "↓ Download Case Studies",
  },
];

export default function EvaluationPack() {
  return (
    <section
      className="
        w-full
        bg-slate-100
        dark:bg-slate-950
        px-4
        py-16
      "
    >
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
          Procurement-Ready
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
          Download the Enterprise Evaluation Pack
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
          Everything required for a complete enterprise evaluation — structured
          <br className="hidden md:block" />
          to remove friction from procurement, legal, finance, and technical review teams.
        </p>


        <div
          className="
            mt-12
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >

          {packs.map((item) => (
            <div
              key={item.title}
              className="
                bg-white
                dark:bg-slate-900
                rounded-xl
                border
                border-slate-200
                dark:border-slate-800
                p-7
                shadow-sm
                text-center
              "
            >

              <div className="text-3xl">
                {item.icon}
              </div>


              <h3
                className="
                  mt-6
                  text-base
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                {item.title}
              </h3>


              <p
                className="
                  mt-4
                  text-xs
                  leading-5
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {item.description}
              </p>


              <p
                className="
                  mt-6
                  text-xs
                  font-bold
                  text-teal-600
                "
              >
                {item.action}
              </p>

            </div>
          ))}

        </div>


        <div
          className="
            mt-12
            max-w-5xl
            mx-auto
            rounded-2xl
            bg-slate-900
            p-8
            relative
            overflow-hidden
          "
        >

          <div
            className="
              absolute
              w-96
              h-48
              top-[-30px]
              left-1/2
              -translate-x-1/2
              bg-radial
              from-teal-500/10
              to-teal-500/0
              to-70%
            "
          />


          <h3
            className="
              relative
              text-xl
              font-bold
              text-white
            "
          >
            Download the Complete Enterprise Evaluation Pack
          </h3>


          <p
            className="
              relative
              mt-4
              text-sm
              text-white/95
            "
          >
            All four components in one structured bundle — ready for distribution across your entire procurement team.
          </p>


          <button
            className="
              relative
              mt-8
              w-full
              sm:w-80
              h-11
              rounded-md
              bg-teal-600
              text-white
              text-sm
              font-bold
              shadow-[0px_4px_12px_0px_rgba(0,157,140,0.35)]
            "
          >
            Download Enterprise Evaluation Pack
          </button>

        </div>

      </div>
    </section>
  );
}