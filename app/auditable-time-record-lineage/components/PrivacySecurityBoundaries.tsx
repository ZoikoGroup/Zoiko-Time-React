function BoundaryCard({
  title,
  objective,
  rows,
  limitation,
}: {
  title: string;
  objective: string;
  rows: { h: string; v: string }[];
  limitation: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">{title}</h3>
        <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
          Current
        </span>
      </div>
      <div className="mb-3 rounded-[10px] border border-gray-200 p-3 dark:border-gray-700">
        <p className="text-xs leading-5 text-gray-600 dark:text-gray-300">
          <span className="font-bold">Objective:</span> {objective}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {rows.map((r) => (
          <div key={r.h}>
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">{r.h}</div>
            <div className="text-xs leading-5 text-gray-600 dark:text-gray-300">{r.v}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t border-gray-200 pt-3 dark:border-gray-700">
        <p className="text-xs leading-5 text-amber-700 dark:text-amber-400">
          <span className="font-bold">Limitations:</span> {limitation}
        </p>
      </div>
    </div>
  );
}

const EVIDENCE_DESTINATIONS = [
  { title: "Evidence Ledger", desc: "Attribution, lineage, versions, corrections, and delivery history." },
  { title: "Deterministic Classification", desc: "The source, context, rule, result, and review trace." },
  { title: "Human-in-Command", desc: "Where consequential decision authority sits and stays." },
  { title: "Worker Experience", desc: "The own-record view, correction, and support routes." },
];

const GOVERNANCE_LINKS = [
  { title: "Trust Center", desc: "Entry point for assurance evidence." },
  { title: "Security", desc: "Access, logging, and operational controls." },
  { title: "Privacy", desc: "Purpose, minimization, retention, and rights." },
  { title: "Procurement & Legal", desc: "Controlled evidence and current terms." },
];

export default function PrivacySecurityBoundaries() {
  return (
    <section className="bg-white px-4 py-16 dark:bg-gray-900 sm:px-8 sm:py-20 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <BoundaryCard
            title="Privacy, security & sensitive-data boundaries"
            objective="make provenance inspectable without turning a graph into an exposure surface."
            rows={[
              {
                h: "Never rendered",
                v: "Technical credentials, secrets, internal topology, hidden identities, legal-hold detail",
              },
              {
                h: "Roles not names",
                v: "Actor role and authority scope are shown; public views do not expose personal identity",
              },
              {
                h: "No sensitive IDs in URLs",
                v: "Record identifiers are never placed in public analytics or marketing URLs",
              },
              {
                h: "Retention honesty",
                v: "A not-retained node says so rather than appearing as an absent link",
              },
            ]}
            limitation="no universal retention duration or legal-hold availability is claimed. Retention class is shown where supported; specifics are contractual."
          />
          <BoundaryCard
            title="Deterministic classification & AI boundary"
            objective="keep derivation explainable and separate from AI."
            rows={[
              {
                h: "Derivation",
                v: "Deterministic, versioned, rule-referenced - and never branded as AI",
              },
              {
                h: "Approved AI scope",
                v: "May assist only within separately governed limits; it decides nothing here",
              },
              {
                h: "No scores",
                v: "No confidence percentage, risk score, or opaque ranking appears in any node",
              },
            ]}
            limitation="deterministic does not mean infallible. It means the rule and version that produced a value can be named, inspected, and challenged."
          />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-3.5">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Related evidence destinations
            </h3>
            <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
              Lineage does not replace these. It points at them, and only where each is
              approved and current.
            </p>
            <div className="mt-1 flex flex-col gap-3">
              {EVIDENCE_DESTINATIONS.map((e) => (
                <div
                  key={e.title}
                  className="rounded-2xl border border-gray-200 bg-white px-6 py-8 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="text-base font-bold text-slate-900 dark:text-white">
                    {e.title}
                  </div>
                  <p className="text-base leading-6 text-gray-600 dark:text-gray-300">
                    {e.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Governance and access
            </h3>
            <div className="flex flex-col gap-3">
              {GOVERNANCE_LINKS.map((g) => (
                <div
                  key={g.title}
                  className="rounded-2xl border border-gray-200 bg-white px-6 py-8 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="text-base font-bold text-slate-900 dark:text-white">
                    {g.title}
                  </div>
                  <p className="text-base leading-6 text-gray-600 dark:text-gray-300">
                    {g.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3 rounded-2xl border border-blue-200 bg-gray-50 px-8 py-10 text-center dark:border-blue-900/40 dark:bg-gray-800">
              <div className="text-base font-bold text-slate-900 dark:text-white">
                No evidentiary claim
              </div>
              <p className="max-w-md text-base leading-6 text-gray-600 dark:text-gray-300">
                This page makes no legal-admissibility, immutability, tamper-proof, or
                blockchain claim, and publishes no customer names or outcome metrics.
                Legal effect depends on applicable law, policy, evidence, and process -
                not on a graph looking complete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
