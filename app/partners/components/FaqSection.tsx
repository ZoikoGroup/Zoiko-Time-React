"use client"
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "What types of partners does ZoikoTime work with?",
        a: "ZoikoTime works with a range of partners, including referral partners, consultants, implementation specialists, technology and integration partners, strategic alliances, and other organizations that can help customers achieve successful workforce intelligence outcomes.",
    },
    {
        q: "Can consultants refer clients to ZoikoTime?",
        a: "Yes. Consultants and advisors can refer qualified organizations to ZoikoTime. Depending on the nature of the engagement and mutual fit, they may participate as referral, advisory, or implementation partners.",
    },
    {
        q: "Does ZoikoTime support implementation partners?",
        a: "Yes. Implementation partners may receive enablement resources, configuration guidance, rollout planning materials, training documentation, and best practices to help customers successfully adopt the platform.",
    },
    {
        q: "Can technology platforms integrate with ZoikoTime?",
        a: "Yes. Technology partners can explore integration opportunities based on customer needs, technical feasibility, data flow requirements, security expectations, and platform compatibility.",
    },
    {
        q: "Is there a formal reseller program?",
        a: "ZoikoTime evaluates commercial partnership opportunities individually. Depending on strategic alignment, market opportunity, and business requirements, organizations may be considered for referral, channel, or other partnership models.",
    },
    {
        q: "Does submitting a partner inquiry guarantee approval?",
        a: "No. Submitting a partnership inquiry begins the evaluation process only. Each application is reviewed for strategic alignment, customer value, market relevance, credibility, and the most appropriate partnership pathway before any approval is granted.",
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-[#F6F9F9] px-6 py-12 md:px-54">
            <div className="mx-auto max-w-3xl">
                <div className="text-center mb-10">
                    <span className="inline-block uppercase text-xs font-bold tracking-[1.32px] text-[#009D8C] mb-3">
                        Questions
                    </span>
                    <h2 className="text-3xl font-semibold text-slate-900">
                        Partner FAQs
                    </h2>
                </div>

                {faqs.map((faq, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <div key={faq.q} className="bg-white mt-4 rounded-2xl">
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : i)}
                                className="w-full flex items-center justify-between px-6 py-4 text-left"
                            >
                                <span className="text-sm font-semibold text-slate-800">
                                    {faq.q}
                                </span>
                                {isOpen ? (
                                    <Minus size={16} className="cursor-pointer text-slate-400 shrink-0" />
                                ) : (
                                    <Plus size={16} className="cursor-pointer text-[#009D8C] shrink-0" />
                                )}
                            </button>
                            {isOpen && (
                                <p className="px-6 pb-4 text-sm text-slate-500">{faq.a}</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
