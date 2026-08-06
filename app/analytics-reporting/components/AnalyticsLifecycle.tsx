const stages = [
  {
    stage: "Stage 01",
    title: "Define the question",
    purpose:
      "State the business question — and the inference that is prohibited.",
    proof: "Owner, purpose, audience, decision boundary.",
  },
  {
    stage: "Stage 02",
    title: "Select governed scope",
    purpose:
      "Choose population, record states, dates, jurisdiction, organization, and the minimum necessary grain.",
    proof:
      "Scope preview, permission, small-group treatment.",
  },
  {
    stage: "Stage 03",
    title: "Validate data",
    purpose:
      "Check freshness, completeness, source health, corrections, exclusions, reconciliation.",
    proof:
      "Quality status, excluded records, owner.",
  },
  {
    stage: "Stage 04",
    title: "Apply metric definition",
    purpose:
      "Use the approved numerator, denominator, formula, time zone, inclusion rules, and version.",
    proof:
      "Metric catalog link, test evidence.",
  },
  {
    stage: "Stage 05",
    title: "Aggregate and protect",
    purpose:
      "Apply aggregation, suppression, masking, and purpose limits.",
    proof:
      "Privacy treatment, minimum group, drill-down rule.",
  },
  {
    stage: "Stage 06",
    title: "Review quality",
    purpose:
      "Confirm validity, comparability, policy versions, and known limitations.",
    proof:
      "Review checklist, warning state, approval.",
  },
  {
    stage: "Stage 07",
    title: "Interpret and annotate",
    purpose:
      "Authorized people add context, questions, explanation, and follow-up.",
    proof:
      "Author, timestamp, neutral language, escalation.",
  },
  {
    stage: "Stage 08",
    title: "Publish or export",
    purpose:
      "Share a dashboard or report, or create a controlled export or schedule.",
    proof:
      "Audience, delivery, expiry and retention, authorization.",
  },
  {
    stage: "Stage 09",
    title: "Preserve evidence",
    purpose:
      "Store definition, scope, source snapshot, calculation, approvals, delivery, corrections, changes.",
    proof:
      "A reproducible evidence package.",
  },
];

export default function AnalyticsLifecycle() {
  return (
    <section className="bg-white dark:bg-slate-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
            Governed Analytics Lifecycle
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
            Nine Stages From Question to
            <br className="hidden md:block" />
            Preserved Evidence
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            A metric does not begin with data. It begins with a stated
            question and a stated prohibited inference.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8">

          {/* Stage 01 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              {stages[0].stage}
            </span>

            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              {stages[0].title}
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Purpose
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[0].purpose}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Required Proof
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[0].proof}
                </p>
              </div>

            </div>
          </div>

          {/* Stage 02 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              {stages[1].stage}
            </span>

            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              {stages[1].title}
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Purpose
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[1].purpose}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Required Proof
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[1].proof}
                </p>
              </div>

            </div>
          </div>

          {/* Stage 03 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              {stages[2].stage}
            </span>

            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              {stages[2].title}
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Purpose
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[2].purpose}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Required Proof
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[2].proof}
                </p>
              </div>

            </div>
          </div>

                    {/* Stage 04 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              {stages[3].stage}
            </span>

            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              {stages[3].title}
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Purpose
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[3].purpose}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Required Proof
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[3].proof}
                </p>
              </div>

            </div>
          </div>

          {/* Stage 05 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              {stages[4].stage}
            </span>

            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              {stages[4].title}
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Purpose
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[4].purpose}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Required Proof
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[4].proof}
                </p>
              </div>

            </div>
          </div>

          {/* Stage 06 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              {stages[5].stage}
            </span>

            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              {stages[5].title}
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Purpose
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[5].purpose}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Required Proof
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[5].proof}
                </p>
              </div>

            </div>
          </div>
                    {/* Stage 07 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              {stages[6].stage}
            </span>

            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              {stages[6].title}
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Purpose
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[6].purpose}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Required Proof
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[6].proof}
                </p>
              </div>

            </div>
          </div>

          {/* Stage 08 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              {stages[7].stage}
            </span>

            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              {stages[7].title}
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Purpose
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[7].purpose}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Required Proof
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[7].proof}
                </p>
              </div>

            </div>
          </div>

          {/* Stage 09 */}

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              {stages[8].stage}
            </span>

            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              {stages[8].title}
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Purpose
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[8].purpose}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Required Proof
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stages[8].proof}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}