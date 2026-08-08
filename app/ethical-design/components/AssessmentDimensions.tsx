import Link from "next/link";

const dimensions = [
  {
    dimension: "Need & benefit",
    question: "Whose problem is this? Who benefits, and who bears the burden?",
  },
  {
    dimension: "Power & coercion",
    question:
      "Can a worker meaningfully refuse, understand, or challenge? Could a manager repurpose this?",
  },
  {
    dimension: "Privacy",
    question:
      "Is each data element necessary? Is derivation, retention, and secondary use justified?",
  },
  {
    dimension: "Security",
    question:
      "Could misuse, privilege, leakage, or integration failure harm people or records?",
  },
  {
    dimension: "Human authority",
    question:
      "Could this output become an automatic or rubber-stamped consequential decision?",
  },
  {
    dimension: "Fairness",
    question:
      "Could missingness, proxies, schedule patterns, disability, location, or device create differential burden?",
  },
  {
    dimension: "Accessibility",
    question:
      "Can supported users complete essential journeys with assistive technology?",
  },
  {
    dimension: "Reliability",
    question:
      "What happens when sources are stale, delayed, conflicting, unavailable, or wrong?",
  },
  {
    dimension: "Misuse & abuse",
    question:
      "How could an administrator, manager, integration, or attacker repurpose this design?",
  },
  {
    dimension: "Jurisdiction context",
    question:
      "What policy, labor, consultation, or contractual context changes appropriate use?",
  },
];

const practice = [
  {
    title: "A flag is evidence for review, not a decision",
    body: "Consequential payroll, discipline, employment, and legal outcomes require an eligible authorized person. Classifications and summaries are inputs to that judgment, never substitutes for it.",
    link: { label: "Human-in-Command Controls", href: "/human-in-command" },
    tint: true,
  },
  {
    title: "Deterministic classification is not AI",
    body: "Policy-bound time classification is deterministic, versioned, and reviewable. Approved machine learning may flag anomalies or signal-quality concerns for human review. Kairos retrieves, summarizes, and explains governed data — and decides nothing.",
    link: {
      label: "Deterministic Classification",
      href: "/deterministic-time-classification",
    },
    tint: false,
  },
];

export default function AssessmentDimensions() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Need, Purpose &amp; Proportionality
            </p>

            <h2 className="mt-3.5 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              Ten Assessment Dimensions Before Anything Is Built
            </h2>

            <p className="mt-4 max-w-[520px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              The hardest question is the second one: can a worker meaningfully
              refuse, understand, or challenge this — and could a manager use it
              outside its intended purpose?
            </p>

            {/* Dimension Table */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">

              <div className="overflow-x-auto">

                <table className="w-full min-w-[420px] border-collapse text-left">

                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-900">
                      {[
                        { label: "Dimension", width: "w-[32%]" },
                        {
                          label: "The question that must be answered",
                          width: "w-[68%]",
                        },
                      ].map((heading) => (
                        <th
                          key={heading.label}
                          className={`border-b border-stone-200 px-4 pb-4 pt-3.5 text-xs font-bold uppercase leading-5 tracking-wide text-zinc-500 dark:border-slate-800 dark:text-slate-400 ${heading.width}`}
                        >
                          {heading.label}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {dimensions.map((row) => (
                      <tr
                        key={row.dimension}
                        className="border-b border-stone-100 last:border-b-0 dark:border-slate-800"
                      >

                        <td className="px-4 py-3.5 align-top text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                          {row.dimension}
                        </td>

                        <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                          {row.question}
                        </td>

                      </tr>
                    ))}
                  </tbody>

                </table>

              </div>

            </div>

          </div>

          {/* Right Content */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Human Authority &amp; Contestability
            </p>

            <h3 className="mt-3.5 text-2xl font-bold leading-tight text-sky-950 dark:text-white">
              ED-04 and ED-05, in practice
            </h3>

            <div className="mt-6 flex flex-col gap-5">

              {practice.map((item) => (
                <div
                  key={item.title}
                  className={`flex flex-col rounded-2xl border p-6 ${
                    item.tint
                      ? "border-emerald-100 bg-[#F5FEF7] dark:border-emerald-900/40 dark:bg-emerald-950/20"
                      : "border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900"
                  }`}
                >

                  <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm font-normal leading-7 text-zinc-700 dark:text-slate-300">
                    {item.body}
                  </p>

                  <Link
                    href={item.link.href}
                    className="group mt-5 inline-flex items-center gap-1.5 self-start text-sm font-bold leading-6 text-[#097F4B] transition hover:text-emerald-800 dark:text-emerald-400"
                  >

                    <span>{item.link.label}</span>

                    <span
                      className="transition group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      →
                    </span>

                  </Link>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
