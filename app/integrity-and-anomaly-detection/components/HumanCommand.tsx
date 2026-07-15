import React from "react";

const steps = [
  {
    icon: "🧠",
    step: "STEP 01",
    title: "Detection",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    border: "border-teal-600/20",
    description:
      "AI-powered detection engines identify anomalies, classify manipulation tactics, and surface behavioural patterns in real time — across every worker and region simultaneously.",
  },
  {
    icon: "🎯",
    step: "STEP 02",
    title: "Risk Scoring",
    bg: "bg-amber-100 dark:bg-amber-950/40",
    border: "border-amber-200",
    description:
      "Every detected anomaly is assessed for severity, financial exposure, and recurrence probability — producing decision-grade risk intelligence that prioritises human attention on what matters most.",
  },
  {
    icon: "🛑",
    step: "STEP 03",
    title: "Control Action",
    bg: "bg-red-100 dark:bg-red-950/40",
    border: "border-red-300",
    description:
      "Automated control is executed proportionate to risk — session restrictions, billing blocks, and escalation triggers fire immediately without requiring human initiation, preventing further loss.",
  },
  {
    icon: "👤",
    step: "STEP 04",
    title: "Human Review",
    bg: "bg-indigo-50 dark:bg-indigo-950/40",
    border: "border-indigo-500/20",
    description:
      "The right human — HR, compliance, finance, or legal — receives a fully evidenced case with risk context, financial exposure, and control history, enabling informed decisions without starting from zero.",
  },
];


export default function HumanCommand() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-20">

      <div className="max-w-[1040px] mx-auto px-5">


        {/* Header */}
        <div className="text-center mb-14">

          <div className="flex justify-center items-center gap-3">
            <span className="w-6 h-[2px] bg-teal-600" />

            <p className="
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-teal-600
            ">
              Human-in-Command
            </p>
          </div>


          <h2 className="
            mt-5
            text-3xl md:text-4xl
            font-bold
            text-slate-900
            dark:text-white
          ">
            AI Detects. System Controls. Humans Decide.
          </h2>


          <p className="
            mt-5
            max-w-xl
            mx-auto
            text-base md:text-lg
            leading-7
            text-slate-500
            dark:text-slate-400
          ">
            ZoikoTime automates detection and control at machine speed —
            while ensuring human judgement governs every consequential
            outcome, investigation, and resolution.
          </p>

        </div>

                {/* Steps Card */}
        <div
          className="
            bg-white
            dark:bg-slate-900
            rounded-2xl
            border
            border-slate-200
            dark:border-slate-700
            shadow-sm
            overflow-hidden
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {steps.map((item, index) => (
            <div
              key={index}
              className={`
                relative
                p-8
                text-center
                ${index !== steps.length - 1 
                  ? "lg:border-r border-slate-200 dark:border-slate-700" 
                  : ""}
              `}
            >

              {/* Icon */}
              <div
                className={`
                  mx-auto
                  w-14
                  h-14
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  ${item.bg}
                  ${item.border}
                `}
              >
                <span className="
                  text-2xl
                  text-slate-700
                  dark:text-slate-200
                ">
                  {item.icon}
                </span>
              </div>


              {/* Step */}
              <p
                className="
                  mt-7
                  text-xs
                  font-bold
                  tracking-widest
                  text-teal-600
                "
              >
                {item.step}
              </p>


              {/* Title */}
              <h3
                className="
                  mt-3
                  text-base
                  font-bold
                  leading-7
                  text-slate-900
                  dark:text-white
                "
              >
                {item.title}
              </h3>


              {/* Description */}
              <p
                className="
                  mt-5
                  text-xs
                  leading-5
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {item.description}
              </p>


              {/* Arrow */}
              {index !== steps.length - 1 && (
                <div
                  className="
                    hidden
                    lg:flex
                    absolute
                    right-[-12px]
                    top-[165px]
                    w-6
                    h-6
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    dark:bg-slate-900
                    border
                    border-teal-600/30
                    z-10
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      text-teal-600
                    "
                  >
                    →
                  </span>
                </div>
              )}

            </div>
          ))}

        </div>

              </div>

    </section>
  );
}