"use client";

type ReviewItem = {
  contextType: string;
  workspace: string;
  scope: string;
  origin: string;
  reviewer: string;
  status: string;
  statusColor:
    | "pending"
    | "approved"
    | "warning"
    | "danger";
};

const reviewItems: ReviewItem[] = [
  {
    contextType: "Assigned action",
    workspace: "Field Ops",
    scope: "Field Services · North",
    origin: "Manual",
    reviewer: "R. Adeyemi",
    status: "Pending review",
    statusColor: "pending",
  },
  {
    contextType: "Structured decision",
    workspace: "Harbour Project",
    scope: "Projects · Harbour",
    origin: "Manual",
    reviewer: "A. Weber",
    status: "Approved",
    statusColor: "approved",
  },
  {
    contextType: "Meeting recap reference",
    workspace: "Service Desk",
    scope: "Service Desk · EMEA",
    origin: "AI-generated",
    reviewer: "L. Marín",
    status: "Needs verification",
    statusColor: "warning",
  },
  {
    contextType: "Follow-up suggestion",
    workspace: "Field Ops",
    scope: "Field Services · North",
    origin: "AI-generated",
    reviewer: "Unassigned",
    status: "Conflict — policy mismatch",
    statusColor: "danger",
  },
];

const permittedActions = [
  "Approve attachment or use",
  "Approve edited structured context",
  "Request clarification, exclude, or reject",
  "Reassign, escalate, or pause the mapping",
];

const prohibitedAutomation = [
  "No automatic declaration of time worked or attendance correctness",
  "No automatic break violation or payroll treatment",
  "No automatic misconduct, discipline, or performance finding",
  "No automatic legal status or compliance conclusion",
];

const tableHeaders = [
  "Context type",
  "Sema workspace",
  "Mapped scope",
  "Origin",
  "Reviewer",
  "Status",
];

const statusStyles = {
  pending:
    "bg-slate-700/50 text-sky-300 border border-slate-600",

  approved:
    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",

  warning:
    "bg-amber-500/10 text-amber-400 border border-amber-500/30",

  danger:
    "bg-red-500/10 text-red-400 border border-red-500/30",
};

export default function ReviewBeforeSync() {
  return (
    <section className="bg-[#061D33] dark:bg-slate-950 py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
                {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
            Review Before Sync &amp; Human Authority
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl dark:text-white">
            A Human Sits Between Context
            <br className="hidden sm:block" />
            and Consequence
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 dark:text-slate-400">
            The review queue is where communication context either becomes
            reviewed operational context, or does not.
          </p>
        </div>

        {/* Table Section */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]">
                  {/* Desktop Table */}
          <div className="hidden overflow-x-auto lg:block">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  {tableHeaders.map((header) => (
                    <th
                      key={header}
                      className="px-4 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-slate-400"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>

                                {reviewItems.map((item) => (
                  <tr
                    key={`${item.contextType}-${item.status}`}
                    className="border-b border-white/10 last:border-b-0 transition-colors hover:bg-white/5"
                  >
                    <td className="px-4 py-4">
                      <span className="text-sm font-semibold text-white dark:text-white">
                        {item.contextType}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <span className="text-sm text-slate-300 dark:text-slate-300">
                        {item.workspace}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <span className="text-sm text-slate-300 dark:text-slate-300">
                        {item.scope}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <span className="text-sm text-slate-300 dark:text-slate-300">
                        {item.origin}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <span className="text-sm text-slate-300 dark:text-slate-300">
                        {item.reviewer}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[item.statusColor]}`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

                    {/* Mobile & Tablet Cards */}
          <div className="space-y-4 p-4 lg:hidden">
            {reviewItems.map((item) => (
              <div
                key={`${item.contextType}-${item.status}-mobile`}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-white">
                    {item.contextType}
                  </h3>

                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[item.statusColor]}`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Workspace
                    </span>

                    <span className="text-right text-sm text-slate-300">
                      {item.workspace}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Scope
                    </span>

                    <span className="text-right text-sm text-slate-300">
                      {item.scope}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Origin
                    </span>

                    <span className="text-right text-sm text-slate-300">
                      {item.origin}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Reviewer
                    </span>

                    <span className="text-right text-sm text-slate-300">
                      {item.reviewer}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 px-5 py-4">
            <p className="text-xs leading-5 text-slate-400">
              Review queue, synthetic. Generated items are labelled and never
              auto-approved.
            </p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">

                      {/* Permitted Reviewer Actions */}
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400 text-emerald-400">
                ✓
              </div>

              <h3 className="text-lg font-bold text-white">
                Permitted reviewer actions
              </h3>
            </div>

            <ul className="space-y-3">
              {permittedActions.map((action) => (
                <li
                  key={action}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 text-sm font-bold text-emerald-400">
                    ✓
                  </span>

                  <span className="text-sm leading-6 text-slate-300">
                    {action}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prohibited Automation */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-red-400 text-red-400">
                ✕
              </div>

              <h3 className="text-lg font-bold text-white">
                Prohibited automation
              </h3>
            </div>

            <ul className="space-y-3">
              {prohibitedAutomation.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 text-base font-bold text-red-400">
                    ✕
                  </span>

                  <span className="text-sm leading-6 text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Note */}
                {/* Footer Note */}
        <div className="mt-8">
          <p className="text-center text-xs leading-6 text-slate-400 md:text-sm">
            Decision evidence records actor, role, effective access, action,
            reason, before and after, source, policy, timestamp, audit
            reference, and downstream result. Where context contributes to a
            worker-facing record, that record shows source and review status
            and follows approved correction rights.
          </p>
        </div>
      </div>
    </section>
  );
}