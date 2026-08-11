import SectionIntro from "./SectionIntro";

const review = [
  { label: "Reviewer role", value: "Compliance Reviewer" },
  { label: "Scope", value: "Team 12 · Break & Rest corrections" },
  { label: "Inputs reviewed", value: "Original record, correction request, evidence" },
  { label: "Action", value: "Approved" },
  { label: "Condition", value: "None — approved as submitted" },
];

export default function HumanReview() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Human Review & Approval"
          title="The ledger records context. It does not decide."
          description="Accountable people make the call — the system's job is to make sure they have what they need to make it well."
          descriptionClassName="max-w-[660px]"
        />

        <div className="mt-12 max-w-[640px] rounded-[20px] border border-gray-200 px-7 py-3 shadow-[0px_8px_24px_0px_rgba(15,34,71,0.06)] dark:border-slate-800">
          {review.map((row, index) => (
            <div
              key={row.label}
              className={`flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
                index < review.length - 1
                  ? "border-b border-gray-100 dark:border-slate-800"
                  : ""
              }`}
            >
              <span className="text-sm text-slate-500">{row.label}</span>

              <span className="text-sm font-semibold text-sky-950 dark:text-white">
                {row.value}
              </span>
            </div>
          ))}
        </div>

        {/* Boundary note */}
        <div className="mt-10 rounded-2xl border-l-[3px] border-teal-600 bg-slate-50 px-6 py-4 dark:bg-slate-900">
          <p className="text-sm leading-5 text-slate-600 dark:text-slate-300">
            Approval, correction outcomes, payroll effects, discipline, legal
            conclusions, and other external decisions are kept separate from
            ledger state. The ledger shows that a decision was made, by whom, and
            why — those decisions themselves belong to authorized people and
            processes outside the ledger.
          </p>
        </div>
      </div>
    </section>
  );
}
