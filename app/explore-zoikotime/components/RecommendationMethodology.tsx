import Image from "next/image";

import SectionHeading from "./SectionHeading";

const steps = [
  {
    step: "Step 1",
    title: "You choose",
    description:
      "Goal, role, environment, or evaluation stage — all optional and editable.",
  },
  {
    step: "Step 2",
    title: "Rules match",
    description:
      "Visible, versioned routing rules match your choices to approved capabilities.",
  },
  {
    step: "Step 3",
    title: "Path explained",
    description: "You see why it fits, what it covers, and what it doesn't.",
  },
  {
    step: "Step 4",
    title: "You decide",
    description:
      "Open the route, compare alternatives, or view the full directory.",
  },
];

const boundaries = [
  "No confidence score, fit percentage, or popularity rank",
  "No inference of company, location, seniority, or budget",
  "No hidden personalization or “AI chose this” language",
  "No screenshots, keystroke content, or clipboard collection",
  "No legal, compliance, or payroll determination",
  "No lead form required before results",
];

export default function RecommendationMethodology() {
  return (
    <section className="bg-gray-50 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Recommendation Methodology"
          title="How a path gets from your choices to a route."
        />

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-0">
          {steps.map((item, index) => (
            <div key={item.step} className="contents">
              {index > 0 && (
                <div className="hidden items-center justify-center px-4 lg:flex">
                  <Image
                    src="/explore-zoikotime/arrow-mark.svg"
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                  />
                </div>
              )}

              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                <p className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
                  {item.step}
                </p>

                <h3 className="mt-3 text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-5 text-gray-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Boundaries */}
        <div className="mt-12 rounded-3xl bg-slate-800 px-8 py-9 dark:bg-slate-950 lg:px-9">
          <h3 className="text-base font-semibold leading-6 text-white">
            What Explore ZoikoTime never does
          </h3>

          <p className="mt-3 max-w-[640px] text-sm leading-5 text-indigo-300">
            Being clear about this page&apos;s boundaries is part of how we earn
            trust with every audience who uses it.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-x-10 gap-y-2.5 md:grid-cols-2">
            {boundaries.map((boundary) => (
              <li key={boundary} className="flex items-start gap-2.5">
                <Image
                  src="/explore-zoikotime/cross-mark.svg"
                  alt=""
                  width={14}
                  height={14}
                  aria-hidden="true"
                  className="mt-1"
                />

                <span className="text-xs leading-5 text-slate-300">
                  {boundary}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
