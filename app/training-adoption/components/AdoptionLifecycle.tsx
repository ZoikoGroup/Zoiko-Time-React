import Image from "next/image";

const steps = [
  {
    title: "Assess",
    body: "Map roles, current skills, and adoption goals across the organization.",
  },
  {
    title: "Plan",
    body: "Build role-based learning plans with owners, timelines, and success measures.",
  },
  {
    title: "Enroll",
    body: "Assign learners by role, team, and readiness — with clear expectations.",
  },
  {
    title: "Learn",
    body: "Deliver guided courses, live sessions, and on-demand content.",
  },
  {
    title: "Practice",
    body: "Apply skills in a safe sandbox with realistic, synthetic data.",
  },
  {
    title: "Assess",
    body: "Check understanding with role-appropriate assessments and scenarios.",
  },
  {
    title: "Certify",
    body: "Recognize completion and readiness with shareable certificates.",
  },
  {
    title: "Launch",
    body: "Go live with confidence — supported by playbooks and office hours.",
  },
  {
    title: "Reinforce",
    body: "Sustain adoption with nudges, refreshers, and just-in-time help.",
  },
  {
    title: "Measure",
    body: "Review adoption analytics and iterate on the program over time.",
  },
];

export default function AdoptionLifecycle() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        {/* Feature banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800 to-teal-700 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)]">
          <Image
            src="/training-adoption/assessment.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1180px) 100vw, 1132px"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-slate-900/75 to-slate-900/30"
            aria-hidden="true"
          />

          <div className="relative px-6 py-10 sm:px-10">
            <p className="max-w-[520px] text-xl font-bold leading-7 text-white">
              From assessment to measurable adoption.
            </p>
            <p className="mt-2 max-w-[560px] text-sm font-normal leading-5 text-white/90">
              A structured lifecycle that turns training into outcomes — not
              just attendance.
            </p>
          </div>
        </div>

        {/* Section header */}
        <div className="mt-16 text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            The Lifecycle
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            A ten-step Training &amp; Adoption lifecycle
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Assess → plan → enroll → learn → practice → assess → certify →
            launch → reinforce → measure.
          </p>
        </div>

        {/* Steps */}
        <ol className="mx-auto mt-12 max-w-[960px]">
          {steps.map((step, index) => (
            <li key={`${step.title}-${index}`} className="relative flex gap-5">
              {/* Number + connector rail */}
              <div className="flex flex-col items-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-teal-700 text-base font-bold leading-6 text-white shadow-[0px_7px_14px_0px_rgba(16,162,141,0.30)]">
                  {index + 1}
                </span>

                {index < steps.length - 1 && (
                  <span
                    className="w-0.5 flex-1 bg-emerald-100 dark:bg-slate-700"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div
                className={`flex-1 rounded-xl border border-slate-200 bg-white p-5 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900 ${
                  index < steps.length - 1 ? "mb-4" : ""
                }`}
              >
                <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
