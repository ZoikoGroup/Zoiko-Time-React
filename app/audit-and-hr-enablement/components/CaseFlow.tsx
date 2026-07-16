"use client";

const steps = [
  {
    number: "STEP 01",
    title: "Case Created",
    description:
      "A trigger event automatically creates a case with a unique ID, timestamp, and classification. Relevant stakeholders are assigned and notified in real time.",
  },
  {
    number: "STEP 02",
    title: "Evidence Attached",
    description:
      "All relevant evidence — session records, time data, policy references, and behavioural signals — is automatically linked to the case.",
  },
  {
    number: "STEP 03",
    title: "Workflow Initiated",
    description:
      "The appropriate governance workflow launches automatically. Multi-step approval sequences, escalation paths, and role-based task assignments are activated.",
  },
  {
    number: "STEP 04",
    title: "Decision Made",
    description:
      "A structured decision is made within the governed workflow. The policy applied is referenced and the justification is formally recorded against the case.",
  },
  {
    number: "STEP 05",
    title: "Outcome Recorded",
    description:
      "The result of the decision — including downstream actions, notifications, and adjustments — is captured and linked to the case record.",
  },
  {
    number: "STEP 06",
    title: "Case Closed",
    description:
      "The case is formally closed with an immutable audit record. All evidence, decisions, and outcomes are sealed and immediately available for HR review or regulatory audit.",
  },
];

export default function CaseFlow() {
  return (
    <section className="w-full bg-slate-950 px-4 py-16 text-slate-100 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-400">
            Case Management
          </p>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            From Detection to Resolution Fully Structured
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            An end-to-end case lifecycle that ensures no issue falls through the
            cracks — every step documented, every decision defensible.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="min-h-[220px] rounded-2xl border border-slate-800 bg-slate-900 p-7 shadow-xl transition-all duration-300 hover:border-teal-500/40 sm:p-8"
            >
              <p className="font-mono text-xs font-bold tracking-wider text-teal-400">
                {step.number}
              </p>

              <h3 className="mt-4 text-lg font-bold leading-7 text-white">
                {step.title}
              </h3>

              <p className="mt-5 text-sm leading-6 text-slate-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}