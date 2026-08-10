import Link from "next/link";
import Image from "next/image";

const assurances = [
  "Optional",
  "Workspace-scoped",
  "Role-controlled",
  "Audit-ready",
];

export default function SemaIntegrationHero() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="flex flex-col">

            {/* Badge */}
            <div className="inline-flex self-start rounded-full bg-emerald-500/10 px-3.5 py-1.5">
              <span className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
                Zoiko Sema + ZoikoTime
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-5 max-w-[600px] text-4xl font-extrabold leading-[1.1] text-sky-950 dark:text-white sm:text-5xl lg:text-6xl">
              Connect approved communication context to{" "}
              <span className="text-emerald-500">
                reviewable workforce operations
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Map approved Zoiko Sema workspaces to ZoikoTime teams or
              organizational units, apply roles, permissions, privacy modes,
              policy scope, and jurisdiction controls — then review connection
              health and approved operational context.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">

              <Link
                href="/start-free"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-600"
              >
                Start Free
              </Link>

              <Link
                href="/request-enterprise-demo"
                className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
              >
                Request Enterprise Demo
              </Link>

            </div>

            {/* Assurances */}
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
              {assurances.map((assurance) => (
                <span
                  key={assurance}
                  className="inline-flex items-center gap-2 text-sm font-normal leading-6 text-sky-900 dark:text-slate-300"
                >

                  <Image
                    src="/zoiko-sema-integration/tick-mark.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="shrink-0"
                  />

                  {assurance}

                </span>
              ))}
            </div>

            <p className="mt-5 max-w-[520px] text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
              Zoiko Sema and ZoikoTime licensing, availability, setup, context
              scope, direction, and implementation vary by plan, contract,
              configuration, region, and product status.
            </p>

          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-1">

            <Image
              src="/zoiko-sema-integration/hero.png"
              alt="An administrator mapping approved communication workspaces to governed workforce scopes while colleagues review the connection"
              width={598}
              height={776}
              priority
              className="h-auto w-full object-cover"
            />

            {/* Nothing Is Active Yet Callout */}
            <div className="rounded-xl border border-l-[3px] border-sky-800 bg-white px-5 pb-4 pt-4 dark:bg-slate-900">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-sky-800 dark:text-sky-400">
                Nothing is active yet
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                Two workspaces are excluded by policy and will never map. No
                exchange occurs until eligibility, mapping, governance,
                authorization, testing, and acceptance are all complete.
                Illustrative interface — all values synthetic.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
