import StatusPill, { type Tone } from "./StatusPill";

const gateStates: { label: string; tone: Tone }[] = [
  { label: "Not evaluated", tone: "neutral" },
  { label: "Blocked", tone: "red" },
  { label: "Ready for verification", tone: "blue" },
  { label: "Verified", tone: "green" },
  { label: "Partially verified", tone: "violet" },
  { label: "Exception requested", tone: "blue" },
  { label: "Authorized exception", tone: "amber" },
  { label: "Expired", tone: "neutral" },
  { label: "Reassessment required", tone: "amber" },
];

const triggers = [
  "Purpose or use case · data category or source",
  "Collection method · recipient · retention",
  "Region or provider · integration",
  "Model, rule, or classification change",
  "Role or access change · worker right change",
  "Interface, reporting, incident, or deployment scope",
];

export default function RolloutGates() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left — Rollout Gates */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Rollout Gates &amp; Implementation Handoff
            </p>

            <h2 className="mt-3.5 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              No Silent Production Activation
            </h2>

            <p className="mt-4 max-w-[560px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              A gate connects verified customer conditions to controlled
              configuration and deployment. When a required gate is blocked,
              nothing activates quietly.
            </p>

            <p className="mt-6 text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Gate states
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {gateStates.map((state) => (
                <StatusPill
                  key={state.label}
                  label={state.label}
                  tone={state.tone}
                />
              ))}
            </div>

            {/* Verification Callout */}
            <div className="mt-6 flex gap-3 rounded-xl border border-emerald-100 bg-emerald-50/40 p-5 dark:border-emerald-900/40 dark:bg-emerald-950/20">

              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="mt-0.5 shrink-0 text-emerald-800 dark:text-emerald-400"
                aria-hidden="true"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="7.5"
                  stroke="currentColor"
                  strokeWidth="1.58"
                />
                <path
                  d="M10 6.66V6.83M10 9.16V13.33"
                  stroke="currentColor"
                  strokeWidth="1.58"
                  strokeLinecap="round"
                />
              </svg>

              <p className="text-sm font-bold leading-6 text-sky-950 dark:text-white">
                Operational verification does not prove legal sufficiency.
                Break-glass and exception use is attributable, limited, and
                reviewed.
              </p>

            </div>

          </div>

          {/* Right — Change Triggers */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Change &amp; Reconsultation Triggers
            </p>

            <h3 className="mt-3.5 text-2xl font-bold leading-tight text-sky-950 dark:text-white">
              Compared against the consultation baseline
            </h3>

            <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

              <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Triggers that route for review
              </h4>

              <ul className="mt-4 flex flex-col gap-2.5">
                {triggers.map((trigger) => (
                  <li key={trigger} className="flex gap-2.5">

                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                      aria-hidden="true"
                    />

                    <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {trigger}
                    </span>

                  </li>
                ))}
              </ul>

            </div>

            {/* Two Things */}
            <div className="mt-5 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                Two things we will not do
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-900 dark:text-red-200/80">
                We do not automatically decide that a change is legally material
                — your rule determines whether it triggers review, notice,
                reconsultation, approval, pilot, or block. And we do not hide
                changes inside release notes or a generic terms update.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
