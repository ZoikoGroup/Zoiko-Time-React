"use client";

import Image from "next/image";

const panels = [
  {
    title: "One registry, not scattered PDFs",
    description:
      "Procurement, legal, security, and privacy teams all work from the same governed source of truth.",
  },
  {
    title: "Reviewer accountability",
    description:
      "Every controlled release is tied to a named reviewer and a timestamped decision — visible in the audit trail.",
  },
  {
    title: "Renewal-ready",
    description:
      "Version history and review calendars mean renewal diligence starts from current evidence, not a fresh request.",
  },
];

export default function EnterpriseTrustPanel() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center px-6">
        {/* Heading */}
        <div className="max-w-[820px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Enterprise Trust Panel
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl">
            Built for the way enterprise diligence actually
            <br className="hidden md:block" />
            works
          </h2>
        </div>

        {/* Content */}
        <div className="mt-12 grid w-full max-w-[1080px] gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div className="space-y-4">
            {panels.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-sm bg-teal-600" />

                  <div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <Image
              src="/procurement-and-legal-resources/enterprise-trust-panel.png"
              alt="Enterprise Trust Panel"
              width={600}
              height={450}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}