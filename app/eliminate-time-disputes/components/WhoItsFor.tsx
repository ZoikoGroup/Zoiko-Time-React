"use client";

import Image from "next/image";

const audiences = [
  {
    title: "Payroll & Finance",
    description:
      "Fewer contested hours reaching payroll, each defensible.",
    image: "/eliminate-time-disputes/payroll-finance.png",
  },
  {
    title: "HR & Operations",
    description:
      "Fair, consistent review across teams and locations.",
    image: "/eliminate-time-disputes/hr-operations.png",
  },
  {
    title: "Compliance, Legal & Audit",
    description:
      "Preserved evidence and explainable policy for review.",
    image: "/eliminate-time-disputes/compliance-legal-audit.png",
  },
];

export default function WhoItsFor() {
  return (
    <section className="w-full bg-gray-50 px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-3">
        {/* Eyebrow */}
        <div className="flex w-full flex-col items-center">
          <span className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600">
            Who It&apos;s For
          </span>
        </div>

        {/* Heading */}
        <div className="w-full max-w-[820px] pb-1">
          <h2 className="text-center text-3xl font-bold leading-tight text-slate-800 sm:text-4xl sm:leading-10 dark:text-white">
            Confidence for every reviewer and buyer
          </h2>
        </div>

        {/* Subtitle */}
        <div className="w-full max-w-[680px] pt-0.5">
          <p className="text-center text-base font-normal leading-7 text-gray-500 dark:text-gray-400">
            Illustrative imagery of the teams this serves.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid w-full max-w-[1060px] grid-cols-1 gap-5 pt-5 sm:pt-8 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={audience.image}
                  alt={audience.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[3px] px-4 py-4">
                <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                  {audience.title}
                </h3>

                <p className="text-xs font-normal leading-5 text-gray-500 dark:text-gray-400">
                  {audience.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}