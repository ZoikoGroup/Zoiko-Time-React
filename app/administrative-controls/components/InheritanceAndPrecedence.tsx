import AdminStatusPill, { type AdminTone } from "./AdminStatusPill";

const layers: {
  layer: string;
  caption: string;
  contribution: string;
  effect: { label: string; tone: AdminTone };
  floor?: boolean;
  resolved?: boolean;
}[] = [
  {
    layer: "Global",
    caption: "Organization default",
    contribution: "Inherited baseline value for the control.",
    effect: { label: "Applied", tone: "green" },
  },
  {
    layer: "Market / region",
    caption: "Jurisdiction context",
    contribution: "Regional variation where the product supports one.",
    effect: { label: "Applied", tone: "green" },
  },
  {
    layer: "Mandatory floor",
    caption: "Non-negotiable minimum",
    contribution:
      "A security, privacy, or collection-limit requirement that cannot be weakened below this point.",
    effect: { label: "Blocks override", tone: "red" },
    floor: true,
  },
  {
    layer: "Entity",
    caption: "Legal or operating entity",
    contribution: "Entity-level override, permitted only above the floor.",
    effect: { label: "Applied", tone: "green" },
  },
  {
    layer: "Site / group",
    caption: "Local context",
    contribution: "Local override attempted below the mandatory floor.",
    effect: { label: "Rejected", tone: "red" },
  },
  {
    layer: "Exception",
    caption: "Time-bound deviation",
    contribution: "None active for this control.",
    effect: { label: "Not applied", tone: "neutral" },
  },
  {
    layer: "Effective result",
    caption: "What actually applies",
    contribution:
      "Entity override, constrained by the mandatory floor. The rejected local override remains visible with its reason.",
    effect: { label: "Resolved", tone: "green" },
    resolved: true,
  },
];

export default function InheritanceAndPrecedence() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Scope, Inheritance &amp; Precedence
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            The Effective Result Is Always Explainable
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            An administrator should never have to guess why a setting resolved the
            way it did. Every layer that contributed is shown, including the one
            that blocked a local override.
          </p>

        </div>

        {/* Precedence Table */}
        <div className="mt-7 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950/40">

                  <th className="w-36 border-b border-stone-200 px-4 py-3 text-[10px] font-bold uppercase leading-4 tracking-wide text-zinc-500 dark:border-slate-800 dark:text-slate-400">
                    Layer
                  </th>

                  <th className="border-b border-stone-200 px-4 py-3 text-[10px] font-bold uppercase leading-4 tracking-wide text-zinc-500 dark:border-slate-800 dark:text-slate-400">
                    Contribution
                  </th>

                  <th className="w-32 border-b border-stone-200 px-4 py-3 text-[10px] font-bold uppercase leading-4 tracking-wide text-zinc-500 dark:border-slate-800 dark:text-slate-400">
                    Effect
                  </th>

                </tr>
              </thead>

              <tbody>
                {layers.map((row) => (
                  <tr
                    key={row.layer}
                    className={`border-b border-stone-100 last:border-b-0 dark:border-slate-800/60 ${
                      row.floor ? "bg-amber-50/40 dark:bg-amber-950/10" : ""
                    } ${
                      row.resolved
                        ? "border-t border-emerald-100 bg-emerald-50/40 dark:border-emerald-900/40 dark:bg-emerald-950/10"
                        : ""
                    }`}
                  >

                    <td className="px-4 py-3 align-middle">

                      <p
                        className={`text-xs font-bold leading-5 ${
                          row.floor
                            ? "text-amber-700 dark:text-amber-400"
                            : row.resolved
                              ? "text-emerald-800 dark:text-emerald-300"
                              : "text-sky-950 dark:text-white"
                        }`}
                      >
                        {row.layer}
                      </p>

                      <p className="text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
                        {row.caption}
                      </p>

                    </td>

                    <td className="px-4 py-3 align-middle text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
                      {row.contribution}
                    </td>

                    <td className="px-4 pb-3 pt-3.5 align-middle">
                      <AdminStatusPill
                        label={row.effect.label}
                        tone={row.effect.tone}
                      />
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Supporting Notes */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">

          <div className="rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

            <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
              Local configuration cannot weaken a floor
            </p>

            <p className="mt-1.5 text-sm font-normal leading-6 text-red-700 dark:text-red-200/80">
              A site or group override can never silently reduce a mandatory
              security or privacy control, and can never broaden collection beyond
              the prohibited set. A rejected override is shown as rejected — not
              quietly dropped.
            </p>

          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

            <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              Conflict states block unsafe activation
            </h3>

            <p className="mt-3 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
              Where sources are incompatible or incomplete, the change enters a
              conflict state and cannot activate. Administrators can preview which
              scopes and records a proposed change would affect before approving
              it.
            </p>

            <p className="mt-4 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
              Scope dimensions: tenant, legal or operating entity, business unit,
              site, team, worker population, role, jurisdiction, and timezone.
              Scope lifecycle states: created, active, suspended, merged, retired.
              Modeling an entity here does not determine its legal, employment, or
              tax status.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
