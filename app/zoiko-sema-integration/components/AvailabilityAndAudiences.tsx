import Link from "next/link";

const dependencies = [
  {
    dependency: "Product subscriptions",
    confirmed: "Both products, separately licensed",
  },
  {
    dependency: "Plan & contract",
    confirmed: "Integration eligibility under your current agreement",
  },
  {
    dependency: "Enterprise setup",
    confirmed: "Implementation scope and support model",
  },
  {
    dependency: "Region & product status",
    confirmed: "Current availability for your region and version",
  },
  {
    dependency: "Administrator authority",
    confirmed: "Named eligible roles on both sides",
  },
  {
    dependency: "Governance readiness",
    confirmed: "Policy, privacy, legal, and accessibility review complete",
  },
];

const audiences = [
  {
    title: "Sema administrators",
    body: "Workspace eligibility, ownership, and what leaves a workspace.",
  },
  {
    title: "ZoikoTime administrators",
    body: "Destination scopes, policy version, review owners, retention.",
  },
  {
    title: "Reviewers & managers",
    body: "What arrives for review, and what it does not establish.",
  },
  {
    title: "IT & security",
    body: "Service identity, least privilege, credential custody, revocation.",
  },
  {
    title: "Workers & participants",
    body: "Notices, source visibility, correction and support routes.",
  },
  {
    title: "Buyers & evaluators",
    body: "Licensing, implementation, evidence, and enterprise evaluation.",
  },
];

export default function AvailabilityAndAudiences() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">

          {/* Availability & Eligibility */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Availability, Licensing &amp; Eligibility
            </p>

            <h2 className="mt-3.5 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              Not Included by Default — Anywhere
            </h2>

            <p className="mt-3.5 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              The integration is a separately qualified capability. Having both
              products does not mean the bridge is available to you.
            </p>

            {/* Dependency Table */}
            <div className="mt-3.5 overflow-hidden rounded-2xl border border-stone-200 dark:border-slate-800">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[440px] border-collapse text-left">

                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-900">

                      <th className="w-40 border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white">
                        Dependency
                      </th>

                      <th className="border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white">
                        Must be confirmed
                      </th>

                    </tr>
                  </thead>

                  <tbody className="bg-white dark:bg-slate-950">
                    {dependencies.map((row) => (
                      <tr
                        key={row.dependency}
                        className="border-b border-stone-100 last:border-b-0 dark:border-slate-800/60"
                      >

                        <td className="px-4 py-3.5 align-top text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                          {row.dependency}
                        </td>

                        <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                          {row.confirmed}
                        </td>

                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>

            <p className="mt-4 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
              Check current{" "}
              <Link
                href="/pricing"
                className="text-sm font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
              >
                Pricing
              </Link>{" "}
              or request enterprise evaluation. Nothing on this page should be read
              as confirming availability for your organization.
            </p>

          </div>

          {/* Role-Based Entry Points */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Role-Based Entry Points
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-7 text-sky-950 dark:text-white">
              Six audiences, six routes
            </h3>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {audiences.map((audience) => (
                <article
                  key={audience.title}
                  className="flex flex-col rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-8 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] dark:border-slate-800 dark:bg-slate-900"
                >

                  <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                    {audience.title}
                  </h4>

                  <p className="mt-1.5 text-base font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {audience.body}
                  </p>

                </article>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
