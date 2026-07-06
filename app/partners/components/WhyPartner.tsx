const cards = [
    {
        title: "Expanding market need",
        desc: "Distributed teams, contractor-heavy workforces, hybrid work, payroll scrutiny, and client-billing pressure are increasing demand for trusted workforce intelligence.",
    },
    {
        title: "Clear customer value",
        desc: "ZoikoTime helps organizations review time records, manage exceptions, improve visibility, support payroll confidence, and strengthen reporting.",
    },
    {
        title: "Enterprise-relevant category",
        desc: "A platform that spans HR, payroll, finance, legal, operations, compliance, productivity, and executive reporting.",
    },
    {
        title: "Partner-led deployment",
        desc: "Customers may need support with configuration, rollout planning, policy alignment, worker communication, training, reporting, and adoption.",
    },
];

export default function WhyPartner() {
    return (
        <section className="bg-[#F6F9F9] px-6 py-12 md:px-54">
            <div className="mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold tracking-[1.30px] uppercase text-[#009D8C] mb-3">
                        Why Partner
                    </span>
                    <h2 className="text-4xl md:text-[34px] font-semibold text-[#0D1526] mb-5">
                        Why partner with ZoikoTime
                    </h2>
                    <p className="text-[#5A6E87] max-w-140 mx-auto">
                        ZoikoTime sits at the intersection of HR, payroll, finance, legal, operations,
                        compliance, productivity, and executive reporting — creating real opportunities
                        for qualified partners.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                    {cards.map(({ title, desc }) => (
                        <div
                            key={title}
                            className="bg-white flex flex-col gap-2 items-start rounded-lg shadow-sm p-6"
                        >
                            <div className="flex gap-2 items-center">
                                <span className="h-2 w-2 rounded-[3.5px] bg-[#10A28D]" />
                                <h3 className="font-semibold text-[#0D1526] text-[15px] max-w-70">{title}</h3>
                            </div>
                            <p className="text-sm text-[#5A6E87] max-w-101">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
