import Link from "next/link";
import Image from "next/image";

const groups = [
  {
    title: "ZoikoTime-owned",
    icon: "/compliance-assurance/ZoikoTime-owned.svg",
    items: [
      "Platform control design and operation",
      "Evidence collection and retention",
      "Assessment coordination and artifact governance",
      "Finding management and verification",
      "Correction and public disclosure within scope",
    ],
  },
  {
    title: "Customer-owned",
    icon: "/compliance-assurance/Customer-owned.svg",
    items: [
      "Configuration and access review",
      "Internal policies and their accuracy",
      "Worker consultation obligations",
      "Local employment and payroll law",
      "Downstream reconciliation and destinations",
    ],
  },
  {
    title: "Shared & provider-dependent",
    icon: "/compliance-assurance/Shared-provider-dependent.svg",
    items: [
      "Support, incident, and implementation access",
      "Custom integrations and their scope",
      "Provider-delivered contracted services",
      "Provider evidence, governed rather than inherited",
    ],
  },
];

export default function OwnershipStates() {
  return (
    <section
      id="shared-responsibility"
      className="w-full scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Shared Responsibility
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Four Ownership States, No Vague Transfers
          </h2>

        </div>

        {/* Ownership Split — 1px gaps render the column dividers */}
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 lg:grid-cols-3 dark:border-slate-800 dark:bg-slate-800">

          {groups.map((group) => (
            <div
              key={group.title}
              className="flex flex-col bg-white p-6 dark:bg-slate-900"
            >

              <div className="flex items-center gap-2.5">

                <Image
                  src={group.icon}
                  alt=""
                  width={17}
                  height={17}
                  className="shrink-0"
                />

                <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                  {group.title}
                </h3>

              </div>

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

        {/* Matrix Prohibitions */}
        <div className="mx-auto mt-6 max-w-[900px] rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

          <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
            Two things a responsibility matrix must never do
          </p>

          <p className="mt-1.5 text-sm font-normal leading-6 text-red-700 dark:text-red-200/80">
            Transfer a ZoikoTime-owned obligation to you through a vague
            disclaimer. Or let anyone infer that your organization is compliant
            because a default setting exists — a default is a starting point, not
            an assessment of your practice.
          </p>

        </div>

        {/* Route */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/administrative-controls"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
          >
            Administrative Controls <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
