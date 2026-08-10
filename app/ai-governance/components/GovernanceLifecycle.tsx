const stages = [
  {
    number: "01",
    title: "Register",
    body: "Proposed use, purpose, intended users, affected people, authority, owner.",
    owner: "Use-case owner",
  },
  {
    number: "02",
    title: "Classify",
    body: "Capability type, risk tier, prohibited-use proximity, reversibility, jurisdiction context.",
    owner: "AI governance",
  },
  {
    number: "03",
    title: "Verify data & provider",
    body: "Sources, permissions, retention, region, and training or use-of-data boundaries.",
    owner: "Privacy & Security",
  },
  {
    number: "04",
    title: "Define human controls",
    body: "Worker rights, fallback, accessibility, and safe failure behavior.",
    owner: "Product governance",
  },
  {
    number: "05",
    title: "Create the evaluation plan",
    body: "Before relying on any outcome metric — so thresholds are set before results are known.",
    owner: "Independent of the owner",
    highlighted: true,
  },
  {
    number: "06",
    title: "Evaluate",
    body: "Task quality, groundedness, failure modes, fairness, privacy, security, robustness, accessibility, human factors, misuse.",
    owner: "Specialist reviewers",
  },
  {
    number: "07",
    title: "Review residual risk",
    body: "Limitations, evidence sufficiency, and operational readiness via eligible independent roles.",
    owner: "Independent review",
  },
  {
    number: "08",
    title: "Gate decision",
    body: "Approve, conditionally approve, reject, or keep evidence-gated — with a reasoned record.",
    owner: "Human only · separated from owner",
    highlighted: true,
  },
  {
    number: "09",
    title: "Release",
    body: "In approved scope, with monitoring, rollback, incident, and support controls.",
    owner: "Operating owner",
  },
  {
    number: "10",
    title: "Monitor",
    body: "Sources, behavior, overrides, corrections, incidents, provider and tool health.",
    owner: "Operating owner",
  },
  {
    number: "11",
    title: "Re-evaluate",
    body: "After material change, incident, drift-like behavior, legal or policy change, or review date.",
    owner: "AI governance",
  },
  {
    number: "12",
    title: "Suspend, correct or retire",
    body: "When evidence or controls no longer support current operation.",
    owner: "Governance · emergency authority is broader",
  },
];

const riskTiers = [
  {
    tier: "G0",
    title: "Not AI / deterministic",
    body: "Versioned rules, arithmetic, or routing with no learned behavior.",
    controls:
      "Rule ownership, test evidence, explanation, change control, human review where consequential.",
  },
  {
    tier: "G1",
    title: "Low-impact assistance",
    body: "Drafting, retrieval, or summarization with no consequential authority and clear human review.",
    controls:
      "Source and permission controls, task evaluation, limitations, monitoring, user correction.",
  },
  {
    tier: "G2",
    title: "Review-supporting signal",
    body: "A flag or recommendation may shape an investigation but cannot decide a consequence.",
    controls:
      "Impact and fairness evaluation, visible reasons, reviewer training, correction, independent approval.",
  },
  {
    tier: "G3",
    title: "High-impact context",
    body: "Assistance used near payroll, discipline, employment, legal, or compliance decisions — humans retain authority.",
    controls:
      "Enhanced review, separation of duties, representative and legal review, staged release, strong monitoring.",
  },
  {
    tier: "G4",
    title: "Prohibited autonomous consequence",
    body: "AI determines or executes a consequential outcome, performs covert surveillance, or makes a prohibited inference.",
    controls:
      "Not permitted. No release path without fundamental product-policy change and full re-approval. No current claim.",
    prohibited: true,
  },
  {
    tier: "G?",
    title: "Unclassified",
    body: "Purpose, authority, data, evaluation, or control is unresolved.",
    controls:
      "Evidence-gated or suspended. No current operation and no marketing claim.",
  },
];

export default function GovernanceLifecycle() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Governance Lifecycle
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Twelve Stages, With Evaluation Planned Before Results Exist
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Stage 5 is the one most governance processes skip: the evaluation plan
            is created <em>before</em> anyone relies on an outcome metric, so the
            threshold is not chosen to fit the result.
          </p>

        </div>

        {/* Lifecycle Stages */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left">

              <tbody>
                {stages.map((stage) => (
                  <tr
                    key={stage.number}
                    className={`border-b border-stone-100 last:border-b-0 dark:border-slate-800/60 ${
                      stage.highlighted
                        ? "bg-emerald-50/40 dark:bg-emerald-950/10"
                        : ""
                    }`}
                  >

                    <td
                      className={`w-14 border-r border-stone-100 px-4 py-7 text-center align-middle text-xs font-extrabold leading-5 dark:border-slate-800/60 ${
                        stage.highlighted
                          ? "text-emerald-800 dark:text-emerald-300"
                          : "text-zinc-500 dark:text-slate-400"
                      }`}
                    >
                      {stage.number}
                    </td>

                    <td className="px-4 py-3.5 align-middle">

                      <p className="text-sm font-bold leading-6 text-sky-950 dark:text-white">
                        {stage.title}
                      </p>

                      <p className="mt-0.5 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                        {stage.body}
                      </p>

                    </td>

                    <td
                      className={`w-48 border-l border-stone-100 px-4 py-7 align-middle text-xs leading-5 dark:border-slate-800/60 ${
                        stage.highlighted
                          ? "font-bold text-emerald-800 dark:text-emerald-300"
                          : "font-normal text-zinc-500 dark:text-slate-400"
                      }`}
                    >
                      {stage.owner}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Risk Tiers */}
        <h3 className="mt-12 text-lg font-bold leading-6 text-sky-950 dark:text-white">
          Six risk tiers
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {riskTiers.map((tier) => (
            <article
              key={tier.tier}
              className={
                tier.prohibited
                  ? "flex flex-col rounded-xl border border-[#F7DBE6] bg-[#FEF4F4]/60 p-5 dark:border-red-900/40 dark:bg-red-950/10"
                  : "flex flex-col rounded-xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
              }
            >

              <p
                className={`text-xs font-bold leading-5 ${
                  tier.prohibited
                    ? "text-red-700 dark:text-red-400"
                    : "text-emerald-700 dark:text-emerald-400"
                }`}
              >
                {tier.tier}
              </p>

              <h4
                className={`mt-2.5 text-sm font-bold leading-6 ${
                  tier.prohibited
                    ? "text-red-700 dark:text-red-400"
                    : "text-sky-950 dark:text-white"
                }`}
              >
                {tier.title}
              </h4>

              <p className="mt-1.5 flex-1 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {tier.body}
              </p>

              <p
                className={`mt-4 border-t border-dashed pt-3 text-xs font-normal leading-5 ${
                  tier.prohibited
                    ? "border-[#F7DBE6] text-red-700 dark:border-red-900/40 dark:text-red-300/80"
                    : "border-stone-200 text-zinc-500 dark:border-slate-800 dark:text-slate-400"
                }`}
              >
                {tier.controls}
              </p>

            </article>
          ))}

        </div>

        {/* Separation of Duties */}
        <div className="mx-auto mt-8 max-w-[900px] rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

          <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
            Separation of duties
          </p>

          <p className="mt-1.5 text-sm font-normal leading-6 text-red-700 dark:text-red-200/80">
            A use-case owner cannot independently approve a high-impact use.
            Evaluation author and final approver are separated where material
            conflicts exist. Emergency suspension authority is deliberately{" "}
            <em>broader</em> than release authority — it is easier to stop
            something than to ship it — subject to retrospective review. And
            provider commercial ownership never overrides evidence, safety, or
            rights review.
          </p>

        </div>

      </div>
    </section>
  );
}
