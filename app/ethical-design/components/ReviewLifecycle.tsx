import StatusPill, { type Tone } from "./StatusPill";

const stages = [
  {
    number: "01",
    title: "Define need",
    body: "Evidence-backed need, affected people, intended benefit, non-goals, current process.",
    owner: "Product",
  },
  {
    number: "02",
    title: "Map context",
    body: "Data, authority, policies, jurisdictions, dependencies, power asymmetries, alternatives.",
    owner: "Product & Governance",
  },
  {
    number: "03",
    title: "Assess",
    body: "Benefits, harms, exclusion, coercion, misuse, differential impact, failure modes.",
    owner: "Cross-functional",
  },
  {
    number: "04",
    title: "Design safeguards",
    body: "Minimization, safe defaults, permissions, human review, correction, alternatives.",
    owner: "Design & Engineering",
  },
  {
    number: "05",
    title: "Test",
    body: "Accessibility, privacy, security, fairness, reliability, usability, abuse, recovery.",
    owner: "Specialist owners",
  },
  {
    number: "06",
    title: "Review residuals",
    body: "Remaining limitations, evidence sufficiency, operating ownership, notices, training.",
    owner: "Governance",
  },
  {
    number: "07",
    title: "Approve, restrict, defer or block",
    body: "Eligible human authority with separation of duties. Blocking is a legitimate outcome.",
    owner: "Human only",
    humanOnly: true,
  },
  {
    number: "08",
    title: "Release",
    body: "With current evidence, monitoring thresholds, issue routes, and rollback capacity.",
    owner: "Operating owner",
  },
  {
    number: "09",
    title: "Monitor",
    body: "Feedback, incidents, complaints, differential outcomes, accessibility barriers, misuse.",
    owner: "Operating owner",
  },
  {
    number: "10",
    title: "Correct or retire",
    body: "Correct, restrict, roll back, supersede, withdraw, or retire — preserving history.",
    owner: "Governance",
  },
];

const gates = [
  "Unclear or illegitimate purpose, no accountable owner, or no affected-person analysis.",
  "Prohibited surveillance data, or any hidden monitoring exception.",
  "An automatic consequential decision, missing human review, or no correction and challenge path.",
  "Unresolved high-impact privacy, security, accessibility, fairness, reliability, or abuse gap beyond the approved boundary.",
  "Insufficient source context, stale evidence, or unsupported certainty for a consequential action.",
  "No operating owner, incident route, support route, rollback, recovery, or correction capability.",
  "A material jurisdiction or consultation dependency left unresolved, or represented as a product legal conclusion.",
  "A public ethical, fairness, accessibility, or safety claim without current scoped evidence.",
];

const releaseStates: { label: string; tone: Tone }[] = [
  { label: "Draft", tone: "neutral" },
  { label: "Review required", tone: "amber" },
  { label: "Blocked", tone: "red" },
  { label: "Restricted", tone: "violet" },
  { label: "Approved", tone: "green" },
  { label: "Released", tone: "green" },
  { label: "Monitoring", tone: "blue" },
  { label: "Corrective action", tone: "amber" },
  { label: "Superseded", tone: "neutral" },
  { label: "Withdrawn", tone: "red" },
];

export default function ReviewLifecycle() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Governed Design-Review Lifecycle
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Ten Stages, and Eight Things That Block Release
          </h2>

        </div>

        {/* Lifecycle */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">

          {stages.map((stage) => (
            <div
              key={stage.number}
              className={`flex flex-col border-b border-stone-100 last:border-b-0 sm:flex-row sm:items-center dark:border-slate-800 ${
                stage.humanOnly ? "bg-[#F5FEF7] dark:bg-emerald-950/20" : ""
              }`}
            >

              {/* Number */}
              <div className="flex shrink-0 items-center justify-center px-4 py-3 sm:w-14 sm:self-stretch sm:border-r sm:border-stone-100 sm:py-7 dark:sm:border-slate-800">
                <span
                  className={`text-xs font-extrabold leading-5 ${
                    stage.humanOnly
                      ? "text-emerald-800 dark:text-emerald-400"
                      : "text-zinc-500 dark:text-slate-400"
                  }`}
                >
                  {stage.number}
                </span>
              </div>

              {/* Detail */}
              <div className="flex flex-1 flex-col gap-0.5 px-4 pb-3.5 sm:py-3.5">

                <h3 className="text-sm font-bold leading-6 text-sky-950 dark:text-white">
                  {stage.title}
                </h3>

                <p className="text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                  {stage.body}
                </p>

              </div>

              {/* Owner */}
              <div className="flex px-4 pb-4 sm:w-48 sm:shrink-0 sm:items-center sm:self-stretch sm:border-l sm:border-stone-100 sm:py-4 dark:sm:border-slate-800">
                <span
                  className={`text-xs leading-5 ${
                    stage.humanOnly
                      ? "font-bold text-emerald-800 dark:text-emerald-400"
                      : "font-normal text-zinc-500 dark:text-slate-400"
                  }`}
                >
                  {stage.owner}
                </span>
              </div>

            </div>
          ))}

        </div>

        {/* Release-blocking gates */}
        <h3 className="mt-10 text-base font-bold leading-6 text-sky-950 dark:text-white">
          Eight release-blocking gates
        </h3>

        <div className="mt-4 flex flex-col gap-2.5">
          {gates.map((gate) => (
            <div
              key={gate}
              className="flex gap-4 rounded-xl border border-[#F7DBE6] bg-[#FEFAF9] px-5 py-3.5 dark:border-red-900/40 dark:bg-red-950/10"
            >

              <span
                className="shrink-0 text-sm font-normal leading-6 text-red-400"
                aria-hidden="true"
              >
                –
              </span>

              <p className="text-sm font-normal leading-6 text-red-800 dark:text-red-200/80">
                {gate}
              </p>

            </div>
          ))}
        </div>

        {/* Release states */}
        <p className="mt-10 text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
          Ten release states
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {releaseStates.map((state) => (
            <StatusPill key={state.label} label={state.label} tone={state.tone} />
          ))}
        </div>

        <p className="mt-4 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
          Blocked cannot be bypassed without an authorized, scoped, and
          time-bound exception policy. Monitoring does not imply failure, but it
          may restrict expansion.
        </p>

      </div>
    </section>
  );
}
