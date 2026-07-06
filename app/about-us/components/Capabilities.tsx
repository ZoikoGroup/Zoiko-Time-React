
const cards = [
    {
        number: "CAPABILITY 01",
        src: "/about-us/shield.png",
        title: "Workforce Assurance",
        desc: "ZoikoTime provides policy-driven assurance signals that validate work sessions, detect anomalies, and manage exceptions — supported by structured human oversight at every consequential decision point.",
        points: [
            "Reduce payroll leakage and policy drift across all workforce types",
            "Strengthen defensibility in audits, investigations, and disputes",
            "Increase confidence in recorded work and time data at scale",
        ],
    },
    {
        number: "CAPABILITY 02",
        src: "/about-us/scale.png",
        title: "Performance Intelligence",
        desc: "ZoikoTime transforms workforce data into explainable, decision-grade insights that connect effort, tools, and outcomes — enabling organisations to manage performance fairly, accurately, and at scale.",
        points: [
            "Understand workload distribution, constraints, and bottlenecks",
            "Improve delivery planning, capacity management, and resource allocation",
            "Conduct fair, evidence-based performance discussions without subjectivity",
        ],
    },
    {
        number: "CAPABILITY 03",
        src: "/about-us/audit.png",
        title: "Audit-Ready Documentation",
        desc: "ZoikoTime produces structured, tamper-evident records aligned with HR, legal, and compliance workflows — enabling organisations to respond rapidly to audits, investigations, and regulatory inspections.",
        points: [
            "Respond rapidly to audits, investigations, and formal disputes",
            "Support wage-and-hour and policy compliance reviews across jurisdictions",
            "Maintain consistent documentation standards globally, without manual effort",
        ],
    },
];

export default function Capabilities() {
    return (
        <section className="bg-[#F4F7FA] px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12 flex flex-col items-center">
                    <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#009D8C] mb-5">
                        What We Do
                    </span>
                    <h2 className="text-4xl md:text-[30px] max-w-140 font-semibold text-[#0D1526] mb-5">
                        Three Enterprise-Critical Capabilities
                        One Governed Platform
                    </h2>
                    <p className="text-[#5A6E87] max-w-130 mx-auto">
                        ZoikoTime unifies workforce assurance, performance intelligence, and
                        audit-ready documentation into a single, governed system of record —
                        engineered for the complexity of modern enterprise operations.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-0 md:w-5xl md:ml-10">
                    {cards.map(({ number, src, title, desc, points }) => (
                        <div
                            key={title}
                            className="bg-white rounded-lg border-t-4 flex flex-col justify-between md:max-w-80 border-teal-500 shadow-sm p-6"
                        >
                            <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#009D8C] mb-5">
                                {number}
                            </span>

                            <img src={src} alt="image" height={45} width={25} className="mb-5" />
                            <h3 className="font-semibold text-[#0D1526] text-[18px] max-w-50 mb-2">{title}</h3>
                            <p className="text-sm text-[#5A6E87] max-w-60 mb-3">{desc}</p>
                            {points.map((point, idx) => (
                                <div key={idx} className="flex gap-2 max-w-75">
                                    <span className="bg-[#009D8C] h-2 w-2 rounded-[3px] mt-1" />
                                    <p className="text-[#2A3D55] text-sm max-w-55">{point}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
