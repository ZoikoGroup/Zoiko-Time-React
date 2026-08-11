import Link from "next/link";

const categories = [
  "Model or system card",
  "Evaluation summary",
  "Provider & data-handling",
  "Governance documentation",
  "Fairness & impact analysis",
  "Security & abuse testing",
];

const scopeFields: {
  id: string;
  label: string;
  control: "input" | "select";
  type?: string;
}[] = [
  { id: "work-email", label: "Work email", control: "input", type: "email" },
  { id: "organization", label: "Organization", control: "input", type: "text" },
  { id: "role", label: "Role or function", control: "select" },
  {
    id: "use-case",
    label: "Use case of interest",
    control: "input",
    type: "text",
  },
  { id: "evaluation-stage", label: "Evaluation stage", control: "select" },
];

function GovernanceStepLabel({
  step,
  title,
}: {
  step: string;
  title: string;
}) {
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

export default function RequestGovernanceReview() {
  return (
    <section
      id="request-governance-review"
      className="w-full scroll-mt-24 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Controlled AI Governance Review
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Request Non-Public Governance Evidence
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Model or system cards, evaluation summaries, provider information, and
            governance documentation, at a depth appropriate to your role and
            purpose.
          </p>

        </div>

        {/* Form */}
        <form className="mt-10 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900">

          {/* Step 1 */}
          <fieldset>

            <legend className="contents">
              <GovernanceStepLabel
                step="Step 1"
                title="What are you evaluating?"
              />
            </legend>

            <div className="mt-4 flex flex-wrap gap-3">
              {categories.map((category) => (
                <label
                  key={category}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-normal leading-5 text-zinc-700 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-500"
                >

                  <input
                    type="radio"
                    name="governance-category"
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

            <GovernanceStepLabel step="Step 2" title="Scope" />

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {scopeFields.map((field) => (
                <div key={field.id} className="flex flex-col gap-2">

                  <label
                    htmlFor={field.id}
                    className="text-sm font-normal leading-5 text-sky-950 dark:text-white"
                  >
                    {field.label}
                  </label>

                  {field.control === "select" ? (
                    <select
                      id={field.id}
                      name={field.id}
                      defaultValue=""
                      className="h-12 rounded-lg border border-stone-200 bg-white px-3.5 text-sm text-sky-950 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                    >
                      <option value="">Select one</option>
                    </select>
                  ) : (
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      className="h-12 rounded-lg border border-stone-200 bg-white px-3.5 text-sm text-sky-950 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                    />
                  )}

                </div>
              ))}

            </div>

          </div>

          {/* Step 3 */}
          <div className="mt-8">

            <GovernanceStepLabel
              step="Step 3"
              title="Optional message and consent"
            />

            <div className="mt-4 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                Do not include
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-700 dark:text-red-200/80">
                Credentials, worker-level records, prompts containing customer
                data, health information, union or representative details, legal
                strategy, or security-sensitive findings.
              </p>

            </div>

            <div className="mt-5 flex flex-col gap-2">

              <label
                htmlFor="governance-scope-message"
                className="text-sm font-normal leading-5 text-sky-950 dark:text-white"
              >
                Anything that helps us scope this correctly
              </label>

              <input
                id="governance-scope-message"
                name="governance-scope-message"
                type="text"
                className="h-12 rounded-lg border border-stone-200 bg-white px-3.5 text-sm text-sky-950 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />

            </div>

            {/* Consent */}
            <label className="mt-5 flex cursor-pointer gap-3 rounded-xl border border-emerald-100 bg-emerald-50/40 px-4 py-3.5 dark:border-emerald-900/40 dark:bg-emerald-950/10">

              <input
                type="checkbox"
                name="governance-privacy-consent"
                className="mt-1 h-3.5 w-3.5 shrink-0 accent-emerald-500"
              />

              <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                I have read the{" "}
                <Link
                  href="/privacy-notice"
                  className="font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
                >
                  privacy notice
                </Link>{" "}
                explaining what is collected for this request and how long it is
                kept.
              </span>

            </label>

            <label className="mt-3.5 flex cursor-pointer gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3.5 dark:border-slate-700 dark:bg-slate-900">

              <input
                type="checkbox"
                name="governance-product-news"
                className="mt-1 h-3.5 w-3.5 shrink-0 accent-emerald-500"
              />

              <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">

                <span className="font-bold text-sky-950 dark:text-white">
                  Optional and unrelated:
                </span>{" "}
                send me ZoikoTime product news. This is not required, and leaving
                it unchecked changes nothing about your request.

              </span>

            </label>

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
              href="#capability-register"
              className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
            >
              Read the public register instead
            </Link>

          </div>

          <p className="mt-5 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
            You receive a reference ID. No response time is promised, because none
            is approved for this route.
          </p>

        </form>

      </div>
    </section>
  );
}
