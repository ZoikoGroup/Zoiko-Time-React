"use client";

type StageCardProps = {
  stage: string;
  title: string;
  items: string[];
};

function StageCard({ stage, title, items }: StageCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 transition-colors dark:border-slate-700 dark:bg-slate-900">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
        {stage}
      </p>

      <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
        {title}
      </h3>

      <div className="mt-6">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Covers
        </p>

        <ul className="mt-3 space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="text-sm leading-6 text-slate-600 dark:text-slate-300"
            >
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ConnectionStages() {
  return (
    <section className="bg-white py-16 transition-colors dark:bg-slate-950 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Controlled Setup &amp; Authorization
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white lg:text-5xl">
            Ten Stages to an Authorized Connection
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Setup progression requires product-side validation.
            It cannot advance from marketing interaction or
            scroll position.
          </p>

        </div>

        {/* Stages */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          <StageCard
            stage="Stage 01"
            title="Confirm Eligibility"
            items={[
              "Products, contracts, versions, environments.",
              "Organization ownership and readiness.",
              "Administrator roles and permissions.",
              "Support path validation.",
            ]}
          />

          <StageCard
            stage="Stage 02"
            title="Establish Authority"
            items={[
              "Sema owner and ZoikoTime owner.",
              "Integration administrator assignment.",
              "Security, privacy and legal reviewers.",
              "Business owner, support owner and final approver.",
            ]}
          />

          <StageCard
            stage="Stage 03"
            title="Define Purpose & Scope"
            items={[
              "Business purpose and mapped organizations.",
              "Mapped workspaces and context categories.",
              "Permitted and prohibited uses.",
              "Acceptance criteria.",
            ]}
          />

          {/* Continue in Part 2 */}
                    <StageCard
            stage="Stage 04"
            title="Design Mapping"
            items={[
              "Workspace-to-scope mapping.",
              "Duplicate and overlap resolution.",
              "Effective dates.",
              "Recorded ownership.",
            ]}
          />

          <StageCard
            stage="Stage 05"
            title="Configure Governance"
            items={[
              "Roles and permissions.",
              "Privacy modes and policy versions.",
              "Jurisdiction, retention and notices.",
              "Review-before-sync, exclusions and audit.",
            ]}
          />

          <StageCard
            stage="Stage 06"
            title="Authorize Connection"
            items={[
              "Approved authorization method.",
              "Service identity and least privilege.",
              "Credential custody, expiration and revocation.",
              "Method published only after validation.",
            ]}
          />

          <StageCard
            stage="Stage 07"
            title="Test Safely"
            items={[
              "Approved non-production or synthetic data.",
              "Sample mappings and excluded cases.",
              "Error handling and retry validation.",
              "Evidence capture and verification.",
            ]}
          />

          <StageCard
            stage="Stage 08"
            title="Review & Accept"
            items={[
              "Business, product and operational sign-off.",
              "Security, privacy and legal review.",
              "Accessibility verification.",
              "Acceptance criteria approval.",
            ]}
          />

          <StageCard
            stage="Stage 09"
            title="Activate & Communicate"
            items={[
              "Scheduled activation.",
              "Participant notices and documentation.",
              "Support readiness and monitoring.",
              "Rollback plan and announced status.",
            ]}
          />

          {/* Continue in Part 3 */}
                    <StageCard
            stage="Stage 10"
            title="Stabilize & Govern Change"
            items={[
              "Health monitoring and exceptions.",
              "Audit evidence and policy reviews.",
              "Mapping and version governance.",
              "Support and expansion readiness.",
            ]}
          />

        </div>

        {/* Setup Output */}
        <div className="mt-10 rounded-xl border border-slate-200 border-l-[3px] border-l-emerald-500 bg-slate-50 p-5 dark:border-slate-700 dark:border-l-emerald-400 dark:bg-slate-900">

          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Setup Output
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Implementation plan, approved mapping, governance profile,
            test evidence, acceptance record, activation record,
            rollback plan, support runbook, and review schedule.
          </p>

        </div>

      </div>
    </section>
  );
}