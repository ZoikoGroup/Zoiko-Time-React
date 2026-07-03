const cards = [
    {
        src: "/leadership-governance/build.png",
        title: "Enterprise Readiness",
        desc: "ZoikoTime is designed to support serious organizational deployment across administrators, departments, worker categories, jurisdictions, and governance requirements.",
    },
    {
        src: "/leadership-governance/scale.png",
        title: "Implementation Discipline",
        desc: "Successful rollout depends on configuration, policy setup, permission design, user education, worker communication, and ongoing adoption monitoring — not just product access.",
    },
    {
        src: "/leadership-governance/lock.png",
        title: "Security Review Support",
        desc: "Enterprise customers may require documentation, security addenda, access control details, data handling explanations, and governance resources to support procurement and IT review.",
    },
    {
        src: "/leadership-governance/books.png",
        title: "Documentation and Guides",
        desc: "Product documentation, admin guides, worker guides, FAQs, help center content, and implementation resources support responsible adoption across every role in the organization.",
    },
];

export default function EnterpriseTrust() {
    return (
        <section className="bg-[#F4F7FA] px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold tracking-[1.30px] text-[#009D8C] mb-3">
                        Enterprise Trust
                    </span>
                    <h2 className="text-4xl md:text-[30px] font-semibold text-[#0D1526] mb-6">
                        Governance That Supports Enterprise Confidence
                    </h2>
                    <p className="text-[#5A6E87] max-w-245 mx-auto mb-20">
                        Enterprise buyers need more than feature lists.
                        They need confidence that ZoikoTime can support implementation planning,
                        security review, access control, documentation,
                        workforce transparency, reporting needs, and long-term operating requirements.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                    {cards.map(({ src, title, desc }) => (
                        <div
                            key={title}
                            className="bg-white flex items-start gap-2 rounded-lg shadow-sm p-6"
                        >
                            <img src={src} alt="image" />
                            <div>
                                <h3 className="font-semibold text-[#0D1526] text-[15px] max-w-70 mb-2">{title}</h3>
                                <p className="text-sm text-[#5A6E87] max-w-101">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
