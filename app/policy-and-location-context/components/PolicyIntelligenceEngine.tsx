import React from "react";

const layers = [
  {
    id: "1",
    title: "Policy Library",
    subtitle: "Layer 1",
    description:
      "Global labor laws, organisational policies, and industry regulations indexed and versioned.",
    badge: "→ Policy Dataset",
    active: false,
  },
  {
    id: "2",
    title: "Context Engine",
    subtitle: "Layer 2",
    description:
      "Location, time, role, workforce type, and employment classification detected.",
    badge: "→ Context Profile",
    active: false,
  },
  {
    id: "3",
    title: "Policy Resolution",
    subtitle: "Layer 3",
    description:
      "Determines applicable policies, precedence order, and conflict resolution logic.",
    badge: "→ Binding Decision",
    active: true,
  },
  {
    id: "4",
    title: "Enforcement",
    subtitle: "Layer 4",
    description:
      "Applies the resolved rule in real time, preventing violations before they occur.",
    badge: "→ Compliant Action",
    active: false,
  },
  {
    id: "5",
    title: "Evidence Layer",
    subtitle: "Layer 5",
    description:
      "Logs every decision with a complete reasoning chain for audit and legal defence.",
    badge: "→ Audit Record",
    active: false,
  },
];

export default function PolicyIntelligenceEngine() {
  return (
    <section className="bg-slate-100 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-500">
            Policy Intelligence Engine
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
            The Policy Intelligence Engine
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400">
            Five layers work in sequence to move from raw context to a
            defensible, legally-compliant policy decision — in under 200ms.
          </p>
        </div>

        {/* Five Layers */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {/* Layer 1 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md transition dark:border-slate-700 dark:bg-slate-900">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-teal-500 bg-teal-500/10 text-base font-bold text-teal-500">
              1
            </div>

            <p className="mt-6 text-center text-xs font-bold uppercase tracking-wider text-slate-400">
              Layer 1
            </p>

            <h3 className="mt-3 text-center text-lg font-bold text-slate-900 dark:text-white">
              Policy Library
            </h3>

            <p className="mt-4 text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
              Global labor laws, organisational policies, and industry
              regulations indexed and versioned.
            </p>

            <div className="mt-6 flex justify-center">
              <span className="rounded-full bg-teal-500/10 px-4 py-2 text-xs font-bold text-teal-500">
                → Policy Dataset
              </span>
            </div>
          </div>

          {/* Layer 2 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md transition dark:border-slate-700 dark:bg-slate-900">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-teal-500 bg-teal-500/10 text-base font-bold text-teal-500">
              2
            </div>

            <p className="mt-6 text-center text-xs font-bold uppercase tracking-wider text-slate-400">
              Layer 2
            </p>

            <h3 className="mt-3 text-center text-lg font-bold text-slate-900 dark:text-white">
              Context Engine
            </h3>

            <p className="mt-4 text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
              Location, time, role, workforce type, and employment
              classification detected.
            </p>

            <div className="mt-6 flex justify-center">
              <span className="rounded-full bg-teal-500/10 px-4 py-2 text-xs font-bold text-teal-500">
                → Context Profile
              </span>
            </div>
          </div>

                    {/* Layer 3 */}
          <div className="rounded-xl border border-teal-500/30 bg-gradient-to-b from-teal-500/10 to-transparent p-6 shadow-lg">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-base font-bold text-white">
              3
            </div>

            <p className="mt-6 text-center text-xs font-bold uppercase tracking-wider text-teal-500">
              Layer 3
            </p>

            <h3 className="mt-3 text-center text-lg font-bold text-slate-900 dark:text-white">
              Policy Resolution
            </h3>

            <p className="mt-4 text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
              Determines applicable policies, precedence order, and conflict
              resolution logic.
            </p>

            <div className="mt-6 flex justify-center">
              <span className="rounded-full bg-teal-500/10 px-4 py-2 text-xs font-bold text-teal-500">
                → Binding Decision
              </span>
            </div>
          </div>

          {/* Layer 4 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md transition dark:border-slate-700 dark:bg-slate-900">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-teal-500 bg-teal-500/10 text-base font-bold text-teal-500">
              4
            </div>

            <p className="mt-6 text-center text-xs font-bold uppercase tracking-wider text-slate-400">
              Layer 4
            </p>

            <h3 className="mt-3 text-center text-lg font-bold text-slate-900 dark:text-white">
              Enforcement
            </h3>

            <p className="mt-4 text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
              Applies the resolved rule in real time and prevents violations
              before they occur.
            </p>

            <div className="mt-6 flex justify-center">
              <span className="rounded-full bg-teal-500/10 px-4 py-2 text-xs font-bold text-teal-500">
                → Compliant Action
              </span>
            </div>
          </div>

          {/* Layer 5 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md transition dark:border-slate-700 dark:bg-slate-900">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-teal-500 bg-teal-500/10 text-base font-bold text-teal-500">
              5
            </div>

            <p className="mt-6 text-center text-xs font-bold uppercase tracking-wider text-slate-400">
              Layer 5
            </p>

            <h3 className="mt-3 text-center text-lg font-bold text-slate-900 dark:text-white">
              Evidence Layer
            </h3>

            <p className="mt-4 text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
              Logs every decision with a complete reasoning chain for audit and
              legal defence.
            </p>

            <div className="mt-6 flex justify-center">
              <span className="rounded-full bg-teal-500/10 px-4 py-2 text-xs font-bold text-teal-500">
                → Audit Record
              </span>
            </div>
          </div>
        </div>

        {/* Resolution Example */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            {/* Company Policy */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Company Policy
              </p>

              <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                Flexible Hours Agreement
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Internal policy allows flexible scheduling without strict
                overtime thresholds for salaried employees.
              </p>

              <span className="mt-6 inline-block rounded-full bg-amber-100 px-4 py-2 text-xs font-bold text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
                Lower precedence
              </span>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-5xl text-teal-500">→</div>

              <p className="mt-3 text-center text-xs font-bold leading-5 text-slate-500 dark:text-slate-400">
                System selects
                <br />
                legally binding rule
              </p>
            </div>

                        {/* Resolution Result */}
            <div className="rounded-xl border border-teal-500/25 bg-gradient-to-br from-teal-500/10 to-teal-500/5 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-500">
                Resolution: UK Law Takes Precedence
              </p>

              <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                Working Time Regulations 1998
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
                48-hour weekly maximum enforced. Overtime rule overrides the
                company flexible-hours policy. The decision is logged with a
                complete reasoning chain for future audits and legal defence.
              </p>

              <span className="mt-6 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-xs font-bold text-green-700 dark:bg-green-900/20 dark:text-green-400">
                ✓ Legal compliance maintained
              </span>
            </div>
          </div>
        </div>

              </div>
    </section>
  );
}