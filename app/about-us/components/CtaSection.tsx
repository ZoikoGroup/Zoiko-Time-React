const cards = [
    {
        src: "/about-us/read.png",
        title: "Request an Executive Briefing",
        desc: "A structured overview of ZoikoTime's capabilities, governance model, and deployment approach — tailored to your executive team.",
        cta: "Schedule Briefing →",
    },
    {
        src: "/about-us/sms.png",
        title: "Talk to Sales",
        desc: "Connect with a ZoikoTime enterprise specialist to discuss your workforce governance challenges and how the platform can address them.",
        cta: "Talk to Sales →",
    },
    {
        src: "/about-us/telescope.png",
        title: "Explore the Platform",
        desc: "Explore the full ZoikoTime platform — workforce assurance, performance intelligence, evidence capture, and governance infrastructure.",
        cta: "Explore Platform →",
    },
];

export default function CtaSection() {
    return (
        <section className="bg-[#ECFBF8] border-t-3 border-[#00C6A9] px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12 flex flex-col items-center">
                    <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#00C6A9] mb-5">
                        — Learn More
                    </span>
                    <h2 className="text-4xl md:text-[30px] max-w-120 font-semibold text-[#0D1526] mb-5">
                        A Structured, Responsible
                        Foundation for Managing Modern
                        Workforces
                    </h2>
                    <p className="text-[#5A6E87] max-w-150 mx-auto">
                        Whether you are evaluating workforce assurance, performance intelligence, or audit
                        readiness, ZoikoTime provides the enterprise-grade infrastructure your organisation
                        needs — built for the complexity, compliance requirements, and governance
                        expectations of the real world.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 max-w-5xl mx-auto text-center">
                    {cards.map(({ src, title, desc, cta }) => (
                        <div
                            key={title}
                            className="bg-[#0D15260D] rounded-lg border flex flex-col items-center md:max-w-80 border-[#0D15261A] p-6"
                        >
                            <img src={src} alt="image" height={45} width={25} className="mb-5" />
                            <h3 className="font-semibold text-[#0D1526] text-[18px] max-w-50 mb-2">{title}</h3>
                            <p className="text-sm text-[#5A6E87] max-w-45 mb-3">{desc}</p>
                            <a href="#" className="text-[13px] text-[#00C6A9] font-bold hover:text-teal-600">{cta}</a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
