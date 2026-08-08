import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import StatusPill, { type Tone } from "./StatusPill";

const categories: { title: string; body: string; route: ReactNode }[] = [
  {
    title: "Product usability",
    body: "Confusing workflow, missing context, obstructive setting, poor error recovery.",
    route: (
      <>
        Product feedback or{" "}
        <Link
          href="/help-center"
          className="font-bold text-[#097F4B] transition hover:text-emerald-800 dark:text-emerald-400"
        >
          Help Center
        </Link>
      </>
    ),
  },
  {
    title: "Record correctness",
    body: "Incorrect time, classification, status, or evidence relationship.",
    route: (
      <>
        Correction and{" "}
        <Link
          href="/human-in-command"
          className="font-bold text-[#097F4B] transition hover:text-emerald-800 dark:text-emerald-400"
        >
          Human-in-Command review
        </Link>
      </>
    ),
  },
  {
    title: "Privacy",
    body: "Unclear purpose, excessive collection, access, retention, or rights issue.",
    route: (
      <Link
        href="/privacy"
        className="font-bold text-[#097F4B] transition hover:text-emerald-800 dark:text-emerald-400"
      >
        Privacy request route
      </Link>
    ),
  },
  {
    title: "Security",
    body: "Vulnerability, access-control issue, or unsafe disclosure.",
    route: (
      <Link
        href="/security-overview"
        className="font-bold text-[#097F4B] transition hover:text-emerald-800 dark:text-emerald-400"
      >
        Dedicated security reporting
      </Link>
    ),
  },
  {
    title: "Accessibility",
    body: "Keyboard, screen reader, contrast, zoom, motion, cognition, or alternative-channel barrier.",
    route: (
      <Link
        href="/accessibility"
        className="font-bold text-[#097F4B] transition hover:text-emerald-800 dark:text-emerald-400"
      >
        Accessibility issue route
      </Link>
    ),
  },
  {
    title: "Fairness or coercion",
    body: "Differential burden, proxy effect, punitive use, or lack of meaningful review.",
    route: (
      <>
        Governance concern or{" "}
        <Link
          href="/contact"
          className="font-bold text-[#097F4B] transition hover:text-emerald-800 dark:text-emerald-400"
        >
          Enterprise Support
        </Link>
      </>
    ),
  },
  {
    title: "Reliability or status",
    body: "Stale state, delayed processing, reconciliation, or outage communication.",
    route: (
      <>
        <Link
          href="/system-status"
          className="font-bold text-[#097F4B] transition hover:text-emerald-800 dark:text-emerald-400"
        >
          System Status
        </Link>{" "}
        or Enterprise Support
      </>
    ),
  },
  {
    title: "Principle evidence",
    body: "Outdated claim, missing limitation, unsupported wording, or evidence gap.",
    route: (
      <Link
        href="/trust-center"
        className="font-bold text-[#097F4B] transition hover:text-emerald-800 dark:text-emerald-400"
      >
        Trust Center correction route
      </Link>
    ),
  },
];

const issueStates: { label: string; tone: Tone }[] = [
  { label: "Received", tone: "blue" },
  { label: "Needs clarification", tone: "amber" },
  { label: "Under review", tone: "blue" },
  { label: "Action planned", tone: "violet" },
  { label: "Corrected", tone: "green" },
  { label: "Partially corrected", tone: "violet" },
  { label: "Declined with reason", tone: "red" },
  { label: "Closed", tone: "neutral" },
  { label: "Reopened", tone: "blue" },
];

export default function FeedbackRoutes() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Feedback, Issue Reporting &amp; Redress
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Eight Categories, Each With an Authoritative Route
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Sending a design concern to a general feedback inbox is how it gets
            lost. Each category has an owner.
          </p>

        </div>

        {/* Categories */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <article
              key={category.title}
              className="flex flex-col rounded-xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >

              <h3 className="text-sm font-bold leading-5 text-sky-950 dark:text-white">
                {category.title}
              </h3>

              <p className="mt-2 flex-1 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {category.body}
              </p>

              <p className="mt-3 border-t border-dashed border-stone-200 pt-3 text-[10px] font-bold uppercase leading-4 tracking-wide text-zinc-500 dark:border-slate-800 dark:text-slate-400">
                Route
              </p>

              <p className="mt-1 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {category.route}
              </p>

            </article>
          ))}

        </div>

        {/* Issue States */}
        <p className="mt-10 text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
          Nine issue states
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {issueStates.map((state) => (
            <StatusPill key={state.label} label={state.label} tone={state.tone} />
          ))}
        </div>

        {/* Handling Callout */}
        <div className="mt-6 flex gap-3 rounded-xl border border-emerald-100 bg-[#F5FEF7] p-5 dark:border-emerald-900/40 dark:bg-emerald-950/20">

          <Image
            src="/ethical-design/Frame.svg"
            alt=""
            width={20}
            height={20}
            className="mt-0.5 shrink-0"
          />

          <p className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
            Under review shows the owner and current state{" "}
            <span className="font-bold text-sky-950 dark:text-white">
              without blame
            </span>
            . Action planned shows scope and status without an unapproved
            delivery promise. A declined issue receives a reason category and an
            escalation route where one is available.
          </p>

        </div>

      </div>
    </section>
  );
}
