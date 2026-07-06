const cards = [
    {
        src: "/about-us/lock.png",
        title: "SOC 2 Type II Controls",
        desc: "Security, availability, processing integrity, confidentiality, and privacy controls aligned to SOC 2 Type II standards — with independently verifiable evidence for enterprise procurement and audit teams.",
    },
    {
        src: "/about-us/globe.png",
        title: "Global Privacy Alignment",
        desc: "GDPR, CCPA, and jurisdictional privacy regulations are reflected in system architecture — not just policy documentation. Data residency, retention, and processing controls are configurable per jurisdiction.",
    },
    {
        src: "/about-us/ylock.png",
        title: "Cryptographic Integrity",
        desc: "Encryption at rest and in transit, signed and tamper-evident exports, and immutable audit logs ensure that ZoikoTime records cannot be altered — providing the cryptographic integrity that legal and regulatory proceedings demand.",
    },
];

const data = [
    "SOC 2 Type II Aligned",
    "GDPR Compliant",
    "CCPA Ready",
    "ISO 27001 Framework",
    "Encryption at Rest & Transit",
    "Tamper-Evident Exports",
    "Immutable Audit Logs",
];

export default function Security() {
    return (
        <section className="bg-white px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12 flex flex-col items-center">
                    <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#009D8C] mb-5">
                        Security & Compliance
                    </span>
                    <h2 className="text-4xl md:text-[30px] font-semibold text-[#0D1526] mb-5">
                        Built to Meet Enterprise-Grade Security Expectations
                    </h2>
                    <p className="text-[#5A6E87] max-w-120 mx-auto">
                        ZoikoTime is designed to withstand procurement due diligence,
                        internal audit review, regulatory scrutiny, and third-party risk
                        assessments — not just operational use.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                    {cards.map(({ src, title, desc }) => (
                        <div
                            key={title}
                            className="bg-white rounded-lg flex flex-col md:max-w-80 border border-[#E4EBF4] shadow-sm p-6"
                        >
                            <div className="bg-[#EAF9F6] border border-[#009D8C33] rounded-xl h-12 w-12 mb-4 flex justify-center items-center">
                                <img src={src} alt="image" />
                            </div>
                            <h3 className="font-semibold text-[#0D1526] text-[18px] max-w-70 mb-2">{title}</h3>
                            <p className="text-sm text-[#5A6E87] max-w-60">{desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-[#F4F7FA] flex flex-wrap justify-center gap-5 rounded-xl p-6 mt-10">
                    {
                        data.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 px-5 py-2 bg-white rounded-full">
                                <span className="bg-[#009D8C] mt-[6px] h-2 w-2 rounded-[4px]"/>
                                <p className="text-[13px] font-bold text-[#0D1526]">{item}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
