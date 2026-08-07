"use client";

import Image from "next/image";

const points = [
  {
    title: "Stale documents create risk",
    description:
      "An outdated security pack or expired DPA slows procurement and creates real exposure. Version currency is a release gate, not an afterthought.",
  },
  {
    title: "Access should match sensitivity",
    description:
      "Not every document belongs in a public folder. Controlled and customer-specific tiers keep sensitive evidence reviewed before release.",
  },
  {
    title: "Automatic approval isn't trust",
    description:
      "Every controlled or customer-specific request passes through an authorized reviewer — this page never implies instant or automatic access.",
  },
];

export default function WhyEvidence() {
  return (
    <section className="bg-white px-6 py-16 dark:bg-slate-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-4">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">
            Why Governed Evidence Matters
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl">
            Diligence deserves current, reviewed answers —
            <br className="hidden sm:block" />
            not a badge wall
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-base leading-7 text-slate-500 dark:text-slate-400">
            Real reviewers stand behind every release. Here's why that
            matters more than a longer document list.
          </p>
        </div>

        {/* Image */}
        <div className="mt-8 w-full max-w-[1080px] overflow-hidden rounded-2xl shadow-[0px_10px_30px_rgba(14,31,61,0.10)]">
          <Image
            src="/procurement-and-legal-resources/why-evidence.png"
            alt="Governed Evidence"
            width={1080}
            height={330}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Cards */}
        <div className="mt-6 flex w-full max-w-[1080px] flex-col gap-4">
          {points.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

                <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                  {item.title}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}