const dependencies = [
  {
    dependencyClass: "First-party service",
    examples:
      "Access, time capture, record processing, approvals, evidence, reporting",
    responsibility: "ZoikoTime",
  },
  {
    dependencyClass: "Zoiko product",
    examples: "Connected Zoiko products where a customer has enabled them",
    responsibility: "ZoikoTime, within the connected scope",
  },
  {
    dependencyClass: "Cloud / provider",
    examples: "Contracted infrastructure and platform services",
    responsibility: "Provider, under contract — not inherited assurance",
  },
  {
    dependencyClass: "Customer-managed",
    examples:
      "Identity provider, policy configuration, roles, retention settings",
    responsibility: "Your organization",
  },
  {
    dependencyClass: "Device & network",
    examples: "Endpoints, operating systems, browsers, corporate networks",
    responsibility: "Your organization",
  },
  {
    dependencyClass: "Third-party integration",
    examples: "Payroll, HR, ERP, and other connected systems",
    responsibility: "Shared, per connector scope",
  },
];

const scopeRecord = [
  "Service, component, API, journey, or job identifier",
  "Environment, region, and data path",
  "Criticality, owner, and impact category",
  "Support path and current release state",
];

const excluded = [
  "Plans, versions, deployment models",
  "Providers, devices, operating systems",
  "Networks and customer configurations",
];

export default function ScopeAndDependencies() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Service Scope &amp; Dependency Model
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Define What Is Measured Before Showing Any Evidence
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Six dependency classes, because &quot;the platform was up&quot; means
            very little if the failure sat in a customer-managed identity
            provider or a third-party integration.
          </p>

        </div>

        {/* Dependency Table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[820px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900">
                  {[
                    { label: "Dependency class", width: "w-[20%]" },
                    { label: "Examples", width: "w-[48%]" },
                    { label: "Whose responsibility", width: "w-[32%]" },
                  ].map((heading) => (
                    <th
                      key={heading.label}
                      className={`border-b border-stone-200 px-4 py-3.5 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white ${heading.width}`}
                    >
                      {heading.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {dependencies.map((row) => (
                  <tr
                    key={row.dependencyClass}
                    className="border-b border-stone-100 last:border-b-0 dark:border-slate-800"
                  >

                    <td className="px-4 py-3.5 align-middle text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                      {row.dependencyClass}
                    </td>

                    <td className="px-4 py-3.5 align-middle text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.examples}
                    </td>

                    <td className="px-4 py-3.5 align-middle text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.responsibility}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

        {/* Scope Records */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">

          {[
            { title: "Every scope record states", items: scopeRecord },
            { title: "And what is excluded", items: excluded },
          ].map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-10 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] dark:border-slate-800 dark:bg-slate-900"
            >

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                {card.title}
              </h3>

              <ul className="mt-3.5 flex flex-col gap-2">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-2.5">

                    <span
                      className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-xs bg-emerald-400"
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

          <div className="flex flex-col rounded-2xl border border-[#E2F3EC] bg-[#F5FEF7] px-6 pb-6 pt-10 dark:border-emerald-900/40 dark:bg-emerald-950/20">

            <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              Scope changes are versioned
            </h3>

            <p className="mt-2 text-base font-normal leading-6 text-zinc-700 dark:text-slate-300">
              A scope change creates a new version and triggers review of every
              metric and claim that depended on it. Old comparisons do not
              silently carry forward.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
