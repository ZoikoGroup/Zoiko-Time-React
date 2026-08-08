const mechanisms = [
  {
    badge: "Not AI",
    title: "Deterministic classification",
    summary: "Policy-bound, versioned, reviewable.",
    items: [
      "Versioned rules and effective dates",
      "Jurisdiction and context aware",
      "Explainable trace",
      "Correction route on every output",
    ],
    tint: false,
  },
  {
    badge: "Assistive only",
    title: "Approved ML & Kairos",
    summary: "Flags and explains. Concludes nothing.",
    items: [
      "ML may flag anomalies or signal-quality concerns",
      "Kairos retrieves, summarizes, explains within permission",
      "Outputs labelled and reviewable",
      "Confidence limitations stated",
    ],
    tint: true,
  },
  {
    badge: "Sole authority",
    title: "Authorized human",
    summary: "Reviews, disagrees, decides, owns it.",
    items: [
      "Eligibility and conflict checks passed",
      "Reason linked to evidence",
      "Attributable audit event",
      "Answerable for the outcome",
    ],
    tint: false,
  },
];

export default function Mechanisms() {
  return (
    <section
      id="mechanisms"
      className="w-full scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Classification, AI &amp; Kairos Boundaries
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Three Mechanisms, None of Which Decides
          </h2>

        </div>

        {/* Mechanisms */}
        <div className="mt-10 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">

          {mechanisms.map((mechanism, index) => (
            <div key={mechanism.title} className="contents">

              {index > 0 && (
                <span
                  className="self-center text-lg font-bold text-emerald-500 lg:rotate-0"
                  aria-hidden="true"
                >
                  →
                </span>
              )}

              <article
                className={`flex flex-1 flex-col rounded-2xl border p-6 ${
                  mechanism.tint
                    ? "border-emerald-100 bg-[#F5FEF7] dark:border-emerald-900/40 dark:bg-emerald-950/20"
                    : "border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900"
                }`}
              >

                <span className="inline-flex self-start rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-extrabold uppercase leading-4 tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {mechanism.badge}
                </span>

                <h3 className="mt-4 text-base font-bold leading-6 text-sky-950 dark:text-white">
                  {mechanism.title}
                </h3>

                <p className="mt-2 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                  {mechanism.summary}
                </p>

                <ul className="mt-4 flex flex-col gap-2">
                  {mechanism.items.map((item) => (
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

              </article>

            </div>
          ))}

        </div>

        {/* Callouts */}
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">

          <div className="rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

            <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
              Why classification is not called AI
            </p>

            <p className="mt-1.5 text-sm font-normal leading-6 text-red-800 dark:text-red-200/80">
              Deterministic Time Classification is rule-based, versioned, and
              traceable. Branding it as AI would invite people to trust it in
              ways a rule engine has not earned — and to distrust it in ways
              that would be equally wrong. It is called what it is.
            </p>

          </div>

          <div className="rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

            <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
              The one pattern with no exception
            </p>

            <p className="mt-1.5 text-sm font-normal leading-6 text-red-800 dark:text-red-200/80">
              Non-human actors cannot hold final consequential permission. Not
              by delegation, not by configuration, not by escalation timeout,
              not in a break-glass scenario. There is no exception treatment for
              this rule.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
