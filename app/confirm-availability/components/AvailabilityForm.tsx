"use client";

import { FormEvent, useState } from "react";

const steps = [
  "Define scope",
  "Verify current readiness",
  "Review result",
];

const dimensions = [
  "Technical readiness",
  "Contractual fit",
  "Legal / Privacy review status",
  "Documentation",
  "Monitoring / Operations",
  "Support eligibility",
  "Commercial terms",
  "Data location / transfer",
];

const resultDimensions = [
  {
    name: "Technical",
    status: "Ready",
    type: "ready",
  },
  {
    name: "Contractual",
    status: "Needs review",
    type: "review",
  },
  {
    name: "Legal / Privacy",
    status: "Reviewed",
    type: "ready",
  },
  {
    name: "Documentation",
    status: "Current",
    type: "ready",
  },
  {
    name: "Monitoring / Ops",
    status: "Ready",
    type: "ready",
  },
  {
    name: "Support",
    status: "Eligible",
    type: "ready",
  },
  {
    name: "Commercial",
    status: "Needs review",
    type: "review",
  },
  {
    name: "Data location",
    status: "Confirmed",
    type: "ready",
  },
];

const initialFormData = {
  geography: "North America",
  relationship: "New deployment",
  workforce: "1,000–5,000",
  product: "Time Tracking & Attendance",
  dataRequirement: "Regional data handling preference",
  support: "Prefer not to say",
  timing: "Active expansion",
  customer: "yes",
};

type FormData = typeof initialFormData;

export default function AvailabilityForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Availability scope:", formData);

    setStep(2);
  };

  const handleVerificationComplete = () => {
    setStep(3);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setStep(1);
  };

  return (
    <section className="w-full bg-green-50 px-5 py-12 transition-colors sm:px-7 sm:py-16 lg:px-10 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1016px]">
        {/* STEP 1 */}
        {step === 1 && (
          <ScopeStep
            formData={formData}
            updateField={updateField}
            handleSubmit={handleSubmit}
          />
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <VerificationStep onComplete={handleVerificationComplete} />
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <ResultStep
            formData={formData}
            onReset={handleReset}
          />
        )}
      </div>
    </section>
  );
}

/* =========================================================
   SHARED HEADER
========================================================= */

function StepHeader({ currentStep }: { currentStep: number }) {
  return (
    <>
      <div className="px-6 pt-7 sm:px-8">
        <h2 className="text-2xl font-bold leading-10 text-slate-900 dark:text-white">
          Confirm availability for your intended deployment scope
        </h2>

        <p className="mt-2 max-w-[640px] text-xs leading-5 text-gray-500 dark:text-slate-400">
          This check confirms current public availability for the scope you
          describe. It does not confirm legal compliance, a contract,
          pricing, or a launch date.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 px-6 sm:grid-cols-3 sm:px-8">
        {steps.map((label, index) => {
          const number = index + 1;
          const active = currentStep === number;
          const completed = currentStep > number;

          return (
            <div
              key={label}
              className={`flex items-center gap-2.5 border-b-[1.6px] pb-5 pt-2 ${
                active || completed
                  ? "border-emerald-600"
                  : "border-slate-200 dark:border-slate-700"
              }`}
            >
              <div
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                  active || completed
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-slate-400 bg-white text-gray-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400"
                }`}
              >
                {number}
              </div>

              <span
                className={`text-xs font-semibold ${
                  active || completed
                    ? "text-slate-900 dark:text-white"
                    : "text-gray-500 dark:text-slate-400"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

/* =========================================================
   STEP 1 — DEFINE SCOPE
========================================================= */

type ScopeStepProps = {
  formData: FormData;
  updateField: (field: keyof FormData, value: string) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

function ScopeStep({
  formData,
  updateField,
  handleSubmit,
}: ScopeStepProps) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white pb-8 shadow-[0px_22px_46px_-26px_rgba(10,22,40,0.26)] transition-colors dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
      <StepHeader currentStep={1} />

      <form
        onSubmit={handleSubmit}
        className="px-6 pt-8 sm:px-8 lg:px-10"
      >
        <div className="grid grid-cols-1 gap-6">
          <Field
            label="Operating geography"
            value={formData.geography}
            onChange={(value) =>
              updateField("geography", value)
            }
            options={[
              "North America",
              "Europe",
              "Asia Pacific",
              "Middle East",
              "Latin America",
              "Global",
            ]}
          />

          <Field
            label="Deployment relationship"
            value={formData.relationship}
            onChange={(value) =>
              updateField("relationship", value)
            }
            options={[
              "New deployment",
              "Existing deployment",
              "Expansion",
              "Migration",
            ]}
          />

          <Field
            label="Workforce band"
            optional
            value={formData.workforce}
            onChange={(value) =>
              updateField("workforce", value)
            }
            options={[
              "Under 100",
              "100–1,000",
              "1,000–5,000",
              "5,000–10,000",
              "10,000+",
            ]}
          />

          <Field
            label="Product scope"
            value={formData.product}
            onChange={(value) =>
              updateField("product", value)
            }
            options={[
              "Time Tracking & Attendance",
              "Workforce Intelligence",
              "Analytics & Reporting",
              "Enterprise Workforce Platform",
            ]}
          />

          <Field
            label="Deployment / data requirement"
            value={formData.dataRequirement}
            onChange={(value) =>
              updateField("dataRequirement", value)
            }
            options={[
              "Regional data handling preference",
              "No specific requirement",
              "Specific regional residency requirement",
            ]}
          />

          <Field
            label="Support requirement"
            optional
            value={formData.support}
            onChange={(value) =>
              updateField("support", value)
            }
            options={[
              "Prefer not to say",
              "Standard support",
              "Enterprise support",
            ]}
          />

          <Field
            label="Timing"
            value={formData.timing}
            onChange={(value) =>
              updateField("timing", value)
            }
            options={[
              "Active expansion",
              "Planning",
              "Evaluating",
              "Immediate deployment",
            ]}
          />

          {/* Customer */}
          <div className="pb-2">
            <label className="mb-2 block text-xs font-semibold leading-5 text-slate-900 dark:text-white">
              Existing ZoikoTime customer?
            </label>

            <div className="flex flex-wrap gap-5">
              {[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "not-sure", label: "Not sure" },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex cursor-pointer items-center gap-2 text-xs font-medium text-slate-900 dark:text-slate-200"
                >
                  <input
                    type="radio"
                    name="customer"
                    value={option.value}
                    checked={
                      formData.customer === option.value
                    }
                    onChange={(event) =>
                      updateField(
                        "customer",
                        event.target.value
                      )
                    }
                    className="h-4 w-4 accent-emerald-600"
                  />

                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="mt-6 flex items-start gap-3 rounded-lg border-l-2 border-emerald-600 bg-green-50 px-4 py-3.5 dark:bg-emerald-950/30">
          <span
            className="text-base leading-7"
            aria-hidden="true"
          >
            🔒
          </span>

          <p className="text-xs leading-5 text-slate-900 dark:text-slate-200">
            We only collect the scope needed to check availability.
            We never collect worker names or records, credentials,
            internal system IDs, confidential contracts, security
            findings, health details, or legal strategy.
          </p>
        </div>

        {/* Button */}
        <div className="mt-5 flex justify-end">
          <button
            type="submit"
            className="w-full rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:w-auto"
          >
            Check current availability →
          </button>
        </div>
      </form>
    </div>
  );
}

/* =========================================================
   STEP 2 — VERIFY CURRENT READINESS
========================================================= */

function VerificationStep({
  onComplete,
}: {
  onComplete: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white pb-8 shadow-[0px_22px_46px_-26px_rgba(10,22,40,0.26)] transition-colors dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
      <StepHeader currentStep={2} />

      <div className="px-6 pt-8 sm:px-8 lg:px-10">
        <div className="text-sm font-medium leading-6 text-slate-900 dark:text-white">
          Checking current readiness across eight dimensions…
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
          {dimensions.map((dimension, index) => (
            <div
              key={dimension}
              className={`flex min-h-[56px] items-center justify-between gap-4 px-4 ${
                index !== 0
                  ? "border-t border-slate-200 dark:border-slate-700"
                  : ""
              }`}
            >
              <span className="text-sm font-medium leading-6 text-slate-900 dark:text-slate-200">
                {dimension}
              </span>

              <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold leading-5 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                Checked
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-slate-400 dark:text-slate-500">
          Checked against current authorized registries — this is not
          a location-based guess.
        </p>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onComplete}
            className="w-full rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:w-auto"
          >
            Review result →
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   STEP 3 — REVIEW RESULT
========================================================= */

type ResultStepProps = {
  formData: FormData;
  onReset: () => void;
};

function ResultStep({
  formData,
  onReset,
}: ResultStepProps) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0px_22px_46px_-26px_rgba(10,22,40,0.26)] transition-colors dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
      <StepHeader currentStep={3} />

      <div className="px-6 pb-10 pt-8 sm:px-8 lg:px-10">
        {/* Result Summary */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
          <div className="p-6">
            <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-bold leading-5 text-blue-900 dark:bg-sky-950/60 dark:text-sky-300">
              Qualification required
            </span>

            <p className="mt-4 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
              {formData.product} · {formData.geography} ·{" "}
              {formData.relationship}
            </p>

            <h3 className="mt-2 text-lg font-bold leading-8 text-slate-900 dark:text-white">
              Some dimensions need customer-specific review
            </h3>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-1 gap-5 border-t border-slate-200 bg-green-50 p-6 sm:grid-cols-2 lg:grid-cols-4 dark:border-slate-700 dark:bg-emerald-950/30">
            <MetaItem
              label="Reviewed / as of"
              value="Aug 10, 2026"
            />

            <MetaItem
              label="Authority owner"
              value="Enterprise Deployment Registry"
            />

            <MetaItem
              label="Scope match"
              value="Direct match"
            />

            <MetaItem
              label="Freshness"
              value="Verified today"
            />
          </div>

          {/* Explanation */}
          <div className="border-t border-slate-200 p-6 dark:border-slate-700">
            <p className="text-sm leading-5 text-slate-900 dark:text-slate-200">
              Technical, documentation, monitoring, and data-location
              dimensions are currently ready for this scope. Contractual
              and commercial terms require a customer-specific review
              before this deployment can proceed.
            </p>
          </div>

          {/* Limitations */}
          <div className="border-t border-slate-200 px-6 py-4 dark:border-slate-700">
            <p className="text-xs leading-5 text-gray-500 dark:text-slate-400">
              Limitations: this result reflects current public
              availability only and may change. It is not a guarantee
              of future availability.
            </p>
          </div>
        </div>

        {/* Dimension Matrix */}
        <div className="mt-8">
          <h3 className="text-xs font-bold uppercase leading-5 tracking-wide text-gray-500 dark:text-slate-400">
            Dimension Matrix
          </h3>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {resultDimensions.map((item) => (
              <div
                key={item.name}
                className="rounded-[10px] border border-slate-200 p-4 transition-colors dark:border-slate-700"
              >
                <div className="text-xs font-semibold leading-5 text-slate-900 dark:text-white">
                  {item.name}
                </div>

                <span
                  className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-bold leading-5 ${
                    item.type === "review"
                      ? "bg-sky-100 text-blue-900 dark:bg-sky-950/60 dark:text-sky-300"
                      : "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Limitations */}
        <div className="mt-6 rounded-[10px] bg-gray-100 px-4 py-4 dark:bg-slate-800">
          <p className="text-xs leading-5 text-slate-900 dark:text-slate-200">
            <strong>This result does not prove:</strong>{" "}
            legal compliance, contractual entitlement, data residency
            guarantees, a support SLA, implementation timing, or
            future availability.
          </p>
        </div>

        {/* Next Step */}
        <div className="mt-8">
          <p className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
            Next step
          </p>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="/request-enterprise-demo"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-600 px-7 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Request Enterprise Demo
            </a>

            <a
              href="/procurement-and-legal-resources"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              Enterprise Procurement &amp; Legal
            </a>

            <a
              href="/trust-governance"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              Trust &amp; Privacy
            </a>
          </div>

          {/* Reset */}
          <button
            type="button"
            onClick={onReset}
            className="mt-6 text-sm font-semibold text-emerald-700 transition hover:underline dark:text-emerald-400"
          >
            Check a different scope
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FIELD
========================================================= */

type FieldProps = {
  label: string;
  optional?: boolean;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function Field({
  label,
  optional = false,
  value,
  options,
  onChange,
}: FieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold leading-5 text-slate-900 dark:text-white">
        {label}{" "}
        {optional && (
          <span className="font-normal text-slate-400 dark:text-slate-500">
            (optional)
          </span>
        )}
      </label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full appearance-none rounded-[10px] border border-slate-200 bg-white px-4 py-2.5 text-sm leading-5 text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:[color-scheme:dark]"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

/* =========================================================
   META ITEM
========================================================= */

function MetaItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="text-[10px] font-bold uppercase leading-4 text-slate-400 dark:text-slate-500">
        {label}
      </div>

      <div className="mt-1 text-xs font-semibold leading-5 text-slate-900 dark:text-white">
        {value}
      </div>
    </div>
  );
}