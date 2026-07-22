"use client";

import Link from "next/link";
import Image from "next/image";

const integrations = [
  {
    image: "/about-us/chain.png",
    title: "ZoikoSuite™",
    description:
      "Native integration across the full enterprise productivity suite",
  },
  {
    image: "/about-us/revenue.png",
    title: "HR Platforms",
    description:
      "Connects with leading HRIS and workforce management systems",
  },
  {
    image: "/about-us/chart.png",
    title: "Payroll Systems",
    description:
      "Verified time data flows directly into payroll and billing platforms",
  },
  {
    image: "/about-us/lock.png",
    title: "Identity Providers",
    description:
      "SSO and identity management integration for enterprise access control",
  },
  {
    image: "/about-us/read.png",
    title: "Compliance Tools",
    description:
      "Export-ready records formatted for GRC and compliance platforms",
  },
  {
    image: "/about-us/cloud.png",
    title: "Collaboration Platforms",
    description:
      "Integrates with enterprise collaboration and project delivery tools",
  },
];

export default function Ecosystem() {
  return (
    <section className="w-full overflow-hidden bg-slate-100 px-5 py-20 transition-colors duration-300 dark:bg-slate-950 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1040px] grid-cols-1 gap-14 lg:grid-cols-[480px_1fr] lg:gap-[68px]">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-400">
            Part of the Zoiko Ecosystem
          </p>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[36px] lg:leading-10">
            Seamlessly Integrated With
            <br className="hidden sm:block" />
            the Zoiko Group Portfolio
          </h2>

          <p className="mt-7 text-base leading-7 text-slate-500 dark:text-slate-400">
            ZoikoTime is part of the Zoiko Group technology portfolio —
            integrating natively with ZoikoSuite, enterprise collaboration
            platforms, and productivity and workflow systems.
          </p>

          <p className="mt-7 text-base leading-7 text-slate-500 dark:text-slate-400">
            This enables organisations to adopt ZoikoTime without disrupting
            existing systems, processes, or governance models — deploying the
            capabilities they need on the timeline that suits their operational
            reality.
          </p>

          <Link
  href="/product"
  className="
    mt-10
    inline-flex
    items-center
    justify-center
    rounded-lg
    bg-teal-600
    px-8
    py-3
    text-base
    font-semibold
    text-white
    shadow-[0px_4px_14px_rgba(0,157,140,0.28)]
    transition-all
    duration-300
    hover:bg-teal-700
    hover:shadow-lg
    focus:outline-none
    focus:ring-2
    focus:ring-teal-500
    focus:ring-offset-2
    dark:focus:ring-offset-slate-950
  "
>
  Explore Integrations
</Link>
        </div>

        {/* RIGHT INTEGRATIONS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {integrations.map((integration) => (
            <div
              key={integration.title}
              className="flex min-h-[128px] items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-[0px_1px_2px_rgba(13,21,38,0.04),0px_1px_4px_rgba(13,21,38,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              {/* Icon */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 dark:bg-teal-950/60">
                <Image
                  src={integration.image}
                  alt={integration.title}
                  width={22}
                  height={22}
                  className="h-5 w-5 object-contain"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-sm font-bold leading-6 text-slate-900 dark:text-white">
                  {integration.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {integration.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}