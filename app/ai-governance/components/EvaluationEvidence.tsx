import GovernanceStatusPill, {
  type GovernanceTone,
} from "./GovernanceStatusPill";

const dimensions = [
  {
    dimension: "Task quality",
    question: "Does the use perform its defined task within approved scope?",
  },
  {
    dimension: "Groundedness / source use",
    question:
      "Are claims linked to approved, current, permissioned sources?",
  },
  {
    dimension: "Failure modes",
    question:
      "How does it behave with missing, stale, contradictory, adversarial, or out-of-scope input?",
  },
  {
    dimension: "Fairness / differential impact",
    question:
      "Do errors or burdens differ across relevant groups or contexts?",
  },
  {
    dimension: "Privacy",
    question:
      "Does it minimize data and respect purpose, permissions, retention, and provider limits?",
  },
  {
    dimension: "Security / abuse",
    question:
      "Can input, retrieval, tools, or output be manipulated or made to exfiltrate data?",
  },
  {
    dimension: "Robustness / reliability",
    question:
      "Does behavior hold across versions, load, provider failures, and environmental change?",
  },
  {
    dimension: "Accessibility",
    question:
      "Can users perceive, understand, operate, and correct the experience?",
  },
  {
    dimension: "Human factors",
    question:
      "Can reviewers understand, question, and override output without automation bias?",
  },
  {
    dimension: "Misuse / prohibited use",
    question:
      "Can the capability be repurposed for surveillance, discrimination, coercion, or unauthorized decisions?",
  },
];

const resultStates: { label: string; tone: GovernanceTone }[] = [
  { label: "Passed within scope", tone: "green" },
  { label: "Conditional", tone: "violet" },
  { label: "Under review", tone: "blue" },
  { label: "Failed", tone: "red" },
  { label: "Not evaluated", tone: "neutral" },
  { label: "Expired / stale", tone: "amber" },
];

const notes = [
  {
    title: "Human factors is not optional",
    body: "An evaluation that shows a model performs well but that reviewers defer to it uncritically has found a problem, not a success. Automation bias is measured, not assumed away.",
  },
  {
    title: "Fairness has justified scope",
    body: "Groups and contexts are selected only where legally, ethically, and analytically supportable. Sample, method, limitations, and excluded populations are reported — and no universal fairness claim is made.",
  },
  {
    title: "Not evaluated is a real state",
    body: "If no approved evidence exists for a claimed behavior, the capability is Evidence-Gated or Unavailable. Absence of evaluation is never treated as absence of risk.",
    tinted: true,
  },
];

export default function EvaluationEvidence() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Evaluation Evidence
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Ten Dimensions, Six Result States
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            &quot;Passed&quot; always means <em>passed within scope</em>. It never
            proves universal performance, and the distinction is preserved in the
            state name itself.
          </p>

        </div>

        {/* Dimensions */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950/40">

                  <th className="w-[300px] border-b border-stone-200 px-5 py-3.5 text-[10px] font-bold uppercase leading-4 tracking-wide text-zinc-500 dark:border-slate-800 dark:text-slate-400">
                    Dimension
                  </th>

                  <th className="border-b border-stone-200 px-5 py-3.5 text-[10px] font-bold uppercase leading-4 tracking-wide text-zinc-500 dark:border-slate-800 dark:text-slate-400">
                    The question it answers
                  </th>

                </tr>
              </thead>

              <tbody>
                {dimensions.map((row) => (
                  <tr
                    key={row.dimension}
                    className="border-b border-stone-100 last:border-b-0 dark:border-slate-800/60"
                  >

                    <td className="px-5 py-4 align-top text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                      {row.dimension}
                    </td>

                    <td className="px-5 py-4 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.question}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Result States */}
        <div className="mt-8">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Six evaluation result states
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {resultStates.map((state) => (
              <GovernanceStatusPill
                key={state.label}
                label={state.label}
                tone={state.tone}
              />
            ))}
          </div>

        </div>

        {/* Evaluation Notes */}
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">

          {notes.map((note) => (
            <article
              key={note.title}
              className={
                note.tinted
                  ? "flex flex-col rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 dark:border-emerald-900/40 dark:bg-emerald-950/10"
                  : "flex flex-col rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
              }
            >

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                {note.title}
              </h3>

              <p className="mt-2.5 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                {note.body}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
