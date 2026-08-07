"use client";

import {
  FiCheckCircle,
  FiEye,
  FiShield,
  FiFileText,
  FiCheck,
} from "react-icons/fi";

const standards = [
  {
    icon: FiCheckCircle,
    color: "text-teal-600",
    title: "Source-verified data",
    description:
      "Speaker identities and event details are confirmed before publishing.",
  },
  {
    icon: FiEye,
    color: "text-blue-600",
    title: "Accessibility by default",
    description:
      "Captions, transcripts, and ASL on request for every live session.",
  },
  {
    icon: FiShield,
    color: "text-amber-600",
    title: "Transparent consent",
    description:
      "Registration is explicit about what data is collected and why.",
  },
  {
    icon: FiFileText,
    color: "text-slate-900 dark:text-slate-200",
    title: "Editorial separation",
    description:
      "Marketing content is kept distinct from operational communications.",
  },
];

const neverDo = [
  "Fabricate speakers or credentials",
  "Inflate attendance or scarcity",
  "Claim certifications we didn't earn",
  "Publish recordings without consent",
  "Misstate an event's status",
  "Promise outcomes attendance can't guarantee",
];

export default function MethodologyStandards() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
              Methodology &amp; Standards
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            How this page earns trust.
          </h2>
        </div>

        {/* Top Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {standards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                  <Icon className={`h-5 w-5 ${item.color}`} />
                </div>

                <h3 className="mt-6 text-base font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 rounded-3xl bg-slate-900 p-8 md:p-10 dark:bg-slate-800">
          <h3 className="text-xl font-semibold text-white">
            What we never do on this page
          </h3>

          <div className="mt-8 grid gap-x-10 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
            {neverDo.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/20">
                  <FiCheck className="h-3.5 w-3.5 text-teal-300" />
                </div>

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