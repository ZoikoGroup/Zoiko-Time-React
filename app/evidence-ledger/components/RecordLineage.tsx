import Image from "next/image";

import SectionIntro from "./SectionIntro";
import { poppins } from "../fonts";

const versions = [
  { version: "v1", state: "Source" },
  { version: "v2", state: "Normalized" },
  { version: "v3", state: "Corrected", active: true },
  { version: "v4", state: "Approved" },
];

const changes = [
  { label: "Break duration", before: "25 min", after: "30 min" },
  { label: "Classification", before: "Short break — flagged", after: "Compliant" },
  {
    label: "Reason",
    after: "Worker correction — supervisor confirmed actual break end time",
  },
  { label: "Evidence change", after: "+1 supervisor confirmation added" },
  { label: "Downstream impact", after: "Payroll reference updated on release" },
];

export default function RecordLineage() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Record Lineage"
          title="Version comparison, not silent overwrite."
          description="Every correction, reclassification, or reopening creates a new linked version — the prior version stays visible, not deleted."
          descriptionClassName="max-w-[650px]"
        />

        {/* Version rail */}
        <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-[20px] border border-gray-200 lg:grid-cols-4 dark:border-slate-800">
          {versions.map((version, index) => (
            <div
              key={version.version}
              className={`px-5 py-5 ${
                index < versions.length - 1
                  ? "border-r border-gray-100 dark:border-slate-800"
                  : ""
              } ${version.active ? "bg-emerald-50 dark:bg-emerald-900/20" : ""}`}
            >
              <p
                className={`${poppins.className} text-base font-bold text-sky-950 dark:text-white`}
              >
                {version.version}
              </p>

              <p
                className={`mt-1.5 text-xs ${
                  version.active
                    ? "font-semibold text-emerald-600"
                    : "text-slate-500"
                }`}
              >
                {version.state}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-slate-50 px-6 py-3 dark:border-slate-800 dark:bg-slate-900">
          {changes.map((change, index) => (
            <div
              key={change.label}
              className={`flex flex-col gap-2 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
                index < changes.length - 1
                  ? "border-b border-gray-100 dark:border-slate-800"
                  : ""
              }`}
            >
              <span className="text-sm font-semibold text-slate-500">
                {change.label}
              </span>

              <span className="flex items-center gap-3">
                {change.before && (
                  <>
                    <span className="text-sm text-gray-400 line-through">
                      {change.before}
                    </span>

                    <Image
                      src="/evidence-ledger/arrow-inline.svg"
                      alt="changed to"
                      width={13}
                      height={13}
                      className="dark:invert"
                    />
                  </>
                )}

                <span className="text-sm text-sky-950 dark:text-white">
                  {change.after}
                </span>
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Comparing v3 (Corrected) against v4 (Approved). Select a version above
          to change the comparison.
        </p>
      </div>
    </section>
  );
}
