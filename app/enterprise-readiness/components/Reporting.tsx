const cards = [
    {
        src: "/enterprise-readiness/upper.png",
        title: "Workforce Analytics",
        desc: "Visibility into time, activity, attendance, utilization, productivity patterns, workload signals, and operational performance across teams, departments, and projects.",
    },
    {
        src: "/enterprise-readiness/card.png",
        title: "Payroll and Timesheet Integrity",
        desc: "Help teams review time records, approvals, corrections, exceptions, and supporting activity before payroll processing and timesheet finalization.",
    },
    {
        src: "/enterprise-readiness/report.png",
        title: "Client Billing Support",
        desc: "Support professional services and project-based teams with records that help validate billable time, project allocation, and client-facing evidence packages.",
    },
    {
        src: "/enterprise-readiness/data.png",
        title: "Audit-Ready Evidence",
        desc: "Traceable records, approval history, edits, exports, exceptions, timestamps, and review context that support audit preparation, disputes, and governance reviews.",
    },
    {
        src: "/enterprise-readiness/ylock.png",
        title: "Legal Hold Support",
        desc: "Record preservation workflows where organizations need to retain relevant workforce records for legal, regulatory, dispute, or compliance purposes.",
    },
    {
        src: "/enterprise-readiness/shirt.png",
        title: "Executive Reporting",
        desc: "Leadership visibility into workforce patterns, productivity, utilization, exceptions, risks, and operational performance at the team, department, and enterprise level.",
    },
];

export default function Reporting() {
    return (
        <section className="bg-slate-900 px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-semibold tracking-[1.3px] text-[#00C6A9] mb-3">
                        Reporting and Evidence
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-5">
                        Records That Can Be Reviewed, Explained, and Governed
                    </h2>
                    <p className="text-[#FFFFFF8C] max-w-230 mx-auto">
                        Enterprise customers need workforce records that can be reviewed,
                        explained, exported, and governed. ZoikoTime is designed to support
                        reporting and evidence workflows for payroll, billing, audits, and compliance.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cards.map(({ src, title, desc }) => (
                        <div
                            key={title}
                            className="bg-[#FFFFFF0D] border border-[#FFFFFF14] rounded-[14px] p-5"
                        >
                            <img src={src} alt="image" className="mb-3" />
                            <h3 className="font-semibold text-[15px] text-white mb-2">{title}</h3>
                            <p className="text-sm text-[#FFFFFF8C] max-w-72">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
