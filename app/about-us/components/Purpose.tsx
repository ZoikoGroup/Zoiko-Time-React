
const data = [
    {
        src: "/about-us/home.png",
        title: "Executive Scrutiny Ready",
        description: "Built to withstand board-level governance review, CISO assessment, and internal audit examination — not just day-to-day operational use.",
    },
    {
        src: "/about-us/read.png",
        title: "Procurement Due Diligence",
        description: "Complete security documentation, compliance alignment, and architecture transparency to satisfy the most rigorous enterprise procurement processes.",
    },
    {
        src: "/about-us/globe.png",
        title: "Regulatory Inspection Ready",
        description: "Designed to support regulatory scrutiny across jurisdictions — with audit-ready records, jurisdiction-aware policy controls, and defensible documentation at every level.",
    },
    {
        src: "/about-us/setting.png",
        title: "Real-World Operational Complexity",
        description: "Proven across multi-jurisdiction deployments, contractor-heavy operations, and hybrid workforce models — not just controlled enterprise pilots.",
    },
];

export default function Purpose() {
    return (
        <section className="bg-[#F4F7FA] px-6 py-24 md:px-54">
            <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6 md:gap-25 items-center">
                <div>
                    <span className="inline-block uppercase text-xs font-bold tracking-[1.30px] text-[#009D8C] mb-6">
                        Our Purpose
                    </span>
                    <h1 className="text-3xl md:text-[36px] md:min-w-135 font-bold text-[#0D1526] leading-tight mb-5">
                        Enable Accurate Measurement.
                        Responsible Governance.
                        Intelligent Performance.
                    </h1>
                    <p className="text-[#5A6E87] text-[17px] mb-4 max-w-127">
                        ZoikoTime exists to enable organisations to measure work
                        accurately, govern it responsibly, and improve performance
                        intelligently — without compromising trust, privacy, or employee
                        rights.
                    </p>
                    <p className="text-[#007D6F] rounded-xl p-2 bg-[#EAF9F6] border border-[#009D8C33] border-l-3 border-l-[#009D8C] text-[15px] mb-8 p-6 max-w-125">
                        <span className="text-[#0D1526] font-bold">ZoikoTime is not a surveillance product.</span>{" "} It is a governed system of
                        record for workforce accountability and performance intelligence
                        — engineered to withstand executive scrutiny, procurement due
                        diligence, regulatory inspection, and real-world operational
                        complexity.
                    </p>

                </div>
                <div className="flex flex-col gap-5">
                    {data.map((item, idx) => (
                        <div key={idx} className="border flex gap-4 bg-white p-5 border-[#E4EBF4] rounded-xl shadow-[0_4px_12px_#0D15260A]">
                            <div className="bg-[#EAF9F6] flex justify-center items-center rounded-[8px] h-10 w-10">
                                <img src={item.src} alt="Image" height={22} width={20} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-[15px] text-[#0D1526] font-bold">{item.title}</h2>
                                <p className="text-[13px] text-[#5A6E87] max-w-82">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
