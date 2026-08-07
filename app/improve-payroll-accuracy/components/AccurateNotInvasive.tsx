import Link from "next/link";
import Image from "next/image";

export default function AccurateNotInvasive() {
  return (
    <section className="w-full overflow-hidden bg-[#F6F9F9] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12">

          {/* Assurance Visual */}
          <div className="flex items-center justify-center overflow-hidden rounded-[20px] border border-[#C9EAE2] bg-[linear-gradient(60deg,#E8F5F2_0%,#FFFFFF_70%)] p-6 shadow-[0px_24px_50px_0px_rgba(14,31,61,0.14)] dark:border-slate-800 dark:bg-slate-950 dark:bg-none">
            <Image
              src="/improve-payroll-accuracy/Accurate-Not-Invasive.png"
              alt=""
              width={568}
              height={384}
              className="h-auto w-full"
            />
          </div>

          {/* Copy */}
          <div className="flex flex-col">

            <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
              Accurate, Not Invasive
            </p>

            <h2 className="mt-3.5 max-w-[460px] text-3xl font-bold leading-[1.11] text-[#0E1F3D] dark:text-white sm:text-4xl">
              Accuracy never requires surveillance
            </h2>

            <p className="mt-5 max-w-[510px] text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
              ZoikoTime improves payroll inputs with transparent, reviewable
              records — and human authority stays in control of every
              consequential decision.
            </p>

            {/* Anti-Surveillance Invariant */}
            <div className="mt-8 flex max-w-[515px] items-center gap-[18px] rounded-2xl bg-[#0E1F3D] px-7 py-6 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)]">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Image
                  src="/improve-payroll-accuracy/lock.svg"
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

                <p className="mt-1.5 text-base font-medium leading-6 text-white">
                  No screenshots, keystroke content, URL history,
                  application-name monitoring, or clipboard collection under any
                  tier or configuration.
                </p>

              </div>

            </div>

            {/* Classification Note */}
            <p className="mt-5 max-w-[510px] text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
              Deterministic Time Classification is policy-bound and reviewable —{" "}
              <span className="font-bold">not AI</span> — and never determines
              pay, discipline, or misconduct.{" "}
              <Link
                href="/responsible-ai"
                className="font-semibold text-[#0B8675] transition hover:text-[#0E1F3D] dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                Responsible AI →
              </Link>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
