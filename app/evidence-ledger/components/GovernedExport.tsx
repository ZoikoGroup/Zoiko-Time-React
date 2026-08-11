import SectionIntro from "./SectionIntro";
import { poppins } from "../fonts";

const steps = [
  { label: "Define Purpose", done: true },
  { label: "Select Content", done: true },
  { label: "Apply Access / Redaction", done: true },
  { label: "Review Limitations", done: true },
  { label: "Approve", done: true },
  { label: "Generate Package", done: false },
  { label: "Deliver", done: false },
  { label: "Record History", done: false },
];

const packageDetail = [
  { label: "Package ID / version", value: "PKG-2201 · v1" },
  { label: "Purpose", value: "Internal payroll reconciliation" },
  { label: "Scope", value: "Team 12 · Aug 1–7, 2026" },
  {
    label: "Included / excluded",
    value: "Approved records included; open corrections excluded",
  },
  {
    label: "Evidence categories",
    value: "Classification logs, supervisor confirmations",
  },
  { label: "Redaction summary", value: "2 fields masked per access policy" },
  { label: "Limitations", value: "Not a legal-proof or completeness guarantee" },
  { label: "Destination", value: "Payroll system — secure delivery" },
  { label: "Receipt / expiry", value: "Delivered Aug 8 · expires Sep 8, 2026" },
];

export default function GovernedExport() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Governed Evidence Export"
          title="Export is a controlled workflow, not a download button."
          description="Every package states its purpose and limitations up front — it is never presented as an unrestricted log dump or a legal-proof package."
          titleClassName="max-w-[620px]"
          descriptionClassName="max-w-[620px]"
        />

        {/* Step rail */}
        <div className="mt-12 grid grid-cols-2 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {steps.map((step, index) => (
            <div key={step.label} className="relative flex flex-col items-center px-2">
              {index > 0 && (
                <span
                  className="absolute right-1/2 top-4 hidden h-px w-full bg-gray-200 lg:block dark:bg-slate-700"
                  aria-hidden="true"
                />
              )}

              <span
                className={`${poppins.className} relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                  step.done
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-slate-500 dark:bg-slate-800"
                }`}
              >
                {index + 1}
              </span>

              <p
                className={`${poppins.className} mt-3 text-center text-xs font-bold leading-4 text-sky-950 dark:text-white`}
              >
                {step.label}
              </p>
            </div>
          ))}
        </div>

        {/* Package detail */}
        <div className="mt-12 rounded-[20px] border border-gray-200 px-7 py-3 dark:border-slate-800">
          {packageDetail.map((row, index) => (
            <div
              key={row.label}
              className={`flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
                index < packageDetail.length - 1
                  ? "border-b border-gray-100 dark:border-slate-800"
                  : ""
              }`}
            >
              <span className="text-sm text-slate-500">{row.label}</span>

              <span className="text-sm font-semibold text-sky-950 dark:text-white">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
