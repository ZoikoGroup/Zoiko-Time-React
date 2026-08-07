const steps = [
  { number: "01", label: "Define claim" },
  { number: "02", label: "Assign owner" },
  { number: "03", label: "Attach evidence" },
  { number: "04", label: "Review wording & scope" },
  { number: "05", label: "Approve status & access" },
  { number: "06", label: "Publish" },
  { number: "07", label: "Renew, correct, supersede or withdraw" },
];

const claimStatuses = [
  { label: "Current", tone: "bg-slate-50 text-emerald-700" },
  { label: "Under review", tone: "bg-slate-100 text-sky-700" },
  { label: "Superseded", tone: "bg-slate-100 text-zinc-600" },
  { label: "Withdrawn", tone: "bg-red-50 text-red-600" },
];

const accessLevels = [
  "Public",
  "Controlled access",
  "Contractual",
  "Customer-specific",
];

export default function EvidenceLifecycle() {
  return (
    <section
      id="evidence"
      className="w-full scroll-mt-24 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Evidence Lifecycle &amp; Claim Status
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            How a Public Trust Statement Comes to Exist
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            And how it gets corrected or withdrawn. A status change always
            creates an attributable history event.
          </p>

        </div>

        {/* Lifecycle Steps */}
        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">

          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center rounded-[10px] border border-stone-200 bg-white px-3 py-3 text-center dark:border-slate-800 dark:bg-slate-900"
            >

              <span className="text-[10px] font-extrabold leading-4 tracking-wide text-emerald-800 dark:text-emerald-400">
                {step.number}
              </span>

              <span className="mt-1 text-xs font-bold leading-4 text-sky-950 dark:text-white">
                {step.label}
              </span>

            </div>
          ))}

        </div>

        {/* Statuses & Access Levels */}
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">

          <div className="flex flex-col rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-8 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] dark:border-slate-800 dark:bg-slate-900">

            <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              Public claim statuses
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {claimStatuses.map((status) => (
                <span
                  key={status.label}
                  className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold leading-5 ${status.tone}`}
                >
                  {status.label}
                </span>
              ))}
            </div>

            <p className="mt-3.5 text-base font-normal leading-6 text-zinc-700 dark:text-slate-300">
              Withdrawn evidence does not remain in search results, cards, or
              structured data as current.
            </p>

          </div>

          <div className="flex flex-col rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-8 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] dark:border-slate-800 dark:bg-slate-900">

            <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              Evidence access levels
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {accessLevels.map((level, index) => (
                <span
                  key={level}
                  className={`inline-flex whitespace-nowrap rounded-full border px-2 py-1 text-[10px] font-extrabold uppercase leading-4 tracking-wide ${
                    index === 0
                      ? "border-stone-200 bg-slate-50 text-emerald-700 dark:border-slate-700 dark:bg-slate-800 dark:text-emerald-400"
                      : "border-stone-200 bg-slate-100 text-zinc-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  }`}
                >
                  {level}
                </span>
              ))}
            </div>

            <p className="mt-3.5 text-base font-normal leading-6 text-zinc-700 dark:text-slate-300">
              Every item shows claim ID, owner, reviewer, effective date, last
              reviewed, next review, and limitations.
            </p>

          </div>

        </div>

        {/* Words We Do Not Use As Badges */}
        <div className="mx-auto mt-6 max-w-[900px] rounded-[10px] border border-[#F7DBE6] bg-[#FEF4F4] px-3.5 pb-3 pt-2.5 dark:border-red-900/40 dark:bg-red-950/20">

          <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
            Words we do not use as badges
          </p>

          <p className="mt-0.5 text-xs font-normal leading-5 text-red-800 dark:text-red-200/80">
            &ldquo;Verified&rdquo; and &ldquo;trusted&rdquo; without a defined
            verifier and attached evidence. A badge that nobody signed is worth
            nothing to an evaluator.
          </p>

        </div>

      </div>
    </section>
  );
}
