"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function ROI() {
  const [workers, setWorkers] = useState(500);
  const [hourlyCost, setHourlyCost] = useState(35);
  const [weeklyHours, setWeeklyHours] = useState(40);
  const [currency, setCurrency] = useState("USD");
  const [workforceType, setWorkforceType] = useState("");
  const [leakage, setLeakage] = useState(3);
  const [payrollReview, setPayrollReview] = useState(0);
  const [managerReview, setManagerReview] = useState(0);
  const [billablePercent, setBillablePercent] = useState(0);
  const [billableRate, setBillableRate] = useState(0);

  const roi = useMemo(() => {
    const annualLaborCost =
      workers * hourlyCost * weeklyHours * 52;

    const recoveredTimeValue =
      annualLaborCost * (leakage / 100) * 0.5;

    const payrollSavings =
      (payrollReview + managerReview) *
      hourlyCost *
      12;

    const billableValue =
      billablePercent > 0 && billableRate > 0
        ? workers *
          (billablePercent / 100) *
          weeklyHours *
          52 *
          billableRate *
          0.01
        : 0;

    return Math.round(
      recoveredTimeValue +
        payrollSavings +
        billableValue
    );
  }, [
    workers,
    hourlyCost,
    weeklyHours,
    leakage,
    payrollReview,
    managerReview,
    billablePercent,
    billableRate,
  ]);

  const formattedROI = new Intl.NumberFormat(
    currency === "INR" ? "en-IN" : "en-US",
    {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }
  ).format(roi);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-16 transition-colors dark:from-slate-950 dark:to-slate-900 sm:px-6 lg:px-8 lg:py-16">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-160px] h-96 w-[760px] max-w-[90vw] -translate-x-1/2 rounded-full bg-teal-600/10 blur-3xl dark:bg-teal-500/10" />

      <div className="relative mx-auto grid max-w-[1132px] items-start gap-12 lg:grid-cols-[1fr_470px] lg:gap-[82px]">
        {/* LEFT SIDE */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            ROI Calculator
          </p>

          <h1 className="mt-5 max-w-[580px] text-4xl font-bold leading-[1.12] tracking-tight text-slate-800 dark:text-white sm:text-5xl">
            Calculate the financial
            <br className="hidden sm:block" />
            impact of{" "}
            <span className="text-teal-600">
              workforce truth
            </span>
          </h1>

          <p className="mt-6 max-w-[557px] text-base leading-7 text-gray-500 dark:text-slate-400">
            Estimate how much value your organization may
            recover through stronger time accuracy, payroll
            validation, productivity visibility, client-billable
            evidence, and compliance-ready workforce records.
          </p>

          {/* Notice */}
          <div className="mt-8 max-w-[560px] rounded-r-[10px] border-l-[3px] border-emerald-100 bg-gray-50 px-5 py-3 dark:border-teal-700 dark:bg-slate-800/70">
            <p className="text-sm leading-6 text-gray-500 dark:text-slate-400">
              No generic assumptions. No inflated promises. Your
              estimate is shaped around your workforce size,
              labor cost, operating model, and current level of
              workforce visibility.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("roi-form")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="h-11 rounded-[10px] bg-teal-600 px-7 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700"
            >
              Start ROI Calculator
            </button>

            <Link
  href="/request-tailored-demo"
  className="flex h-11 w-full items-center justify-center rounded-[10px] bg-teal-600 px-6 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(16,162,141,0.28)] transition duration-300 hover:bg-teal-700 sm:w-56"
>
  Request Tailored Demo
</Link>
          </div>

          {/* Trust Points */}
          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Conservative by design",
              "Transparent assumptions",
              "Validate with your team",
            ].map((item) => (
              <div
                key={item}
                className="flex h-10 items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 text-xs font-medium text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <span className="font-bold text-teal-600">
                  ✓
                </span>

                {item}
              </div>
            ))}
          </div>

          {/* Result */}
          {roi > 0 && (
            <div
              id="roi-result"
              className="mt-10 max-w-[560px] rounded-2xl border border-teal-100 bg-teal-50 p-6 dark:border-teal-900 dark:bg-teal-950/30"
            >
              <p className="text-sm font-medium text-gray-500 dark:text-slate-400">
                Estimated annual value opportunity
              </p>

              <p className="mt-2 text-3xl font-bold text-teal-600">
                {formattedROI}
              </p>

              <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-slate-400">
                This is an estimate based on the inputs provided
                and should be validated with your team.
              </p>
            </div>
          )}
        </div>

        {/* CALCULATOR CARD */}
        <div
          id="roi-form"
          className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(14,31,61,0.10)] dark:border-slate-700 dark:bg-slate-800 dark:shadow-black/20 sm:p-8"
        >
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            Estimate your value
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-slate-400">
            Adjust the inputs to match your workforce.
          </p>

          <div className="mt-8 space-y-6">
            {/* Workers */}
            <Input
              label="Number of Workers to Track"
              required
              type="number"
              value={workers}
              onChange={(e) =>
                setWorkers(Number(e.target.value))
              }
              placeholder="e.g. 500"
              helper="Include employees, contractors, and client-billable workers."
            />

            {/* Cost and Hours */}
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="Average Hourly Labor Cost"
                required
                type="number"
                value={hourlyCost}
                onChange={(e) =>
                  setHourlyCost(Number(e.target.value))
                }
                helper="Use fully loaded cost if available."
              />

              <Input
                label="Average Weekly Paid Hours"
                required
                type="number"
                value={weeklyHours}
                onChange={(e) =>
                  setWeeklyHours(Number(e.target.value))
                }
              />
            </div>

            {/* Currency and Workforce */}
            <div className="grid gap-5 sm:grid-cols-2">
              <Select
                label="Currency"
                value={currency}
                onChange={setCurrency}
                options={["USD", "EUR", "GBP", "INR"]}
              />

              <Select
                label="Workforce Type"
                value={workforceType}
                onChange={setWorkforceType}
                options={[
                  "Employees",
                  "Contractors",
                  "Hybrid Workforce",
                ]}
                placeholder="Select"
              />
            </div>

            {/* Leakage */}
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Estimated Time Leakage
                </label>

                <span className="text-sm font-bold text-teal-700 dark:text-teal-400">
                  {leakage.toFixed(1)}%
                </span>
              </div>

              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={leakage}
                onChange={(e) =>
                  setLeakage(Number(e.target.value))
                }
                className="mt-4 w-full accent-teal-600"
              />

              <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-slate-400">
                Paid time that may not be fully verifiable,
                productive, or correctly allocated.
              </p>
            </div>

            {/* Optional Inputs */}
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="Manual Payroll Review (hrs/month)"
                optional
                type="number"
                value={payrollReview}
                onChange={(e) =>
                  setPayrollReview(Number(e.target.value))
                }
              />

              <Input
                label="Manager Review Time (hrs/month)"
                optional
                type="number"
                value={managerReview}
                onChange={(e) =>
                  setManagerReview(Number(e.target.value))
                }
              />

              <Input
                label="Billable Workforce %"
                optional
                type="number"
                value={billablePercent}
                onChange={(e) =>
                  setBillablePercent(Number(e.target.value))
                }
              />

              <Input
                label="Average Billable Rate"
                optional
                type="number"
                value={billableRate}
                onChange={(e) =>
                  setBillableRate(Number(e.target.value))
                }
              />
            </div>

            {/* Calculate */}
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("roi-result")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="h-11 w-full rounded-[10px] bg-teal-600 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700"
            >
              Calculate My ROI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* INPUT */
function Input({
  label,
  required,
  optional,
  type = "text",
  value,
  onChange,
  placeholder,
  helper,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  type?: string;
  value?: string | number;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  placeholder?: string;
  helper?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">
        {label}{" "}
        {required && (
          <span className="text-teal-600">*</span>
        )}

        {optional && (
          <span className="ml-1 text-xs font-normal text-gray-500 dark:text-slate-400">
            (optional)
          </span>
        )}
      </span>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-12 w-full rounded-[10px] border border-gray-300 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-gray-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
      />

      {helper && (
        <span className="mt-2 block text-xs leading-5 text-gray-500 dark:text-slate-400">
          {helper}
        </span>
      )}
    </label>
  );
}

/* SELECT */
function Select({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">
        {label}{" "}
        <span className="text-teal-600">*</span>
      </span>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full rounded-[10px] border border-gray-300 bg-white px-4 text-sm text-slate-800 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
      >
        {placeholder && (
          <option value="">{placeholder}</option>
        )}

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}