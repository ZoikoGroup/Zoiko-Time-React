import {
    FileText,
    TrendingUp,
    ShieldCheck,
    Blocks,
    BadgeCheck,
} from "lucide-react";

const cards = [
    {
        title: "Product education",
        desc: "Guidance on capabilities, positioning, customer use cases, governance philosophy, pricing structure, and enterprise value.",
        icon: FileText,
    },
    {
        title: "Sales & referral support",
        desc: "Materials to identify qualified opportunities, explain value, and route prospects into the right sales process.",
        icon: TrendingUp,
    },
    {
        title: "Implementation resources",
        desc: "Configuration, rollout planning, admin enablement, worker communication, and adoption support where applicable.",
        icon: ShieldCheck,
    },
    {
        title: "Technical & integration",
        desc: "Structured conversations for technology partners exploring integration requirements, data flows, and feasibility.",
        icon: Blocks,
    },
    {
        title: "Governance & trust materials",
        desc: "Access to Enterprise Readiness, Responsible AI, Security Addendum, Implementation Guide, and documentation.",
        icon: BadgeCheck,
    },
];

export default function Enablement() {
    return (
        <section className="bg-[#F6F9F9] px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-2">
                    <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#009D8C] mb-3">
                        Partner Enablement
                    </span>
                    <h2 className="text-3xl md:text-[30px] font-semibold text-[#0D1526] mb-5">
                        How qualified partners are supported
                    </h2>
                </div>
                <div className="grid lg:grid-cols-3 gap-4">
                    {cards.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="bg-white rounded-lg shadow-sm p-6"
                        >
                            <div className="bg-[#E8F6F2] rounded-xl h-12 w-12 flex mb-4 justify-center items-center">
                                <Icon className="h-5 w-5 text-[#009D8C]" />
                            </div>
                            <h3 className="font-semibold text-[#0D1526] text-[15px] max-w-70 mb-2">{title}</h3>
                            <p className="text-sm text-[#5A6E87] max-w-70">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
