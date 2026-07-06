const cards = [
    {
        src: "/about-us/grade.png",
        title: "Enterprise-Grade, Defensible Systems",
        desc: "Built to withstand the most rigorous procurement, audit, legal, and regulatory scrutiny — now and as requirements evolve.",
    },
    {
        src: "/about-us/people.png",
        title: "Respect for Employee Rights",
        desc: "Every capability is designed to respect workplace culture and individual dignity — governance that protects the organisation without diminishing the people in it.",
    },
    {
        src: "/about-us/weigh.png",
        title: "Lawful and Ethical Governance",
        desc: "ZoikoTime supports governance that is lawful, proportionate, and ethically grounded — in every jurisdiction where it is deployed, for every workforce it serves.",
    },
    {
        src: "/about-us/search.png",
        title: "Continuous Transparency",
        desc: "We continuously improve the explainability of our system — how it works, what it measures, and why — because confidence requires visibility, not opacity.",
    },
];

export default function Commitment() {
    return (
        <section className="bg-[#F4F7FA] px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12 flex flex-col items-center">
                    <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#009D8C] mb-5">
                        Our Commitment
                    </span>
                    <h2 className="text-4xl md:text-[30px] font-semibold text-[#0D1526] mb-5">
                        What We Commit to Every Organisation That Works With Us
                    </h2>
                    <p className="text-[#5A6E87] max-w-125 mx-auto">
                        Four commitments that underpin every product decision, partnership,
                        and client relationship — not as marketing language, but as design
                        requirements built into the system itself.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6 text-center">
                    {cards.map(({ src, title, desc }) => (
                        <div
                            key={title}
                            className="bg-white rounded-lg border-t-4 flex flex-col items-center md:max-w-80 border-teal-500 shadow-sm p-6"
                        >
                            <img src={src} alt="image" height={45} width={25} className="mb-5" />
                            <h3 className="font-semibold text-[#0D1526] text-[18px] max-w-50 mb-2">{title}</h3>
                            <p className="text-sm text-[#5A6E87] max-w-45 mb-3">{desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
