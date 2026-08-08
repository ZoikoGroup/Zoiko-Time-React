import Link from "next/link";

const categories = [
  "Availability & measurement",
  "Recovery & continuity",
  "Integrity & reconciliation",
  "Change safety",
  "Dependencies & providers",
];

const textFields = [
  { id: "work-email", label: "Work email", type: "email" },
  { id: "organization", label: "Organization", type: "text" },
  { id: "role", label: "Role or function", type: "text" },
];

function StepLabel({ step, title }: { step: string; title: string }) {
  return (
    <>
      <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
        {step}
      </p>

      <h3 className="mt-1 text-base font-bold leading-6 text-sky-950 dark:text-white">
        {title}
      </h3>
    </>
  );
}

export default function RequestReliabilityReview() {
  return (
    <section
      id="request-reliability-review"
      className="w-full scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Controlled Access
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Request Reliability Review
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            For recovery test results, integrity controls, and measured results
            where they exist. Access is determined by identity, purpose, and
            entitlement.
          </p>

        </div>

        {/* Form */}
        <form className="mt-10 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900">

          {/* Step 1 */}
          <fieldset>

            <legend className="contents">
              <StepLabel step="Step 1" title="Evidence category" />
            </legend>

            <div className="mt-4 flex flex-wrap gap-3">
              {categories.map((category) => (
                <label
                  key={category}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-normal leading-5 text-zinc-700 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-500"
                >

                  <input
                    type="radio"
                    name="evidence-category"
                    value={category}
                    className="h-3.5 w-3.5 shrink-0 accent-emerald-500"
                  />

                  {category}

                </label>
              ))}
            </div>

          </fieldset>

          {/* Step 2 */}
          <div className="mt-8">

            <StepLabel step="Step 2" title="Minimum details" />

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {textFields.map((field) => (
                <div key={field.id} className="flex flex-col gap-2">

                  <label
                    htmlFor={field.id}
                    className="text-sm font-normal leading-5 text-sky-950 dark:text-white"
                  >
                    {field.label}
                  </label>

                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    className="h-12 rounded-lg border border-stone-200 bg-white px-3.5 text-sm text-sky-950 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />

                </div>
              ))}

              <div className="flex flex-col gap-2">

                <label
                  htmlFor="evaluation-stage"
                  className="text-sm font-normal leading-5 text-sky-950 dark:text-white"
                >
                  Evaluation stage
                </label>

                <select
                  id="evaluation-stage"
                  name="evaluation-stage"
                  defaultValue=""
                  className="h-12 rounded-lg border border-stone-200 bg-white px-3.5 text-sm text-sky-950 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                >
                  <option value="">Select one</option>
                </select>

              </div>

            </div>

          </div>

          {/* Step 3 */}
          <div className="mt-8">

            <StepLabel step="Step 3" title="Submit" />

            <div className="mt-4 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                Do not include
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-800 dark:text-red-200/80">
                Credentials, worker records, customer data, security-sensitive
                detail, or exploit information. If you are reporting a
                vulnerability, use the{" "}
                <Link
                  href="/security-overview"
                  className="font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
                >
                  security reporting route
                </Link>{" "}
                instead.
              </p>

            </div>

          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-col gap-3.5 sm:flex-row">

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-600"
            >
              Submit request
            </button>

            <Link
              href="/system-status"
              className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
            >
              Check current status instead
            </Link>

          </div>

          <p className="mt-5 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
            No response time is promised — no SLA is approved for this route.
            Nothing you enter appears in the page address or in analytics.
          </p>

        </form>

      </div>
    </section>
  );
}
