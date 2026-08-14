import Image from "next/image";

const youSelect = [
  "Entity, site, country or region",
  "Affected worker groups",
  "Representative-body type, where you supply it",
  "Product modules and use cases",
  "Proposed rollout stage, topics, and formats",
];

const youAssign = [
  "Product owner",
  "Privacy owner",
  "Security owner",
  "Accessibility owner",
  "Implementation owner",
  "Customer process owner",
];

function ScopeList({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-5 dark:border-emerald-900/40 dark:bg-emerald-950/20">

      <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
        {heading}
      </h3>

      <ul className="mt-3.5 flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5">

            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
              aria-hidden="true"
            />

            <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
              {item}
            </span>

          </li>
        ))}
      </ul>

    </div>
  );
}

export default function ScopeFirst() {
  return (
    <section
    id="prepare-consultation-pack"
     className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Prepare a Consultation Pack
            </p>

            <h2 className="mt-3.5 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              Scope First — Not a One-Size Download
            </h2>

            <p className="mt-4 max-w-[560px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Preparation begins with purpose, scope, and a responsible owner.
              The assumptions and the professional boundary are shown before
              anything is generated.
            </p>

            {/* Selection & Ownership */}
            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <ScopeList heading="What you select" items={youSelect} />
              <ScopeList heading="What you assign" items={youAssign} />
            </div>

            {/* Never Collected */}
            <div className="mt-5 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                Never collected in this flow
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-900 dark:text-red-200/80">
                Worker lists, union membership, representative identities, or
                protected-activity data. The flow also never infers that a
                representative body exists, or that a legal duty applies to you.
              </p>

            </div>

          </div>

          {/* Right Visual */}
          <div className="flex flex-col justify-center">

            <Image
              src="/works-council-consultation/Prepare-Consultation-Pack.png"
              alt="A pack being prepared against a stated purpose, scope, responsible owner, assumptions, and professional boundary"
              width={534}
              height={712}
              className="h-auto w-full rounded-[20px] object-cover shadow-[0px_18px_50px_0px_rgba(11,18,32,0.10)]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}
