import Link from "next/link";

const groups = [
  {
    title: "Visible to a worker",
    items: [
      "Applicable policy context and version",
      "Source of the record and its status",
      "Material corrections affecting them",
      "Available challenge and escalation paths",
    ],
  },
  {
    title: "Governed communication",
    items: [
      "Material changes to collection",
      "Changes to classification",
      "Changes to review or approval",
      "Changes to worker visibility",
    ],
  },
];

export default function WorkerTransparencyAuthority() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">

          {/* Worker Transparency */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Worker Transparency &amp; Human Authority
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              Administrative Power Does Not Cancel a Worker Right
            </h2>

            <p className="mt-4 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Configuration decides how records are made. It does not decide
              whether the person described by a record can see it, question it, or
              have a human review it.
            </p>

            {/* Visibility & Communication */}
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {groups.map((group) => (
                <div
                  key={group.title}
                  className="flex flex-col rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 dark:border-emerald-900/40 dark:bg-emerald-950/10"
                >

                  <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                    {group.title}
                  </h3>

                  <ul className="mt-4 flex flex-col gap-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2.5">

                        <span
                          className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-full bg-emerald-400"
                          aria-hidden="true"
                        />

                        <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                          {item}
                        </span>

                      </li>
                    ))}
                  </ul>

                </div>
              ))}

            </div>

            <p className="mt-6 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
              Visibility is role- and policy-bound and never exposes another
              worker&apos;s data. Consultation obligations remain your
              organization&apos;s — this page describes the product&apos;s
              communication mechanisms, not your legal duties.
            </p>

          </div>

          {/* Human Authority */}
          <div className="flex flex-col gap-5">

            <div className="rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                Consequential outcomes stay human
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-700 dark:text-red-200/80">
                Automated configuration may route or classify under policy, but
                payroll, discipline, employment, legal, and worker-rights outcomes
                require authorized human review outside automatic classification.
                Deterministic time classification is policy-bound and reviewable —
                and is not presented as AI.
              </p>

            </div>

            <div className="rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-8 dark:border-slate-800 dark:bg-slate-900">

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                What Kairos cannot do here
              </h3>

              <p className="mt-3 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                Kairos may retrieve, summarize, and explain governed configuration
                data where approved. It cannot propose an approval, activate a
                change, alter a policy version, or hold administrative authority of
                any kind.
              </p>

              <Link
                href="/human-in-command"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold leading-6 text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
              >
                Human-in-Command Controls <span aria-hidden="true">→</span>
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
