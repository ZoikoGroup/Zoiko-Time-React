import { Check } from "lucide-react";


const cards = [
    {
        src: "/about-us/guy.png",
        title: "Human-in-Command",
        desc: "ZoikoTime surfaces risk and insight. Humans retain decision authority at every stage. There are no automated disciplinary outcomes — ever.",
    },
    {
        src: "/about-us/setting.png",
        title: "Policy-Driven Controls",
        desc: "All assurance and intelligence functions are configurable by role, jurisdiction, risk profile, and organisational policy — not preset by the system vendor.",
    },
    {
        src: "/about-us/search.png",
        title: "Transparency and Employee Rights",
        desc: "Employees can understand what is collected, why it is collected, and how it is used — subject to organisational policy and applicable law. Visibility is structural, not optional.",
    },
];


const privacyData = {
    title: "Privacy-First Architecture",
    description:
        "Every design decision defaults to the least invasive option that meets the governance requirement.",

    items: [
        {
            title: "Data Minimisation by Default",
            description:
                "Only the data required for the stated governance purpose is collected — no speculative or surplus capture.",
        },
        {
            title: "Role-Based Access Controls",
            description:
                "Every data access is gated by role — no user can see beyond the scope of their governance function.",
        },
        {
            title: "Immutable Access Logs",
            description:
                "Every record access is logged and tamper-proof — creating full accountability for anyone who views workforce data.",
        },
        {
            title: "Jurisdiction-Aware Retention",
            description:
                "Retention schedules are applied per jurisdiction — aligning data lifecycle management with local legal requirements automatically.",
        },
        {
            title: "Consent & Notification Workflows",
            description:
                "Where required by law or policy, consent and notification workflows are built into the system — not retrofitted as an afterthought.",
        },
    ],
};

export default function Governance() {
    return (
        <section className="bg-[#F4F7FA] px-6 py-24 md:px-54">
            <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6 md:gap-25 items-center">
                <div>
                    <span className="inline-block uppercase text-xs font-bold tracking-[1.30px] text-[#009D8C] mb-6">
                        Governance by Design
                    </span>
                    <h1 className="text-3xl md:text-[36px] md:min-w-110 font-bold text-[#0D1526] leading-tight mb-5">
                        Governance Is Not a
                        Feature. It Is Foundational.
                    </h1>
                    <p className="text-[#5A6E87] text-[17px] mb-4 max-w-120">
                        In ZoikoTime, governance is not a toggle or a settings panel —
                        it is embedded into every layer of the system. Every capability
                        is policy-driven, every decision is human-in-command, and
                        every employee right is structurally protected.
                    </p>

                    <div className="space-y-5">
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
                    </div>

                </div>
                <div className="rounded-[16px] border border-[#E4EBF4] bg-white shadow-sm">
                    {/* Header */}
                    <div className="bg-[#F4F7FA] border border-[#E4EBF4] p-4 text-center">
                        <h2 className="mb-3 text-sm font-bold text-[#0D1526]">
                            {privacyData.title}
                        </h2>
                        <p className="mx-auto max-w-3xl text-[#5A6E87] text-[13px]">
                            {privacyData.description}
                        </p>
                    </div>

                    {/* Items */}
                    {privacyData.items.map(({ title, description }, index) => (
                        <div
                            key={title}
                            className={`flex items-center gap-5 p-4 ${index !== privacyData.items.length - 1
                                    ? "border-b border-slate-200"
                                    : ""
                                }`}
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF9F6]">
                                <Check className="h-5 w-5 text-[#009D8C]" />
                            </div>

                            <div>
                                <h3 className="mb-2 text-sm font-bold text-[#0D1526]">
                                    {title}
                                </h3>

                                <p className="text-[#5A6E87] text-[13px]">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
