import AdminPracticeCard, {
  type AdminPracticeCardProps,
} from "./AdminPracticeCard";

const cards: AdminPracticeCardProps[] = [
  {
    title: "Break-glass contract",
    status: { label: "Current", tone: "green" },
    objective:
      "allow emergency action while making it fully attributable and self-limiting.",
    rows: [
      {
        label: "Required to open",
        value:
          "Strong authentication, named reason, incident or change relationship, narrow scope, and a time limit",
      },
      { label: "While open", value: "Monitored throughout" },
      {
        label: "At expiry",
        value: "Automatically revoked, or immediately enters review",
      },
      {
        label: "After use",
        value:
          "Post-use review confirms actions taken, data accessed, changes made, residual risk, and required reconciliation",
      },
    ],
    limitationLabel: "Hard limits:",
    limitation:
      "there is no standing unmonitored emergency account. Break-glass cannot enable prohibited collection, cannot produce an autonomous consequential decision, and cannot erase audit history — emergency action remains attributable permanently.",
  },
  {
    title: "Time-bound exceptions",
    status: { label: "Current", tone: "green" },
    objective:
      "allow a documented deviation without letting it become permanent through inattention.",
    rows: [
      {
        label: "Every exception",
        value:
          "Rationale, approver, scope, start and end dates, compensating controls",
      },
      {
        label: "Expiry behavior",
        value:
          "The exception stops, or enters a safe review state — it never silently persists",
      },
      { label: "Renewal", value: "Explicit and attributable, not automatic" },
    ],
    limitation:
      "an accepted exception is not equivalent to compliance and not equivalent to the control being met. It records that an eligible authority chose to accept a known gap, with an end date attached.",
  },
];

export default function BreakGlassAndExceptions() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Exceptions &amp; Emergency Administration
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Break-Glass Without Normalising Privileged Access
          </h2>

          <p className="mt-4 max-w-[700px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Emergency authority exists because incidents happen. It is deliberately
            narrow, expensive to use, and impossible to use quietly.
          </p>

        </div>

        {/* Emergency Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {cards.map((card) => (
            <AdminPracticeCard key={card.title} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
}
