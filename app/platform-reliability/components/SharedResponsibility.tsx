import Image from "next/image";

const groups = [
  {
    title: "ZoikoTime",
    icon: "/platform-reliability/ZoikoTime.svg",
    items: [
      "Platform service operation and capacity",
      "Change safety and deployment control",
      "Detection, incident response, and communication",
      "Backup, restore, and recovery testing",
      "Integrity controls and reconciliation",
      "Evidence, limitations, and correction",
    ],
  },
  {
    title: "Your organization",
    icon: "/platform-reliability/Your organization.svg",
    items: [
      "Identity provider availability and configuration",
      "Endpoints, devices, and operating systems",
      "Corporate networks and egress rules",
      "Policy and retention configuration",
      "Connected systems you authorize",
      "Operational response on your side",
    ],
  },
  {
    title: "Providers & integrations",
    icon: "/platform-reliability/Providers & integrations.svg",
    items: [
      "Contracted infrastructure within defined scope",
      "Third-party systems you connect",
      "Their state and limitations stay visible",
      "Their assurance is not inherited by us",
    ],
  },
];

export default function SharedResponsibility() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Shared Responsibility &amp; Dependencies
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Reliability Is Not Only Ours to Deliver
          </h2>

        </div>

        {/* Responsibility Split — 1px gaps render the column dividers */}
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

        {/* Professional Boundary */}
        <p className="mx-auto mt-8 max-w-[760px] border-t border-stone-200 pt-6 text-sm font-normal leading-6 text-zinc-500 dark:border-slate-800 dark:text-slate-400">

          <span className="font-bold text-sky-950 dark:text-white">
            Professional boundary.
          </span>{" "}
          Reliability evidence does not guarantee payroll, employment, legal,
          compliance, tax, business-continuity, or financial outcomes. It
          describes how the platform is operated and what can be shown about it.

        </p>

      </div>
    </section>
  );
}
