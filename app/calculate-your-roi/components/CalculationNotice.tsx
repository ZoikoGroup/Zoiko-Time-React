import React from "react";
import { Info } from "lucide-react";

export default function CalculationNotice() {
  return (
    <section className="bg-white px-6 py-10 transition-colors duration-300 dark:bg-slate-950 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-orange-200 bg-yellow-50 p-5 shadow-sm transition-colors duration-300 dark:border-yellow-900/40 dark:bg-yellow-950/20">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/40">
              <Info className="h-5 w-5 text-yellow-800 dark:text-yellow-300" />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-base font-semibold text-yellow-900 dark:text-yellow-200">
                How this is calculated.
              </h3>

              <p className="mt-3 text-sm leading-7 text-yellow-800 dark:text-yellow-100/90 sm:text-base">
                The model uses your annual labor base
                <span className="font-medium">
                  {" "}
                  (workers × weekly hours × 52 × hourly cost)
                </span>
                , applies a conservative recovery coefficient to each value
                driver, and caps governance value at a small percentage of the
                labor base. Payroll validation is represented within time
                accuracy and review reduction to avoid double-counting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}