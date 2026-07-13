"use client";

const steps = [
  {
    number: "01",
    title: "Data Collected",
    description:
      "Session initiated — identity signals, device fingerprint, and location signal captured at session start. Baseline comparison initiated against 90-day individual profile.",
    tag: "08:01:14",
  },
  {
    number: "02",
    title: "Validation Applied",
    description:
      "All four verification layers assessed — identity (97), session (95), device (98), location (94). All within policy threshold of 80 minimum.",
    tag: "Continuous",
  },
  {
    number: "03",
    title: "AI Reasoning Completed",
    description:
      "No anomalous patterns detected across 8.56 hours. Behavioural consistency with 90-day baseline confirmed. No manipulation indicators identified.",
    tag: "96 Confidence",
  },
  {
    number: "04",
    title: "Policy Applied",
    description:
      "Enterprise Remote Session Policy v3.2 — UK jurisdiction — all conditions met. Payroll approval threshold satisfied.",
    tag: "Policy Met",
  },
  {
    number: "05",
    title: "Outcome Recorded",
    description:
      "Session approved for payroll — 8.56 hours at verified rate. Evidence record SES-2026-08841 sealed with SHA-256 integrity hash.",
    tag: "Approved",
  },
];

export default function DecisionTrace() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-20">

      <div className="max-w-[1040px] mx-auto px-5">

        {/* Heading */}
        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Decision Trace
          </p>


          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Reconstruct Any Outcome Step by Step
          </h2>


          <p className="mt-5 text-base md:text-lg leading-7 text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
            Every outcome in ZoikoTime can be reconstructed chronologically —
            showing exactly what happened, when, why, and who was involved at
            each stage. Select a scenario to see a full trace.
          </p>

        </div>



        {/* Tabs */}
        <div className="mt-10 mx-auto flex max-w-fit overflow-hidden rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">

          <button className="px-5 py-3 bg-teal-600 text-white text-xs font-semibold">
            💰 Payroll Audit
          </button>

          <button className="px-5 py-3 text-xs font-semibold text-slate-500">
            ⚠️ Anomaly Detection
          </button>

          <button className="px-5 py-3 text-xs font-semibold text-slate-500">
            ⚖️ Compliance Alert
          </button>

        </div>



        {/* Trace Card */}
        <div className="mt-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">


          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 py-5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">

            <h3 className="text-xs font-bold text-slate-900 dark:text-white">
              Session Payroll Validation — USR-04417 — 2026-03-18
            </h3>


            <span className="px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-teal-700 dark:text-teal-400 text-xs font-bold">
              Accepted: 96/100
            </span>

          </div>



          {/* Steps */}
          <div>

            {steps.map((step)=>(

              <div
                key={step.number}
                className="flex gap-5 px-6 py-6 border-b border-slate-200 dark:border-slate-800"
              >

                {/* Number */}
                <div className="shrink-0 w-7 h-7 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-teal-600/25 flex items-center justify-center">

                  <span className="text-xs font-bold text-teal-600">
                    {step.number}
                  </span>

                </div>



                {/* Content */}
                <div className="flex-1">

                  <div className="flex flex-col md:flex-row md:justify-between gap-3">

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h4>


                    <span className="w-fit px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-teal-600 text-xs font-bold">
                      {step.tag}
                    </span>

                  </div>


                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {step.description}
                  </p>


                </div>

              </div>

            ))}

          </div>



          {/* Footer */}
          <div className="px-6 py-4 bg-emerald-50 dark:bg-emerald-950 border-t border-teal-600/10">

            <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 text-center">
              Every outcome can be reconstructed step-by-step — from first input
              signal through final payroll approval or rejection, with complete
              evidence at each stage.
            </p>

          </div>


        </div>


      </div>

    </section>
  );
}