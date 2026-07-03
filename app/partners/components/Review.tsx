import { Info } from "lucide-react";

const CONTROLS = [
    {
        title: "Submit a partnership inquiry",
        body: "Share your organization profile, target market, partnership interest, customer base, relevant capabilities, and proposed value.",
    },
    {
        title: "Initial fit review",
        body: "ZoikoTime reviews for strategic alignment, market relevance, credibility, customer value, and appropriate partnership pathway.",
    },
    {
        title: "Discovery discussion",
        body: "Qualified organizations may be invited to discuss goals, customer needs, commercial model, and operational expectations.",
    },
    {
        title: "Partnership pathway assessment",
        body: "ZoikoTime determines whether the opportunity suits referral, channel, implementation, technology, strategic alliance, or no immediate partnership.",
    },
    {
        title: "Commercial & governance review",
        body: "Where appropriate, ZoikoTime may review commercial terms, confidentiality, security expectations, customer handling, and enablement needs.",
    },
    {
        title: "Partner activation",
        body: "Approved partners receive onboarding materials, contact routes, enablement resources, and operating expectations by partnership type.",
    },
];

export default function Review() {
    return (
        <>
            <section className="bg-white px-6 py-16 sm:py-20">
                <div className="mx-auto max-w-6xl text-center">
                    <span className="inline-block uppercase text-xs font-bold tracking-[1.30px] text-[#009D8C] mb-3">
                        Review Process
                    </span>
                    <h2 className="text-4xl md:text-[29px] font-semibold text-[#0D1526] mb-3">
                        How partnership review works
                    </h2>
                    <p className="text-[#5A6E87] max-w-210 mx-auto">
                        ZoikoTime reviews inquiries carefully to ensure alignment with customer needs,
                        platform standards, governance expectations, and commercial priorities.
                    </p>
                </div>

                <div className="mx-auto mt-10 max-w-5xl divide-y divide-slate-100 rounded-xl bg-white shadow-sm">
                    {CONTROLS.map((item, i) => (
                        <div key={item.title} className="flex gap-4 px-8 py-6">
                            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[19px] bg-[#0E1F3D] text-xs font-bold text-white">
                                {i + 1}
                            </div>
                            <div>
                                <h3 className="text-[15px] font-semibold text-slate-900">{item.title}</h3>
                                <p className="mt-1 text-[13px] leading-relaxed text-[#5A6E87]">{item.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* small section */}

            <section className="bg-white px-6 py-12 md:px-54">
                <div className="mx-auto max-w-4xl">
                    <div className="bg-[#FFF8E8] flex gap-3 p-4 border border-[#F2DFA8] rounded-xl">
                        <Info className="h-6 w-6 font-bold text-[#7A5A00]" />
                        <span className="text-[#7A5A00]">
                            Submitting an inquiry does not guarantee acceptance into a ZoikoTime partner program. Partnership
                            opportunities are reviewed based on strategic fit, customer value, governance alignment, and
                            operational readiness.
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
}
