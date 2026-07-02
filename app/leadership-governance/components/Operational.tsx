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
        <section className="bg-[#F4F7FA] px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl text-center">
                <span className="inline-block text-xs font-bold tracking-[1.30px] text-[#009D8C] mb-3">
                    Operational Governance
                </span>
                <h2 className="text-4xl md:text-[30px] font-semibold text-[#0D1526] mb-3">
                    From Governance Principles to Operating Controls
                </h2>
                <p className="text-[#5A6E87] max-w-210 mx-auto">
                    ZoiroTime&apos;s governance model connects people, policies, permissions, evidence,
                    AI-assisted insights, retention controls, and review workflows into a practical
                    operating framework for workforce intelligence.
                </p>
            </div>

            <div className="mx-auto mt-10 max-w-4xl divide-y divide-slate-100 rounded-xl bg-white shadow-sm">
                {CONTROLS.map((item, i) => (
                    <div key={item.title} className="flex gap-4 px-8 py-6">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#009D8C40] bg-[#EAF9F6] text-xs font-semibold text-teal-700">
                            {i + 1}
                        </div>
                        <div>
                            <h3 className="text-[15px] font-semibold text-slate-900">{item.title}</h3>
                            <p className="mt-1 text-[13px] leading-relaxed text-[#5A6E87]">{item.body}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <a href="#" className="text-sm font-semibold text-[#009D8C] hover:text-teal-700">
                    Explore Enterprise Readiness →
                </a>
            </div>
        </section>
    );
}
