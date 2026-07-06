const cards = [
    {
        src: "/about-us/enterprise.png",
        title: "Enterprise Operating Environments",
        desc: "Large enterprises and global operations requiring consistent governance across complex, multi-jurisdiction structures.",
    },
    {
        src: "/about-us/high.png",
        title: "High-Trust Sectors",
        desc: "Finance, legal, healthcare, and telecommunications — sectors where audit defensibility and regulatory compliance are foundational.",
    },
    {
        src: "/about-us/revenue.png",
        title: "Revenue-Sensitive Teams",
        desc: "Professional services and client-billable teams where billing accuracy, verified output, and time integrity are directly tied to revenue.",
    },
    {
        src: "/about-us/modern.png",
        title: "Modern Work Models",
        desc: "Remote-first and hybrid organisations that have gained flexibility but need to maintain consistent governance and performance visibility.",
    },
    {
        src: "/about-us/risk.png",
        title: "High-Risk Labour Structures",
        desc: "Contractor-heavy and high-payroll environments where misclassification risk, verification gaps, and billing accuracy create material exposure.",
    },
];
export default function Objective() {
    return (
        <section className="bg-white px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12 flex flex-col items-center">
                    <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#009D8C] mb-5">
                        Built For
                    </span>
                    <h2 className="text-4xl md:text-[30px] max-w-140 font-semibold text-[#0D1526] mb-5">
                        Designed for Organisations Where
                        Accuracy Is Non- Negotiable
                    </h2>
                    <p className="text-[#5A6E87] max-w-130 mx-auto">
                        ZoikoTime is built for the operating environments where governance,
                        defensibility, and control are requirements — not differentiators.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-6 text-center">
                    {cards.map(({ src, title, desc }) => (
                        <div
                            key={title}
                            className="bg-white rounded-lg border-b-4 flex flex-col items-center justify-between md:max-w-80 border-teal-500 shadow-sm p-6"
                        >
                            <img src={src} alt="image" height={45} width={25} className="mb-5" />
                            <h3 className="font-semibold text-[#0D1526] text-[18px] max-w-50 mb-2">{title}</h3>
                            <p className="text-sm text-[#5A6E87] max-w-60 mb-3">{desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-[#EAF9F6] p-6 border text-center border-[#009D8C26]  rounded-xl mt-10">
                    <span className="text-[#2A3D55] font-medium text-[17px] leading-6">
                        The platform scales from {" "}<span className="text-[#009D8C]">targeted pilots to complex, multi-jurisdiction deployments</span> — without compromising control, performance, or
                        governance integrity.
                    </span>
                </div>
            </div>
        </section>
    );
}
