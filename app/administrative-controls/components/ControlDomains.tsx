import Image from "next/image";

const domains = [
  {
    title: "Organization & scope",
    body: "Tenants, entities, sites, groups, reporting relationships, jurisdiction, timezone, ownership.",
    note: "Modeling an entity does not establish legal, employment, or tax status.",
  },
  {
    title: "Identity & access",
    body: "Users, roles, service identities, authentication, permissions, delegation, access review.",
    note: "Role names do not prove least privilege. Effective scope and evidence do.",
  },
  {
    title: "Policy & rule governance",
    body: "Schedules, classifications, approvals, break and rest, attendance, exceptions, precedence.",
    note: "Configuration is not legal advice or a compliance guarantee.",
  },
  {
    title: "Data & source administration",
    body: "Source categories, mappings, field use, freshness, quality, retention, failure handling.",
    note: "No prohibited surveillance data can be enabled here or anywhere.",
  },
  {
    title: "Integration administration",
    body: "Providers, service identities, scopes, mappings, write authority, health, revocation.",
    note: "Connecting a provider does not establish availability or correctness.",
  },
  {
    title: "Workflow & approval",
    body: "Routing, eligibility, delegation, escalation, and required human review.",
    note: "Automation does not make consequential decisions.",
  },
  {
    title: "Worker transparency",
    body: "Applicable policy, source, status, correction, and escalation context.",
    note: "Role- and policy-bound. Never exposes another worker's data.",
  },
  {
    title: "Audit, evidence & reporting",
    body: "Versions, approvals, access, changes, exceptions, rollback, reconciliation.",
    note: "Audit evidence supports review. It is not an audit opinion.",
  },
  {
    title: "Emergency & recovery",
    body: "Narrow break-glass, suspension, rollback, reconciliation, recovery pathways.",
    note: "Emergency access cannot enable prohibited collection or erase history.",
  },
];

const invariants = [
  {
    title: "No hidden surveillance tier",
    body: "The prohibited collection set is unavailable at every tier and configuration.",
  },
  {
    title: "Deny by default",
    body: "Absent an explicit current permission and scope intersection, the action is denied.",
  },
  {
    title: "No silent inheritance",
    body: "Inherited values, overrides, mandatory floors, and the effective result are all visible.",
  },
  {
    title: "No silent overwrite",
    body: "Material changes create versions. Prior approved state stays recoverable per retention policy.",
  },
  {
    title: "No autonomous consequential outcome",
    body: "Automation may route or classify under policy. Humans decide payroll, discipline, employment, legal.",
  },
  {
    title: "No unscoped service identity",
    body: "Every integration actor has a purpose, owner, scope, credential lifecycle, health, and revocation.",
  },
  {
    title: "No permanent exception by neglect",
    body: "Exceptions are time-bound or explicitly renewed. An expired exception stops or enters safe review.",
  },
  {
    title: "No fabricated source health",
    body: "Unavailable, stale, partial, or conflicting source state is visible and may block activation.",
  },
  {
    title: "No hidden worker impact",
    body: "Material changes affecting collection, classification, review, or visibility trigger governed communication.",
  },
  {
    title: "No evidence-free claim",
    body: "Every public control statement carries scope, status, owner, review date, limitations, and evidence route.",
  },
];

export default function ControlDomains() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Administrative Control Domains
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Nine Domains, Each With Its Assurance Boundary
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            The boundary line matters as much as the purpose. A category label
            never proves a control is enabled for a specific customer.
          </p>

        </div>

        {/* Domains */}
        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {domains.map((domain) => (
            <article
              key={domain.title}
              className="flex flex-col rounded-xl border border-stone-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >

              <h3 className="text-xs font-bold leading-5 text-sky-950 dark:text-white">
                {domain.title}
              </h3>

              <p className="mt-1.5 flex-1 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {domain.body}
              </p>

              <p className="mt-4 border-t border-dashed border-stone-200 pt-2.5 text-xs font-normal leading-5 text-amber-700 dark:border-slate-800 dark:text-amber-400">
                {domain.note}
              </p>

            </article>
          ))}

        </div>

        {/* Invariants */}
        <h3 className="mt-12 text-lg font-bold leading-6 text-sky-950 dark:text-white">
          Ten non-negotiable invariants
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">

          {invariants.map((invariant) => (
            <div
              key={invariant.title}
              className="flex gap-5 rounded-[10px] border border-stone-200 bg-white px-4 py-3.5 dark:border-slate-800 dark:bg-slate-900"
            >

              <Image
                src="/administrative-controls/tick-mark.svg"
                alt=""
                width={16}
                height={16}
                className="mt-0.5 shrink-0"
              />

              <div className="flex flex-col gap-[3px]">

                <p className="text-xs font-bold leading-5 text-sky-950 dark:text-white">
                  {invariant.title}
                </p>

                <p className="text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                  {invariant.body}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
