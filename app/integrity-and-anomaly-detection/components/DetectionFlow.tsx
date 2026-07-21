import React from "react";

const flowSteps = [
  {
    number: "01",
    label: "CAPTURE",
    title: "Activity Captured",
    icon: "📡",
    color: "teal",
    description:
      "Every workforce event enters the verified input pipeline in real time — session, task, and context signals recorded.",
  },
  {
    number: "02",
    label: "BASELINE",
    title: "Compared to Baseline",
    icon: "📐",
    color: "teal",
    description:
      "Activity is measured against the individual's established behavioural baseline across all dimensions simultaneously.",
  },
  {
    number: "03",
    label: "DETECT",
    title: "Anomaly Detected",
    icon: "⚠️",
    color: "amber",
    description:
      "The Adversarial Detection Engine identifies a deviation. Manipulation tactic is classified. Pattern severity assessed.",
  },
  {
    number: "04",
    label: "ASSESS",
    title: "Risk Assessed",
    icon: "🎯",
    color: "red",
    description:
      "Risk score, confidence level, financial exposure, and recurrence probability are calculated — decision-grade intelligence.",
  },
  {
    number: "05",
    label: "CONTROL",
    title: "Control Triggered",
    icon: "🛑",
    color: "red",
    description:
      "Automated response is executed proportionate to risk level — flag, restrict, escalate, or require re-verification instantly.",
  },
  {
    number: "06",
    label: "RECORD",
    title: "Evidence Recorded",
    icon: "🔏",
    color: "green",
    description:
      "A tamper-evident evidence object is created — raw data, analysis, response, and chain of custody sealed and audit-ready.",
  },
];


export default function DetectionFlow() {

  return (
    <section
    id="detection-flow"
      className="
        w-full
        bg-slate-100
        dark:bg-slate-950
        py-24
        transition-colors
      "
    >

      {/* Heading */}

      <div
        className="
          max-w-4xl
          mx-auto
          text-center
          px-5
        "
      >

        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-teal-600
          "
        >
          Detection Flow
        </p>


        <h2
          className="
            mt-5
            text-3xl
            md:text-4xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          From Activity to Controlled Response — In Seconds
        </h2>


        <p
          className="
            mt-5
            text-base
            md:text-lg
            leading-7
            text-slate-500
            dark:text-slate-400
          "
        >
          The complete integrity lifecycle — from the moment a suspicious
          activity occurs to the point the control response is executed and
          the evidence record is sealed.
        </p>

      </div>


      {/* Flow Container */}

      <div
        className="
          max-w-[1040px]
          mx-auto
          mt-16
          bg-white
          dark:bg-slate-900
          rounded-2xl
          border
          border-slate-200
          dark:border-slate-700
          shadow-sm
          overflow-hidden
        "
      >

        {/* Header Bar */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
            px-7
            py-5
            bg-slate-100
            dark:bg-slate-800
            border-b
            border-slate-200
            dark:border-slate-700
          "
        >

          <h3
            className="
              text-sm
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            Integrity Control Lifecycle — Automated Flow
          </h3>


          <span
            className="
              px-4
              py-2
              rounded-md
              bg-emerald-50
              dark:bg-emerald-950
              text-teal-600
              text-xs
              font-medium
            "
          >
            &lt; 3 seconds end-to-end
          </span>

        </div>
                {/* Flow Steps */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-6
          "
        >

          {flowSteps.map((step, index) => (
            <div
              key={step.number}
              className="
                relative
                px-5
                py-8
                text-center
                border-b
                md:border-b-0
                md:border-r
                border-slate-200
                dark:border-slate-700
                last:border-r-0
              "
            >

              {/* Icon */}

              <div
                className={`
                  mx-auto
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  rounded-3xl
                  text-xl
                  border-2

                  ${
                    step.color === "red"
                      ? `
                        bg-red-100
                        dark:bg-red-950
                        border-red-300
                      `
                      : step.color === "amber"
                      ? `
                        bg-amber-100
                        dark:bg-amber-950
                        border-amber-200
                      `
                      : step.color === "green"
                      ? `
                        bg-emerald-50
                        dark:bg-emerald-950
                        border-emerald-200
                      `
                      : `
                        bg-emerald-50
                        dark:bg-emerald-950
                        border-teal-600/20
                      `
                  }
                `}
              >
                {step.icon}
              </div>



              {/* Step Label */}

              <p
                className={`
                  mt-8
                  text-[10px]
                  font-bold
                  tracking-wide
                  uppercase

                  ${
                    step.color === "red"
                      ? "text-red-500"
                      : step.color === "amber"
                      ? "text-amber-600"
                      : step.color === "green"
                      ? "text-emerald-600"
                      : "text-teal-600"
                  }
                `}
              >
                {step.number} — {step.label}
              </p>



              {/* Title */}

              <h4
                className="
                  mt-3
                  text-xs
                  font-bold
                  leading-5
                  text-slate-900
                  dark:text-white
                "
              >
                {step.title}
              </h4>



              {/* Description */}

              <p
                className="
                  mt-5
                  text-xs
                  leading-4
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {step.description}
              </p>



              {/* Arrow Desktop */}

              {index !== flowSteps.length - 1 && (
                <div
                  className="
                    hidden
                    md:flex
                    absolute
                    right-[-10px]
                    top-1/2
                    -translate-y-1/2
                    w-5
                    h-5
                    rounded-full
                    bg-white
                    dark:bg-slate-900
                    border
                    border-slate-300
                    dark:border-slate-600
                    items-center
                    justify-center
                    z-10
                  "
                >

                  <span
                    className="
                      text-[10px]
                      font-bold
                      text-slate-500
                    "
                  >
                    →
                  </span>

                </div>
              )}


              {/* Mobile Arrow */}

              {index !== flowSteps.length - 1 && (
                <div
                  className="
                    md:hidden
                    mt-5
                    text-slate-400
                    text-sm
                  "
                >
                  ↓
                </div>
              )}

            </div>
          ))}

        </div>
              </div>

    </section>
  );
}