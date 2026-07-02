const cards = [
    {
        src: "/enterprise-readiness/scale.png",
        title: "Team and Department Scaling",
        desc: "Support deployment across departments, project teams, worker groups, managers, admins, and entities as organizational needs grow and evolve over time.",
    },
    {
        src: "/enterprise-readiness/chain.png",
        title: "Integration Readiness",
        desc: "Support integration discussions involving payroll, HR, project management, finance, communications, and identity systems as the deployment matures and requires broader connectivity.",
    },
    {
        src: "/enterprise-readiness/books.png",
        title: "Documentation and Enablement",
        desc: "Product documentation, admin guides, worker guides, implementation resources, FAQs, and help center content support responsible adoption across every role.",
    },
    {
        src: "/enterprise-readiness/sos.png",
        title: "Support and Escalation",
        desc: "Support for customer questions, configuration needs, issue resolution, implementation guidance, and escalation routes appropriate to the customer's plan and deployment scope.",
    },
    {
        src: "/enterprise-readiness/globe.png",
        title: "Multi-Region Operating Awareness",
        desc: "Support for customer conversations around distributed teams, jurisdictional needs, worker transparency requirements, and configuration choices that vary by location.",
    },
    {
        src: "/enterprise-readiness/map.png",
        title: "Long-Term Product Roadmap",
        desc: "ZoikoTime is part of Zoiko Tech's broader strategy for governed workforce intelligence, responsible AI, and enterprise software — not a short-term product experiment.",
    },
];

export default function Scalability() {
    return (
        <section className="bg-white px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold tracking-[1.30px] text-[#009D8C] mb-3">
                        Scalability and Support
                    </span>
                    <h2 className="text-3xl md:text-[30px] font-semibold text-[#0D1526] mb-5">
                        Built to Grow With Your Organization
                    </h2>
                    <p className="text-[#5A6E87] max-w-215 mx-auto">
                        ZoikoTime is designed to support organizations as they expand from initial deployment to
                        broader workforce governance across teams, departments, business
                        units, and operational use cases.
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
