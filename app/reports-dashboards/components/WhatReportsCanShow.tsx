import Image from "next/image";

import SectionIntro from "./SectionIntro";
import { poppins } from "../fonts";

const categories = [
  { title: "Organization usage", icon: "icon-organization-usage.svg" },
  { title: "Record health", icon: "icon-record-health.svg" },
  { title: "Workflow status", icon: "icon-workflow-status.svg" },
  { title: "Attendance / shift states", icon: "icon-attendance-states.svg" },
  { title: "Break/rest policy coverage", icon: "icon-break-rest.svg" },
  { title: "Deterministic classification results", icon: "icon-message.svg" },
  { title: "Source health", icon: "icon-source-health.svg" },
  { title: "Release / reconciliation status", icon: "icon-message.svg" },
  { title: "Evidence / governance history", icon: "icon-evidence-history.svg" },
  { title: "Worker own-record reports", icon: "icon-worker-reports.svg" },
];

export default function WhatReportsCanShow() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="What Reports Can Show"
          title="Process and record health — never character or behavior."
          description="Language stays neutral and process-focused throughout, in every category below."
          titleClassName="max-w-[660px]"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-gray-200 p-4 dark:border-slate-800"
            >
              <Image
                src={`/reports-dashboards/${category.icon}`}
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
              />

              <h3
                className={`${poppins.className} mt-6 text-xs font-bold leading-4 text-sky-950 dark:text-white`}
              >
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
