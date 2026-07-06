

const cards = [
    {
        src: "/about-us/shield.png",
        title: "Verification Should Protect — Not Punish",
        desc: "Workforce verification exists to protect organisations from financial and legal exposure — not to surveil or penalise individuals. Every verification capability is designed with that distinction at its core.",
    },
    {
        src: "/about-us/scale.png",
        title: "Performance Data Should Enable Improvement — Not Fear",
        desc: "Intelligence about work exists to improve delivery, planning, and fairness — not to create anxiety or enable disproportionate scrutiny of individuals. Data drives conversations, not conclusions.",
    },
    {
        src: "/about-us/search.png",
        title: "Governance Should Be Visible — Not Hidden",
        desc: "The rules that govern workforce data, what is collected, and how it is used should be visible to the people affected by them. Opacity in governance erodes the trust that accountability is meant to build.",
    },
    {
        src: "/about-us/guy.png",
        title: "Technology Should Support Human Judgement — Not Replace It",
        desc: "ZoikoTime surfaces intelligence and enforces policy — but every consequential decision remains with a human. No algorithm determines a disciplinary outcome, a performance rating, or an employment status.",
    },
];

export default function Philosophy() {
    return (
        <section className="bg-[#F4F7FA] px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12 flex flex-col items-center">
                    <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#009D8C] mb-5">
                        Our Philosophy
                    </span>
                    <h2 className="text-4xl md:text-[30px] font-semibold text-[#0D1526] mb-5">
                        Accountability and Trust Are Not Opposing Forces
                    </h2>
                    <p className="text-[#5A6E87] max-w-125 mx-auto">
                        The four beliefs that shape every design decision, product capability,
                        and governance control in ZoikoTime — built into the system, not
                        described in a brochure.
                    </p>
                </div>



                <div className="grid md:grid-cols-2 gap-4">

                    {cards.map((item, idx) => (
                        <div key={idx} className="border flex gap-4 bg-white p-5 border-[#E4EBF4] rounded-xl shadow-[0_4px_12px_#0D15260A]">
                            <div className="bg-[#EAF9F6] flex justify-center items-center rounded-[8px] h-10 w-10">
                                <img src={item.src} alt="Image" height={22} width={20} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-[15px] text-[#0D1526] font-bold">{item.title}</h2>
                                <p className="text-[13px] text-[#5A6E87] max-w-82">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                    {/* </div> */}
                </div>

                <div className="mx-auto max-w-6xl bg-white rounded-xl mt-10 px-6 py-12 bg-[radial-gradient(ellipse_80%_120%_at_50%_0%,#00C6A91F_0%,#00C6A900_65%)]">
                    <div className="mx-auto flex max-w-200 flex-col items-center justify-center text-center">
                        <h1 className="max-w-190 text-3xl font-extrabold leading-8 md:text-[26px]">
                            We are not building tools for control. We are building{" "}
                            <span className="text-[#00C6A9]">
                                infrastructure for confidence, accountability, and trust at scale.
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
