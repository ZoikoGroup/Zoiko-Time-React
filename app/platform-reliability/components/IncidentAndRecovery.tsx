import Link from "next/link";
import PracticeCard, { type PracticeCardProps } from "./PracticeCard";

const cards: PracticeCardProps[] = [
  {
    title: "Detection, incident & maintenance practice",
    status: { label: "Current", tone: "green" },
    objective:
      "detect, own, communicate, recover, and review — while System Status remains the live source.",
    rows: [
      {
        label: "Lifecycle",
        value:
          "Detection, triage, ownership, containment, mitigation, recovery verification, resolution, post-incident review",
      },
      {
        label: "Live communication",
        value: (
          <>
            <Link
              href="/system-status"
              className="font-bold text-[#097F4B] transition hover:text-emerald-800 dark:text-emerald-400"
            >
              System Status
            </Link>{" "}
            — this page never duplicates current state or maintains a competing
            history
          </>
        ),
      },
      {
        label: "Human authority",
        value:
          "Authorized people assess impact, declare operational state, approve risky changes, decide recovery tradeoffs, and review conclusions",
      },
    ],
    limitation: (
      <>
        <span className="font-bold">Limitations:</span> no guaranteed
        notification or recovery time unless contractually approved.
        Post-incident review being pending does not imply a public report will
        be published.
      </>
    ),
  },
  {
    title: "Backup, restore, continuity & recovery",
    status: { label: "Under review", tone: "blue" },
    objective:
      "prove that data can actually be brought back — not merely that copies exist.",
    rows: [
      {
        label: "Backup record",
        value:
          "Source, protected object, environment, frequency, retention, encryption, location, access, integrity check, restore method, dependency, owner, last tested, result, limitation, next test",
      },
      {
        label: "Separated",
        value:
          "Restore · failover · rebuild · replay · reconciliation · manual recovery — these are different capabilities",
      },
      {
        label: "Recovery tests",
        value:
          "Planned scope, data sample, environment, result, gaps, corrective actions, owner, review date",
      },
    ],
    limitation: (
      <>
        <span className="font-bold">Under review</span> — do not rely on this as
        settled. RTO and RPO appear only where approved for a specific service,
        environment, contract, evidence period, and dependency context. None
        currently qualifies, so none is published. There is no &quot;no data
        loss,&quot; instant-recovery, or universal regional-failover claim.{" "}
        <span className="font-bold">
          Backup existence is not restore proof.
        </span>
      </>
    ),
  },
];

export default function IncidentAndRecovery() {
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
