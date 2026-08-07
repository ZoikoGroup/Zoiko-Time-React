"use client";

import {
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const steps = [
  {
    step: "STEP 1",
    title: "Consent",
    description:
      "The customer explicitly agrees to what will be shared and published.",
  },
  {
    step: "STEP 2",
    title: "Source Review",
    description:
      "Every metric is checked against the customer's own source data.",
  },
  {
    step: "STEP 3",
    title: "Evidence Labeling",
    description:
      "Claims are scoped and labeled to match exactly what was verified.",
  },
  {
    step: "STEP 4",
    title: "Approval & Publish",
    description:
      "A named reviewer signs off before the story goes live, date-stamped.",
  },
];

const dontDo = [
  "Fabricate a customer, logo, or metric",
  "Publish a testimonial without consent",
  "Round or embellish a verified metric",
  "Skip the approval workflow to move faster",
];

export default function EvidenceMethodology() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
              Evidence Methodology
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-4xl">
            How a story gets from customer
            <br className="hidden sm:block" />
            to published page.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="contents"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                  {item.step}
                </p>

                <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>

              {index !== steps.length - 1 && (
                <div className="hidden items-center justify-center lg:flex">
                  <FiArrowRight className="h-6 w-6 text-slate-300 dark:text-slate-700" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Card */}
        <div className="mt-14 rounded-3xl bg-slate-800 p-8 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-white">
            What we never do with a customer story
          </h3>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {dontDo.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <FiCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-300" />

                <p className="text-sm leading-6 text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}