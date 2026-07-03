"use client"
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "Why does ZoikoTime need a leadership and governance page?",
        a: "This page explains the principles, governance philosophy, and organizational accountability behind ZoikoTime. It helps enterprise customers understand how the platform is developed, governed, and operated beyond its technical features.",
    },
    {
        q: "Does ZoikoTime make automated employment decisions?",
        a: "No. ZoikoTime is designed to support workforce management with records, insights, and decision-support capabilities. Employment, payroll, disciplinary, and other sensitive decisions remain subject to appropriate human review and organizational policies.",
    },
    {
        q: "How does ZoikoTime support responsible governance?",
        a: "ZoikoTime emphasizes permissions, auditability, documentation, review workflows, explainable records, and governance-led engineering to help organizations deploy the platform responsibly and transparently.",
    },
    {
        q: "Who is behind ZoikoTime?",
        a: "ZoikoTime is developed and maintained by Zoiko Tech Inc., which is responsible for the platform's long-term strategy, enterprise governance, security expectations, and responsible product development.",
    },
    {
        q: "Does ZoikoTime support enterprise security review?",
        a: "Yes. Enterprise customers can review documentation, security information, governance resources, access control practices, and implementation guidance to support procurement, compliance, and IT security assessments.",
    },
    {
        q: "How does ZoikoTime approach worker transparency?",
        a: "ZoikoTime promotes transparency by supporting appropriate worker visibility into relevant records, policies, guides, and workflows while respecting organizational permissions, privacy requirements, and applicable legal obligations.",
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-white px-6 py-12 md:px-54">
            <div className="mx-auto max-w-3xl">
                <div className="text-center mb-10">
                    <span className="inline-block text-xs font-bold tracking-[1.32px] text-[#009D8C] mb-3">
                        COMMON QUESTIONS
                    </span>
                    <h2 className="text-3xl font-semibold text-slate-900">
                        Leadership & Governance FAQ
                    </h2>
                </div>

                <div className="rounded-[14px] border border-[#E4EBF4] divide-y divide-[#E4EBF4]">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={faq.q}>
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
            </div>
        </section>
    );
}
