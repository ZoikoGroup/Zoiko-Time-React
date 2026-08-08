import { Eyebrow } from "./Pills";

const steps = [
  { number: "1", title: "Learn", body: "Plain-language summary" },
  { number: "2", title: "Review", body: "Prerequisites & impact" },
  { number: "3", title: "Configure", body: "Apply current settings" },
  { number: "4", title: "Communicate", body: "Notify affected teams" },
  { number: "5", title: "Test", body: "Verify in a safe scope" },
  { number: "6", title: "Verify", body: "Confirm in production" },
];

export default function AdoptionSteps() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <Eyebrow label="Adoption & Readiness" />

        <h2 className="mt-6 max-w-[520px] text-3xl font-semibold leading-tight text-slate-800 dark:text-white sm:text-4xl">
          From reading about a change to using it.
        </h2>

        <div className="mt-10 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">

          {steps.map((step, index) => (
            <div key={step.number} className="contents">

              {index > 0 && (
                <span
                  className="self-center text-sm text-gray-400"
                  aria-hidden="true"
                >
                  →
                </span>
              )}

              <article className="flex flex-1 flex-col items-center rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center dark:border-slate-800 dark:bg-slate-900">

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-teal-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                  {step.number}
                </span>

                <h3 className="mt-4 text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-1 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                  {step.body}
                </p>

              </article>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
