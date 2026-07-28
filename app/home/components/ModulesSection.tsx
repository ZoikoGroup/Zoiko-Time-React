import {
  Fingerprint,
  Flag,
  Gauge,
  Globe2,
  ScrollText,
  ShieldCheck,
} from "lucide-react";

const modules = [
  {
    icon: '/home/Icon (4).png',
    title: "Session & Identity Assurance",
    tagline: "Confidence, not control.",
    points: [
      "Session integrity signals",
      "Risk-based re-verification",
      "Account-sharing detection",
    ],
  },
  {
    icon: '/home/Icon (5).png',
    title: "Deterministic Time Classification",
    tagline: "Consistent interpretation.",
    points: [
      "Deep work vs. meeting",
      "Billable/non-billable",
      "Explainable scoring",
    ],
  },
  {
    icon: '/home/Icon (6).png',
    title: "Integrity & Anomaly Flagging",
    tagline: "Detect patterns, not people.",
    points: [
      "Inconsistent time patterns",
      "Activity inflation drift",
      "Targeted flags, not punishment",
    ],
  },
  {
    icon: '/home/Icon (7).png',
    title: "Audit, HR & Legal Enablement",
    tagline: "Defensible records.",
    points: ["Standard export packs", "Investigation timelines", "HR, legal & compliance"],
  },
  {
    icon: '/home/Icon (8).png',
    title: "Global Policy Controls",
    tagline: "Jurisdiction-aware.",
    points: [
      "Policy libraries by region",
      "Approval workflows",
      "Data residency controls",
    ],
  },
];

export default function ModulesSection() {
  return (
    <section className="bg-slate-50 px-4 py-16 dark:bg-gray-900 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
          Enterprise Modules
        </h2>
        <p className="max-w-2xl text-base text-zinc-700 dark:text-gray-300">
          Modular capabilities that work together to deliver trust,
          accountability, and scalable operations.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {modules.map(({ icon, title, tagline, points }) => (
          <div
            key={title}
            className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800"
          >
            <span className="flex size-12 items-center justify-center rounded-lg bg-slate-50 dark:bg-gray-700">
              <img className="size-5 " src={icon}/>
            </span>
            <div>
              <p className="text-base font-bold leading-6 text-slate-950 dark:text-white">
                {title}
              </p>
              <p className="mt-1 text-xs text-zinc-700 dark:text-gray-400">
                {tagline}
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="text-xs leading-4 text-emerald-500 dark:text-emerald-400">
                    -
                  </span>
                  <span className="text-xs leading-4 text-zinc-700 dark:text-gray-400">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col flex-wrap items-center justify-center gap-4 rounded-lg border-y border-gray-200/60 bg-slate-100 px-4 py-4 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:gap-8 sm:px-8">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-emerald-500 dark:text-emerald-400" />
          <span className="text-sm font-bold text-slate-900 dark:text-white">
            Built for global organizations
          </span>
        </div>
        {[
          "No screenshots",
          "No keystroke capture",
          "Human review remains in control",
        ].map((item) => (
          <div key={item} className="flex items-center gap-1">
            <span className="size-2 rounded-full bg-emerald-400" />
            <span className="text-sm text-zinc-700 dark:text-gray-300">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
