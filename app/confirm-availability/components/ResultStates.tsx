const resultStates = [
  {
    label: "Verified available",
    labelStyle: "bg-emerald-50 text-emerald-700",
    title: "Current authority confirms it",
    description:
      "The authorized registry confirms public requirements are met for the stated scope, as of the reviewed date.",
  },
  {
    label: "Qualification required",
    labelStyle: "bg-sky-100 text-blue-900",
    title: "Some dimensions need review",
    description:
      "One or more dimensions require a customer-specific review before the scope can be confirmed.",
  },
  {
    label: "Planned — not committed",
    labelStyle: "bg-orange-100 text-yellow-800",
    title: "On the roadmap, not yet available",
    description:
      "Roadmap disclosure is allowed here, but no contractual or general-availability commitment exists yet.",
  },
  {
    label: "Not currently offered",
    labelStyle: "bg-rose-50 text-pink-700",
    title: "Current authority says unavailable",
    description:
      'Shown with a reason category and an approved alternative route — never hidden behind "Contact Sales."',
  },
  {
    label: "Unknown / not verified",
    labelStyle: "bg-gray-100 text-gray-500",
    title: "Evidence is insufficient",
    description:
      "We offer a retry or a qualification path — unknown is never quietly treated as unavailable.",
  },
  {
    label: "Suspended / withdrawn",
    labelStyle: "bg-violet-50 text-indigo-500",
    title: "Previously available, no longer valid",
    description:
      "Shown where public disclosure permits, with the reason and effective date.",
  },
  {
    label: "Stale",
    labelStyle: "bg-orange-100 text-yellow-800",
    title: "Evidence needs refreshing",
    description:
      "The result is older than the freshness threshold — shown plainly rather than presented as current.",
  },
  {
    label: "Conflicting authority",
    labelStyle: "bg-rose-50 text-pink-700",
    title: "Sources disagree",
    description:
      "Two authorized sources disagree on this scope — routed for manual reconciliation, not averaged or guessed.",
  },
  {
    label: "Registry unavailable",
    labelStyle: "bg-gray-100 text-gray-500",
    title: "Verification service unreachable",
    description:
      "We fail closed rather than show a stale or fabricated result — retry is offered.",
  },
];

export default function ResultStates() {
  return (
    <section className="w-full bg-white px-5 py-12 dark:bg-gray-900 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1080px]">

        {/* Header */}
        <div className="mb-8 max-w-[700px] pt-1">

          <div className="mb-3 flex h-5 items-center gap-[9px]">
            <span className="h-1.5 w-1.5 rounded-sm bg-emerald-600" />

            <span className="text-xs font-bold uppercase leading-5 tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
              RESULT STATES
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-8 text-slate-900 dark:text-white">
            Every Possible Result, Designed — Not Just the
            <br className="hidden sm:block" />
            Good One
          </h2>

          <p className="mt-3 text-base leading-7 text-gray-500 dark:text-gray-400">
            No binary green/red coverage claim. An unverified scope is never
            quietly converted into &quot;unavailable.&quot;
          </p>
        </div>

        {/* Result states */}
        <div className="flex flex-col">

          {resultStates.map((state) => (
            <div
              key={state.label}
              className="w-full rounded-2xl border border-slate-200 p-5 dark:border-slate-700"
            >
              {/* Status badge */}
              <div
                className={`inline-flex rounded-full px-3 py-1 ${state.labelStyle}`}
              >
                <span className="text-xs font-bold leading-5">
                  {state.label}
                </span>
              </div>

              {/* Title */}
              <div className="pt-2.5">
                <h3 className="text-sm font-bold leading-6 text-slate-900 dark:text-white">
                  {state.title}
                </h3>
              </div>

              {/* Description */}
              <div className="pt-3">
                <p className="max-w-[650px] text-xs font-normal leading-5 text-gray-500 dark:text-gray-400">
                  {state.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}