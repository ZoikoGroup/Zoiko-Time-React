import Link from "next/link";
import AdminPracticeCard, {
  type AdminPracticeCardProps,
} from "./AdminPracticeCard";

const cards: AdminPracticeCardProps[] = [
  {
    title: "Policy, rule & schedule controls",
    status: { label: "Current", tone: "green" },
    objective:
      "make workforce-record rules versioned, previewable, and attributable.",
    rows: [
      {
        label: "Every policy object",
        value:
          "Purpose, source, jurisdiction context, eligible population, rules, effective dates, owner, review state",
      },
      {
        label: "Covered controls",
        value:
          "Schedule, break and rest, attendance, time classification, approval, exception — within approved product boundaries only",
      },
      {
        label: "Preview",
        value:
          "Simulation uses synthetic or appropriately minimized data, never live worker records",
      },
      {
        label: "Review states",
        value:
          "Conflicting, incomplete, or stale policy sources surface visibly rather than resolving silently",
      },
    ],
    limitation:
      "ZoikoTime does not provide legal advice and does not guarantee that configured rules satisfy your obligations. Configuration never produces an automatic payroll, disciplinary, or compliance decision.",
  },
  {
    title: "Integration & service-identity administration",
    status: { label: "Current", tone: "green" },
    objective:
      "ensure every non-human actor is scoped, owned, observable, and revocable.",
    rows: [
      {
        label: "Every service identity",
        value:
          "Purpose, owner, scope, credential lifecycle, source health, revocation path",
      },
      {
        label: "Connection contract",
        value:
          "Provider, mappings, permitted scopes, write authority, direction, and failure behavior",
      },
      {
        label: "Health is visible",
        value:
          "Unavailable, stale, partial, and conflicting states are shown and may block use",
      },
      {
        label: "Revocation",
        value:
          "Immediate, attributable, and does not silently orphan in-flight records",
      },
    ],
    limitation:
      "connecting a provider establishes neither availability nor correctness. A failed integration never broadens access to complete an exchange — it fails visibly and enters reconciliation.",
  },
];

const routes = [
  {
    label: "Enterprise Administration & Policy",
    href: "/adminstration-policy-controls",
  },
  { label: "Integrations", href: "/enterprise-integrations" },
];

export default function PolicyAndIntegrationControls() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Control Cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {cards.map((card) => (
            <AdminPracticeCard key={card.title} {...card} />
          ))}
        </div>

        {/* Routes */}
        <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row sm:flex-wrap">

          {routes.map((route) => (
            <Link
              key={route.label}
              href={route.href}
              className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
            >
              {route.label}
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}
