import React from "react";

const lifecycleItems = [
  {
    icon: "📅",
    title: "Retention Policies",
    description:
      "Define retention schedules by evidence type, jurisdiction, and business purpose — ensuring records are held for exactly as long as required and no longer, in compliance with applicable regulations.",
    tags: [
      "GDPR Article 5",
      "Purpose limitation",
      "Storage limitation",
    ],
  },
  {
    icon: "🗄️",
    title: "Archival",
    description:
      "Evidence approaching end-of-retention is automatically archived to cost-efficient, compliant storage — with integrity and chain of custody maintained throughout, and retrieval available on demand.",
    tags: [
      "Integrity preserved",
      "On-demand retrieval",
      "Legal hold support",
    ],
  },
  {
    icon: "🗑️",
    title: "Secure Deletion",
    description:
      "At end of retention, records are securely and verifiably deleted — with a deletion certificate added to the chain of custody to confirm compliance and protect against future liability.",
    tags: [
      "Deletion certificate",
      "GDPR compliant",
      "Audit-logged",
    ],
  },
];

export default function LifecycleManagement() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-20 px-5">

      <div className="max-w-[1040px] mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          <div className="flex justify-center items-center gap-4 mb-5">
            <span className="w-6 h-[2px] bg-teal-600"></span>

            <span className="
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-teal-600
            ">
              Lifecycle Management
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
            Manage Evidence From Creation to Retention
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
            Evidence that is retained beyond its purpose creates risk.
            ZoikoTime provides the full lifecycle controls needed to align
            evidence management with GDPR, data governance, and legal hold
            requirements.
          </p>

        </div>



        {/* Cards */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">

          {lifecycleItems.map((item) => (

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
                p-8
                min-h-[390px]
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
                from-teal-600
                to-teal-500
              "/>


              {/* Icon */}
              <div className="
                w-12
                h-12
                flex
                items-center
                justify-center
                rounded-xl
                bg-emerald-50
                dark:bg-emerald-900/30
                border
                border-teal-600/20
                text-xl
              ">
                {item.icon}
              </div>



              {/* Title */}
              <h3 className="
                mt-7
                text-lg
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
                text-sm
                leading-6
                text-slate-500
                dark:text-slate-400
              ">
                {item.description}
              </p>



              {/* Tags */}
              <div className="
                mt-7
                flex
                flex-wrap
                gap-2
              ">

                {item.tags.map((tag) => (

                  <span
                    key={tag}
                    className="
                      px-3
                      py-1.5
                      rounded-full
                      bg-indigo-50
                      dark:bg-indigo-900/30
                      border
                      border-indigo-500/20
                      text-xs
                      font-semibold
                      text-indigo-500
                    "
                  >
                    {tag}
                  </span>

                ))}

              </div>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}