import React from "react";

const evidenceTypes = [
  {
    icon: "📋",
    title: "Activity Evidence",
    description:
      "What happened — every session, task, and operational event with full execution context.",
    tags: ["Session records", "Task completion", "Duration data"],
  },
  {
    icon: "👤",
    title: "Identity Evidence",
    description:
      "Who performed it — verified identity attribution with authentication signals and device context.",
    tags: ["Identity verification", "Authentication log", "Device signals"],
  },
  {
    icon: "🌍",
    title: "Context Evidence",
    description:
      "Where and when — location, time, jurisdiction, and environmental context at the moment of the event.",
    tags: ["Location record", "Jurisdiction log", "Timestamp chain"],
  },
  {
    icon: "⚖️",
    title: "Decision Evidence",
    description:
      "Why it happened — the decision, the policy applied, the approver, and the documented justification.",
    tags: ["Decision record", "Policy applied", "Approval chain"],
  },
  {
    icon: "🚨",
    title: "Anomaly Evidence",
    description:
      "What went wrong — anomaly signals, fraud indicators, and policy violations with detection context.",
    tags: ["Anomaly flags", "Risk signals", "Violation record"],
  },
];

export default function EvidenceCoverage() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-20 px-5">

      <div className="max-w-[1040px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-6 h-[2px] bg-teal-600"></span>

            <span className="
              text-xs 
              font-bold 
              uppercase 
              tracking-wider 
              text-teal-600
            ">
              Evidence Coverage
            </span>
          </div>


          <h2 className="
            text-3xl 
            md:text-4xl
            font-bold
            text-slate-900
            dark:text-white
            leading-tight
          ">
            Comprehensive, Structured Evidence Coverage
          </h2>


          <p className="
            max-w-xl
            mx-auto
            mt-5
            text-base
            md:text-lg
            leading-7
            text-slate-500
            dark:text-slate-400
          ">
            Five distinct evidence types — each with its own structured object
            format, verification layer, and audit output — covering every
            dimension of workforce activity.
          </p>

        </div>


        {/* Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          gap-5
        ">

          {evidenceTypes.map((item) => (

            <div
              key={item.title}
              className="
                relative
                bg-white
                dark:bg-slate-900
                rounded-xl
                border
                border-slate-200
                dark:border-slate-800
                shadow-sm
                overflow-hidden
                min-h-[390px]
                flex
                flex-col
                items-center
                text-center
                px-5
                pt-7
              "
            >

              {/* Icon */}
              <div className="
                text-3xl
                h-14
                flex
                items-center
              ">
                {item.icon}
              </div>


              {/* Title */}
              <h3 className="
                mt-7
                text-base
                font-bold
                text-slate-900
                dark:text-white
                leading-7
              ">
                {item.title}
              </h3>


              {/* Description */}
              <p className="
                mt-4
                text-xs
                leading-5
                text-slate-500
                dark:text-slate-400
              ">
                {item.description}
              </p>


              {/* Tags */}
              <div className="mt-auto pb-8 space-y-2 w-full">

                {item.tags.map((tag) => (

                  <div
                    key={tag}
                    className="
                      w-full
                      py-1
                      rounded-md
                      bg-emerald-50
                      dark:bg-emerald-900/30
                      text-xs
                      font-semibold
                      text-teal-600
                      dark:text-teal-300
                    "
                  >
                    {tag}
                  </div>

                ))}

              </div>


              {/* Bottom line */}
              <div className="
                absolute
                bottom-0
                left-0
                w-full
                h-[2px]
                bg-gradient-to-r
                from-transparent
                via-teal-600
                to-transparent
              " />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}