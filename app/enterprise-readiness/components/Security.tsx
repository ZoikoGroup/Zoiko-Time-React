const cards = [
    {
        src: "/enterprise-readiness/lock.png",
        title: "Security Review",
        desc: "Support for access control explanations, data handling information, authentication practices, administrative separation, and security documentation for IT and InfoSec reviewers.",
    },
    {
        src: "/enterprise-readiness/weigh.png",
        title: "Legal Review",
        desc: "Support for subscription terms, data retention practices, legal hold workflows, workforce data usage explanations, DPA provisions, and legal review documentation.",
    },
    {
        src: "/enterprise-readiness/box.png",
        title: "Procurement Review",
        desc: "Support for pricing discussions, contract review, stakeholder evaluation, commercial documentation, budget planning, and vendor assessment processes.",
    },
    {
        src: "/enterprise-readiness/people.png",
        title: "HR and Worker Policy Review",
        desc: "Support for worker-facing policy alignment, transparency expectations, screenshot settings where relevant, worker guides, and responsible deployment documentation.",
    },
    {
        src: "/enterprise-readiness/rack.png",
        title: "Finance Review",
        desc: "Support for timesheet integrity, payroll confidence, client billing evidence, utilization reporting, cost review, and project-level workforce analytics.",
    },
    {
        src: "/enterprise-readiness/monitor.png",
        title: "IT Review",
        desc: "Support for implementation planning, user access setup, account structure, integrations, administrative roles, device requirements, and technical configuration guidance.",
    },
];

export default function Security() {
    return (
        <section className="bg-slate-900 px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-semibold tracking-[1.3px] text-[#00C6A9] mb-3">
                        Security and Procurement
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-5">
                        Designed to Support Enterprise Buyer Review
                    </h2>
                    <p className="text-[#FFFFFF8C] max-w-230 mx-auto">
                        Enterprise buyers often need structured information before
                        adopting a workforce intelligence platform. ZoikoTime is designed
                        to support review processes involving security,
                        procurement, HR, legal, finance, operations, and compliance stakeholders.
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
            <div className="mt-10 text-center">
                <a href="#" className="text-sm font-semibold text-teal-400 hover:text-teal-300">
                    Review Security Addendum →
                </a>
            </div>
        </section>
    );
}
