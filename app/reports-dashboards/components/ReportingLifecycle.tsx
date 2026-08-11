import Image from "next/image";

import SectionIntro from "./SectionIntro";
import { poppins } from "../fonts";

const stages = [
  {
    title: "Define",
    description:
      "Purpose, owner, audience, metrics, and scope are set before anything is built.",
  },
  {
    title: "Compose",
    description:
      "Approved sections and tiles are assembled from defined objects — nothing improvised.",
  },
  {
    title: "Validate",
    description:
      "Source, freshness, completeness, comparability, privacy, and permission are checked.",
  },
  {
    title: "Review",
    description:
      "A person annotates and approves before anything is distributed further.",
  },
  {
    title: "Distribute",
    description:
      "Delivered through authorized recipients and destinations only — least privilege by default.",
  },
  {
    title: "Preserve",
    description:
      "Definitions, filters, sources, decisions, receipts, and reconciliation are retained.",
  },
];

export default function ReportingLifecycle() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Reporting Lifecycle"
          title="Define → Compose → Validate → Review → Distribute → Preserve."
          description="Governed meaning, not more charts — every report follows the same six stages before anyone sees a number."
          titleClassName="max-w-[880px]"
          descriptionClassName="max-w-[560px]"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-6 md:gap-0">
          {stages.map((stage, index) => (
            <div key={stage.title} className="relative md:pr-4">
              {index > 0 && (
                <Image
                  src="/reports-dashboards/arrow-mark.svg"
                  alt=""
                  width={14}
                  height={14}
                  aria-hidden="true"
                  className="absolute -left-2.5 top-1/2 hidden -translate-y-1/2 md:block"
                />
              )}

              <div className="h-full rounded-2xl border border-gray-200 p-4 lg:p-5 dark:border-slate-800">
                <span
                  className={`${poppins.className} flex h-7 w-7 items-center justify-center rounded-full bg-sky-950 text-xs font-bold text-white dark:bg-teal-600`}
                >
                  {index + 1}
                </span>

                <h3
                  className={`${poppins.className} mt-4 text-base font-bold text-sky-950 dark:text-white`}
                >
                  {stage.title}
                </h3>

                <p className="mt-3 text-xs leading-5 text-slate-600 dark:text-slate-400">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
