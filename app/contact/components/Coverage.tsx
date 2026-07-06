const cards = [
    {
        heading: "EMEA",
        title: "UK, Europe & Middle East",
        desc: "Primary regional team — GDPR jurisdiction expertise, regulated sector specialization, and UK/EU enterprise deployment experience.",
        points: [
            "Sales & commercial engagement",
            "Compliance and regulatory support",
            "Enterprise deployment leadership",
        ],
    },
    {
        heading: "NORTH AMERICA",
        title: "United States & Canada",
        desc: "US operations — CCPA/state privacy law expertise, North American enterprise and regulated sector coverage across financial services, healthcare, and professional services.",
        points: [
            "Sales & commercial engagement",
            "US-specific compliance guidance",
            "Enterprise technical implementation",
        ],
    },
    {
        heading: "APAC & GLOBAL",
        title: "Asia Pacific & Rest of World",
        desc: "APAC and global market coverage — distributed workforce expertise, multi-jurisdiction deployment experience, and regional compliance alignment.",
        points: [
            "Global enterprise coordination",
            "Multi-jurisdiction deployment",
            "Regional compliance adaptation",
        ],
    },
];

export default function Coverage() {
    return (
        <section className="bg-white px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-[30px] font-semibold text-[#0D1526] mb-4">
                        Regional Teams & Routing
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                    {cards.map(({ heading, title, desc, points }) => (
                        <div
                            key={title}
                            className="bg-white rounded-lg border border-[#E4EBF4] flex flex-col gap-2 shadow-[0_4px_12px_#0D15260F] p-6"
                        >
                            <span className="text-[#009D8C] font-bold uppercase tracking-[1px]">
                                {heading}
                            </span>

                            <h3 className="font-semibold text-[#0D1526] text-[15px] mb-2">
                                {title}
                            </h3>

                            <p className="text-sm text-[#5A6E87] max-w-70 mb-4">
                                {desc}
                            </p>

                            <ul className="flex flex-col gap-2">
                                {points.map((point, index) => (
                                    <li
                                        key={index}
                                        className="text-[#5A6E87] text-xs flex items-center gap-2"
                                    >
                                        <span className="text-[#009D8C]">›</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
