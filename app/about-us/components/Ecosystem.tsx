const data = [
    {
        src: "/about-us/chain.png",
        title: "ZoikoSuite™",
        description:
            "Native integration across the full enterprise productivity suite",
    },
    {
        src: "/about-us/revenue.png",
        title: "HR Platforms",
        description:
            "Connects with leading HRIS and workforce management systems",
    },
    {
        src: "/about-us/chart.png",
        title: "Payroll Systems",
        description:
            "Verified time data flows directly into payroll and billing platforms",
    },
    {
        src: "/about-us/lock.png",
        title: "Identity Providers",
        description:
            "SSO and identity management integration for enterprise access control",
    },
    {
        src: "/about-us/read.png",
        title: "Compliance Tools",
        description:
            "Export-ready records formatted for GRC and compliance platforms",
    },
    {
        src: "/about-us/cloud.png",
        title: "Collaboration Platforms",
        description:
            "Integrates with enterprise collaboration and project delivery tools",
    },
];

export default function Ecosystem() {
    return (
        <section className="bg-white px-6 py-24 md:px-54">
            <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6 md:gap-25 items-center">
                <div>
                    <span className="inline-block uppercase text-xs font-bold tracking-[1.30px] text-[#009D8C] mb-6">
                        Part of the Zoiko Ecosystem
                    </span>
                    <h1 className="text-3xl md:text-[36px] md:min-w-135 font-bold text-[#0D1526] leading-tight mb-5">
                        Seamlessly Integrated With
                        the Zoiko Group Portfolio
                    </h1>
                    <p className="text-[#5A6E87] text-[17px] mb-4 max-w-127">
                        ZoikoTime is part of the Zoiko Group technology portfolio —
                        integrating natively with ZoikoSuite, enterprise collaboration
                        platforms, and productivity and workflow systems.
                    </p>
                    <p className="text-[#5A6E87] rounded-xl text-[15px] mb-8 max-w-125">
                        This enables organisations to adopt ZoikoTime without
                        disrupting existing systems, processes, or governance
                        models — deploying the capabilities they need on the
                        timeline that suits their operational reality.
                    </p>

                    <button className="bg-[#009D8C] shadow-[0_4px_20px_0_rgba(0,157,140,0.4)] hover:bg-teal-600 cursor-pointer text-white font-medium px-10 py-3 rounded-[8px] transition-colors border border-[#C8D6E8]">
                        Explore Integrations
                    </button>

                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    {data.map((item, idx) => (
                        <div key={idx} className="border flex items-center gap-4 bg-white p-5 border-[#E4EBF4] rounded-xl shadow-[0_4px_12px_#0D15260A]">
                            <div className="bg-[#EAF9F6] flex justify-center items-center rounded-[8px] h-10 w-22">
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
