import Image from "next/image";

import SectionIntro from "./SectionIntro";
import { poppins } from "../fonts";

const contracts = [
  {
    title: "Owner & approved purpose",
    description: "A named owner and a documented reason the report exists.",
    icon: "icon-owner.svg",
  },
  {
    title: "Audience & prohibited uses",
    description: "Who it's for, and explicitly what it must not be used for.",
    icon: "icon-audience.svg",
  },
  {
    title: "Immutable version identifier",
    description: "Every change produces a new, traceable version.",
    icon: "icon-version-identifier.svg",
  },
  {
    title: "Calculation & source contract",
    description: "Exact formula, inclusion/exclusion, and source lineage.",
    icon: "icon-calculation-contract.svg",
  },
  {
    title: "Time basis",
    description: "What period and time zone the numbers reflect.",
    icon: "icon-time-basis.svg",
  },
  {
    title: "Privacy rules & validation tests",
    description: "Thresholds and checks run before anything publishes.",
    icon: "icon-scoped-access.svg",
  },
  {
    title: "Approval history & lifecycle status",
    description: "Who approved what, and the report's current status.",
    icon: "icon-approval-history.svg",
  },
  {
    title: "Impact analysis",
    description: "What downstream reports or decisions a change could affect.",
    icon: "icon-impact-analysis.svg",
  },
];

export default function MetricGovernance() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Metric & Report Governance"
          title="Every metric has an owner. Every version is accountable."
          description="No production report or dashboard ships without a complete governance contract behind it."
        />

        <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-7 md:grid-cols-2">
          {contracts.map((contract) => (
            <div key={contract.title} className="flex items-start gap-3">
              <Image
                src={`/reports-dashboards/${contract.icon}`}
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
                className="mt-0.5 shrink-0"
              />

              <div>
                <h3
                  className={`${poppins.className} text-sm font-bold text-sky-950 dark:text-white`}
                >
                  {contract.title}
                </h3>

                <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {contract.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency withdrawal */}
        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-orange-200 bg-orange-50 px-6 py-5 dark:border-amber-900/40 dark:bg-amber-900/10">
          <Image
            src="/reports-dashboards/icon-warning.svg"
            alt=""
            width={18}
            height={18}
            aria-hidden="true"
            className="mt-0.5 shrink-0"
          />

          <div>
            <h3
              className={`${poppins.className} text-sm font-bold text-sky-950 dark:text-white`}
            >
              Emergency withdrawal
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              An owner can pause delivery of a report or dashboard immediately.
              This pauses distribution — it never deletes history.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
