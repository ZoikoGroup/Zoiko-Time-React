const stages = [
  {
    glyph: "+",
    title: "Joiner",
    description:
      "Provision accounts and least-privilege roles from the worker master.",
  },
  {
    glyph: "→",
    title: "Mover",
    description:
      "Adjust roles and scope automatically when a role, team, or location changes.",
  },
  {
    glyph: "←",
    title: "Leaver",
    description:
      "Revoke access on offboarding, with a recorded, reviewable deprovisioning trail.",
  },
];

export default function IdentityLifecycle() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Identity Lifecycle
          </p>

          <h2 className="text-center text-3xl font-bold leading-[1.11] text-[#0E1F3D] dark:text-white sm:text-4xl">
            Access that keeps up with every change
          </h2>

          <p className="max-w-[620px] text-center text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
            From first day to last, entitlements follow the worker record — no
            lingering access, no manual cleanup.
          </p>

        </div>

        {/* Lifecycle Track */}
        <div className="mx-auto mt-10 flex w-full max-w-[1000px] flex-col items-stretch gap-4 lg:flex-row lg:gap-0">

          {stages.map((stage, index) => (
            <div key={stage.title} className="contents">

              <div className="flex flex-col items-center rounded-2xl border border-[#E4E9EE] bg-white p-6 text-center shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] lg:min-w-0 lg:flex-1 dark:border-slate-800 dark:bg-slate-950">

                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#10A28D] text-base font-semibold leading-none text-white"
                  aria-hidden="true"
                >
                  {stage.glyph}
                </span>

                <h3 className="mt-3 text-sm font-bold leading-6 text-[#0E1F3D] dark:text-white">
                  {stage.title}
                </h3>

                <p className="mt-1.5 text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
                  {stage.description}
                </p>

              </div>

              {index < stages.length - 1 ? (
                <span
                  className="hidden shrink-0 items-center px-3 text-base leading-none text-[#6B7785] lg:flex dark:text-slate-500"
                  aria-hidden="true"
                >
                  →
                </span>
              ) : null}

            </div>
          ))}

        </div>

        {/* Source Note */}
        <div className="mx-auto mt-8 w-full max-w-[860px] rounded-xl border border-[#C9EAE2] bg-[#EAF6F3] px-6 py-4 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-center text-xs font-normal leading-5 text-[#0E1F3D] dark:text-slate-300">
            Lifecycle is driven by your worker master and directory sources
            where connected — so access reflects the organization&apos;s current
            reality.
          </p>
        </div>

      </div>
    </section>
  );
}
