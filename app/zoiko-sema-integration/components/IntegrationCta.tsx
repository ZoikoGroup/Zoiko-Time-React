import Link from "next/link";
import Image from "next/image";

const assurances = [
  "Two independent products.",
  "One optional bridge.",
  "Human authority throughout.",
];

export default function IntegrationCta() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-10 dark:border-slate-800 dark:bg-slate-900">

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

            {/* Left Content */}
            <div className="flex flex-col">

              <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
                Optional by Design
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
                Connect communication context without surrendering workforce
                authority
              </h2>

              <p className="mt-4 max-w-[520px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
                See how an optional, customer-configured bridge can route approved
                Zoiko Sema context into reviewable ZoikoTime operations — with
                explicit mapping, governance, human review, and audit history at
                every step.
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

              {/* Quick Links */}
              <p className="mt-5 flex flex-wrap items-center gap-x-2 text-sm font-bold leading-6 text-emerald-700 dark:text-emerald-400">

                <Link
                  href="/product"
                  className="inline-flex items-center gap-1.5 transition hover:text-emerald-800"
                >
                  Explore ZoikoTime <span aria-hidden="true">→</span>
                </Link>

                <span
                  className="text-xs font-normal text-zinc-500 dark:text-slate-500"
                  aria-hidden="true"
                >
                  ·
                </span>

                <Link
                  href="/trust-center"
                  className="transition hover:text-emerald-800"
                >
                  Trust Center
                </Link>

              </p>

              {/* Assurances */}
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {assurances.map((assurance) => (
                  <span
                    key={assurance}
                    className="text-sm font-bold leading-6 text-emerald-800 dark:text-emerald-300"
                  >
                    {assurance}
                  </span>
                ))}
              </div>

            </div>

            {/* Right Content */}
            <Image
              src="/zoiko-sema-integration/cta.png"
              alt="An administrator routing approved communication context into governed workforce operations while a team reviews it"
              width={568}
              height={400}
              className="h-auto w-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}
