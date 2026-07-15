import React from "react";

const features = [
  "Timestamped events",
  "Policy context",
  "Human review trail",
  "Correction history",
  "Export audit logs",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#EAF8F6] dark:bg-slate-900">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 xl:px-0">

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-[57%_43%] items-center gap-10 py-12 lg:min-h-[700px]">

          {/* Left Content */}
          <div className="max-w-[760px]">

            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-[#8DDDD5] bg-[#DFF7F4] px-5 py-2.5">
              <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#00A99D]">
                Workforce Evidence Integrity
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-[44px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#0F172A] dark:text-white sm:text-[52px] lg:text-[58px] xl:text-[62px]">
              Audit-Grade Evidence for
              <br />
              Workforce Decisions
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[610px] text-[18px] leading-[34px] text-[#475569] dark:text-slate-300">
              ZoikoTime helps organizations preserve workforce records with
              timestamps, approvals, exceptions, correction history, policy
              context, and reviewer actions — structured to support review,
              export, and defensible decision-making.
            </p>

            <p className="mt-7 max-w-[610px] text-[17px] leading-[32px] text-[#7A8797] dark:text-slate-400">
              Most workforce tools record activity. ZoikoTime preserves the
              decision context around that activity — making records more
              reviewable, explainable, and governance-ready.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <button className="h-14 rounded-xl bg-[#00A99D] px-9 text-[16px] font-semibold text-white shadow-[0_14px_30px_rgba(0,169,157,0.22)] transition-all duration-300 hover:bg-[#009688]">
                Contact Sales
              </button>

              <button className="h-14 rounded-xl border border-[#00A99D] bg-white px-8 text-[16px] font-medium text-[#009D8C] transition-all duration-300 hover:bg-[#F2FCFB] dark:bg-slate-900 dark:hover:bg-slate-800">
                Explore Data Retention &amp; Legal Hold
              </button>

            </div>

            {/* Disclaimer */}
            <p className="mt-6 max-w-[620px] text-[13px] leading-6 text-[#97A6B6] dark:text-slate-500">
              ZoikoTime supports audit-ready workforce recordkeeping. It does
              not provide legal advice or guarantee court admissibility.
            </p>

          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/Workforce-Evidence-Hero/image.png"
              alt="Workforce Evidence"
              className="w-full max-w-[510px] object-contain lg:max-w-[540px]"
            />
          </div>

        </div>

        {/* Bottom Feature Bar */}
        <div className="rounded-none border border-[#D8ECE8] bg-[#EFF8F7] dark:border-slate-700 dark:bg-slate-800/40">

          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-5 px-8 py-7">

            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#00A99D]" />
                <span className="text-[15px] font-medium text-[#475569] dark:text-slate-300">
                  {feature}
                </span>
              </div>
            ))}

                      </div>
        </div>

      </div>
    </section>
  );
}
