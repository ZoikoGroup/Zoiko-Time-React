"use client";

import Image from "next/image";

const securityFeatures = [
  {
    image: "/about-us/lock.png",
    title: "SOC 2 Type II Controls",
    description:
      "Security, availability, processing integrity, confidentiality, and privacy controls aligned to SOC 2 Type II standards — with independently verifiable evidence for enterprise procurement and audit teams.",
  },
  {
    image: "/about-us/globe.png",
    title: "Global Privacy Alignment",
    description:
      "GDPR, CCPA, and jurisdictional privacy regulations are reflected in system architecture — not just policy documentation. Data residency, retention, and processing controls are configurable per jurisdiction.",
  },
  {
    image: "/about-us/ylock.png",
    title: "Cryptographic Integrity",
    description:
      "Encryption at rest and in transit, signed and tamper-evident exports, and immutable audit logs ensure that ZoikoTime records cannot be altered — providing the cryptographic integrity that legal and regulatory proceedings demand.",
  },
];

const complianceItems = [
  "SOC 2 Type II Aligned",
  "GDPR Compliant",
  "CCPA Ready",
  "ISO 27001 Framework",
  "Encryption at Rest & Transit",
  "Tamper-Evident Exports",
  "Immutable Audit Logs",
];

export default function Security() {
  return (
    <section className="w-full overflow-hidden bg-slate-100 px-5 py-20 transition-colors duration-300 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-[102px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto max-w-[920px] text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-400">
            Security &amp; Compliance
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[36px] lg:leading-10">
            Built to Meet Enterprise-Grade Security Expectations
          </h2>

          <p className="mx-auto mt-7 max-w-[550px] text-base leading-7 text-slate-500 dark:text-slate-400 sm:text-lg">
            ZoikoTime is designed to withstand procurement due diligence,
            internal audit review, regulatory scrutiny, and third-party risk
            assessments — not just operational use.
          </p>
        </div>

        {/* Security Feature Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-[68px] lg:grid-cols-3 lg:gap-[34px]">
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="min-h-[320px] rounded-xl border border-slate-200 bg-white p-8 shadow-[0px_1px_2px_rgba(13,21,38,0.04),0px_1px_4px_rgba(13,21,38,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-600/20 bg-emerald-50 dark:bg-teal-950/60">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-base font-bold leading-7 text-slate-900 dark:text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance Tags */}
        <div className="mt-12 rounded-xl bg-slate-200/60 p-6 dark:bg-slate-900 sm:p-7">
          <div className="flex flex-wrap justify-center gap-3">
            {complianceItems.map((item) => (
              <div
                key={item}
                className="flex min-h-10 items-center rounded-full border border-slate-200 bg-white px-4 py-2 shadow-[0px_1px_2px_rgba(13,21,38,0.04)] dark:border-slate-700 dark:bg-slate-800"
              >
                <span className="mr-3 h-2 w-2 shrink-0 rounded-sm bg-teal-600 dark:bg-teal-400" />

                <span className="text-xs font-bold leading-5 text-slate-900 dark:text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}