import Link from "next/link";
import Image from "next/image";

export default function NotSurveillance() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Connected, Not Surveilled
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Integration never becomes monitoring
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Connections transport and transform approved records. They never
            create authority, override worker corrections, bypass approval, or
            broaden access.
          </p>
        </div>

        {/* Anti-surveillance invariant */}
        <div className="mx-auto mt-10 flex max-w-[900px] flex-col gap-4 rounded-2xl bg-slate-800 px-7 py-6 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] sm:flex-row sm:items-center">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <Image
              src="/enterprise-integrations/lock.svg"
              alt=""
              aria-hidden="true"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </span>

          <div>
            <p className="text-xs font-bold uppercase leading-4 tracking-wider text-teal-600">
              Anti-surveillance invariant
            </p>
            <p className="mt-1.5 text-base font-medium leading-6 text-white">
              No screenshots, keystroke content, URL history, application-name
              monitoring, or clipboard collection under any tier or
              configuration.
            </p>
          </div>
        </div>

        {/* Governance note */}
        <div className="mx-auto mt-6 max-w-[880px] rounded-xl border border-emerald-100 bg-[#EAF6F3] px-5 py-4 text-center dark:border-slate-700 dark:bg-slate-800">
          <p className="text-sm leading-5 text-slate-800 dark:text-slate-300">
            <span className="font-bold text-teal-700 dark:text-teal-400">
              Deterministic Time Classification is not AI
            </span>{" "}
            — it stays policy-bound, explainable, and reviewable. Any assistant
            can navigate documentation only after separate approval; it cannot
            create or approve mappings or resolve conflicts.{" "}
            <Link
              href="/trust-governance"
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
