import { Check } from "lucide-react";

const features = [
  "Human review",
  "Complete change history",
  "No screenshots",
  "No keystroke capture",
];

export default function PayrollFeatures() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex w-full items-center justify-center gap-3 rounded-full border border-emerald-100 bg-white px-5 py-3 shadow-[0px_6px_18px_rgba(14,31,61,0.05)] shadow-[0px_1px_3px_rgba(14,31,61,0.06)] transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900 sm:w-auto"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-50 dark:bg-teal-900/20">
                <Check className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
              </div>

              <span className="whitespace-nowrap text-sm font-medium text-slate-800 dark:text-slate-100">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
