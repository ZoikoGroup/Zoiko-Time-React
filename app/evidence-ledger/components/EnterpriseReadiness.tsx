import Link from "next/link";

import SectionIntro from "./SectionIntro";
import { poppins } from "../fonts";

const topics = [
  {
    title: "Record scope & identity",
    description:
      "What's captured, from which sources, tied to which identity and access model.",
  },
  {
    title: "Evidence lifecycle",
    description:
      "How evidence moves from capture through availability states to retention or redaction.",
  },
  {
    title: "Change integrity",
    description:
      "How corrections, reclassification, and reopening create linked history.",
  },
  {
    title: "Exports & integrations",
    description:
      "How governed packages are built, delivered, and reconciled downstream.",
  },
  {
    title: "Worker rights",
    description:
      "How correction, escalation, and access work from the worker's side.",
  },
  {
    title: "Privacy & legal governance",
    description: "How access, redaction, and retention are configured and reviewed.",
  },
];

export default function EnterpriseReadiness() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Enterprise Readiness"
          title="Evaluate it the way your team actually evaluates software."
          description="Real product UI, a Trust Center, and a demo with your questions — not a fear-based compliance pitch."
          titleClassName="max-w-[570px]"
          descriptionClassName="max-w-[620px]"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-2xl border border-gray-200 p-5 dark:border-slate-800"
            >
              <h3
                className={`${poppins.className} text-sm font-bold text-sky-950 dark:text-white`}
              >
                {topic.title}
              </h3>

              <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                {topic.description}
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
