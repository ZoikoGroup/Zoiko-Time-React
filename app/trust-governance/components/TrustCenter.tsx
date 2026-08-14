"use client";

import Link from "next/link";
import {
  ShieldCheck,
  LockKeyhole,
  EyeOff,
  Accessibility,
  UserCheck,
  Activity,
  ArrowRight,
} from "lucide-react";

const trustCards = [
  {
    title: "Security",
    description:
      "Our security controls, architecture, standards, and data protection practices.",
    button: "View Security",
    href: "/security",
    icon: ShieldCheck,
  },
  {
    title: "Privacy",
    description:
      "How we collect, use, store, and protect data with transparency and user rights.",
    button: "View Privacy",
    href: "/privacy",
    icon: LockKeyhole,
  },
  // {
  //   title: "Anti-Surveillance",
  //   description:
  //     "Our commitment to not profiling, tracking, or manipulating user choices.",
  //   button: "View Principles",
  //   href: "#",
  //   icon: EyeOff,
  // },
  {
    title: "Accessibility",
    description:
      "Standards, inclusive design, and conformance commitments.",
    button: "View Conformance",
    href: "/accessibility",
    icon: Accessibility,
  },
  {
    title: "Human Controls",
    description:
      "How human authority, review, and appeals are operationalized.",
    button: "View Controls",
    href: "/human-in-command",
    icon: UserCheck,
  },
  {
    title: "System Status",
    description:
      "Real-time status, uptime, incident history, and notifications.",
    button: "View Live Status",
    href: "/system-status",
    icon: Activity,
  },
];

export default function TrustCenter() {
  return (
    <section
      id="trust-center"
      className="bg-white py-16 dark:bg-slate-950 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-slate-950 dark:text-white">
            Trust Center
          </h2>

          <p className="mt-3 text-lg text-zinc-700 dark:text-slate-300">
            Core trust destinations available now. Each page is owned, dated,
            and evidentiary.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trustCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-xl border border-neutral-200/60 bg-slate-50 p-8 transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#44B97A] text-white">
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-semibold text-slate-950 dark:text-white">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-4 min-h-[72px] text-sm leading-6 text-zinc-700 dark:text-slate-300">
                  {card.description}
                </p>

                {/* Link */}
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[#44B97A] transition-colors hover:text-[#3EAA70]"
                >
                  {card.button}

                  <ArrowRight
                    className="h-4 w-4"
                    strokeWidth={2.5}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}