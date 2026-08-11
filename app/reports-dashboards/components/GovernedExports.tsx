import SectionIntro from "./SectionIntro";
import { poppins } from "../fonts";

const steps = [
  "Request",
  "Approve",
  "Generate",
  "Access",
  "Withdraw / Replace",
  "Reconcile",
];

const receipt = [
  { label: "Requester / purpose", value: "A. Chen — quarterly compliance review" },
  { label: "Scope / definitions", value: "Record Health v3.2 · All warehouses" },
  { label: "Generated / data-as-of", value: "Aug 8, 2026 · through Aug 7, 11:59 PM" },
  { label: "Recipient / destination", value: "Secure internal delivery" },
  { label: "Access / retention", value: "30-day access window" },
  { label: "Limitations", value: "Not a legal-proof or compliance guarantee" },
];

export default function GovernedExports() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Governed Exports"
          title="Request → Approve → Generate → Access → Withdraw/Replace → Reconcile."
          description="Exports are not a guarantee of legal admissibility, regulatory acceptance, payroll correctness, or compliance."
          titleClassName="max-w-[720px]"
          descriptionClassName="max-w-[560px]"
        />

        {/* Step rail */}
        <div className="mt-12 grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, index) => (
            <div key={step} className="relative flex flex-col items-center px-2">
              {index > 0 && (
                <span
                  className="absolute right-1/2 top-4 hidden h-px w-full bg-gray-200 lg:block dark:bg-slate-700"
                  aria-hidden="true"
                />
              )}

              <span
                className={`${poppins.className} relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white`}
              >
                {index + 1}
              </span>

              <p
                className={`${poppins.className} mt-3 text-center text-xs font-bold text-sky-950 dark:text-white`}
              >
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Export receipt */}
        <div className="mt-12 rounded-[20px] border border-gray-200 px-7 py-3 dark:border-slate-800">
          {receipt.map((row, index) => (
            <div
              key={row.label}
              className={`flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
                index < receipt.length - 1
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
