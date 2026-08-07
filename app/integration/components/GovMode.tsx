"use client";

const modes = [
  {
    title: "Excluded",
    desc: "The workspace or category does not participate at all.",
  },
  {
    title: "Metadata / Reference Only",
    desc: "A source reference and identifier — no content.",
  },
  {
    title: "Approved Structured Context",
    desc: "Validated structured fields for a documented purpose.",
  },
  {
    title: "Review Required",
    desc: "Nothing reaches a workflow without human approval.",
  },
  {
    title: "Paused",
    desc: "Configuration preserved, exchange stopped.",
  },
];

const cards = [
  {
    title: "Governance Profile",
    desc: "Name, purpose, mapped workspaces and units, policy version, context categories, permitted roles, review requirement, effective period, owner, approvers, and status.",
  },
  {
    title: "Role Controls",
    desc: "Who may configure, approve, test, view source references, review context, attach context, export evidence, pause, resume, or retire.",
  },
  {
    title: "Jurisdiction Controls",
    desc: "Organization scope, participant location context, policy and legal review status, notice requirements, restrictions, transfer qualification, and professional-review owner.",
  },
  {
    title: "Retention",
    desc: "Source, transferred or reference, evidence, exception retention, deletion or archival behavior, legal-hold conflict, owner, and review date.",
  },
  {
    title: "Notice Preview",
    desc: "Connected by your organization, purpose, source, who may access, retention summary, rights, support route, and policy update date.",
  },
  {
    title: "Human Authority",
    desc: "Governance can route context and require review. It cannot delegate consequential employment, payroll, legal, compliance, disciplinary, or performance decisions to an integration or AI.",
    highlight: true,
  },
];

export default function GovMode() {
  return (
    <section className="bg-gray-50 px-4 py-12 dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Governance, Privacy Modes & Jurisdiction
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Five Conceptual Privacy Modes
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
            Exact behavior is product-validated. These are the conceptual modes
            a governance profile may apply per mapping and per category.
          </p>
        </div>

        {/* Privacy Modes */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {modes.map((mode) => (
            <div
              key={mode.title}
              className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {mode.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {mode.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Governance Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl border p-6 ${
                card.highlight
                  ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/20"
                  : "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
              }`}
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {card.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}