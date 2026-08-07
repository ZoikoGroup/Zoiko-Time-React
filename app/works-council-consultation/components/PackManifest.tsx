import StatusPill, { type Tone } from "./StatusPill";

type Module = {
  module: string;
  id: string;
  version: string;
  owner: string;
  access: string;
  status: string;
  tone?: Tone;
  excluded?: boolean;
};

const modules: Module[] = [
  {
    module: "Cover, scope & limitations",
    id: "RES-0101",
    version: "v4",
    owner: "Product governance",
    access: "Public",
    status: "Current",
  },
  {
    module: "Product overview & proposed use cases",
    id: "RES-0118",
    version: "v4",
    owner: "Product governance",
    access: "Public",
    status: "Current",
  },
  {
    module: "Data category, source, purpose, retention & location map",
    id: "RES-0142",
    version: "v6",
    owner: "Privacy",
    access: "Public",
    status: "Current",
  },
  {
    module: "Collection limits & anti-surveillance statement",
    id: "RES-0150",
    version: "v3",
    owner: "Trust & Governance",
    access: "Public",
    status: "Current",
  },
  {
    module: "Worker visibility, correction, challenge & representation",
    id: "RES-0163",
    version: "v5",
    owner: "Product governance",
    access: "Public",
    status: "Current",
  },
  {
    module: "Human authority, deterministic classification & AI boundaries",
    id: "RES-0171",
    version: "v4",
    owner: "AI governance",
    access: "Public",
    status: "Current",
  },
  {
    module: "Administration, roles, logs, integrations & security",
    id: "RES-0180",
    version: "v7",
    owner: "Security",
    access: "Controlled",
    status: "Request required",
    tone: "blue",
  },
  {
    module: "Rollout, training, pilot, support & accessibility",
    id: "RES-0195",
    version: "v2",
    owner: "Implementation",
    access: "Public",
    status: "Current",
  },
  {
    module: "Data residency statement",
    id: "—",
    version: "—",
    owner: "—",
    access: "—",
    status: "Excluded — not operational",
    tone: "red",
    excluded: true,
  },
];

export default function PackManifest() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Pack Contents &amp; Manifest
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Nine Modules, Every One Versioned
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            A manifest makes the pack inspectable. It is not proof that
            consultation requirements were satisfied.
          </p>

        </div>

        {/* Manifest Table */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-stone-200 dark:border-slate-800">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[860px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900">
                  {[
                    { label: "Module", width: "w-[36%]" },
                    { label: "Resource ID", width: "w-[12%]" },
                    { label: "Version", width: "w-[9%]" },
                    { label: "Owner", width: "w-[16%]" },
                    { label: "Access", width: "w-[11%]" },
                    { label: "Status", width: "w-[16%]" },
                  ].map((heading) => (
                    <th
                      key={heading.label}
                      className={`border-b border-stone-200 px-5 py-4 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white ${heading.width}`}
                    >
                      {heading.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {modules.map((row) => (
                  <tr
                    key={row.module}
                    className={`border-b border-stone-200 dark:border-slate-800 ${
                      row.excluded ? "bg-red-50/50 dark:bg-red-950/10" : ""
                    }`}
                  >

                    <td className="px-5 py-4 align-middle text-sm font-semibold leading-5 text-sky-950 dark:text-white">
                      {row.module}
                    </td>

                    <td className="px-5 py-4 align-middle text-sm font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.id}
                    </td>

                    <td className="px-5 py-4 align-middle text-sm font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.version}
                    </td>

                    <td className="px-5 py-4 align-middle text-sm font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.owner}
                    </td>

                    <td className="px-5 py-4 align-middle text-sm font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.access}
                    </td>

                    <td className="px-5 py-4 align-middle">
                      <StatusPill
                        label={row.status}
                        tone={row.tone ?? "green"}
                      />
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

          <p className="px-5 py-4 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
            Illustrative manifest. Resource IDs, versions, owners, status, and
            access level are always shown; checksums appear where approved.
          </p>

        </div>

        <p className="mt-5 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
          Pack states: Draft · In preparation · Internal review · Ready for
          customer review · Shared · Superseded · Withdrawn. A draft carries a
          visible status watermark and makes no external completion claim.
        </p>

      </div>
    </section>
  );
}
