import Image from "next/image";

import { poppins } from "../fonts";

const neverPresentedAs = [
  "Blockchain-based or immutable",
  "Tamper-proof",
  "Legally admissible evidence",
  "Regulator-ready or statutory audit evidence",
  "Universally complete",
  "A guarantee of correctness or compliance",
  "A surveillance dashboard or raw telemetry store",
  "An employee-monitoring timeline",
];

export default function SystemBoundaries() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <div className="flex items-center gap-3.5">
          <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-600" />

          <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
            System Boundaries
          </span>
        </div>

        <h2
          className={`${poppins.className} mt-4 text-2xl font-bold leading-9 text-sky-950 dark:text-white sm:text-3xl`}
        >
          What the Evidence Ledger is not.
        </h2>

        <div className="mt-10 rounded-[20px] border border-gray-200 px-8 py-7 dark:border-slate-800">
          <h3
            className={`${poppins.className} text-sm font-bold text-sky-950 dark:text-white`}
          >
            The Evidence Ledger is never presented as:
          </h3>

          <ul className="mt-4 grid grid-cols-1 gap-x-16 gap-y-3 md:grid-cols-2">
            {neverPresentedAs.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Image
                  src="/evidence-ledger/cross-mark.svg"
                  alt=""
                  width={14}
                  height={14}
                  aria-hidden="true"
                  className="mt-1 shrink-0"
                />

                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <h3
            className={`${poppins.className} mt-8 text-sm font-bold text-sky-950 dark:text-white`}
          >
            It also does not make consequential decisions.
          </h3>

          <p className="mt-2 max-w-[720px] text-sm leading-6 text-slate-600 dark:text-slate-400">
            Payroll outcomes, discipline, misconduct findings, legal status, and
            other external decisions remain with authorized people and processes
            — the ledger provides context for those decisions, not the decisions
            themselves.
          </p>
        </div>
      </div>
    </section>
  );
}
