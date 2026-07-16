"use client";

import React from "react";

interface LanguageRow {
  approved: string;
  prohibited: string;
}

const languageRows: LanguageRow[] = [
  {
    approved: "Designed to support",
    prohibited: "Fully compliant / Guaranteed compliant",
  },
  {
    approved: "Built to help organizations",
    prohibited: "Certified enterprise-ready in all cases",
  },
  {
    approved: "Can support enterprise review",
    prohibited: "Meets every global regulatory requirement",
  },
  {
    approved: "Intended for serious organizational deployment",
    prohibited: "Eliminates compliance risk",
  },
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
    <section className="bg-[#F4F7FA] dark:bg-gray-900 px-6 py-12 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold tracking-[1.3px] text-[#009D8C] dark:text-teal-400">
            Our Commitment Language
          </span>

          <h2 className="mb-5 text-3xl font-semibold text-[#0D1526] dark:text-white md:text-[34px]">
            What Enterprise Readiness Means at ZoikoTime
          </h2>

          <p className="mx-auto max-w-5xl leading-7 text-[#5A6E87] dark:text-gray-300">
            Enterprise readiness means ZoikoTime is designed to support the
            realities of organizational deployment. We use precise language
            because accuracy matters more than hype.
          </p>
        </div>

        {/* Approved Language */}
        <div className="rounded-2xl border border-[#E4EBF4] dark:border-gray-700 bg-[#F8FAFB] dark:bg-gray-800 p-6 md:p-8 transition-colors duration-300">
          <p className="mb-6 text-xs font-bold uppercase tracking-wider text-[#8A9BBB] dark:text-gray-400">
            Approved Language — How We Describe ZoikoTime&apos;s Capabilities
          </p>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {languageRows.map((row, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-3 rounded-lg bg-[#009D8C0F] dark:bg-teal-500/10 px-4 py-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                  <span className="text-sm font-medium text-[#007D6F] dark:text-teal-300">
                    {row.approved}
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-[#EF44440A] dark:bg-red-500/10 px-4 py-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  <span className="text-sm font-medium text-[#B91C1C] dark:text-red-300 line-through decoration-red-400">
                    {row.prohibited}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ src, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border-t-4 border-teal-500 bg-white dark:bg-gray-800 p-6 shadow-sm transition-colors duration-300"
            >
              <img
                src={src}
                alt={title}
                className="mb-5 h-14 w-14 object-contain"
              />

              <h3 className="mb-3 text-lg font-semibold text-[#0D1526] dark:text-white">
                {title}
              </h3>

              <p className="text-sm leading-7 text-[#5A6E87] dark:text-gray-300">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}