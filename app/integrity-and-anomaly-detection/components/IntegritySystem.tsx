import React from "react";

const layers = [
  {
    id: "1",
    category: "Verified Input Layer",
    title: "Clean Data at the Source",
    points: [
      "Session validation confirms every data point before it enters the integrity pipeline",
      "Identity assurance links all activity to a verified worker — no anonymous inputs",
      "Policy-aligned capture rules prevent unauthorised data from entering the system",
    ],
    footer:
      "Integrity begins at capture — not retrospectively during review.",
  },

  {
    id: "2",
    category: "Behavioural Baseline Engine",
    title: "Individual Normal Defined",
    points: [
      "Establishes a dynamic normal pattern per worker, role, team, and jurisdiction over time",
      "Baseline updates continuously — distinguishing genuine change from manipulation attempts",
      "Multi-dimensional baseline: time, volume, pace, location, tool usage, and output quality",
    ],
    footer:
      "Anomalies are only detectable against a known baseline — this layer builds it.",
  },

  {
    id: "3",
    category: "🧠 Adversarial Detection Engine",
    title: "Manipulation Intelligence",
    highlight: "Adversarial Engine",
    type: "green",
    points: [
      "Identifies active manipulation tactics — not just statistical outliers",
      "Detects system gaming, rule exploitation, and coordinated fraud across accounts",
      "Recognises evolving threat patterns that adapt to avoid standard detection methods",
    ],
    tags: [
      "Idle masking",
      "Time inflation",
      "Multi-user manipulation",
      "Pattern exploitation",
    ],
    footer:
      "Built to detect adversarial intent — not just unintentional deviation.",
  },

  {
    id: "4",
    category: "Risk Intelligence Engine",
    title: "Decision-Grade Risk Assessment",
    points: [
      "Each anomaly is scored for severity, confidence level, and financial exposure",
      "Recurrence probability determines whether this is an isolated event or a systemic pattern",
      "Risk intelligence drives proportionate response — low risk flagged, high risk controlled",
    ],
    footer:
      "Risk scores that drive action — not just alert counts that create noise.",
  },

  {
    id: "5",
    category: "🛑 Control & Response Engine",
    title: "Active Control — Not Passive Monitoring",
    highlight: "Active Control",
    type: "red",
    points: [
      "System takes immediate automated action — does not wait for human review to begin",
      "Response is proportionate to risk — flagging, restriction, escalation, or re-verification",
      "Every control action is logged with a justification, risk context, and immutable audit trail",
    ],
    tags: [
      "⚑ Flag activity",
      "🚫 Restrict session",
      "↑ Escalate case",
      "🔐 Require re-verification",
    ],
    footer:
      "This is a control system. The response happens — with or without a human initiating it.",
  },

  {
    id: "6",
    category: "Evidence Chain Layer",
    title: "Forensic-Grade Anomaly Records",
    points: [
      "Every detected anomaly generates a structured evidence object — not just an alert log",
      "Raw activity data, pattern analysis, and detection logic are all embedded in the record",
      "Chain of custody, integrity hash, and immutable timestamp ensure court-defensible evidence",
    ],
    footer:
      "Every anomaly is a case — not an entry in a log file.",
  },
];


export default function IntegritySystem() {

  return (
    <section
      className="
        w-full
        bg-white
        dark:bg-slate-950
        py-20
        transition-colors
      "
    >

      {/* Header */}

      <div
        className="
          max-w-3xl
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
          The System
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
          The Integrity Intelligence System
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
          Six layers that detect manipulation, assess risk, and enforce
          control — from verified data capture through to forensic-grade
          evidence for every anomaly.
        </p>

      </div>


      {/* Cards Grid */}

      <div
        className="
          max-w-[1200px]
          mx-auto
          mt-16
          px-5
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
        "
      >
                {layers.map((layer) => (
          <div
            key={layer.id}
            className={`
              relative
              rounded-xl
              p-8
              border
              shadow-sm
              transition-all
              ${
                layer.type === "green"
                  ? `
                    bg-gradient-to-br
                    from-emerald-50
                    to-slate-50
                    dark:from-emerald-950
                    dark:to-slate-900
                    border-teal-600/30
                  `
                  : layer.type === "red"
                  ? `
                    bg-gradient-to-br
                    from-red-50
                    to-neutral-50
                    dark:from-red-950
                    dark:to-slate-900
                    border-red-500/20
                  `
                  : `
                    bg-white
                    dark:bg-slate-900
                    border-slate-200
                    dark:border-slate-700
                  `
              }
            `}
          >

            {/* Top Highlight Badge */}

            {layer.highlight && (
              <div
                className={`
                  absolute
                  right-0
                  top-0
                  px-5
                  py-2
                  rounded-bl-lg
                  rounded-br-lg
                  text-xs
                  font-bold
                  uppercase
                  tracking-wide
                  text-white
                  ${
                    layer.type === "red"
                      ? "bg-red-500"
                      : "bg-teal-600"
                  }
                `}
              >
                {layer.highlight}
              </div>
            )}


            {/* Number */}

            <div
              className={`
                w-8
                h-8
                rounded-2xl
                flex
                items-center
                justify-center
                text-sm
                font-bold
                mb-8

                ${
                  layer.type === "red"
                    ? `
                      bg-red-50
                      dark:bg-red-900
                      text-red-500
                      border
                      border-red-300
                    `
                    : `
                      bg-emerald-50
                      dark:bg-emerald-900
                      text-teal-600
                      border
                      border-teal-600/30
                    `
                }
              `}
            >
              {layer.id}
            </div>



            {/* Category */}

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-slate-400
                dark:text-slate-500
              "
            >
              {layer.category}
            </p>



            {/* Title */}

            <h3
              className="
                mt-4
                text-xl
                font-bold
                leading-8
                text-slate-900
                dark:text-white
              "
            >
              {layer.title}
            </h3>



            {/* Points */}

            <div
              className="
                mt-6
                space-y-5
              "
            >

              {layer.points.map((point, index) => (
                <div
                  key={index}
                  className="
                    flex
                    gap-4
                    items-start
                  "
                >

                  <span
                    className={`
                      mt-2
                      w-1.5
                      h-1.5
                      rounded-full
                      flex-shrink-0

                      ${
                        layer.type === "red"
                          ? "bg-red-500"
                          : "bg-teal-600"
                      }
                    `}
                  />


                  <p
                    className="
                      text-sm
                      leading-5
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {point}
                  </p>

                </div>
              ))}

            </div>



            {/* Tags */}

            {layer.tags && (
              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-3
                "
              >

                {layer.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`
                      px-4
                      py-2
                      rounded-full
                      text-xs
                      font-semibold

                      ${
                        layer.type === "red"
                          ? `
                            bg-red-100
                            dark:bg-red-900/40
                            text-red-800
                            dark:text-red-300
                            border
                            border-red-300
                          `
                          : `
                            bg-amber-100
                            dark:bg-amber-900/40
                            text-amber-800
                            dark:text-amber-300
                            border
                            border-amber-200
                          `
                      }
                    `}
                  >
                    {tag}
                  </span>
                ))}

              </div>
            )}
                        {/* Footer Message */}

            <div
              className={`
                mt-8
                rounded-tr-md
                rounded-br-md
                border-l-2
                px-5
                py-4

                ${
                  layer.type === "red"
                    ? `
                      bg-red-50
                      dark:bg-red-950/40
                      border-red-500
                    `
                    : `
                      bg-emerald-50
                      dark:bg-emerald-950/40
                      border-teal-600
                    `
                }
              `}
            >

              <p
                className={`
                  text-xs
                  font-semibold
                  leading-5

                  ${
                    layer.type === "red"
                      ? `
                        text-red-800
                        dark:text-red-300
                      `
                      : `
                        text-teal-700
                        dark:text-teal-300
                      `
                  }
                `}
              >
                {layer.footer}
              </p>

            </div>


          </div>
        ))}

      </div>

    </section>
  );
}