import Link from "next/link";
import Image from "next/image";

const assurances = [
  "No marketing consent required",
  "No worker or membership data collected",
  "Public resources are not gated",
];

export default function ConsultationHero() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="flex flex-col">

            {/* Badge */}
            <div className="inline-flex self-start rounded-full bg-emerald-500/10 px-3.5 py-1.5">
              <span className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
                Works-Council &amp; Consultation Resources
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-5 max-w-[600px] text-4xl font-extrabold leading-[1.1] text-sky-950 dark:text-white sm:text-5xl lg:text-6xl">
              Consultation materials with context, limits, and{" "}
              <span className="text-emerald-500">
                accountable follow-through
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-[590px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Versioned product and governance materials for employers,
              representative bodies, advisors, workers, privacy, security and
              accessibility reviewers, and deployment owners — each with its
              scope, owner, review date, and stated limitations.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col items-start gap-3.5">

              <Link
                href="/contact-sales"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-600"
              >
                Prepare Consultation Pack
              </Link>

              <Link
                href="#resource-directory"
                className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
              >
                Review Consultation Resources
              </Link>

            </div>

            <p className="mt-4 max-w-[520px] text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
              Representative bodies and advisors can review public materials
              without a ZoikoTime account, a purchase, or accepting product
              terms.
            </p>

            {/* Assurances */}
            <ul className="mt-7 flex flex-col gap-3">

              {assurances.map((assurance) => (
                <li key={assurance} className="flex items-center gap-2">

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
                    {assurance}
                  </span>

                </li>
              ))}

            </ul>

          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6">

            <Image
              src="/works-council-consultation/hero.png"
              alt="A representative reviewing consultation materials, evidence, and governance records"
              width={598}
              height={397}
              priority
              className="h-auto w-full rounded-[20px] object-cover shadow-[0px_18px_50px_0px_rgba(11,18,32,0.10)]"
            />

            {/* Boundary Callout */}
            <div className="rounded-xl border border-l-[3px] border-sky-800 bg-white px-5 pb-5 pt-4 dark:bg-slate-900">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-sky-800 dark:text-sky-400">
                What this page does not do
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                It does not determine whether consultation is required,
                calculate a deadline, get a rollout approved, or certify that
                any obligation has been met.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
