import StatusPill, { type Tone } from "./StatusPill";

const alwaysAvailable = [
  "Inspect the underlying evidence",
  "Disagree with a classification",
  "Request more information",
  "Correct a record",
  "Declare evidence insufficient",
  "Abstain, defer, or escalate",
  "Choose a different outcome entirely",
];

const panels = [
  {
    term: "Case header",
    body: "neutral title, affected person, scope, state, due context, authority class",
  },
  {
    term: "Evidence",
    body: "source, timestamp, actor, policy version, jurisdiction, quality, limitations, conflicts",
  },
  {
    term: "Reviewer",
    body: "role, delegated scope, eligibility, conflict state, separation-of-duties check",
  },
  {
    term: "Action",
    body: "with a required reason linked to evidence",
  },
];

const governedStates: { label: string; tone: Tone }[] = [
  { label: "Needs information", tone: "amber" },
  { label: "Pending review", tone: "blue" },
  { label: "Under review", tone: "blue" },
  { label: "Deferred", tone: "violet" },
  { label: "Escalated", tone: "blue" },
  { label: "Corrected", tone: "green" },
  { label: "Approved", tone: "green" },
  { label: "Rejected", tone: "red" },
  { label: "Superseded", tone: "neutral" },
  { label: "Insufficient evidence", tone: "neutral" },
];

const neverApplied = ["Fraud", "Time theft", "Misconduct", "Non-compliant"];

export default function ReviewWorkspace() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Review Workspace
            </p>

            <h2 className="mt-3.5 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              Human Review Is Not Rubber-Stamping
            </h2>

            <p className="mt-4 max-w-[520px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              A forced approve-or-reject click is not meaningful human control.
              The interface has to make disagreement genuinely possible.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Reviewer capabilities */}
              <div className="flex flex-col rounded-2xl border border-emerald-100 bg-[#F5FEF7] p-5 dark:border-emerald-900/40 dark:bg-emerald-950/20">

                <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                  Always available to a reviewer
                </h3>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {alwaysAvailable.map((item) => (
                    <li key={item} className="flex gap-2.5">

                      <span
                        className="mt-2 h-[5px] w-[5px] shrink-0 rounded-xs bg-emerald-400"
                        aria-hidden="true"
                      />

                      <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                        {item}
                      </span>

                    </li>
                  ))}
                </ul>

              </div>

              {/* Workspace panels */}
              <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">

                <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                  Four workspace panels
                </h3>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {panels.map((panel) => (
                    <li key={panel.term} className="flex gap-2.5">

                      <span
                        className="mt-2 h-[5px] w-[5px] shrink-0 rounded-xs bg-emerald-400"
                        aria-hidden="true"
                      />

                      <p className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">

                        <span className="font-bold text-sky-950 dark:text-white">
                          {panel.term}
                        </span>{" "}
                        — {panel.body}

                      </p>

                    </li>
                  ))}
                </ul>

              </div>

            </div>

            {/* Interface prohibitions */}
            <div className="mt-5 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                Two interface prohibitions
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-800 dark:text-red-200/80">
                No default-selected adverse outcome. No dark pattern that
                prioritizes speed over evidence review — the design must not
                make approving faster than reading.
              </p>

            </div>

          </div>

          {/* Right Content */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Neutral States &amp; Language
            </p>

            <h3 className="mt-3.5 text-2xl font-bold leading-tight text-sky-950 dark:text-white">
              Labels describe process, not character
            </h3>

            {/* Governed vocabulary */}
            <div className="mt-6 flex flex-col rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

              <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Governed state vocabulary
              </h4>

              <div className="mt-4 flex flex-wrap gap-2">
                {governedStates.map((state) => (
                  <StatusPill
                    key={state.label}
                    label={state.label}
                    tone={state.tone}
                  />
                ))}
              </div>

            </div>

            {/* Never applied */}
            <div className="mt-5 flex flex-col rounded-2xl border border-[#F7DBE6] bg-[#FEFAF9] p-6 dark:border-red-900/40 dark:bg-red-950/10">

              <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Never applied from a signal alone
              </h4>

              <div className="mt-4 flex flex-wrap gap-2">
                {neverApplied.map((label) => (
                  <StatusPill key={label} label={label} tone="red" />
                ))}
              </div>

              <p className="mt-4 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                And no negative presumption is hidden in an icon or a colour.
                Notifications use the same neutral vocabulary as the interface —
                a worker should never learn from an email tone what the product
                would not say in text.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
