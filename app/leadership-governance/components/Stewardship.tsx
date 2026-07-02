const cards = [
    {
        src: "/leadership-governance/clock.png",
        title: "Time and Activity Records",
        desc: "Time entries, activity signals, idle patterns, app usage, URL usage, and screenshots where enabled should be governed with clear purposes, access controls, retention rules, and worker transparency.",
    },
    {
        src: "/leadership-governance/camera.png",
        title: "Screenshots and Redaction Controls",
        desc: "Where screenshots are enabled, organizations should use privacy-aware settings, redaction controls, purpose-limited access, worker notices, and governance documentation appropriate to their jurisdiction.",
    },
    {
        src: "/leadership-governance/rack.png",
        title: "Payroll and Billing Sensitivity",
        desc: "Records that support payroll, timesheets, client billing, utilization, and project costing affect real financial outcomes and should be governed with appropriate human review, access controls, and audit trails.",
    },
    {
        src: "/leadership-governance/eye.png",
        title: "Worker Access and Transparency",
        desc: "Workers should be able to understand relevant records, policies, guides, and workflows that affect them through appropriate visibility, notice, and access rights aligned to organizational and legal requirements.",
    },
];

export default function Stewardship() {
    return (
        <section className="bg-white px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold tracking-[1.30px] text-[#009D8C] mb-3">
                        Data Stewardship
                    </span>
                    <h2 className="text-3xl md:text-[30px] font-semibold text-[#0D1526] mb-5">
                        Workforce Data Requires Care, Context, and Control
                    </h2>
                    <p className="text-[#5A6E87] max-w-210 mx-auto">
                        Workforce data can be commercially valuable and personally sensitive.
                        ZoikoTime's governance approach is designed to help  organizations manage
                        workforce intelligence responsibly, with clear access rules, review processes,
                        transparency, retention controls, and auditability.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                    {cards.map(({ src, title, desc }) => (
                        <div
                            key={title}
                            className="bg-white rounded-lg shadow-sm p-6"
                        >
                            <img src={src} alt="image" className="mb-4" />
                            <h3 className="font-semibold text-[#0D1526] text-[15px] max-w-70 mb-2">{title}</h3>
                            <p className="text-sm text-[#5A6E87] max-w-120">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
