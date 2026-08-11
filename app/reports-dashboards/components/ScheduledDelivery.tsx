import SectionIntro from "./SectionIntro";
import StatePill, { type PillTone } from "./StatePill";

const deliveryCard = {
  title: "Scheduled delivery",
  rows: [
    { label: "Report / version", value: "Weekly Record Health · v4" },
    { label: "Recipients", value: "3 internal · Compliance distribution" },
    { label: "Next run", value: "Mon, Aug 17 · 6:00 AM PDT" },
    { label: "Data-as-of", value: "Prior Sunday, 11:59 PM" },
  ],
  status: { label: "Delivered", tone: "green" as PillTone },
};

const shareCard = {
  title: "Share & recipient control",
  rows: [
    { label: "Recipient class", value: "Internal — Compliance role" },
    { label: "Permission", value: "View only, no export" },
    { label: "Privacy preflight", value: "Passed — thresholds met" },
    { label: "Actions available", value: "Share, revoke, notify, inspect history" },
  ],
  status: { label: "Active", tone: "blue" as PillTone },
};

const lifecycleStates: { label: string; tone: PillTone }[] = [
  { label: "Queued", tone: "gray" },
  { label: "Generating", tone: "blue" },
  { label: "Delivered", tone: "green" },
  { label: "Accessed", tone: "green" },
  { label: "Failed", tone: "red" },
  { label: "Rejected", tone: "red" },
  { label: "Expired", tone: "gray" },
  { label: "Withdrawn", tone: "gray" },
  { label: "Reconciled", tone: "purple" },
];

function DeliveryCard({
  card,
}: {
  card: typeof deliveryCard | typeof shareCard;
}) {
  return (
    <div className="rounded-[20px] border border-gray-200 px-6 py-5 dark:border-slate-800">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
        {card.title}
      </p>

      <div className="mt-4">
        {card.rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-1 border-b border-gray-100 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 dark:border-slate-800"
          >
            <span className="text-sm text-slate-500">{row.label}</span>

            <span className="text-sm font-semibold text-sky-950 dark:text-white">
              {row.value}
            </span>
          </div>
        ))}

        <div className="flex items-center justify-between gap-6 pt-4">
          <span className="text-sm text-slate-500">Status</span>

          <StatePill label={card.status.label} tone={card.status.tone} />
        </div>
      </div>
    </div>
  );
}

export default function ScheduledDelivery() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Scheduled Delivery & Sharing"
          title="Distribution is attributable, not a mailing list."
          description="Every scheduled run revalidates permissions, freshness, completeness, privacy, recipients, and destination before it goes out."
          descriptionClassName="max-w-[600px]"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <DeliveryCard card={deliveryCard} />
          <DeliveryCard card={shareCard} />
        </div>

        {/* Lifecycle states */}
        <div className="mt-6 flex flex-wrap gap-2">
          {lifecycleStates.map((state) => (
            <StatePill key={state.label} label={state.label} tone={state.tone} />
          ))}
        </div>
      </div>
    </section>
  );
}
