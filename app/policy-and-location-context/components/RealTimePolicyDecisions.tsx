import React from "react";

const steps = [
  {
    number: "1",
    title: "Context Detected",
    description:
      "Location, role, time, workforce type and employment classification captured",
    input: "GPS + session + HR record",
    output: "Context profile generated",
  },
  {
    number: "2",
    title: "Policies Identified",
    description:
      "All applicable laws and org policies retrieved for this context profile",
    input: "Context profile + policy library",
    output: "Candidate policy set",
  },
  {
    number: "3",
    title: "Conflicts Resolved",
    description:
      "Competing rules evaluated; legal hierarchy applied; binding rule selected",
    input: "Candidate policy set",
    output: "Binding rule with priority log",
  },
  {
    number: "4",
    title: "Rule Applied",
    description:
      "Resolved rule enforced in real time across payroll, scheduling and workforce systems",
    input: "Binding rule",
    output: "Compliant workforce action",
  },
  {
    number: "5",
    title: "Compliance Status Generated",
    description:
      "Full decision log created; compliance score updated; alert sent if threshold breached",
    input: "Action taken + policy applied",
    output: "Audit record + compliance score",
  },
];

export default function RealTimePolicyDecisions() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 py-16 px-5 transition-colors">

      <div
        className="
        max-w-[1104px]
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-[420px_1fr]
        gap-12
        "
      >

        {/* LEFT */}
        <div>

          <p className="text-xs font-semibold uppercase tracking-wider text-teal-500 mb-8">
            Real-Time Policy Decisions
          </p>


          <h2
            className="
            text-3xl
            md:text-4xl
            font-bold
            leading-tight
            text-slate-900
            dark:text-white
            mb-6
            "
          >
            From Context to
            <br />
            Compliance — Instantly
          </h2>


          <p
            className="
            text-base
            leading-7
            text-slate-500
            dark:text-slate-400
            mb-10
            "
          >
            Every policy decision follows the same five-step process.
            Each step exposes its inputs, decision logic, and output —
            ensuring full traceability from context signal to compliant
            action.
          </p>


          {steps.map((step, index) => (
            <div
              key={index}
              className="
              py-5
              border-b
              border-slate-200
              dark:border-slate-800
              "
            >

              <div className="flex gap-4">

                <div
                  className="
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  shrink-0
                  rounded-2xl
                  bg-teal-500/10
                  border
                  border-teal-500/30
                  text-teal-500
                  text-xs
                  font-bold
                  "
                >
                  {step.number}
                </div>


                <div className="flex-1">

                  <h3
                    className="
                    text-base
                    font-bold
                    text-slate-900
                    dark:text-white
                    "
                  >
                    {step.title}
                  </h3>


                  <p
                    className="
                    mt-2
                    text-xs
                    leading-5
                    text-slate-500
                    dark:text-slate-400
                    "
                  >
                    {step.description}
                  </p>


                  <div className="mt-5 space-y-2 text-xs">

                    <div className="flex gap-3">

                      <span className="uppercase font-bold tracking-wide text-slate-400">
                        In
                      </span>

                      <span className="text-slate-500 dark:text-slate-400">
                        {step.input}
                      </span>

                    </div>


                    <div className="flex gap-3">

                      <span className="uppercase font-bold tracking-wide text-slate-400">
                        Out
                      </span>

                      <span className="font-bold text-teal-500">
                        {step.output}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          ))}


        </div>


        {/* RIGHT IMAGE */}

        <div
          className="
          w-full
          h-[600px]
          lg:h-[1045px]
          rounded-2xl
          overflow-hidden
          border
          border-slate-200
          dark:border-slate-800
          bg-neutral-200
          dark:bg-slate-900
          shadow-[0px_2px_16px_rgba(10,22,40,0.07)]
          "
        >

          <img
            src="/RealTimePolicyDecisions/image.png"
            alt="Real time policy decisions"
            className="
            w-full
            h-full
            object-cover
            "
          />

        </div>


      </div>

    </section>
  );
}