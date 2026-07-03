import {
    Users,
    PanelsTopLeft,
    Shield,
    Blocks,
    Star,
    BadgeCheck,
} from "lucide-react";

const cards = [
    {
        icon: Users,
        title: "Referral Partners",
        desc: "For trusted advisors, consultants, agencies, and professional networks that introduce qualified organizations to ZoikoTime.",
    },
    {
        icon: PanelsTopLeft,
        title: "Channel & Reseller",
        desc: "For organizations that can responsibly represent ZoikoTime to qualified customers in defined markets, sectors, or regions.",
    },
    {
        icon: Shield,
        title: "Implementation Partners",
        desc: "For firms that help customers configure, launch, train, and scale ZoikoTime across teams and departments.",
    },
    {
        icon: Blocks,
        title: "Technology & Integration",
        desc: "For platforms that connect ZoikoTime to payroll, HRIS/HCM, finance, identity, compliance, and analytics workflows.",
    },
    {
        icon: Star,
        title: "Strategic Alliances",
        desc: "For organizations with broader commercial, regional, enterprise, or sector-specific alignment.",
    },
    {
        icon: BadgeCheck,
        title: "Ecosystem Partners",
        desc: "Payroll, HR, finance, legal, and operations ecosystem participants who extend customer value.",
    },
];

export default function Pathway() {
    return (
        <section className="bg-white px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#009D8C] mb-3">
                        Partner Pathways
                    </span>
                    <h2 className="text-3xl md:text-[30px] font-semibold text-[#0D1526] mb-5">
                        Find the right partnership pathway
                    </h2>
                    <p className="text-[#5A6E87] max-w-135 mx-auto">
                        ZoikoTime evaluates opportunities based on strategic fit, customer value,
                        partner credibility, implementation capability, market relevance, and
                        responsible positioning.
                    </p>
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
                <div className="mt-25 text-center">
                    <a href="#" className="text-sm font-semibold text-[#0B8675] hover:text-teal-700">
                        Explore Enterprise Readiness →
                    </a>
                </div>
            </div>
        </section>
    )
}
