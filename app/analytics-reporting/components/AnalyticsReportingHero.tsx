import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export default function AnalyticsReportingHero() {
  const features = [
    "No hidden productivity scores",
    "Human interpretation is authoritative",
    "Availability and scope vary",
  ];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl lg:h-[500px] lg:w-[500px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-16 lg:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-4 py-2 dark:border-slate-700 dark:bg-slate-800">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400 sm:text-xs">
                Analytics &amp; Reporting
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Understand workforce records without losing{" "}
              <span className="text-emerald-500">
                context or control
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-8">
              Turn approved time, attendance, policy, correction, approval,
              integration, and evidence records into defined enterprise
              metrics, dashboards, reports, and governed exports — with
              visible quality, privacy, permissions, and limitations.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/request-enterprise-demo"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 sm:text-base"
              >
                Request Enterprise Demo
              </Link>

              <Link
                href="/contact-sales"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 sm:text-base"
              >
                Contact Sales
              </Link>
            </div>

            {/* Existing Customer */}
            <Link
              href="/analytics-governance-center"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400"
            >
              Existing customer? Open the Analytics Governance Center
              <FiArrowRight className="h-4 w-4" />
            </Link>

            {/* Features */}
            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                    <FiCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>

                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="mt-10 md:mt-0">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900 lg:rounded-3xl">
              <Image
                src="/analytics-reporting/image.png"
                alt="Analytics Reporting Dashboard"
                width={900}
                height={680}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Commitment Card */}
            <div className="mt-6 rounded-xl border border-slate-200 border-l-4 border-l-slate-800 bg-white p-5 shadow-sm dark:border-slate-700 dark:border-l-emerald-500 dark:bg-slate-900 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-800 dark:text-emerald-400">
                Binding Commitment
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Understand governed workforce records—never hidden behavior.
                Analytics explains what the data supports, what it does not
                support, and who remains responsible for interpretation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}