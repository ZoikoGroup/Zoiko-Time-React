import Link from "next/link";
import type { ReactNode } from "react";

const processors: { title: string; body: ReactNode; tint?: boolean }[] = [
  {
    title: "Deterministic classification",
    body: (
      <>
        Policy-bound inputs and reviewable rules.{" "}
        <span className="font-bold text-sky-950 dark:text-white">
          It is not AI
        </span>
        , and it is not described as AI anywhere in this product.
      </>
    ),
  },
  {
    title: "Approved machine learning",
    body: "May flag anomalies or signal-quality concerns for human review. It does not decide anything.",
  },
  {
    title: "Kairos",
    body: "Retrieves, summarizes, and explains governed data within authorized scope. Decides nothing.",
  },
  {
    title: "Public analytics",
    body: "Privacy-minimized. Excludes worker-level content, search text, and sensitive intent.",
    tint: true,
  },
];

const providerRecord = [
  "Data category and purpose",
  "Access scope and location class",
  "Contractual control and current status",
  "Authoritative detail route where current",
];

const providerLinks = [
  { label: "Integrations", href: "/enterprise-integrations" },
  { label: "Subprocessors", href: "/subprocessor-list" },
];

export default function AutomationBoundary() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Automation, AI &amp; Analytics Boundary
            </p>

            <h2 className="mt-3.5 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              What Processes Your Data, and What It May Conclude
            </h2>

            <div className="mt-6 flex flex-col gap-4">

              {processors.map((processor) => (
                <article
                  key={processor.title}
                  className={`flex flex-col rounded-xl border p-5 ${
                    processor.tint
                      ? "border-emerald-100 bg-[#F5FEF7] dark:border-emerald-900/40 dark:bg-emerald-950/20"
                      : "border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900"
                  }`}
                >

                  <h3 className="text-base font-bold leading-5 text-sky-950 dark:text-white">
                    {processor.title}
                  </h3>

                  <p className="mt-2 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {processor.body}
                  </p>

                </article>
              ))}

            </div>

            {/* Absent Claims */}
            <div className="mt-4 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                Four claims absent by design
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-800 dark:text-red-200/80">
                No automated employment, payroll, disciplinary, or legal
                decision. No hidden workforce scoring or behavioral profiling.
                No model-training claim — if training use ever exists, it will
                be described only with approved evidence. And no claim that AI
                is unbiased, compliant, or infallible.
              </p>

            </div>

          </div>

          {/* Right Content */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Processors, Subprocessors &amp; Integrations
            </p>

            <h3 className="mt-3.5 text-2xl font-bold leading-tight text-sky-950 dark:text-white">
              Each connector is scoped separately
            </h3>

            <div className="mt-6 flex flex-col rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

              <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                What a provider record states
              </h4>

              <ul className="mt-4 flex flex-col gap-2.5">
                {providerRecord.map((item) => (
                  <li key={item} className="flex gap-2.5">

                    <span
                      className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-xs bg-emerald-400"
                      aria-hidden="true"
                    />

                    <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {item}
                    </span>

                  </li>
                ))}
              </ul>

            </div>

            <p className="mt-5 text-sm font-normal leading-6 text-zinc-500 dark:text-slate-400">
              Subprocessor summaries link to current authoritative sources where
              approved. Restricted recipient detail and provider terms are not
              exposed publicly. We do not present provider controls as ZoikoTime
              controls.
            </p>

            <div className="mt-6 flex flex-col gap-3.5 sm:flex-row">
              {providerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
                >
                  {link.label}
                </Link>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
