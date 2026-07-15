import React from "react";

const anomalies = [
  {
    icon: "🎭",
    title: (
      <>
        Behavioural
        <br />
        Manipulation
      </>
    ),
    description:
      "Activity patterns gamed to appear productive — idle masking, artificial engagement signals, and pattern exploitation designed to avoid detection by standard monitoring tools.",
    risk: "High Risk",
    method:
      "Multi-dimensional behavioural baseline deviation analysis with adversarial pattern recognition",
  },

  {
    icon: "⏱️",
    title: (
      <>
        Temporal
        <br />
        Exploitation
      </>
    ),
    description:
      "Time inflation tactics — clock manipulation, session extension without activity, and boundary exploitation at shift start and end — designed to inflate billable hours or payroll-eligible time.",
    risk: "Critical",
    method:
      "Temporal pattern analysis cross-referenced with output verification and session continuity signals",
  },

  {
    icon: "📍",
    title: (
      <>
        Location
        <br />
        Inconsistency
      </>
    ),
    description:
      "Geographic anomalies — impossible travel between sessions, jurisdiction-mismatched location claims, and location spoofing that creates compliance gaps or triggers incorrect policy frameworks.",
    risk: "High Risk",
    method:
      "Cross-session location plausibility analysis with device and network signal correlation",
  },

  {
    icon: "🕸️",
    title: "Coordinated Activity",
    description:
      "Multiple accounts or workers acting in coordination to manipulate platform metrics, inflate task counts, or game reward systems — invisible to per-account monitoring but detectable at network level.",
    risk: "Critical",
    method:
      "Network-level correlation of timing, device, output, and pattern signals across multiple accounts",
  },
];


export default function AnomalyCoverage() {
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
          Anomaly Coverage
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
          Designed to Detect Real-World Manipulation
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
          Each anomaly type has its own detection model, risk scoring
          framework, and financial impact calculation — built for the
          manipulation tactics that actually occur in enterprise workforces.
        </p>

      </div>


      {/* Cards */}

      <div
        className="
          max-w-[1200px]
          mx-auto
          mt-16
          px-5
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >
                {anomalies.map((item, index) => (
          <div
            key={index}
            className="
              relative
              min-h-[552px]
              bg-white
              dark:bg-slate-900
              rounded-xl
              border
              border-slate-200
              dark:border-slate-700
              shadow-sm
              overflow-hidden
              transition-colors
            "
          >

            {/* Top Gradient Line */}

            <div
              className="
                absolute
                top-0
                left-0
                w-full
                h-[3px]
                bg-gradient-to-r
                from-red-500
                to-orange-500
              "
            />


            <div
              className="
                p-8
              "
            >

              {/* Icon */}

              <div
                className="
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-red-50
                  dark:bg-red-950
                  border
                  border-red-500/20
                  text-xl
                "
              >
                {item.icon}
              </div>



              {/* Title */}

              <h3
                className="
                  mt-8
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
                  text-sm
                  leading-6
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {item.description}
              </p>



              {/* Detection Method Header + Risk */}

              <div
                className="
                  mt-8
                  flex
                  items-center
                  justify-between
                  gap-3
                "
              >

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-slate-400
                    dark:text-slate-500
                  "
                >
                  Detection
                  <br />
                  method
                </p>



                <span
                  className={`
                    px-3
                    py-2
                    rounded-full
                    text-xs
                    font-bold

                    ${
                      item.risk === "Critical"
                        ? `
                          bg-red-500
                          text-white
                        `
                        : `
                          bg-red-100
                          dark:bg-red-950
                          text-red-800
                          dark:text-red-300
                        `
                    }
                  `}
                >
                  {item.risk}
                </span>

              </div>
                            {/* Detection Method Description */}

              <p
                className="
                  mt-6
                  text-xs
                  leading-5
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {item.method}
              </p>


            </div>

          </div>
        ))}


      </div>


    </section>
  );
}