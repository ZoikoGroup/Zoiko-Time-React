const invariants = [
  {
    title: "A flag is evidence, not a decision",
    body: "Anomaly and signal-quality flags exist to prompt human review. They do not conclude anything about a person.",
  },
  {
    title: "Consequential decisions are human",
    body: "Payroll, discipline, employment, scheduling, accommodation, legal, and labor-relations outcomes remain with accountable people.",
  },
  {
    title: "Classification is not AI",
    body: "Deterministic Time Classification is policy-bound and reviewable. It is not presented, branded, or sold as artificial intelligence.",
  },
  {
    title: "Kairos decides nothing",
    body: "Approved ML may support anomaly or signal-quality review. Kairos retrieves, summarizes, and explains governed data — and decides nothing.",
  },
];

const neverInferred = [
  "Union membership or employee-representative status",
  "Protected or representative activity",
  "Health, disability, beliefs, politics, ethnicity, sexual orientation",
  "Productivity scores, behavioral rankings, or automated misconduct conclusions",
  "Sentiment, hostility, union-risk, or legal-risk scoring of questions",
];

const workerRights = [
  "Visibility of the records that describe their work",
  "Explanation of what a status means and which policy applied",
  "Correction and challenge routes with human review",
  "Representation and escalation, with safe alternatives",
];

export default function TrustCommitments() {
  return (
    <section className="w-full overflow-hidden bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-400">
            Worker-Trust Commitments
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            What Representatives Should Be Able to Verify First
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-slate-400">
            These are product invariants, not settings. A representative body
            reviewing ZoikoTime should be able to check each of them directly.
          </p>

        </div>

        {/* Headline Invariant */}
        <p className="mx-auto mt-8 max-w-[900px] text-center text-lg font-bold leading-7 text-white sm:text-xl">
          No screenshots, keystroke content, URL history, application-name
          monitoring, or clipboard collection — under any tier or
          configuration.
        </p>

        {/* Invariant Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {invariants.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-2 rounded-2xl border border-white/[0.12] bg-white/[0.043] px-6 pb-8 pt-10 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)]"
            >

              <h3 className="text-base font-bold leading-6 text-white">
                {item.title}
              </h3>

              <p className="text-base font-normal leading-6 text-slate-400">
                {item.body}
              </p>

            </div>
          ))}

        </div>

        {/* Never Inferred / Worker Rights */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">

          {/* Never inferred */}
          <div className="flex flex-col gap-3.5 rounded-2xl border border-white/[0.14] bg-white/[0.04] p-6">

            <div className="flex items-center gap-2">

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 text-red-400"
                aria-hidden="true"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="5.75"
                  stroke="currentColor"
                  strokeWidth="1.65"
                />
                <path
                  d="M6.2 6.2L9.8 9.8M9.8 6.2L6.2 9.8"
                  stroke="currentColor"
                  strokeWidth="1.65"
                  strokeLinecap="round"
                />
              </svg>

              <h3 className="text-base font-bold leading-6 text-white">
                Never inferred from product or consultation data
              </h3>

            </div>

            <ul className="flex flex-col gap-2.5">

              {neverInferred.map((item) => (
                <li key={item} className="flex gap-2">

                  <span
                    className="text-sm font-bold leading-6 text-red-400"
                    aria-hidden="true"
                  >
                    ×
                  </span>

                  <span className="text-sm font-normal leading-6 text-slate-300">
                    {item}
                  </span>

                </li>
              ))}

            </ul>

          </div>

          {/* Worker rights */}
          <div className="flex flex-col gap-3.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">

            <div className="flex items-center gap-2">

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 text-emerald-300"
                aria-hidden="true"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="5.75"
                  stroke="currentColor"
                  strokeWidth="1.65"
                />
                <path
                  d="M5.7 8.1L7.3 9.7L10.3 6.5"
                  stroke="currentColor"
                  strokeWidth="1.65"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h3 className="text-base font-bold leading-6 text-white">
                Worker rights visible at the point of work
              </h3>

            </div>

            <ul className="flex flex-col gap-2.5">

              {workerRights.map((item) => (
                <li key={item} className="flex gap-2">

                  <span
                    className="text-xs font-bold leading-6 text-emerald-300"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <span className="text-sm font-normal leading-6 text-slate-300">
                    {item}
                  </span>

                </li>
              ))}

            </ul>

          </div>

        </div>

        <p className="mt-8 text-center text-xs font-normal leading-5 text-slate-500">
          Administrative visibility does not remove worker rights. Both exist at
          the same time, by design.
        </p>

      </div>
    </section>
  );
}
