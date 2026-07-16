const CONTROLS = [
  {
    title: "Role-Based Controls",
    body: "Define what administrators, managers, workers, finance users, HR users, legal users, compliance users, and executives can access, view, configure, export, and manage within ZoiroTime.",
  },
  {
    title: "Policy-Aligned Workflows",
    body: "Support workforce policies through structured time capture, approval rules, exception handling, escalation paths, and configurable monitoring settings aligned to organizational requirements.",
  },
  {
    title: "Evidence and Audit Trails",
    body: "Maintain traceable records for time events, edits, approvals, exceptions, exports, administrative actions, and policy changes — with full actor, timestamp, IP, and context details.",
  },
  {
    title: "AI Governance Controls",
    body: "Use AI-assisted insights to surface patterns, summarize data, and prioritize review while preserving human oversight requirements and organizational decision authority for sensitive outcomes.",
  },
  {
    title: "Retention and Legal Hold",
    body: "Support configurable retention settings, legal hold workflows, record preservation, export controls, and traceable governance history for compliance, dispute, and audit purposes.",
  },
  {
    title: "Security and Access Governance",
    body: "Protect workforce records with permissioned access, secure workflows, administrative controls, session management, and access audit logs designed for enterprise security standards.",
  },
];

export default function Operational() {
  return (
    <section className="bg-[#F4F7FA] dark:bg-gray-900 px-6 py-16 sm:py-20 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      {/* Heading */}
      <div className="mx-auto max-w-6xl text-center">
        <span className="mb-3 inline-block text-xs font-bold tracking-[1.3px] text-[#009D8C] dark:text-teal-400">
          Operational Governance
        </span>

        <h2 className="mb-4 text-3xl font-semibold text-[#0D1526] dark:text-white md:text-[32px]">
          From Governance Principles to Operating Controls
        </h2>

        <p className="mx-auto max-w-4xl leading-7 text-[#5A6E87] dark:text-gray-300">
          ZoikoTime&apos;s governance model connects people, policies,
          permissions, evidence, AI-assisted insights, retention controls,
          and review workflows into a practical operating framework for
          workforce intelligence.
        </p>
      </div>

      {/* Controls List */}
      <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300 divide-y divide-slate-100 dark:divide-gray-700">
        {CONTROLS.map((item, i) => (
          <div
            key={item.title}
            className="flex items-start gap-4 px-6 py-6 sm:px-8"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#009D8C40] bg-[#EAF9F6] text-sm font-semibold text-[#009D8C] dark:border-teal-500/40 dark:bg-teal-500/10 dark:text-teal-300">
              {i + 1}
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#5A6E87] dark:text-gray-300">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="mt-8 text-center">
        <a
          href="#"
          className="text-sm font-semibold text-[#009D8C] transition hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
        >
          Explore Enterprise Readiness →
        </a>
      </div>
    </section>
  );
}