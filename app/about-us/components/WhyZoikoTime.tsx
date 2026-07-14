
const cards = [
    {
        src: "/about-us/search.png",
        title: "Verification Gaps",
        desc: "Organisations cannot consistently prove that recorded work reflects legitimate, policy-aligned activity — particularly across distributed and contractor-heavy teams. The absence of verification is itself an audit and legal risk that accumulates with every working day.",
    },
    {
        src: "/about-us/weigh.png",
        title: "Operational and Legal Exposure",
        desc: "Wage-and-hour risk, compliance drift, payroll leakage, and inconsistent documentation create material financial and legal exposure — exposure that is often invisible until it surfaces in an audit, dispute, or regulatory investigation.",
    },
    {
        src: "/about-us/chart.png",
        title: "Performance Blind Spots",
        desc: "Activity data alone does not explain outcomes, capacity constraints, or delivery inefficiencies — leaving leadership without the actionable, evidence-based intelligence needed to manage performance fairly and effectively at scale.",
    },
];

export default function WhyZoikoTime() {
    return (
        <section className="bg-white px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12 flex flex-col items-center">
                    <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#009D8C] mb-5">
                        Why ZoikoTime Exists
                    </span>
                    <h2 className="text-4xl md:text-[30px] max-w-140 font-semibold text-[#0D1526] mb-5">
                        Distributed Work Changed the
                        Structure of Organisational Risk
                    </h2>
                    <p className="text-[#5A6E87] max-w-130 mx-auto">
                        Distributed work did not just change where work happens — it changed
                        the nature, scale, and complexity of the risks that organisations must
                        govern. ZoikoTime addresses these challenges not as features, but as
                        core infrastructure.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-0 md:w-5xl md:ml-10">
                    {cards.map(({ src, title, desc }) => (
                        <div
                            key={title}
                            className="bg-white rounded-lg border-t-4 h-75 flex flex-col justify-between md:max-w-80 border-teal-500 shadow-sm p-6"
                        >
                            <div className="bg-[#EAF9F6] border border-[#009D8C33] rounded-xl h-12 w-12 mb-4 flex justify-center items-center">
                                <img src={src} alt="image" />
                            </div>
                            <h3 className="font-semibold text-[#0D1526] text-[18px] max-w-70 mb-2">{title}</h3>
                            <p className="text-sm text-[#5A6E87] max-w-66">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
