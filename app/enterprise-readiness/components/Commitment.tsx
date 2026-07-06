"use client"
import React from "react";
interface LanguageRow {
    approved: string;
    prohibited: string;
}

const languageRows: LanguageRow[] = [
    { approved: "Designed to support", prohibited: "Fully compliant / Guaranteed compliant" },
    { approved: "Built to help organizations", prohibited: "Certified enterprise-ready in all cases" },
    { approved: "Can support enterprise review", prohibited: "Meets every global regulatory requirement" },
    { approved: "Intended for serious organizational deployment", prohibited: "Eliminates compliance risk" },
];

const cards = [
    {
        src: "/enterprise-readiness/rocket.png",
        title: "Deployment Readiness",
        desc: "Support for onboarding organizations, configuring teams, setting permissions, preparing admins, inviting workers, and launching ZoikoTime in a structured and governed way.",
    },
    {
        src: "/enterprise-readiness/governance.png",
        title: "Governance Readiness",
        desc: "Controls for roles, approvals, policies, exceptions, reporting access, screenshots where enabled, retention, and legal hold that support accountability and auditability.",
    },
    {
        src: "/enterprise-readiness/data.png",
        title: "Procurement Readiness",
        desc: "Documentation and structured information to help procurement, legal, finance, HR, security, and IT stakeholders evaluate ZoikoTime before adoption.",
    },
    {
        src: "/enterprise-readiness/operation.png",
        title: "Operational Readiness",
        desc: "Workflows that support managers, workers, administrators, HR teams, finance users, legal stakeholders, and compliance reviewers across the full platform.",
    },
    {
        src: "/enterprise-readiness/read.png",
        title: "Data Readiness",
        desc: "Workforce records, reporting outputs, exports, retention settings, and legal hold workflows managed with governance controls and auditability by design.",
    },
    {
        src: "/enterprise-readiness/hands.png",
        title: "Support Readiness",
        desc: "Implementation support, documentation, help resources, issue escalation, and ongoing account guidance to support enterprise customers through every stage of deployment.",
    },
];

export default function Commitment() {
    return (
        <section className="bg-[#F4F7FA] px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-bold tracking-[1.30px] text-[#009D8C] mb-3">
                        Our Commitment Language
                    </span>
                    <h2 className="text-4xl md:text-[34px] font-semibold text-[#0D1526] mb-5">
                        What Enterprise Readiness Means at ZoikoTime
                    </h2>
                    <p className="text-[#5A6E87] max-w-225 mx-auto">
                        Enterprise readiness means ZoikoTime is designed to
                        support the realities of organizational deployment. We use precise language
                        because accuracy matters more than hype.
                    </p>
                </div>
                <div className="bg-[#F8FAFB] border border-[#E4EBF4] rounded-xxl p-7 md:p-8">
                    <p className="text-xs font-bold tracking-wider uppercase text-[#8A9BBB] mb-5">
                        Approved Language — How We Describe Zoikotime&apos;s Capabilities
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3">
                        {languageRows.map((row, i) => (
                            <React.Fragment key={i}>
                                <div className="flex items-center gap-2.5 px-4 py-3.5 rounded-lg bg-[#009D8C0F] text-emerald-800 font-medium text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                                    <span className="font-medium text-[#007D6F]">{row.approved}</span>
                                </div>
                                <div className="flex items-center gap-2.5 px-4 py-3.5 rounded-lg bg-[#EF44440A] text-red-700 font-medium text-sm line-through decoration-red-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                    <span className="font-medium text-[#B91C1C]"> {row.prohibited}</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 mt-15 lg:grid-cols-3 gap-5">
                    {cards.map(({ src, title, desc }) => (
                        <div
                            key={title}
                            className="bg-white rounded-lg border-t-4 border-teal-500 shadow-sm p-6"
                        >
                            <img src={src} alt="image" className="mb-4" />
                            <h3 className="font-semibold text-[#0D1526] text-[15px] max-w-70 mb-2">{title}</h3>
                            <p className="text-sm text-[#5A6E87] max-w-70">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}