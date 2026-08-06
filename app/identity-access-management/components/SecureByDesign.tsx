import Link from "next/link";
import Image from "next/image";

export default function SecureByDesign() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[700px] flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Secure by Design, Not Surveillance
          </p>

          <h2 className="text-center text-3xl font-bold leading-[1.11] text-[#0E1F3D] dark:text-white sm:text-4xl">
            Strong access control — never worker monitoring
          </h2>

          <p className="max-w-[660px] text-center text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
            Identity &amp; Access Management protects your organization and your
            workers. It governs access; it never watches activity.
          </p>

        </div>

        {/* Anti-Surveillance Invariant */}
        <div className="mx-auto mt-9 flex w-full max-w-[920px] items-center gap-4 rounded-2xl bg-[#0E1F3D] px-6 py-6 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] sm:px-7">

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10A28D]/15">
            <Image
              src="/identity-access-management/lock-teal.svg"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </span>

          <div className="min-w-0">

            <p className="text-xs font-bold uppercase leading-4 tracking-wider text-[#10A28D]">
              Anti-surveillance invariant
            </p>

            <p className="mt-1.5 text-sm font-medium leading-6 text-white">
              No screenshots, keystroke content, URL history, application-name
              monitoring, or clipboard collection under any tier or
              configuration.
            </p>

          </div>

        </div>

        {/* Human Authority Note */}
        <div className="mx-auto mt-4 w-full max-w-[920px] rounded-xl border border-[#C9EAE2] bg-[#E8F6F2] px-6 py-4 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-center text-xs font-normal leading-5 text-[#0E1F3D] dark:text-slate-300">
            <span className="font-bold text-[#0B8675] dark:text-emerald-400">
              Human authority remains controlling.
            </span>{" "}
            IAM enforces the access you configure; it does not decide
            employment, discipline, or legal outcomes. No security control
            eliminates all risk — see the{" "}
            <Link
              href="/security-addendum"
              className="font-semibold text-[#0B8675] transition hover:text-[#0E1F3D] dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              Security Addendum
            </Link>{" "}
            for supported controls, certifications, and assurances.
          </p>
        </div>

      </div>
    </section>
  );
}
