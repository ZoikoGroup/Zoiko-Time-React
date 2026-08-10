import Link from "next/link";
import Image from "next/image";

export default function EnterpriseTrust() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        {/* Feature banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800 to-teal-700 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)]">
          <Image
            src="/training-adoption/Accessible.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1180px) 100vw, 1132px"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-slate-900/75 to-slate-900/30"
            aria-hidden="true"
          />

          <div className="relative px-6 py-10 sm:px-10">
            <p className="max-w-[560px] text-xl font-bold leading-7 text-white">
              Accessible, permissioned, and never surveillance.
            </p>
            <p className="mt-2 max-w-[600px] text-sm font-normal leading-5 text-white/90">
              Learning that respects workers — and evidence that holds up to
              review.
            </p>
          </div>
        </div>

        {/* Section header */}
        <div className="mt-16 text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Enterprise Trust
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Training that respects workers and holds up to
            <br className="hidden lg:inline" /> review
          </h2>
          <p className="mx-auto mt-4 max-w-[740px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Accessible by standard, permissioned by role, and governed by the
            same principles as the rest of ZoikoTime.
          </p>
        </div>

        {/* Anti-surveillance invariant */}
        <div className="mx-auto mt-10 max-w-[920px] rounded-2xl bg-slate-800 p-7 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] sm:flex sm:gap-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <Image
              src="/training-adoption/lock.svg"
              alt=""
              aria-hidden="true"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </div>

          <div className="mt-5 sm:mt-0">
            <p className="text-xs font-bold uppercase leading-4 tracking-wider text-teal-400">
              Anti-surveillance invariant
            </p>
            <p className="mt-2 text-base font-medium leading-6 text-white">
              No screenshots, keystroke content, URL history, application-name
              monitoring, or clipboard collection under any tier or
              configuration.
            </p>
          </div>
        </div>

        {/* Governance note */}
        <div className="mx-auto mt-6 max-w-[900px] rounded-xl border border-emerald-100 bg-emerald-50 px-6 py-5 text-center dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm leading-5 text-slate-800 dark:text-slate-300">
            <span className="font-bold text-teal-700 dark:text-teal-400">
              Learning is not monitoring.
            </span>{" "}
            Adoption analytics measure completion and readiness — never
            keystrokes, screens, or behavior. Content meets WCAG 2.2 AA, access
            is role-based, and completion, certification, and adoption reports
            contribute to governed evidence.{" "}
            <Link
              href="/trust-center"
              className="font-semibold text-teal-700 underline-offset-2 hover:underline dark:text-teal-400"
            >
              Visit Trust Center →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
