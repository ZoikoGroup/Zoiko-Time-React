import React from "react";

export default function PurposePolicyStatus() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-[696px] px-4 sm:px-0">
        {/* Section Title */}
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          1. Purpose and Policy Status
        </h2>

        {/* Divider */}
        <div className="mt-3 mb-8 h-[3px] w-12 rounded-full bg-teal-600"></div>

        {/* Content */}
        <div className="space-y-8">
          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            This Acceptable Use Policy (the "Policy") sets out the rules that
            govern access to and use of ZoikoTime, including websites,
            applications, software, dashboards, APIs, integrations,
            documentation, support channels, AI features, workforce analytics,
            evidence records, reporting tools, and related services.
          </p>

          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            The purpose of this Policy is to protect the security, reliability,
            lawful operation, and reputation of the Service; protect Customers,
            Authorized Users, workers, and third parties; prevent misuse of
            workforce data and monitoring functionality; and ensure that
            ZoikoTime is used only for lawful, transparent, proportionate,
            authorized, and governance-aligned business purposes.
          </p>

          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            This Policy is incorporated into the ZoikoTime Terms of Service,
            applicable Order Forms, Data Processing Addendum, and other
            documents forming part of the agreement between Customer and Zoiko
            Tech Inc.
          </p>
        </div>
      </div>
    </section>
  );
}