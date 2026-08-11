import Link from "next/link";
import type { ReactNode } from "react";

const bullets: ReactNode[] = [
  <>
    <span className="font-bold">
      A certificate does not cover your configuration
    </span>{" "}
    unless the certificate says so.
  </>,
  <>
    <span className="font-bold">
      It does not cover local employment law, payroll handling, or your
      downstream systems.
    </span>
  </>,
  <>
    <span className="font-bold">
      A control mapping is not regulator approval
    </span>{" "}
    and is not a legal conclusion.
  </>,
  <>
    <span className="font-bold">
      Internal self-review is never presented as an independent audit.
    </span>{" "}
    The two are separate record types with separate weight.
  </>,
];

export default function CertificationBoundary() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">

        <div className="rounded-2xl border border-l-4 border-amber-500 bg-amber-50/40 px-6 pb-7 pt-10 sm:px-8 dark:border-amber-600 dark:bg-amber-950/10">

          <p className="max-w-[780px] text-base font-bold uppercase leading-6 tracking-[0.12em] text-amber-600 dark:text-amber-400">
            Certification and professional boundary
          </p>

          <h2 className="mt-2.5 text-xl font-bold leading-7 text-amber-900 dark:text-amber-200">
            Certification is scoped evidence — not a universal compliance
            guarantee.
          </h2>

          <p className="mt-2.5 max-w-[760px] text-base font-normal leading-6 text-amber-800 dark:text-amber-200/80">
            Every certificate, report, and assessment applies only to its issuer,
            subject, standard and version, period, product, environment, entity,
            region, and stated exclusions. Outside those boundaries it proves
            nothing, and reading it as broader than it is remains the most common
            error in procurement.
          </p>

          {/* Boundary Bullets */}
          <ul className="mt-4 flex flex-col gap-2">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex gap-2.5">

                <span
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-[3px] bg-amber-500"
                  aria-hidden="true"
                />

                <span className="text-sm font-normal leading-6 text-amber-800 dark:text-amber-200/80">
                  {bullet}
                </span>

              </li>
            ))}
          </ul>

          <p className="mt-4 max-w-[760px] text-base font-normal leading-6 text-amber-800 dark:text-amber-200/80">

            <span className="font-bold">
              ZoikoTime does not interpret law for you.
            </span>{" "}
            Compliance depends on your configuration, practices, contracts,
            jurisdiction, and workforce context. We provide scoped evidence and
            stated limitations; assessing whether that meets your obligations
            requires your own legal and professional review.

          </p>

          {/* Statement Provenance */}
          <div className="mt-6 max-w-[620px] border-t border-amber-200 pt-3.5 dark:border-amber-900/40">

            <p className="text-xs font-normal leading-5 text-amber-700 dark:text-amber-300/70">
              Statement owner: Trust &amp; Governance · Last reviewed 12 Jul 2026
              · Next review 12 Jan 2027 ·
            </p>

            <Link
              href="#shared-responsibility"
              className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-bold leading-6 text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
            >
              Shared responsibility <span aria-hidden="true">→</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
