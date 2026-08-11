import Image from "next/image";
import Link from "next/link";

import SectionIntro from "./SectionIntro";
import { poppins } from "../fonts";

const audiences = [
  {
    title: "Operations",
    focus: "Workflow & release status",
    image: "/reports-dashboards/audience-operations.png",
    alt: "An operations professional at a workstation",
  },
  {
    title: "Finance / Payroll Ops",
    focus: "Reconciliation & release",
    image: "/reports-dashboards/audience-finance.png",
    alt: "A finance and payroll operations professional",
  },
  {
    title: "Compliance / Audit",
    focus: "Governance & evidence history",
    image: "/reports-dashboards/audience-compliance.png",
    alt: "A compliance and audit team reviewing records",
  },
  {
    title: "Privacy / Data Protection",
    focus: "Access & redaction review",
    image: "/reports-dashboards/audience-privacy.png",
    alt: "A privacy and data protection professional",
  },
  {
    title: "Security / IT",
    focus: "Authorization & source health",
    image: "/reports-dashboards/audience-security.png",
    alt: "An IT and security professional",
  },
];

export default function BuiltForEveryAudience() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Built for Every Audience"
          title="Task-specific pathways, not a generic analytics tool."
          description="Operations, Finance, Compliance, Privacy, IT, Managers, Workers, and enterprise buyers each get what they actually need."
          titleClassName="max-w-[560px]"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map((audience) => (
            <div key={audience.title}>
              <Image
                src={audience.image}
                alt={audience.alt}
                width={221}
                height={221}
                className="aspect-square h-auto w-full rounded-2xl object-cover"
              />

              <h3
                className={`${poppins.className} mt-5 text-center text-xs font-bold text-sky-950 dark:text-white`}
              >
                {audience.title}
              </h3>

              <p className="mt-1.5 text-center text-xs leading-4 text-slate-500 dark:text-slate-400">
                {audience.focus}
              </p>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/trust-center"
            className="inline-flex h-9 items-center justify-center rounded-full border border-sky-950/20 px-5 text-sm font-semibold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:text-white"
          >
            Visit Trust Center
          </Link>

          <Link
            href="/implementation-guide"
            className="inline-flex h-9 items-center justify-center rounded-full border border-sky-950/20 px-5 text-sm font-semibold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:text-white"
          >
            View Implementation Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
