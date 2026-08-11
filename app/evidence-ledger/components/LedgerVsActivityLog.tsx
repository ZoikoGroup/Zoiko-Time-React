import Image from "next/image";

import SectionIntro from "./SectionIntro";
import { poppins } from "../fonts";

const activityLog = [
  "Every raw signal, regardless of materiality",
  "Flat, chronological, disconnected entries",
  "No linkage to evidence or policy context",
  "Corrections often overwrite silently",
];

const evidenceLedger = [
  "Material lifecycle transitions only",
  "Object linkage across record, version, evidence, decision",
  "Evidence context and availability shown explicitly",
  "Corrections create linked history, never overwrite",
];

const objects = [
  { label: "Record", icon: "node-square.svg" },
  { label: "Version", icon: "object-version.svg" },
  { label: "Evidence", icon: "object-evidence.svg" },
  { label: "Decision", icon: "object-decision.svg" },
  { label: "Package", icon: "object-package.svg" },
  { label: "Reconciliation", icon: "object-reconciliation.svg" },
];

export default function LedgerVsActivityLog() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Ledger vs. Activity Log"
          title="Material history, not a raw telemetry feed."
          description="An activity log records everything that happened. The Evidence Ledger records what changed, why, and what it connects to — and says plainly what it can't show."
          descriptionClassName="max-w-[640px]"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Raw activity log */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
            <h3
              className={`${poppins.className} text-base font-bold text-sky-950 dark:text-white`}
            >
              Raw activity log
            </h3>

            <ul className="mt-5 space-y-3.5">
              {activityLog.map((item) => (
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
          </div>

          {/* Evidence Ledger */}
          <div className="rounded-2xl border border-teal-600 bg-white p-6 dark:bg-slate-950">
            <h3
              className={`${poppins.className} text-base font-bold text-sky-950 dark:text-white`}
            >
              Evidence Ledger
            </h3>

            <ul className="mt-5 space-y-3.5">
              {evidenceLedger.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Image
                    src="/evidence-ledger/check-mark.svg"
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
          </div>

        </div>

        {/* Linked objects */}
        <div className="mt-6 flex flex-wrap gap-3">
          {objects.map((object) => (
            <span
              key={object.label}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-xs font-semibold text-sky-950 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
            >
              <Image
                src={`/evidence-ledger/${object.icon}`}
                alt=""
                width={12}
                height={12}
                aria-hidden="true"
              />
              {object.label}
            </span>
          ))}
        </div>

        {/* Persistent limitation */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-orange-200 bg-orange-50 px-6 py-5 dark:border-amber-900/40 dark:bg-amber-900/10">
          <Image
            src="/evidence-ledger/icon-warning.svg"
            alt=""
            width={18}
            height={18}
            aria-hidden="true"
            className="mt-0.5 shrink-0"
          />

          <div>
            <h4
              className={`${poppins.className} text-sm font-bold text-sky-950 dark:text-white`}
            >
              Persistent limitation
            </h4>

            <p className="mt-1 text-sm leading-5 text-slate-600 dark:text-slate-300">
              The ledger explains what changed and why it&apos;s connected — it
              is not a completeness guarantee, a legal-admissibility claim, or
              proof of correctness. This applies everywhere in the product, not
              just here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
