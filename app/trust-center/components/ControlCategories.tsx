import Link from "next/link";
import StatusPill, { type Tone } from "./StatusPill";

const controls: {
  category: string;
  scope: string;
  owner: string;
  reviewed: string;
  status: string;
  tone: Tone;
}[] = [
  {
    category: "Identity & access",
    scope: "Platform, admin, service identities",
    owner: "Security",
    reviewed: "01 Jul 2026",
    status: "Current",
    tone: "green",
  },
  {
    category: "Encryption & key management",
    scope: "In transit and at rest",
    owner: "Security",
    reviewed: "01 Jul 2026",
    status: "Current",
    tone: "green",
  },
  {
    category: "Secure development",
    scope: "Change control, review, testing",
    owner: "Engineering",
    reviewed: "15 Jun 2026",
    status: "Current",
    tone: "green",
  },
  {
    category: "Logging & monitoring",
    scope: "Platform and administrative events",
    owner: "Security",
    reviewed: "01 Jul 2026",
    status: "Current",
    tone: "green",
  },
  {
    category: "Incident readiness",
    scope: "Detection, response, communication",
    owner: "Security",
    reviewed: "20 Jun 2026",
    status: "Current",
    tone: "green",
  },
  {
    category: "Vendor & processor control",
    scope: "Subprocessor governance",
    owner: "Privacy & Security",
    reviewed: "28 Jun 2026",
    status: "Under review",
    tone: "blue",
  },
];

const dataCategories = [
  "Account and identity data",
  "Organization configuration",
  "Time and workforce records",
  "Device and service metadata",
  "Support and security records",
];

export default function ControlCategories() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Security Evidence Summary
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Six Control Categories, Each With Its Limitation Stated
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Summaries only. The Security page holds the detail, and controlled
            artifacts use the request pathway — security language here never
            implies zero risk.
          </p>

        </div>

        {/* Control Table */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[820px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900">
                  {[
                    { label: "Control category", width: "w-[25%]" },
                    { label: "Scope", width: "w-[27%]" },
                    { label: "Owner", width: "w-[16%]" },
                    { label: "Last reviewed", width: "w-[16%]" },
                    { label: "Status", width: "w-[16%]" },
                  ].map((heading) => (
                    <th
                      key={heading.label}
                      className={`border-b border-stone-200 px-5 py-4 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white ${heading.width}`}
                    >
                      {heading.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {controls.map((row) => (
                  <tr
                    key={row.category}
                    className="border-b border-stone-200 last:border-b-0 dark:border-slate-800"
                  >

                    <td className="px-5 py-4 align-middle text-sm font-semibold leading-5 text-sky-950 dark:text-white">
                      {row.category}
                    </td>

                    <td className="px-5 py-4 align-middle text-sm font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.scope}
                    </td>

                    <td className="px-5 py-4 align-middle text-sm font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.owner}
                    </td>

                    <td className="px-5 py-4 align-middle text-sm font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.reviewed}
                    </td>

                    <td className="px-5 py-4 align-middle">
                      <StatusPill label={row.status} tone={row.tone} />
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

        <p className="mt-5 flex flex-wrap items-center gap-x-2 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">

          <span>
            Internal architecture, secrets, and full control test results are not
            published. Certification claims appear only with current evidence and
            approval.
          </span>

          <Link
            href="/security-overview"
            className="group inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
          >
            <span>Open Security</span>
            <span
              className="transition group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              →
            </span>
          </Link>

        </p>

        {/* Privacy & Worker Transparency */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Privacy &amp; Worker Transparency
            </p>

            <h3 className="mt-3.5 text-2xl font-bold leading-tight text-sky-950 dark:text-white">
              Data categories at a decision-useful level
            </h3>

            <p className="mt-4 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Privacy is not a subset of security, and this page does not
              collapse the two.
            </p>

            <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">

              <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Categories, each with purpose, access roles, retention,
                processors, transfers, and rights
              </h4>

              <ul className="mt-3.5 flex flex-col gap-2.5">
                {dataCategories.map((item) => (
                  <li key={item} className="flex gap-2.5">

                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                      aria-hidden="true"
                    />

                    <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {item}
                    </span>

                  </li>
                ))}
              </ul>

            </div>

          </div>

          {/* Right */}
          <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

            <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              Worker transparency
            </h3>

            <p className="mt-3 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Workers can see the records that describe their work, understand
              what a status means and which policy version applied, request a
              correction, and escalate. Those routes are product behavior, not a
              policy promise.
            </p>

            <div className="mt-5 flex gap-3 rounded-xl border border-emerald-100 bg-emerald-50/40 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/20">

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="mt-0.5 shrink-0 text-emerald-700 dark:text-emerald-400"
                aria-hidden="true"
              >
                <circle
                  cx="9"
                  cy="9"
                  r="6.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M6.4 9.1L8.2 10.9L11.6 7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-sm font-bold leading-6 text-sky-950 dark:text-white">
                Cross-linked to the anti-surveillance invariant, because what is{" "}
                <em>not</em> collected is part of the privacy answer.
              </p>

            </div>

            <p className="mt-5 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Subprocessor list, privacy notice, DPA, and request routes appear
              only when current. No legal conclusions or jurisdictional rights
              are published without current legal review.
            </p>

            <Link
              href="/privacy-controls"
              className="mt-6 inline-flex items-center justify-center gap-2 self-start rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
            >
              <span>Open Privacy</span>
              <span aria-hidden="true">→</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
