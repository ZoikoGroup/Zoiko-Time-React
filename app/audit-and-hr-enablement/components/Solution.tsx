"use client";

const layers = [
  {
    number: "1",
    label: "Trigger Layer",
    title: "Event Detection",
    points: [
      "Intelligence signals and behavioural insights",
      "Policy anomalies and threshold breaches",
      "Scheduled or event-driven policy triggers",
    ],
    message:
      "Every decision begins with a structured, verified trigger — not assumption.",
  },
  {
    number: "2",
    label: "🧠 Decision Framework Engine",
    title: "Governed Decision Logic",
    points: [
      "Classifies the decision type required",
      "Maps applicable policies and regulatory frameworks",
      "Determines required approvals and stakeholders",
    ],
    message:
      "Ensures consistency across the entire organisation — same rules, every time.",
    core: true,
  },
  {
    number: "3",
    label: "📁 Case Management System",
    title: "Enterprise-Grade Structure",
    points: [
      "Unique case ID issued on creation",
      "Stakeholders assigned and notified automatically",
      "Evidence linked, status tracked end-to-end",
    ],
    message:
      "Every event becomes a governed case — not an informal conversation.",
  },
  {
    number: "4",
    label: "Workflow Orchestration",
    title: "Automated Process Execution",
    points: [
      "Multi-step workflows with role-based task assignment",
      "Conditional logic and branching decision paths",
      "Escalation paths for time-sensitive actions",
    ],
    message:
      "Policy is embedded in execution — not just documented in a handbook.",
  },
  {
    number: "5",
    label: "Decision Layer",
    title: "Structured Decision Making",
    points: [
      "Formal decision point with policy reference",
      "Justification recorded and linked to evidence",
      "Immutable decision record with audit metadata",
    ],
    message:
      "Every outcome is traceable, defensible, and auditable.",
  },
  {
    number: "6",
    label: "🔁 Outcome & Feedback Layer",
    title: "Closed-Loop Intelligence",
    points: [
      "Tracks the downstream result of every decision",
      "Measures impact on individual and team performance",
      "Feeds patterns back to improve future frameworks",
    ],
    message:
      "The system learns and improves — closed-loop intelligence that evolves.",
  },
];

export default function Solution() {
  return (
    <section
    id="hr-workflows"
      className="
      w-full
      bg-white
      px-4 py-16
      text-slate-900
      sm:px-6
      lg:px-8 lg:py-24
      dark:bg-slate-950
      dark:text-slate-100
      "
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p
            className="
            text-xs font-bold
            uppercase tracking-widest
            text-teal-600
            dark:text-teal-400
            "
          >
            The Solution
          </p>


          <h2
            className="
            mt-6
            text-3xl
            font-bold
            leading-tight
            tracking-tight
            text-slate-900
            sm:text-4xl
            lg:text-5xl
            dark:text-white
            "
          >
            The Workforce Decision Operating System
          </h2>


          <p
            className="
            mx-auto mt-6
            max-w-2xl
            text-base
            leading-7
            text-slate-600
            sm:text-lg
            dark:text-slate-400
            "
          >
            Six integrated layers that convert raw intelligence into structured,
            governed, and traceable enterprise decisions.
          </p>

        </div>


        {/* Cards */}
        <div
          className="
          mt-14
          grid
          grid-cols-1
          gap-6
          lg:mt-20
          lg:grid-cols-2
          "
        >

          {layers.map((layer) => (

            <article
              key={layer.number}
              className={`
              relative
              min-h-[390px]
              rounded-2xl
              border
              p-7
              shadow-xl
              transition-all
              duration-300
              sm:p-8

              ${
                layer.core
                  ? `
                  border-teal-500/40
                  bg-gradient-to-br
                  from-teal-50
                  via-white
                  to-white
                  dark:from-teal-950/70
                  dark:via-slate-900
                  dark:to-slate-900
                  `
                  :
                  `
                  border-slate-200
                  bg-white
                  dark:border-slate-800
                  dark:bg-slate-900
                  `
              }
              `}
            >


              {/* Core Badge */}
              {layer.core && (
                <div
                  className="
                  absolute
                  right-0 top-0
                  rounded-bl-xl
                  rounded-br-xl
                  bg-teal-500
                  px-4 py-2
                  "
                >
                  <span
                    className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-slate-950
                    "
                  >
                    Core Engine
                  </span>
                </div>
              )}


              {/* Number */}
              <div
                className="
                flex
                h-8 w-8
                items-center justify-center
                rounded-full
                border
                border-teal-500/40
                bg-teal-100
                text-xs
                font-bold
                text-teal-700
                dark:bg-teal-950
                dark:text-teal-400
                "
              >
                {layer.number}
              </div>



              <div className="mt-8">

                <p
                  className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-slate-500
                  "
                >
                  {layer.label}
                </p>


                <h3
                  className="
                  mt-4
                  text-xl
                  font-bold
                  leading-8
                  text-slate-900
                  sm:text-2xl
                  dark:text-white
                  "
                >
                  {layer.title}
                </h3>


                {/* Points */}
                <ul className="mt-6 space-y-4">

                  {layer.points.map((point) => (

                    <li
                      key={point}
                      className="
                      flex
                      items-start
                      gap-3
                      text-sm
                      leading-6
                      text-slate-600
                      dark:text-slate-400
                      "
                    >

                      <span
                        className="
                        mt-2
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-teal-500
                        "
                      />

                      <span>{point}</span>

                    </li>

                  ))}

                </ul>



                {/* Message */}
                <div
                  className="
                  mt-8
                  rounded-r-lg
                  border-l-2
                  border-teal-500
                  bg-teal-50
                  px-4 py-4
                  dark:bg-teal-950/50
                  "
                >

                  <p
                    className="
                    text-xs
                    font-semibold
                    leading-5
                    text-teal-700
                    sm:text-sm
                    dark:text-teal-300
                    "
                  >
                    {layer.message}
                  </p>

                </div>


              </div>


            </article>

          ))}

        </div>

      </div>
    </section>
  );
}