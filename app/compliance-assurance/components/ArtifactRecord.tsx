import Link from "next/link";
import AssuranceStatusPill from "./AssuranceStatusPill";

const fields = [
  {
    label: "Artifact type",
    value: "External assessment — not a certification",
  },
  {
    label: "Issuer / assessor",
    value: "Named only in the released artifact, under approved permission",
  },
  { label: "Subject", value: "Core platform, defined service set" },
  {
    label: "Standard / version",
    value: "Stated in the artifact; not summarized here",
  },
  { label: "Period covered", value: "Defined assessment window" },
  { label: "Environment", value: "Production" },
  { label: "Entity / region", value: "Stated scope only" },
  { label: "Method", value: "Sampling-based; limitations documented" },
  { label: "Access level", value: "Controlled — governed request" },
  { label: "Owner", value: "Security & Trust Governance" },
  { label: "Last reviewed", value: "01 Jul 2026" },
  { label: "Correction history", value: "Preserved and linked" },
];

const notNamed = [
  "No certification name or framework logo",
  "No assessor or issuer name",
  "No report title or regulator reference",
  "No assessment score or percentage",
];

export default function ArtifactRecord() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Assessments, Audits, Certifications &amp; Reports
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            What an Artifact Record Must Carry
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            The exclusions block is not fine print. It is the part that determines
            whether the artifact answers your question.
          </p>

        </div>

        {/* Artifact Record */}
        <div className="mt-7 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] dark:border-slate-800 dark:bg-slate-900">

          {/* Record Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 bg-slate-50 px-5 py-4 dark:border-slate-800 dark:bg-slate-950/40">

            <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              ART-0117 · Independent assessment (synthetic example)
            </h3>

            <AssuranceStatusPill label="Under review" tone="blue" />

          </div>

          {/* Record Fields — 1px gaps render the cell dividers */}
          <dl className="grid grid-cols-1 gap-px bg-stone-200 sm:grid-cols-2 lg:grid-cols-3 dark:bg-slate-800">
            {fields.map((field) => (
              <div
                key={field.label}
                className="flex flex-col gap-1 bg-white px-5 py-3.5 dark:bg-slate-900"
              >

                <dt className="text-xs font-bold uppercase leading-5 tracking-wide text-zinc-500 dark:text-slate-400">
                  {field.label}
                </dt>

                <dd className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                  {field.value}
                </dd>

              </div>
            ))}
          </dl>

          {/* Exclusions */}
          <div className="border-t border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

            <p className="text-sm font-normal leading-6 text-red-700 dark:text-red-200/80">

              <span className="font-bold">Exclusions and limitations.</span> Does
              not cover customer configuration, customer-managed identity
              providers, third-party integrations you authorize, local employment
              or payroll law, downstream systems, or any environment outside the
              stated scope. Sampling-based methods do not establish absence of
              deficiency. This artifact is currently{" "}
              <span className="font-bold">under review</span> — do not rely on it
              as settled.

            </p>

          </div>

        </div>

        {/* Supporting Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">

          <div className="rounded-2xl border border-[#F7DBE6] bg-[#FEF4F4]/60 p-6 dark:border-red-900/40 dark:bg-red-950/10">

            <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              What is not named on this page
            </h3>

            <ul className="mt-4 flex flex-col gap-2.5">
              {notNamed.map((item) => (
                <li key={item} className="flex gap-2.5">

                  <span
                    className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />

                  <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {item}
                  </span>

                </li>
              ))}
            </ul>

            <p className="mt-4 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
              Each requires current permission and exact scope. A logo without
              those is a claim we have not earned the right to make.
            </p>

          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

            <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              How to find out what exists
            </h3>

            <p className="mt-4 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
              Submit an{" "}
              <Link
                href="#request-assurance-review"
                className="font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
              >
                assurance review request
              </Link>
              . You receive either the current artifact with its full scope,
              period, and exclusions — or a clear statement that no current
              artifact supports your request.
            </p>

            <p className="mt-4 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
              &quot;Unavailable&quot; carries no future-state implication. It means
              no current artifact exists, not that one is coming.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
