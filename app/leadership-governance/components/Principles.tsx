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
        <section className="bg-white px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold tracking-[1.30px] text-[#009D8C] mb-3">
                        Governance Principles
                    </span>
                    <h2 className="text-4xl md:text-[30px] font-semibold text-[#0D1526] mb-4">
                        Governance Is the Operating Principle
                    </h2>
                    <p className="text-[#5A6E87] max-w-240 mx-auto">
                        ZoikoTime operates in a sensitive category: workforce data. Time records, activity signals, screenshots where enabled, approvals,
                        exceptions, reports, and AI-assisted insights may influence payroll, billing, utilization reviews, operational decisions, compliance
                        workflows, and dispute resolution. That is why clear governance  principles must govern deployment.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map(({ src, title, desc }) => (
                        <div
                            key={title}
                            className="bg-white rounded-lg border-t-4 border-teal-500 shadow-sm p-6"
                        >
                            <img src={src} alt="image" className="mb-4" />
                            <h3 className="font-semibold text-[#0D1526] text-[15px] max-w-70 mb-2">{title}</h3>
                            <p className="text-sm text-[#5A6E87] max-w-73">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
