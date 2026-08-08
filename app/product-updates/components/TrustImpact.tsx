import type { ReactNode } from "react";
import { Eyebrow } from "./Pills";
import { LockIcon, CheckCircleIcon, ClockIcon, LinesIcon } from "./Icons";

const impacts: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <LockIcon size={16} className="text-blue-950" />,
    title: "Privacy & data handling",
    body: "Purpose, retention, and access scope stated explicitly for any change touching stored data.",
  },
  {
    icon: <CheckCircleIcon size={16} className="text-teal-600" />,
    title: "Worker-visible experience",
    body: "What changes for a worker's own record, and how they can request a correction.",
  },
  {
    icon: <ClockIcon size={16} className="text-blue-600" />,
    title: "AI assistance boundaries",
    body: "What a feature can and cannot decide on its own, and where human review is required.",
  },
  {
    icon: <LinesIcon size={16} className="text-yellow-700" />,
    title: "Human-authority invariant",
    body: "Where automation stops and a named reviewer must decide, correct, or approve.",
  },
];

export default function TrustImpact() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <Eyebrow label="Trust, Privacy & Worker Impact" />

        <h2 className="mt-6 max-w-[600px] text-3xl font-semibold leading-tight text-slate-800 dark:text-white sm:text-4xl">
          Updates that touch data, access, or rights.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">

          {impacts.map((impact) => (
            <article
              key={impact.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >

              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 dark:bg-slate-950">
                {impact.icon}
              </span>

              <h3 className="mt-5 text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                {impact.title}
              </h3>

              <p className="mt-2 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                {impact.body}
              </p>

            </article>
          ))}

        </div>

        {/* Editorial Lock */}
        <div className="mt-8 rounded-3xl bg-slate-800 p-8 sm:p-10">

          <h3 className="text-base font-semibold leading-6 text-white">
            Anti-surveillance editorial lock
          </h3>

          <p className="mt-4 text-xs font-normal leading-6 text-slate-300">
            We don&apos;t present screenshots, keystrokes, application usage,
            continuous location, online time, meeting counts, response speed, or
            productivity scores as product progress. Any update affecting
            workforce data preserves purpose limitation, worker transparency,
            correction, role-based access, and human authority.
          </p>

        </div>

      </div>
    </section>
  );
}
