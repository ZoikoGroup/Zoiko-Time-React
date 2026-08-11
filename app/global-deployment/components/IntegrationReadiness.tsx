import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    stage: "01 · Authorize",
    title: "Source and destination",
    description:
      "System and object authority, purpose, direction, identity, scope, owner, support status.",
  },
  {
    stage: "02 · Map",
    title: "Versioned mapping",
    description:
      "Fields, time and locale, units, enumerations, validation, null and conflict behavior, limitations.",
  },
  {
    stage: "03 · Test",
    title: "Isolated environment",
    description:
      "Approved non-production scope, synthetic data, test identity, isolation, cleanup, evidence.",
  },
  {
    stage: "04 · Reconcile",
    title: "Acknowledge and correct",
    description:
      "Delivery and receipt, retry, idempotency, ordering, duplicate detection, mismatch resolution.",
  },
];

const required = [
  "Correction propagation to every affected destination, with recalculation and acknowledgement",
  "Cutover with queue handling, parallel validation, rollback, recovery, and communication",
  "Failure states that stay visible, neutral, and owned",
  "Evidence preserved for each run, retry, and reconciliation",
];

const forbidden = [
  "Guessing a value when data is missing, late, or conflicting",
  "Privilege expansion to complete a flow",
  "Silent drops or duplicate acceptance",
  "Irreversible partial activation",
  "Treating an integration as proof of an approved data-location or regional profile",
];

export default function IntegrationReadiness() {
  return (
    <section id="connection-readiness" className="scroll-mt-24 w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
            Integration &amp; Data-Flow Readiness
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Connections Are Governed, Not Browsed From a Marketplace
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Each authorized flow states its system authority, purpose,
            direction, identity, scope, owner, and current support status. There
            is no provider list and no implied catalogue.
          </p>

        </div>

        {/* Flow Steps */}
        <div className="mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={step.stage}
              className="relative flex flex-col rounded-2xl border border-stone-200 bg-white px-4 pb-4 pt-6 dark:border-slate-800 dark:bg-slate-900"
            >

              <p className="text-xs font-extrabold leading-5 tracking-wide text-emerald-800 dark:text-emerald-400">
                {step.stage}
              </p>

              <h3 className="mt-2 text-base font-bold leading-5 text-sky-950 dark:text-white">
                {step.title}
              </h3>

              <p className="mt-1.5 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {step.description}
              </p>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="absolute -right-[17px] top-1/2 hidden -translate-y-1/2 text-emerald-400 lg:block"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 7H11M7.5 3.5L11 7L7.5 10.5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}

            </div>
          ))}

        </div>

        {/* Behavior Panels */}
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">

          {/* Required Behavior */}
          <div className="flex flex-col rounded-2xl border border-emerald-100 bg-emerald-50/40 px-6 pb-8 pt-6 dark:border-slate-800 dark:bg-slate-900">

            <div className="flex items-center gap-2">

              <Image
                src="/global-deployment/tick-mark.svg"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4 shrink-0"
              />

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Required behavior
              </h3>

            </div>

            <ul className="mt-3.5 flex flex-col gap-2.5">

              {required.map((item) => (
                <li key={item} className="flex gap-2">

                  <Image
                    src="/global-deployment/tick-icon.png"
                    alt=""
                    width={10}
                    height={10}
                    className="mt-[7px] h-2.5 w-2.5 shrink-0 object-contain"
                  />

                  <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {item}
                  </span>

                </li>
              ))}

            </ul>

          </div>

          {/* Never Permitted */}
          <div className="flex flex-col rounded-2xl border border-stone-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">

            <div className="flex items-center gap-2">

              <Image
                src="/global-deployment/cross-mark.svg"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4 shrink-0"
              />

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Never permitted
              </h3>

            </div>

            <ul className="mt-3.5 flex flex-col gap-2.5">

              {forbidden.map((item) => (
                <li key={item} className="flex gap-2">

                  <Image
                    src="/global-deployment/cross-icon.png"
                    alt=""
                    width={10}
                    height={10}
                    className="mt-[7px] h-2.5 w-2.5 shrink-0 object-contain"
                  />

                  <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {item}
                  </span>

                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* Section CTA */}
        <div className="mt-7 flex justify-center">

          <Link
            href="/enterprise-integrations"
            className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-6 py-3.5 text-base font-bold leading-6 text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
          >
            <span>Enterprise Integrations</span>
            <span aria-hidden="true">→</span>
          </Link>

        </div>

      </div>
    </section>
  );
}
