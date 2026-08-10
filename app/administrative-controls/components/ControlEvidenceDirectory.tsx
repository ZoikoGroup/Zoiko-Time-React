import AdminStatusPill, { type AdminTone } from "./AdminStatusPill";

const statuses: { label: string; tone: AdminTone }[] = [
  { label: "Current", tone: "green" },
  { label: "Limited availability", tone: "violet" },
  { label: "Under review", tone: "blue" },
  { label: "Planned", tone: "amber" },
  { label: "Evidence-gated", tone: "neutral" },
  { label: "Superseded", tone: "neutral" },
  { label: "Withdrawn", tone: "red" },
];

const filters = [
  "Domain",
  "Control type",
  "Product area",
  "Deployment context",
  "Status",
  "Access level",
  "Owner",
  "Last reviewed",
];

type Access = "PUBLIC" | "CONTROLLED";

const accessStyles: Record<Access, string> = {
  PUBLIC:
    "border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300",
  CONTROLLED:
    "border-stone-200 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
};

const claims: {
  title: string;
  access: Access;
  summary: string;
  domain: string;
  owner: string;
  reviewed: string;
  status: string;
  footnote: string;
}[] = [
  {
    title: "Effective-permission model",
    access: "PUBLIC",
    summary: "The deny-by-default intersection and how it is evaluated.",
    domain: "Identity & access",
    owner: "Security",
    reviewed: "01 Jul 2026",
    status: "Current",
    footnote:
      "Limitation: describes the model, not your configured role assignments.",
  },
  {
    title: "Inheritance & precedence model",
    access: "PUBLIC",
    summary:
      "Source levels, mandatory floors, overrides, exceptions, and effective result.",
    domain: "Organization & scope",
    owner: "Product governance",
    reviewed: "04 Jul 2026",
    status: "Current",
    footnote: "Limitation: product precedence, not legal precedence.",
  },
  {
    title: "Change lifecycle & approvals",
    access: "PUBLIC",
    summary:
      "Draft through retirement, with required gates and rollback behavior.",
    domain: "Audit & evidence",
    owner: "Product governance",
    reviewed: "04 Jul 2026",
    status: "Current",
    footnote:
      "Limitation: rollback does not guarantee downstream reconciliation.",
  },
  {
    title: "Break-glass control contract",
    access: "CONTROLLED",
    summary:
      "Authentication, scope, time limits, monitoring, revocation, and post-use review.",
    domain: "Emergency & recovery",
    owner: "Security",
    reviewed: "01 Jul 2026",
    status: "Current",
    footnote: "Access: governed request. Security-sensitive detail withheld.",
  },
  {
    title: "Service-identity register",
    access: "CONTROLLED",
    summary:
      "Purpose, owner, scope, credential lifecycle, and revocation per integration actor.",
    domain: "Integration administration",
    owner: "Platform & Security",
    reviewed: "28 Jun 2026",
    status: "Current",
    footnote:
      "Access: governed request. No customer service-account metadata is public.",
  },
  {
    title: "Staged cohort activation",
    access: "PUBLIC",
    summary:
      "Phased rollout of a configuration change by approved cohort or environment.",
    domain: "Policy governance",
    owner: "Product",
    reviewed: "—",
    status: "Limited availability",
    footnote:
      "Not universally available. Eligibility is contract- and plan-dependent.",
  },
];

export default function ControlEvidenceDirectory() {
  return (
    <section
      id="control-evidence-directory"
      className="w-full scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Control Evidence Directory
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Public Control Claims, Each With a Status
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Planned or contract-specific controls are never described as
            universally current.
          </p>

        </div>

        {/* Status Legend */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {statuses.map((status) => (
            <AdminStatusPill
              key={status.label}
              label={status.label}
              tone={status.tone}
            />
          ))}
        </div>

        {/* Filters */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <span
              key={filter}
              className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold leading-5 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              {filter}
            </span>
          ))}
        </div>

        {/* Claims */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {claims.map((claim) => (
            <article
              key={claim.title}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >

              <div className="flex items-start justify-between gap-3">

                <h3 className="text-base font-bold leading-5 text-sky-950 dark:text-white">
                  {claim.title}
                </h3>

                <span
                  className={`shrink-0 rounded-full border px-2 py-1 text-[10px] font-extrabold uppercase leading-4 tracking-wide ${accessStyles[claim.access]}`}
                >
                  {claim.access}
                </span>

              </div>

              <p className="mt-2 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {claim.summary}
              </p>

              <dl className="mt-3.5 grid flex-1 grid-cols-[72px_1fr] content-start gap-x-3 gap-y-1">
                {[
                  { label: "Domain", value: claim.domain },
                  { label: "Owner", value: claim.owner },
                  { label: "Reviewed", value: claim.reviewed },
                  { label: "Status", value: claim.status },
                ].map((row) => (
                  <div key={row.label} className="contents">

                    <dt className="text-xs font-semibold leading-5 text-zinc-500 dark:text-slate-400">
                      {row.label}
                    </dt>

                    <dd className="text-xs font-normal leading-5 text-sky-900 dark:text-slate-200">
                      {row.value}
                    </dd>

                  </div>
                ))}
              </dl>

              <p className="mt-4 border-t border-dashed border-stone-200 pt-3 text-xs font-normal leading-5 text-zinc-500 dark:border-slate-800 dark:text-slate-400">
                {claim.footnote}
              </p>

            </article>
          ))}

        </div>

        <p className="mt-8 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
          No internal control ID, tenant configuration, or security-sensitive
          implementation detail appears here. Withdrawn and superseded claims are
          excluded from current results and structured data, and search terms are
          never captured in analytics.
        </p>

      </div>
    </section>
  );
}
