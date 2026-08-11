const stages = [
  {
    stage: "Stage 01",
    title: "Confirm eligibility",
    body: "Products, contracts, versions, environments, ownership, roles, support path, readiness.",
  },
  {
    stage: "Stage 02",
    title: "Establish authority",
    body: "Sema owner, ZoikoTime owner, integration admin, security/privacy/legal reviewers, business owner, final approver.",
  },
  {
    stage: "Stage 03",
    title: "Define purpose & scope",
    body: "Business purpose, mapped organizations, categories, permitted and prohibited uses, acceptance criteria.",
  },
  {
    stage: "Stage 04",
    title: "Design mapping",
    body: "Workspaces to scopes, duplicates resolved, effective dates, ownership recorded.",
  },
  {
    stage: "Stage 05",
    title: "Configure governance",
    body: "Roles, privacy modes, policy versions, jurisdiction, retention, notices, exclusions, audit.",
  },
  {
    stage: "Stage 06",
    title: "Authorize connection",
    body: "Approved method, service identity, least privilege, credential custody, expiry, revocation.",
  },
  {
    stage: "Stage 07",
    title: "Test safely",
    body: "Non-production or synthetic data, sample mappings, denied and excluded cases, error and retry.",
  },
  {
    stage: "Stage 08",
    title: "Review & accept",
    body: "Product, business, security, privacy, legal, accessibility, support, and operational sign-off.",
  },
  {
    stage: "Stage 09",
    title: "Activate & communicate",
    body: "Scheduled activation, notices confirmed, first exchanges monitored, rollback preserved.",
  },
  {
    stage: "Stage 10",
    title: "Stabilize & govern",
    body: "Health, exceptions, questions, audit evidence, mappings, policy, versions, expansion readiness.",
  },
];

const outputs = [
  "Implementation plan and approved mapping",
  "Governance profile",
  "Test evidence and acceptance record",
  "Activation record and rollback plan",
  "Support runbook and review schedule",
];

export default function SetupStages() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Controlled Setup &amp; Authorization
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Ten Stages Before First Exchange
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Deliberately slow. An integration that can be switched on in an
            afternoon is an integration nobody reviewed.
          </p>

        </div>

        {/* Stages */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {stages.map((stage) => (
            <article
              key={stage.stage}
              className="flex flex-col rounded-xl border border-stone-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >

              <p className="text-xs font-bold leading-5 text-emerald-700 dark:text-emerald-400">
                {stage.stage}
              </p>

              <h3 className="mt-2.5 text-sm font-bold leading-6 text-sky-950 dark:text-white">
                {stage.title}
              </h3>

              <p className="mt-1.5 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {stage.body}
              </p>

            </article>
          ))}

        </div>

        {/* Setup Outputs & Testing */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">

          <div className="rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-8 dark:border-slate-800 dark:bg-slate-900">

            <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              Setup outputs
            </h3>

            <ul className="mt-4 flex flex-col gap-2.5">
              {outputs.map((output) => (
                <li key={output} className="flex gap-2.5">

                  <span
                    className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />

                  <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {output}
                  </span>

                </li>
              ))}
            </ul>

          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 px-6 pb-6 pt-8 dark:border-emerald-900/40 dark:bg-emerald-950/10">

            <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              Testing must include the failures
            </h3>

            <p className="mt-3 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
              Acceptance requires validating denied cases, excluded categories,
              permission errors, and retry behavior — not only the happy path. A
              test that only proves success has not tested the governance.
            </p>

            <p className="mt-4 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
              Test data is approved non-production, synthetic, or controlled. Live
              worker records are never used to validate a new mapping.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
