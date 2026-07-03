const cards = [
    {
        src: "/enterprise-readiness/guy.png",
        title: "Role-Based Access",
        desc: "Defined access by role, responsibility, team, department, or administrative authority. Different users see and do different things based on their organizational position.",
    },
    {
        src: "/enterprise-readiness/operation.png",
        title: "Administrative Controls",
        desc: "Support authorized users in managing company settings, teams, workers, policies, permissions, billing configurations, and workspace governance from a central admin view.",
    },
    {
        src: "/enterprise-readiness/approvel.png",
        title: "Approval Workflows",
        desc: "Support structured review of time records, exceptions, attendance issues, timesheets, project time, and manager escalations through governed approval chains.",
    },
    {
        src: "/enterprise-readiness/chart.png",
        title: "Reporting Permissions",
        desc: "Control access to workforce reports, analytics, exports, evidence packages, and sensitive operational data by role, department, and authorization level.",
    },
    {
        src: "/enterprise-readiness/camera.png",
        title: "Screenshot Governance",
        desc: "Where screenshots are enabled, govern capture settings, access permissions, redaction controls, retention, and worker transparency to support privacy-aware deployment.",
    },
    {
        src: "/enterprise-readiness/ylock.png",
        title: "Retention and Legal Hold",
        desc: "Support retention controls, preservation workflows, legal hold processes, and traceable historical records for governance, dispute, and compliance requirements.",
    },
];

export default function Governance() {
    return (
        <section className="bg-white px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold tracking-[1.30px] text-[#009D8C] mb-3">
                        Governance and Access
                    </span>
                    <h2 className="text-3xl md:text-[30px] font-semibold text-[#0D1526] mb-5">
                        Control Who Sees What, and Who Can Do What
                    </h2>
                    <p className="text-[#5A6E87] max-w-210 mx-auto">
                        ZoikoTime's enterprise value depends on giving organizations
                        the ability to control who can access workforce data, configure settings,
                        review records, approve exceptions, export reports, and manage sensitive workflows.
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 gap-4">
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
