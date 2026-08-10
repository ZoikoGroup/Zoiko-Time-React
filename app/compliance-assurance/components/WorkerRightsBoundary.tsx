import Link from "next/link";

const guarantees = [
  {
    title: "Worker rights persist",
    body: "Visibility, explanation, correction, human review, and escalation remain available regardless of what any assurance artifact says.",
  },
  {
    title: "Consultation is yours",
    body: "Product assurance does not replace consultation, bargaining, or local employment obligations. Those responsibilities remain with your organization.",
  },
  {
    title: "Decisions stay human",
    body: "Assurance status is never used to automate an employment, payroll, disciplinary, or legal outcome. Deterministic classification is not AI; Kairos decides nothing.",
  },
  {
    title: "Audit evidence has limits",
    body: "Evidence collected for assurance purposes is never repurposed as covert productivity surveillance. That would defeat the invariant above.",
  },
];

export default function WorkerRightsBoundary() {
  return (
    <section className="w-full overflow-hidden bg-[#050B1E]">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-400">
            Worker Rights &amp; Consultation Boundary
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Assurance Evidence Never Erases a Worker Right
          </h2>

          <p className="mt-5 max-w-[760px] text-base font-bold leading-7 text-white">
            No screenshots, keystroke content, URL history, application-name
            monitoring, or clipboard collection under any tier or configuration.
          </p>

        </div>

        {/* Guarantees */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {guarantees.map((guarantee) => (
            <article
              key={guarantee.title}
              className="flex flex-col rounded-2xl border border-white/[0.12] bg-white/[0.043] p-6"
            >

              <h3 className="text-base font-bold leading-6 text-white">
                {guarantee.title}
              </h3>

              <p className="mt-2.5 text-sm font-normal leading-6 text-slate-300">
                {guarantee.body}
              </p>

            </article>
          ))}

        </div>

        {/* Routes */}
        <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">

          <Link
            href="/human-in-command"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-600"
          >
            Human-in-Command Controls
          </Link>

          <Link
            href="/deterministic-time-classification"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-6 py-3.5 text-base font-bold text-white transition hover:border-white/50"
          >
            Deterministic Classification <span aria-hidden="true">→</span>
          </Link>

        </div>

      </div>
    </section>
  );
}
