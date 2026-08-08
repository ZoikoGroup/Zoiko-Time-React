import PracticeCard, { type PracticeCardProps } from "./PracticeCard";

const cards: PracticeCardProps[] = [
  {
    title: "Access, sharing & recipients",
    status: { label: "Current", tone: "green" },
    objective:
      "ensure only the right people and services can see or receive a record, for a stated purpose.",
    rows: [
      {
        label: "Model",
        value:
          "Deny-by-default intersection of tenant, entity, role, team, record, purpose, and policy scope",
      },
      {
        label: "Separated",
        value: "Human access roles and service identities",
      },
      {
        label: "Distinct",
        value:
          "Internal access · customer-authorized access · provider access · public disclosure",
      },
      {
        label: "Audited",
        value:
          "Exports, APIs, webhooks, support access, and emergency access — each with specific authority, scope, time limit, and audit",
      },
    ],
    limitation: (
      <>
        <span className="font-bold">Limitations:</span> internal privileged
        architecture and restricted recipient detail are not published. Not
        every integration receives the same data, and connectors do not share a
        single privacy role — each is scoped separately.
      </>
    ),
  },
  {
    title: "Retention, deletion & legal hold",
    status: { label: "Current", tone: "green" },
    objective:
      "govern lifecycle endpoints so records neither persist without reason nor disappear without record.",
    rows: [
      {
        label: "Schedules",
        value:
          "Record-type, purpose, customer, contract, and jurisdiction specific",
      },
      {
        label: "Triggers",
        value:
          "Account closure, record finalization, statutory period, support resolution, or configuration change where approved",
      },
      {
        label: "Distinct outcomes",
        value:
          "Deletion · anonymization · archive · backup expiry · legal hold",
      },
      {
        label: "Evidence",
        value:
          "Outcomes show scope, status, exceptions, and evidence. Superseded schedules preserve accountable history.",
      },
    ],
    limitation: (
      <>
        <span className="font-bold">Limitations:</span> there is no universal
        deletion deadline and no &quot;deleted everywhere immediately&quot;
        claim. Customer-configured retention cannot exceed product, contract, or
        legal constraints without review. Legal holds and security records
        survive ordinary user deletion by design.
      </>
    ),
  },
  {
    title: "Transfers, location & residency",
    status: { label: "Partially stated", tone: "violet" },
    objective:
      "explain movement and location concepts without making promises this page cannot support.",
    rows: [
      {
        label: "Distinguished",
        value:
          "Primary processing location · backup and DR location · support access · provider location · transfer mechanism",
      },
      {
        label: "Not determinative",
        value: "Your locale and user timezone do not determine data location",
      },
      {
        label: "Routed",
        value:
          "Customer-specific questions go to controlled Privacy Review",
      },
    ],
    limitation: (
      <>
        <span className="font-bold">Limitations:</span> no blanket &quot;data
        stays in country&quot; or &quot;no international transfer&quot; claim.
        Legal adequacy and transfer validity are never inferred from
        infrastructure region alone. Specific residency commitments belong to
        contracts and to the{" "}
        <span className="font-bold">evidence-gated</span> Data Location &amp;
        Residency destination — which is not yet released and is therefore not
        linked here.
      </>
    ),
  },
];

export default function PracticeAreas() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {cards.map((card) => (
            <PracticeCard key={card.title} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
}
