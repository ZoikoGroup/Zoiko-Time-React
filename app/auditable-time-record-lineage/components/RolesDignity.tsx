import SectionHeading from "./SectionHeading";

const ROLES = [
  {
    role: "Worker",
    desc: "Own source, policy context, versions, corrections, notices, review status, outcome, and permitted downstream state - in plain language.",
    highlight: false,
  },
  {
    role: "Reviewer",
    desc: "Assigned records within authority scope, with evidence references and permitted actions.",
    highlight: false,
  },
  {
    role: "Administrator",
    desc: "Configuration and mapping context. Still not credentials, identities, or restricted source topology.",
    highlight: false,
  },
  {
    role: "Nobody",
    desc: "Hidden identities, technical credentials, restricted topology, legal-hold detail, or records they are not authorized to see.",
    highlight: true,
  },
];

export default function RolesDignity() {
  return (
    <section className="bg-slate-900 px-4 py-16 text-white dark:bg-black sm:px-8 sm:py-20 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-7">
        <SectionHeading
          light
          title="Who can see what - and the dignity rules"
          description={
            <>
              Lineage visibility follows role and permission. Access to your own
              lineage is not access to anyone else&apos;s, and it is not
              administrative authority.
            </>
          }
        />

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((r) => (
            <div
              key={r.role}
              className={`flex flex-col gap-1.5 rounded-2xl border px-6 py-8 shadow-sm ${
                r.highlight
                  ? "border-emerald-400/30 bg-emerald-400/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="text-base font-bold text-white">{r.role}</div>
              <p className="text-base leading-6 text-sky-100/80">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col gap-1 rounded-[10px] border border-gray-600/40 bg-white/5 px-3.5 py-3">
          <div className="text-xs font-bold uppercase tracking-wide text-red-400">
            Worker dignity rules
          </div>
          <p className="text-xs leading-5 text-red-300">
            No worker screen uses suspicious, untrustworthy, low confidence
            worker, productivity score, attendance score, or guilt-oriented
            language. A correction request is a{" "}
            <span className="font-semibold">separate proposed object</span> - it does
            not rewrite the current record until authorized review completes. A
            rejected request preserves the request, the reason, and the escalation
            route where policy allows.
          </p>
        </div>
      </div>
    </section>
  );
}
