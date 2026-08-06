import Link from "next/link";
import Image from "next/image";

const guarantees = [
  "No screenshots",
  "No keystroke content",
  "No URL history or application names",
  "No clipboard collection",
];

export default function GlobalDeploymentHero() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="flex flex-col">

            {/* Badge */}
            <div className="inline-flex self-start rounded-full bg-emerald-500/10 px-3.5 py-1.5">
              <span className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
                Global Deployment
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-5 max-w-[600px] text-4xl font-extrabold leading-[1.1] text-sky-950 dark:text-white sm:text-5xl lg:text-6xl">
              Deploy with{" "}
              <span className="text-emerald-500">regional truth</span>, local
              control, and accountable evidence
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-[590px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Define scope, verify current operability, and configure
              jurisdiction, data, time, locale, identity, policy, integrations,
              support, and rollout evidence before activation.
            </p>

            {/* Availability Callout */}
            <div className="mt-7 max-w-[590px] rounded-xl border border-l-[3px] border-emerald-500 bg-white px-4 pb-4 pt-6 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] dark:bg-slate-900">
              <p className="text-base font-normal leading-6 text-slate-700 dark:text-slate-300">
                Availability is confirmed against current technical,
                contractual, documentation, monitoring, support, legal, and
                commercial readiness — not against a coverage map.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3.5 sm:flex-row">

              <Link
                href="/request-enterprise-demo"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-600"
              >
                Request Enterprise Demo
              </Link>

              <Link
                href="/contact-sales"
                className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
              >
                Contact Sales
              </Link>

            </div>

            {/* Existing Customer Link */}
            <Link
              href="/login"
              className="mt-5 inline-flex items-center gap-2 self-start text-sm font-bold leading-6 text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400"
            >
              <span>Already a customer? Review deployment readiness</span>
              <span aria-hidden="true">→</span>
            </Link>

            {/* Guarantees */}
            <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">

              {guarantees.map((guarantee) => (
                <div key={guarantee} className="flex items-center gap-2">

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="shrink-0 text-emerald-500"
                    aria-hidden="true"
                  >
                    <circle
                      cx="7"
                      cy="7"
                      r="5.31"
                      stroke="currentColor"
                      strokeWidth="1.38"
                    />
                    <path
                      d="M5 7.1L6.4 8.5L9 5.9"
                      stroke="currentColor"
                      strokeWidth="1.38"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-400">
                    {guarantee}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6">

            <Image
              src="/global-deployment/hero.png"
              alt="Global workforce deployment with regional evidence and controls"
              width={598}
              height={443}
              priority
              className="h-auto w-full object-cover"
            />

            {/* Boundary Callout */}
            <div className="rounded-xl border border-l-[3px] border-sky-800 bg-slate-50 px-5 pb-5 pt-4 dark:bg-slate-900">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-sky-800 dark:text-sky-400">
                Above-the-fold boundary
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                This page governs deployment readiness. It is not a coverage
                promise, a compliance guarantee, or a global HR product. No map
                pins, flags, badge walls, or implied availability appear
                anywhere on it — by design.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
