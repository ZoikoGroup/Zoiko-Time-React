"use client";

import Image from "next/image";

const targetOrganisations = [
  {
    image: "/about-us/enterprise.png",
    title: "Enterprise Operating Environments",
    description:
      "Large enterprises and global operations requiring consistent governance across complex, multi-jurisdiction structures.",
  },
  {
    image: "/about-us/high.png",
    title: "High-Trust Sectors",
    description:
      "Finance, legal, healthcare, and telecommunications — sectors where audit defensibility and regulatory compliance are foundational.",
  },
  {
    image: "/about-us/revenue.png",
    title: "Revenue-Sensitive Teams",
    description:
      "Professional services and client-billable teams where billing accuracy, verified output, and time integrity are directly tied to revenue.",
  },
  {
    image: "/about-us/modern.png",
    title: "Modern Work Models",
    description:
      "Remote-first and hybrid organisations that have gained flexibility but need to maintain consistent governance and performance visibility.",
  },
  {
    image: "/about-us/risk.png",
    title: "High-Risk Labour Structures",
    description:
      "Contractor-heavy and high-payroll environments where misclassification risk, verification gaps, and billing accuracy create material exposure.",
  },
];

export default function Objective() {
  return (
    <section className="w-full overflow-hidden bg-slate-100 px-5 py-20 transition-colors duration-300 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-[102px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-400">
            Built For
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[36px] lg:leading-10">
            Designed for Organisations Where
            <br className="hidden sm:block" />
            Accuracy Is Non-Negotiable
          </h2>

          <p className="mx-auto mt-7 max-w-[590px] text-base leading-7 text-slate-500 dark:text-slate-400 sm:text-lg">
            ZoikoTime is built for the operating environments where governance,
            defensibility, and control are requirements — not differentiators.
          </p>
        </div>

        {/* Organisation Cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-[68px] lg:grid-cols-5 lg:gap-5">
          {targetOrganisations.map((organisation) => (
            <div
              key={organisation.title}
              className="relative flex min-h-[288px] flex-col items-center overflow-hidden rounded-xl border border-slate-200 bg-white px-5 pb-8 pt-7 text-center shadow-[0px_1px_2px_rgba(13,21,38,0.04),0px_1px_4px_rgba(13,21,38,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              {/* Image */}
              <div className="flex h-14 w-14 items-center justify-center">
                <Image
                  src={organisation.image}
                  alt={organisation.title}
                  width={56}
                  height={56}
                  className="h-12 w-12 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-3 min-h-[40px] max-w-[145px] text-sm font-bold leading-5 text-slate-900 dark:text-white">
                {organisation.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-[145px] text-xs leading-5 text-slate-500 dark:text-slate-400">
                {organisation.description}
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-teal-600/0 via-teal-600 to-teal-600/0" />
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 rounded-xl border border-teal-600/20 bg-emerald-50 px-6 py-7 text-center dark:border-teal-400/20 dark:bg-teal-950/30 sm:px-10 lg:mt-[59px]">
          <p className="text-base font-medium leading-6 text-slate-700 dark:text-slate-300">
            The platform scales from{" "}
            <span className="font-bold text-teal-600 dark:text-teal-400">
              targeted pilots to complex, multi-jurisdiction deployments
            </span>{" "}
            — without compromising control, performance, or governance
            integrity.
          </p>
        </div>
      </div>
    </section>
  );
}