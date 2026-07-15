import React from "react";

const steps = [
  {
    number: "01",
    icon: "⚡",
    title: "Action Occurs",
    description:
      "A workforce event — session, decision, anomaly — takes place in real time anywhere in the system.",
    tag: "Instant capture",
  },
  {
    number: "02",
    icon: "🔍",
    title: "Context Captured",
    description:
      "Identity, jurisdiction, policy, device, and environment are attached to the event record at capture.",
    tag: "0ms delay",
  },
  {
    number: "03",
    icon: "🧱",
    title: "Evidence Constructed",
    description:
      "The Evidence Construction Engine builds a structured evidence object — self-contained and complete.",
    tag: "Structured object",
  },
  {
    number: "04",
    icon: "🔏",
    title: "Integrity Verified",
    description:
      "A cryptographic hash is applied. The record is now tamper-evident and integrity-verifiable at any future point.",
    tag: "SHA-256 sealed",
  },
  {
    number: "05",
    icon: "📂",
    title: "Stored & Ready",
    description:
      "The sealed evidence object is stored with its custody chain active — immediately available for audit, legal review, or export.",
    tag: "Audit-ready",
  },
];

export default function EvidenceCreatedTruth() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-16 px-5">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="w-6 h-[2px] bg-teal-600"></span>

            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
              Real-Time Generation
            </span>
          </div>


          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Evidence Created at the Moment of Truth
          </h2>


          <p className="max-w-xl mx-auto mt-5 text-base md:text-lg text-slate-500 dark:text-slate-400 leading-7">
            Evidence is not assembled retrospectively from logs. It is
            constructed at the instant the event occurs — no delay, no
            reconstruction, no gaps.
          </p>

        </div>


        {/* Evidence Card */}
        <div className="
          bg-white dark:bg-slate-900
          rounded-2xl
          border border-slate-200 dark:border-slate-800
          shadow-sm
          overflow-hidden
        ">

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
          ">

            {steps.map((step, index) => (

              <div
                key={step.number}
                className={`
                  relative
                  flex flex-col items-center
                  text-center
                  px-6 py-10
                  ${
                    index !== steps.length - 1
                      ? "lg:border-r border-slate-200 dark:border-slate-800"
                      : ""
                  }
                `}
              >

                {/* Icon */}
                <div className="
                  w-14 h-14
                  flex items-center justify-center
                  rounded-3xl
                  bg-emerald-50
                  dark:bg-emerald-900/30
                  border-2 border-teal-600/20
                  text-2xl
                ">
                  {step.icon}
                </div>


                {/* Number */}
                <div className="
                  mt-5
                  text-[10px]
                  font-bold
                  tracking-wide
                  text-teal-600
                ">
                  {step.number}
                </div>


                {/* Title */}
                <h3 className="
                  mt-3
                  text-base
                  font-bold
                  text-slate-900
                  dark:text-white
                  leading-6
                ">
                  {step.title}
                </h3>


                {/* Description */}
                <p className="
                  mt-4
                  text-xs
                  leading-5
                  text-slate-500
                  dark:text-slate-400
                  max-w-[170px]
                ">
                  {step.description}
                </p>


                {/* Tag */}
                <div className="
                  mt-8
                  px-4 py-1
                  rounded-full
                  bg-emerald-50
                  dark:bg-emerald-900/40
                  border border-emerald-200
                  dark:border-emerald-800
                  text-xs
                  font-semibold
                  text-teal-700
                  dark:text-teal-300
                ">
                  {step.tag}
                </div>


                {/* Arrow */}
                {index !== steps.length - 1 && (
                  <div className="
                    hidden
                    lg:flex
                    absolute
                    right-[-12px]
                    top-1/2
                    -translate-y-1/2
                    w-6 h-6
                    rounded-xl
                    bg-white
                    dark:bg-slate-900
                    border
                    border-teal-600/30
                    items-center
                    justify-center
                    text-teal-600
                  ">
                    →
                  </div>
                )}

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}