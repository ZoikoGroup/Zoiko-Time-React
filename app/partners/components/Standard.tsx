import { Info } from "lucide-react";

const cards = [
    {
        title: "Customer-first alignment",
        desc: "Partners should help customers achieve practical value, responsible adoption, and clear business outcomes.",
    },
    {
        title: "Accurate product positioning",
        desc: "Partners must represent ZoikoTime as a workforce intelligence platform — not as a surveillance tool or generic time tracker.",
    },
    {
        title: "Workforce data awareness",
        desc: "Partners should understand the sensitivity of workforce records, activity signals, payroll confidence, reporting, and worker transparency.",
    },
    {
        title: "Implementation quality",
        desc: "Partners involved in rollout should support configuration, training, documentation, change management, and adoption discipline.",
    },
    {
        title: "Commercial integrity",
        desc: "Partnerships must be based on credible opportunities, ethical selling, transparent expectations, and sustainable relationships.",
    },
    {
        title: "Confidentiality & security",
        desc: "Partners may be required to follow confidentiality, data handling, security, and customer information protection expectations.",
    },
];

export default function Standard() {
    return (
        <>
            <section className="bg-[#F6F9F9] px-6 py-12 md:px-54">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] uppercase text-[#009D8C] mb-3">
                            Partner Standards
                        </span>
                        <h2 className="text-4xl md:text-[34px] font-semibold text-[#0D1526] mb-5">
                            Standards that protect customer trust
                        </h2>
                        <p className="text-[#5A6E87] max-w-140 mx-auto">
                            ZoikoTime partner relationships must support customer trust, responsible
                            positioning, practical implementation, and long-term value creation.
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

            {/* small section */}

            <section className="bg-white px-6 py-12 md:px-54">
                <div className="mx-auto max-w-4xl">
                    <div className="bg-[#FFF8E8] flex gap-3 p-4 border border-[#F2DFA8] rounded-xl">
                        <Info className="h-5 w-5 font-bold text-[#7A5A00]" />
                        <span className="text-[#7A5A00]">
                            <span className="text-[#5A4300] font-bold">Not an ideal fit.</span> ZoikoTime is not designed for low-context resale, misleading productivity claims,
                            surveillance-led selling, or opportunistic partner arrangements that do not create customer value.
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}
