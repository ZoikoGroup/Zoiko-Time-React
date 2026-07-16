const cards = [
  {
    src: "/leadership-governance/guy.png",
    title: "Human Accountability",
    desc: "ZoikoTime should support human decision-making. Sensitive workforce, payroll, disciplinary, legal, and operational decisions should remain subject to appropriate human review and organizational policy — not delegated to automated outputs.",
  },
  {
    src: "/leadership-governance/search.png",
    title: "Explainable Records",
    desc: "Workforce records should be understandable, traceable, and supported by context such as timestamps, activity signals, approvals, edits, notes, and manager decisions — so that any review can be explained and defended.",
  },
  {
    src: "/leadership-governance/ylock.png",
    title: "Permissioned Access",
    desc: "Users should only access workforce data appropriate to their role, responsibility, authorization level, and organizational context. Access must be governed, audited, and reviewed on a regular basis.",
  },
  {
    src: "/leadership-governance/eye.png",
    title: "Worker Transparency",
    desc: "Workers should have appropriate visibility into relevant time records, policies, guides, and workforce workflows that affect them — enabling fair, transparent, and accountable organizational oversight.",
  },
  {
    src: "/leadership-governance/ai.png",
    title: "Responsible AI",
    desc: "AI should assist with summaries, pattern detection, prioritization, and decision support — not act as an autonomous decision-maker for employment, disciplinary, compensation, or worker-impacting outcomes.",
  },
  {
    src: "/leadership-governance/evidence.png",
    title: "Evidence Readiness",
    desc: "Organizations should be able to explain how workforce records were created, reviewed, changed, approved, and governed — so that decisions are defensible in any payroll, legal, compliance, or audit context.",
  },
];

export default function Principles() {
  return (
    <section className="bg-white dark:bg-gray-900 px-6 py-12 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold tracking-[1.3px] text-[#009D8C] dark:text-teal-400">
            Governance Principles
          </span>

          <h2 className="mb-4 text-3xl font-semibold text-[#0D1526] dark:text-white md:text-[30px]">
            Governance Is the Operating Principle
          </h2>

          <p className="mx-auto max-w-5xl leading-7 text-[#5A6E87] dark:text-gray-300">
            ZoikoTime operates in a sensitive category: workforce data. Time
            records, activity signals, screenshots where enabled, approvals,
            exceptions, reports, and AI-assisted insights may influence
            payroll, billing, utilization reviews, operational decisions,
            compliance workflows, and dispute resolution. That is why clear
            governance principles must govern deployment.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ src, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border-t-4 border-teal-500 bg-white dark:bg-gray-800 p-6 shadow-sm transition-colors duration-300"
            >
              <img
                src={src}
                alt={title}
                className="mb-5 h-14 w-14 object-contain"
              />

              <h3 className="mb-3 text-lg font-semibold text-[#0D1526] dark:text-white">
                {title}
              </h3>

              <p className="text-sm leading-6 text-[#5A6E87] dark:text-gray-300">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}