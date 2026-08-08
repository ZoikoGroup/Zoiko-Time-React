import PracticeCard, { type PracticeCardProps } from "./PracticeCard";

const cards: PracticeCardProps[] = [
  {
    title: "Performance, capacity & graceful degradation",
    status: { label: "Partially published", tone: "violet" },
    objective:
      "behave predictably under load, and fail in a way users can understand.",
    rows: [
      {
        label: "Controls",
        value:
          "Capacity planning inputs, safe operating ranges, queue and backlog visibility, rate limiting, load shedding, circuit breaking, concurrency control, timeout, retry, backpressure — where approved",
      },
      {
        label: "Degradation states",
        value:
          "Which functions are preserved, which are unavailable, what users are told, how data behaves, and the recovery route",
      },
      {
        label: "Evidence",
        value:
          "Synthetic and production evidence are kept distinct, never blended",
      },
    ],
    limitation: (
      <>
        <span className="font-bold">Limitations:</span> no &quot;unlimited
        scale&quot; claim, no guaranteed latency, and no benchmark without
        reproducible evidence stating region, environment, workload, dataset,
        method, date, and limitations. Internal thresholds that would increase
        security or abuse risk are not published.
      </>
    ),
  },
  {
    title: "Change safety & deployment reliability",
    status: { label: "Current", tone: "green" },
    objective:
      "make changes reversible, observed, and attributable — because most incidents begin as a change.",
    rows: [
      {
        label: "Every change record",
        value:
          "Type, owner, scope, risk, dependencies, test evidence, approval, release window, rollout strategy, observation window, verification, rollback plan, communication, and final outcome",
      },
      {
        label: "Emergency change",
        value:
          "Named authority, stated reason, limited scope, post-change verification, retrospective review",
      },
      {
        label: "History preserved",
        value:
          "Failed, partially deployed, rolled back, superseded, and withdrawn changes all retain their history",
      },
    ],
    limitation: (
      <>
        <span className="font-bold">Limitations:</span> we do not claim every
        deployment is zero-downtime or automatically reversible — some changes
        are neither. Progressive delivery, canary, feature flags, and staged
        migration are described only where verified for the specific service.
        Rollback and forward-fix decisions remain human-authorized.
      </>
    ),
  },
];

export default function OperationalPractice() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {cards.map((card) => (
            <PracticeCard key={card.title} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
}
