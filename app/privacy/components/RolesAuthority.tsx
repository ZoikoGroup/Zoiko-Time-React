import Image from "next/image";

const groups = [
  {
    title: "Your organization",
    icon: "/privacy/Your organization.svg",
    tint: "bg-slate-50 dark:bg-slate-900",
    items: [
      "Defines permitted purposes and the instructions we act on",
      "Assigns roles and configures policy",
      "Issues worker notices and handles consultation duties",
      "Sets retention within product and legal constraints",
      "Holds the lawful and contractual context",
    ],
  },
  {
    title: "ZoikoTime",
    icon: "/privacy/ZoikoTime.svg",
    tint: "bg-white dark:bg-slate-900",
    items: [
      "Processes authorized data within configured scope",
      "Applies product and security controls",
      "Supports worker visibility and correction routes",
      "Preserves evidence and change history",
      "States limitations rather than assuming permission",
    ],
  },
  {
    title: "Workers & providers",
    icon: "/privacy/Workers & providers.svg",
    tint: "bg-slate-50/60 dark:bg-slate-900",
    items: [
      "Workers see permitted context and receive applicable notices",
      "Workers use correction and review routes",
      "Connected providers act under their own or customer-approved roles",
      "The exact provider relationship is contract-specific",
    ],
  },
];

export default function RolesAuthority() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Purposes, Roles &amp; Authority
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Who Decides, Who Processes, Who Reviews
          </h2>

        </div>

        {/* Role Columns */}
        <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-2xl border border-stone-200 lg:grid-cols-3 dark:border-slate-800">

          {groups.map((group, index) => (
            <div
              key={group.title}
              className={`flex flex-col p-5 ${group.tint} ${
                index > 0
                  ? "border-t border-stone-200 lg:border-l lg:border-t-0 dark:border-slate-800"
                  : ""
              }`}
            >

              <div className="flex items-center gap-2">

                <Image
                  src={group.icon}
                  alt=""
                  width={17}
                  height={17}
                  className="shrink-0"
                />

                <h3 className="text-base font-bold leading-5 text-sky-950 dark:text-white">
                  {group.title}
                </h3>

              </div>

              <ul className="mt-3 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2.5">

                    <span
                      className="mt-2 h-[5px] w-[5px] shrink-0 rounded-xs bg-emerald-400"
                      aria-hidden="true"
                    />

                    <span className="text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {item}
                    </span>

                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

        {/* Boundary Callout */}
        <div className="mx-auto mt-6 max-w-[900px] rounded-[10px] border border-[#F7DBE6] bg-[#FEF4F4] px-3.5 pb-3 pt-2.5 dark:border-red-900/40 dark:bg-red-950/20">

          <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
            Two things this model does not do
          </p>

          <p className="mt-1 text-xs font-normal leading-5 text-red-800 dark:text-red-200/80">
            It does not make your employment or legal decisions compliant —
            ZoikoTime cannot do that for you. And it does not transfer your
            responsibilities onto workers through obscure consent language.
            Controller and processor terminology appears only where the
            applicable contract and jurisdiction support it, not as decoration.
          </p>

        </div>

      </div>
    </section>
  );
}
