const cards = [
    {
        src: "/leadership-governance/clock.png",
        title: "Strategic Stewardship",
        desc: "ZoikoTime's leadership is responsible for the platform's long-term direction, enterprise positioning, responsible AI commitment, security expectations, and governance culture — not just product feature decisions.",
    },
    {
        src: "/leadership-governance/box.png",
        title: "Product Accountability",
        desc: "Product decisions should consider usability, workforce transparency, security, auditability, legal alignment, worker rights, customer trust, and the implications of workforce data processing at every stage.",
    },
    {
        src: "/leadership-governance/scale.png",
        title: "Governance Culture",
        desc: "ZoikoTime's development philosophy emphasizes permissions, review workflows, policy controls, documentation discipline, and governance-led engineering as core platform values — not optional additions.",
    },
    {
        src: "/leadership-governance/hands.png",
        title: "Customer Trust Discipline",
        desc: "Enterprise customers need confidence that ZoikoTime is built for durable use, responsible deployment, long-term product commitment, and serious organizational accountability over time.",
    },
];

export default function Accountability() {
    return (
        <section className="bg-[#F4F7FA] px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold tracking-[1.30px] text-[#009D8C] mb-3">
                        Leadership
                    </span>
                    <h2 className="text-4xl md:text-[34px] font-semibold text-[#0D1526] mb-5">
                        Leadership as Accountability Infrastructure
                    </h2>
                    <p className="text-[#5A6E87] max-w-225 mx-auto">
                        ZoikoTime is developed by Zoiko Tech Inc., a technology company under Zoiko Group Inc. Leadership at ZoikoTime should be
                        understood as more than strategy. It is the accountability layer behind product direction, governance standards, security expectations, customer trust, and responsible platform evolution.
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
