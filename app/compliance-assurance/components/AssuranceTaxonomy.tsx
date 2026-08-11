const recordTypes = [
  {
    title: "Requirement source",
    body: "Law, regulation, standard, contract, policy, or customer requirement used as context.",
    note: "Not a legal conclusion. Applicability requires authorized review.",
  },
  {
    title: "Control objective",
    body: "The desired risk or compliance outcome.",
    note: "Does not prove implementation.",
  },
  {
    title: "Control implementation",
    body: "A specific process, technical, or administrative measure.",
    note: "Scope, version, owner, and operating state required.",
  },
  {
    title: "Evidence source",
    body: "A record supporting the design or operation of a control.",
    note: "Quality, date, lineage, sensitivity, and retention required.",
  },
  {
    title: "Control mapping",
    body: "The relationship between a requirement and one or more controls or evidence sources.",
    note: "A mapping is not regulator approval and not universal compliance.",
  },
  {
    title: "Assessment / audit",
    body: "Evaluation by an internal or external assessor using a defined method and period.",
    note: "Sampling, limitations, findings, and opinion scope required.",
  },
  {
    title: "Certification",
    body: "An issued certificate for a defined subject, standard version, period, and scope.",
    note: "No scope expansion beyond the certificate's own facts.",
  },
  {
    title: "Report / statement",
    body: "A description, attestation, test report, or other assurance artifact.",
    note: "Issuer, date, access level, and limitation required.",
  },
  {
    title: "Finding",
    body: "An observed deficiency, exception, gap, or improvement item.",
    note: "Not hidden by default. Severity and public detail are governed.",
  },
  {
    title: "Corrective action",
    body: "A planned or completed response to a finding.",
    note: "Closure requires evidence and verification — not just task completion.",
  },
  {
    title: "Exception / residual risk",
    body: "A time-bound deviation or residual risk accepted by an eligible authority.",
    note: "Not equivalent to passing, and not equivalent to compliance.",
  },
  {
    title: "Customer responsibility",
    body: "Configuration, process, policy, consultation, or downstream action assigned to you.",
    note: "Must be explicit — never used to evade a ZoikoTime-owned control.",
  },
];

export default function AssuranceTaxonomy() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Assurance Taxonomy
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Twelve Record Types That Must Not Become One Badge
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            An obligation is not a control. A control is not evidence. Evidence is
            not an opinion. Collapsing them is how a compliance page becomes
            decoration.
          </p>

        </div>

        {/* Record Types */}
        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {recordTypes.map((record) => (
            <article
              key={record.title}
              className="flex flex-col rounded-xl border border-stone-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >

              <h3 className="text-xs font-bold leading-5 text-sky-950 dark:text-white">
                {record.title}
              </h3>

              <p className="mt-1.5 flex-1 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {record.body}
              </p>

              <p className="mt-4 border-t border-stone-200 pt-2.5 text-xs font-normal leading-5 text-amber-700 dark:border-slate-800 dark:text-amber-400">
                {record.note}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
